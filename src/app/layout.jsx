import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "@/scss/globals.css";
import "@/scss/Main.scss";
import Script from "next/script";

import { ReactLenis } from "@/utils/lenis";

const ibm = IBM_Plex_Sans_Arabic({
    variable: "--font-ibm-sans",
    subsets: ["latin", "arabic"],
    weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const title = "مُحَمّد سِــــــــيّد";

export const metadata = {
    metadataBase: new URL("https://iskepr.github.io"),
    title: {
        default: title,
        template: "%s | " + title,
    },
    description:
        "أنا محمد سيد، مطور مواقع محترف منذ عام 1442 هـ، ومطور تطبيقات Flutter منذ عام 1445 هـ. أُحب بناء مشاريع حديثة وسريعة تدعم العربية وتخدم المستخدم العربي.",
    keywords: [
        "محمد سيد",
        "محمد سكيبر",
        "مطوّر مواقع",
        "مطور فلاتر",
        "مطور ويب",
        "مطور تطبيقات",
        "محمد سيد مصر",
        "سكبر",

        "Mohamed Sayed",
        "Mohamed Sayed AbdElalem",
        "Mohamed Sayed AbdElalem web developer Egypt",
        "Mohamed Skepr",
        "Web Developer",
        "Flutter Developer",
        "App Developer",
        "Web Developer Egypt",
        "Flutter Developer Egypt",
        "App Developer Egypt",
        "Web Developer Egypt",
        "Flutter Developer Egypt",
        "App Developer Egypt",
        "Skepr",
    ],
    authors: [{ name: "محمد سيد", url: "https://iskepr.github.io" }],
    publisher: title,
    openGraph: {
        title: title,
        description:
            "أنا محمد سيد، مطور مواقع محترف منذ عام 1442 هـ، ومطور تطبيقات Flutter منذ عام 1445 هـ.",
        type: "website",
        locale: "ar_EG",
        url: "https://iskepr.github.io",
        images: [
            {
                url: "https://iskepr.github.io/imgs/ScreenShot.webp",
                width: 1200,
                height: 630,
                alt: title,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: title,
        description: "أنا محمد سيد، مطور مواقع محترف ومطور تطبيقات Flutter.",
        images: ["https://iskepr.github.io/imgs/ScreenShot.webp"],
    },
    alternates: {
        canonical: "https://iskepr.github.io",
    },
    robots: {
        index: true,
        follow: true,
    },
    verification: {
        google: "2GOHGN8OibdcrOzxm623zqvHhH4RQ3907cSktTndfec",
    },
};

export default function RootLayout({ children }) {
    const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

    return (
        <html lang="ar" dir="rtl">
            <body className={ibm.variable}>
                <ReactLenis root>{children}</ReactLenis>

                {GA_ID && (
                    <>
                        <Script
                            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
                            strategy="afterInteractive"
                        />
                        <Script
                            id="google-analytics"
                            strategy="afterInteractive"
                        >
                            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');`}
                        </Script>
                    </>
                )}
            </body>
        </html>
    );
}
