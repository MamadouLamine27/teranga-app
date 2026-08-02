# Teranga App

> Le site de l'Association des Étudiants Sénégalais de la Sorbonne (AESS).
> Un outil utile au quotidien pour les étudiants — en particulier la diaspora
> sénégalaise et africaine — et la vitrine de l'association.

## À propos

<!-- Résumé du projet et ses deux objectifs : utile aux étudiants + vitrine de l'asso. -->
_À compléter._

## Fonctionnalités

<!-- Liste courte des grandes rubriques : guides (logement, démarches, aides, jobs),
     espace membre, parrainage Teranga, événements, carte membre. Détail dans docs/. -->
_À compléter._

## Stack technique

- **Framework :** Next.js (React)
- **Langage :** TypeScript
- **Styles :** _(à préciser, ex. Tailwind CSS)_
- **Contenu éditorial :** Markdown (dossier `src/content/`)
- **Adhésions / billetterie / paiements :** HelloAsso
- **Hébergement :** _(à préciser, ex. Vercel)_

## Prérequis

- Node.js _(version à préciser, ex. 20 LTS)_
- npm _(ou pnpm / yarn)_

## Installation

```bash
git clone https://github.com/MamadouLamine27/teranga-app.git
cd teranga-app
npm install
```

## Lancer le projet

```bash
npm run dev      # serveur de développement -> http://localhost:3000
npm run build    # build de production
npm start        # lance le build
```

## Structure du projet

```
public/          Fichiers statiques (images, icônes, guides PDF)
src/app/         Pages et routes (public / membre / api)
src/components/  Composants d'interface réutilisables
src/content/     Contenu des guides en Markdown
src/lib/         Utilitaires (données, appels API)
src/styles/      Styles globaux et thème
src/config/      Réglages centralisés (menus, liens)
src/types/       Types TypeScript partagés
docs/            Documentation interne du projet
```

## Contribuer

<!-- Comment proposer une modification : branches, commits, pull requests. -->
_À compléter._

## Contact

<!-- Association, pôle Digital & Innovation, canal de contact. -->
_À compléter._
