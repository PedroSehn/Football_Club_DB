import ILeaderboard from '../../../database/Entities/Leaderboard';
import IMatchTeamshData from '../../../database/Entities/MatchesTeams';

const sumGamesH = (match: IMatchTeamshData, homeTeam: ILeaderboard) => {
  const homeTeamName = match.teamHome.teamName;

  if (homeTeam.name === homeTeamName) {
    const obj = homeTeam;
    obj.totalGames += 1;
  }
};

export default sumGamesH;
