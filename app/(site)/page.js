// app/(site)/page.js
import Hero from "@/components/Hero";
import SectionFadeIn from "@/components/SectionFadeIn";
import SkillsSection from "@/components/SkillSection";
import ProjectsGrid from "@/components/ProjectGrid";
import { projects } from "@/lib/data";

export const metadata = { title: "Home | Yasesvi" };

export default function HomePage() {
  return (
    <>
      <Hero />
      <SectionFadeIn>
        <h2>Skills</h2>
        <SkillsSection />
      </SectionFadeIn>
      <SectionFadeIn delay={0.1}>
        <h2>Selected Projects</h2>
        <ProjectsGrid items={projects.slice(0, 6)} />
      </SectionFadeIn>
    </>
  );
}
