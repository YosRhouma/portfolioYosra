# 🔐 Configuration & Secrets Management

## 1. Variables d'environnement

### Fichiers
- `.env.example` - Template (versionné)
- `.env.local` - Local development (ignoré par git)
- `.env.production` - Production (sur Vercel)

### Pour développement local

**1. Créer `.env.local` à partir du template:**
```bash
cp .env.example .env.local
```

**2. Remplir avec vos clés:**
```env
NG_APP_EMAILJS_PUBLIC_KEY=abc123xyz456
NG_APP_EMAILJS_SERVICE_ID=service_xyz789
NG_APP_EMAILJS_TEMPLATE_ID=template_abc123
```

**3. Redémarrer le serveur:**
```bash
# Ctrl+C pour arrêter
npm start
```

### Obtenir les clés EmailJS

1. Aller sur https://www.emailjs.com/
2. Créer un compte (gratuit)
3. Dans Dashboard → Account:
   - Copier "Public Key" → `NG_APP_EMAILJS_PUBLIC_KEY`
4. Dans Dashboard → Email Services:
   - Ajouter un service (Gmail, SendGrid, etc.)
   - Copier l'ID → `NG_APP_EMAILJS_SERVICE_ID`
5. Dans Dashboard → Email Templates:
   - Créer un template
   - Copier l'ID → `NG_APP_EMAILJS_TEMPLATE_ID`

### Pour Vercel

**Ajouter les variables d'environnement:**

```bash
# Via Vercel CLI
vercel env add NG_APP_EMAILJS_PUBLIC_KEY
vercel env add NG_APP_EMAILJS_SERVICE_ID
vercel env add NG_APP_EMAILJS_TEMPLATE_ID

# Entrer les valeurs quand demandé
```

Ou via Dashboard Vercel:
1. Settings → Environment Variables
2. Ajouter chaque variable
3. Deployer

## 2. Template EmailJS

### Configuration du service email

Dans EmailJS Dashboard, créer un template avec ces variables:

```
Template Name: Portfolio Contact
Template ID: [votre_template_id]

From Email: {{email}}
To Email: yosra@email.com (votre email)
Subject: New Portfolio Contact: {{subject}}

Body:
Name: {{name}}
Email: {{email}}
Subject: {{subject}}
Message:
{{message}}
```

### Variables de formulaire

Le formulaire Contact envoie:
```typescript
{
  name: string,        // {{name}}
  email: string,       // {{email}}
  subject: string,     // {{subject}}
  message: string      // {{message}}
}
```

Correspondant au template EmailJS.

## 3. Security Best Practices

### ✅ À faire

- ✅ Garder `.env.local` en local (ajouter à `.gitignore`)
- ✅ Jamais commiter `.env.local`
- ✅ Utiliser des clés avec permissions minimales
- ✅ Rotationner les clés régulièrement
- ✅ Utiliser HTTPS partout
- ✅ Valider les inputs côté serveur

### ❌ À éviter

- ❌ Hardcoder les clés dans le code
- ❌ Commiter `.env` ou secrets
- ❌ Passer les clés en URL
- ❌ Partager les clés sur public

### .gitignore (vérifier)

```gitignore
# Environment
.env
.env.local
.env.production.local
.env.development.local

# Dependencies
node_modules/
package-lock.json

# Build
dist/
build/

# IDE
.vscode/
.idea/
*.swp

# OS
.DS_Store
Thumbs.db
```

## 4. Accéder aux variables dans le code

### Dans les services TypeScript

```typescript
import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  constructor() {
    // Accéder aux variables d'environnement
    const publicKey = import.meta.env.NG_APP_EMAILJS_PUBLIC_KEY;
    
    if (publicKey) {
      emailjs.init(publicKey);
    } else {
      console.warn('EmailJS public key not configured');
    }
  }

  sendEmail(formData: any) {
    return emailjs.send(
      import.meta.env.NG_APP_EMAILJS_SERVICE_ID,
      import.meta.env.NG_APP_EMAILJS_TEMPLATE_ID,
      formData
    );
  }
}
```

### Dans les templates HTML

```html
<!-- Pas possible directement en Angular (pour la sécurité) -->
<!-- Les variables sont injectées au build-time -->
```

### Dans la configuration

```typescript
// angular.json - Voir les replacements
"fileReplacements": [
  {
    "replace": "src/environments/environment.ts",
    "with": "src/environments/environment.prod.ts"
  }
]
```

## 5. Vérifier les variables

### Local Development

```bash
# Vérifier que .env.local existe
ls -la .env.local

# Vérifier que npm start charge les vars
npm start
# Ouvrir DevTools → Console
# Les erreurs EmailJS doivent disparaître
```

### Production (Vercel)

```bash
# Via CLI
vercel env pull    # Télécharger les vars locales
vercel env list    # Lister les vars

# Via Dashboard
# Settings → Environment Variables
```

## 6. Testing avec des variables

### Mock pour les tests

```typescript
// test setup
describe('EmailService', () => {
  beforeEach(() => {
    // Mock les variables
    (import.meta.env as any).NG_APP_EMAILJS_PUBLIC_KEY = 'test-key';
    (import.meta.env as any).NG_APP_EMAILJS_SERVICE_ID = 'test-service';
    (import.meta.env as any).NG_APP_EMAILJS_TEMPLATE_ID = 'test-template';
  });

  it('should send email', () => {
    const service = TestBed.inject(EmailService);
    // Test...
  });
});
```

## 7. Dépannage

### EmailJS ne fonctionne pas

**Problème:** "Cannot read property 'init' of undefined"

**Solution:**
```bash
# 1. Vérifier la clé
cat .env.local | grep EMAILJS_PUBLIC_KEY

# 2. Redémarrer npm
npm start

# 3. Vérifier les dev tools
# DevTools → Network → No 404 errors
```

### Variables non chargées

**Problème:** Variables undefined en TypeScript

**Solution:**
```typescript
// Bonne pratique
const publicKey = process.env['NG_APP_EMAILJS_PUBLIC_KEY'];
if (!publicKey) {
  console.warn('EmailJS not configured');
  throw new Error('Missing EmailJS public key');
}
```

### Vercel: Variables manquantes

**Problème:** Deploy échoue sans clés

**Solution:**
```bash
# 1. Vérifier sur Vercel Dashboard
vercel env list

# 2. Ou via CLI
vercel env add NG_APP_EMAILJS_PUBLIC_KEY
# Entrer la clé

# 3. Redéployer
git push
# Vercel redéploie automatiquement avec nouvelles vars
```

---

## 📋 Checklist Configuration

- [ ] `.env.example` créé avec placeholders
- [ ] `.env.local` créé et ignoré par git
- [ ] EmailJS public key dans `.env.local`
- [ ] EmailJS service ID dans `.env.local`
- [ ] EmailJS template ID dans `.env.local`
- [ ] Email service configuré avec clés
- [ ] Test local: formulaire de contact fonctionne
- [ ] Variables Vercel configurées
- [ ] Deploy Vercel réussi avec email de test

---

## 🔒 Rotation des clés

Changer régulièrement les clés EmailJS (best practice):

```bash
# 1. Sur EmailJS Dashboard → Account → Security
#    Générer une nouvelle clé

# 2. Mettre à jour localement
nano .env.local
# Remplacer la clé

# 3. Tester
npm start
# Formulaire doit fonctionner

# 4. Mettre à jour Vercel
vercel env add NG_APP_EMAILJS_PUBLIC_KEY
# Nouvelle clé

# 5. Supprimer l'ancienne clé
# Dashboard EmailJS → Account → Supprimer ancienne clé
```

---

Tout configuré! Votre portfolio peut maintenant recevoir des emails! 📧
