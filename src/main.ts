import http, { ServerResponse } from 'node:http';
import createDebug from 'debug';
import { app } from './app.js';
import { HtmlError } from './error.js';
import { createHtmlString } from './template.js';

const debug = createDebug('app:main');
debug('Iniciando servidor');

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

const errorManager = (error: Error | HtmlError, response: ServerResponse) => {
    if (!('status' in error)) {
        error = {
            ...error,
            statusCode: 500,
            status: 'Internal Server Error',
        };
    }

    const publicMessage = `Error: ${error.statusCode} ${error.status}`;
    debug(publicMessage, error.message);

    const html = createHtmlString(
        'Error | Node Server',
        'Error',
        publicMessage,
    );

    response.statusCode = error.statusCode;
    response.statusMessage = error.status;
    response.setHeader('Content-Type', 'text/html; charset=utf-8');
    response.end(html);
};

server.listen(PORT);
debug(`Server is listening on http://localhost:${PORT}`);
server.on('error', errorManager);
