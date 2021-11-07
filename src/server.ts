import express, {Request,Response} from 'express';
import routes from './routes';
import path from 'path';

const server = express();

server.use('/static',express.static(path.join(__dirname, '../public')));
server.use(routes);
server.use((req:Request, res:Response)=>{
  res.status(404).send('path: ');
});
server.listen(80)