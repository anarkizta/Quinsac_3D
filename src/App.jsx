import React, { useState, useEffect, useRef } from 'react';
import { Scene3D } from './components/canvas/Scene3D';
import { Navbar } from './components/ui/Navbar';
import { HeroSection } from './components/ui/HeroSection';
import { AboutSection } from './components/ui/AboutSection';
import { ServicesSection } from './components/ui/ServicesSection';
import { ProjectsSection } from './components/ui/ProjectsSection';
import { ContactSection } from './components/ui/ContactSection';
import { Footer } from './components/ui/Footer';
import { ProjectModal } from './components/ui/ProjectModal';
import { AccessibilityControls } from './components/ui/AccessibilityControls';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState('hero');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [selectedProject, setSelectedProject] = useState(null);
  const [wireframeMode, setWireframeMode] = useState(false);
  const [motionReduced, setMotionReduced] = useState(false);

  // Track global scroll
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const current = window.scrollY;
      const progress = totalHeight > 0 ? Math.min(Math.max(current / totalHeight, 0), 1) : 0;
      setScrollProgress(progress);

      // Section calculation
      if (progress < 0.18) setCurrentSection('hero');
      else if (progress < 0.40) setCurrentSection('nosotros');
      else if (progress < 0.72) setCurrentSection('servicios');
      else if (progress < 0.88) setCurrentSection('proyectos');
      else setCurrentSection('contacto');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track mouse coordinates for 3D parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (motionReduced) return;
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [motionReduced]);

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-[#0b0f14] text-slate-100 min-h-screen selection:bg-[#82DF26] selection:text-black">
      {/* Background Technical Grid and Noise */}
      <div className="fixed inset-0 tech-grid pointer-events-none opacity-40 z-0" />
      <div className="noise-overlay" />

      {/* Persistent WebGL 3D Canvas Scene */}
      <Scene3D
        scrollProgress={motionReduced ? 0 : scrollProgress}
        mousePos={mousePos}
        wireframeMode={wireframeMode}
      />

      {/* Fixed UI Header */}
      <Navbar currentSection={currentSection} onNavigate={scrollToSection} />

      {/* Main Scrollytelling Sections Flow */}
      <main className="relative z-10">
        <div id="hero">
          <HeroSection
            onExplore={() => scrollToSection('servicios')}
            onContact={() => scrollToSection('contacto')}
          />
        </div>

        <div id="nosotros">
          <AboutSection />
        </div>

        <div id="servicios">
          <ServicesSection />
        </div>

        <div id="proyectos">
          <ProjectsSection onSelectProject={setSelectedProject} />
        </div>

        <div id="contacto">
          <ContactSection />
        </div>
      </main>

      {/* Footer */}
      <Footer onScrollTop={() => scrollToSection('hero')} />

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Accessibility & 3D Controls */}
      <AccessibilityControls
        wireframeMode={wireframeMode}
        setWireframeMode={setWireframeMode}
        motionReduced={motionReduced}
        setMotionReduced={setMotionReduced}
      />
    </div>
  );
}
