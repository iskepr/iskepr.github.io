"use client";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Contact from "@/layout/Home/contact";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Aos from "aos";
import "aos/dist/aos.css";
import AboutS from "@/layout/Home/about";
import Projects from "@/layout/Home/projects";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    useEffect(() => {
        Aos.init();
    }, []);

    const prograss = useRef(null);
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
    }, []);

    return (
        <div className="Home page">
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
            <section id="first">
                <Header />
                <Image
                    className="absolute w-3/4 right-1/2 transform translate-x-1/2 top-1/5 ImageName"
                    src={"/imgs/myname.svg"}
                    alt="محمد سيد سكيبر"
                    width={300}
                    height={300}
                />
                <div className="me">
                    <Image src="/imgs/me.png" width={300} height={300} alt="" />
                </div>
            </section>

            <AboutS />
            <section id="projects" className="!p-10">
                <Projects />
            </section>

            <section
                ref={contactSection}
                id="Contact"
                className="flex flex-col justify-between"
            >
                <Contact />
                <Footer />
            </section>
        </div>
    );
}
