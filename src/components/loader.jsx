"use client";
import { useEffect, useState } from "react";

const hi = [
    "السلام عليكم",
    "Peace be upon you",
    "平和があなたにありますように",
    "Que la paix soit sur vous",
    "La paz sea contigo",
    "La pace sia su di te",
    "Friede sei mit dir",
    "愿你平安",
    "Selamün aleyküm",
    "Assalamu alaikum",
    "Amani iwe juu yako",
];

export default function Loader({ titles = hi }) {
    const [current, setCurrent] = useState(0);
    const [showHi, setShowHi] = useState(true);

    useEffect(() => {
        if (sessionStorage.getItem("firstVisit")) setShowHi(false);
        else {
            sessionStorage.setItem("firstVisit", "true");
            setShowHi(true);
        }
    }, []);

    const activeList = showHi ? hi : titles;

    useEffect(() => {
        const t = setInterval(() => {
            setCurrent((prev) => (prev + 1) % activeList.length);
        }, 200);
        return () => clearInterval(t);
    }, [activeList]);

    useEffect(() => {
        const el = document.getElementById("loader");
        if (!el) return;
        const t = setTimeout(() => {
            el.style.opacity = "0";
            setTimeout(() => {
                el.style.display = "none";
            }, 1000);
        }, 1500);
        return () => clearTimeout(t);
    }, [showHi]);

    return (
        <div
            id="loader"
            className="flex items-center justify-center fixed w-full h-full z-30 transition duration-1000 ease-in-out bg-[#111]"
        >
            <div className="titles">
                <h1 className="text-5xl transition-opacity duration-500">
                    • {activeList[current]}
                </h1>
            </div>
        </div>
    );
}
