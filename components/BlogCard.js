"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BlogCard({ title, date, summary, slug }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      style={{
        border: "1px solid var(--border)",
        borderRadius: "10px",
        padding: "1.25rem",
        background: "var(--card-bg)",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
      }}
    >
      <h3 style={{ fontWeight: 600 }}>{title}</h3>
      <p style={{ fontSize: "0.9rem", color: "gray" }}>{date}</p>
      <p style={{ lineHeight: "1.5" }}>{summary}</p>
      <Link
        href={`/Blog/${slug}`}
        style={{
          color: "var(--accent)",
          fontSize: "0.85rem",
          marginTop: "0.3rem",
        }}
      >
        → Read More
      </Link>
    </motion.div>
  );
}
