"use client";
import { leadership } from "@/lib/leadershipData";
import LeadershipCard from "@/components/LeadershipCard";

export default function LeadershipPage() {
  return (
    <div style={{ padding: "2rem", display: "grid", gap: "1.5rem" }}>
      <h1 style={{ fontSize: "1.8rem", fontWeight: 700, marginBottom: "1rem" }}>
        Leadership Experience
      </h1>
      {leadership.map((role, index) => (
        <LeadershipCard key={index} {...role} />
      ))}
    </div>
  );
}
