"use client";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import projects from "@/data/projects.json";
import Footer from "@/components/footer";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Contact from "@/layout/contact";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    const prograss = useRef(null);
    const contactSection = useRef(null);

    useEffect(async () => {
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

        async function getUserName() {
            const res = await fetch("https://facebook.com");
            if (!res) console.error(res);
            else console.log(res);
        }
        await getUserName();
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
            <section id="projects" className="m-10">
                <div className="prev w-70 h-50 sticky top-50 right-[50%] transform translate-x-1/2 overflow-hidden">
                    {projects.map((project, i) => (
                        <Image
                            src={project.الصور[0]}
                            key={i}
                            alt={project.الاسم}
                            width={100}
                            height={100}
                            className="w-full h-full object-cover"
                        />
                    ))}
                </div>
                {projects.map((project, i) => (
                    <div
                        key={i}
                        className="project border-b-1 flex items-center justify-between"
                    >
                        <div className="info">
                            <h2 className="text-3xl font-bold m-10">
                                {project.الاسم}
                            </h2>
                            <p className="text-2xl">{project.الوصف}</p>
                            <a
                                href={`https://github.com/iskepr/${project.اسم_المستودع}`}
                            >
                                المستودع
                            </a>
                        </div>
                        <Link href={`/${project.اسم_المستودع}`}>
                            <div className="rounded-3xl">
                                <Image
                                    src={project.الشعار}
                                    alt={project.الاسم}
                                    width={100}
                                    height={100}
                                />
                            </div>
                        </Link>
                    </div>
                ))}
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
