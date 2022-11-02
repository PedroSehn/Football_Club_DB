import { Router } from 'express';
import MatchController from '../controllers/Match.Controller';
import { sameTeamVal, teamExists } from '../middleweres/MatchesAuth/matchValidator';
import validateToken from '../middleweres/LoginAuth/validateToken';

const controller = new MatchController();
const MatchRouter = Router();

MatchRouter.get('/', controller.getAllMatches);
MatchRouter.post('/', validateToken, teamExists, sameTeamVal, controller.createMatch);
MatchRouter.patch('/:id/finish', controller.finishMatch);

export default MatchRouter;
