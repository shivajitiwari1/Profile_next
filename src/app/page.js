'use client';

import { useState, useEffect } from 'react';
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

  useEffect(() => {
    // Fetch all portfolio data from API
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
      />
      
      <Hero 
        profile={portfolioData.profile}
        summary={portfolioData.summary}
        setActiveSection={setActiveSection}
      />

      <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '3rem 1rem' }}>
        {activeSection === 'about' && (
          <About 
            summary={portfolioData.summary}
            stats={portfolioData.stats}
            education={portfolioData.education}
          />
        )}

        {activeSection === 'experience' && (
          <Experience experience={portfolioData.experience} />
        )}

        {activeSection === 'projects' && (
          <Projects projects={portfolioData.projects} />
        )}

        {activeSection === 'skills' && (
          <Skills skills={portfolioData.skills} />
        )}

        {activeSection === 'services' && (
          <Services services={portfolioData.services} />
        )}

        {activeSection === 'contact' && (
          <Contact profile={portfolioData.profile} />
        )}
      </main>

      <Footer profile={portfolioData.profile} />
    </div>
  );
}
