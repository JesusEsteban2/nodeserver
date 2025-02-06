## Install debug

npm i debug
npm i -D @types/debug

En las variables de entorno poner DEBUG=app\* para que sepa que estamos en modo depuración.

## Install express

npm install express
npm i -D @types/express

// uso de router
import { usersRouter } from './routers/users.routers.js';
...
app.use('/api/users', usersRouter);

// fichero ./routers/users.routers.ts
import { Router } from 'express';
import { UserController } from '../controllers/user.controller.js';

export const usersRouter = Router();
const userController = new UserController();

usersRouter.get('/', userController.readAll);
usersRouter.post('/', userController.create);

usersRouter.get('/:id', userController.read);
usersRouter.patch('/:id', userController.update);
usersRouter.delete('/:id', userController.delete);

## CORS

npm i cors
npm i -D @types/cors

## Errores

Middleware de 4 parámetros.

app.use ((err,req,res,next)=> {})
...
next (Error)
