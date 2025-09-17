// app/experience/page.js
import SectionFadeIn from "@/components/SectionFadeIn";

export const metadata = { title: "Experience | Yasesvi" };

export default function ExperiencePage() {
  return (
    <SectionFadeIn>
      <h1>Experience</h1>

      <div style={{ display: "grid", gap: "2rem", marginTop: "2rem" }}>
        {/* Graduate Assistant — combined entry with current & previous */}
        <div
          style={{
            background: "var(--card)",
            padding: "1.2rem",
            borderRadius: "var(--radius)",
            boxShadow: "var(--shadow)",
            border: "1px solid var(--border)",
          }}
        >
          <h2>Graduate Assistant — SUNY Polytechnic Institute</h2>
          <p style={{ color: "var(--muted)", marginBottom: ".8rem" }}>
            Utica, NY
          </p>

          {/* Current GA */}
          <h3 style={{ marginTop: "1rem" }}>
            College of Engineering · Computer Science Department{" "}
            <span style={{ fontWeight: 400, color: "var(--muted)" }}>
              (Sept 2025 – Present)
            </span>
          </h3>
          <p style={{ color: "var(--muted)", marginBottom: ".6rem" }}>
            Guided by: Dr. William &quot;Amos&quot; Confer — Associate Professor &amp; Department Head, Computer Science
          </p>
          <ul style={{ paddingLeft: "1.2rem", lineHeight: 1.6, marginBottom: "1.25rem" }}>
            <li>Assist with grading assignments using structured answer keys to ensure fairness and alignment with course standards.</li>
            <li>Meet regularly with faculty to review grading consistency, feedback processes, and workflow improvements.</li>
            <li>Research and compile a directory of Computer Science PhD programs outside New York, documenting requirements and faculty contacts.</li>
            <li>Organize program data into structured Office 365 documents for collaborative editing and streamlined outreach.</li>
            <li>Contribute to groundwork for new PhD program accreditation and benchmarking efforts.</li>
          </ul>

          {/* Transition line */}
          <p style={{ fontStyle: "italic", margin: "0 0 .5rem" }}>
            Previously served as Graduate Assistant with the College of Health Sciences — Climate &amp; Environmental Data Analysis, Web Developer{" "}
            <span style={{ color: "var(--muted)" }}>  (Sept 2024 – Aug 2025)</span>
          </p>

          {/* Previous GA */}
          <p style={{ color: "var(--muted)", marginBottom: ".6rem" }}>
            Guided by: Dr. Nicolau DePaula — Assistant Professor
          </p>
          <ul style={{ paddingLeft: "1.2rem", lineHeight: 1.6 }}>
            <li>Conducted analysis of climate and environmental data from satellite imagery, weather models, and environmental reports.</li>
            <li>Developed web-scraping pipelines with BeautifulSoup for automated climate-data collection.</li>
            <li>Applied statistical techniques and ML models to analyze trends and predict climate patterns.</li>
            <li>Researched AI policies and their implications for technology, governance, and ethics in climate science.</li>
            <li>Managed and maintained a climate research website on AWS, focusing on performance, security, and accessibility.</li>
            <li>Built interactive dashboards/visualizations to improve access for researchers and policymakers.</li>
          </ul>
        </div>

        {/* Code IT Consulting — Multi-tenant Architecture */}
        <div
          style={{
            background: "var(--card)",
            padding: "1.2rem",
            borderRadius: "var(--radius)",
            boxShadow: "var(--shadow)",
            border: "1px solid var(--border)",
          }}
        >
          <h2>Intern — Centralized Multi-Tenant Web Architecture</h2>
          <p style={{ color: "var(--muted)", marginBottom: ".6rem" }}>
            <strong>Code IT Consulting</strong> · Aug 2025 – Sept 2025 · Remote
          </p>
          <ul style={{ paddingLeft: "1.2rem", lineHeight: 1.6 }}>
            <li>Designed and documented a multi-tenant web architecture to manage and scale 60+ websites from a single codebase.</li>
            <li>Implemented stack: Next.js, Node.js/Express, MongoDB, Hostinger VPS, PM2, GitHub Actions, NGINX.</li>
            <li>Built subdomain detection, theme management, and content models for consistent branding and rapid delivery.</li>
            <li>Outlined a VPS deployment workflow with wildcard DNS and CI/CD pipelines for production readiness.</li>
            <li>Key outcome: enabled rapid launches and centralized updates across all tenant subdomains.</li>
          </ul>
        </div>

        {/* INCOIS Internship */}
        <div
          style={{
            background: "var(--card)",
            padding: "1.2rem",
            borderRadius: "var(--radius)",
            boxShadow: "var(--shadow)",
            border: "1px solid var(--border)",
          }}
        >
          <h2>Intern</h2>
          <p style={{ color: "var(--muted)", marginBottom: ".6rem" }}>
            <strong>INCOIS — Indian National Centre for Ocean Information Services</strong> · May 2023 – Jun 2023 · Hyderabad, India
            <br />
            Guided by: Dr. N. Srinivas Rao — Scientist-E
          </p>
          <ul style={{ paddingLeft: "1.2rem", lineHeight: 1.6 }}>
            <li>Analyzed sea surface temperatures in the Bay of Bengal, Arabian Sea, and Indian Ocean using Python, Jupyter Notebook, and QGIS.</li>
            <li>Applied advanced statistical methods and ML techniques to enhance interpretation of oceanographic data.</li>
            <li>Used image processing and remote sensing to identify environmental patterns relevant to climate studies.</li>
            <li>Optimized Python-based workflows by evaluating alternative tooling to improve analysis efficiency.</li>
          </ul>
        </div>
      </div>
    </SectionFadeIn>
  );
}
