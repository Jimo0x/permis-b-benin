# Permis B Bénin — Code de la route 🇧🇯

Application web progressive (PWA) pour apprendre et réviser le code de la route (permis B) au Bénin.

👉 **Utiliser l'application :** https://jimo0x.github.io/permis-b-benin/

## Fonctionnalités

- **Cours résumé complet**, organisé en chapitres (permis au Bénin, signalisation, priorités, vitesse, alcool/fatigue, équipements, comportement, premiers secours, infractions, environnement).
- **Générateur de QCM** avec plusieurs types de questions :
  - questions de cours classiques,
  - reconnaissance de panneaux à partir d'une image,
  - identification du bon panneau parmi plusieurs images,
  - mises en situation de conduite.
- **Examen blanc** de 20 questions avec le seuil de réussite officiel (14/20).
- **Entraînement par thème** et **révision ciblée des erreurs**.
- **Fiche panneaux** consultable par catégorie (danger, interdiction, obligation, priorité, indication).
- **100 % hors ligne** une fois ouverte une première fois (Service Worker) et **installable** sur l'écran d'accueil (PWA).

## Technique

Application 100 % statique (HTML / CSS / JavaScript, sans dépendance externe ni build), pensée pour fonctionner hors ligne via un Service Worker. Les panneaux routiers sont des illustrations SVG originales recréées pour l'application.

## Avertissement

Contenu pédagogique basé sur les règles générales du code de la route et sur les informations publiques disponibles sur le permis de conduire au Bénin (ANaTT). Il ne remplace pas les supports officiels de ton auto-école : vérifie toujours les éventuelles mises à jour réglementaires.
