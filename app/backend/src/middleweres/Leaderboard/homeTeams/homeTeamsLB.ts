import IDataObject from '../../../database/Entities/dataObject';
import ILeaderboard from '../../../database/Entities/Leaderboard';
import sumGamesH from './sumGames-H';
import sumPointsH from './sumPoints-H';
import sumLossesH from './sumLosses-H';
import sumDrawsH from './sumDraws-H';
import sumGoalsH from './sumGoals-H';
import calcEfficiency from './calcEfficiency';
import sortLb from '../General/sortLeaderBoard';

const homeTeamsLB = (data: IDataObject, lbtable: ILeaderboard[]) => {
  const homeMatches = [...data.matches];
  const homeLB = [...lbtable];
  homeMatches.forEach((match) => {
    const homeTeamLB = homeLB.find((team) => team.name === match.teamHome.teamName);
    // const awayTeamLB = homeLB.find((team) => team.name === match.teamAway.teamName);
    sumGamesH(match, homeTeamLB as ILeaderboard);
    sumPointsH(match, homeTeamLB as ILeaderboard);
    sumLossesH(match, homeTeamLB as ILeaderboard);
    sumDrawsH(match, homeTeamLB as ILeaderboard);
    sumGoalsH(match, homeTeamLB as ILeaderboard);
    calcEfficiency(homeLB);
    sortLb(homeLB);
  });
  return homeLB;
};

export default homeTeamsLB;
