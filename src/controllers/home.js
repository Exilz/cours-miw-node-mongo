import Home from '../views/Home';
import renderView from '../views/renderView';

// controllers/home.js
export default (req, res) => {
    res.send(renderView({
        title: 'Accueil',
        Component: Home
    }));
};
