'use client';

import { Mail, Linkedin } from 'lucide-react';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero({ profile, summary, setActiveSection }) {
  return (
    <div className={styles.hero}>
      <div className={styles.heroOverlay}></div>
      <div className={styles.container}>
        <div className={styles.heroGrid}>
          <div className={styles.heroText}>
            <div className={styles.availabilityBadge}>
              {profile?.availability || 'Available for Remote Opportunities'}
            </div>
            <h1 className={styles.heroTitle}>{profile?.name || 'Shivaji Tiwari'}</h1>
            <h2 className={styles.heroSubtitle}>
              {profile?.title || 'Solutions Architect & Senior Full-Stack Developer'}
            </h2>
            <p className={styles.heroDescription}>
              {summary?.intro || '16+ years building scalable, secure platforms.'}
            </p>
            <div className={styles.heroButtons}>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSection('contact');
                }}
                className={`${styles.btn} ${styles.btnPrimary}`}
              >
                <Mail size={20} />
                <span>Get in Touch</span>
              </a>
              <a
                href={profile?.linkedin || 'https://linkedin.com/in/shivajitiwari'}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.btn} ${styles.btnSecondary}`}
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
          <div className={styles.heroImageContainer}>
            <div className={styles.imageGlow}></div>
            <Image
              src={profile?.profileImage || '/images/profile.jpg'}
              alt={profile?.name || 'Profile'}
              width={320}
              height={320}
              className={styles.heroImage}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
