"use client";
import Image from "next/image";
import links from "@/data/mylinks.json";
import { useEffect } from "react";
import sendTelegramMessage from "@/utils/sendTelegram";

export default function Footer() {
    async function getip() {
        try {
            const response = await fetch("https://api.ipify.org?format=json");
            const data = await response.json();
            const ip = data.ip;

            let country = "Unknown";
            try {
                const locationResponse = await fetch(
                    `https://ipinfo.io/${ip}/json`,
                    {
                        signal: AbortSignal.timeout(3000),
                    }
                );
                if (locationResponse.ok) {
                    const locationData = await locationResponse.json();
                    country = `${locationData.country}/${locationData.city}/${locationData.timezone}`;
                }
            } catch (err) {
                console.warn("Location fetch timeout or error:", err);
            }

            return [country, ip];
        } catch (error) {
            console.error("Error fetching IP:", error);
            return ["Unknown", "Unknown"];
        }
    }

    useEffect(() => {
        if (process.env.NODE_ENV === "production") {
            const hasSent = sessionStorage.getItem("message_sent");
            if (!hasSent) {
                sessionStorage.setItem("message_sent", "true");
                (async () => {
                    try {
                        const ipData = await getip();
                        const url = window.location.href.replace(
                            "https://skepr.vercel.app",
                            ""
                        );
                        await sendTelegramMessage(false, [...ipData, url]);
                    } catch (e) {
                        console.error(e);
                    }
                })();
            }
        }
    }, []);

    return (
        <footer className="flex items-center justify-between px-10! pb-5! max-md:flex-col-reverse max-md:gap-2">
            <h2 className="text-2xl max-md:text-[1.2rem]">
                تم تطوير الموقع بواسطتي{" "}
                <span className="text-(--lightgreen) font-bold">
                    @سكيبر
                </span>
            </h2>
            <div className="links flex gap-2">
                {links.map((link, i) => (
                    <a href={link.link} target="_blank" key={i}>
                        <Image src={link.img} alt="" width={35} height={35} />
                    </a>
                ))}
            </div>
        </footer>
    );
}
