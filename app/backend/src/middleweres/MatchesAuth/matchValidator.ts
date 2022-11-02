import { Request, Response, NextFunction } from 'express';
import Team from '../../database/models/Team';

const sameTeamVal = (rec: Request, res: Response, next: NextFunction) => {
  const match = rec.body;
  const { homeTeam, awayTeam } = match;
  const message = { message: 'It is not possible to create a match with two equal teams' };
  if (homeTeam === awayTeam) return res.status(422).json(message);
  next();
};

const teamExists = async (rec: Request, res: Response, next: NextFunction) => {
  const numberOfTeams = await Team.count();
  const { homeTeam, awayTeam } = rec.body;
  const message = { message: 'There is no team with such id!' };
  if (homeTeam > numberOfTeams || homeTeam < 1) return res.status(404).json(message);
  if (awayTeam > numberOfTeams || awayTeam < 1) return res.status(404).json(message);
  next();
};

export { sameTeamVal, teamExists };
