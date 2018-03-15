import frontControllers from '../controllers';
import apiControllers from '../controllers/api';
import auth from './middlewares/auth';

export default (app) => {
    // Front
    app.get('/', frontControllers.home);
    app.get('/movies/:id?', frontControllers.movies);

    // API
    app.get('/api/v1/movies/:id?', auth, apiControllers.movies);

    app.use((req, res) => {
        res.status(404).send('Page 404 custom');
    });
};
