import express from 'express';
import type { Request, Response, NextFunction } from 'express';
import createDebug from 'debug';
import { resolve } from 'node:path';
import fs from 'node:fs/promises';
export const app = express();

const debug = createDebug('app:app');
const publicPath = resolve(resolve(), 'public');

app.disable('x-powered-by');

app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
    debug('Method: ', req.method, 'URL: ', req.url);
    next();
});

app.use(express.static(publicPath));

app.use(async (req: Request, res: Response, next: NextFunction) => {
    if (req.url === '/favicon.ico') {
        const filePath = resolve(publicPath, 'favicon.ico');
        const buffer = await fs.readFile(filePath);
        res.setHeader('Content-Type', 'image/svg+xml');
        res.send(buffer);
    } else {
        next();
    }
});

const getController = (req: Request, res: Response) => {
    res.send('Hola Mundo!');
};

const postController = (req: Request, res: Response) => {
    const data = req.body;
    const id = crypto.randomUUID();
    data.id = id;
    const result = {
        message: 'Datos recibidos',
        data: data,
    };
    res.send(result);
};

app.get('/', getController);
app.post('/', postController);
app.put('/');
app.delete('/');

app.use('*', (req, res) => {
    res.status(404).send('Error 404 Not found');
});
