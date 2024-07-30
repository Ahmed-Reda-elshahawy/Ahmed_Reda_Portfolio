'use client';
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";
import { MySkills } from "@/data/data";
import { animate, motion } from "framer-motion";


const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        }
    })
}

export default function Skills() {
    const { ref } = useSectionInView("Skills");

    return (
        <section ref={ref} className="scroll-mt-28 mb-28" id="skills">
            <SectionHeading>Skills</SectionHeading>
            <ul className="lg:max-w-[30rem] mx-auto flex flex-wrap justify-center gap-4">
                {
                    MySkills.map((skill, index) => (
                        <motion.li key={index}
                            variants={fadeInAnimationVariants} initial={"initial"} whileInView={"animate"} custom={index}
                            viewport={{ once: true }}
                            className="bg-zinc-300 px-4 py-2 rounded-md border border-black/10 shadow-md font-medium text-gray-600">
                            {skill}
                        </motion.li>
                    ))
                }
            </ul>
        </section>
    )
}