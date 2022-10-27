import { Request, Response, NextFunction } from 'express';

const validateEmail = (rec: Request, res: Response, next: NextFunction) => {
  const { email } = rec.body;
  if (!email) return res.status(400).json({ message: 'All fields must be filled' });
  next();
};

export default validateEmail;
