import express from 'express';
import routes from './routes/index';
import middlewares from './routes/middlewares';
import initDB from './db/index';

export default () => {
    const app = express();

    initDB()
    .then(() => {
        // Initialisation des middlewares AVANT les routes
        middlewares(app);
        // Initialisation des routes
        routes(app);
        // Démarrage du serveur
        app.listen(8080, () => {
            console.log('Serveur démarré !');
        });
    })
    .catch((err) => {
        console.error(err);
        process.exit(1);
    })
};
