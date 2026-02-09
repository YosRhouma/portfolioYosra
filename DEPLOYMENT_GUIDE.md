# 🚀 Guide Complet de Déploiement sur Vercel

## 📋 Prérequis

- Compte GitHub, GitLab ou Bitbucket
- Compte Vercel (gratuit sur https://vercel.com)
- Le code du portfolio pushé sur un repository

## 1️⃣ Préparation du Projet

### Étape 1: Vérifier la configuration du build

Le fichier `vercel.json` est déjà configuré avec:
- Build command: `npm run build`
- Output directory: `dist/portfolio-yosra`
- Framework: Angular

### Étape 2: Configuration des variables d'environnement

Le fichier `.env.example` contient:
```
NG_APP_EMAILJS_PUBLIC_KEY=your_public_key
NG_APP_EMAILJS_SERVICE_ID=your_service_id
NG_APP_EMAILJS_TEMPLATE_ID=your_template_id
```

**Obtenir vos clés EmailJS:**

1. Allez sur https://www.emailjs.com/
2. Créez un compte gratuit
3. Dans le dashboard:
   - **Public Key**: Services → Copy Public Key
   - **Service ID**: Votre service email (ex: `service_`)
   - **Template ID**: Templates → Select → Copy Template ID

## 2️⃣ Déploiement sur Vercel

### Méthode 1: Via Interface Vercel (Recommandée)

1. **Accédez à Vercel**
   - Allez sur https://vercel.com/dashboard
   - Connectez-vous avec GitHub/GitLab/Bitbucket

2. **Créer un nouveau projet**
   - Click "Add New..." → "Project"
   - Sélectionnez votre repository
   - Click "Import"

3. **Configurer le BUILD**
   ```
   Framework Preset: Angular
   Build Command: npm run build (auto-détecté)
   Output Directory: dist/portfolio-yosra (auto-détecté)
   Install Command: npm install
   ```

4. **Ajouter les variables d'environnement**
   - Dans "Environment Variables":
   ```
   NG_APP_EMAILJS_PUBLIC_KEY = [votre public key]
   NG_APP_EMAILJS_SERVICE_ID = [votre service id]
   NG_APP_EMAILJS_TEMPLATE_ID = [votre template id]
   ```
   - Click "Add"

5. **Déployer**
   - Click "Deploy"
   - Attendre la fin du build (~2-3 minutes)
   - Récupérer votre URL: `https://something.vercel.app`

### Méthode 2: Via CLI Vercel

```bash
# 1. Installer Vercel CLI
npm install -g vercel

# 2. Initialiser le projet
vercel

# 3. Suivre les prompts
# - Select your project directory
# - Link to existing project? (No pour première fois)
# - Project name: portfolio-yosra
# - Framework: Angular
# - Root directory: ./

# 4. Ajouter les variables d'environnement
vercel env add NG_APP_EMAILJS_PUBLIC_KEY
vercel env add NG_APP_EMAILJS_SERVICE_ID
vercel env add NG_APP_EMAILJS_TEMPLATE_ID

# 5. Déployer en production
vercel --prod
```

## 3️⃣ Configuration du Domaine Personnalisé

1. **Acheter un domaine**
   - GoDaddy, Namecheap, OVH, etc.
   - Exemple: `yosra-portfolio.com`

2. **Connecter à Vercel**
   - Settings → Domains
   - "Add Domain"
   - Entrer votre domaine
   - Ajouter les DNS records

3. **Configuration DNS** (selon votre registrar)
   ```
   Type: CNAME
   Name: @ (ou laissez vide)
   Value: cname.vercel-dns.com
   ```

4. **Vérification**
   - Après quelques minutes, le domaine sera accessible
   - https://yosra-portfolio.com

## 4️⃣ Après Déploiement

### Vérifier le SEO

```bash
# Test Lighthouse
# Allez sur: https://pagespeed.web.dev/
# Entrez votre URL depuis Vercel
```

### Tests

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Navigation fluide
- ✅ Formulaire de contact fonctionnel
- ✅ Liens externes
- ✅ Performance (Core Web Vitals)

### Monitoring

1. **Analytics**
   - Vercel Dashboard → Analytics
   - Voir les performances en temps réel

2. **Erreurs**
   - Vérifier les logs: Deployments → Logs
   - Vérifier la console du navigateur

## 5️⃣ Mise à Jour du Contenu

```bash
# 1. Modifier le contenu
# Éditer src/app/services/portfolio.service.ts

# 2. Commit et push
git add .
git commit -m "Update portfolio content"
git push origin main

# 3. Vercel re-déploie automatiquement
# Voir le statut sur: https://vercel.com/dashboard
```

## 6️⃣ Optimisations Recommandées

### Ajouter un Sitemap
```xml
<!-- public/sitemap.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yosra-portfolio.com/</loc>
    <lastmod>2024-01-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

### Mettre à jour Robots
```
<!-- public/robots.txt -->
User-agent: *
Allow: /
Sitemap: https://yosra-portfolio.com/sitemap.xml
```

### Configuration de Google Search Console
1. Allez sur: https://search.google.com/search-console
2. Ajouter votre domaine
3. Vérifier avec DNS TXT record
4. Soumettre le sitemap

### Google Analytics
```typescript
// Ajouter Google Analytics dans index.html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

## 7️⃣ Troubleshooting

### Erreur: "Build failed"
```bash
# Vérifier localement
npm run build

# Si erreurs, corriger et redéployer
git push origin main
```

### Erreur: "EmailJS not working"
- ✅ Vérifier les Variables d'environnement
- ✅ Vérifier les clés EmailJS sont correctes
- ✅ Vérifier le template existe
- ✅ Vérifier le Service ID existe et est activé

### Lent au déploiement
- ✅ Utilisez un SSD pour plus rapide
- ✅ Réduisez la taille des assets
- ✅ Utilisez Lighthouse pour optimiser

## 📞 Support

- **Vercel Docs**: https://vercel.com/docs
- **Angular Docs**: https://angular.io/docs
- **EmailJS Docs**: https://www.emailjs.com/docs

## ✅ Checklist Finale

- [x] Code committé sur GitHub
- [x] Vercel connecté au repository
- [x] Variables d'environnement ajoutées
- [x] Build réussi
- [x] Tests en production
- [x] Domaine personnalisé configuré (optionnel)
- [x] SEO configuré
- [x] Analytics activé
- [x] URL partagée sur LinkedIn et CV

---

**Bravo! 🎉 Votre portfolio est en ligne et prêt pour le recrutement!**
