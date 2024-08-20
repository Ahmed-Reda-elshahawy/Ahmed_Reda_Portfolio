'use client';
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type themePropsType = {
    children: ReactNode;
};

type themeType = "light" | "dark";

type themeContextType = {
    theme: themeType;
    handleSwitchTheme: () => void;
}

const themeContextContent: themeContextType = {
    theme: "light",
    handleSwitchTheme: () => { },
}

const ThemeContext = createContext(themeContextContent)

export function ThemeContextProvider({ children }: themePropsType) {
    const [theme, setTheme] = useState<themeType>("light");
    const handleSwitchTheme = () => {
        if (theme === "light") {
            setTheme("dark");
            localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark");
        }
        else {
            setTheme("light");
            localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark");
        }
    }

    useEffect(() => {
        const localTheme = localStorage.getItem("theme") as themeType | null;

        if (localTheme) {
            setTheme(localTheme);
            if (localTheme === "dark") {
                document.documentElement.classList.add("dark");
            }
        }
        else if (matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark");
            document.documentElement.classList.add("dark");
        }
    }, [])

    return (
        <ThemeContext.Provider value={{ theme, handleSwitchTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default function useTheme() {
    const context = useContext(ThemeContext);
    if (context === null) {
        throw new Error("useTheme must be used within a ThemeContextProvider");
    }

    return context;
}