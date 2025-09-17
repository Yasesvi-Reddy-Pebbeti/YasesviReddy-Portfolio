import Image from "next/image";

export default function ProjectCard({ project }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      style={{
        display: "grid",
        gridTemplateColumns: "140px 1fr",
        gap: "1rem",
        padding: "1rem",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius)",
        background: "var(--card)",
        boxShadow: "var(--shadow)",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: 100,
          overflow: "hidden",
          borderRadius: 12,
          background: "var(--bg-soft)",
        }}
      >
        {/* fallback to img if you prefer; Image gives perf wins */}
        <Image src={project.image} alt={project.title} fill style={{ objectFit: "cover" }} />
      </div>

      <div>
        <div style={{ display: "flex", justifyContent: "space-between", gap: "0.6rem", alignItems: "baseline" }}>
          <h3 style={{ margin: 0, color: "var(--fg-strong)" }}>{project.title}</h3>
          <span style={{ fontSize: ".9rem", color: "var(--muted)", whiteSpace: "nowrap" }}>{project.dates}</span>
        </div>
        <p style={{ marginTop: ".4rem", color: "var(--muted)", lineHeight: 1.6 }}>{project.summary}</p>
        {project.tags?.length ? (
          <div style={{ display: "flex", flexWrap: "wrap", gap: ".4rem", marginTop: ".5rem" }}>
            {project.tags.map((t) => (
              <span
                key={t}
                style={{
                  border: "1px solid var(--border)",
                  padding: ".25rem .5rem",
                  borderRadius: 999,
                  fontSize: ".8rem",
                  color: "var(--muted)",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </a>
  );
}
