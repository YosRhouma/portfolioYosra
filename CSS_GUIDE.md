# 🎨 Guide CSS Personnalisé (Optionnel)

Votre portfolio utilise **Tailwind CSS** pour le styling, ce qui est optimal pour la rapidité. Ce guide montre comment ajouter des CSS personnalisés si vous le souhaitez.

## 1. Structure Current (Recommandée)

Actuellement, tout le styling se fait via **Tailwind classes** directement dans les templates HTML. C'est la bonne pratique moderne!

**Avantages:**
- ✅ Léger (PurgeCSS en prod)
- ✅ Rapide à développer
- ✅ Réutilisable
- ✅ Responsive-friendly
- ✅ Facile à maintenir

**Exemple:**
```html
<div class="flex items-center justify-between lg:flex-row flex-col gap-8">
  <button class="px-6 py-3 bg-gradient-to-r from-primary-400 to-primary-600 
                 rounded-lg hover:shadow-lg transition-shadow duration-300">
    Click me
  </button>
</div>
```

## 2. Quand ajouter du CSS personnalisé?

### Cas d'usage valides:
- Complex animations multiples
- Hover states spécifiques
- Media query complexe
- Pseudo-éléments avancés
- Styles dynamiques (JS-based)

### Exemples où Tailwind suffit:
```html
<!-- Animation shimmer -->
<div class="animate-pulse">Loading...</div>

<!-- Hover état -->
<button class="hover:bg-primary-500 hover:scale-105 transition-all">
  Hover me
</button>

<!-- Gradient background -->
<div class="bg-gradient-to-r from-primary-400 via-blue-500 to-primary-600">
  Gradient text
</div>
```

## 3. Ajouter du CSS personnalisé (Optional)

Si vous voulez vraiment des fichiers CSS séparés, voici comment:

### Option A: Component CSS Files (Recommandée)

Chaque composant a déjà un fichier `.css` vide:
```
src/app/hero/hero.component.css
src/app/about/about.component.css
src/app/skills/skills.component.css
... etc
```

**Pour ajouter du CSS personnalisé:**

Exemple dans `hero.component.css`:
```css
/* Custom animations */
@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.gradient-text {
  background: linear-gradient(135deg, #10b981, #34d399, #10b981);
  background-size: 300% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientShift 3s ease infinite;
}

/* Custom hover effect */
.project-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 30px rgba(16, 185, 129, 0.2);
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

/* Custom media queries */
@media (max-width: 768px) {
  .hero-title {
    font-size: 1.875rem;
  }
}
```

**Dans le component TypeScript:**
```typescript
import { Component } from '@angular/core';
import './hero.component.css'; // Déjà importé automatiquement par Angular

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  // ...
}
```

**Dans le HTML:**
```html
<h1 class="gradient-text">Welcome to my portfolio</h1>
<div class="project-card">
  <!-- content -->
</div>
```

### Option B: Global CSS (styles.css)

Pour les styles partagés entre composants:

**Fichier:** `src/styles.css`
```css
/* Global variables */
:root {
  --primary-color: #10b981;
  --primary-light: #34d399;
  --dark-bg: #0f172a;
  --dark-text: #f1f5f9;
  --transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

/* Utility classes */
.gradient-border {
  border: 2px solid;
  border-image: linear-gradient(135deg, var(--primary-color), var(--primary-light)) 1;
}

.glass-effect {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.smooth-scroll {
  scroll-behavior: smooth;
}

/* Global animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  animation: fadeInUp 600ms ease-out;
}
```

## 4. Animations Avancées

### Déjà dans Tailwind config:
```javascript
animation: {
  'fade-in': 'fadeIn 0.5s ease-in-out',
  'slide-up': 'slideUp 0.6s ease-out',
  'slide-down': 'slideDown 0.6s ease-out',
  'float': 'float 3s ease-in-out infinite',
  'glow': 'glow 2s ease-in-out infinite',
  'scale': 'scale 0.6s ease-out',
}
```

### Ajouter nouvelles animations:

Dans `tailwind.config.js`:
```javascript
module.exports = {
  theme: {
    extend: {
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-10px)' },
          '75%': { transform: 'translateX(10px)' },
        },
        pop: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        }
      },
      animation: {
        shake: 'shake 0.5s ease-in-out',
        pop: 'pop 0.3s ease-out',
      }
    }
  }
}
```

**Utilisation:**
```html
<button class="animate-pop">Click me!</button>
<div class="animate-shake">Error message</div>
```

## 5. Dark Mode Avancé

Votre portfolio utilise le dark mode. Pour customiser davantage:

**Dans tailwind.config.js:**
```javascript
module.exports = {
  darkMode: 'class', // ou 'media'
  theme: {
    extend: {
      colors: {
        dark: {
          50: '#f8fafc',
          900: '#0f172a',
          // ... etc
        }
      }
    }
  }
}
```

**Utilisation:**
```html
<!-- Dark mode classes -->
<div class="bg-white dark:bg-dark-900 text-gray-900 dark:text-white">
  Content adapts to dark mode
</div>

<!-- Toggle dark mode (JS) -->
<button onclick="document.documentElement.classList.toggle('dark')">
  Toggle Dark Mode
</button>
```

## 6. CSS Grid & Flexbox (Tailwind)

Votre layout utilise déjà Tailwind pour le positioning:

```html
<!-- Grid 2 colonnes responsive -->
<div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
  <div>Col 1</div>
  <div>Col 2</div>
</div>

<!-- Flexbox center -->
<div class="flex items-center justify-center">
  Centered content
</div>

<!-- Flex avec wrap -->
<div class="flex flex-wrap gap-4">
  <button>Button 1</button>
  <button>Button 2</button>
</div>
```

## 7. Variables CSS (Modern Approach)

Combiné Tailwind + CSS Variables:

**Dans styles.css:**
```css
:root {
  --primary-gradient: linear-gradient(135deg, #10b981, #34d399);
  --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  --radius: 8px;
}

.gradient-box {
  background: var(--primary-gradient);
  border-radius: var(--radius);
  box-shadow: var(--shadow-lg);
}
```

**Dans HTML:**
```html
<div class="gradient-box">Styled with CSS variables</div>
```

## 8. Performance Tips

### ✅ Garder Tailwind comme base
- Combiner avec CSS personnalisé seulement si nécessaire
- PurgeCSS supprime les classes inutilisées automatiquement

### ❌ À éviter
```css
/* Bad: Trop spécifique */
div.container section#main article.card p.text {
  color: blue;
}

/* Good: Utiliser Tailwind classes */
<article class="card p-4 text-blue-500">
```

### Performance Checklist:
- [ ] Pas de `!important` partout
- [ ] Réutiliser les animations
- [ ] Variables CSS pour les couleurs
- [ ] Media queries réactives
- [ ] Minifier CSS en prod

## 9. Exemple Complet: Component avec CSS Custom

### Header Component avancé

**header.component.css:**
```css
.header {
  position: fixed;
  top: 0;
  width: 100%;
  backdrop-filter: blur(10px);
  background: rgba(15, 23, 42, 0.8);
  border-bottom: 1px solid rgba(16, 185, 129, 0.2);
  transition: all 300ms ease;
  z-index: 50;
}

.header.scrolled {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  background: rgba(15, 23, 42, 0.95);
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #10b981, #34d399);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: transform 300ms ease;
}

.logo:hover {
  transform: scale(1.05);
}

.nav-link {
  position: relative;
  color: #cbd5e1;
  transition: color 300ms ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -5px;
  left: 0;
  background: linear-gradient(90deg, #10b981, #34d399);
  transition: width 300ms ease;
}

.nav-link:hover {
  color: #10b981;
}

.nav-link:hover::after {
  width: 100%;
}

@media (max-width: 768px) {
  .header {
    padding: 1rem 0;
  }
  
  .nav-link {
    display: block;
    padding: 0.5rem 0;
  }
}
```

**header.component.html:**
```html
<header class="header" [class.scrolled]="isScrolled">
  <nav class="flex items-center justify-between px-8 py-4">
    <div class="logo">YR</div>
    <div class="flex gap-8">
      <a href="#" class="nav-link">Home</a>
      <a href="#" class="nav-link">About</a>
      <a href="#" class="nav-link">Projects</a>
      <a href="#" class="nav-link">Contact</a>
    </div>
  </nav>
</header>
```

## 10. Quand ne PAS utiliser CSS personnalisé

- **Layout/Responsif**: Utilisez Tailwind
- **Couleurs**: Utilisez le config Tailwind
- **Animations simples**: Utilisez Tailwind animation utilities
- **Media queries simples**: Utilisez responsive prefixes Tailwind

**Résultat:** Ton portfolio reste **léger, rapide et maintainable!** 🚀

---

**Conclusion:** Votre approche Tailwind CSS est **optimale**. N'ajoutez du CSS personnalisé que si:
1. Tailwind ne peut pas faire ce que vous voulez
2. Vous avez une animation très complexe
3. Vous avez des performances concerns

Sinon, stick with Tailwind! 💚
