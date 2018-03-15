import { getModel } from '../../db/schemas';

export default (req, res) => {
    const MoviesModel = getModel('movies');

    if (req.params.id) {
        MoviesModel
        .findOne({ _id: req.params.id })
        .exec()
        .then((movie) => {
            if (movie) {
                return res.json({
                    status: 'success',
                    data: movie
                });
            } else {
                return res.json({
                    status: 'fail',
                    message: `Le film ${req.params.id} est introuvable`
                });
            }
        })
        .catch((err) => {
            return res.status(500).send("C'est tout cassé :(");
        });
    } else {
        MoviesModel
        .find({ })
        .exec()
        .then((movies) => {
            if (movies.length) {
                res.json({
                    status: 'success',
                    data: movies
                });
            } else {
                return res.json({
                    status: 'fail',
                    message: 'Aucun film trouvé dans la BDD'
                });
            }
        })
        .catch((err) => {
            return res.status(500).send("C'est tout cassé :(");
        });
    }
}
