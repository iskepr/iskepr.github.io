"use client";

import { useState, useEffect } from "react";
import { createClient } from "../../utils/supabase/client";
import { useRouter } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function ResetPass() {
    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);
    const router = useRouter();

    const supabase = createClient();

    useEffect(() => {
        const checkSession = async () => {
            const {
                data: { session },
            } = await supabase.auth.getSession();

            if (!session) {
                setError(
                    "الجلسة غير صالحة. من فضلك اطلب رابط جديد من صفحة 'نسيت كلمة المرور'.",
                );
            }
        };
        checkSession();
    }, []);

    const validatePassword = (value) => {
        if (!value || !/[a-z]/.test(value)) {
            return "الازم حرف انجليزي صغير واحد على الاقل";
        }
        if (!/[A-Z]/.test(value)) {
            return "لازم حرف انجليزي واحد كبير على الاقل";
        }
        if (!/[0-9]/.test(value)) {
            return "اكتب رقم واحد على الأقل";
        }
        if (value.length < 8) {
            return "لازم تكون 8 حروف على الاقل";
        }
        return "";
    };

    const handlePasswordChange = (e) => {
        const val = e.target.value;
        setPassword(val);
        setPasswordError(validatePassword(val));
    };

    async function handlePasswordUpdate(e) {
        e.preventDefault();

        const currentError = validatePassword(password);
        if (currentError) {
            setPasswordError(currentError);
            return;
        }

        setError(null);
        setMessage(null);
        setLoading(true);

        const { error: supabaseError } = await supabase.auth.updateUser({
            password: password,
        });

        setLoading(false);

        if (supabaseError) {
            setError(supabaseError.message);
        } else {
            setMessage(
                "تم تغيير كلمة المرور بنجاح! جاري تحويلك للصفحة الرئيسية...",
            );
            setPassword("");
            setTimeout(() => {
                router.replace("/");
                window.location.href = "hodor://";
            }, 2000);
        }
    }

    const isButtonDisabled =
        loading ||
        (error && error.includes("الجلسة غير صالحة")) ||
        !password ||
        passwordError !== "";

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
                            onChange={handlePasswordChange}
                            placeholder="اكتب كلمة المرور الجديدة"
                            className="w-full"
                            style={{
                                padding: "8px",
                                width: "100%",
                                border: passwordError
                                    ? "1px solid red"
                                    : "1px solid #ccc",
                                borderRadius: "4px",
                                outline: "none",
                            }}
                        />
                        {passwordError && (
                            <span
                                style={{
                                    color: "red",
                                    fontSize: "12px",
                                    marginTop: "4px",
                                    display: "block",
                                }}
                            >
                                {passwordError}
                            </span>
                        )}
                    </div>

                    {error && !error.includes("الجلسة غير صالحة") && (
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

                    {error && error.includes("الجلسة غير صالحة") && (
                        <p
                            style={{
                                color: "red",
                                marginBottom: "10px",
                                textAlign: "center",
                                fontSize: "0.9rem",
                                fontWeight: "bold",
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
                        disabled={isButtonDisabled}
                        className="GlassBG px-10! py-2! text-[1rem] text-center bg-linear-to-tl from-[#0f01] to-[#0f03] w-full max-md:mt-5!"
                        style={{
                            boxShadow: "#0f01 0 0 50px 50px",
                            cursor: isButtonDisabled
                                ? "not-allowed"
                                : "pointer",
                            opacity: isButtonDisabled ? 0.6 : 1,
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
