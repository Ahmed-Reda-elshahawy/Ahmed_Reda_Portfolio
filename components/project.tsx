import { ProjectsData } from "@/data/data"
import Image from "next/image";
import Link from "next/link";
import { FaCode, FaEye } from "react-icons/fa";

type projectProps = (typeof ProjectsData)[number];

export default function Project({ title, description, skills, projectImg, liveDemo, githupLink }: projectProps) {
    return (
        <div className="group bg-zinc-300 shadow-md mb-6 p-6 rounded-lg relative overflow-hidden text-center lg:w-[60rem] lg:h-[28rem] lg:text-start lg:flex md:gap-6">
            <article className="w-full flex flex-col items-center text-center lg:items-start lg:text-start lg:group-odd:items-end">
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
            <Image src={projectImg} alt="project image" quality={90} width={500} height={500}
                className="hidden lg:block lg:border lg:shadow-xl lg:saturate-150
                lg:absolute lg:-bottom-1 lg:-right-60 lg:w-[45rem]
                lg:object-cover lg:rounded-t-lg lg:transition-all
                lg:group-hover:scale-105 lg:group-hover:-rotate-1 
                lg:group-odd:-left-60 lg:group-odd:group-hover:rotate-1"
            />
            <div className="flex justify-center mt-5 gap-4 lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
                <Link href={githupLink}>
                    <FaCode className="text-xl w-8 h-8 bg-slate-100 rounded-full p-1 shadow text-gray-600 cursor-pointer" />
                </Link>
                {liveDemo &&
                    <Link href={liveDemo}>
                        <FaEye className="text-xl w-8 h-8 bg-slate-100 rounded-full p-1 shadow text-gray-600 cursor-pointer" />
                    </Link>
                }
            </div>
        </div>
    )
}