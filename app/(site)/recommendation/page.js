"use client";
import { recommendations } from "@/lib/recommendationsData";
import RecommendationCard from "@/components/recommendationsCard";
import { motion } from "framer-motion";

export default function RecommendationPage() {
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
        Recommendations
      </motion.h1>

      <div
        style={{
          display: "grid",
          gap: "1.25rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        }}
      >
        {recommendations && recommendations.length > 0 ? (
          recommendations.map((rec, index) => (
            <RecommendationCard key={index} {...rec} />
          ))
        ) : (
          <p style={{ textAlign: "center", color: "gray" }}>
            No recommendations available yet.
          </p>
        )}
      </div>
    </div>
  );
}
