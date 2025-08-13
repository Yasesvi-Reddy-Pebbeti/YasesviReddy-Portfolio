// components/PageTransition.js
'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function PageTransition({ children }) {
  const pathname = usePathname();
  const variants = {
    initial: { opacity: 0, y: 10 },
    enter:   { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
    exit:    { opacity: 0, y: -10, transition: { duration: 0.25, ease: 'easeIn' } },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={pathname}
        variants={variants}
        initial="initial"
        animate="enter"
        exit="exit"
        /* no fixed/min height here */
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}
