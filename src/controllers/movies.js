import renderView from '../views/renderView';
import Movie from '../views/Movie';
import { getModel } from '../db/schemas';

export default (req, res) => {
    const MoviesModel = getModel('movies');

    MoviesModel
    .findOne({ _id: req.params.id })
    .exec()
    .then((movie) => {
        console.log(movie);
        res.send(renderView({
            title: 'Movie',
            View: Movie,
            props: movie._doc
        }));
    })
    .catch((err) => {
        console.log(err);
        res.status(500).send('La page est cassée :(');
    });
}
