import IDataObject from '../../database/Entities/dataObject';
import ILeaderboard from '../../database/Entities/Leaderboard';

const sumGames = (data: IDataObject, lbtable: ILeaderboard[]) => {
  const newMatchTable = data.matches.map((item) => {
    const homeTeamLB = lbtable.filter((team) => team.name === item.teamHome.teamName);
    const awayTeamLB = lbtable.filter((team) => team.name === item.teamAway.teamName);
    homeTeamLB[0].totalGames += 1;
    awayTeamLB[0].totalGames += 1;
    return lbtable;
  });
  return newMatchTable[0] as unknown as ILeaderboard[];
};

export default sumGames;
