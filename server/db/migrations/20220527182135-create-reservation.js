'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Reservations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      start_date: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      end_date: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      price: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      total: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      user_id: {
        allowNull: false,
        references: { model: 'Users', key: 'id' },
        type: Sequelize.INTEGER
      },
      room_id: {
        allowNull: false,
        references: { model: 'Rooms', key: 'id' },
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Reservations');
  }
};
