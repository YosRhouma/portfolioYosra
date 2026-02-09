import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Portfolio, Experience, Project, Skill } from '../models/portfolio.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private portfolioData: Portfolio = {
    personalInfo: {
      name: 'Yosra Rhouma',
      title: 'Développeuse Full Stack',
      description: 'Développement d\'applications métiers avec Java/Spring Boot et Angular. Passionnée par les bonnes pratiques de code et l\'innovation technologique. ',
      location: 'Tunis,Tunisie',
      email: 'youssraarhouma@gmail.com',
      cv:'/files/CV Yosra Rhouma_Développeuse Full-stack.pdf'
    },
    about: {
      summary: 'Développeuse Full Stack , spécialisée en Spring Boot et Angular, avec plus de 2 ans d\'expérience.  je conçois et développe des applications métiers performantes et évolutives, avec une attention particulière portée à la qualité du code et à l\'intégration de solutions intelligentes (IA). Evoluer dans un environnement agile et transformer des besoins fonctionnels complexes en solutions fiables et concrètes constituent le cœur de mon engagement professionnel.' ,
      highlights: [
        'Développement d\'API Rest',
        'Développement d\'interfaces web responsive',
        'Développement Agile/Scrum',
       
      ]
    },
    skills: [
      // Backend
      { name: 'Java', level: 'Expert', category: 'Backend', years: 3 },
      { name: 'Spring Boot', level: 'Expert', category: 'Backend', years: 3 },
      { name: 'REST API', level: 'Expert', category: 'Backend', years: 3 },
      { name: 'JPA/Hibernate', level: 'Avancé', category: 'Backend', years: 3 },
      { name: 'SQL', level: 'Avancé', category: 'Backend', years: 3 },
      { name: 'MongoDB', level: 'Avancé', category: 'Backend', years: 2 },
      
      // Frontend
      { name: 'Angular', level: 'Expert', category: 'Frontend', years: 3 },
      { name: 'TypeScript', level: 'Expert', category: 'Frontend', years: 3 },
      { name: 'HTML5/CSS3', level: 'Avancé', category: 'Frontend', years: 3 },
      { name: 'RxJS', level: 'Avancé', category: 'Frontend', years: 2 },
      { name: 'Tailwind CSS', level: 'Avancé', category: 'Frontend', years: 2 },
      { name: 'Material Design', level: 'Intermédiaire', category: 'Frontend', years: 1 },
      
      // DevOps
      { name: 'Git', level: 'Expert', category: 'DevOps', years: 3 },
      { name: 'Docker', level: 'Avancé', category: 'DevOps', years: 1 },
      { name: 'CI/CD', level: 'Intermédiaire', category: 'DevOps', years: 1 },
      
      // Outils
      { name: 'Maven', level: 'Avancé', category: 'Outils', years: 2 },
      { name: 'Postman', level: 'Avancé', category: 'Outils', years: 2 },
      { name: 'IntelliJ IDEA', level: 'Expert', category: 'Outils', years: 3 },
      { name: 'VS Code', level: 'Expert', category: 'Outils', years: 2 },
      
      // Soft Skills
      { name: 'Résolution de problèmes', level: 'Expert', category: 'Soft-Skills' },
      { name: 'Communication', level: 'Expert', category: 'Soft-Skills' },
      { name: 'Apprentissage continu', level: 'Expert', category: 'Soft-Skills' },
      { name: 'Travail en équipe', level: 'Expert', category: 'Soft-Skills' },
    ],
    experiences: [
      {
  id: 'exp-1',
  company: 'UML Customer Relation',
  position: 'Développeuse Full Stack',
  startDate: new Date('2023-10-01'),
  endDate: new Date('2025-12-31'),
  current: false,
  description: 'Participation au développement de plusieurs projets full stack orientés métier, combinant Spring Boot, Angular et des solutions basées sur l’intelligence artificielle.',
  technologies: [
    'Java',
    'Spring Boot',
    'Angular',
    'TypeScript',
    'Python',
    'MediaPipe',
    'WebSocket',
    'OpenAI / Groq API',
    'MongoDB',
    'MySQL'
  ],
  achievements: [
    'Développement d’une application IA en temps réel pour l’analyse des micro-expressions faciales (Synergologie)',
    'Conception d’une plateforme communautaire et marketplace d’art avec assistant IA conversationnel (ArtIA)',
    'Mise en place d’un système intelligent d’extraction et de structuration automatique de CV',
    'Intégration de solutions IA (STT, TTS, LLM) pour des assistants vocaux et chatbots',
    'Développement d’applications sécurisées avec authentification et gestion des profils utilisateurs'
  ],
  location: 'Tunis, Tunisie'
},

{
  id: 'exp-2',
  company: "Centre National de l'Informatique (CNI)",
  position: 'Développeuse Full Stack',
  startDate: new Date('2023-03-01'),
  endDate: new Date('2023-05-31'),
  current: false,
  description: 'Projet de fin d’études portant sur la conception et le développement d’une plateforme de gestion de concours en ligne.',
  technologies: [
    'Java',
    'Spring Boot',
    'Angular',
    'TypeScript',
    'HTML',
    'CSS'
  ],
  achievements: [
    'Développement d’une plateforme web automatisant le processus de concours',
    'Implémentation d’un algorithme de calcul automatique du score de présélection',
    'Gestion complète des inscriptions en ligne et du filtrage des candidats',
    'Conception d’une interface utilisateur claire et responsive avec Angular'
  ],
  location: 'Tunis, Tunisie'
}, 
{
  id: 'exp-3',
  company: 'Digital Bundle',
  position: 'Développeur Backend',
  startDate: new Date('2022-07-01'),
  endDate: new Date('2022-07-31'),
  current: false,
  description: 'Stage de perfectionnement axé sur le développement backend d’une application de location de voitures.',
  technologies: [
    'Node.js',
    'Angular',
    'TypeScript',
    'HTML',
    'CSS'
  ],
  achievements: [
    'Conception et développement d’un système de réservation de voitures',
    'Gestion des disponibilités et des plannings',
    'Création de tableaux de bord pour le suivi des locations',
    'Collaboration avec l’équipe frontend pour l’intégration des fonctionnalités'
  ],
  location: 'Tunisie'
}


    ],
    projects: [
      {
        id: 'proj-1',
        title: 'ArtIA – Marketplace & plateforme communautaire',
        description: 'Plateforme communautaire et marketplace d’art avec assistant IA conversationnel.',
        shortDescription: 'Marketplace d’art avec assistant IA intelligent',
        technologies: ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'IA conversationnelle'],
        features: [
          'Galerie et profils artistes',
          'Marketplace pour artistes et collectionneurs',
          'Assistant IA pour navigation intelligente',
          'Requêtes en langage naturel'
        ],
        featured: true,
        images: [
          '/images/artia1.png',
          '/images/artia2.png',
          '/images/artia3.png',
        ]
      },
      {
        id: 'proj-2',
        title: 'Talent Marketplace',
        description: 'Plateforme sécurisée de mise en relation talents–entreprises.',
        shortDescription: 'Mise en relation talents et recruteurs',
        technologies: ['Java', 'Spring Boot', 'Angular', 'TypeScript'],
        features: [
          'Authentification et gestion des profils',
          'Plateforme sécurisée',
          'Interface responsive et intuitive',
          'Backend REST robuste'
        ],
        featured: false,
        images: [
          '/images/market1.png',
          '/images/market2.png',
          '/images/market3.png',
          '/images/market4.png',
        ]
      },
      
      
      {
        id: 'proj-3',
        title: 'Synergologie – Analyse des micro-expressions',
        description: 'Application IA en temps réel pour l’analyse des micro-expressions faciales et l’interprétation comportementale.',
        shortDescription: 'Analyse comportementale en temps réel basée sur l’IA',
        technologies: ['Java', 'Spring Boot', 'Python', 'MediaPipe', 'WebSocket', 'Angular'],
        features: [
          'Détection et interprétation des micro-expressions faciales',
          'Intégration de services IA Python avec Spring Boot',
          'Communication temps réel via WebSocket',
          'Interface web interactive avec Angular'
        ],
        featured: true,
        images: [
          '/assets/projects/synergologie-1.jpg',
          '/assets/projects/synergologie-2.jpg',
          '/assets/projects/synergologie-3.jpg'
        ]
      },
      {
        id: 'proj-4',
        title: 'Made4You – Plateforme E-commerce Artisanal',
        description: 'Plateforme e-commerce complète avec assistant IA pour le service client.',
        shortDescription: 'E-commerce artisanal avec recommandations intelligentes',
        technologies: ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'IA conversationnelle'],
        features: [
          'Gestion du catalogue et du panier',
          'Espace vendeur dédié',
          'Assistant IA pour support client',
          'Recommandations personnalisées'
        ],
        featured: true,
        images: [
          '/images/m4u1.png',
          '/images/m4u2.png',
          '/images/m4u3.png',
          '/images/m4u4.png',
          '/images/m4u5.png',
          '/images/m4u6.png',
        ]
      },
      {
        id: 'proj-5',
        title: 'CVThèque – Extraction intelligente de CV',
        description: 'Système d’extraction et de structuration automatique de CV à l’aide de l’IA.',
        shortDescription: 'Extraction intelligente et gestion de CV',
        technologies: ['Spring Boot', 'Python', 'Angular', 'Groq API'],
        features: [
          'Extraction automatique des informations depuis les CV',
          'Structuration intelligente des données',
          'API backend pour insertion en base',
          'Interface Angular pour upload et gestion'
        ],
        featured: false,
        images: [
          
        ]
      },
      
      {
        id: 'proj-6',
        title: 'CallBot – Assistant vocal intelligent',
        description: 'Assistant vocal intelligent pour la prise automatique de rendez-vous.',
        shortDescription: 'Assistant vocal IA pour gestion de rendez-vous',
        technologies: ['Python', 'OpenAI API', 'Speech-to-Text', 'Text-to-Speech'],
        features: [
          'Reconnaissance vocale (STT)',
          'Synthèse vocale (TTS)',
          'Interaction via LLM',
          'Enregistrement automatique dans le calendrier'
        ],
        featured: false,
        images: [
          
        ]
      },
      {
        id: 'proj-7',
        title: 'Gestion de Concours en Ligne (PFE)',
        description: 'Application web automatisant le processus de concours avec présélection des candidats.',
        shortDescription: 'Plateforme de gestion de concours en ligne',
        technologies: ['Java', 'Spring Boot', 'Angular', 'TypeScript'],
        features: [
          'Inscription en ligne des candidats',
          'Calcul automatique du score de présélection',
          'Filtrage intelligent des candidats',
          'Interface claire et responsive'
        ],
        featured: false,
        images: [
          

          
        ]
      },
      {
        id: 'proj-8',
        title: 'Application de Location de Voitures',
        description: 'Solution web pour la gestion et la réservation de voitures.',
        shortDescription: 'Application backend de location de voitures',
        technologies: ['Node.js', 'Angular', 'TypeScript'],
        features: [
          'Système de réservation',
          'Gestion des disponibilités',
          'Tableaux de bord',
          'Architecture simple et efficace'
        ],
        featured: false,
        images: [
          '/assets/projects/location-1.jpg',
          '/assets/projects/location-2.jpg'
        ]
      }
    ],
    socialLinks: [
      {
        platform: 'github',
        url: 'https://github.com/yosra-rhouma',
        label: 'GitHub'
      },
      {
        platform: 'linkedin',
        url: 'https://www.linkedin.com/in/yosra-rhouma-962b72244/',
        label: 'LinkedIn'
      },
      {
        platform: 'email',
        url: 'mailto:youssraarhouma@gmail.com',
        label: 'Email'
      },
      {
        platform: 'twitter',
        url: 'https://twitter.com/yosra_dev',
        label: 'Twitter'
      }
    ],
    languages: [
      
      { language: 'Français'},
      { language: 'Anglais' }
    ],
    certifications: [
      { title: 'AWS Solutions Architect', issuer: 'Amazon Web Services', date: '2024-05' },
      { title: 'Professional Scrum Product Owner', issuer: 'Scrum.org', date: '2023-12' }
    ]
  };

  private portfolioSubject = new BehaviorSubject<Portfolio>(this.portfolioData);
  public portfolio$ = this.portfolioSubject.asObservable();

  constructor() {}

  getPortfolio(): Portfolio {
    return this.portfolioData;
  }

  getPortfolioObservable(): Observable<Portfolio> {
    return this.portfolio$;
  }

  getExperiences(): Experience[] {
    return this.portfolioData.experiences.sort((a, b) => 
      new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
    );
  }

  getProjects(): Project[] {
    return this.portfolioData.projects;
  }

  getFeaturedProjects(): Project[] {
    return this.portfolioData.projects.filter(p => p.featured);
  }

  getSkills(): Skill[] {
    return this.portfolioData.skills;
  }

  getSkillsByCategory(category: string): Skill[] {
    return this.portfolioData.skills.filter(s => s.category === category);
  }

  getSocialLinks() {
    return this.portfolioData.socialLinks;
  }
}
