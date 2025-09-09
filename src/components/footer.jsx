import Image from "next/image";
export default function Footer() {
    const links = [
        { link: "https://www.facebook.com/itskepr/", img: "/svg/facebook.svg" },
        {
            link: "https://www.instagram.com/itskepr/",
            img: "/svg/instagram.svg",
        },
        { link: "https://www.youtube.com/@iskepr/", img: "/svg/youtube.svg" },
        { link: "https://t.me/Iskepr", img: "/svg/telegram.svg" },
        { link: "https://github.com/iskepr", img: "/svg/github.svg" },
    ];
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
