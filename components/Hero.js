'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from '@/styles/components/hero.module.css';

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -24]);

  return (
    <section className={styles.hero}>
      <motion.div style={{ y }}>
        <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}>
          Hi, I’m <span>Yasesvi</span>.
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .15, duration: .6 }} className={styles.tagline}>
          Full-stack web developer & ML enthusiast. I build clean, performant interfaces with React & Next.js and love turning ideas into products.
        </motion.p>
        <motion.div className={styles.ctaRow} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .25, duration: .5 }}>
          <a className={`${styles.cta}`} href="/projects">View Projects</a>
          <a className={`${styles.ghost}`} href="/contact">Contact</a>
        </motion.div>
      </motion.div>
    </section>
  );
}
