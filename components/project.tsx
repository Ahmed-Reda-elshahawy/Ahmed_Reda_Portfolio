import { ProjectsData } from "@/data/data"
import Image from "next/image";

type projectProps = (typeof ProjectsData)[number];

export default function Project({ title, description, skills, projectImg }: projectProps) {
    return (
        <div className="bg-zinc-300 shadow-md mb-6 p-4 rounded-lg text-center mx-auto relative overflow-hidden lg:max-w-[60rem] lg:h-[28rem] lg:text-start lg:flex md:gap-6">
            <article className="w-full flex flex-col items-center text-center lg:items-start lg:text-start">
                <div className="mb-5">
                    <h3 className="text-xl font-semibold mb-3">{title}</h3>
                    <p className="sm:max-w-[30rem] lg:max-w-[20rem]">{description}</p>
                </div>
                <ul className="flex flex-wrap justify-center gap-2 w-80 mt-4 lg:mt-auto lg:justify-start">
                    {
                        skills.map((skill) => (
                            <li key={skill} className=" px-3 py-1 bg-zinc-800/85 text-zinc-300 font-medium w-fit rounded-full shadow-lg">{skill}</li>
                        ))
                    }
                </ul>
            </article>
            <Image src={projectImg} alt="project image" quality={90} width={500} height={500} className="hidden lg:block lg:border lg:shadow-xl lg:absolute lg:-bottom-1 lg:-right-56 lg:w-[50rem] lg:object-cover lg:rounded-t-lg lg:hover:scale-105 lg:hover:-rotate-1 lg:brightness-90 lg:transition-all" />
        </div>
    )
}