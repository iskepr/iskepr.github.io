import Image from "next/image";
import links from "@/data/mylinks.json";

export default function Footer() {
    return (
        <footer className="flex items-center justify-between !p-10">
            <h2 className="text-2xl">
                تم تطوير الموقع بواسطتي{" "}
                <span className="text-[#05FF2D] font-bold">@سكيبر</span>
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
