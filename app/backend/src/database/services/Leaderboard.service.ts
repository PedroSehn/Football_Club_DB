import MatchesService from './Matches.service';
import TeamService from './Teams.service';
import createLBData from '../../middleweres/Leaderboard/General/createLBTable';
// import fillLBTable from '../../middleweres/Leaderboard/fillLBTable';
import homeTeamsLB from '../../middleweres/Leaderboard/homeTeams/homeTeamsLB';

class LeaderBoardService {
  private _MatchService = new MatchesService();
  private _TeamsService = new TeamService();

  public getInfo = async () => {
    const teams = await this._TeamsService.getAllTeams();
    const matches = await this._MatchService.getAllFinished();
    return { teams, matches };
  };

  public leaderBoardHell = async () => {
    const data = await this.getInfo();
    const array = await createLBData(data);
    const test = homeTeamsLB(data, array);
    // const sumPointsArr = sumPoints(data, array);
    // const sumLossesArr = sumLosses(data, sumPointsArr);
    // const sumGamesArr = sumGames(data, sumLossesArr);
    // const sumGoalsArr = sumGoals(data, sumGamesArr);
    // const sumEfficiencyArr = sumEfficiency(sumGoalsArr);
    return test;
  };
}

export default LeaderBoardService;
