import { Request, Response, NextFunction } from 'express';
import * as dotenv from 'dotenv';
import * as jwt from 'jsonwebtoken';

dotenv.config();

const validateToken = async (rec: Request, res: Response, next: NextFunction) => {
  const secret = process.env.JWT_SECRET || 'MONOBLACK';
  const message = { message: 'Token must be a valid token' };
  const token = rec.header('Authorization') as string;

  try {
    jwt.verify(token, secret);
    next();
  } catch {
    return res.status(401).json(message);
  }
};

export default validateToken;
