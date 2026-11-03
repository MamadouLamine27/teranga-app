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

<!-- Journal de session -->
- **[Session 1 — 02/08] Base technique en place.** Projet Next.js initialisé
  (TypeScript, Tailwind, ESLint, App Router). Structure de dossiers aplatie à la
  racine, lockfiles parasites nettoyés. Thème Teranga (couleurs du drapeau en
  variables CSS) + layout commun header/footer branché sur toutes les pages.
  Drapeau du Sénégal en emoji sur l'accueil, non répété ailleurs (identité par la
  couleur). Prochaine session : page « L'asso ».

<!-- Journal de session -->
- **[Session 2 suite] Espace bureau sécurisé + remise de carte.**
  Auth admin : /admin/login (mot de passe partagé ADMIN_PASSWORD), cookie signé
  HMAC Web Crypto (edge-compatible), middleware qui protège /admin/cartes et
  /admin/membres, /api/admin/logout + barre admin avec déconnexion. Œil
  afficher/masquer sur le mot de passe. Téléchargement de la carte en PNG
  (html-to-image). Secrets dans .env.local : SUPABASE_*, ADMIN_PASSWORD,
  ADMIN_SECRET.
  À FAIRE : envoi carte par email ; déployer en ligne (Vercel) ; brancher
  HelloAsso ; aligner "de la Sorbonne" partout.

<!-- Point d'étape & feuille de route -->
- **[Session 2 — bilan] Fait :** design Teranga ; pages Accueil + L'association
  (bandeau vert, mission avec logo, valeurs, bureau exécutif 2026 + 10 pôles en
  cartes photo à remplir) ; carte membre complète (saisie contrôlée, Supabase,
  numéro unique, /verifier/[numero], QR, téléchargement PNG, email de bienvenue) ;
  espace bureau sécurisé (login/logout cookie signé Web Crypto, middleware, liste
  membres + recherche) ; squelettes Événements / Ressources / Parrainage /
  Partenaires ; boutons accueil corrigés.
- **DÉCISION : on abandonne HelloAsso.** Adhésion = paiement hors-ligne auprès du
  bureau, qui crée et envoie la carte (déjà en place). Pas de paiement en ligne.
- **Feuille de route (pages, dans l'ordre) :** 1) Événements (À venir/Passés/
  Galerie) · 2) Ressources/Guides (checklist 90j, logement, aides, jobs) ·
  3) Parrainage Teranga (formulaire) · 4) Finaliser L'association (photos) ·
  5) Partenaires. Puis : mise en ligne (Vercel), refonte page d'accueil + animation.
- **Idées notées (plus tard) :** générateur de CV multi-styles (neutre, PAS aux
  couleurs AESS, couleur au choix) + lettre de motivation ; chatbot RAG sur nos
  guides ; Grenier Teranga (dons de fin d'année) ; carte des bons plans diaspora ;
  attestation d'adhésion/engagement téléchargeable ; annuaire membres + alumni ;
  calendrier culturel ; témoignages d'anciens ; rappels délais titre de séjour.
