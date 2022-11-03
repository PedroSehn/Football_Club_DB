import IMatchTeamshData from '../../../database/Entities/MatchesTeams';
import ILeaderboard from '../../../database/Entities/Leaderboard';

const sumDrawsH = (match: IMatchTeamshData, homeTeam: ILeaderboard) => {
  const homeTeamLB = homeTeam;

  if (match.homeTeamGoals === match.awayTeamGoals) {
    homeTeamLB.totalDraws += 1;
  }
};

export default sumDrawsH;
