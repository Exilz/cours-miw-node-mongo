import renderView from '../views/renderView';
import Home from '../views/Home';

export default (req, res) => {
    res.send(renderView({
        title: 'Accueil',
        View: Home
    }));
}
