import renderView from '../views/renderView';
import Movie from '../views/Movie';

export default (req, res) => {
    res.send(renderView({
        title: 'Movie',
        View: Movie,
        props: { id: req.params.id }
    }));
}
