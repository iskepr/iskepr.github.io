import TLink from "@/components/TLink";
import Image from "next/image";

export default function Sugest({ projects, thisProj }) {
    const filteredProjects = projects.filter(
        (project) => project.اسم_المستودع !== thisProj.اسم_المستودع
    );
    const randomIndex = Math.floor(Math.random() * filteredProjects.length);
    const project = filteredProjects[randomIndex];

    return (
        <div className="flex items-center justify-center flex-col h-[85vh] !mx-20 !pt-10 max-md:h-fit max-md:!mb-5 max-md:!mx-5">
            <div className="relative group  overflow-hidden w-full border-b-2 border-gray-500">
                <TLink
                    href={"/Work/" + project.اسم_المستودع}
                    title={"• " + project.الاسم}
                    className="flex items-center justify-center flex-col"
                >
                    <h3 className="text-9xl font-bold translate-y-10 z-0  group-hover:text-gray-500 max-md:text-[360%]">
                        {project.الاسم}
                    </h3>
                    <Image
                        src={project.الصور[0]}
                        width={400}
                        height={400}
                        alt={project.الاسم}
                        className="rounded-0 translate-y-[2rem] group-hover:scale-110 group-hover:translate-y-0 group-hover:rounded-t-3xl max-md:!w-2/3"
                    />
                </TLink>
            </div>

            <TLink
                href="/Work"
                title={"• أعمالي"}
                className="GlassBG !px-10 !py-5 text-1xl font-bold !rounded-full !mt-10"
            >
                المزيد من اعمالي
            </TLink>
        </div>
    );
}
