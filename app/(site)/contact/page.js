// app/(site)/contact/page.js
import SectionFadeIn from '@/components/SectionFadeIn';
import { Mail, Github, Linkedin } from 'lucide-react'; // 👈 import icons

export const metadata = { title: 'Contact | Yasesvi' };

export default function ContactPage() {
  return (
    <SectionFadeIn>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '1.6rem',
          alignItems: 'center',
        }}
      >
        {/* Left: text + links */}
        <div>
          <h1>Contact</h1>
          <p style={{ color: 'var(--muted)', lineHeight: 1.75 }}>
            I’m open to software engineering and full-stack opportunities, collaborations, and
            interesting side projects. If something I’m building resonates with you, let’s talk.
          </p>

          <div style={{ display: 'grid', gap: '.6rem', marginTop: '1rem' }}>
            {/* Email */}
            <a className="btn btn-primary" href="mailto:yasesvireddypebbety@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
              <Mail size={18} /> Email me
            </a>

            {/* Row of social links */}
            <div style={{ display: 'flex', gap: '.6rem' }}>
              <a
                className="btn btn-ghost"
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/yasesvi-reddy-pebbeti"
                style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}
              >
                <Linkedin size={18} /> LinkedIn
              </a>
              <a
                className="btn btn-ghost"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Yasesvi-Reddy-Pebbeti"
                style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}
              >
                <Github size={18} /> GitHub
              </a>
            </div>
          </div>

          {/* direct email */}
          <p style={{ marginTop: '1rem', color: 'var(--fg)' }}>
            Or reach me at: <a href="mailto:yasesvireddypebbeti@gmail.com">yasesvireddypebbeti@gmail.com</a>
          </p>
        </div>

        {/* Right: illustration */}
        <div
          style={{
            background: 'var(--bg-soft)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius)',
            boxShadow: 'var(--shadow)',
            padding: '1rem',
          }}
        >
          <img
            src="/images/contact.svg"
            alt="Contact illustration"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
      </div>
    </SectionFadeIn>
  );
}
