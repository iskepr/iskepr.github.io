import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import projects from "@/data/projects.json";
import Footer from "@/components/footer";

export default function Home() {
    return (
        <div className="Home page">
            <div className="prograsbar GlassBG flex items-center">
                <h5>التواصل</h5>
                <div className="brog bg-green-800 h-0.5 w-full"></div>
            </div>
            <div id="first">
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
            </div>
            <div id="projects" className="m-10">
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
                            <h2>{project.الاسم}</h2>
                            <p>{project.الوصف}</p>
                            <a
                                href={
                                    "https://github.com/iskepr/" +
                                    project.اسم_المستودع
                                }
                            >
                                المستودع
                            </a>
                        </div>
                        <Link href={"/" + project.اسم_المستودع}>
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
            </div>
            <Footer />
        </div>
    );
}
