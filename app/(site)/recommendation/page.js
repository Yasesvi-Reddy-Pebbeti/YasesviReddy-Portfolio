"use client";

import { recommendations } from "@/lib/recommendationsData";
import RecommendationCard from "@/components/recommendationsCard";
import { motion } from "framer-motion";

export default function RecommendationPage() {
  return (
    <main className="min-h-screen px-4 sm:px-6 lg:px-8 py-16">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center text-3xl sm:text-4xl font-bold mb-10"
      >
        Recommendations
      </motion.h1>

      <div className="grid-responsive">
        {recommendations && recommendations.length > 0 ? (
          recommendations.map((rec, index) => (
            <div key={index} className="card">
              <RecommendationCard {...rec} />
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">
            No recommendations available yet.
          </p>
        )}
      </div>
    </main>
  );
}
