import { Request, Response } from 'express';
import MatchesService from '../database/services/Matches.service';

class MatchController {
  private _service = new MatchesService();

  public getAllMatches = async (rec: Request, res: Response) => {
    if (rec.query.inProgress) {
      const { query } = rec;
      const valid = query.inProgress;
      if (valid === 'true') {
        const data = await this._service.getAllInProgress();
        return res.status(200).json(data);
      }
      const result = await this._service.getAllFinished();
      return res.status(200).json(result);
    }
    const response = await this._service.getAllMatches();
    return res.status(200).json(response);
  };
}

export default MatchController;
