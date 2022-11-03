import IMatchTeamshData from '../../../database/Entities/MatchesTeams';
import ILeaderboard from '../../../database/Entities/Leaderboard';

const sumGoals = (match: IMatchTeamshData, homeTeam: ILeaderboard, awayTeam: ILeaderboard) => {
  const newHomeTeam = homeTeam;
  const newAwayTeam = awayTeam;

  newHomeTeam.goalsFavor += match.homeTeamGoals;
  newHomeTeam.goalsOwn += match.awayTeamGoals;

  newHomeTeam.goalsBalance += match.homeTeamGoals;
  newHomeTeam.goalsBalance -= match.awayTeamGoals;

  newAwayTeam.goalsFavor += match.awayTeamGoals;
  newAwayTeam.goalsOwn += match.homeTeamGoals;

  newAwayTeam.goalsBalance += match.awayTeamGoals;
  newAwayTeam.goalsBalance -= match.homeTeamGoals;
};

export default sumGoals;
