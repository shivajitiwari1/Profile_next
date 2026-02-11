'use client';

import { Briefcase } from 'lucide-react';
import styles from './Section.module.css';

export default function Services({ services }) {
  return (
    <div className={`${styles.section} animate-fadeIn`}>
      <h2 className={styles.sectionTitle}>
        <Briefcase className={styles.sectionIcon} size={36} />
        <span>Consulting Services</span>
      </h2>
      
      <div className={`${styles.card} ${styles.servicesIntro}`}>
        <p className={styles.servicesIntroText}>
          Available for contract engagements, consulting projects, and full-time remote opportunities. 
          Specializing in AI integration, full-stack development, and performance optimization for 
          startups and enterprises worldwide.
        </p>
      </div>

      <div className={styles.servicesGrid}>
        {services?.map((service) => (
          <div key={service.id} className={`${styles.card} ${styles.cardHover} ${styles.serviceCard}`}>
            <h3 className={styles.serviceTitle}>{service.title}</h3>
            <p className={styles.serviceDescription}>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
