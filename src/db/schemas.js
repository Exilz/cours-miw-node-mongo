import { db } from './index';

// Chaque modèle doit être initialisé à partir d'un schéma.
// Pour ne pas recréer le modèle à chaque fois, on utilise une
// petite abstraction qui stocke les modèles déjà créés et les
// retourne si on y a déjà eu accès auparavant.
let initializedModels = {};

export function getModel (modelName) {
    if (initializedModels[modelName]) {
        return initializedModels[modelName];
    }

    const schema = schemas[modelName];
    if (!schema) {
        throw new Error(`Aucun schéma n'existe pour : ${modelName}`);
    }

    console.log(`Création du model pour ${modelName}...`);
    const model = db.model(schema.collection, schema.definition, schema.collection);
    initializedModels[modelName] = model;
    return model;
}

const schemas = {
    movies: {
        collection: 'movies',
        definition: {
            _id: String,
            title: String,
            subtitle: String,
            year: Number,
            genres: [String]
        }
    }
};
