import http from 'node:http';
import createDebug from 'debug';
import { app } from './app.js';

const debug = createDebug('app:main');
debug('Iniciando servidor');

const port = 3000;

const server = http.createServer(app);

server.listen(port);
debug(`Server is listening on http://localhost:${port}`);
