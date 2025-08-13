import SectionFadeIn from '@/components/SectionFadeIn';

export const metadata = { title: 'About | Yasesvi' };

export default function AboutPage() {
  return (
    <SectionFadeIn>
      <h1>About Me</h1>
      <p>
        I’m a graduate student in Computer Science at <strong>SUNY Poly</strong>, with a B.E. in
        Information Technology from <strong>Matrusri Engineering College</strong>. I write Python,
        Java, and C++, and I’m a self-taught full-stack developer focused on building reliable,
        fast, and accessible web apps.
      </p>
      <p>
        I’ve always wanted to create something new and put ideas in front of real users. Full-stack
        development lets me do exactly that — from shaping data and APIs to crafting responsive,
        animated interfaces that feel alive. Recently I’ve been doubling down on Next.js, React, and
        clean UI/UX patterns so I can ship features quickly without sacrificing quality.
      </p>
      <p>
        Outside of coursework, I’ve worked on climate data analysis and research tooling, including
        scraping pipelines, dashboards, and AWS-hosted sites. I also lead clubs and events, which
        sharpened my communication and collaboration skills.
      </p>
    </SectionFadeIn>
  );
}
