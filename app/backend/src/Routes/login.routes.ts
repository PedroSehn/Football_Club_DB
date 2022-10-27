import { Router } from 'express';
import UserController from '../controllers/UserController';
import LoginController from '../controllers/LoginController';

import validateEmail from '../middleweres/LoginAuth/email.val';

const LoginRouter = Router();

const userController = new UserController();
const loginController = new LoginController();

LoginRouter.get('/', userController.getUserByEmail);
LoginRouter.post('/', validateEmail, loginController.Login);

export default LoginRouter;
