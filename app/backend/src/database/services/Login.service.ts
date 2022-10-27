import * as jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import ICredentials from '../Entities/Credentials';

dotenv.config();

const secret: jwt.Secret = process.env.JWT_SECRET || 'MONOBLACK';

class LoginService {
  public Login = async (credentials : ICredentials) => {
    const token = await jwt.sign(credentials, secret);
    return { token };
  };
}

export default LoginService;
