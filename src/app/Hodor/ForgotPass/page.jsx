"use client";

import { useState, useEffect, Suspense } from "react"; // 1. زودنا Suspense
import { createClient } from "../../utils/supabase/client";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useSearchParams } from "next/navigation";

// عملنا كومبوننت داخلي للفورم عشان نحطه جوه Suspense
function ForgotPasswordContent() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);

    const supabase = createClient();
    const searchParams = useSearchParams();

    useEffect(() => {
        const emailParam = searchParams.get("email");
        if (emailParam) {
            console.log("Email from URL:", emailParam); // Debugging
            setEmail(emailParam);
            handleReset(null, emailParam);
        }
    }, [searchParams]);

    const handleReset = async (e, emailOverride = null) => {
        if (e) e.preventDefault();

        // 2. هنا الزتونة: نتأكد ان فيه ايميل
        const emailToUse = emailOverride || email;

        if (!emailToUse) {
            setMessage({
                type: "error",
                text: "من فضلك أدخل البريد الإلكتروني",
            });
            return;
        }

        setLoading(true);
        setMessage(null);

        console.log("Sending Reset for:", emailToUse);

        const { error } = await supabase.auth.resetPasswordForEmail(
            emailToUse,
            {
                redirectTo: "https://skepr.vercel.app/Hodor/",
            }
        );

        setLoading(false);

        if (error) {
            console.error(error);
            setMessage({ type: "error", text: error.message });
        } else {
            setMessage({
                type: "success",
                text: "راجع بريدك الإلكتروني، بعتنالك projectURL!",
            });
        }
    };

    return (
        <div
            style={{
                maxWidth: "400px",
                width: "100%",
                padding: "20px",
                border: "1px solid #ddd",
                borderRadius: "8px",
            }}
        >
            <h1 style={{ marginBottom: "20px", textAlign: "center" }}>
                استعادة كلمة المرور
            </h1>

            <form onSubmit={(e) => handleReset(e)}>
                <div style={{ marginBottom: "15px" }}>
                    <label style={{ display: "block", marginBottom: "5px" }}>
                        البريد الإلكتروني
                    </label>
                    <input
                        type="email"
                        placeholder="أدخل بريدك الإلكتروني"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full"
                        style={{
                            padding: "8px",
                            width: "100%",
                            border: "1px solid #ccc",
                            borderRadius: "4px",
                        }}
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="GlassBG !px-10 !py-2 text-[1rem] text-center bg-gradient-to-tl from-[#0f01] to-[#0f03] w-full max-md:!mt-5"
                    style={{
                        boxShadow: "#0f01 0 0 50px 50px",
                        cursor: loading ? "not-allowed" : "pointer",
                        opacity: loading ? 0.7 : 1,
                    }}
                >
                    {loading ? "جاري الإرسال..." : "إرسال projectURL"}
                </button>
            </form>

            {message && (
                <p
                    style={{
                        marginTop: "15px",
                        color: message.type === "error" ? "red" : "green",
                        textAlign: "center",
                    }}
                >
                    {message.text}
                </p>
            )}
        </div>
    );
}

// 3. الكومبوننت الرئيسي بقى بيعمل Wrap
export default function ForgotPassword() {
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
                <Suspense fallback={<p>جاري التحميل...</p>}>
                    <ForgotPasswordContent />
                </Suspense>
            </main>
            <Footer />
        </div>
    );
}
