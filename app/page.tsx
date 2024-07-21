import Hero from "@/components/Hero";
import MainHeader from "@/components/MainHeader";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main>
      <MainHeader />
      <Hero />
      <SectionDivider />
      <Projects />
      <Skills />
    </main>
  );
}
