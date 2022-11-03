import { Router } from 'express';
import LeaderboardController from '../controllers/Leaderboard.controller';

const LBController = new LeaderboardController();
const LBRouter = Router();

LBRouter.get('/home', LBController.leaderBoardHell);

export default LBRouter;
