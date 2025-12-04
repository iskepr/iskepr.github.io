"use client";

import { useState, useEffect } from "react";
import { createClient } from "../../utils/supabase/client"; // تأكد ان ده مسار ملف الـ client.js
import { useRouter } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function ResetPass() {
    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);
    const router = useRouter();

    const supabase = createClient();

    useEffect(() => {
        // أهم خطوة: نتأكد ان الوسيط (route.js) عمل شغله واليوزر معاه جلسة
        const checkSession = async () => {
            const {
                data: { session },
            } = await supabase.auth.getSession();

            if (!session) {
                // لو مفيش جلسة، يبقى الرابط بايظ أو المستخدم مدخلش منه
                setError(
                    "الجلسة غير صالحة. من فضلك اطلب رابط جديد من صفحة 'نسيت كلمة المرور'."
                );
            }
        };
        checkSession();
    }, []);

    async function handlePasswordUpdate(e) {
        e.preventDefault();
        setError(null);
        setMessage(null);
        setLoading(true);

        if (!password || password.length < 6) {
            setError("كلمة المرور يجب أن تكون 6 أحرف على الأقل");
            setLoading(false);
            return;
        }

        const { error } = await supabase.auth.updateUser({
            password: password,
        });

        setLoading(false);

        if (error) {
            setError(error.message);
        } else {
            setMessage(
                "تم تغيير كلمة المرور بنجاح! جاري تحويلك للصفحة الرئيسية..."
            );
            setPassword("");
            // نرجعه للصفحة الرئيسية بعد ثانيتين
            setTimeout(() => {
                router.replace("/");
            }, 2000);
        }
    }

    return (
        <div
            style={{
                direction: "rtl",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Header />

            <main
                style={{
                    flex: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "20px",
                }}
            >
                <form
                    onSubmit={handlePasswordUpdate}
                    style={{
                        maxWidth: "400px",
                        width: "100%",
                        padding: "20px",
                        border: "1px solid #ddd",
                        borderRadius: "8px",
                    }}
                >
                    <h1 style={{ marginBottom: "20px", textAlign: "center" }}>
                        تغيير كلمة المرور
                    </h1>

                    <div style={{ marginBottom: "15px" }}>
                        <label
                            style={{ display: "block", marginBottom: "5px" }}
                        >
                            كلمة المرور الجديدة
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="اكتب الباسورد الجديد"
                            className="w-full"
                            style={{
                                padding: "8px",
                                width: "100%",
                                border: "1px solid #ccc",
                                borderRadius: "4px",
                            }}
                        />
                    </div>

                    {error && (
                        <p
                            style={{
                                color: "red",
                                marginBottom: "10px",
                                textAlign: "center",
                                fontSize: "0.9rem",
                            }}
                        >
                            {error}
                        </p>
                    )}
                    {message && (
                        <p
                            style={{
                                color: "green",
                                marginBottom: "10px",
                                textAlign: "center",
                                fontSize: "0.9rem",
                            }}
                        >
                            {message}
                        </p>
                    )}

                    <button
                        type="submit"
                        // لو مفيش جلسة (error موجود) نوقف الزرار عشان ميتعبش نفسه
                        disabled={
                            loading ||
                            (error && error.includes("الجلسة غير صالحة"))
                        }
                        className="GlassBG !px-10 !py-2 text-[1rem] text-center bg-gradient-to-tl from-[#0f01] to-[#0f03] w-full max-md:!mt-5"
                        style={{
                            boxShadow: "#0f01 0 0 50px 50px",
                            cursor:
                                loading ||
                                (error && error.includes("الجلسة غير صالحة"))
                                    ? "not-allowed"
                                    : "pointer",
                            opacity:
                                loading ||
                                (error && error.includes("الجلسة غير صالحة"))
                                    ? 0.6
                                    : 1,
                        }}
                    >
                        {loading ? "جاري التحديث..." : "حفظ التغييرات"}
                    </button>
                </form>
            </main>

            <Footer />
        </div>
    );
}
