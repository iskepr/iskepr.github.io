import projects from "@/data/projects.json";
import Project from "./page";

export async function generateMetadata({ params }) {
    const project = projects.find((proj) => proj.repoName === params.project);
    const title = project ? project.name : "مشروع غير موجود";
    const description = project ? project.descript : "وصف المشروع غير موجود";
    const img = "/imgs/" + project.repoName + "/1.webp";

    return {
        title,
        icons: {
            icon: "/imgs/" + project.repoName + "/icon.webp",
        },
        description,
        keywords:
            project.name +
            project.tools +
            project.fullDescript +
            project.projectType,
        openGraph: {
            title,
            description,
            type: "website",
            locale: "ar",
            images: [
                {
                    url: img,
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
            images: [img],
        },
    };
}

export default function ProjectPage({ params }) {
    const projectData = projects.find(
        (project) => project.repoName === params.project
    );

    console.log("----------------------------------------", projects);

    return <Project project={projectData} projects={projects} />;
}
