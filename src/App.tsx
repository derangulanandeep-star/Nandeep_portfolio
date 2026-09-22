import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { LearningJourneySection } from './components/LearningJourneySection';
import { FutureGoalsSection } from './components/FutureGoalsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sectionIds = ['hero', 'about', 'skills', 'projects', 'journey', 'goals', 'contact'];
    const handleScroll = () => {
      const scrollY = window.scrollY + 200;
      for (const id of sectionIds) {
        const elem = document.getElementById(id);
        if (elem) {
          const top = elem.offsetTop;
          const height = elem.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-['Plus_Jakarta_Sans',sans-serif] selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections strictly in requested order */}
      <main className="flex-1 w-full">
        {/* 1. HERO SECTION */}
        <HeroSection />

        {/* 2. ABOUT ME */}
        <AboutSection />

        {/* 3. SKILLS */}
        <SkillsSection />

        {/* 4. PROJECTS */}
        <ProjectsSection />

        {/* 5. LEARNING JOURNEY */}
        <LearningJourneySection />

        {/* 6. FUTURE GOALS */}
        <FutureGoalsSection />

        {/* 7. CONTACT SECTION */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
