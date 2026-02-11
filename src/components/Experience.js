'use client';

import { Briefcase, ChevronDown } from 'lucide-react';
import styles from './Section.module.css';

export default function Experience({ experience }) {
  return (
    <div className={`${styles.section} animate-fadeIn`}>
      <h2 className={styles.sectionTitle}>
        <Briefcase className={styles.sectionIcon} size={36} />
        <span>Professional Experience</span>
      </h2>
      
      <div className={styles.experienceList}>
        {experience?.map((job) => (
          <div key={job.id} className={`${styles.card} ${styles.cardHover}`}>
            <div className={styles.experienceHeader}>
              <div>
                <h3 className={styles.experienceRole}>{job.role}</h3>
                <div className={styles.experienceCompany}>{job.company}</div>
              </div>
              <div className={styles.experienceMeta}>
                <div>{job.period}</div>
                <div className={styles.experienceLocation}>{job.location}</div>
              </div>
            </div>
            <div className={styles.highlightsList}>
              {job.highlights.map((highlight, i) => (
                <div key={i} className={styles.highlightItem}>
                  <ChevronDown className={styles.highlightIcon} size={20} />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
