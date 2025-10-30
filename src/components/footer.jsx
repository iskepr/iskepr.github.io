import Image from "next/image";
import links from "@/data/mylinks.json";

export default function Footer() {
    return (
        <footer className="flex items-center justify-between !px-10 !pb-5 max-md:flex-col-reverse max-md:gap-2">
            <h2 className="text-2xl max-md:text-[1.2rem]">
                تم تطوير الموقع بواسطتي{" "}
                <span className="text-[var(--lightgreen)] font-bold">@سكيبر</span>
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
