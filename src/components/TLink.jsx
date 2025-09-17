"use client";
import { useRouter, usePathname } from "next/navigation";

export default function TLink({ href, children, title, ...props }) {
    const router = useRouter();
    const pathname = usePathname();
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const handleClick = async (e) => {
        e.preventDefault();
        if (pathname === href) return;

        const loader = document.getElementById("loader");
        const titleEl = document.querySelector("#loader .titles h1");
        titleEl.innerHTML = title || "";
        loader.style.display = "flex";
        await sleep(100);
        loader.style.opacity = "1";

        await sleep(200);
        router.push(href);
        window.scrollTo(0, 0);
    };

    return (
        <a href={href} onClick={handleClick} {...props}>
            {children}
        </a>
    );
}
