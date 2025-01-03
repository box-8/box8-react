# Box8 React - Interface de Conception de Workflows CrewAI

Box8 React est une interface utilisateur moderne pour la conception et la gestion de workflows CrewAI. Cette application permet de créer, modifier et exécuter visuellement des workflows d'agents AI collaboratifs.

## Fonctionnalités

- **Éditeur de Diagramme Visuel**
  - Création et modification de workflows par glisser-déposer
  - Positionnement automatique des éléments
  - Connexions interactives entre les agents

- **Gestion des Agents**
  - Création d'agents avec rôles spécifiques
  - Définition des objectifs et backstories
  - Association de fichiers aux agents

- **Gestion des Tâches**
  - Définition des relations entre agents
  - Spécification des sorties attendues
  - Description détaillée des tâches

- **Gestion des Diagrammes**
  - Sauvegarde des diagrammes
  - Chargement de diagrammes existants
  - Prévisualisation du contenu

- **Intégration CrewAI**
  - Exécution directe des workflows
  - Visualisation des résultats
  - Gestion des processus CrewAI

## Installation

1. Cloner le dépôt :
```bash
git clone [url-du-repo]
cd box8-react
```

2. Installer les dépendances :
```bash
npm install
```

3. Démarrer l'application en mode développement :
```bash
npm start
```

L'application sera accessible à l'adresse [http://localhost:3000](http://localhost:3000).

## Configuration

L'application nécessite un backend Django (box8_django) fonctionnel. Assurez-vous que :
- Le serveur Django est en cours d'exécution sur le port 8000
- Les paramètres CORS sont correctement configurés
- Les endpoints API sont accessibles

## Structure du Projet

```
box8-react/
├── src/
│   ├── components/         # Composants React
│   │   ├── AgentModal.js  # Modal de création/édition d'agent
│   │   ├── AgentNode.js   # Nœud d'agent dans le diagramme
│   │   ├── TaskModal.js   # Modal de création/édition de tâche
│   │   └── ...
│   ├── App.js             # Composant principal
│   └── index.js           # Point d'entrée
├── public/                # Fichiers statiques
└── package.json          # Dépendances et scripts
```

## Utilisation

1. **Créer un nouveau workflow**
   - Utiliser le bouton "Add Agent" pour ajouter des agents
   - Utiliser le bouton "Add Task" pour créer des connexions
   - Configurer les propriétés via les modals

2. **Sauvegarder un workflow**
   - Cliquer sur le bouton "Save Diagram"
   - Remplir le nom et la description
   - Confirmer la sauvegarde

3. **Charger un workflow existant**
   - Cliquer sur le bouton "Load Diagram"
   - Sélectionner un diagramme dans la liste
   - Visualiser et charger le diagramme

4. **Exécuter un workflow**
   - Configurer tous les agents et connexions
   - Cliquer sur le bouton "Create CrewAI Process"
   - Visualiser les résultats dans le modal de réponse

## Technologies Utilisées

- React
- React Flow
- Bootstrap
- Fetch API

## Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
1. Fork le projet
2. Créer une branche pour votre fonctionnalité
3. Commiter vos changements
4. Pousser vers la branche
5. Ouvrir une Pull Request

## Licence

Ce projet est sous licence [insérer type de licence].
