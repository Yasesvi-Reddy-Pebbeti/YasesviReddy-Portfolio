// components/SkillsSection.js
'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '@/styles/components/skills-section.module.css';

/** Map a canonical key -> icon file (omit if you don't have one) */
const ICONS = {
  // --- Technical ---
  python: '/images/skills/python.png',
  java: '/images/skills/java.png',
  'c++': '/images/skills/c-.png',
  html: '/images/skills/html-5.png',
  css: '/images/skills/css-3.png',
  javascript: '/images/skills/js-file.png',
  react: '/images/skills/react.png',
  'next.js': '/images/skills/next.svg',

  // --- Data Analysis ---
  numpy: '/images/skills/NumPy.png',
  pandas: '/images/skills/Pandas.png',
  matplotlib: '/images/skills/Matplotlib.png',
  opencv: '/images/skills/OpenCV.png',
  tensorflow: '/images/skills/TensorFlow.png',
  pytorch: '/images/skills/PyTorch.png',
  'beautiful soup': '/images/skills/beautiful-soup.png',

  // --- Developer Tools ---
  github: '/images/skills/github.png',
  'vs code': '/images/skills/Visual Studio Code (VS Code).png',
  'android studio': '/images/skills/Android Studio.png',
  'jupyter notebook': '/images/skills/Jupyter.png',
  'google colab': '/images/skills/Google-Colab.png',
  qgis: '/images/skills/qgis.png',

  // --- Soft Skills (new) ---
  'microsoft office': '/images/skills/office.png',
  teamwork: '/images/skills/teamwork.png',
  presentation: '/images/skills/presentation.png',
  documentation: '/images/skills/documentation.png',
  'time management': '/images/skills/time.png',
  adaptability: '/images/skills/adaptability.png',

  // aliases (optional, nice to have)
  'ms office': '/images/skills/office.png',
  office: '/images/skills/office.png',
};

/** Your grouped skills (order controls display) */
const GROUPS = [
  {
    title: 'Technical',
    items: ['Python','Java','C++','HTML','CSS','JavaScript','Next.js','React'],
  },
  {
    title: 'Data Analysis',
    items: ['NumPy','Pandas','Matplotlib','OpenCV','TensorFlow','PyTorch','Beautiful Soup'],
  },
  {
    title: 'Developer Tools',
    items: ['GitHub','VS Code','Android Studio','Jupyter Notebook','Google Colab','QGIS'],
  },
  {
    title: 'Soft Skills',
    items: ['Microsoft Office','Teamwork','Presentation','Documentation','Time Management','Adaptability'],
  },
];

/** Helpers */
const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};
const item = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.25 } },
};

function keyFor(label) {
  return label.trim().toLowerCase();
}

export default function SkillsSection() {
  // ensure no duplicates across groups (just in case)
  const seen = new Set();

  return (
    <div className={styles.wrap}>
      {GROUPS.map(group => {
        const unique = group.items.filter(lbl => {
          const k = keyFor(lbl);
          if (seen.has(k)) return false;
          seen.add(k);
          return true;
        });

        return (
          <section key={group.title} className={styles.group}>
            <h3 className={styles.heading}>{group.title}</h3>

            <motion.div
              className={styles.grid}
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {unique.map(lbl => {
                const k = keyFor(lbl);
                const icon = ICONS[k];
                const isSvg = icon?.endsWith('.svg');

                return (
                  <motion.div key={k} className={styles.item} variants={item} title={lbl}>
                    {icon ? (
                      <span className={styles.icon}>
                        {isSvg ? (
                          <img src={icon} alt={lbl} width={22} height={22} />
                        ) : (
                          <Image src={icon} alt={lbl} width={22} height={22} />
                        )}
                      </span>
                    ) : (
                      <span className={styles.iconPlaceholder} />
                    )}
                    <span className={styles.label}>{lbl}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </section>
        );
      })}
    </div>
  );
}
