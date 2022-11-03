import IMatchTeamshData from '../../../database/Entities/MatchesTeams';
import ILeaderboard from '../../../database/Entities/Leaderboard';

const sumPoints = (match: IMatchTeamshData, homeTeam: ILeaderboard, awayTeam: ILeaderboard) => {
  const homeTeamLB = homeTeam;
  const awayTeamLB = awayTeam;

  if (match.homeTeamGoals > match.awayTeamGoals) {
    homeTeamLB.totalPoints += 3;
    homeTeamLB.totalVictories += 1;
  }
  if (match.homeTeamGoals < match.awayTeamGoals) {
    awayTeamLB.totalPoints += 3;
    homeTeamLB.totalVictories += 1;
  }
  if (match.homeTeamGoals === match.awayTeamGoals) {
    homeTeamLB.totalPoints += 1;
    awayTeamLB.totalPoints += 1;
  }
};

export default sumPoints;
