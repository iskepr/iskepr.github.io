import Image from "next/image";
import Loader from "@/components/loader";

import projects from "@/data/projects.json";
import TLink from "@/components/TLink";

export default function Work() {
    return (
        <div className="page">
            <Loader titles={["أعمالي"]} />
            <div className="flex flex-col justify-center items-center">
                {projects.map((project, i) => (
                    <TLink
                        key={i}
                        href={"/Work/" + project.اسم_المستودع}
                        title={"• " + project.الاسم}
                        className="GlassBG !px-10 !py-5 text-1xl font-bold !rounded-full !mt-10"
                    >
                        {project.الاسم}
                    </TLink>
                ))}
            </div>
        </div>
    );
}
