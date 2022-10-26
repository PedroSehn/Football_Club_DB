import { Router } from 'express';
import UserController from '../controllers/UserController';
import LoginController from '../controllers/LoginController';

const LoginRouter = Router();

const userController = new UserController();
const loginController = new LoginController();

LoginRouter.get('/', userController.getUserByEmail);
LoginRouter.post('/', loginController.Login);

export default LoginRouter;
