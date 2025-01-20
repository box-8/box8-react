import React from 'react';
import { Modal, Button, Accordion } from 'react-bootstrap';
import aboutImage from '../assets/about.webp';

const AboutModal = ({ show, handleClose }) => {
  return (
    <Modal 
      show={show} 
      onHide={handleClose} 
      fullscreen={true}
      className="about-modal"
    >
      <Modal.Header closeButton className="border-0">
        <Modal.Title>À propos de Box8</Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-0" style={{ overflowY: 'auto' }}>
        <div className="about-content" 
          style={{ 
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 20px 20px',
          }}
        >
          <div className="text-center mb-5">
            <img 
              src={aboutImage} 
              alt="Box8 Interface" 
              style={{ 
                width: '100%',
                height: 'auto',
                borderRadius: '0 0 16px 16px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }} 
            />
          </div>
          
          <div className="content-wrapper" style={{ 
            maxWidth: '900px', 
            margin: '0 auto',
            fontSize: '1rem',
            lineHeight: '1.6'
          }}>
            <div className="text-center mb-5">
              <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Box8</h1>
              <p className="lead" style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#666' }}>
                Une plateforme puissante de conception et d'exécution de workflows basée sur des agents intelligents
              </p>
              <p><em>Dernière mise à jour : Janvier 2025</em></p>
            </div>

            {/* Section Introduction */}
            <section className="mb-5">
              <p style={{ fontSize: '1.1rem', color: '#444', marginBottom: '2rem' }}>
                Box8 vous permet de créer, gérer et exécuter des diagrammes de flux de travail interactifs avec une interface graphique moderne.
                Notre plateforme combine la puissance des agents autonomes avec une expérience utilisateur intuitive pour automatiser vos processus complexes.
              </p>

              <div style={{ 
                background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                padding: '2rem',
                borderRadius: '16px',
                marginBottom: '2rem'
              }}>
                <h3 style={{ color: '#1a73e8', marginBottom: '1rem' }}>Objectif et Cas d'Usage</h3>
                <p style={{ marginBottom: '1.5rem' }}>
                  Box8 est spécialement conçu pour l'analyse intelligente de documents et l'automatisation des processus métier. 
                  La plateforme permet de créer des workflows où des agents spécialisés collaborent pour analyser, comparer et synthétiser l'information de manière autonome.
                </p>

                <h4 style={{ color: '#1a73e8', marginBottom: '1rem' }}>Exemples de Workflows</h4>
                <div style={{ display: 'grid', gap: '1.5rem' }}>
                  {/* Analyse de Devis */}
                  <div>
                    <h5 style={{ color: '#666' }}>📊 Analyse Comparative de Devis</h5>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      <li>➤ Extraction automatique des prix et prestations</li>
                      <li>➤ Comparaison détaillée des offres</li>
                      <li>➤ Analyse des conditions commerciales</li>
                      <li>➤ Recommandations argumentées</li>
                    </ul>
                  </div>

                  {/* Analyse de Candidatures */}
                  <div>
                    <h5 style={{ color: '#666' }}>👥 Analyse de Candidatures</h5>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      <li>➤ Extraction des compétences et expériences</li>
                      <li>➤ Évaluation de l'adéquation au poste</li>
                      <li>➤ Analyse du parcours professionnel</li>
                      <li>➤ Synthèse des points forts</li>
                    </ul>
                  </div>

                  {/* Planification Gantt */}
                  <div>
                    <h5 style={{ color: '#666' }}>📅 Génération de Planning Gantt</h5>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      <li>➤ Identification des tâches et jalons</li>
                      <li>➤ Calcul des durées et dépendances</li>
                      <li>➤ Optimisation des ressources</li>
                      <li>➤ Export au format projet</li>
                    </ul>
                  </div>

                  {/* Analyse d'Insights */}
                  <div>
                    <h5 style={{ color: '#666' }}>🔍 Extraction d'Insights</h5>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      <li>➤ Analyse des tendances et patterns</li>
                      <li>➤ Identification des points clés</li>
                      <li>➤ Génération de rapports synthétiques</li>
                      <li>➤ Visualisation des données</li>
                    </ul>
                  </div>

                  {/* Automatisation Documentaire */}
                  <div>
                    <h5 style={{ color: '#666' }}>📝 Traitement Documentaire</h5>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      <li>➤ Classification automatique</li>
                      <li>➤ Extraction d'informations clés</li>
                      <li>➤ Validation des données</li>
                      <li>➤ Génération de synthèses</li>
                    </ul>
                  </div>
                </div>

                <div style={{ 
                  marginTop: '2rem',
                  padding: '1rem',
                  background: 'rgba(26,115,232,0.1)',
                  borderRadius: '8px'
                }}>
                  <p style={{ margin: 0, fontStyle: 'italic' }}>
                    <strong>Note :</strong> Ces workflows sont basés sur des cas d'usage réels et peuvent être adaptés à vos besoins spécifiques.
                    Les agents collaborent de manière intelligente pour traiter les documents, extraire les informations pertinentes et produire des analyses détaillées.
                  </p>
                </div>
              </div>
            </section>

            {/* Sections Escamotables */}
            <Accordion className="mb-5">
              {/* Section Interface Utilisateur */}
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <span style={{ color: '#1a73e8', fontWeight: 'bold' }}>Interface Utilisateur</span>
                </Accordion.Header>
                <Accordion.Body>
                  {/* Guide d'utilisation */}
                  <div className="usage-guide mb-4" style={{ 
                    background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                    padding: '1.5rem',
                    borderRadius: '12px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                  }}>
                    <h3 style={{ color: '#1a73e8', marginBottom: '1rem' }}>Guide d'Utilisation</h3>
                    <p>Pour une utilisation optimale de l'interface :</p>
                    <ol style={{ paddingLeft: '1.2rem' }}>
                      <li><strong>Authentification :</strong> Connectez-vous via email ou OAuth2. En cas d'oubli, utilisez la récupération de mot de passe.</li>
                      <li><strong>Profil :</strong> Personnalisez vos préférences LLM et gérez vos fichiers dans la section profil.</li>
                      <li><strong>Actions Rapides :</strong> Utilisez la barre flottante pour accéder aux fonctions principales.</li>
                      <li><strong>Navigation :</strong> Le menu principal permet d'accéder à toutes les fonctionnalités.</li>
                      <li><strong>Aide :</strong> Des info-bulles sont disponibles pour guider vos actions.</li>
                    </ol>
                  </div>

                  <div className="component-grid" style={{ display: 'grid', gap: '2rem' }}>
                    {/* LoginModal */}
                    <div className="component-item">
                      <h3>Authentification</h3>
                      <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li>✦ Connexion sécurisée avec email/mot de passe</li>
                        <li>✦ Support de l'authentification OAuth2</li>
                        <li>✦ Gestion des sessions utilisateur</li>
                        <li>✦ Récupération de mot de passe</li>
                      </ul>
                    </div>
                    {/* UserProfileModal */}
                    <div className="component-item">
                      <h3>Profil Utilisateur</h3>
                      <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li>✦ Gestion des informations personnelles</li>
                        <li>✦ Préférences de modèle LLM</li>
                        <li>✦ Historique des activités</li>
                        <li>✦ Gestion des fichiers personnels</li>
                      </ul>
                    </div>
                    {/* FloatingButtons */}
                    <div className="component-item">
                      <h3>Actions Rapides</h3>
                      <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li>✦ Création d'agents et de tâches</li>
                        <li>✦ Sauvegarde et chargement de diagrammes</li>
                        <li>✦ Génération de CrewAI</li>
                        <li>✦ Affichage des réponses</li>
                      </ul>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>

              {/* Section Gestion des Diagrammes */}
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <span style={{ color: '#1a73e8', fontWeight: 'bold' }}>Gestion des Diagrammes</span>
                </Accordion.Header>
                <Accordion.Body>
                  {/* Guide d'utilisation */}
                  <div className="usage-guide mb-4" style={{ 
                    background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                    padding: '1.5rem',
                    borderRadius: '12px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                  }}>
                    <h3 style={{ color: '#1a73e8', marginBottom: '1rem' }}>Guide d'Utilisation</h3>
                    <p>Pour gérer efficacement vos diagrammes :</p>
                    <ol style={{ paddingLeft: '1.2rem' }}>
                      <li><strong>Création :</strong> Utilisez le bouton "Nouveau Diagramme" pour commencer un projet vide ou générer un modèle.</li>
                      <li><strong>Modification :</strong> Double-cliquez sur un diagramme existant pour éditer ses propriétés.</li>
                      <li><strong>Import/Export :</strong> Utilisez les options dédiées pour partager ou sauvegarder vos diagrammes.</li>
                      <li><strong>Organisation :</strong> Nommez vos diagrammes de manière descriptive et utilisez les descriptions pour plus de contexte.</li>
                      <li><strong>Sécurité :</strong> Confirmez toujours les actions de suppression et gardez des sauvegardes de vos fichiers importants.</li>
                    </ol>
                  </div>

                  <div className="component-grid" style={{ display: 'grid', gap: '2rem' }}>
                    {/* DiagramModalNew */}
                    <div className="component-item">
                      <h3>Création de Diagrammes</h3>
                      <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li>✦ Création de diagrammes vides</li>
                        <li>✦ Attribution de noms et descriptions</li>
                        <li>✦ Validation des données saisies</li>
                        <li>✦ Génération automatique de modèles</li>
                        <li>✦ Gestion des erreurs de création</li>
                      </ul>
                    </div>

                    {/* DiagramModal */}
                    <div className="component-item">
                      <h3>Édition et Maintenance</h3>
                      <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li>✦ Modification des propriétés existantes</li>
                        <li>✦ Rafraîchissement des données</li>
                        <li>✦ Amélioration par IA des diagrammes</li>
                        <li>✦ Suppression sécurisée</li>
                        <li>✦ Historique des modifications</li>
                      </ul>
                    </div>

                    {/* JsonFilesModal - Import/Export */}
                    <div className="component-item">
                      <h3>Import et Export</h3>
                      <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li>✦ Import de fichiers JSON externes</li>
                        <li>✦ Prévisualisation avant import</li>
                        <li>✦ Validation du format des fichiers</li>
                        <li>✦ Export de diagrammes existants</li>
                        <li>✦ Gestion des conflits de noms</li>
                      </ul>
                    </div>

                    {/* JsonFilesModal - Gestion */}
                    <div className="component-item">
                      <h3>Gestion des Fichiers</h3>
                      <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li>✦ Liste des diagrammes sauvegardés</li>
                        <li>✦ Sélection et chargement rapide</li>
                        <li>✦ Suppression avec confirmation</li>
                        <li>✦ Tri et filtrage des fichiers</li>
                        <li>✦ Gestion des versions</li>
                      </ul>
                    </div>

                    {/* Fonctionnalités Avancées */}
                    <div className="component-item">
                      <h3>Fonctionnalités Avancées</h3>
                      <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li>✦ Sauvegarde automatique</li>
                        <li>✦ Restauration après erreur</li>
                        <li>✦ Compatibilité multi-formats</li>
                        <li>✦ Synchronisation en temps réel</li>
                        <li>✦ Gestion des permissions</li>
                      </ul>
                    </div>

                    {/* Interactions et États */}
                    <div className="component-item">
                      <h3>Interactions et États</h3>
                      <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li>✦ Indicateurs de chargement</li>
                        <li>✦ Messages de confirmation</li>
                        <li>✦ Gestion des états transitoires</li>
                        <li>✦ Retours utilisateur intuitifs</li>
                        <li>✦ Prévention des actions conflictuelles</li>
                      </ul>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>

              {/* Section Agents et Tâches */}
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <span style={{ color: '#1a73e8', fontWeight: 'bold' }}>Agents et Tâches</span>
                </Accordion.Header>
                <Accordion.Body>
                  {/* Guide d'utilisation */}
                  <div className="usage-guide mb-4" style={{ 
                    background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                    padding: '1.5rem',
                    borderRadius: '12px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                  }}>
                    <h3 style={{ color: '#1a73e8', marginBottom: '1rem' }}>Guide d'Utilisation</h3>
                    <p>Pour configurer efficacement vos agents et tâches :</p>
                    <ol style={{ paddingLeft: '1.2rem' }}>
                      <li><strong>Configuration Agent :</strong> Définissez précisément le rôle et les capacités de chaque agent.</li>
                      <li><strong>Outils :</strong> Sélectionnez les outils appropriés selon les besoins de l'agent.</li>
                      <li><strong>Connexions :</strong> Établissez des liens logiques entre les agents via les tâches.</li>
                      <li><strong>Paramètres :</strong> Ajustez les paramètres d'exécution pour optimiser les performances.</li>
                      <li><strong>Tests :</strong> Validez le comportement des agents avant le déploiement final.</li>
                    </ol>
                  </div>

                  <div className="component-grid" style={{ display: 'grid', gap: '2rem' }}>
                    {/* AgentModal */}
                    <div className="component-item">
                      <h3>Configuration des Agents</h3>
                      <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li>✦ Définition des rôles et capacités</li>
                        <li>✦ Sélection des outils disponibles</li>
                        <li>✦ Personnalisation des comportements</li>
                        <li>✦ Gestion des dépendances</li>
                      </ul>
                    </div>
                    {/* TaskModal */}
                    <div className="component-item">
                      <h3>Gestion des Tâches</h3>
                      <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li>✦ Création de connexions entre agents</li>
                        <li>✦ Définition des objectifs</li>
                        <li>✦ Configuration des flux de données</li>
                        <li>✦ Paramètres d'exécution</li>
                      </ul>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>

              {/* Section Visualisation */}
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <span style={{ color: '#1a73e8', fontWeight: 'bold' }}>Visualisation et Résultats</span>
                </Accordion.Header>
                <Accordion.Body>
                  {/* Guide d'utilisation */}
                  <div className="usage-guide mb-4" style={{ 
                    background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                    padding: '1.5rem',
                    borderRadius: '12px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                  }}>
                    <h3 style={{ color: '#1a73e8', marginBottom: '1rem' }}>Guide d'Utilisation</h3>
                    <p>Pour optimiser la visualisation de vos workflows :</p>
                    <ol style={{ paddingLeft: '1.2rem' }}>
                      <li><strong>Connexions :</strong> Utilisez les différents types de connexions pour représenter les flux de données.</li>
                      <li><strong>Résultats :</strong> Consultez les sorties dans les nœuds dédiés avec support Markdown/HTML.</li>
                      <li><strong>Progression :</strong> Suivez l'avancement via les indicateurs d'état et animations.</li>
                      <li><strong>Export :</strong> Sauvegardez ou partagez les résultats dans différents formats.</li>
                      <li><strong>Erreurs :</strong> Consultez les messages d'erreur pour diagnostiquer les problèmes.</li>
                    </ol>
                  </div>

                  <div className="component-grid" style={{ display: 'grid', gap: '2rem' }}>
                    {/* CustomEdge */}
                    <div className="component-item">
                      <h3>Connexions Visuelles</h3>
                      <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li>✦ Lignes de connexion personnalisées</li>
                        <li>✦ Indicateurs de flux de données</li>
                        <li>✦ Styles adaptés au type de connexion</li>
                        <li>✦ Animations d'état</li>
                      </ul>
                    </div>
                    {/* OutputNode & ResponseModal */}
                    <div className="component-item">
                      <h3>Affichage des Résultats</h3>
                      <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li>✦ Nœuds de sortie formatés</li>
                        <li>✦ Support Markdown et HTML</li>
                        <li>✦ Visualisation des données structurées</li>
                        <li>✦ Export des résultats</li>
                      </ul>
                    </div>
                    {/* LoadingModal */}
                    <div className="component-item">
                      <h3>États et Progression</h3>
                      <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li>✦ Indicateurs de chargement</li>
                        <li>✦ Description des tâches en cours</li>
                        <li>✦ Notifications d'état</li>
                        <li>✦ Gestion des erreurs</li>
                      </ul>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            {/* Section Prérequis */}
            <section className="mb-5">
              <div style={{ 
                padding: '2rem',
                background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                borderRadius: '16px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
              }}>
                <h2 style={{ color: '#1a73e8', marginBottom: '1.5rem' }}>Prérequis Techniques</h2>
                <div style={{ 
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '1.5rem'
                }}>
                  <div>
                    <h4>Frontend</h4>
                    <p>Node.js 18+ et npm</p>
                  </div>
                  <div>
                    <h4>Backend</h4>
                    <p>Python 3.11+</p>
                  </div>
                  <div>
                    <h4>Cache</h4>
                    <p>Redis 7+</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="border-0">
        <Button variant="primary" size="lg" onClick={handleClose}>
          Fermer
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AboutModal;
