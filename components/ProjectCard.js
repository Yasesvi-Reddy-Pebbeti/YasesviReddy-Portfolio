import styles from '@/styles/components/card.module.css';

export default function ProjectCard({ project }) {
  return (
    <a className={styles.card} href={project.link} target="_blank" rel="noreferrer">
      <div className={styles.thumb}>
        <img src={project.image} alt={project.title} />
      </div>
      <div className={styles.meta}>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <div className={styles.tags}>
          {project.tags?.map(t => <span key={t}>{t}</span>)}
        </div>
      </div>
    </a>
  );
}
