import IDataObject from '../../database/Entities/dataObject';
import ILeaderboard from '../../database/Entities/Leaderboard';

const sumLosses = (data: IDataObject, lbtable: ILeaderboard[]): ILeaderboard[] => {
  const newMatchTable = data.matches.map((item) => {
    const homeTeamLB = lbtable.filter((team) => team.name === item.teamHome.teamName);
    const awayTeamLB = lbtable.filter((team) => team.name === item.teamAway.teamName);
    if (item.homeTeamGoals > item.awayTeamGoals) {
      awayTeamLB[0].totalLosses += 1;
    }
    if (item.homeTeamGoals < item.awayTeamGoals) {
      homeTeamLB[0].totalLosses += 1;
    }
    if (item.homeTeamGoals === item.awayTeamGoals) {
      homeTeamLB[0].totalDraws += 1;
      awayTeamLB[0].totalDraws += 1;
    }
    return lbtable;
  });
  return newMatchTable[0] as unknown as ILeaderboard[];
};

export default sumLosses;
