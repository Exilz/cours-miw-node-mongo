import express from 'express';
import routes from './routes/index';
import middlewares from './routes/middlewares';

export default () => {
    const app = express();

    // Initialisation des middlewares AVANT les routes
    middlewares(app);
    // Initialisation des routes
    routes(app);
    // Démarrage du serveur
    app.listen(8080, () => {
        console.log('Serveur démarré !');
    });
};
