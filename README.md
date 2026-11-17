# Pokédex — base de travail React

Projet pédagogique de Quentin Fuentes pour les exercices React autour du Pokédex.

Le code se trouve dans `pokedexfuentes/`. La version actuellement publiée contient le squelette React, TypeScript et Vite, avec la page de démarrage et son compteur. Elle ne contient pas encore une liste fonctionnelle de Pokémon.

## Démarrer

Installer Node.js et npm, puis lancer :

```bash
cd pokedexfuentes
npm ci
npm run dev
```

Ouvrir l’adresse indiquée par Vite.

## Vérifications

Depuis `pokedexfuentes/` :

```bash
npm run lint
npm run build
```

Pour consulter la compilation :

```bash
npm run preview
```

## Organisation

- `pokedexfuentes/src/App.tsx` : composant principal.
- `pokedexfuentes/src/main.tsx` : point d’entrée React.
- `pokedexfuentes/src/assets/` : ressources graphiques.
- `pokedexfuentes/package.json` : dépendances et commandes.

Le point de départ est le modèle React/TypeScript/Vite. Ce README décrit les fichiers présents dans le dépôt, sans présumer de l’avancement des autres copies locales.
