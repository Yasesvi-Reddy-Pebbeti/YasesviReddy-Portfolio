"use client";
import { motion } from "framer-motion";

export default function LeadershipCard({
  title,
  duration,
  organization,
  description,
  recommendation,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true }}
      style={{
        border: "1px solid var(--border)",
        borderRadius: "10px",
        padding: "1.25rem",
        background: "var(--card-bg)",
        display: "flex",
        flexDirection: "column",
        gap: "0.4rem",
      }}
    >
      <h3 style={{ fontWeight: 600 }}>{title}</h3>
      <p style={{ fontSize: "0.9rem", color: "gray" }}>
        {organization} • {duration}
      </p>
      <p style={{ lineHeight: "1.5" }}>{description}</p>
      {recommendation && (
        <p style={{ fontSize: "0.85rem", color: "var(--accent)" }}>
          📄 {recommendation}
        </p>
      )}
    </motion.div>
  );
}
