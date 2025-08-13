import SectionFadeIn from '@/components/SectionFadeIn';

export const metadata = { title: 'Contact | Yasesvi' };

export default function ContactPage() {
  return (
    <SectionFadeIn>
      <h1>Contact</h1>
      <p>Feel free to reach out — I’m open to collaborations and opportunities.</p>
      <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem', display: 'grid', gap: '.6rem' }}>
        <li><a href="mailto:yasesvireddy426@gmail.com">yasesvireddy426@gmail.com</a></li>
        <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/yasesvi-reddy-pebbeti">LinkedIn</a></li>
        <li><a target="_blank" rel="noreferrer" href="https://github.com/Yasesvi-Reddy-Pebbeti">GitHub</a></li>
      </ul>
    </SectionFadeIn>
  );
}
