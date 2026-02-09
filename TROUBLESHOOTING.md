# 🔧 Troubleshooting & FAQ

## 🔴 Critical Issues

### 1. npm install échoue

**Error:** `npm ERR! code ERESOLVE`

**Solution:**
```bash
# Option A: Clean install
rm -rf node_modules package-lock.json
npm install

# Option B: Force legacy peer deps
npm install --legacy-peer-deps

# Option C: Use npm 7+
npm --version  # Doit être 7.x ou plus
npm install -g npm@latest
npm install
```

**Plus d'infos:** Généralement du à des problèmes de dépendances incompatibles.

---

### 2. npm start ne démarre pas

**Error:** `Error: Cannot find module '@angular/core'`

**Solution:**
```bash
# Vérifier l'installation
npm list | head -20

# Réinstaller
rm -rf node_modules package-lock.json
npm install

# Vérifier Node version
node --version  # Doit être 18.x ou plus
npm --version   # Doit être 9.x ou plus

# Si problème persiste
npm cache clean --force
npm install

# Enfin
npm start
```

**Plus d'infos:** Manque dependencies ou versioning issue.

---

### 3. TypeScript compilation échoue

**Error:** `TS2307: Cannot find module`

**Solution:**
```bash
# Nettoyer les caches
rm -rf dist/ *.tsbuildinfo

# Recompiler
npm run build -- --configuration development

# Vérifier l'import
# ❌ Mauvais: import { Component } from 'component.ts'
# ✅ Bon: import { HeroComponent } from './hero/hero.component'
```

**Plus d'infos:** Vérifier les chemins relatifs et les extensions `.ts`.

---

### 4. Port 4200 already in use

**Error:** `Error: listen EADDRINUSE :::4200`

**Solution:**
```bash
# Option A: Utiliser un autre port
npm start -- --port 4201

# Option B: Tuer le processus (Windows)
netstat -ano | findstr :4200  # Voir le PID
taskkill /PID [PID_NUMBER] /F

# Option B: Tuer le processus (Mac/Linux)
lsof -i :4200
kill -9 [PID]

# Option C: Attendre que l'ancien processus finisse
# Fermer l'IDE, attendre 2s, redémarrer
```

**Plus d'infos:** Un port peut rester occupé après crash.

---

### 5. Git push échoue

**Error:** `error: src refspec main does not match any`

**Solution:**
```bash
# Vérifier le status
git status

# Ajouter les fichiers
git add .

# Faire le commit
git commit -m "Portfolio ready"

# Checker la branche
git branch -v

# Push
git push origin main

# Si origin incorrect
git remote -v
git remote set-url origin https://github.com/your-username/repo.git
git push
```

**Plus d'infos:** Branche peut être `main` ou `master`. Vérifier avec `git branch -a`.

---

## 🟡 Compilation & Build Issues

### 6. Build production échoue

**Error:** `NG6999: Build failed`

**Solution:**
```bash
# Build avec détails
npm run build -- --verbose

# Build en dev mode (plus permissif)
npm run build -- --configuration development

# Checker les erreurs TypeScript
npx tsc --noEmit

# Nettoyer et réessayer
rm -rf dist/ node_modules/.cache
npm run build
```

**Cause commune:** 
- Erreurs TypeScript non détectées
- Missing environment variables
- Fichiers image manquants

---

### 7. Angular SSR build échoue

**Error:** `Error: Cannot find build file`

**Solution:**
```bash
# Vérifier la config
cat angular.json | grep outputPath

# Devrait être dist/portfolio-yosra/browser

# Rebuild
npm run build

# Vérifier le result
ls -la dist/

# Doit avoir browser/ et server/
```

---

### 8. Styles ne chargent pas correctement

**Error:** Site s'affiche sans styling après build

**Solution:**
```bash
# Vérifier tailwind.config.js
cat tailwind.config.js

# Rebuild avec Tailwind
npm run build

# Vérifier le CSS dans dist
ls -la dist/portfolio-yosra/browser/styles.*

# Si problème persiste, nettoyer
rm -rf dist/ node_modules/.cache
npm run build

# Vérifier les imports
# Dans styles.css: @import 'tailwindcss/base';
```

---

## 🟠 Component & TypeScript

### 9. Component ne charge pas

**Error:** `Can't resolve './hero.component.html'`

**Solution:**
```typescript
// Vérifier le chemin dans le TypeScript
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',  // Bon ✅
  styleUrls: ['./hero.component.css']
})

// Vérifier que le fichier existe
ls -la src/app/hero/

// Doit avoir:
// - hero.component.ts
// - hero.component.html
// - hero.component.css
// - hero.component.spec.ts

// Re-compiler
npm start
```

---

### 10. Services non injectés correctement

**Error:** `NullInjectorError: No provider for PortfolioService`

**Solution:**
```typescript
// Vérifier providedIn: 'root' dans le service
@Injectable({
  providedIn: 'root'  // ✅ Important
})
export class PortfolioService {
  //...
}

// Ou ajouter dans app.config.ts
export const appConfig: ApplicationConfig = {
  providers: [
    // ...
    PortfolioService
  ]
};

// Vérifier l'import dans le component
import { PortfolioService } from '../services/portfolio.service';

// Re-compiler
npm start
```

---

### 11. Form validation ne fonctionne pas

**Error:** `Form control not updating`

**Solution:**
```typescript
// Vérifier que ReactiveFormsModule est importé
import { ReactiveFormsModule } from '@angular/forms';

// Dans le component
import { FormBuilder, Validators } from '@angular/forms';

contactForm = this.fb.group({
  name: ['', [Validators.required, Validators.minLength(2)]],
  email: ['', [Validators.required, Validators.email]],
  subject: ['', [Validators.required, Validators.minLength(5)]],
  message: ['', [Validators.required, Validators.minLength(10)]]
});

// Dans le HTML
<form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
  <input formControlName="name">
  <span *ngIf="contactForm.get('name')?.hasError('required')">
    Required
  </span>
</form>

// Re-compile
npm start
```

---

## 🔵 EmailJS Issues

### 12. EmailJS ne fonctionne pas

**Error:** `Cannot read property 'send' of undefined`

**Solution:**
```bash
# 1. Vérifier la clé publique
echo $NG_APP_EMAILJS_PUBLIC_KEY

# 2. Vérifier le fichier .env.local
cat .env.local

# Doit contenir:
# NG_APP_EMAILJS_PUBLIC_KEY=xxx
# NG_APP_EMAILJS_SERVICE_ID=xxx
# NG_APP_EMAILJS_TEMPLATE_ID=xxx

# 3. Redémarrer le serveur
npm start

# 4. Tester dans DevTools Console
// Tester manuellement:
emailjs.init('your_public_key')
emailjs.send('service_id', 'template_id', {
  name: 'Test',
  email: 'test@test.com',
  subject: 'Test',
  message: 'Test'
})

# 5. Vérifier les erreurs
// DevTools Console doit montrer le succès
```

**Plus d'infos:** EmailJS doit être initialisé avant utilisation.

---

### 13. Email ne reçoit pas

**Error:** `EmailJS send successful mais pas d'email`

**Solution:**
```typescript
// 1. Vérifier le template sur EmailJS Dashboard
// Email Services → Email Templates → Vérifier le template

// 2. Vérifier les variables dans le template
// {{name}}, {{email}}, {{subject}}, {{message}}

// 3. Vérifier le "To Email"
// Doit être un email valide et confirmé sur EmailJS

// 4. Vérifier le "From Email"
// Doit correspondre au service email

// 5. Vérifier le statut du service
// Dashboard → Email Services → Status doit être GREEN

// 6. Tester l'envoi manuel
// Dashboard → Send Test Email

// 7. Vérifier le spam
// Inbox → Spam/Promotions
```

---

### 14. Clés EmailJS invalides

**Error:** `Invalid Public Key`

**Solution:**
```bash
# 1. Vérifier sur emailjs.com
# Dashboard → Account → Copy Public Key correctement

# 2. Vérifier dans .env.local (pas d'espaces!)
NG_APP_EMAILJS_PUBLIC_KEY=abc123xyz  # PAS du tout!

# 3. Vérifier la clé est longue (50+ caractères)
wc -c .env.local  # Doit faire au moins 100 chars

# 4. Redémarrer
npm start

# 5. Tester
emailjs.init('your_key_here')
```

---

## 🟢 Vercel & Hosting

### 15. Vercel build échoue

**Error:** `Build failed` sur Vercel Dashboard

**Solution:**
```bash
# 1. Checkout la build localement
npm run build

# Doit succéder sans erreurs

# 2. Vérifier la même config que Vercel
# Vercel Settings → Build & Development Settings
# Build command: npm run build
# Output directory: dist/portfolio-yosra/browser

# 3. Vérifier les env vars sur Vercel
# Settings → Environment Variables
# Doit avoir les 3 clés EmailJS

# 4. Checker les logs Vercel
# Deployments → [Latest] → Logs
# Chercher ERROR ou WARN

# 5. Si ça change rien
git push  # Re-deploy
```

---

### 16. Site blanc après Vercel deploy

**Error:** https://domain.com affiche page blanche

**Solution:**
```bash
# 1. Attendre 2-3 minutes
# Vercel peut prendre du temps

# 2. Hard refresh
# Ctrl+Shift+Delete (Windows)
# Cmd+Shift+Delete (Mac)
# Ou Ctrl+F5

# 3. Vérifier les logs Vercel
# Dashboard → Deployments → [Latest] → Logs
# Chercher ERROR

# 4. Vérifier la build locale
npm run build
npm run preview
# Doit fonctionner

# 5. Check env vars
# Si EmailJS non configuré, site peut être blanc

# 6. Force rebuild
# Vercel Dashboard → Deployments → Redeploy
```

---

### 17. FunctionUrl/404 errors Vercel

**Error:** `404 Function not found` ou `/api/...` 404

**Solution:**
```bash
# Si vous avez une API serverless:

# 1. Checker la structure
# api/ (à la racine, pas dans src/)

# 2. Vérifier vercel.json
# Devrait avoir les routes API

# 3. Pour portfolio simple:
# IGNORER - pas besoin d'API!

# 4. Si vous avez besoin d'API:
# Créer un dossier api/ à la racine
# api/contact.js ou .ts

# 5. Config dans vercel.json
"rewrites": [
  {
    "source": "/api/:match*",
    "destination": "/api/:match*"
  }
]
```

---

### 18. Custom domain not working

**Error:** `Domain not pointing to Vercel` ou `404 Not Found`

**Solution:**
```bash
# 1. Vérifier Vercel Settings
# Domains → Ajouter le domaine

# 2. Copier les DNS records
# Vercel affiche: NS records ou CNAME

# 3. Aller sur votre registrar (GoDaddy, Namecheap, etc.)
# DNS Settings → Ajouter les records

# 4. Attendre la propagation
# Peut prendre 24-48 heures

# 5. Vérifier la propagation
# https://dnschecker.org/
# Chercher votre domaine

# 6. Test
# https://yourdom.com doit fonctionner
```

---

## 💻 Development Environment

### 19. Node/npm version issues

**Error:** `npm ERR! node is not compatible`

**Solution:**
```bash
# Vérifier les versions
node --version  # 18.x ou supérieur recommandé
npm --version   # 9.x ou supérieur

# Upgrade Node (Windows)
# Télécharger depuis nodejs.org

# Upgrade Node (Mac avec nvm)
nvm install 18
nvm use 18
nvm alias default 18

# Upgrade npm
npm install -g npm@latest

# Vérifier après upgrade
node --version
npm --version
```

---

### 20. IDE/Editor issues

**Error:** TypeScript symbols not resolving en VS Code

**Solution:**
```bash
# 1. Fermer VS Code

# 2. Nettoyer
rm -rf node_modules .angular dist
npm install

# 3. Redémarrer VS Code
# File → Close All
# File → Open Folder → reprendre le project

# 4. Forcer la redécouverte TypeScript
# Ctrl+Shift+P → "TypeScript: Restart TS Server"

# 5. Vérifier tsconfig.json
# "strict": true doit être en place
```

---

## 🔍 Performance Issues

### 21. Site lent en développement

**Error:** Lighthouse < 50, site lent

**Solution:**
```bash
# C'est NORMAL en dev! Angular dev mode est lent

# Pour tester la performance, utiliser la build prod:
npm run build
npm run preview

# Checker Lighthouse sur preview
# DevTools → Lighthouse → Analyse

# Doit avoir 90+ en prod

# Si prod lent:
# 1. Images non optimisées
# npx imagemin src/assets/ --out-dir=src/assets/
# 2. Bundles trop gros
# npm run build -- --analyze (si @angular-builders/custom-webpack)
# 3. Pas de lazy loading
# Activer lazy loading des routes
```

---

### 22. Network requests slow

**Error:** Page prend longtemps à charger

**Solution:**
```bash
# 1. Ouvrir DevTools Network tab
# npm start
# Refresh la page
# Checker quelle ressource est lente

# 2. Si EmailJS lent
# C'est normal, service externe
# Optimiser en lazy loading

# 3. Si images lentes
# Compresser les images
# Utiliser WebP au lieu de JPG
# Lazy load (loading="lazy")

# 4. Si API externe lente
# Pas de problème portfolio
# Ajouter timeout/cache strategy

# 5. Vérifier CDN
# Si custom images, upload sur Vercel ou CDN
```

---

## 🐛 Browser-Specific Issues

### 23. Safari ne fonctionne pas correctement

**Error:** Layout cassé ou features manquantes sur Safari

**Solution:**
```css
/* Safari compatibility */
/* Ajouter -webkit prefixes dans styles.css */

.gradient-text {
  background: linear-gradient(135deg, #10b981, #34d399);
  -webkit-background-clip: text;  /* Safari needs this */
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Flexbox compatibility */
display: -webkit-box;      /* Safari 6 */
display: -webkit-flex;     /* Safari 7+ */
display: flex;

/* Transform compatibility */
-webkit-transform: scale(1.05);
transform: scale(1.05);
```

Ou utiliser autoprefixer:
```bash
npm install -D autoprefixer postcss
# Ajouter dans tailwind.config.js
```

---

### 24. Mobile viewport issues

**Error:** Mobile affiche version desktop, pas responsive

**Solution:**
```html
<!-- Vérifier index.html a le viewport meta tag -->
<meta name="viewport" content="width=device-width, initial-scale=1">

<!-- Ajouter si manquant dans src/index.html -->
<head>
  <meta charset="utf-8">
  <title>Portfolio</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<!-- Redémarrer -->
npm start
```

---

## 📝 FAQ Rapide

### Q: Comment ajouter une nouvelle section?
**A:** 
```bash
# 1. Generate component
ng generate component components/new-section --skip-tests

# 2. Ajouter dans app.routes.ts si route
# 3. Ajouter dans header nav si section

# 4. Ajouter le styling Tailwind
# 5. Ajouter dans portfolio.service.ts si data
```

### Q: Comment changer les couleurs?
**A:** `tailwind.config.js` → theme → extend → colors

### Q: Comment ajouter dark mode toggle?
**A:** 
```typescript
isDarkMode = signal(true);

toggleDarkMode() {
  this.isDarkMode.update(v => !v);
  document.documentElement.classList.toggle('dark');
}
```

### Q: Comment optimiser les images?
**A:**
```bash
# Installer imagemin
npm install -D imagemin imagemin-mozjpeg imagemin-pngquant

# Compresser
npx imagemin src/assets/images --out-dir=src/assets/images
```

### Q: Comment ajouter Google Analytics?
**A:**
```bash
# Installer
npm install @angular/google-analytics

# Dans app.config.ts
import { NgxGoogleAnalyticsModule } from '@ngx-ga/core';

providers: [
  NgxGoogleAnalyticsModule.forRoot({
    trackingId: 'GA_MEASUREMENT_ID',
    appName: 'Portfolio'
  })
]
```

### Q: Comment tester sur un autre appareil?
**A:**
```bash
# Sur l'ordinateur:
npm start -- --host 0.0.0.0 --port 4200

# Sur le téléphone (même réseau):
# http://YOUR_COMPUTER_IP:4200
# Trouver IP: ipconfig (Windows) ou ifconfig (Mac/Linux)
```

### Q: Mes changements ne s'affichent pas?
**A:**
```bash
# Hard refresh du navigateur:
# Ctrl+Shift+Delete (Windows)
# Cmd+Shift+Delete (Mac)
# Ou Ctrl+F5

# Si dev server:
# Redémarrer npm start
npm start
```

---

## 🆘 Encore du problème?

**Avant de demander de l'aide:**

1. ✅ Relires les étapes solution ci-dessus
2. ✅ Checker les logs (DevTools, npm output)
3. ✅ Nettoyer et reconstruire:
   ```bash
   rm -rf node_modules dist .angular
   npm install
   npm start
   ```
4. ✅ Vérifier la documentation (QUICK_START.md, etc.)

**Ressources:**
- [Angular Docs](https://angular.io/docs)
- [Tailwind Docs](https://tailwindcss.com)
- [EmailJS Docs](https://www.emailjs.com/docs/)
- [Vercel Docs](https://vercel.com/docs)

**Décrire le problème:**
- Quoi exactement va mal?
- Quel error message? (exact!)
- Quand ça a commencé?
- Qu'avez-vous changé récemment?
- Avez-vous essayé quoi?

---

**Bonne chance! Vous pouvez le faire! 💪**
