import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import projects from "@/data/projects.json";
import Footer from "@/components/footer";
import Loader from "@/components/loader";

import Swipe from "./layout/swipe";
import Desc from "./layout/desc";
import Sugest from "./layout/sugest";

export default async function Project({ params }) {
    const projectName = params.project;
    const projectData = await projects.find(
        (project) => project.اسم_المستودع === projectName
    );

    return (
        <div className="page">
            <Loader titles={[projectData.الاسم]} />
            <Header />
            <div className="topvid absolute top-0 left-0 z-[-1] w-2/3 max-md:w-[90%] max-sm:w-full">
                {projectData.الفديو ? (
                    <video
                        src={projectData.الفديو}
                        className="w-full"
                        autoPlay
                        loop
                    />
                ) : (
                    <Image
                        src={projectData.الصور[0]}
                        className="!w-full !h-full"
                        alt={projectData.الاسم}
                        width={100}
                        height={100}
                    />
                )}
            </div>
            <div className="flex justify-between items-center !mx-20 z-2">
                <div className="right flex gap-5">
                    <Image
                        src={projectData.الشعار}
                        width={200}
                        height={200}
                        alt={projectData.الاسم}
                        className="rounded-3xl"
                    />
                    <div className="!mt-5">
                        <h1 className="text-3xl font-bold">
                            {projectData.الاسم}
                        </h1>
                        <h1 className="text-2xl">{projectData.الوصف}</h1>
                    </div>
                </div>
                <Link
                    href={projectData.الرابط}
                    className="GlassBG !px-10 !py-2 text-[1rem] bg-gradient-to-tl from-[#0f01] to-[#0f03]"
                    style={{ boxShadow: "#0f01 0 0 50px 50px" }}
                >
                    {projectData.النوع === "تطبيق" ? "تحميل" : "القي نظرة"}
                </Link>
            </div>
            <Swipe
                projectData={projectData}
                withVid={projectData.الفديو === null ? false : true}
            />
            <Desc projectData={projectData} />
            <section className="flex flex-col justify-between">
                <Sugest projects={projects} thisProj={projectData} />
                <Footer />
            </section>
        </div>
    );
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        project: project.اسم_المستودع,
    }));
}
