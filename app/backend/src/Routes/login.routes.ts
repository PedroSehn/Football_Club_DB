import { Router } from 'express';
import UserController from '../controllers/UserController';
import LoginController from '../controllers/LoginController';

import {
  validateCredentials,
  validateEmail,
  validatePassword } from '../middleweres/LoginAuth/credentials.val';

const LoginRouter = Router();

const userController = new UserController();
const loginController = new LoginController();

LoginRouter.get('/', userController.getUserByEmail);
LoginRouter.post('/', validateCredentials, validateEmail, validatePassword, loginController.Login);
LoginRouter.get('/validate', loginController.Validate);

export default LoginRouter;
