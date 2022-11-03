import IMatchTeamshData from '../../../database/Entities/MatchesTeams';
import ILeaderboard from '../../../database/Entities/Leaderboard';

const sumPointsH = (match: IMatchTeamshData, homeTeam: ILeaderboard) => {
  const homeTeamLB = homeTeam;

  if (match.homeTeamGoals > match.awayTeamGoals) {
    homeTeamLB.totalPoints += 3;
    homeTeamLB.totalVictories += 1;
  }
  if (match.homeTeamGoals === match.awayTeamGoals) {
    homeTeamLB.totalPoints += 1;
  }
};

export default sumPointsH;
