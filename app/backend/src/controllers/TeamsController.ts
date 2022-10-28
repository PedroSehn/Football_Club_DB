import { Request, Response } from 'express';
import TeamService from '../database/services/Teams.service';

class TeamController {
  private _service = new TeamService();

  public getAll = async (rec: Request, res: Response) => {
    const result = await this._service.getAllTeams();
    return res.status(200).json(result);
  };

  public getById = async (rec: Request, res: Response) => {
    const { id } = rec.params;
    const result = await this._service.getById(id);
    res.status(200).json(result);
  };
}

export default TeamController;
