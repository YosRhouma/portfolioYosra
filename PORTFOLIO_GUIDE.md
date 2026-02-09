## Portfolio Professionnel Yosra Rhouma

Portfolio moderne et responsive pour développeuse Full Stack (Java/Spring Boot & Angular), conçu pour le recrutement.

### 🚀 Fonctionnalités

- ✅ Design moderne et professionnel
- ✅ Dark theme optimisé pour la lecture
- ✅ Animations fluides et transitions
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Section Hero avec CTA
- ✅ À propos avec statistiques
- ✅ Affichage des compétences par catégorie
- ✅ Showcase de 6+ projets
- ✅ Expériences professionnelles détaillées
- ✅ Formulaire de contact fonctionnel
- ✅ SEO optimisé
- ✅ Performance optimisée (Core Web Vitals)

### 🛠️ Stack Technologique

- **Frontend**: Angular 18, TypeScript, Tailwind CSS
- **Animations**: Custom CSS animations
- **Email**: EmailJS pour les contacts
- **Build**: Vite (Angular 18+)
- **Deployment**: Vercel

### 📦 Installation

```bash
# Cloner ou télécharger le projet
cd portfolioYosra

# Installer les dépendances
npm install

# Lancer en développement
npm start

# Compiler pour production
npm run build
```

### 🌐 Déploiement sur Vercel

1. **Créer un compte Vercel**
   - Allez sur [vercel.com](https://vercel.com)
   - Connectez-vous avec GitHub/GitLab/Bitbucket

2. **Configurer le projet**
   ```bash
   # Build command
   npm run build
   
   # Output directory
   dist/portfolio-yosra
   
   # Node version: 18.x ou 20.x
   ```

3. **Variables d'environnement (.env)**
   ```
   NG_APP_EMAILJS_PUBLIC_KEY=votre_clé_publique
   NG_APP_EMAILJS_SERVICE_ID=votre_service_id
   NG_APP_EMAILJS_TEMPLATE_ID=votre_template_id
   ```

4. **Domaine personnalisé**
   - Settings > Domains
   - Ajouter votre domaine custom

### 📝 Personnaliser le contenu

Modifiez le fichier [src/app/services/portfolio.service.ts](src/app/services/portfolio.service.ts) pour ajouter:
- Vos informations personnelles
- Vos projets
- Vos expériences professionnelles
- Vos compétences

### 📧 Configuration EmailJS

1. Créer un compte sur [emailjs.com](https://www.emailjs.com)
2. Créer un service email
3. Créer un template d'email
4. Ajouter les variables d'environnement

### 🎨 Personnalisation du design

- Couleurs: [tailwind.config.js](tailwind.config.js)
- Fonts: Outfit, Inter, JetBrains Mono
- Animations: Classes Tailwind personnalisées

### 📱 Pages principales

- **Hero**: Présentation avec CTA
- **About**: Bio et statistiques
- **Skills**: Compétences par catégorie
- **Projects**: Showcase de 6 projets
- **Experiences**: Timeline professionnelle
- **Contact**: Formulaire de contact

### 🔍 SEO

- Meta tags (Open Graph, Twitter)
- Titre et description optimisés
- Sitemap auto-généré
- Mobile-friendly certified

### 🚀 Performance

- Lazy loading des images
- Code splitting automatique
- Compression gzip
- Cache strategy optimisée

### 📞 Support & Améliorations

Pour améliorer votre portfolio:
1. Ajouter une photo de profil
2. Ajouter des images pour les projets
3. Intégrer un blog technique
4. Ajouter des témoignages
5. Implémenter un système de commentaires

### 📄 License

MIT - Libre d'utilisation
