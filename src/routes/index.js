export default (app) => {

    // Racine du site
    app.get('/', (req, res) => {
        res.send('Cours MIW Node.js 2017-2018')
    });

    // Page articles
    app.get('/articles', (req, res) => {
        res.send("Page article sans paramètres d'URL");
    });

    // Page article avec paramètre d'URL
    app.get('/articles/:id', (req, res) => {
        res.send(`Page article avec paramètre id : ${req.params.id}`);
    });

    // Gestion des 404 (tous les codes d'erreur peuvent être gérés indépendament)
    app.use((req, res) => {
        res.status(404).send('Page 404 custom');
    });
};
