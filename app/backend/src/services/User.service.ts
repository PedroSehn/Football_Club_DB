import UserModel from '../database/models/User';
import IUser from '../database/Entities/User';

class UserService {
  private _model = UserModel;

  public getByEmail = async (email: string):Promise<IUser> => {
    const result = await this._model.findOne({ where: { email } });
    return result as IUser;
  };

  public getById = async (id: number) => {
    const result = await this._model.findByPk(id);
    return result;
  };
}

export default UserService;
