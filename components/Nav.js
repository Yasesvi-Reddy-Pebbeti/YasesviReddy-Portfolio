"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Experience", href: "/experience" },
    { name: "Leadership", href: "/Leadership" },
    { name: "Certifications", href: "/certification" },
    { name: "Publications", href: "/Publication" },
    { name: "Recommendations", href: "/recommendation" },
    { name: "Blog", href: "/Blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      style={{
        borderBottom: "1px solid var(--border)",
        background: "var(--bg)",
        position: "sticky",
        top: 0,
        zIndex: 100,
        boxShadow: "0 1px 6px rgba(0,0,0,0.05)",
      }}
    >
      <div
        style={{
          padding: "0.9rem 1.25rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Left: Logo + Name */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: ".5rem",
            fontWeight: 600,
            letterSpacing: ".02em",
            color: "var(--fg)",
          }}
        >
          <Image
            src="/favicon.png"
            alt="Logo"
            width={22}
            height={22}
            style={{ borderRadius: "4px" }}
          />
          <Link href="/" style={{ textDecoration: "none", color: "var(--fg)" }}>
            YASESVI REDDY PEBBETI
          </Link>
        </div>

        {/* Hamburger Icon (Mobile Only) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            fontSize: "1.6rem",
            cursor: "pointer",
            color: "var(--fg)",
          }}
          className="mobile-menu-btn"
          aria-label="Toggle Menu"
        >
          ☰
        </button>

        {/* Desktop Links */}
        <div
          style={{
            display: "flex",
            gap: "1.25rem",
            alignItems: "center",
            fontWeight: 500,
          }}
          className="desktop-menu"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              style={{
                textDecoration: "none",
                color: "var(--fg)",
                transition: "color 0.2s ease",
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.9rem",
            padding: "1rem 1.25rem",
            borderTop: "1px solid var(--border)",
            background: "var(--bg)",
          }}
          className="mobile-menu"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                textDecoration: "none",
                color: "var(--fg)",
                fontWeight: 500,
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}

      <style jsx>{`
        /* Hide hamburger on desktop */
        @media (min-width: 769px) {
          .mobile-menu-btn {
            display: none;
          }
          .desktop-menu {
            display: flex;
          }
        }

        /* Show hamburger on mobile, hide desktop links */
        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: block;
          }
          .desktop-menu {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
}
