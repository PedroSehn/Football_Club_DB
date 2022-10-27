import { Request, Response, NextFunction } from 'express';
import UserService from '../../services/User.service';

const userService = new UserService();

const validateCredentials = (rec: Request, res: Response, next: NextFunction) => {
  const { email, password } = rec.body;
  if (!email || !password) return res.status(400).json({ message: 'All fields must be filled' });

  next();
};

const validateEmail = async (rec: Request, res: Response, next: NextFunction) => {
  const { email } = rec.body;
  const rejext = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const isValid = rejext.test(email);
  const userResponse = await userService.getByEmail(email) as object;

  if (!isValid || !userResponse === false === false) {
    return res
      .status(401).json({ message: 'Incorrect email or password' });
  }
  next();
};

export { validateCredentials, validateEmail };
