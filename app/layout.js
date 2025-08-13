// app/layout.js
import './global.css';
import styles from '@/styles/layout.module.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';

// use Inter Variable (installed)
import "@fontsource-variable/inter";

export const metadata = {
  title: 'Yasesvi Reddy Pebbeti | Portfolio',
  description: 'Full-stack developer & ML enthusiast – projects, skills, and contact.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <Nav />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
