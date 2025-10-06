"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Linkedin, Github } from "lucide-react"; // 👈 import icons

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -24]);

  return (
    <section style={{ padding: "3.5rem 1rem 2rem" }}>
      <motion.div style={{ y, width: "min(1100px,100%)", margin: "0 auto" }}>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: "clamp(2.25rem,6vw,3.5rem)",
            letterSpacing: "-.02em",
            color: "var(--fg-strong)",
          }}
        >
          Yasesvi Reddy — building AI & full-stack products
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          style={{
            marginTop: ".75rem",
            maxWidth: 720,
            color: "var(--muted)",
            lineHeight: 1.75,
          }}
        >
          Graduate CS @ SUNY Poly. I design and ship pragmatic ML + web systems
          with a clean, editorial aesthetic. React, Next.js, Python, and a love
          for turning ideas into products.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          style={{
            display: "flex",
            gap: "0.6rem",
            marginTop: "1.25rem",
            alignItems: "center",
          }}
        >
          <a className="btn btn-primary" href="/projects">
            View Projects
          </a>
          <a className="btn btn-ghost" href="/contact">
            Contact
          </a>
          <a
            className="btn btn-ghost"
            href="/YasesviReddyPebbeti_Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>

          {/* Social icons */}
          <a
            href="https://www.linkedin.com/in/yasesvi-reddy-pebbeti"
            target="_blank"
            rel="noreferrer"
            style={{ display: "flex", alignItems: "center" }}
          >
            <Linkedin size={22} strokeWidth={1.8} />
          </a>
          <a
            href="https://github.com/Yasesvi-Reddy-Pebbeti"
            target="_blank"
            rel="noreferrer"
            style={{ display: "flex", alignItems: "center" }}
          >
            <Github size={22} strokeWidth={1.8} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
