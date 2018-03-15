import frontControllers from '../controllers';
import apiControllers from '../controllers/api';

export default (app) => {
    // Front
    app.get('/', frontControllers.home);
    app.get('/movies/:id?', frontControllers.movies);

    // API
    app.get('/api/v1/movies/:id?', apiControllers.movies);

    app.use((req, res) => {
        res.status(404).send('Page 404 custom');
    });
};
