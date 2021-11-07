import { Router, Request, Response } from 'express';

const router = Router();
let phone: string = '999647440';

router.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

router.get('/Contato', (req: Request, res: Response) => {
  res.send('Entrar em contato no Fone: '+ phone);
});

router.get('/sobre', (req: Request, res: Response) => {
  res.send('Empresa com foco na acesoria de novas empresas!');
});

export default router;