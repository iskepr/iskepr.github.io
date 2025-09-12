import Header from "@/components/header";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";

export default function First() {
    return (
        <section id="first" className="relative overflow-hidden">
            <Header />
            <Parallax
                speed={-20}
                className="absolute w-full flex justify-center right-1/2 transform top-[10%] translate-x-1/2"
            >
                <Image
                    className="ImageName w-3/4 max-md:w-[90%]"
                    src="/imgs/myname.svg"
                    alt="محمد سيد سكيبر"
                    width={300}
                    height={300}
                />
            </Parallax>
            <Parallax speed={-10} className="me">
                <Image
                    src="/imgs/me.png"
                    className="!w-110 !h-auto max-md:w-300"
                    width={300}
                    height={300}
                    alt="Me"
                />
            </Parallax>
        </section>
    );
}
