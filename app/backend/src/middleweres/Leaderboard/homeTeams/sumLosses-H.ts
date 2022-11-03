import IMatchTeamshData from '../../../database/Entities/MatchesTeams';
import ILeaderboard from '../../../database/Entities/Leaderboard';

const sumLossesH = (match: IMatchTeamshData, homeTeam: ILeaderboard) => {
  const homeTeamLB = homeTeam;

  if (match.homeTeamGoals < match.awayTeamGoals) {
    homeTeamLB.totalLosses += 1;
  }
};

export default sumLossesH;
