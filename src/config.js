// Configuration de l'application
const config = {
    // URL de base de l'API. Par défaut en local, peut être surchargée par une variable d'environnement
    API_BASE_URL: process.env.REACT_APP_API_BASE_URL || 'https://box8-fastapi-082e2947e8c0.herokuapp.com',
    // URL de base pour les WebSockets
    WS_BASE_URL: process.env.REACT_APP_WS_BASE_URL || 'wss://box8-fastapi-082e2947e8c0.herokuapp.com',
};

export default config;
