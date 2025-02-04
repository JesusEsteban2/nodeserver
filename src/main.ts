import http from 'node:http';
import createDebug from 'debug';

const PORT = 3000;
const debug = createDebug('app:main');

const appRouter = (req: http.IncomingMessage, res: http.ServerResponse) => {
    const { method, url } = req;

    if (!url) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not found\n');
        return;
    }

    switch (method) {
        case 'GET':
            console.log('Request received', url);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html; charset=utf-8');
            debug(method, 'recibido ', url);
            res.end('<h1>Página de inicio</h1>\n');
            break;
        case 'POST':
        case 'PUT':
        case 'DELETE':
        default:
            res.statusCode = 405;
            res.setHeader('Content-Type', 'text/plain; charset=utf-8');
            res.end('Método no permitido\n');
            debug(method, 'recibido ', url);
    }
};

const server = http.createServer(appRouter);

server.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
    debug(`Server is listening on http://localhost:${PORT}`);
    console.dir(server.address());
});
