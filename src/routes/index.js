import renderView from '../views/renderView';
import Home from '../views/Home';
import Article from '../views/Article';

export default (app) => {

    // Racine du site
    app.get('/', (req, res) => {
        res.send(renderView({
            title: 'Accueil',
            View: Home
        }));
    });

    // Page articles
    app.get('/articles/:id?', (req, res) => {
        res.send(renderView({
            title: 'Article',
            View: Article,
            props: { id: req.params.id }
        }));
    });

    // Gestion des 404 (tous les codes d'erreur peuvent être gérés indépendament)
    app.use((req, res) => {
        res.status(404).send('Page 404 custom');
    });
};
