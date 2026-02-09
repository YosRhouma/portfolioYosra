# ⚡ Quick Start - Démarrer en 5 minutes

## 🚀 Phase 1: Installation (2 min)

```bash
# 1. Cloner
git clone https://github.com/your-username/portfolio-yosra.git
cd portfolio-yosra

# 2. Installer dépendances
npm install

# 3. Configurer EmailJS (voir point 3)
```

## ✨ Phase 2: Développement local (1 min)

```bash
# Démarrer le serveur
npm start

# Ouvrir http://localhost:4200
# Ctrl+C pour arrêter
```

## 🔑 Phase 3: Configurer EmailJS (2 min)

**Sur emailjs.com:**
1. Créer compte (gratuit) → Sign up
2. Obtenir Public Key → Account → Copy
3. Créer Email Service → Email Services → Add Service
4. Créer Template → Email Templates → Create Template
5. Obtenir Service ID et Template ID → Copy

**Localement:**
```bash
# Créer .env.local
cp .env.example .env.local

# Remplir avec vos clés
# nano .env.local (ou ouvrir dans l'éditeur)
NG_APP_EMAILJS_PUBLIC_KEY=votre_cle_ici
NG_APP_EMAILJS_SERVICE_ID=votre_service_id
NG_APP_EMAILJS_TEMPLATE_ID=votre_template_id

# Redémarrer
npm start

# Tester le formulaire Contact
```

---

## 📝 Personnaliser votre contenu (10 min)

### Fichier: `src/app/services/portfolio.service.ts`

```typescript
// Modifier ces sections:

// 1. Infos personnelles
personalInfo: {
  name: 'Votre Nom',
  title: 'Votre Titre',
  email: 'vous@email.com',
  phone: '+33 XX XX XX XX',
  location: 'Votre Ville',
  // ...
}

// 2. Bio/Description
description: 'Votre bio professionnelle ici...',

// 3. Ajouter vos expériences
experiences: [
  {
    company: 'Votre Entreprise',
    position: 'Votre Poste',
    duration: 'Dates',
    description: 'Votre description',
    achievements: ['Achievement 1', 'Achievement 2'],
    technologies: ['Tech 1', 'Tech 2']
  },
  // Ajouter plus...
]

// 4. Ajouter vos projets
projects: [
  {
    title: 'Nom du Projet',
    description: 'Description courte',
    image: 'URL image',
    technologies: ['Tech 1', 'Tech 2'],
    features: ['Feature 1', 'Feature 2'],
    link: 'https://...',
    github: 'https://github.com/...'
  },
  // Ajouter plus...
]
```

---

## 🔧 Commands principaux

```bash
# Démarrage
npm start              # Développement http://localhost:4200

# Tests
npm test               # Lancer les tests

# Build
npm run build          # Build production → dist/
npm run preview        # Prévisualiser la build

# Qualité
npm run lint           # Vérifier le code
npm run lint:fix       # Auto-fixer les erreurs
```

---

## 📱 Tester responsive

1. `npm start` → http://localhost:4200
2. Ouvrir DevTools: **F12** ou Ctrl+Shift+I
3. Cliquer **Toggle Device Toolbar** (Ctrl+Shift+M)
4. Tester différentes résolutions:
   - ✅ Mobile 375px (iPhone)
   - ✅ Tablet 768px (iPad)
   - ✅ Desktop 1366px (Computer)

---

## 🚢 Déployer sur Vercel (5 min)

### Option 1: CLI (Quickest)
```bash
npm install -g vercel
vercel
# Suivre les prompts
```

### Option 2: GitHub (Recommended)
1. Push sur GitHub:
```bash
git add .
git commit -m "Portfolio ready for deploy"
git push
```

2. Sur https://vercel.com/dashboard:
   - Click "New Project"
   - Select your GitHub repo
   - Ajouter variables EmailJS:
     - NG_APP_EMAILJS_PUBLIC_KEY
     - NG_APP_EMAILJS_SERVICE_ID
     - NG_APP_EMAILJS_TEMPLATE_ID
   - Deploy!

3. Voir votre site en ligne! 🎉

---

## ✅ Avant de partager

- [ ] Tester localement: `npm start`
- [ ] Tester formulaire contact
- [ ] Vérifier tous les liens
- [ ] Tester sur téléphone réel
- [ ] Build réussi: `npm run build`
- [ ] Site déployé sur Vercel
- [ ] Email de test reçu
- [ ] Partager le lien LinkedIn

---

## 📚 Documentation complète

Après Quick Start, consultez:

1. **[README.md](./README.md)** - Vue d'ensemble complète
2. **[PORTFOLIO_GUIDE.md](./PORTFOLIO_GUIDE.md)** - Guide des features
3. **[DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)** - Déploiement détaillé
4. **[UX_BEST_PRACTICES.md](./UX_BEST_PRACTICES.md)** - Attirer les recruteurs
5. **[CONFIGURATION.md](./CONFIGURATION.md)** - Variables d'environnement
6. **[CSS_GUIDE.md](./CSS_GUIDE.md)** - Customization CSS

---

## 🆘 SOS Rapide

### npm install échoue
```bash
rm -rf node_modules package-lock.json
npm install
```

### Port 4200 occupé
```bash
npm start -- --port 4201
```

### Build échoue
```bash
npm run build -- --configuration development
```

### EmailJS ne fonctionne pas
1. Vérifier `.env.local` existe
2. Vérifier les 3 clés sont correctes
3. `npm start` (redémarrer)
4. DevTools → Console → Pas d'erreurs

### Site blanc en ligne
1. Vérifier Vercel deploy réussi
2. Attendre 2-3 minutes
3. Hard refresh: **Ctrl+Shift+Delete**
4. Ou voir les logs Vercel

---

## 🎯 Next Steps

| What | Time | Link |
|------|------|------|
| **Test local** | 2 min | `npm start` |
| **Configurer EmailJS** | 5 min | emailjs.com |
| **Personnaliser contenu** | 10 min | portfolio.service.ts |
| **Déployer Vercel** | 5 min | vercel.com |
| **Partager LinkedIn** | 2 min | linkedin.com |

---

## 💡 Tips

- Gardez votre portfoli à jour (ajouter nouveaux projets)
- Testez le formulaire de contact régulièrement
- Vérifiez les liens externes
- Checkez les perfs: `npm run build` → DevTools Lighthouse
- Mettez à jour Linux/Mac quand deps demandent
- Faites des commits réguliers sur GitHub

---

**Besoin d'aide?** Consultez les guides complets! 📚

**Prêt à déployer?** Let's go! 🚀

```bash
npm install
npm start
# Puis Vercel deploy...
```

Bon courage! 💚
