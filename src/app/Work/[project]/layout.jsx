import projects from "@/data/projects.json";
import Project from "./page";

export async function generateMetadata({ params }) {
    const project = projects.find(
        (proj) => proj.اسم_المستودع === params.project
    );
    const title = project ? project.الاسم : "مشروع غير موجود";
    const description = project ? project.الوصف : "وصف المشروع غير موجود";

    return {
        title,
        icons: {
            icon: project.الشعار,
        },
        description,
        keywords:
            project.الاسم + project.الادوات + project.الشرح + project.النوع,
        openGraph: {
            title,
            description,
            type: "website",
            locale: "ar",
            images: [
                {
                    url: project.الصور[0],
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
        twitter: {
            title,
            description,
            card: "summary_large_image",
            images: [project.الصور[0]],
        },
    };
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        project: project.اسم_المستودع,
    }));
}

export default function ProjectPage({ params }) {
    const projectData = projects.find(
        (project) => project.اسم_المستودع === params.project
    );

    return <Project projectData={projectData} projects={projects} />;
}
