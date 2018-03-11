import Home from '../views/Home';
import controllers from '../controllers/index';

export default (app) => {

    // Racine du site
    app.get('/', controllers.home);

    // Page movies
    app.get('/movies/:id', controllers.movies);

    // Gestion des 404 (tous les codes d'erreur peuvent être gérés indépendament)
    app.use((req, res) => {
        res.status(404).send('Page 404 custom');
    });
};
