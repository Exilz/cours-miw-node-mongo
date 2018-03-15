import renderView from '../views/renderView';
import Movie from '../views/Movie';
import { getModel } from '../db/schemas';

export default (req, res) => {

    if (req.params.id) {
        // /movies/:xxx
        const MoviesModel = getModel('movies');

        MoviesModel
        .findOne({ _id: req.params.id })
        .exec()
        .then((movie) => {
            console.log('movie', movie);
            if (movie) {
                return res.send(renderView({
                    title: movie.title,
                    Component: Movie,
                    props: movie._doc
                }));
            } else {
                return res.status(404).send('Film non trouvé :(');
            }
        })
        .catch((err) => {
            return res.status(500).send("C'est tout cassé :(");
        });

    } else {
        res.send(renderView({
            title: 'Film',
            Component: Movie
        }));
    }
};
