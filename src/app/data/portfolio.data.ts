import { Portfolio } from '../models/portfolio.model';

export const PORTFOLIO_DATA: Portfolio = {
  personalInfo: {
    name: 'Yosra Rhouma',
    title: 'Développeuse Full Stack',
    description: 'Développement d\'applications métiers avec Java/Spring Boot et Angular. Passionnée par les bonnes pratiques de code et l\'innovation technologique.',
    location: 'Tunis, Tunisie',
    email: 'youssraarhouma@gmail.com',
    cv: '/files/CV-Yosra-Rhouma-Developpeuse-Full-stack.pdf'
  },
  about: {
    summary: 'Développeuse Full Stack spécialisée en Spring Boot et Angular, avec plus de 2 ans d\'expérience. Je conçois et développe des applications métiers performantes et évolutives, avec une attention particulière portée à la qualité du code et à l\'intégration de solutions intelligentes (IA).',
    highlights: [
      'Développement d\'API REST',
      'Développement d\'interfaces web responsives',
      'Développement Agile/Scrum'
    ]
  },
  skills: [
    { name: 'Java', level: 'Expert', category: 'Backend', years: 3 },
    { name: 'Spring Boot', level: 'Expert', category: 'Backend', years: 3 },
    { name: 'REST API', level: 'Expert', category: 'Backend', years: 3 },
    { name: 'JPA/Hibernate', level: 'Avancé', category: 'Backend', years: 3 },
    { name: 'SQL', level: 'Avancé', category: 'Backend', years: 3 },
    { name: 'MongoDB', level: 'Avancé', category: 'Backend', years: 2 },
    { name: 'Angular', level: 'Expert', category: 'Frontend', years: 3 },
    { name: 'TypeScript', level: 'Expert', category: 'Frontend', years: 3 },
    { name: 'HTML5/CSS3', level: 'Avancé', category: 'Frontend', years: 3 },
    { name: 'RxJS', level: 'Avancé', category: 'Frontend', years: 2 },
    { name: 'Tailwind CSS', level: 'Avancé', category: 'Frontend', years: 2 },
    { name: 'Material Design', level: 'Intermédiaire', category: 'Frontend', years: 1 },
    { name: 'Git', level: 'Expert', category: 'DevOps', years: 3 },
    { name: 'Docker', level: 'Avancé', category: 'DevOps', years: 1 },
    { name: 'CI/CD', level: 'Intermédiaire', category: 'DevOps', years: 1 },
    { name: 'Maven', level: 'Avancé', category: 'Outils', years: 2 },
    { name: 'Postman', level: 'Avancé', category: 'Outils', years: 2 },
    { name: 'IntelliJ IDEA', level: 'Expert', category: 'Outils', years: 3 },
    { name: 'VS Code', level: 'Expert', category: 'Outils', years: 2 },
    { name: 'Résolution de problèmes', level: 'Expert', category: 'Soft-Skills' },
    { name: 'Communication', level: 'Expert', category: 'Soft-Skills' },
    { name: 'Apprentissage continu', level: 'Expert', category: 'Soft-Skills' },
    { name: 'Travail en équipe', level: 'Expert', category: 'Soft-Skills' }
  ],
  experiences: [
    {
      id: 'exp-1',
      company: 'UML Customer Relation',
      position: 'Développeuse Full Stack',
      startDate: new Date('2023-10-01'),
      endDate: new Date('2025-12-31'),
      current: false,
      description: 'Participation au développement de plusieurs projets full stack orientés métier, combinant Spring Boot, Angular et des solutions basées sur l\'intelligence artificielle.',
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
        'MySQL',
        'Git'
      ],
      achievements: [
        'Développement d\'une application IA en temps réel pour l\'analyse des micro-expressions faciales (Synergologie)',
        'Conception d\'une plateforme communautaire et marketplace d\'art avec assistant IA conversationnel (ArtIA)',
        'Mise en place d\'un système intelligent d\'extraction et de structuration automatique de CV',
        'Intégration de solutions IA (STT, TTS, LLM) pour des assistants vocaux et chatbots',
        'Développement d\'applications sécurisées avec authentification et gestion des profils utilisateurs'
      ],
      location: 'Tunis, Tunisie'
    },
    {
      id: 'exp-2',
      company: 'Centre National de l\'Informatique (CNI)',
      position: 'Développeuse Full Stack',
      startDate: new Date('2023-03-01'),
      endDate: new Date('2023-05-31'),
      current: false,
      description: 'Projet de fin d\'études portant sur la conception et le développement d\'une plateforme de gestion de concours en ligne.',
      technologies: ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'HTML', 'CSS'],
      achievements: [
        'Développement d\'une plateforme web automatisant le processus de concours',
        'Implémentation d\'un algorithme de calcul automatique du score de présélection',
        'Gestion complète des inscriptions en ligne et du filtrage des candidats',
        'Conception d\'une interface utilisateur claire et responsive avec Angular'
      ],
      location: 'Tunis, Tunisie'
    },
    {
      id: 'exp-3',
      company: 'Digital Bundle',
      position: 'Développeuse Backend',
      startDate: new Date('2022-07-01'),
      endDate: new Date('2022-07-31'),
      current: false,
      description: 'Stage de perfectionnement axé sur le développement backend d\'une application de location de voitures.',
      technologies: ['Node.js', 'Angular', 'TypeScript', 'HTML', 'CSS'],
      achievements: [
        'Conception et développement d\'un système de réservation de voitures',
        'Gestion des disponibilités et des plannings',
        'Création de tableaux de bord pour le suivi des locations',
        'Collaboration avec l\'équipe frontend pour l\'intégration des fonctionnalités'
      ],
      location: 'Tunisie'
    }
  ],
  projects: [
    {
      id: 'proj-1',
      title: 'ArtIA - Marketplace et plateforme communautaire',
      description: 'Plateforme communautaire et marketplace d\'art avec assistant IA conversationnel permettant une navigation intelligente basée sur des requêtes en langage naturel.',
      shortDescription: 'Marketplace d\'art avec assistant IA intelligent',
      technologies: ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'IA conversationnelle', 'MongoDB'],
      features: [
        'Galerie interactive avec profils artistes personnalisés',
        'Marketplace sécurisée pour artistes et collectionneurs',
        'Assistant IA conversationnel pour navigation intelligente',
        'Requêtes en langage naturel et recommandations personnalisées',
        'Gestion des actualités et événements artistiques'
      ],
      featured: true,
      duration: 'Mars 2025 - Août 2025',
      context: 'UML Customer Relation',
      role: 'Développeuse Full Stack',
      images: ['/images/artia1.png', '/images/artia2.png', '/images/artia3.png'],
      link: '',
      github: ''
    },
    {
      id: 'proj-2',
      title: 'Talent Marketplace',
      description: 'Plateforme sécurisée de mise en relation talents-entreprises avec authentification robuste et gestion complète des profils utilisateurs.',
      shortDescription: 'Mise en relation talents et recruteurs',
      technologies: ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'MySQL', 'JWT'],
      features: [
        'Système d\'authentification sécurisé avec JWT',
        'Gestion complète des profils talents et entreprises',
        'Interface responsive et intuitive',
        'Backend REST robuste avec Spring Boot',
        'Recherche et filtrage avancés'
      ],
      featured: true,
      duration: 'Octobre 2023 - Mars 2024',
      context: 'UML Customer Relation',
      role: 'Développeuse Full Stack',
      images: ['/images/market1.png', '/images/market2.png', '/images/market3.png', '/images/market4.png'],
      link: '',
      github: ''
    },
    {
      id: 'proj-3',
      title: 'Synergologie - Analyse des micro-expressions',
      description: 'Application IA en temps réel pour l\'analyse des micro-expressions faciales et l\'interprétation comportementale.',
      shortDescription: 'Analyse comportementale en temps réel basée sur l\'IA',
      technologies: ['Java', 'Spring Boot', 'Python', 'MediaPipe', 'WebSocket', 'Angular', 'IA'],
      features: [
        'Détection et interprétation des micro-expressions faciales en temps réel',
        'Intégration de services IA Python avec backend Spring Boot',
        'Communication temps réel via WebSocket',
        'Interface web interactive développée avec Angular'
      ],
      featured: true,
      duration: 'Septembre 2025 - Décembre 2025',
      context: 'UML Customer Relation',
      role: 'Développeuse Full Stack',
      images: ['/images/synergologie.png'],
      link: '',
      github: ''
    },
    {
      id: 'proj-4',
      title: 'Made4You - Plateforme e-commerce artisanale',
      description: 'Plateforme e-commerce complète avec assistant IA pour le service client et recommandations personnalisées.',
      shortDescription: 'E-commerce artisanal avec recommandations intelligentes',
      technologies: ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'IA conversationnelle', 'MongoDB'],
      features: [
        'Gestion complète du catalogue produits artisanaux',
        'Système de panier et paiement sécurisé',
        'Espace vendeur dédié avec tableaux de bord',
        'Assistant IA pour support client instantané',
        'Recommandations personnalisées basées sur l\'IA'
      ],
      featured: true,
      duration: 'Septembre 2024 - Décembre 2024',
      context: 'UML Customer Relation',
      role: 'Développeuse Full Stack',
      images: ['/images/m4u1.png', '/images/m4u2.png', '/images/m4u3.png', '/images/m4u4.png', '/images/m4u5.png', '/images/m4u6.png'],
      link: '',
      github: ''
    },
    {
      id: 'proj-5',
      title: 'CVThèque - Extraction intelligente de CV',
      description: 'Système d\'extraction et de structuration automatique de CV à l\'aide de l\'IA (API Groq) avec interface de gestion.',
      shortDescription: 'Extraction intelligente et gestion de CV',
      technologies: ['Spring Boot', 'Python', 'Angular', 'Groq API', 'IA', 'MongoDB'],
      features: [
        'Extraction automatique des informations depuis les CV',
        'Structuration intelligente des données via IA',
        'API backend REST pour insertion en base de données',
        'Interface Angular pour upload et gestion des CV',
        'Parsing intelligent des compétences et expériences'
      ],
      featured: false,
      duration: 'Janvier 2025 - Février 2025',
      context: 'UML Customer Relation',
      role: 'Développeuse Full Stack',
      images: ['/images/cvtheque1.png'],
      link: '',
      github: ''
    },
    {
      id: 'proj-6',
      title: 'CallBot - Assistant vocal intelligent',
      description: 'Assistant vocal intelligent pour la prise automatique de rendez-vous utilisant STT, TTS et LLM.',
      shortDescription: 'Assistant vocal IA pour gestion de rendez-vous',
      technologies: ['Python', 'OpenAI API', 'Speech-to-Text', 'Text-to-Speech', 'LLM'],
      features: [
        'Reconnaissance vocale avancée (STT) via OpenAI',
        'Synthèse vocale naturelle (TTS)',
        'Interaction conversationnelle via LLM',
        'Collecte d\'informations et validation',
        'Enregistrement automatique dans le calendrier'
      ],
      featured: false,
      duration: 'Avril 2024 - Août 2024',
      context: 'UML Customer Relation',
      role: 'Développeuse IA/Backend',
      images: ['/images/callbot.png'],
      link: '',
      github: ''
    },
    {
      id: 'proj-7',
      title: 'Gestion de concours en ligne (PFE)',
      description: 'Application web automatisant le processus de concours avec inscription en ligne et algorithme de présélection.',
      shortDescription: 'Plateforme de gestion de concours en ligne',
      technologies: ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'MySQL'],
      features: [
        'Inscription en ligne des candidats avec validation',
        'Calcul automatique du score de présélection via algorithme',
        'Filtrage intelligent des candidats éligibles',
        'Interface claire et responsive',
        'Tableau de bord administrateur pour suivi'
      ],
      featured: false,
      duration: 'Mars 2023 - Mai 2023',
      context: 'CNI (PFE)',
      role: 'Développeuse Full Stack',
      images: ['/images/concours1.png', '/images/concours2.png', '/images/concours3.png', '/images/concours4.png', '/images/concours5.png'],
      link: '',
      github: ''
    },
    {
      id: 'proj-8',
      title: 'Application de location de voitures',
      description: 'Solution web pour la gestion et la réservation de voitures avec système de disponibilités.',
      shortDescription: 'Application backend de location de voitures',
      technologies: ['Node.js', 'Angular', 'TypeScript', 'MongoDB'],
      features: [
        'Système de réservation en ligne',
        'Gestion des disponibilités et planning',
        'Tableaux de bord pour suivi des locations',
        'Architecture simple et efficace',
        'Interface utilisateur intuitive'
      ],
      featured: false,
      duration: 'Juillet 2022',
      context: 'Digital Bundle (Stage)',
      role: 'Développeuse Backend',
      images: ['/images/rent1.png'],
      link: '',
      github: ''
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
    }
  ],
  languages: [{ language: 'Français' }, { language: 'Anglais' }],
  certifications: []
};
