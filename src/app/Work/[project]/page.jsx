"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Loader from "@/components/loader";
import Swipe from "./layout/swipe";
import Desc from "./layout/desc";
import Sugest from "./layout/sugest";

export default function Project({ project, projects }) {
    useEffect(() => {
        Aos.init();
    }, []);

    if (!project)
        return <div className="text-center p-10">المشروع غير موجود</div>;

    return (
        <div className="page">
            <Loader titles={[project.الاسم]} />
            <Header />

            <div className="topvid absolute top-0 left-0 z-[-1] w-2/3 max-md:w-[90%] max-sm:w-full">
                {project.الفديو ? (
                    <video
                        src={
                            "/imgs/" +
                            project.اسم_المستودع +
                            "/" +
                            project.الفديو
                        }
                        className="w-full"
                        autoPlay
                        loop
                    />
                ) : (
                    <Image
                        src={
                            "/imgs/" +
                            project.اسم_المستودع +
                            "/1.webp"
                        }
                        className="!w-full !h-full"
                        alt={project.الاسم}
                        width={100}
                        height={100}
                    />
                )}
            </div>

            <div className="flex justify-between items-center !mx-20 z-2 max-md:!mx-5 max-md:flex-col max-md:items-start">
                <div className="right flex gap-5 max-md:gap-2">
                    <Image
                        src={"/imgs/" + project.اسم_المستودع + "/icon.webp"}
                        width={200}
                        height={200}
                        alt={project.الاسم}
                        className="rounded-3xl max-md:!w-30"
                    />
                    <div className="!mt-5 flex flex-col w-fit max-md:!mt-1">
                        <h1 className="text-3xl font-bold w-fit max-md:text-2xl">
                            {project.الاسم}
                        </h1>
                        <h2 className="text-2xl max-md:text-xl">
                            {project.الوصف}
                        </h2>
                    </div>
                </div>

                <Link
                    href={project.الرابط}
                    className="GlassBG !px-10 !py-2 text-[1rem] text-center bg-gradient-to-tl from-[#0f01] to-[#0f03] max-md:w-full max-md:!mt-5"
                    style={{ boxShadow: "#0f01 0 0 50px 50px" }}
                >
                    {project.النوع === "تطبيق" ? "تحميل" : "القي نظرة"}
                </Link>
            </div>

            <Swipe project={project} withVid={!!project.الفديو} />
            <Desc project={project} />

            <section
                className="flex flex-col justify-between max-md:!min-h-fit"
                data-aos="fade-up"
            >
                <Sugest projects={projects} thisProj={project} />
                <Footer />
            </section>
        </div>
    );
}
