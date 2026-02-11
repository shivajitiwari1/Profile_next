'use client';

import { Award } from 'lucide-react';
import styles from './Section.module.css';

export default function About({ summary, stats, education }) {
  return (
    <div className={`${styles.section} animate-fadeIn`}>
      <h2 className={styles.sectionTitle}>
        <Award className={styles.sectionIcon} size={36} />
        <span>About Me</span>
      </h2>
      
      <div className={styles.card}>
        <h3 className={styles.cardTitle}>Professional Summary</h3>
        <p className={styles.cardText}>{summary?.description1}</p>
        <p className={styles.cardText}>{summary?.description2}</p>
      </div>

      <div className={styles.statsGrid}>
        {stats?.map((stat, index) => (
          <div key={index} className={`${styles.statCard} ${styles[`stat${stat.color.charAt(0).toUpperCase() + stat.color.slice(1)}`]}`}>
            <div className={styles.statNumber}>{stat.value}</div>
            <div className={styles.statLabel}>{stat.label}</div>
          </div>
        ))}
      </div>

      <div className={styles.card}>
        <h3 className={styles.cardTitle}>Education</h3>
        <div className={styles.educationList}>
          {education?.map((edu, index) => (
            <div key={index} className={styles.educationItem}>
              <div className={styles.educationDegree}>{edu.degree}</div>
              <div className={styles.educationDetails}>
                {edu.institution} | {edu.period} | {edu.percentage}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
