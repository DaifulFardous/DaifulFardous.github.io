import { ArrowRight, Download, Mail, Terminal, Cpu, Database, Code } from 'lucide-react';
import { motion } from 'motion/react';
import { personalInfo } from '../data';

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // PROFILE IMAGE REPLACEMENT CONFIGURATION:
  // To replace the profile image, replace the path below with your image URL or import a local file.
  // Example: const profileImageUrl = "/src/assets/profile.jpg";
  const profileImageUrl = "/public/oasis.jpg"; // Leave empty to display the beautiful premium abstract tech avatar placeholder

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#020617]"
    >
      {/* Glow Backdrops */}
      <div className="absolute top-[-100px] right-[-100px] w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-50px] left-[-50px] w-80 h-80 bg-blue-600/10 rounded-full blur-[100px]" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* Tech Line Accents */}
      <div className="absolute top-0 left-1/3 w-[1px] h-full bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Side: Copy */}
        <div className="lg:col-span-7 flex flex-col items-start text-left" id="hero-left-content">
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-[10px] font-bold uppercase tracking-widest mb-6"
          >
            Available for Projects
          </motion.div>

          {/* Name Header */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight text-white mb-4 leading-[1.1]"
          >
            <span className="text-gradient">
              {personalInfo.name}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl font-light tracking-tight text-cyan-400 mb-6 font-sans"
          >
            {personalInfo.title}
          </motion.h2>

          {/* Short Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg text-slate-400 max-w-xl mb-8 leading-relaxed font-sans"
          >
            {personalInfo.shortBio}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 w-full sm:w-auto"
            id="hero-actions"
          >
            <button
              onClick={() => handleScrollTo('projects')}
              className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-white accent-gradient glow-cyan hover:scale-105 transition-all cursor-pointer shadow-lg shadow-cyan-500/20"
            >
              View Projects
              <ArrowRight size={16} />
            </button>

            <button
              onClick={() => handleScrollTo('contact')}
              className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold text-white glass-card hover:bg-white/10 transition-all cursor-pointer"
            >
              Contact Me
              <Mail size={16} />
            </button>

            <a
              href={personalInfo.resumeUrl}
              download
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold tracking-wide text-cyan-400 bg-cyan-500/5 hover:bg-cyan-500/10 border border-cyan-500/20 hover:border-cyan-500/30 transition-all hover:scale-[1.02]"
              title="Download professional resume PDF"
            >
              Download Resume
              <Download size={16} />
            </a>
          </motion.div>
        </div>

        {/* Right Side: Circular Profile Image / Aesthetic Stage */}
        <div className="lg:col-span-5 flex justify-center items-center" id="hero-right-stage">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96"
          >
            {/* Spinning Outer Orbit Ring */}
            <div className="absolute inset-0 rounded-full border border-dashed border-cyan-500/20 animate-[spin_40s_linear_infinite]" />
            
            {/* Spinning Inner Ring */}
            <div className="absolute inset-6 rounded-full border border-cyan-500/10 animate-[spin_25s_linear_infinite_reverse]" />

            {/* Glowing Backdrop behind Avatar */}
            <div className="absolute inset-12 rounded-full bg-cyan-400 blur-2xl opacity-20 animate-pulse" />

            {/* Floating Tech Badges around Avatar */}
            <motion.div
              className="absolute -top-4 -right-2 bg-[#0a101f]/90 border border-cyan-500/20 p-2.5 rounded-xl flex items-center gap-2 shadow-xl shadow-black/40 animate-float-slow"
              title="Laravel Expertise"
            >
              <div className="bg-red-500/20 p-1.5 rounded-lg text-red-400">
                <Cpu size={16} />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-mono text-slate-500">BACKEND</p>
                <p className="text-xs font-semibold text-slate-200">Laravel</p>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-2 -left-4 bg-[#0a101f]/90 border border-cyan-500/20 p-2.5 rounded-xl flex items-center gap-2 shadow-xl shadow-black/40 animate-float-delayed"
              title="React / Next.js Architecture"
            >
              <div className="bg-cyan-500/20 p-1.5 rounded-lg text-cyan-400">
                <Code size={16} />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-mono text-slate-500">FRONTEND</p>
                <p className="text-xs font-semibold text-slate-200">Next.js</p>
              </div>
            </motion.div>

            {/* Center Profile Ring Container */}
            <div className="absolute inset-10 rounded-full p-1.5 bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-600 shadow-[0_0_40px_rgba(6,182,212,0.15)] flex items-center justify-center overflow-hidden">
              
              {/* Profile Image Element */}
              {profileImageUrl ? (
                <img
                  src={profileImageUrl}
                  alt={personalInfo.name}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                /* Premium CSS Visual Tech Avatar Placeholder */
                <div className="w-full h-full rounded-full bg-slate-800 flex flex-col items-center justify-center relative overflow-hidden group">
                  {/* Subtle Grid overlay */}
                  <div className="absolute inset-0 bg-[radial-gradient(#22d3ee0d_1px,transparent_1px)] [background-size:12px_12px]" />
                  
                  {/* Initials and Icon */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="text-cyan-400 p-3 bg-cyan-500/5 rounded-2xl border border-cyan-500/10 mb-3 group-hover:scale-110 transition-transform duration-300">
                      <Terminal size={32} className="animate-pulse" />
                    </div>
                    <span className="text-3xl font-extrabold tracking-wider text-slate-100 font-sans">
                      {personalInfo.avatarPlaceholderText}
                    </span>
                    <span className="text-[10px] font-mono text-cyan-400/70 tracking-widest uppercase mt-1">
                      Full-Stack Dev
                    </span>
                  </div>

                  {/* Circular Tech Lines inside Avatar */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1 font-mono text-[9px] text-slate-500 bg-white/5 px-2 py-0.5 rounded-full border border-white/5">
                    <Database size={8} />
                    <span>REST_API: OK</span>
                  </div>

                  {/* Top Highlight Flare */}
                  <div className="absolute -top-12 -left-12 w-24 h-24 bg-cyan-400/10 rounded-full blur-xl" />
                </div>
              )}
            </div>

            {/* Micro Details */}
            <div className="absolute bottom-6 right-6 w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
            <div className="absolute bottom-6 right-6 w-3 h-3 rounded-full bg-emerald-500 border-2 border-[#020617]" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
