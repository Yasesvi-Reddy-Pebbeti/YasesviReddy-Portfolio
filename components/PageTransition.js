'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function PageTransition({ children }) {
  const pathname = usePathname();

  const variants = {
    initial: { opacity: 0.98, y: 4 }, // subtle start
    enter:   { opacity: 1, y: 0, transition: { duration: 0.25, ease: 'easeOut' } },
    // no exit -> prevents flash
  };

  return (
    <AnimatePresence>
      <motion.main
        key={pathname}
        variants={variants}
        initial="initial"
        animate="enter"
        style={{ flex: 1 }}   // IMPORTANT: keeps footer at bottom
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}
