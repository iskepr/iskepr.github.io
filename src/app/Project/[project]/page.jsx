import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import projects from "@/data/projects.json";
import Footer from "@/components/footer";
import Loader from "@/components/loader";

export default async function Project({ params }) {
    const projectName = params.project;
    const projectData = await projects.find(
        (project) => project.اسم_المستودع === projectName
    );
    return (
        <div className="page">
            <Loader titles={[projectData.الاسم]} />
            <Header />
            <div className="top">
                <div className="right">
                    <Image
                        src={projectData.الشعار}
                        width={300}
                        height={300}
                        alt={projectData.الاسم}
                    />
                    <h1>{projectData.الاسم}</h1>
                </div>
                <Link href={projectData.الرابط}>
                    {projectData.النوع === "تطبيق" ? "تحميل" : "القي نظرة"}
                </Link>
            </div>
            <div className="Imgs flex">
                {projectData.الصور.map((item, i) => {
                    return (
                        <Image
                            key={i}
                            alt={
                                projectData.الاسم +
                                "" +
                                projectData.الرابط +
                                " skepr محمد سكيبر"
                            }
                            src={item}
                            width={300}
                            height={300}
                            className="rounded-2xl m-10"
                        />
                    );
                })}
            </div>
            <div className="desc">{projectData.الشرح}</div>

            <Footer />
        </div>
    );
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        project: project.اسم_المستودع,
    }));
}
