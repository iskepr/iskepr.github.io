"use client";
import { useEffect } from "react";

export default function Desc({ projectData }) {
    let description;
    useEffect(() => {
        const getData = async () => {
            const res = await fetch(projectData.ريدمي);
            description = await res.text();
            console.log("--------------------", description)
        };
        getData();
    }, [projectData.ريدمي]);
    return (
        <div className="GlassBG !m-20 !p-5 !rounded-3xl bg-gradient-to-tl from-[#0000] to-[#0f01]">
            {description ? description : projectData.الشرح}
        </div>
    );
}
