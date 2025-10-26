import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <nav
      style={{
        borderBottom: "1px solid var(--border)",
        background: "var(--bg)",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      {/* Full-width row with padding */}
      <div
        style={{
          padding: "0.9rem 1.25rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          {/* Left: logo + name */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: ".5rem",
              fontWeight: 600,
              letterSpacing: ".02em",
            }}
          >
            <Image
              src="/favicon.png"
              alt="Logo"
              width={22}
              height={22}
              style={{ borderRadius: "4px" }}
            />
            <Link href="/" style={{ textDecoration: "none" }}>
              YASESVI REDDY PEBBETI
            </Link>
          </div>

          {/* Right: navigation links */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1.25rem",
              alignItems: "center",
              fontWeight: 500,
            }}
          >
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/experience">Experience</Link>
            <Link href="/Leadership">Leadership</Link>
            <Link href="/certification">Certifications</Link>
            <Link href="/Publication">Publications</Link>
            <Link href="/recommendation">Recommendations</Link>
            <Link href="/Blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
