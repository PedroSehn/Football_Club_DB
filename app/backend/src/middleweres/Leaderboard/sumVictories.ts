import IDataObject from '../../database/Entities/dataObject';
import ILeaderboard from '../../database/Entities/Leaderboard';

const sumPoints = (data: IDataObject, lbtable: ILeaderboard[]) => {
  const newMatchTable = data.matches.map((item) => {
    const homeTeamLB = lbtable.filter((team) => team.name === item.teamHome.teamName);
    const awayTeamLB = lbtable.filter((team) => team.name === item.teamAway.teamName);
    if (item.homeTeamGoals > item.awayTeamGoals) {
      homeTeamLB[0].totalPoints += 3;
      homeTeamLB[0].totalVictories += 1;
    }
    if (item.homeTeamGoals < item.awayTeamGoals) {
      awayTeamLB[0].totalPoints += 3;
      homeTeamLB[0].totalVictories += 1;
    }
    if (item.homeTeamGoals === item.awayTeamGoals) {
      homeTeamLB[0].totalPoints += 1;
      awayTeamLB[0].totalPoints += 1;
    }
    return lbtable;
  });
  return newMatchTable[0] as unknown as ILeaderboard[];
};

export default sumPoints;
