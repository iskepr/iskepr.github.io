"use client";
import { useEffect } from "react";

export default function Desc({ project }) {
    let description;
    useEffect(() => {
        const getData = async () => {
            const res = await fetch(project.readme);
            description = await res.text();
        };
        getData();
    }, [project.readme]);
    return (
        <div className="GlassBG !mx-20 !p-5 !rounded-2xl bg-gradient-to-tl from-[#0000] to-[#0f01] max-md:!mx-5">
            {description ? description : project.fullDescript}
        </div>
    );
}
