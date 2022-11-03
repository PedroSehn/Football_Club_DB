import ILeaderboard from '../../../database/Entities/Leaderboard';

const sortLb = (lbtable: ILeaderboard[]) => {
  const sortFunction = (a: ILeaderboard, b: ILeaderboard) => {
    if (a.totalPoints > b.totalPoints) return -1;
    if (a.totalPoints < b.totalPoints) return 1;

    if (a.goalsBalance > b.goalsBalance) return -1;
    if (a.goalsBalance < b.goalsBalance) return 1;

    if (a.goalsFavor > b.goalsFavor) return -1;
    if (a.goalsFavor < b.goalsFavor) return 1;

    if (a.goalsOwn > b.goalsOwn) return 1;
    if (a.goalsOwn < b.goalsOwn) return -1;

    return 0;
  };

  lbtable.sort(sortFunction);
};

export default sortLb;
