import { Request, Response } from 'express';
import LeaderBoardService from '../database/services/Leaderboard.service';

class LeaderboardController {
  private _service = new LeaderBoardService();

  public leaderBoardHell = async (rec: Request, res: Response) => {
    const result = await this._service.leaderBoardHell();
    return res.status(200).json(result);
  };
}

export default LeaderboardController;
