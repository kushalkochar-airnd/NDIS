import { Router, Request, Response, NextFunction } from 'express';
import { ClientFacadeService } from '../services/clientFacade.service';
import { RosterFacadeService } from '../services/rosterFacade.service';

const router = Router();
const clientFacade = new ClientFacadeService();
const rosterFacade = new RosterFacadeService();


router.use('/clients', (req: Request, res: Response, next: NextFunction) => {
  // ...client routes logic...
  next();
});


router.use('/rosters', (req: Request, res: Response, next: NextFunction) => {
  // ...roster routes logic...
  next();
});

export default router;
