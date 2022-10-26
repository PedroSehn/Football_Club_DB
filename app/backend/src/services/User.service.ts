import UserModel from '../database/models/User';

class UserService {
  private _model = UserModel;

  public getByEmail = async (email: string) => {
    const result = await this._model.findOne({ where: { email } });
    return result;
  };

  public getById = async (id: number) => {
    const result = await this._model.findByPk(id);
    return result;
  };
}

export default UserService;
