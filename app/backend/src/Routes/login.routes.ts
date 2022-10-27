import { Router } from 'express';
import UserController from '../controllers/UserController';
import LoginController from '../controllers/LoginController';

import { validateCredentials, validateEmail } from '../middleweres/LoginAuth/credentials.val';

const LoginRouter = Router();

const userController = new UserController();
const loginController = new LoginController();

LoginRouter.get('/', userController.getUserByEmail);
LoginRouter.post('/', validateCredentials, validateEmail, loginController.Login);

export default LoginRouter;
