import IMatchTeamshData from '../MatchesTeams';
import ITeam from '../Teams';

interface IDataObject {
  teams: Array<ITeam>;
  matches: IMatchTeamshData[];
}

export default IDataObject;
