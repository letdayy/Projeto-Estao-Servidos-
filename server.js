import jsonServer from 'json-server';
import { json } from 'stream/consumers';

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.port || 3200;

server.use(middlewares);
server.use(router);

server.listen(port);