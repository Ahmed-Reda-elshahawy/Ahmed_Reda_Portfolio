'use client';
import useTheme from "@/context/theme-context";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
    const { theme, handleSwitchTheme } = useTheme();

    return (
        <button
            onClick={handleSwitchTheme}
            className="fixed w-10 h-10 right-6 bottom-6 bg-white backdrop-blur-sm shadow-lg flex justify-center items-center 
            rounded-full border border-blue-100 hover:scale-105 transition-all dark:bg-zinc-900">
            {theme === "light" ? <BsSun /> : <BsMoon />}
        </button>
    )
}