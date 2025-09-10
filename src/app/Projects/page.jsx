import Link from "next/link";
import Image from "next/image";

import projects from "@/data/projects.json";

export default function Projects() {
    return (
        <div className="page">
            {projects.map((project, i) => (
                <h1>{project.الاسم}</h1>
            ))}
        </div>
    );
}
