import mongoose from 'mongoose';
import config from '../config';

export let db;

export default () => {

    if (!config.MONGO_URL) {
        console.error("Le serveur MongoDB n'est pas défini dans config.js");
        process.exit(1);
    }

    return new Promise((resolve) => {
        db = mongoose.connection;

        db.on('connecting', () => {
            console.log('Connexion à MongoDB...');
        });

        db.on('error', function(error) {
            mongoose.disconnect();
        });

        db.once('open', () => {
            // On ne résoud la promesse lançant l'initialisation du serveur que
            // lorsqu'on est connecté au serveur mongo.
            console.log('Connecté à MongoDB !');
            return resolve();
        });

        mongoose.connect(config.MONGO_URL, { autoReconnect: true });
    });
}
