import { Request, Response } from 'express';
import UserService from '../database/services/User.service';

const userService = new UserService();

class UserController {
  public getUserByEmail = async (rec: Request, res: Response) => {
    const { email } = rec.body;
    const result = await userService.getByEmail(email);
    return res.status(200).json(result);
  };
}

export default UserController;
