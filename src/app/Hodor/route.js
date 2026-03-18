import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request) {
    const { searchParams, origin } = new URL(request.url);
    const code = searchParams.get("code");
    const next = "/Hodor/ResetPass";

    if (!code) {
        return NextResponse.json({ error: "No code provided in URL" });
    }

    const cookieStore = cookies();
    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        {
            cookies: {
                get(name) {
                    return cookieStore.get(name)?.value;
                },
                set(name, value, options) {
                    cookieStore.set({ name, value, ...options });
                },
                remove(name, options) {
                    cookieStore.set({ name, value: "", ...options });
                },
            },
        }
    );

    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (error) {
        return NextResponse.json({
            status: "Error",
            message: error.message,
            hint: "لو الرسالة بتقول verifier mismatch يبقى المشكلة في طريقة إرسال الايميل",
        });
    }

    // لو نجح، هيرجعك للصفحة
    return NextResponse.redirect(`${origin}${next}`);
}
