"use client";
import { motion } from "framer-motion";

export default function RecommendationCard({
  name,
  position,
  institution,
  context,
  message,
  letter,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      style={{
        border: "1px solid var(--border)",
        borderRadius: "10px",
        padding: "1.5rem",
        background: "var(--card-bg)",
        display: "flex",
        flexDirection: "column",
        gap: "0.6rem",
      }}
    >
      <h3 style={{ fontWeight: 600, fontSize: "1.1rem" }}>{name}</h3>
      <p style={{ fontSize: "0.9rem", color: "gray" }}>
        {position} <br /> {institution}
      </p>
      <p style={{ fontSize: "0.95rem", fontStyle: "italic", color: "#ccc" }}>
        “{message}”
      </p>
      <p style={{ color: "var(--accent)", fontSize: "0.9rem" }}>{context}</p>
      {letter && (
        <a
          href={letter}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "var(--accent)",
            fontSize: "0.85rem",
            textDecoration: "none",
            marginTop: "0.3rem",
          }}
        >
          📄 View Recommendation Letter
        </a>
      )}
    </motion.div>
  );
}
