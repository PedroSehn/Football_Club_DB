import IMatchTeamshData from '../../../database/Entities/MatchesTeams';
import ILeaderboard from '../../../database/Entities/Leaderboard';

const sumGoalsH = (match: IMatchTeamshData, homeTeam: ILeaderboard) => {
  const homeTeamLB = homeTeam;
  homeTeamLB.goalsFavor += match.homeTeamGoals;
  homeTeamLB.goalsOwn += match.awayTeamGoals;
  homeTeamLB.goalsBalance = homeTeamLB.goalsFavor - homeTeamLB.goalsOwn;
};

export default sumGoalsH;
