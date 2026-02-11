'use client';

import { Code, ChevronDown, ExternalLink } from 'lucide-react';
import styles from './Section.module.css';

export default function Projects({ projects }) {
  return (
    <div className={`${styles.section} animate-fadeIn`}>
      <h2 className={styles.sectionTitle}>
        <Code className={styles.sectionIcon} size={36} />
        <span>Featured Projects</span>
      </h2>
      
      <div className={styles.projectsGrid}>
        {projects?.map((project) => (
          <div key={project.id} className={`${styles.card} ${styles.cardHover}`}>
            <div className={styles.projectHeader}>
              <div>
                <h3 className={styles.projectName}>{project.name}</h3>
                <div className={styles.projectCompany}>{project.company}</div>
              </div>
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  <ExternalLink size={20} />
                </a>
              )}
            </div>
            
            <p className={styles.projectDescription}>{project.description}</p>
            
            <div className={styles.projectImpact}>
              <div className={styles.impactLabel}>Key Impact:</div>
              <div className={styles.impactList}>
                {project.impact.map((item, i) => (
                  <div key={i} className={styles.impactItem}>
                    <ChevronDown className={styles.impactIcon} size={16} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className={styles.techTags}>
              {project.tech.map((tech, i) => (
                <span key={i} className={styles.techTag}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
