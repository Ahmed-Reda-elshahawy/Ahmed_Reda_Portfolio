'use client';
import { useActiveSectionContext } from "@/context/active-section-context";
import { Links } from "@/data/data";
import Link from "next/link";


export default function MainHeader() {
    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (
        <header className="w-full fixed z-10">
            <ul className="bg-zinc-200/95 border border-zinc-400/50 dark:bg-zinc-700/95 px-2 shadow-md flex items-center justify-center gap-4 flex-wrap py-3 box-border sm:gap-6 sm:w-fit sm:mx-auto sm:my-4 sm:px-8 sm:rounded-full">
                {
                    Links.map((link, i) => (
                        <li key={i}>
                            <Link onClick={() => {
                                setActiveSection(link.linkName),
                                    setTimeOfLastClick(Date.now())
                            }} className={`font-medium text-lg transition-all ${activeSection === link.linkName ? 'text-slate-700 py-2 px-4 bg-zinc-300/80 rounded-full dark:text-zinc-100 dark:bg-zinc-500' : 'text-slate-600 dark:text-zinc-300'}`} href={link.linkPath}>
                                {link.linkName}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </header>
    )
}