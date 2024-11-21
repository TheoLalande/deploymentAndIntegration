# Formulaire d'inscription

Ce projet est un composant React pour un formulaire d'inscription comprenant une validation des champs, un message de succès et une gestion des erreurs. Il est accompagné de tests unitaires et utilise des utilitaires de validation.

## Table des matières

- [Caractéristiques](#caractéristiques)
- [Technologies utilisées](#technologies-utilisées)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Tests](#tests)
- [Structure des fichiers](#structure-des-fichiers)
- [Contributions](#contributions)
- [Licence](#licence)

## Caractéristiques

- **Validation en temps réel** des champs du formulaire (nom, prénom, email, date de naissance, adresse, code postal).
- Gestion des erreurs et affichage de messages d'erreur contextuels.
- Utilisation de la bibliothèque `sonner` pour afficher une notification de succès.
- Vérification de l'âge minimum (18 ans) lors de l'inscription.
- Gestion des champs avec des règles personnalisées (longueur maximale, format d'email, etc.).

## Technologies utilisées

- **React** pour le développement du composant.
- **date-fns** pour la manipulation des dates.
- **sonner** pour les notifications.
- **TypeScript** pour un typage statique robuste.
- **Jest** et **Testing Library** pour les tests unitaires.

## Installation

1. Clonez le repository :
   ```bash
   git clone <URL-DU-REPOSITORY>
   cd <NOM-DU-PROJET>
   ```
