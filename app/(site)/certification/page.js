"use client";

import { certificates } from "@/lib/certificationData";
import CertificateCard from "@/components/CertificationCard";
import { motion } from "framer-motion";

export default function CertificationPage() {
  return (
    <main className="min-h-screen px-4 sm:px-6 lg:px-8 py-16">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center text-3xl sm:text-4xl font-bold mb-10"
      >
        Certifications & Workshops
      </motion.h1>

      <div className="grid-responsive">
        {certificates && certificates.length > 0 ? (
          certificates.map((cert, index) => (
            <div key={index} className="card">
              <CertificateCard {...cert} />
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">
            No certifications added yet.
          </p>
        )}
      </div>
    </main>
  );
}
