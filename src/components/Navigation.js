'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './Navigation.module.css';

export default function Navigation({ activeSection, setActiveSection, profile }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const NavLink = ({ section, label }) => (
    <button
      onClick={() => {
        setActiveSection(section);
        setMobileMenuOpen(false);
      }}
      className={`${styles.navLink} ${activeSection === section ? styles.active : ''}`}
    >
      {label}
    </button>
  );

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.navHeader}>
          <div className={styles.logoSection}>
            <div className={styles.logoIcon}>ST</div>
            <div className={styles.logoText}>
              <div className={styles.logoName}>{profile?.name || 'Shivaji Tiwari'}</div>
              <div className={styles.logoSubtitle}>Solutions Architect</div>
            </div>
          </div>

          <div className={styles.desktopNav}>
            <NavLink section="about" label="About" />
            <NavLink section="experience" label="Experience" />
            <NavLink section="projects" label="Projects" />
            <NavLink section="skills" label="Skills" />
            <NavLink section="services" label="Services" />
            <NavLink section="contact" label="Contact" />
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={styles.mobileMenuBtn}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className={styles.mobileNav}>
            <NavLink section="about" label="About" />
            <NavLink section="experience" label="Experience" />
            <NavLink section="projects" label="Projects" />
            <NavLink section="skills" label="Skills" />
            <NavLink section="services" label="Services" />
            <NavLink section="contact" label="Contact" />
          </div>
        )}
      </div>
    </nav>
  );
}
