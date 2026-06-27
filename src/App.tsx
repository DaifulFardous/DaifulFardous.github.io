import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { Terminal, Heart } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
    
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          // Triggers when the section dominates the center view of the window
          rootMargin: '-30% 0px -55% 0px',
        }
      );
      
      observer.observe(el);
      return { el, observer };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) {
          obs.observer.unobserve(obs.el);
        }
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-300 font-sans" id="portfolio-root">
      {/* Sticky Header Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Premium Designed Footer */}
      <footer className="border-t border-white/5 bg-[#010409] py-12 relative overflow-hidden" id="footer-section">
        {/* Subtle grid and glows in footer */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff01_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-20 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 text-center md:text-left">
          
          {/* Logo & Stack Badge */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <div className="bg-cyan-500/10 p-1.5 rounded-lg text-cyan-400 border border-cyan-500/20">
                <Terminal size={14} />
              </div>
              <span className="font-mono text-xs tracking-wider font-semibold text-gray-300">
                OASIS.<span className="text-cyan-400">DEV</span>
              </span>
            </div>
            <p className="text-[10px] font-mono text-gray-600 tracking-wider">
              EST. 2026 // SYSTEM_RENDER_OK
            </p>
          </div>

          {/* Core copyright text */}
          <div className="flex flex-col items-center gap-1.5">
            <p className="text-sm font-medium text-gray-400">
              Designed & Developed by <span className="text-gray-200 hover:text-cyan-400 transition-colors cursor-pointer font-semibold">D.S.M. Daiful Fardous Oasis</span>
            </p>
            <p className="text-[11px] text-gray-500 flex items-center gap-1 font-mono">
              Crafted in React with <Heart size={10} className="text-red-500 animate-pulse fill-red-500" /> & Tailwind CSS
            </p>
          </div>

          {/* Quick Home scroll link */}
          <button
            onClick={() => {
              document.getElementById('home')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="text-xs font-mono text-cyan-400 hover:text-cyan-300 bg-cyan-500/5 hover:bg-cyan-500/10 border border-cyan-500/10 hover:border-cyan-500/20 px-4 py-2 rounded-full transition-all cursor-pointer shadow-[0_0_10px_rgba(6,182,212,0.05)]"
          >
            Back to Top // ↑
          </button>

        </div>
      </footer>
    </div>
  );
}
