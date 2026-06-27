import { useState } from 'react';
import { Server, Layout, Wrench, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { skills } from '../data';

export default function Skills() {
 const [activeTab, setActiveTab] = useState<'all' | 'backend' | 'frontend' | 'tools'>('backend');

const categories = [
  { id: 'backend', label: 'Backend', icon: Server },
  { id: 'frontend', label: 'Frontend', icon: Layout },
  { id: 'tools', label: 'Tools', icon: Wrench },
  { id: 'all', label: 'All Tech', icon: CheckCircle },
];

  const filteredSkills = skills.filter(
    (skill) => activeTab === 'all' || skill.category === activeTab
  );

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#020617]">
      {/* Dynamic light glows */}
      <div className="absolute top-10 right-10 w-[350px] h-[350px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16" id="skills-heading">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-cyan-400 font-mono text-xs tracking-widest uppercase mb-2"
          >
            Technical Stack
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-white"
          >
            Expertise & Technologies
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '4rem' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap justify-center gap-3 mb-12" id="skills-tabs">
          {categories.map((category) => {
            const IconComp = category.icon;
            const isActive = activeTab === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id as any)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 border cursor-pointer relative ${
                  isActive
                    ? 'border-cyan-500/30 text-white bg-cyan-500/10 shadow-[0_0_15px_rgba(6,182,212,0.1)]'
                    : 'border-white/5 text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
              >
                <IconComp size={14} className={isActive ? 'text-cyan-400' : 'text-slate-400'} />
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          id="skills-grid"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              key={skill.name}
              className="glass-card p-6 rounded-2xl border border-white/5 hover:border-cyan-500/25 hover:shadow-[0_0_20px_rgba(6,182,212,0.05)] transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Card Header */}
              <div className="flex justify-between items-center mb-4">
                <span className="text-base font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors font-sans">
                  {skill.name}
                </span>
                <span className="text-xs font-semibold text-cyan-400 font-mono bg-cyan-500/5 px-2.5 py-1 rounded-md border border-cyan-500/10">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Track */}
              <div className="w-full bg-slate-900/80 rounded-full h-2 overflow-hidden border border-white/5 mb-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
                  className="bg-gradient-to-r from-cyan-400 to-blue-500 h-full rounded-full shadow-[0_0_10px_rgba(34,211,238,0.3)]"
                />
              </div>

              {/* Footer Type Tag */}
              <div className="flex justify-between items-center mt-3">
                <span className="text-[10px] font-mono text-slate-500 tracking-wider uppercase">
                  {skill.category === 'backend' ? '// SERVER_SIDE' : skill.category === 'frontend' ? '// CLIENT_SIDE' : '// TOOLING'}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/40 group-hover:bg-cyan-400 transition-colors group-hover:scale-125" />
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
