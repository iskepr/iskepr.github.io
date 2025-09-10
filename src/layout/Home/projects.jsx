import Link from "next/link";
import Image from "next/image";

import projects from "@/data/projects.json";

export default function Projects() {
    return (
        <>
            <div className="prev w-70 h-50 sticky top-50 right-[50%] transform translate-x-1/2 overflow-hidden hidden">
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
            {projects.slice(0, 5).map((project, i) => (
                <div
                    key={i}
                    data-aos="fade-up"
                    className={`project ${
                        i !== 4 ? "border-b-1" : ""
                    } flex items-center justify-between !px-15 !py-5`}
                >
                    <div className="info">
                        <h2 className="text-3xl font-bold">{project.الاسم}</h2>
                        <p className="text-2xl">{project.الوصف}</p>
                        <a
                            href={`https://github.com/iskepr/${project.اسم_المستودع}`}
                        >
                            المستودع
                        </a>
                    </div>
                    <Link href={`/Project/${project.اسم_المستودع}`}>
                        <div className="rounded-3xl">
                            <Image
                                src={project.الشعار}
                                alt={project.الاسم}
                                width={100}
                                height={100}
                                className="rounded-3xl"
                            />
                        </div>
                    </Link>
                </div>
            ))}
        </>
    );
}
