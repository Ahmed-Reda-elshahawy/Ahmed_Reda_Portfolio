import Hero from "@/components/Hero";
import MainHeader from "@/components/MainHeader";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";

export default function Home() {
  return (
    <main>
      <MainHeader />
      <Hero />
      <SectionDivider />
      <Projects />
    </main>
  );
}
