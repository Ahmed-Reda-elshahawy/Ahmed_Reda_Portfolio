'use client';

import { ProjectsData } from "@/data/data";
import SectionHeading from "./section-heading";
import Project from "./project";
import React from "react";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
    const { ref } = useSectionInView("Projects", 0.3);

    return (
        <section ref={ref} className="mx-10 scroll-mt-28 mb-28 p-4" id="projects">
            <SectionHeading>Projects</SectionHeading>
            {
                ProjectsData.map(proj => <React.Fragment key={proj.id}> <Project {...proj} /> </React.Fragment>)
            }
        </section>
    )
}