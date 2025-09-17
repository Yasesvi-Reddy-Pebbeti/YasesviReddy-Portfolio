"use client";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsGrid({ items }) {
  const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } };
  const child = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.35 } } };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      style={{
        display: "grid",
        gap: "1rem",
        gridTemplateColumns: "1fr",
      }}
      className="sm:grid-cols-2" /* tailwind will enhance at sm+ */
    >
      {items.map((p) => (
        <motion.div key={p.slug} variants={child}>
          <ProjectCard project={p} />
        </motion.div>
      ))}
    </motion.div>
  );
}
