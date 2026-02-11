'use client';

import styles from './Footer.module.css';

export default function Footer({ profile }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>© 2026 {profile?.name || 'Shivaji Tiwari'}. All rights reserved.</p>
        <p className={styles.footerSubtitle}>
          Solutions Architect | Full-Stack Developer | AI/LLM Integration Specialist
        </p>
      </div>
    </footer>
  );
}
