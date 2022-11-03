import IMatchTeamshData from '../../../database/Entities/MatchesTeams';
import ILeaderboard from '../../../database/Entities/Leaderboard';

const sumLosses = (match: IMatchTeamshData, homeTeam: ILeaderboard, awayTeam: ILeaderboard) => {
  const awayTeamLB = awayTeam;
  const homeTeamLB = homeTeam;

  if (match.homeTeamGoals > match.awayTeamGoals) {
    awayTeamLB.totalLosses += 1;
  }
  if (match.homeTeamGoals < match.awayTeamGoals) {
    homeTeamLB.totalLosses += 1;
  }
  if (match.homeTeamGoals === match.awayTeamGoals) {
    homeTeamLB.totalDraws += 1;
    awayTeamLB.totalDraws += 1;
  }
};

export default sumLosses;
