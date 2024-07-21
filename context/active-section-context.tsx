"use client";

import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react"
import type { sectionNameType } from "@/lib/types";


type ActiveSectionContextType = {
    activeSection: sectionNameType;
    setActiveSection: Dispatch<SetStateAction<sectionNameType>>;
    timeOfLastClick: number;
    setTimeOfLastClick: Dispatch<SetStateAction<number>>;
}


export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextPorvider({ children }: { children: ReactNode }) {
    const [activeSection, setActiveSection] = useState<sectionNameType>("About");
    const [timeOfLastClick, setTimeOfLastClick] = useState(0);
    // we need to keep track of "timeOfLastClick" to disable the observer temporarily when user clicks on a link

    return (
        <ActiveSectionContext.Provider value={{ activeSection, setActiveSection, timeOfLastClick, setTimeOfLastClick }}>
            {children}
        </ActiveSectionContext.Provider>
    );
}

export function useActiveSectionContext() {
    const context = useContext(ActiveSectionContext);
    if (context === null) {
        throw new Error("useActiveSectionContext must be used within an ActiveSectionContextProvider");
    }
    return context;
}