import SectionFadeIn from '@/components/SectionFadeIn';

export const metadata = { title: 'Experience | Yasesvi' };

export default function ExperiencePage() {
  return (
    <SectionFadeIn>
      <h1>Experience</h1>
      <p>
        Roles where I applied my technical expertise to solve real-world problems, work in
        collaborative environments, and deliver impactful results.
      </p>

      <div style={{ display: 'grid', gap: '2rem', marginTop: '2rem' }}>
        {/* Graduate Assistant */}
        <div style={{ background: 'var(--card)', padding: '1.2rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)' }}>
          <h2>Graduate Assistant</h2>
          <p style={{ color: 'var(--muted)', marginBottom: '.6rem' }}>
            <strong>SUNY Polytechnic Institute</strong> · Sep 2024 – Aug 2025<br />
            Guided by: Dr. Nicolau DePaula
          </p>
          <ul style={{ paddingLeft: '1.2rem', lineHeight: '1.5' }}>
            <li>Conducted in-depth analysis of climate and environmental datasets using Python, satellite imagery, and weather models.</li>
            <li>Built web scraping pipelines with BeautifulSoup to automate climate-related data collection.</li>
            <li>Applied statistical techniques and ML models to analyze trends and predict climate patterns.</li>
            <li>Managed and maintained a research website hosted on AWS, optimizing performance and security.</li>
            <li>Developed interactive dashboards for climate research, improving accessibility for researchers and policymakers.</li>
          </ul>
        </div>

        {/* INCOIS Internship */}
        <div style={{ background: 'var(--card)', padding: '1.2rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)' }}>
          <h2>Intern</h2>
          <p style={{ color: 'var(--muted)', marginBottom: '.6rem' }}>
            <strong>INCOIS – Indian National Centre for Ocean Information Services</strong> · May 2023 – Jun 2023<br />
            Guided by: Dr. N. Srinivas Rao, Scientist-E
          </p>
          <ul style={{ paddingLeft: '1.2rem', lineHeight: '1.5' }}>
            <li>Analyzed sea surface temperatures in the Bay of Bengal, Arabian Sea, and Indian Ocean using Python, Jupyter Notebook, and QGIS.</li>
            <li>Applied advanced statistical methods and ML techniques for oceanographic data interpretation.</li>
            <li>Utilized image processing and remote sensing to identify environmental patterns.</li>
            <li>Explored alternative tools and workflows to optimize Python-based ocean data analysis pipelines.</li>
          </ul>
        </div>
      </div>
    </SectionFadeIn>
  );
}
