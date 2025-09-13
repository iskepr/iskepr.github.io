import Image from "next/image";
import Loader from "@/components/loader";

import projects from "@/data/projects.json";
import TLink from "@/components/TLink";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { CodeXml } from "lucide-react";

export default function Work() {
    return (
        <div className="page">
            <Loader titles={["أعمالي"]} />
            <div className="noise h-[90vh] relative">
                <Header />
                <div className="flex flex-col justify-end items-center h-[40%]">
                    <h1 className="text-8xl text-center font-bold">أعمالي</h1>
                    <p className="text-center text-4xl !mt-7 text-[gray]">
                        اِنقُـــــل عَمَلَك لِـــمُستَـوى آخَــــر
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 justify-items-center p-5 !mx-10 !mt-[-15%]">
                {projects.map((project, i) => (
                    <div
                        key={i}
                        className="GlassBG shadow-lg rounded-xl overflow-hidden w-full h-full hover:scale-105 transition-transform relative"
                    >
                        <TLink
                            href={"/Work/" + project.اسم_المستودع}
                            title={project.الاسم}
                            className="block relative w-full h-70"
                        >
                            <Image
                                src={project.الصور[0]}
                                width={240}
                                height={240}
                                alt={project.الاسم}
                                className="w-full h-full object-cover absolute top-0 left-0"
                            />

                            <div
                                className="absolute w-full h-full z-5"
                                style={{
                                    background:
                                        "linear-gradient(0deg ,#000 10%, #0000 100%)",
                                }}
                            ></div>

                            <div className="absolute bottom-0 left-0 right-0 !p-3 z-10">
                                <h2 className="text-2xl font-semibold text-white drop-shadow-md">
                                    {project.الاسم}
                                </h2>
                                <h3 className="text-xl text-gray-200 drop-shadow-md">
                                    {project.الوصف}
                                </h3>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {project.الادوات.split(" ").map((t, i) => (
                                        <span
                                            key={i}
                                            className="!px-2 !py-1 !my-1 text-xs bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20"
                                        >
                                            • {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </TLink>
                    </div>
                ))}
            </div>

            <br />
            <section className="flex flex-col justify-between !pt-[15%]">
                <div className="h-full !mx-[15%] relative">
                    <div className="flex">
                        <div className="w-fit !my-10 !mx-5">
                            <h4 className="text-8xl font-bold">لنعمل معاً</h4>
                            <div className="flex items-center gap-5 w-full justify-between">
                                <h4 className="text-8xl font-bold">الآن</h4>
                                <Image
                                    src={"/imgs/me/mecofee.webp"}
                                    width={80}
                                    height={80}
                                    alt="محمد سيد سكيبر mohamed sayed skepr"
                                    className="rounded-full"
                                />
                                <div></div>
                            </div>
                        </div>
                        <CodeXml
                            size={130}
                            className="absolute -top-10 left-20"
                        />
                    </div>
                    <hr />
                    <TLink
                        href="/#Contact"
                        title="• الرئيسية"
                        className="lightBut cursor-pointer !top-2 text-2xl"
                    >
                        تواصل معي
                    </TLink>
                </div>
                <Footer />
            </section>
        </div>
    );
}
