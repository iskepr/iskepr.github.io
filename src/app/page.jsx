"use client";
import Image from "next/image";
import Footer from "@/components/footer";
import Contact from "@/layout/Home/contact";
import links from "@/data/mylinks.json";
import Loader from "@/components/loader";
import First from "@/layout/Home/first";

import { useEffect, useRef, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import AboutS from "@/layout/Home/about";
import Projects from "@/layout/Home/projects";
import TLink from "@/components/TLink";
import Link from "next/link";
import { isPhone } from "@/utils/isPhone";

export default function Home() {
    return isPhone ? <HomeClient /> : <HomeClient />;
}
function HomeClient() {
    useEffect(() => {
        Aos.init();
    }, []);

    const prograss = useRef(null);
    const linksdiv = useRef(null);
    const contactSection = useRef(null);

    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        if (!contactSection.current) return;
        const handleScroll = () => {
            const contactTop =
                contactSection.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (contactTop < windowHeight) {
                prograss.current.style.opacity = 0;
                linksdiv.current.style.opacity = 0;
            } else {
                prograss.current.style.opacity = 1;
                linksdiv.current.style.opacity = 1;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const updateProgress = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const scrolled = (scrollTop / docHeight) * 100;
            setScrollProgress(scrolled);
        };

        window.addEventListener("scroll", updateProgress);
        return () => window.removeEventListener("scroll", updateProgress);
    }, []);

    return (
        <div className="Home page">
            <Loader titles={["الرئيسية"]} />
            <div
                ref={prograss}
                className="prograsbar GlassBG flex items-center gap-3 rounded-4xl w-3/4 !p-3 fixed bottom-10 right-1/2 translate-x-1/2 z-10"
                style={{
                    animation: "flyb 3s ease-in infinite alternate-reverse",
                }}
            >
                <Link href={"/#Contact"}>التواصل</Link>
                <div className="brog-container flex-1 h-0.5 bg-gray-500 rounded overflow-hidden">
                    <div
                        className="brog bg-green-800 h-full rounded"
                        style={{
                            width: `${scrollProgress}%`,
                            transition: "width 0.1s linear",
                        }}
                    ></div>
                </div>
            </div>

            <div
                ref={linksdiv}
                className="links flex flex-col-reverse gap-2 fixed z-20 right-7 top-[30%] transform translate-y-1/2"
            >
                {links.map((link, i) => (
                    <a href={link.link} target="_blank" key={i}>
                        <Image src={link.img} alt="" width={30} height={30} />
                    </a>
                ))}
            </div>

            <First />
            <AboutS />

            <section id="projects" className="!p-10">
                <h2 className="text-center text-6xl font-bold max-md:text-4xl">
                    أخر أعمالي
                </h2>
                <Projects />
                <div className="flex justify-center w-full">
                    <TLink
                        href="/Work"
                        title={"• أعمالي"}
                        ref={contactSection}
                        className="GlassBG !px-10 !py-5 text-1xl font-bold !rounded-full "
                    >
                        المزيد من أعمالي
                    </TLink>
                </div>
            </section>

            <section id="Contact" className="flex flex-col justify-between">
                <Contact />
                <Footer />
            </section>
        </div>
    );
}
