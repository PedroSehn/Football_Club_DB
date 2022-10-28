import { Router } from 'express';
import TeamController from '../controllers/TeamsController';

const TeamsRouter = Router();
const controller = new TeamController();

TeamsRouter.get('/', controller.getAll);
TeamsRouter.get('/:id', controller.getById);

export default TeamsRouter;
