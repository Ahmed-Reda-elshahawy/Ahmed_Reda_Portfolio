'use client';
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from "@/data/data";
import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";

export default function Experience() {
    const { ref } = useSectionInView("Experience");

    return (
        <section ref={ref} id="experience" className="scroll-mt-28 mb-28">
            <SectionHeading>Experience</SectionHeading>
            <VerticalTimeline>
                {
                    experiencesData.map((item, index) => (
                        <React.Fragment key={index}>
                            <VerticalTimelineElement
                                visible={true}
                                contentStyle={{ background: "#f3f4f6" }}
                                contentArrowStyle={{ borderRight: '7px solid  #f6f6f6' }}
                                date={item.date}
                                icon={item.icon}
                                iconStyle={{ background: "white", fontSize: "1.5rem" }}
                            >
                                <h3 className="font-semibold">{item.title}</h3>
                                <p className="font-normal text-gray-600 !mt-0">{item.location}</p>
                                <p className="text-gray-500">{item.description}</p>
                            </VerticalTimelineElement>
                        </React.Fragment>
                    ))
                }
            </VerticalTimeline>
        </section>
    )
}
