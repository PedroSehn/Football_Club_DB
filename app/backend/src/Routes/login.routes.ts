import { Router } from 'express';
import LoginController from '../controllers/LoginController';

import {
  validateCredentials,
  validateEmail,
  validatePassword } from './middleweres/LoginAuth/credentials.val';

const LoginRouter = Router();

const loginController = new LoginController();

LoginRouter.post('/', validateCredentials, validateEmail, validatePassword, loginController.Login);
LoginRouter.get('/validate', loginController.Validate);

export default LoginRouter;
