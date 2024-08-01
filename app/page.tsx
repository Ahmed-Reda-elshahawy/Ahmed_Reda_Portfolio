'use client';

import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Hero from "@/components/Hero";
import MainHeader from "@/components/MainHeader";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <MainHeader />
      <Toaster position="top-right" />
      <main className="flex flex-col items-center text-center px-4 ">
        <Hero />
        <SectionDivider />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
