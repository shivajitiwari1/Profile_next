'use client';

import { Mail, Phone, Linkedin, MapPin, ChevronDown } from 'lucide-react';
import styles from './Section.module.css';

export default function Contact({ profile }) {
  const benefits = [
    {
      title: '16+ Years Experience',
      description: 'Proven track record across diverse industries and tech stacks'
    },
    {
      title: 'AI/LLM Expertise',
      description: 'Cutting-edge integration with GPT-4, Claude, RAG systems'
    },
    {
      title: 'Full-Stack Mastery',
      description: 'React, Next.js, Node.js, PHP, databases, and cloud infrastructure'
    },
    {
      title: 'Performance-Driven',
      description: '40% load time reduction, 30% performance improvements'
    },
    {
      title: 'Automation Specialist',
      description: '60%+ reduction in manual operations through intelligent automation'
    },
    {
      title: 'Global Remote Ready',
      description: 'Experienced with international teams and async collaboration'
    }
  ];

  return (
    <div className={`${styles.section} animate-fadeIn`}>
      <h2 className={styles.sectionTitle}>
        <Mail className={styles.sectionIcon} size={36} />
        <span>Get In Touch</span>
      </h2>
      
      <div className={styles.contactGrid}>
        <div className={styles.contactLeft}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Contact Information</h3>
            
            <div className={styles.contactList}>
              <a href={`mailto:${profile?.email}`} className={styles.contactItem}>
                <Mail className={styles.contactIcon} size={24} />
                <span>{profile?.email}</span>
              </a>
              
              <a href={`tel:${profile?.phone}`} className={styles.contactItem}>
                <Phone className={styles.contactIcon} size={24} />
                <span>{profile?.phone}</span>
              </a>
              
              <a href={profile?.linkedin} target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
                <Linkedin className={styles.contactIcon} size={24} />
                <span>{profile?.linkedin?.replace('https://', '')}</span>
              </a>
              
              <div className={styles.contactItem}>
                <MapPin className={styles.contactIcon} size={24} />
                <span>{profile?.location}</span>
              </div>
            </div>
          </div>

          <div className={`${styles.card} ${styles.availabilityCard}`}>
            <h3 className={styles.availabilityTitle}>Availability</h3>
            <p className={styles.availabilityText}>
              Currently available for freelance projects, consulting engagements, and full-time remote 
              opportunities with companies worldwide.
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Why Work With Me?</h3>
          
          <div className={styles.benefitsList}>
            {benefits.map((benefit, index) => (
              <div key={index} className={styles.benefitItem}>
                <ChevronDown className={styles.benefitIcon} size={20} />
                <div>
                  <div className={styles.benefitTitle}>{benefit.title}</div>
                  <div className={styles.benefitDescription}>{benefit.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
