import { Github, ExternalLink, Layers, ShoppingBag, Cpu, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { projects } from '../data';

// Map icon string to Lucide component
const iconMap: Record<string, any> = {
  Layers: Layers,
  ShoppingBag: ShoppingBag,
  Cpu: Cpu,
  Zap: Zap,
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#020617]">
      {/* Decorative backdrop glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16" id="projects-heading">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-cyan-400 font-mono text-xs tracking-widest uppercase mb-2"
          >
            My Portfolio
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-white"
          >
            Featured Engineering Projects
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '4rem' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="projects-grid">
          {projects.map((project, idx) => {
            const IconComponent = iconMap[project.iconName] || Layers;
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`glass-card rounded-2xl border border-white/5 overflow-hidden flex flex-col justify-between group hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-500 relative`}
              >
                {/* Glow border effect */}
                <div className={`absolute inset-0 bg-gradient-to-tr ${project.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl border-2 border-cyan-400/20`} />

                {/* 1. PROJECT IMAGE PLACEHOLDER: Beautiful, high-end abstract visual rendering */}
                <div className="h-56 relative border-b border-white/5 bg-gradient-to-b from-[#090e1a] to-[#040813] overflow-hidden flex items-center justify-center group-hover:border-white/10 transition-colors">
                  {/* Backdrop Matrix Grid */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:16px_16px]" />
                  
                  {/* Ambient Light Bloom */}
                  <div className="absolute w-36 h-36 rounded-full bg-cyan-500/10 blur-2xl group-hover:bg-cyan-500/20 transition-all duration-500" />

                  {/* SVG / CSS Abstract Dashboard Mockup based on project category */}
                  {project.id === 'nexterp' && (
                    <div className="relative z-10 w-4/5 h-3/4 bg-[#0a101f] rounded-lg border border-white/10 p-3 shadow-2xl flex flex-col gap-2 group-hover:translate-y-[-4px] transition-transform duration-500">
                      <div className="flex items-center justify-between border-b border-white/5 pb-2">
                        <div className="flex items-center gap-1.5">
                          <div className="w-2 h-2 rounded-full bg-red-500/80" />
                          <div className="w-2 h-2 rounded-full bg-amber-500/80" />
                          <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
                          <span className="text-[9px] font-mono text-slate-500 ml-1">nexterp_db_schema</span>
                        </div>
                        <div className="text-[8px] font-mono bg-cyan-500/10 text-cyan-400 px-1.5 py-0.5 rounded border border-cyan-500/20">LIVE</div>
                      </div>
                      <div className="grid grid-cols-3 gap-2 mt-1">
                        <div className="bg-white/5 p-2 rounded border border-white/5 flex flex-col gap-1">
                          <span className="text-[7px] font-mono text-slate-500">INVENTORY</span>
                          <div className="h-1 w-3/4 bg-cyan-400/60 rounded" />
                        </div>
                        <div className="bg-white/5 p-2 rounded border border-white/5 flex flex-col gap-1">
                          <span className="text-[7px] font-mono text-slate-500">LEDGER</span>
                          <div className="h-1 w-full bg-blue-400/60 rounded" />
                        </div>
                        <div className="bg-white/5 p-2 rounded border border-white/5 flex flex-col gap-1">
                          <span className="text-[7px] font-mono text-slate-500">EMPLOYEES</span>
                          <div className="h-1 w-1/2 bg-purple-400/60 rounded" />
                        </div>
                      </div>
                      <div className="mt-1 h-8 bg-white/5 rounded border border-white/5 p-1.5 flex flex-col gap-1 justify-center">
                        <div className="h-1 w-4/5 bg-slate-600 rounded" />
                        <div className="h-1 w-2/3 bg-slate-700 rounded" />
                      </div>
                    </div>
                  )}

                  {project.id === 'nextecom' && (
                    <div className="relative z-10 w-4/5 h-3/4 bg-[#0a101f] rounded-lg border border-white/10 p-3 shadow-2xl flex flex-col gap-2 group-hover:translate-y-[-4px] transition-transform duration-500">
                      <div className="flex items-center justify-between border-b border-white/5 pb-2">
                        <span className="text-[9px] font-mono text-slate-400 font-semibold flex items-center gap-1">
                          <ShoppingBag size={10} className="text-purple-400" /> MultiVendor ECom
                        </span>
                        <div className="flex gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2 mt-1">
                        <div className="bg-white/5 p-2 rounded border border-white/5 flex flex-col gap-1.5">
                          <div className="aspect-square bg-purple-500/10 rounded flex items-center justify-center">
                            <span className="text-[12px]">📦</span>
                          </div>
                          <div className="h-1.5 w-3/4 bg-slate-500 rounded" />
                          <div className="h-1.5 w-1/2 bg-purple-400 rounded" />
                        </div>
                        <div className="bg-white/5 p-2 rounded border border-white/5 flex flex-col gap-1.5">
                          <div className="aspect-square bg-indigo-500/10 rounded flex items-center justify-center">
                            <span className="text-[12px]">💻</span>
                          </div>
                          <div className="h-1.5 w-4/5 bg-slate-500 rounded" />
                          <div className="h-1.5 w-1/3 bg-indigo-400 rounded" />
                        </div>
                      </div>
                    </div>
                  )}

                  {project.id === 'nextpos' && (
                    <div className="relative z-10 w-4/5 h-3/4 bg-[#0a101f] rounded-lg border border-white/10 p-3 shadow-2xl flex flex-col gap-2 group-hover:translate-y-[-4px] transition-transform duration-500">
                      <div className="flex items-center justify-between border-b border-white/5 pb-2">
                        <span className="text-[9px] font-mono text-slate-400 font-semibold flex items-center gap-1">
                          <Cpu size={10} className="text-emerald-400" /> NextPOS Register
                        </span>
                        <span className="text-[8px] font-mono text-emerald-400 font-bold bg-emerald-500/5 px-1 py-0.2 rounded border border-emerald-500/20">ONLINE</span>
                      </div>
                      <div className="flex gap-2 items-center mt-1">
                        <div className="h-14 w-1/2 bg-white/5 rounded border border-white/5 p-1.5 flex flex-col justify-between">
                          <span className="text-[7px] font-mono text-slate-500">TOTAL DUE</span>
                          <span className="text-xs font-mono font-bold text-emerald-400">$2,450.00</span>
                        </div>
                        <div className="h-14 w-1/2 flex flex-col gap-1 justify-center">
                          <div className="h-2 w-full bg-slate-750 rounded" />
                          <div className="h-2 w-4/5 bg-slate-750 rounded" />
                          <div className="h-3 w-1/2 bg-emerald-500/40 rounded mt-1" />
                        </div>
                      </div>
                    </div>
                  )}

                  {project.id === 'zeomart' && (
                    <div className="relative z-10 w-4/5 h-3/4 bg-[#0a101f] rounded-lg border border-white/10 p-3 shadow-2xl flex flex-col gap-2 group-hover:translate-y-[-4px] transition-transform duration-500">
                      <div className="flex items-center justify-between border-b border-white/5 pb-2">
                        <span className="text-[9px] font-mono text-slate-400 font-semibold flex items-center gap-1">
                          <Zap size={10} className="text-amber-400 animate-pulse" /> ZeoMart Headless
                        </span>
                        <span className="text-[8px] font-mono text-slate-500">Static Export</span>
                      </div>
                      <div className="flex-1 flex flex-col justify-center items-center gap-2">
                        <span className="text-xl">⚡</span>
                        <span className="text-[9px] font-mono text-amber-300 bg-amber-400/5 px-2 py-0.5 rounded border border-amber-400/10">FASTEST PAGE TRANSITIONS</span>
                      </div>
                    </div>
                  )}

                  {/* Centered Floating Project Icon */}
                  <div className="absolute top-4 right-4 p-2 bg-[#0c1322] border border-white/10 text-cyan-400 rounded-xl shadow-lg group-hover:scale-110 group-hover:text-cyan-300 transition-all duration-300">
                    <IconComponent size={18} />
                  </div>
                </div>

                {/* 2. PROJECT COPY INFO */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between text-left relative z-10">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2.5 font-sans group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6 font-sans">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech stack, GitHub & Demo links */}
                  <div>
                    {/* Technology tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-[10px] font-semibold tracking-wide font-mono text-cyan-400 bg-cyan-500/5 rounded border border-cyan-500/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>                    
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
