'use client';

import { useState, useEffect, useRef } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔥 Section Refs
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    fetch('/api/portfolio')
      .then(res => res.json())
      .then(data => {
        setPortfolioData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching portfolio data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        fontSize: '1.5rem',
        color: '#60a5fa'
      }}>
        Loading...
      </div>
    );
  }

  if (!portfolioData) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        fontSize: '1.5rem',
        color: '#ef4444'
      }}>
        Error loading portfolio data
      </div>
    );
  }

  return (
    <div>
      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        profile={portfolioData.profile}
        sectionRefs={{
          about: aboutRef,
          experience: experienceRef,
          projects: projectsRef,
          skills: skillsRef,
          services: servicesRef,
          contact: contactRef
        }}
      />

      <Hero
        profile={portfolioData.profile}
        summary={portfolioData.summary}
      />

      <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '3rem 1rem' }}>

        <section ref={aboutRef}>
          <About
            summary={portfolioData.summary}
            stats={portfolioData.stats}
            education={portfolioData.education}
          />
        </section>

        <section ref={experienceRef}>
          <Experience experience={portfolioData.experience} />
        </section>

        <section ref={projectsRef}>
          <Projects projects={portfolioData.projects} />
        </section>

        <section ref={skillsRef}>
          <Skills skills={portfolioData.skills} />
        </section>

        <section ref={servicesRef}>
          <Services services={portfolioData.services} />
        </section>

        <section ref={contactRef}>
          <Contact profile={portfolioData.profile} />
        </section>

      </main>

      <Footer profile={portfolioData.profile} />
    </div>
  );
}
