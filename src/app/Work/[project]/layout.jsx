import projects from "@/data/projects.json";
import Project from "./page";

export async function generateMetadata({ params }) {
    const { project: projectName } = await params;

    const project = projects.find((proj) => proj.repoName === projectName);

    if (!project) {
        return { title: "مشروع غير موجود" };
    }

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
            project.الادوات +
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

export default async function ProjectPage({ params }) {
    const { project: projectName } = await params;

    const projectData = projects.find(
        (project) => project.repoName == projectName
    );

    return <Project project={projectData} projects={projects} />;
}
