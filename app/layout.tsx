import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ActiveSectionContextPorvider from "@/context/active-section-context";
import ThemeSwitch from "@/components/theme-switch";
import { ThemeContextProvider } from "@/context/theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ahmed Reda Portfolio",
  description: "Created by Ahmed Reda using nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-slate-200 relative dark:bg-zinc-800 dark:text-white`}>
        <div className=" lg:w-[25rem] lg:h-[30rem] lg:bg-orange-300 lg:rounded-full lg:absolute lg:top-15 lg:left-[55%] lg:opacity-15 lg:blur-3xl"></div>
        <div className=" lg:w-[25rem] lg:h-[30rem] lg:bg-sky-300 lg:rounded-full lg:absolute lg:top-15 lg:right-[55%] lg:opacity-15 lg:blur-3xl"></div>
        <ThemeContextProvider>
          <ActiveSectionContextPorvider>
            {children}
            <ThemeSwitch />
          </ActiveSectionContextPorvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
