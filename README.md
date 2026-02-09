# 🚀 Yosra Rhouma - Portfolio Professionnel

Portfolio moderne, responsive et optimisé pour l'emploi. Développé avec **Angular 18**, **TypeScript** et **Tailwind CSS**.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fyour-repo)

---

## 📋 Table des Matières

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)  
- [Développement](#-développement)
- [Build & Deploy](#-build--deploy)
- [Personnalisation](#-personnalisation)
- [Guides](#-guides)
- [Contact](#-contact)

---

## ✨ Features

### 🎨 Design
- ✅ Dark theme élégant avec gradients primaires
- ✅ Animations fluides (fade, slide, float, glow)
- ✅ 100% responsive (mobile, tablet, desktop)
- ✅ Performance optimisée (Lighthouse 90+)
- ✅ Accessible (WCAG 2.1 AA)

### 📱 Sections
- **Hero**: Section d'accueil animée avec CTA et social links
- **About**: Bio, highlights, langues, technos
- **Skills**: 20+ compétences filtrables par catégorie
- **Projects**: Projets en vedette + grille complète
- **Experience**: Timeline professionnel expandible
- **Contact**: Formulaire validé avec EmailJS
- **Header**: Navigation fixe responsive
- **Footer**: Multi-sections avec links

### 🔧 Fonctionnalités
- ✅ Formulaire de contact avec validation
- ✅ EmailJS intégré pour notifications
- ✅ SEO optimisé (meta tags, sitemap)
- ✅ Dark/Light mode toggle ready
- ✅ Social links avec tracking
- ✅ Scroll animations et transitions
- ✅ Lazy loading des images

---

## 🛠️ Tech Stack

### Frontend
- **Angular 18.2.0** - Framework
- **TypeScript 5.5.2** - Language
- **Tailwind CSS 3.4.19** - Styling
- **RxJS 7.8.0** - Reactive patterns
- **EmailJS 4.4.1** - Email service

### Build & Deploy
- **Vite** - Build tool (via Angular CLI)
- **Node.js 18.x** - Runtime
- **Vercel** - Hosting

### Dev Tools
- **nvm** - Node version manager
- **npm** - Package manager
- **Git** - Version control

---

## 📦 Installation

### Prérequis
- Node.js 18.x ou supérieur
- npm 9.x ou supérieur
- Account GitHub pour Vercel

```bash
# Vérifier les versions
node --version
npm --version
```

### Cloner et installer

```bash
# Cloner le repository
git clone https://github.com/your-username/portfolio-yosra.git
cd portfolio-yosra

# Installer les dépendances
npm install

# Vérifier l'installation
npm list --depth=0
```

---

## 💻 Développement

### Démarrer le serveur local

```bash
npm start
```

Accédez à `http://localhost:4200` dans votre navigateur.

### Structure du projet

```
src/
├── app/
│   ├── models/              # TypeScript interfaces
│   │   └── portfolio.model.ts
│   ├── services/            # Services centralisés
│   │   ├── portfolio.service.ts
│   │   └── email.service.ts
│   ├── components/          # Composants standalone
│   │   ├── header/
│   │   ├── hero/
│   │   ├── about/
│   │   ├── skills/
│   │   ├── projects/
│   │   ├── experiences/
│   │   ├── contact/
│   │   └── footer/
│   ├── app.component.ts     # Root component
│   ├── app.routes.ts        # Routing config
│   └── app.config.ts        # App config
├── public/                  # Static assets
├── styles.css               # Global styles
└── main.ts                  # Entry point
```

### Fichiers de configuration

- `angular.json` - Angular CLI config
- `tsconfig.json` - TypeScript config
- `tailwind.config.js` - Tailwind customization
- `vite.config.ts` - Vite config
- `.env.example` - Environment variables template

---

## 🏗️ Build & Deploy

### Build pour la production

```bash
npm run build
```

Output: `dist/portfolio-yosra/browser/`

### Tester la build local

```bash
npm run build
npm run preview
```

### Déployer sur Vercel

#### Option 1: CLI Vercel
```bash
npm install -g vercel
vercel
```

#### Option 2: GitHub integration (Recommandé)
1. Push votre code sur GitHub
2. Visitez https://vercel.com/dashboard
3. Importez votre repository
4. Ajouter les variables EmailJS
5. Deploy automatique! 🎉

### Configuration Vercel
Voir `vercel.json` pour les détails de build.

---

## ⚙️ Personnalisation

### 1. Mettre à jour le contenu

**Fichier:** `src/app/services/portfolio.service.ts`

```typescript
portfolio: Portfolio = {
  personalInfo: {
    name: 'Votre Nom',
    title: 'Votre Titre',
    email: 'vous@email.com',
    phone: '+33 XX XX XX XX',
    // ...
  },
  experiences: [...], // Vos expériences
  projects: [...],     // Vos projets
  skills: [...]        // Vos compétences
}
```

### 2. Configurer EmailJS

Remplacer les placeholder dans `.env.local`:

```env
NG_APP_EMAILJS_PUBLIC_KEY=your_public_key
NG_APP_EMAILJS_SERVICE_ID=your_service_id
NG_APP_EMAILJS_TEMPLATE_ID=your_template_id
```

[Obtenir les clés EmailJS](https://www.emailjs.com/dashboard/)

### 3. Customiser les couleurs

**Fichier:** `tailwind.config.js`

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        400: '#34d399',
        600: '#10b981',
      }
    }
  }
}
```

### 4. Ajouter votre photo

```bash
# Ajouter dans public/images/
public/images/
├── profile.jpg
├── project-1.jpg
└── ...
```

Mettre à jour les chemins dans les composants.

---

## 📚 Guides

### 📖 Lire d'abord

1. **[PORTFOLIO_GUIDE.md](./PORTFOLIO_GUIDE.md)** - Vue d'ensemble des features
2. **[DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)** - Déploiement complet sur Vercel
3. **[UX_BEST_PRACTICES.md](./UX_BEST_PRACTICES.md)** - Bonnes pratiques pour recruteurs
4. **[CSS_GUIDE.md](./CSS_GUIDE.md)** - Customization CSS optionnelle

### 🎯 Checklist avant deploy

- [ ] Contenu à jour dans portfolio.service.ts
- [ ] EmailJS configuré avec clés
- [ ] Photo professionnelle ajoutée
- [ ] Liens GitHub et projets vérifiés
- [ ] Test local: `npm start`
- [ ] Build réussi: `npm run build`
- [ ] Performance Lighthouse 90+
- [ ] Mobile responsive testé

### 🔍 SEO

Portfolio inclut:
- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph pour partage social
- ✅ Sitemap.xml ready
- ✅ Robots.txt ready

À faire:
- [ ] Remplacer meta description
- [ ] Créer sitemap.xml
- [ ] Soumettre à Google Search Console

---

## 🚀 Scripts disponibles

```bash
# Développement
npm start              # Serveur de développement à http://localhost:4200

# Tests
npm test               # Lance les tests Jasmine/Karma
npm run test:watch    # Tests en mode watch

# Build
npm run build          # Build production
npm run preview        # Prévisualiser la build

# Linting
npm run lint           # Vérifier le code
npm run lint:fix       # Corriger automatiquement

# Autre
npm run ng -- serve   # Serveur angular raw
```

---

## 📱 Responsive Breakpoints

Portfolio testé sur:
- 📱 Mobile: 320px, 375px, 425px (iphone, android)
- 📱 Tablet: 768px, 1024px (ipad)
- 🖥️ Desktop: 1366px, 1920px (monitors)

---

## ♿ Accessibilité

WCAG 2.1 AA compliant:
- ✅ Contraste de couleur (4.5:1)
- ✅ Texte alt pour images
- ✅ Keyboard navigation
- ✅ Screen reader support
- ✅ Focus visible

Tester: `npm run build` → DevTools → Lighthouse → Accessibility

---

## 🐛 Troubleshooting

### npm install échoue
```bash
rm -rf node_modules package-lock.json
npm install
```

### Port 4200 en utilisation
```bash
npm start -- --port 4201
```

### Build échoue
```bash
npm run build -- --configuration development
```

### Voir les erreurs TypeScript
```bash
npx tsc --noEmit
```

Voir [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md#troubleshooting) pour plus d'aide.

---

## 📞 Contact

- **Email**: yosra@email.com
- **LinkedIn**: [linkedin.com/in/yosra](https://linkedin.com/in/yosra)
- **GitHub**: [github.com/yosra](https://github.com/yosra)
- **Portfolio**: [yosra-portfolio.com](https://yosra-portfolio.com)

---

## 📄 License

MIT License - Libre d'utilisation pour projets personnels.

---

## 🙏 Remerciements

- **Angular** - Framework extraordinaire
- **Tailwind CSS** - Styling efficace
- **EmailJS** - Service email simple
- **Vercel** - Hosting performant

---

## 📈 Roadmap

- [ ] Mode clair/sombre toggle complet
- [ ] Blog intégré
- [ ] Téléchargement CV multi-formats
- [ ] Statistiques visiteurs
- [ ] Newsletter signup
- [ ] Certification badges animations
- [ ] i18n (FR, EN, AR)
- [ ] PWA capabilities

---

**Prêt à déployer?** 🚀

Suivez le [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) pour lancer votre portfolio en ligne en 10 minutes!

```bash
npm install
npm start
# Puis suivre le guide Vercel...
```

**Bon courage avec votre portfolio!** 💚Yosra

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.21.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
