import * as jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import ICredentials from '../Entities/Credentials';
import UserService from './User.service';

dotenv.config();
const userService = new UserService();

const SECRET: jwt.Secret = process.env.JWT_SECRET || 'MONOBLACK';

const jwtConfig: object = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

class LoginService {
  public Login = async (credentials : ICredentials) => {
    const { email } = credentials;
    const user = await userService.getByEmail(email);
    const { role } = user;
    const token = await jwt.sign({ email, role }, SECRET, jwtConfig);
    return { token };
  };

  public DecryptToken = (token: string) => {
    const decoded = jwt.verify(token, SECRET);
    return decoded as jwt.JwtPayload;
  };
}

export default LoginService;
