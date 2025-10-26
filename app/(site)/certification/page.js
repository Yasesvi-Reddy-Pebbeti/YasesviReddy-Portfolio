"use client";
import { certificates } from "@/lib/certificationData";
import CertificateCard from "@/components/CertificationCard";
import { motion } from "framer-motion";

export default function CertificationPage() {
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
        Certifications & Workshops
      </motion.h1>

      <div
        style={{
          display: "grid",
          gap: "1.25rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        }}
      >
        {certificates && certificates.length > 0 ? (
          certificates.map((cert, index) => (
            <CertificateCard key={index} {...cert} />
          ))
        ) : (
          <p style={{ textAlign: "center", color: "gray" }}>
            No certifications added yet.
          </p>
        )}
      </div>
    </div>
  );
}
