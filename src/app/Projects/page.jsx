import Link from "next/link";
import Image from "next/image";

import Loader from "@/components/loader";

import projects from "@/data/projects.json";

export default function Projects() {
    return (
        <div className="page">
            <Loader titles={["أعمالي"]} />
            {projects.map((project, i) => (
                <h1>{project.الاسم}</h1>
            ))}
        </div>
    );
}
