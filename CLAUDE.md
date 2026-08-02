# CLAUDE.md — Contexte projet pour l'assistant IA

Ce fichier donne à une session d'IA (ou à un nouveau contributeur) le contexte
pour reprendre le projet efficacement. À tenir à jour en même temps que le code.

## Vue d'ensemble

<!-- 2-3 phrases : ce qu'est Teranga App et pour qui. Voir README.md et docs/. -->
_À compléter._

## Stack technique

- Framework : Next.js (React) + TypeScript
- Styles : _(à préciser)_
- Contenu : Markdown dans `src/content/`
- Services externes : HelloAsso (adhésions, billetterie, paiements)
- Hébergement : _(à préciser)_

## Architecture

<!-- Rôle de chaque dossier. Garder synchronisé avec la structure réelle. -->

- `public/` — fichiers statiques servis tels quels
- `src/app/(public)/` — pages ouvertes à tous
- `src/app/(membre)/` — pages réservées aux adhérents
- `src/app/api/` — back-end léger (formulaires, webhooks HelloAsso)
- `src/components/` — composants réutilisables (`ui/`, `layout/`)
- `src/content/` — guides éditoriaux en Markdown
- `src/lib/` — utilitaires (données, appels externes)
- `src/styles/` — styles globaux et thème
- `src/config/` — réglages centralisés (menus, liens ressources)
- `src/types/` — types TypeScript partagés
- `docs/` — documentation interne

## Conventions de code

<!-- Règles à respecter pour rester cohérent. Compléter au fur et à mesure. -->

- Langue : interface et contenu en français
- Composants : _(ex. PascalCase)_
- Fichiers : _(à préciser)_
- Formatage : _(ex. Prettier + ESLint)_
- Commits : _(ex. Conventional Commits : feat, fix, docs…)_

## Commandes utiles

```bash
npm install      # installer les dépendances
npm run dev      # serveur de dev -> http://localhost:3000
npm run build    # build de production
npm start        # lancer le build
npm run lint     # vérifier le code
# npm test       # (tests : à mettre en place)
```

## Décisions & choix techniques

<!-- Journal des décisions : QUOI + POURQUOI. Ajouter les nouvelles en haut, datées. -->

- **[init] Framework : Next.js.** Bon compromis pour un site mêlant contenu
  (guides, vitrine) et parties dynamiques (espace membre, parrainage) ; très
  documenté ; hébergement gratuit possible ; adapté à une équipe qui évolue.
- **[init] Paiements/adhésions via HelloAsso.** Gratuit et conforme pour les
  associations : pas de système de paiement maison à coder.
- **[init] Contenu des guides en Markdown.** Un bénévole non-développeur peut
  corriger un texte sans toucher au code.
- **[init] Séparation `(public)` / `(membre)`.** Distingue clairement l'accès
  ouvert de l'espace réservé aux adhérents.

## Points d'attention

<!-- Contraintes à ne pas oublier. -->

- **RGPD :** consentement à l'inscription, minimisation des données, droit de
  consultation/suppression. Ne jamais stocker de documents sensibles (titre de
  séjour, données bancaires) -> renvoyer vers les services officiels.
- **Équipe bénévole :** privilégier la simplicité et la maintenabilité.

<!-- Décision ajoutée -->
- **[init] Archives d'événements incluses.** Le site conserve la mémoire des
  événements passés (galerie, comptes-rendus courts) en plus de l'agenda à venir.
  Objectif : entretenir la mémoire communautaire et valoriser l'asso. Contenu
  dans `src/content/evenements/archives/`, photos dans `public/images/evenements/`.

<!-- Journal de session -->
- **[Session 1] Projet Next.js initialisé** (TypeScript, Tailwind, ESLint, App Router,
  src/). Page d'accueil provisoire aux couleurs de l'asso. Prochaine étape : poser
  le layout commun (header/footer) et le plan des pages publiques.

<!-- Décision design -->
- **[Session 1] Usage du drapeau.** Le drapeau du Sénégal n'est PAS répété sur
  tout le site. L'identité passe par la couleur (vert Teranga principal, jaune/
  rouge en accent). Le drapeau est réservé à des endroits forts et ponctuels
  (accueil, page « L'asso », écran de connexion). Jamais dans le header/footer.
