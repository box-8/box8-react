// Configuration de l'application
const config = {
    // URL de base de l'API. Par défaut en local, peut être surchargée par une variable d'environnement
    API_BASE_URL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000',
    // URL de base pour les WebSockets
    WS_BASE_URL: process.env.REACT_APP_WS_BASE_URL || 'ws://localhost:8000',
};

export default config;
