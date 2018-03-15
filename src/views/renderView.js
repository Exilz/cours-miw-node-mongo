import React from 'react';
import { renderToString } from 'react-dom/server';

// Fonction très simple qui permet de rendre le squelette HTML d'une page
// en y injectant un rendu avec react

export default ({ Component, title, props }) => {
    return `
        <!DOCTYPE html>
        <html>
            <head>
                <title>${title}</title>
            </head>
            <body>
                <div id="root">
                    ${renderToString(<Component {...props} />)}
                </div>
            </body>
        </html>
    `;
};
