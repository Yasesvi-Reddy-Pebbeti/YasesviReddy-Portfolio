'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function SectionFadeIn({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-12% 0px' });
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      style={{ marginBottom: '2rem' }}
    >
      {children}
    </motion.section>
  );
}
