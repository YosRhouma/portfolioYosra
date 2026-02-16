export interface Skill {
  name: string;
  level: 'Débutant' | 'Intermédiaire' | 'Avancé' | 'Expert';
  category: 'Backend' | 'Frontend' | 'DevOps' | 'Outils' | 'Soft-Skills';
  icon?: string;
  years?: number;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: Date;
  endDate?: Date;
  current: boolean;
  description: string;
  technologies: string[];
  achievements: string[];
  location?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  image?: string;
  technologies: string[];
  features: string[];
  link?: string;
  github?: string;
  featured: boolean;
  images: string[];
  duration?: string;
  context?: string;
  role?: string;

}

export interface SocialLink {
  platform: 'github' | 'linkedin' | 'twitter' | 'email' | 'website';
  url: string;
  icon?: string;
  label: string;
}

export interface Portfolio {
  personalInfo: {
    name: string;
    title: string;
    description: string;
    avatar?: string;
    location: string;
    phone?: string;
    email: string;
    cv: string;
  };
  about: {
    summary: string;
    highlights: string[];
  };
  skills: Skill[];
  experiences: Experience[];
  projects: Project[];
  socialLinks: SocialLink[];
  languages: Array<{ language: string}>;
  certifications?: Array<{ title: string; issuer: string; date: string }>;
}
