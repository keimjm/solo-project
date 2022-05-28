'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Amenities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      has_tv: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      has_ac: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      has_internet: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      has_heating: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      has_kitchen: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      has_parking: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      has_washer: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      has_dryer: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      room_id: {
        type: Sequelize.INTEGER,
        references: { model: 'Rooms', key: 'id' },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Amenities');
  }
};
