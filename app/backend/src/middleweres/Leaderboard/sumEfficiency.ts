import ILeaderboard from '../../database/Entities/Leaderboard';

const sumEfficiency = (lbtable: ILeaderboard[]) => {
  const finalLeaderboard = lbtable.map((item) => {
    // console.log(item.efficiency);
    const { totalGames, totalPoints } = item;
    const calcFormula = Number(((totalPoints / (totalGames * 3)) * 100).toFixed(2));
    item.efficiency = calcFormula;
    return lbtable;
  });
  return finalLeaderboard[0] as unknown as ILeaderboard[];
};

export default sumEfficiency;
