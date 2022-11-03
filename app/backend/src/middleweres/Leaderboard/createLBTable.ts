import IDataObject from '../../database/Entities/dataObject';
import ILeaderboard from '../../database/Entities/Leaderboard';

const createLBData = async (data: IDataObject) => {
  const array: ILeaderboard[] = [];
  data.teams.map((item) => array.push({
    name: item.teamName,
    totalPoints: 0,
    totalGames: 0,
    totalVictories: 0,
    totalDraws: 0,
    totalLosses: 0,
    goalsFavor: 0,
    goalsOwn: 0,
    goalsBalance: 0,
    efficiency: 0,
  }));
  return array;
};

export default createLBData;
