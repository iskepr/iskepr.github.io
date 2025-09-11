"use client";
import { useEffect, useState } from "react";

const hi = [
    "السلام عليكم",
    "Peace be upon you",
    "Que la paix soit sur vous",
    "La paz sea contigo",
    "La pace sia su di te",
    "Friede sei mit dir",
    "Selamün aleyküm",
    "平和があなたにありますように",
    "Assalamu alaikum",
    "Amani iwe juu yako",
    "愿你平安",
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
        }, 2000);
        return () => clearInterval(t);
    }, [activeList]);

    useEffect(() => {
        const el = document.getElementById("lodaer");
        if (!el) return;

        const t = setTimeout(() => {
            el.style.backdropFilter = "blur(0)";
            el.style.opacity = "0";
            setTimeout(() => {
                el.style.display = "none";
            }, 1000);
        }, 1000);
        return () => clearTimeout(t);
    }, [showHi]);

    return (
        <div
            id="lodaer"
            className="flex items-center justify-center absolute w-full h-full backdrop-blur-3xl z-30 transition-opacity duration-500"
        >
            <div className="titles">
                <h1 className="text-5xl transition-opacity duration-500">
                    • {activeList[current]}
                </h1>
            </div>
        </div>
    );
}
