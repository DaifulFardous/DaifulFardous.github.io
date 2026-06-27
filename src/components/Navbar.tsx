import { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-3 shadow-lg shadow-cyan-950/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div 
          onClick={() => handleScrollTo('home')}
          className="flex items-center gap-2.5 cursor-pointer group"
          id="nav-logo"
        >
          <div className="bg-gradient-to-tr from-cyan-500 to-blue-600 p-2 rounded-xl text-white shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
            <Terminal size={18} />
          </div>
          <span className="font-mono text-sm tracking-wider font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors duration-300">
            OASIS.<span className="text-cyan-400">DEV</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1.5" id="nav-desktop-menu">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScrollTo(item.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 relative cursor-pointer ${
                activeSection === item.id
                  ? 'text-cyan-400'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
              }`}
            >
              {item.name}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeDot"
                  className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
          
          <button
            onClick={() => handleScrollTo('contact')}
            className="ml-4 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-cyan-500/10 hover:bg-cyan-500 text-cyan-400 hover:text-gray-950 border border-cyan-500/30 hover:border-transparent transition-all duration-300 cursor-pointer shadow-[0_0_15px_rgba(6,182,212,0.1)] hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Toggle navigation menu"
          id="nav-mobile-toggle"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-nav border-t border-white/5 absolute top-full left-0 w-full overflow-hidden shadow-2xl"
            id="nav-mobile-menu"
          >
            <div className="flex flex-col px-6 py-6 gap-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScrollTo(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium tracking-wide transition-all ${
                    activeSection === item.id
                      ? 'bg-cyan-500/10 text-cyan-400 border-l-4 border-cyan-400'
                      : 'text-slate-400 hover:text-slate-100 hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => handleScrollTo('contact')}
                className="w-full mt-2 text-center py-3 rounded-xl text-sm font-semibold tracking-wider uppercase bg-cyan-500 text-gray-950 transition-all hover:bg-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.2)]"
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
