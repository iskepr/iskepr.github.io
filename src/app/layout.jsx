import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "@/scss/globals.css";
import "@/scss/Main.scss";

import ParallaxWrapper from "@/components/ParallaxWrapper";

const ibm = IBM_Plex_Sans_Arabic({
    variable: "--font-ibm-sans",
    subsets: ["latin", "arabic"],
    weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata = {
    title: "مُحمد سَــــــــيد",
    description:
        "السلام عليكم انا مُحمد سيد مُطور مواقع منذ 1442 هـ ومُطور تطبيقات باستخدام فلاتر منذ 1445 هـ",
    keywords:
        "محمد سيد , محمد سيد عبدالعليم , محمد سيد عبدالعليم محمود , سكيبر , محمد سكيبر , محمد سيد سكيبر , مصر , الزاوية الحمرء ,محمد سيد حاج , محمد السيد , محد سيد ازاوية الحمراء , Mohamed , Mohamed Sayed , Mohamed Skepr , Mohamed Sayed Skepr , Mohamed Sayed AbdElalem ,iskrpr , itskepr, qwsdxccc",
};

export default function RootLayout({ children }) {
    return (
        <html lang="ar" dir="rtl">
            <body className={ibm.variable}>
                <ParallaxWrapper>{children}</ParallaxWrapper>
            </body>
        </html>
    );
}
