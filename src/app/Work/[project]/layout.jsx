import projects from "@/data/projects.json";
import Project from "./page";

export async function generateMetadata({ params }) {
    const project = projects.find(
        (proj) => proj.اسم_المستودع === params.project
    );

    return {
        title: project ? project.الاسم : "مشروع غير موجود",
        icons: {
            icon: project.الشعار,
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
