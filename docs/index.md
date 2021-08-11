# Intégration 3 - React

Bonjour à vous et bienvenue dans le cours d'intégration 3. Comme dit précédemment, mon objectif dans le cadre de ce cours est de vous montrer le plus réalistement possible ce qui vous attend en tant que développeur sur le marché de l'emploi.

Pour bien remettre les pendules à l'heure par rapport à ce que je j'avais dit dans le cours. Aucun language/framework/technique de programmation n'est mauvais. Il existe des entreprises qui doivent effectuer du support sur des languages plus anciens et des frameworks qui ne sont plus supportés, certes, mais je n'irais pas jusqu'à dire qu'ils sont mauvais.

J'ai cependant opté pour une approche qui va vous permettre de partir un projet et de couvrir toutes les couches importantes d'une application avec des technologies et des frameworks au goût du jour. Ceux d'entre vous qui iront dans des entreprises qui prônent l'excellence technique et de `surfer` sur la vague des nouveaux frameworks seront donc servis.

Commençons donc avec la partie front-end de notre projet.

## React

React est une librairie JavaScript pour faire du front-end/des interfaces utilisateurs. Pour ceux qui n'ont jamais utilisé des librairies de ce genre, voici quelques exemples de ce que ça permet de faire.

- Création d'interfaces utilisateurs intéractives.
- Gestion des états et mise à jour automatique lors des changements de données
- Une syntaxe plus simple et moins lourde pour faire des interfaces
- À base de composants réutilisables et simples pour faire des interfaces complexes

Ce qui est cool avec cette librairie en comparaison avec d'autres (Angular, Vue, etc), c'est qu'il est le plus largement poussé par la communauté Open Source. Pour ceux à qui ça ne dit rien, ça veut simplement dire qu'il y a d'autres développeurs comme vous et moi qui travaillent sur React dans le but de l'améliorer pour qu'il devienne au sommet de ses capacités. Et sans oublier le fait que c'est à la base développé par Facebook.

Et plus spécifiquement pour React, il est possible de l'utiliser partout. Même pour faire du mobile ! (Voir [React Native]("https://reactnative.dev/))

### Cours 1 - Création d'un projet de base

Il existe plusieurs façons d'apprendre et de faire du React. Dans le cadre de notre cours, je veux opter pour la méthode qui vous mettera dans le bain directement du développement en React. Nous allons donc créer un projet `from scratch` et itérerons (pas certain que ce soit un mot mais on se comprend) dessus au courant de la session.

Nous allons créer un site statique bien basique pour commencer. Nous allons donc utiliser un outil qui nous permet de _générer un site statique bien basique_. Cet outil, c'est [Create React App]("https://fr.reactjs.org/docs/create-a-new-react-app.html").

**PRÉREQUIS**

Pour utiliser les commandes de _create-react-app_, il faut avoir intallé une version de [Node]("https://nodejs.org/en/") supérieure à **8.10** et une version de [NPM]("https://www.npmjs.com/") supérieure à 5.6.

Une fois que ce sera fait, vous serez en mesure d'effectuer les commandes suivantes
pour créer votre projet:

```bash
npx create-react-app mon-app
cd mon-app
npm start
```

Ce qui sera généré comme template consistera uniquement le front-end (l'interface utilisateur). Tout ce qui touchera la logique côté serveur (backend) et les bases de données ne seront pas incluses dans ce qui sera généré par la template. Ça sera à nous de nous patenter un projet pour que tout soit connecté. :smiley:

Vous pourrez observer que les _alias_ suivants ont été ajoutés au fichier `package.json` lors de la génération de votre projet.

```
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
},
```

Ceux-ci seront vos utilitaires en ligne de commande pour votre projet. Il est possible d'appeler ces alias en utilisant votre gestionnaire de paquets préféré (npm ou yarn) et d'ajouter la commande par la suite. Par exemple si vous voulez exécuter votre projet, il est possible de le faire avec la commande suivante:

```bash
npm run start
```

ou la commande suivante

```bash
yarn start
```

Et voilà ! Votre projet devrait rouler maintenant.

### Cours 2 - En construction

- Quelques idées d'où on pourrait aller:
- Création d'un premier component react
- State d'un component
- Props d'un component
- Relation parent/enfant en React
- Navigation
- Gestion d'appels à des API
- Gestion du style en React
