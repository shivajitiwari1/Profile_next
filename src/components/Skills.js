'use client';

import { Code } from 'lucide-react';
import styles from './Section.module.css';

export default function Skills({ skills }) {
  const skillCategories = [
    { key: 'frontend', title: 'Frontend Development', color: 'blue' },
    { key: 'backend', title: 'Backend Development', color: 'purple' },
    { key: 'database', title: 'Database & Storage', color: 'green' },
    { key: 'aiml', title: 'AI/ML & Automation', color: 'orange' },
    { key: 'devops', title: 'DevOps & Tools', color: 'cyan' },
    { key: 'ecommerce', title: 'E-commerce & CMS', color: 'pink' }
  ];

  return (
    <div className={`${styles.section} animate-fadeIn`}>
      <h2 className={styles.sectionTitle}>
        <Code className={styles.sectionIcon} size={36} />
        <span>Technical Skills</span>
      </h2>
      
      <div className={styles.skillsGrid}>
        {skillCategories.map((category) => (
          <div key={category.key} className={styles.card}>
            <h3 className={`${styles.skillCategory} ${styles[`skill${category.color.charAt(0).toUpperCase() + category.color.slice(1)}`]}`}>
              {category.title}
            </h3>
            <div className={styles.skillTags}>
              {skills?.[category.key]?.map((skill, i) => (
                <span 
                  key={i} 
                  className={`${styles.skillTag} ${styles[`skillTag${category.color.charAt(0).toUpperCase() + category.color.slice(1)}`]}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
