import { Skill, Project, ExperienceItem, SocialLink } from './types';

export const personalInfo = {
  name: 'D.S.M. Daiful Fardous Oasis',
  title: 'Full Stack Software Engineer',
  shortBio: 'I build scalable web applications, enterprise ERP systems, eCommerce platforms, and modern REST APIs using Laravel, Next.js, React, and modern web technologies.',
  extendedBio: 'I am a passionate and results-driven Full Stack Software Engineer with deep expertise in backend architectures and modern frontend frameworks. I specialize in bridging the robust capabilities of Laravel and PHP with the cutting-edge interactive performance of Next.js and React. With a strong foundation in designing high-availability database schemas, optimized RESTful APIs, and responsive enterprise software, I deliver products that are clean, lightweight, secure, and built to scale.',
  email: 'wsmoasis2@gmail.com',
  resumeUrl: '/resume.pdf', // Placeholder for Resume Download
  avatarPlaceholderText: 'DFO', // Initials for avatar
};

export const skills: Skill[] = [
  // Backend
  { name: 'Laravel', level: 98, category: 'backend' },
  { name: 'PHP', level: 95, category: 'backend' },
  { name: 'Node.js', level: 85, category: 'backend' },
  { name: 'REST API Development', level: 96, category: 'backend' },
  { name: 'MySQL', level: 93, category: 'backend' },
  { name: 'Modular Architecture', level: 95, category: 'backend' },

  // Frontend
  { name: 'Next.js', level: 90, category: 'frontend' },
  { name: 'React', level: 88, category: 'frontend' },
  { name: 'TypeScript', level: 82, category: 'frontend' },
  { name: 'JavaScript (ES6+)', level: 94, category: 'frontend' },
  { name: 'Tailwind CSS', level: 92, category: 'frontend' },
  { name: 'Responsive UI/UX', level: 90, category: 'frontend' },

  // Tools & DevOps
  { name: 'Git & GitHub', level: 94, category: 'tools' },
  { name: 'Docker', level: 82, category: 'tools' },
  { name: 'Postman', level: 92, category: 'tools' },
  { name: 'Cloudflare', level: 85, category: 'tools' },
  { name: 'Linux', level: 80, category: 'tools' },
  { name: 'CI/CD', level: 80, category: 'tools' },
];

export const projects: Project[] = [
  {
    id: 'nexterp',
    title: 'NextERP',
    description: 'An enterprise-grade, multi-module ERP platform designed for modern businesses. Integrates inventory management, financial accounts, manufacturing pipelines, automated workflows, and HR modules with real-time analytics.',
    techStack: ['Laravel', 'MySQL', 'React', 'Tailwind CSS', 'REST API', 'Docker'],
    githubUrl: 'https://github.com/oasisnextbell/nexterp',
    demoUrl: 'https://nexterp-demo.oasis.dev',
    accentColor: 'from-blue-500/20 to-cyan-500/20 shadow-blue-500/10 hover:border-cyan-500/40',
    iconName: 'Layers',
  },
  {
    id: 'nextecom',
    title: 'NextEcom',
    description: 'A comprehensive multi-vendor eCommerce ecosystem. Features dynamic product cataloging, multi-layered search/filtering, multi-currency shopping cart management, secure Stripe integrations, and customizable vendor dashboards.',
    techStack: ['Laravel', 'PHP', 'Next.js', 'React', 'MySQL', 'Tailwind CSS'],
    githubUrl: 'https://github.com/oasisnextbell/nextecom',
    demoUrl: 'https://nextecom-demo.oasis.dev',
    accentColor: 'from-purple-500/20 to-indigo-500/20 shadow-purple-500/10 hover:border-indigo-500/40',
    iconName: 'ShoppingBag',
  },
  {
    id: 'nextpos',
    title: 'NextPOS',
    description: 'A cloud-based, multi-tenant Point of Sale system optimized for fast retail and restaurant management. Supports offline transactional syncing, instant barcode scanning, auto-invoicing, and sales analytics reports.',
    techStack: ['Laravel', 'React', 'MySQL', 'Bootstrap', 'REST API'],
    githubUrl: 'https://github.com/oasisnextbell/nextpos',
    demoUrl: 'https://nextpos-demo.oasis.dev',
    accentColor: 'from-emerald-500/20 to-teal-500/20 shadow-emerald-500/10 hover:border-teal-500/40',
    iconName: 'Cpu',
  },
  {
    id: 'zeomart',
    title: 'ZeoMart',
    description: 'An ultra-fast single-page web storefront integrated with a Headless CMS. Features lightning-fast pages, smart search indexing, custom Cart managers, responsive layout schemes, and high-fidelity interaction states.',
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'JavaScript', 'REST API'],
    githubUrl: 'https://github.com/oasisnextbell/zeomart',
    demoUrl: 'https://zeomart-demo.oasis.dev',
    accentColor: 'from-amber-500/20 to-orange-500/20 shadow-amber-500/10 hover:border-orange-500/40',
    iconName: 'Zap',
  },
];

export const experience: ExperienceItem[] = [
  {
    id: 'nextbell',
    role: 'Executive Web Developer',
    company: 'Next Bell Ltd.',
    period: 'Mar 2024 - Present',
    description: [
      'Develop enterprise-grade web applications using Laravel, Next.js, React, and Node.js.',
      'Designed and developed NextERP, a fully modular ERP platform featuring HRM, Attendance, Payroll, Inventory, Project Management, and Office Management modules.',
      'Built NextEcom, a REST API-based modular eCommerce backend, NextPOS, and ZeoMart, a Next.js enterprise eCommerce frontend.',
      'Develop secure REST APIs, optimize MySQL databases, and implement scalable system architectures.',
      'Collaborate with cross-functional teams to deliver high-performance, maintainable, and production-ready software solutions.',
    ],
    techUsed: [
      'Laravel',
      'PHP',
      'Next.js',
      'React',
      'Node.js',
      'MySQL',
      'REST API',
      'Docker',
      'Git',
      'Tailwind CSS',
    ],
  },
  {
    id: 'accelerating-intelligence',
    role: 'Junior Developer',
    company: 'Accelerating Intelligence',
    period: 'Jan 2022 - Jul 2022',
    description: [
      'Worked as a Full Stack MERN Developer using MongoDB, Express.js, React.js, and Node.js.',
      'Developed responsive user interfaces with React.js and integrated backend APIs.',
      'Implemented server-side functionality using Express.js and Node.js.',
      'Managed MongoDB databases and collaborated with cross-functional teams to deliver software solutions.',
    ],
    techUsed: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JavaScript',
      'REST API',
      'Git',
    ],
  },
  {
    id: 'inovace',
    role: 'Developer Intern',
    company: 'Inovace Technologies',
    period: 'May 2021 - Oct 2021',
    description: [
      'Developed and maintained Laravel-based web applications and company portfolio websites.',
      'Implemented responsive user interfaces and backend functionality using Laravel.',
      'Optimized application performance and collaborated with stakeholders to deliver business requirements.',
      'Gained practical experience in software development lifecycle, version control, and team collaboration.',
    ],
    techUsed: [
      'Laravel',
      'PHP',
      'MySQL',
      'Bootstrap',
      'JavaScript',
      'Git',
    ],
  },
];

export const socialLinks: SocialLink[] = [
  { platform: 'Email', url: `mailto:${personalInfo.email}`, icon: 'Mail' },
  { platform: 'GitHub', url: 'https://github.com/oasisnextbell', icon: 'Github' },
  { platform: 'LinkedIn', url: 'https://linkedin.com/in/oasisnextbell', icon: 'Linkedin' },
  { platform: 'Facebook', url: 'https://facebook.com/oasisnextbell', icon: 'Facebook' },
];
