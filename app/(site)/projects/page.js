"use client";

import { motion } from "framer-motion";
import ProjectsGrid from "@/components/ProjectGrid";
import { projects } from "@/lib/data";

export default function ProjectsClient() {
  return (
    <section id="projects" className="py-20">
      {/* Title animation */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Real-world work spanning ML, systems, and full-stack development.
        </p>
      </motion.div>

      {/* Projects grid animation */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <ProjectsGrid items={projects} />
      </motion.div>
    </section>
  );
}
