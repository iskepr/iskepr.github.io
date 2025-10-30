import Link from "next/link";
import TLink from "./TLink";

export default function Header() {
    return (
        <header className="z-10 text-1xl font-bold flex w-full justify-evenly items-center !pt-7 !pb-7 font-[za3tar] sticky top-0">
            <Link href="/#Contact">التواصل</Link>
            <TLink href="/" title={"• الرئيسية"} className="text-2xl">
                سكِيبر
            </TLink>
            <TLink href="/Work/" title={"• أعمالي"}>
                أعمالي
            </TLink>
        </header>
    );
}
