import React from 'react';
import { renderToString } from 'react-dom/server';

// Fonction très simple permettant de rendre la structure de base d'un fichier HTML
// et d'y injecter des composants rendus avec react depuis le serveur

export default ({ View, title, props }) => {
    return `<!DOCTYPE html>
    <html>
            <head>
                <title>${title}</title>
            </head>
        <body>
            <div id="root">${renderToString(<View {...props} />)}</div>
        </body>
    </html>
    `;
};
