import { Server, Layout, Database, Award, Briefcase, Zap, Layers } from 'lucide-react';
import { motion } from 'motion/react';
import { personalInfo } from '../data';

export default function About() {
  const stats = [
    { label: 'Years Experience', value: '5+', icon: Award, color: 'text-cyan-400' },
    { label: 'Completed Systems', value: '25+', icon: Briefcase, color: 'text-blue-400' },
    { label: 'Happy Clients', value: '15+', icon: Zap, color: 'text-emerald-400' },
  ];

  const pillars = [
  {
    title: 'Full Stack Development',
    desc: 'Seamlessly binding robust, high-performance Laravel APIs with dynamic, reactive Next.js and React user interfaces.',
    icon: Layout,
    color: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/10',
  },
  {
    title: 'Enterprise Architecture',
    desc: 'Architecting custom multi-tenant ERP software, real-time POS portals, and modular web infrastructures designed for scale.',
    icon: Server,
    color: 'bg-blue-500/10 text-blue-400 border-blue-500/10',
  },
  {
    title: 'Database & API Design',
    desc: 'Designing optimized relational schemas in MySQL and building low-latency, secure REST APIs tested with Docker and Postman.',
    icon: Database,
    color: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/10',
  },
  {
    title: 'Performance & Optimization',
    desc: 'Optimizing applications through caching, image optimization, efficient database queries, and clean architecture for maximum performance.',
    icon: Zap,
    color: 'bg-amber-500/10 text-amber-400 border-amber-500/10',
  },
];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#020617]">
      {/* Decorative background accents */}
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-blue-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16" id="about-heading">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-cyan-400 font-mono text-xs tracking-widest uppercase mb-2"
          >
            About Me
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-white"
          >
            Engineering Premium Enterprise Solutions
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '4rem' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="about-content">
          
          {/* Left Column: Story + Stats */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 rounded-2xl border border-white/5 shadow-2xl relative overflow-hidden group"
            >
              {/* Corner ambient glow */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
              
              <h3 className="text-xl font-semibold text-white mb-4">My Professional Journey</h3>
              <p className="text-slate-400 leading-relaxed mb-6 font-sans">
                {personalInfo.extendedBio}
              </p>
              <p className="text-slate-400 leading-relaxed font-sans">
                Throughout my career, I have dedicated myself to optimizing operational workflows by designing custom platforms like <span className="text-cyan-300 font-medium font-mono">NextERP</span> and <span className="text-cyan-300 font-medium font-mono">NextEcom</span>. My code philosophy centers on writing clean, modular, and maintainable structures that support high transaction volumes without compromising response times or developer experience.
              </p>
            </motion.div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, idx) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="glass-card p-5 rounded-xl border border-white/5 text-center flex flex-col items-center justify-center relative overflow-hidden group hover:border-cyan-500/20 hover:shadow-[0_0_15px_rgba(6,182,212,0.05)] transition-all duration-300"
                  >
                    <div className={`${stat.color} mb-2 bg-white/5 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent size={18} />
                    </div>
                    <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-sans">
                      {stat.value}
                    </span>
                    <span className="text-[10px] sm:text-xs text-slate-500 tracking-wider font-medium uppercase mt-1">
                      {stat.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Key Focus Pillars */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            {pillars.map((pillar, idx) => {
              const IconComponent = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="glass-card p-6 rounded-2xl border border-white/5 flex gap-5 items-start hover:border-cyan-500/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.05)] transition-all duration-300"
                >
                  <div className={`p-3.5 rounded-xl border ${pillar.color} shrink-0`}>
                    <IconComponent size={22} />
                  </div>
                  <div className="text-left">
                    <h4 className="text-base font-semibold text-white mb-2 tracking-wide font-sans">
                      {pillar.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
