export interface Skill {
  name: string;
  level: number; // 0-100 for visual progress bars or stats
  category: 'backend' | 'frontend' | 'tools';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  accentColor: string; // Tailwind glow / gradient accent
  iconName: string; // Lucide icon identifier
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  techUsed: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
