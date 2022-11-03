interface IMatchTeamshData {
  id: number,
  homeTeam: number,
  awayTeam: number,
  homeTeamGoals: number,
  awayTeamGoals: number,
  teamHome: { teamName: string },
  teamAway: { teamName: string }
}

export default IMatchTeamshData;
