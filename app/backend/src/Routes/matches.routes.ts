import { Router } from 'express';
import MatchController from '../controllers/Match.Controller';

const controller = new MatchController();
const MatchRouter = Router();

MatchRouter.get('/', controller.getAllMatches);

export default MatchRouter;
