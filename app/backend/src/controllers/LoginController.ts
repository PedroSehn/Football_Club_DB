import { Request, Response } from 'express';
import LoginService from '../database/services/Login.service';

const loginService = new LoginService();

class LoginController {
  public Login = async (rec: Request, res: Response) => {
    const token = await loginService.Login(rec.body);
    return res.status(200).json(token);
  };
}

export default LoginController;
