import IMatchData from '../Entities/Match';
import IMatchTeamshData from '../Entities/MatchesTeams';
import Match from '../models/Match';
import Team from '../models/Team';

class MatchesService {
  private _model = Match;

  public getAllMatches = async (): Promise<IMatchTeamshData[]> => {
    const result = await this._model.findAll({
      include: [
        { model: Team, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: Team, as: 'teamAway', attributes: { exclude: ['id'] } },
      ],
    });
    return result as unknown as IMatchTeamshData[];
  };

  public getAllFinished = async () : Promise<IMatchTeamshData[]> => {
    const result = await this._model.findAll({
      where: { inProgress: 0 },
      include: [
        { model: Team, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: Team, as: 'teamAway', attributes: { exclude: ['id'] } },
      ],
    });
    return result as unknown as IMatchTeamshData[];
  };

  public getAllInProgress = async () => {
    const result = await this._model.findAll({
      where: { inProgress: 1 },
      include: [
        { model: Team, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: Team, as: 'teamAway', attributes: { exclude: ['id'] } },
      ],
    });
    return result;
  };

  public createMatch = async (matchData: IMatchData) => {
    const data = { ...matchData, inProgress: true };
    const result = await this._model.create(data);
    return result;
  };

  public finithMatch = async (id: string | number) => {
    await this._model.update(
      { inProgress: 0 },
      { where: { id } },
    );
    return true;
  };

  public updateMatch = async (id: string | number, data: object) => {
    await this._model.update(
      { ...data },
      { where: { id } },
    );
    return true;
  };
}

export default MatchesService;
