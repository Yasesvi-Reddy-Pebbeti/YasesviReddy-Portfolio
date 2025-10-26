"use client";
import { publications } from "@/lib/publicationData";
import PublicationCard from "@/components/PublicationCard";
import { motion } from "framer-motion";

export default function PublicationPage() {
  return (
    <div style={{ padding: "2rem 1.5rem", minHeight: "100vh" }}>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        style={{
          fontSize: "1.9rem",
          fontWeight: 700,
          marginBottom: "1.5rem",
          textAlign: "center",
        }}
      >
        Research & Publications
      </motion.h1>

      <div
        style={{
          display: "grid",
          gap: "1.25rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        }}
      >
        {publications && publications.length > 0 ? (
          publications.map((pub, index) => (
            <PublicationCard key={index} {...pub} />
          ))
        ) : (
          <p style={{ textAlign: "center", color: "gray" }}>
            No publications added yet.
          </p>
        )}
      </div>
    </div>
  );
}
