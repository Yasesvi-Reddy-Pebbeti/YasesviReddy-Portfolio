import SectionFadeIn from '@/components/SectionFadeIn';
import ProjectsGrid from '@/components/ProjectGrid';
import { projects } from '@/lib/data';

export const metadata = { title: 'Projects | Yasesvi' };

export default function ProjectsPage() {
  return (
    <SectionFadeIn>
      <h1>Projects</h1>
      <p>Real-world work spanning ML, systems, and full-stack development.</p>
      <ProjectsGrid items={projects} />
    </SectionFadeIn>
  );
}
