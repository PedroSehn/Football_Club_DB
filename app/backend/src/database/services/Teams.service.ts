import Team from '../models/Team';

class TeamService {
  private _model = Team;

  public getAllTeams = async () => {
    const result = await this._model.findAll();
    return result;
  };

  public getById = async (id: string | number) => {
    const result = await this._model.findOne({ where: { id } });
    return result;
  };

  public getByName = async (email : string) => {
    const result = await this._model.findOne({ where: { email } });
    return result;
  };
}

export default TeamService;
