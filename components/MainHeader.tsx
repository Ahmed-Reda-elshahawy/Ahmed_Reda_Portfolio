'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MainHeader() {
    const pathname = usePathname();

    return (
        <header className="w-full fixed z-10">
            <ul className="bg-zinc-300/90 border border-zinc-400/50 shadow-md flex items-center justify-center gap-6 flex-wrap py-4 px-5 sm:w-fit sm:mx-auto sm:my-4 sm:px-10 sm:rounded-full">
                {/* <li>
                    <Link className={` ${pathname === '#home' ? 'font-medium text-slate-900 py-1 px-3 bg-slate-500' : 'text-slate-600 font-medium text-lg'}`} href="#home">
                        Home
                    </Link>
                </li> */}
                <li>
                    <Link className={` ${pathname === '#about' ? 'text-slate-900 py-1 px-3 bg-slate-500' : 'text-slate-600 font-medium text-lg'}`} href="#about">
                        About
                    </Link>
                </li>
                <li>
                    <Link className={` ${pathname === '#projects' ? 'text-slate-900 py-1 px-3 bg-slate-500' : 'text-slate-600 font-medium text-lg'}`} href="#projects">
                        Projects
                    </Link>
                </li>
                <li>
                    <Link className={` ${pathname === '#skills' ? 'text-slate-900 py-1 px-3 bg-slate-500' : 'text-slate-600 font-medium text-lg'}`} href="#skills">
                        Skills
                    </Link>
                </li>
                <li>
                    <Link className={` ${pathname === '#experience' ? 'text-slate-900 py-1 px-3 bg-slate-500' : 'text-slate-600 font-medium text-lg'}`} href="#experience">
                        Experience
                    </Link>
                </li>
            </ul>
        </header>
    )
}