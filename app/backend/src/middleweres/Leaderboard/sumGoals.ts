import IDataObject from '../../database/Entities/dataObject';
import ILeaderboard from '../../database/Entities/Leaderboard';

const sumGoals = (data: IDataObject, lbtable: ILeaderboard[]) => {
  const newMatchTable = data.matches.map((item) => {
    const homeTeamLB = lbtable.filter((team) => team.name === item.teamHome.teamName);
    const awayTeamLB = lbtable.filter((team) => team.name === item.teamAway.teamName);

    homeTeamLB[0].goalsFavor += item.homeTeamGoals;
    homeTeamLB[0].goalsOwn += item.awayTeamGoals;

    homeTeamLB[0].goalsBalance += item.homeTeamGoals;
    homeTeamLB[0].goalsBalance -= item.awayTeamGoals;

    awayTeamLB[0].goalsFavor += item.awayTeamGoals;
    awayTeamLB[0].goalsOwn += item.homeTeamGoals;

    awayTeamLB[0].goalsBalance += item.awayTeamGoals;
    awayTeamLB[0].goalsBalance -= item.homeTeamGoals;

    return lbtable;
  });
  return newMatchTable[0] as unknown as ILeaderboard[];
};

export default sumGoals;
