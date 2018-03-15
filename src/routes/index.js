import controllers from '../controllers';

export default (app) => {
    app.get('/', controllers.home);

    app.get('/movies/:id?', controllers.movies);

    app.use((req, res) => {
        res.status(404).send('Page 404 custom');
    });
};
