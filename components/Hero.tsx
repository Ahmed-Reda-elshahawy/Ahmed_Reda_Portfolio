'use client';

import Image from "next/image"
import myImg from "@/public/me.jpg";
import { IoIosArrowForward, IoLogoGithub, IoLogoLinkedin, IoMdDownload } from "react-icons/io";
import { useSectionInView } from "@/lib/hooks";

export default function Hero() {
    const { ref } = useSectionInView("About");

    return (
        <section ref={ref} className="mx-10 pt-40 text-center" id="about">
            <article>
                <Image src={myImg} alt="my picture" priority={true} className="w-32 h-32 rounded-full object-cover border-8 border-zinc-300 shadow-lg mx-auto" />
                <h2 className="mt-3 mb-1 font-medium text-zinc-700 text-xl tracking-wide">Ahmed Reda Fawzi</h2>
                <h3 className="mb-4 font-medium text-zinc-500 ">Frontend Developer</h3>
                <p className="my-3 font-medium text-zinc-600 max-w-[50rem] mx-auto">
                    ″ <span className="font-bold text-zinc-700">Recent Computer Science graduate and highly motivated Front-End Developer</span> with a strong focus on React development.
                    I possess proven expertise in building responsive,
                    user-friendly web applications using <span className="font-bold text-zinc-700">React, Redux, Next.js, TypeScript, and unit testing. </span>
                    Successfully developed a real-time chat application and a fully functional e-commerce site,
                    demonstrating my proficiency in third-party integrations and complex state management.
                    Eager to contribute to a dynamic and fast-paced environment while continuously advancing my technical skills and knowledge. ″
                </p>
            </article>
            <div className="flex flex-col items-center pt-12">
                <div className="flex items-center gap-3 pb-8">
                    <button className="px-4 py-2 bg-zinc-800 text-zinc-300 rounded-xl flex items-center gap-2 hover:scale-105 transition-all">
                        <span>Contact me here</span>
                        <IoIosArrowForward />
                    </button>
                    <a href="/Ahmed_Reda-Frontend_React.pdf" download className="px-4 py-2 bg-zinc-300 text-zinc-800 rounded-xl flex items-center gap-2 hover:scale-105 transition-all">
                        <span>Download CV</span>
                        <IoMdDownload />
                    </a>
                </div>
                <div className="flex items-center gap-3">
                    <a href="https://www.linkedin.com/in/ahmed-reda-elshahawy/" target="blank" className="px-1 py-1 bg-zinc-300 text-zinc-800 rounded-xl text-3xl hover:scale-105 transition-all">
                        <IoLogoLinkedin />
                    </a>
                    <a href="https://github.com/Ahmed-Reda-elshahawy" target="blank" className="px-1 py-1 bg-zinc-300 text-zinc-800 rounded-xl text-3xl hover:scale-105 transition-all">
                        <IoLogoGithub />
                    </a>
                </div>
            </div>
        </section>
    )
}