import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "@/scss/globals.css";
import "@/scss/Main.scss";
import Script from "next/script";
import { ReactLenis } from "@/utils/lenis";

const ibm = IBM_Plex_Sans_Arabic({
    variable: "--font-ibm-sans",
    subsets: ["latin", "arabic"],
    weight: ["100", "200", "300", "400", "500", "600", "700"],
    display: "swap",
});

const siteUrl = "https://skepr.me";
const siteName = "محمد سيد | Skepr";
const authorName = "محمد سيد";

export const metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: "محمد سيد | مطور ويب وتطبيقات Flutter",
        template: `%s | ${siteName}`,
    },
    description:
        "الموقع الرسمي لمحمد سيد (Skepr) - مطور Full-Stack وتطبيقات Flutter في مصر بخبرة تبدأ من عام 2021. متخصص في بناء مشاريع وتطبيقات حديثة وسريعة تدعم المستخدم العربي.",
    keywords: [
        "محمد سيد",
        "محمد سكيبر",
        "سكيبر",
        "سكبر",
        "مطور مواقع",
        "مطور فلاتر",
        "مطور ويب",
        "مطور تطبيقات مصر",
        "Mohamed Sayed",
        "Mohamed Skepr",
        "Skepr",
        "Flutter Developer Egypt",
        "Full Stack Developer Egypt",
        "Next.js Developer",
    ],
    authors: [{ name: authorName, url: siteUrl }],
    creator: authorName,
    publisher: siteName,
    category: "technology",
    icons: {
        icon: "/favicon.ico",
    },
    manifest: "/manifest.json",
    alternates: {
        canonical: "/",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    openGraph: {
        title: "محمد سيد (Skepr) | مطور ويب وتطبيقات Flutter",
        description:
            "استعراض مشاريع وخبرات محمد سيد في تطوير الويب وتطبيقات الهاتف الذكي وأدوات البرمجة مفتوحة المصدر.",
        type: "profile",
        locale: "ar_EG",
        url: siteUrl,
        siteName: siteName,
        images: [
            {
                url: "/imgs/ScreenShot.webp",
                width: 1200,
                height: 630,
                alt: "محمد سيد - مطور برمجيات",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "محمد سيد (Skepr) | Software Developer",
        description:
            "بورتفوليو محمد سيد - تطوير أنظمة الويب وتطبيقات الموبايل بأحدث التقنيات.",
        images: ["/imgs/ScreenShot.webp"],
    },
    verification: {
        google: "WGdu4J0bE4UoQjDqGf2Wao7ZB1y2aKielK_z-fPO8NI",
    },
};

export default function RootLayout({ children }) {
    const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Person",
                "@id": "https://skepr.me/#person",
                "name": "محمد سيد",
                "alternateName": [
                    "Mohamed Sayed",
                    "Mohamed Sayed AbdElalem",
                    "Skepr",
                    "محمد سكيبر"
                ],
                "url": "https://skepr.me",
                "image": {
                    "@type": "ImageObject",
                    "@id": "https://skepr.me/#personImage",
                    "url": "https://skepr.me/imgs/ScreenShot.webp",
                    "caption": "محمد سيد (Skepr)"
                },
                "jobTitle": "Full-Stack Software Developer",
                "nationality": {
                    "@type": "Country",
                    "name": "Egypt"
                },
                "description": "مطور برمجيات مصري متخصص في تطوير تطبيقات الويب باستخدام Next.js وتطبيقات الهاتف عبر Flutter وأنظمة المصادر المفتوحة.",
                "sameAs": [
                    "https://github.com/iskepr",
                    "https://linkedin.com/in/skepr",
                    "https://x.com/iskepr",
                    "https://facebook.com/iskepr/",
                    "https://instagram.com/itskepr/",
                    "https://youtube.com/@iskepr/",
                    "https://t.me/Iskepr",
                ],
                "knowsAbout": [
                    "Web Development",
                    "Flutter",
                    "Next.js",
                    "Dart",
                    "TypeScript",
                    "Mobile App Development",
                    "Linux"
                ]
            },
            {
                "@type": "WebSite",
                "@id": "https://skepr.me/#website",
                "url": "https://skepr.me",
                "name": "محمد سيد | Skepr",
                "description": "الموقع الرسمي للمطور محمد سيد (Skepr)",
                "publisher": {
                    "@id": "https://skepr.me/#person"
                },
                "inLanguage": "ar"
            }
        ]
    };

    return (
        <html lang="ar" dir="rtl">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className={ibm.variable}>
                <ReactLenis root>{children}</ReactLenis>

                {GA_ID && (
                    <>
                        <Script
                            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
                            strategy="afterInteractive"
                        />
                        <Script id="google-analytics" strategy="afterInteractive">
                            {`window.dataLayer = window.dataLayer || [];
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