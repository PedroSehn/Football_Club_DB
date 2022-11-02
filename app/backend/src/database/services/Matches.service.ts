import IMatchData from '../Entities/Match';
import Match from '../models/Match';
import Team from '../models/Team';

class MatchesService {
  private _model = Match;

  public getAllMatches = async (): Promise<Match[]> => {
    const result = await this._model.findAll({
      include: [
        { model: Team, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: Team, as: 'teamAway', attributes: { exclude: ['id'] } },
      ],
    });
    return result;
  };

  public getAllFinished = async () => {
    const result = await this._model.findAll({
      where: { inProgress: 0 },
      include: [
        { model: Team, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: Team, as: 'teamAway', attributes: { exclude: ['id'] } },
      ],
    });
    return result;
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
}

export default MatchesService;
