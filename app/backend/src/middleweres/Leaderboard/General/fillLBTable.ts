import IDataObject from '../../../database/Entities/dataObject';
import ILeaderboard from '../../../database/Entities/Leaderboard';
import sumGames from './sumGames';
import sumGoals from './sumGoals';
import sumLosses from './sumLosses';
import sumPoints from './sumVictories';
import sumEfficiency from './sumEfficiency';
import sortLb from './sortLeaderBoard';

const fillLBTable = (data: IDataObject, lbtable: ILeaderboard[]) => {
  const { matches } = data;
  matches.forEach((match) => {
    const homeTeamLB = lbtable.find((team) => team.name === match.teamHome.teamName);
    const awayTeamLB = lbtable.find((team) => team.name === match.teamAway.teamName);
    sumGames(match, homeTeamLB as ILeaderboard, awayTeamLB as ILeaderboard);
    sumGoals(match, homeTeamLB as ILeaderboard, awayTeamLB as ILeaderboard);
    sumLosses(match, homeTeamLB as ILeaderboard, awayTeamLB as ILeaderboard);
    sumPoints(match, homeTeamLB as ILeaderboard, awayTeamLB as ILeaderboard);
    sumEfficiency(lbtable);
    sortLb(lbtable);
  });
  return lbtable;
};

export default fillLBTable;
