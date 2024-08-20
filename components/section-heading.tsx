import { ReactNode } from "react"

type headingSection = {
    children: ReactNode;
}

export default function SectionHeading({ children }: headingSection) {
    return (
        <h1 className=" text-2xl font-bold text-zinc-800 text-center mb-10 dark:text-zinc-200">{children}</h1>
    )
}