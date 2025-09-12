"use client";
import Image from "next/image";
import Footer from "@/components/footer";
import Contact from "@/layout/Home/contact";
import links from "@/data/mylinks.json";
import Loader from "@/components/loader";
import First from "@/layout/Home/first";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Aos from "aos";
import "aos/dist/aos.css";
import AboutS from "@/layout/Home/about";
import Projects from "@/layout/Home/projects";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    useEffect(() => {
        Aos.init();
    }, []);

    const prograss = useRef(null);
    const linksdiv = useRef(null);
    const contactSection = useRef(null);

    useEffect(() => {
        gsap.to(prograss.current, {
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: contactSection.current,
                start: "top bottom",
                toggleActions: "play none none reverse",
            },
        });
        gsap.to(linksdiv.current, {
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: contactSection.current,
                start: "top bottom",
                toggleActions: "play none none reverse",
            },
        });
    }, []);

    return (
        <div className="Home page">
            <Loader titles={["الرئيسية"]} />
            <div
                ref={prograss}
                className="prograsbar GlassBG flex items-center rounded-4xl w-3/4 !p-3 fixed bottom-10 right-1/2 translate-x-1/2 z-10"
                style={{
                    animation: "flyb 3s ease-in infinite alternate-reverse",
                }}
            >
                <h5>التواصل</h5>
                <div className="brog bg-green-800 h-0.5 w-full"></div>
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

            <section id="projects" className="!p-10" ref={contactSection}>
                <h2 className="text-center text-6xl font-bold max-md:text-4xl">
                    أخر اعمالي
                </h2>
                <Projects />
                <div className="flex justify-center w-full">
                    <Link
                        href="/Projects"
                        className="GlassBG !px-10 !py-5 text-1xl font-bold !rounded-full "
                    >
                        المزيد من اعمالي
                    </Link>
                </div>
            </section>

            <section id="Contact" className="flex flex-col justify-between">
                <Contact />
                <Footer />
            </section>
        </div>
    );
}
