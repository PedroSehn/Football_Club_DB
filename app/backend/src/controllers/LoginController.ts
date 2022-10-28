import { Request, Response } from 'express';
import LoginService from '../database/services/Login.service';

const loginService = new LoginService();

class LoginController {
  public Login = async (rec: Request, res: Response) => {
    const token = await loginService.Login(rec.body);
    return res.status(200).json(token);
  };

  public Validate = async (req: Request, res: Response) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ message: 'Token not found' });

    try {
      const data = loginService.DecryptToken(token);
      const { role } = data;
      return res.status(200).json({ role });
    } catch {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
  };
}

export default LoginController;
