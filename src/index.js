import express from 'express';
import routes from './routes';
import middlewares from './routes/middlewares';
import config from './config';
import initDB from './db';

export default () => {
    
    const app = express();

    initDB()
    .then(() => {
        // Si la connexion à la BDD a réussi
        // Initialisation du middleware AVANT les routes
        middlewares(app);
        // Initialisation des routes
        routes(app);
    
        app.listen(config.PORT, () => {
            console.log('Serveur démarré !');
        });
    })
    .catch((err) => {
        // Si la connexion à la BDD a échoué
    });
};
