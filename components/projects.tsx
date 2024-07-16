import { ProjectsData } from "@/data/data";
import SectionHeading from "./section-heading";
import Project from "./project";
import React from "react";

export default function Projects() {
    return (
        <section className="mx-10">
            <SectionHeading>Projects</SectionHeading>
            {
                ProjectsData.map(proj => <React.Fragment key={proj.id}> <Project {...proj} /> </React.Fragment>)
            }
        </section>
    )
}