import { Request, Response } from 'express';
import MatchesService from '../database/services/Matches.service';

class MatchController {
  private _service = new MatchesService();

  public getAllMatches = async (rec: Request, res: Response) => {
    const response = await this._service.getAllMatches();
    return res.status(200).json(response);
  };
}

export default MatchController;
