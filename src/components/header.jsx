import Link from "next/link";

export default function Header() {
    return (
        <header className="z-10 text-1xl font-bold flex w-full justify-evenly items-center !pt-7 !pb-7 font-[za3tar]">
            <Link href="#Contact">التواصل</Link>
            <Link href="/" className="text-2xl">سكيبر</Link>
            <Link href="#projects">اعمالي</Link>
        </header>
    );
}
