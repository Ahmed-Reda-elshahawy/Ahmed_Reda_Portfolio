'use client';
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from "@/data/data";
import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import useTheme from "@/context/theme-context";

export default function Experience() {
    const { ref } = useSectionInView("Experience");
    const { theme } = useTheme();


    return (
        <section ref={ref} id="experience" className="scroll-mt-28 mb-28">
            <SectionHeading>Experience</SectionHeading>
            <VerticalTimeline>
                {
                    experiencesData.map((item, index) => (
                        <React.Fragment key={index}>
                            <VerticalTimelineElement
                                visible={true}
                                contentStyle={{ background: theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)" }}
                                contentArrowStyle={{ borderRight: '7px solid  #f6f6f6' }}
                                date={item.date}
                                icon={item.icon}
                                iconStyle={{ background: theme === "light" ? "white" : "rgb(50 50 53)", fontSize: "1.5rem" }}
                            >
                                <h3 className="font-semibold">{item.title}</h3>
                                <p className="font-normal text-gray-500 !mt-0">{item.location}</p>
                                <p className="text-gray-400">{item.description}</p>
                            </VerticalTimelineElement>
                        </React.Fragment>
                    ))
                }
            </VerticalTimeline>
        </section>
    )
}
