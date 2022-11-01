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
}

export default MatchesService;
