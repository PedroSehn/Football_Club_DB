import ILeaderboard from '../../../database/Entities/Leaderboard';

const calcEfficiency = (lbtable: ILeaderboard[]) => {
  lbtable.forEach((item) => {
    const object = item;
    const { totalGames, totalPoints } = object;
    const calcFormula = Number(((totalPoints / (totalGames * 3)) * 100).toFixed(2));
    object.efficiency = calcFormula;
  });
};

export default calcEfficiency;
