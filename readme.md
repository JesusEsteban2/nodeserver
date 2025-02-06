## Install debug

npm i debug
npm i -D @types/debug

En las variables de entorno poner DEBUG=app\* para que sepa que estamos en modo depuración.

## Install express

npm install express
npm i -D @types/express

## CORS

npm i cors
npm i -D @types/cors

## Errores

Middleware de 4 parámetros.

app.use ((err,req,res,next)=> {})
...
next (Error)
