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
}

export default MatchesService;
