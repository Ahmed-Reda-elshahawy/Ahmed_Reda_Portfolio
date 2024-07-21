'use client';

import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { sectionNameType } from "./types";


export function useSectionInView(sectionName: sectionNameType, threshold = 0.5) {
    const { ref, inView } = useInView({ threshold });
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            console.log(sectionName);
            setActiveSection(sectionName);
        }
    }, [sectionName, inView, setActiveSection, timeOfLastClick]);

    return {
        ref,
    };
}