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

  public createMatch = async (rec: Request, res: Response) => {
    const data = rec.body;
    const result = await this._service.createMatch(data);
    return res.status(201).json(result);
  };

  public finishMatch = async (rec: Request, res: Response) => {
    const { id } = rec.params;
    await this._service.finithMatch(id);
    return res.status(200).json({ message: 'Finished' });
  };
}

export default MatchController;
