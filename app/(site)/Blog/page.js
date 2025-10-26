"use client";
import { blogs } from "@/lib/blogData";
import BlogCard from "@/components/BlogCard";
import { motion } from "framer-motion";

export default function BlogPage() {
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
        Blog Posts
      </motion.h1>

      <div
        style={{
          display: "grid",
          gap: "1.25rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        }}
      >
        {blogs && blogs.length > 0 ? (
          blogs.map((post, index) => <BlogCard key={index} {...post} />)
        ) : (
          <p style={{ textAlign: "center", color: "gray" }}>
            No blog posts added yet.
          </p>
        )}
      </div>
    </div>
  );
}
