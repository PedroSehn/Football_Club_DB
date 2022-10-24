'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('matches', {
      id: {
        type: Sequelize.INTERGER,
        primaryKey: true,
        autoIncrement: true,
      }, 
      home_team: {
        type: Sequelize.INTERGER,
        allowNull: false,
        references: {
          model: 'teams',
          key: 'id',
        }
      },
      home_team_goals: { type: Sequelize.INTERGER },
      away_team: {
        type: Sequelize.INTERGER,
        allowNull: false,
        references: {
          model: 'teams',
          key: 'id',
        }
      },
      away_team_goals: { type: Sequelize.INTERGER },
      in_progress: { type: Sequelize.BOOLEAN },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('matches');
  }
};
