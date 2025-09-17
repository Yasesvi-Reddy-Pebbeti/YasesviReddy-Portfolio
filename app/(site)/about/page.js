// app/(site)/about/page.js
import SectionFadeIn from "@/components/SectionFadeIn";
import SkillsSection from "@/components/SkillSection";
import { FileText, Linkedin, Github } from "lucide-react"; // 👈 import icons

export const metadata = { title: "About | Yasesvi" };

export default function AboutPage() {
  return (
    <SectionFadeIn>
      <h1>About Me</h1>

      <p className="mb-6">
        I am a Master’s student in <strong>Computer Science</strong> at{" "}
        <strong>State University of New York Polytechnic Institute</strong> (Aug 2024 – May 2026).
        Prior to this, I earned my <strong>Bachelor of Engineering in Information Technology</strong> 
        from Matrusri Engineering College, Osmania University (Nov 2020 – Jun 2024).
      </p>

      <p className="mb-6">
        My career goal is to become a <strong>Software Engineer</strong> with a strong focus on
        <strong> full-stack development</strong>. I enjoy building reliable, user-friendly, and
        scalable applications that combine clean design with efficient engineering practices.
      </p>

      <p className="mb-6">
        Recently, I have supported research and academic projects as a Graduate Assistant, working
        on both program evaluation and climate-focused data analysis. I have contributed to grading
        and accreditation research, developed automated data collection pipelines with Python and
        BeautifulSoup, maintained AWS-hosted research websites, and built interactive visualizations
        with tools like Matplotlib, Seaborn, Plotly, and GeoPandas. These experiences helped me
        strengthen my ability to solve real-world problems with data and code.
      </p>

      <p className="mb-6">
        Alongside my academic and research work, I continue to expand my technical skills by working
        on projects in web development, machine learning, and system design. These efforts not only
        improve my engineering abilities but also prepare me to deliver impactful solutions as a
        future software engineer.
      </p>

      <h2>My Publications</h2>

      <p className="mb-6">
        I co-authored a research paper titled{" "}
        <em>“Plant Disease Identification and Pesticide Recommendation Using CNN”</em>,
        which was published in the{" "}
        <strong>International Journal of Innovative Research in Computer and Communication Engineering (IJIRCCE)</strong>{" "}
        in June 2024.{" "}
        <a
          href="https://ijircce.com/admin/main/storage/app/pdf/fGL5m6R2DNR1KNtQXtOMoDHYgRVmmjgHQXTa2g1p.pdf"
          target="_blank"
          rel="noreferrer"
          style={{ borderBottom: "1px solid var(--fg)" }}
        >
          View Paper
        </a>
        .
      </p>

      {/* Social + Resume icons */}
      <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem", marginBottom: "2rem" }}>
        <a href="/resume.pdf" target="_blank" rel="noreferrer">
          <FileText size={26} strokeWidth={1.7} />
        </a>
        <a href="https://www.linkedin.com/in/yasesvi-reddy-pebbeti" target="_blank" rel="noreferrer">
          <Linkedin size={26} strokeWidth={1.7} />
        </a>
        <a href="https://github.com/Yasesvi-Reddy-Pebbeti" target="_blank" rel="noreferrer">
          <Github size={26} strokeWidth={1.7} />
        </a>
      </div>

      {/* Skills Section */}
      <section style={{ marginTop: "2rem" }}>
        <h2>Skills</h2>
        <SkillsSection />
      </section>
    </SectionFadeIn>
  );
}
