import { Briefcase, Calendar, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { experience } from '../data';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#020617]">
      {/* Visual background rings */}
      <div className="absolute top-1/2 left-1/4 w-[350px] h-[350px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[300px] h-[300px] rounded-full bg-blue-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16" id="experience-heading">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-cyan-400 font-mono text-xs tracking-widest uppercase mb-2"
          >
            My Journey
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-white"
          >
            Work Experience
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '4rem' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto mt-16" id="experience-timeline">
          
          {/* Vertical Center/Left line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-cyan-500/50 via-cyan-500/10 to-transparent pointer-events-none" />

          {/* Timeline Nodes */}
          <div className="flex flex-col gap-12">
            {experience.map((item, idx) => {
              const isEven = idx % 2 === 0;
              
              return (
                <div
                  key={item.id}
                  className={`flex flex-col md:flex-row relative ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Anchor Point Node */}
                  <div className="absolute left-4 md:left-1/2 top-6 -translate-x-[7px] md:-translate-x-1/2 z-20">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#020617] border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_10px_rgba(34,211,238,0.5)]">
                      <div className="w-1 h-1 rounded-full bg-cyan-400" />
                    </div>
                  </div>

                  {/* Empty Spacer on large screens */}
                  <div className="hidden md:block w-1/2" />

                  {/* Card Panel */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8 text-left"
                  >
                    <div className="glass-card p-6 md:p-8 rounded-2xl border border-white/5 hover:border-cyan-500/20 transition-colors shadow-xl relative overflow-hidden group">
                      
                      {/* Accent corner line */}
                      <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-cyan-400 to-blue-500 rounded-l-2xl" />

                      {/* Header block */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                        <div>
                          <span className="text-cyan-400 font-mono text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5">
                            <Briefcase size={12} />
                            {item.company}
                          </span>
                          <h3 className="text-xl font-bold text-white mt-1 font-sans">
                            {item.role}
                          </h3>
                        </div>
                        
                        <div className="flex items-center gap-1 text-xs text-slate-500 font-mono bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                          <Calendar size={12} className="text-cyan-500" />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      {/* Achievements bullets */}
                      <ul className="space-y-3.5 mb-6">
                        {item.description.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex gap-2.5 items-start text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                            <CheckCircle size={14} className="text-cyan-500/80 mt-1 shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech stack badges */}
                      <div className="border-t border-white/5 pt-4">
                        <p className="text-[10px] font-mono text-slate-500 tracking-wider uppercase mb-2.5">
                          // TECHNOLOGIES APPLIED
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {item.techUsed.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 text-[10px] font-mono text-slate-300 bg-white/5 rounded border border-white/5"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
