import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <nav style={{ borderBottom: "1px solid var(--border)", background: "var(--bg)" }}>
      {/* Full-width row; just add side padding */}
      <div
        style={{
          padding: "0.9rem 1.25rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between", // push ends to corners
            gap: "1rem",
          }}
        >
          {/* Left: logo + name */}
          <div style={{ display: "flex", alignItems: "center", gap: ".5rem", fontWeight: 600, letterSpacing: ".02em" }}>
            <Image
              src="/favicon.png"
              alt="Logo"
              width={22}
              height={22}
              style={{ borderRadius: "4px" }}
            />
            <Link href="/">YASESVI REDDY PEBBETI</Link>
          </div>

          {/* Right: links */}
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/experience">Experience</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
