import ILeaderboard from '../../../database/Entities/Leaderboard';
import IMatchTeamshData from '../../../database/Entities/MatchesTeams';

const sumGames = (match: IMatchTeamshData, homeTeam: ILeaderboard, awayTeam: ILeaderboard) => {
  const homeTeamName = match.teamHome.teamName;
  const awayTeamName = match.teamAway.teamName;

  if (homeTeam.name === homeTeamName || homeTeam.name === awayTeamName) {
    const obj = homeTeam;
    obj.totalGames += 1;
  }

  if (awayTeam.name === homeTeamName || awayTeam.name === awayTeamName) {
    const obj = awayTeam;
    obj.totalGames += 1;
  }
};

export default sumGames;
