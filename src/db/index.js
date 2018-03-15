import mongoose from 'mongoose';
import config from '../config';

export let db;

export default () => {

    if (!config.MONGO_URL) {
        console.error("Le serveur mongoDB n'est pas défini dans config.js");
        process.exit(1);
    }

    return new Promise((resolve, reject) => {

        try {
            db = mongoose.connection;
    
            db.on('connecting', () => {
                console.log('Connexion à mongoDB...');
            });
    
            db.on('error', (error) => {
                console.error(error);
                mongoose.disconnect();
                // Echec de la connexion, rejet de la promesse
                return reject();
            });
    
            db.once('open', () => {
                console.log('Connecté à mongoDB !');
    
                // Résoudre la promesse retournée puisqu'on est bien connecté
                return resolve();
            });
    
            mongoose.connect(config.MONGO_URL, { autoReconnect: true })
        } catch (err) {
            return reject(err);
        }
    });
};
