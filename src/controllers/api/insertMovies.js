import { getModel } from '../../db/schemas';
import config from '../../config';
import fetch from 'node-fetch';

export default (req, res) => {
    try {
        fetch(`http://www.omdbapi.com/?apikey=${config.API_KEY}&t=${req.params.title}`)
        .then((movie) => movie.json())
        .then((movie) => {
            if (movie && movie.Response === 'True') {
                movie = parseMovie(movie);
                getModel('movies')
                .update({ _id: movie._id }, movie, { upsert: true })
                .exec()
                .then((result) => {
                    return res.json({
                        status: 'success',
                        result
                    });
                })
                .catch((err) => {
                    return res.json({
                        status: 'fail',
                        message: "Film trouvé mais échec lors de l'insertion."
                    })
                })
            } else {
                res.json({
                    status: 'fail',
                    message: 'Aucun film trouvé.'
                });
            }
        })
        .catch((err) => {
            throw new Error(err);
        })
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 'fail',
            message: 'La requête a échoué.'
        });
    }
}

function parseMovie (movie) {
    movie._id = movie.imdbID;
    return movie;
}
