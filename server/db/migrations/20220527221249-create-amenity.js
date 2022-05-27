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
        type: Sequelize.BOOLEAN
      },
      has_ac: {
        type: Sequelize.BOOLEAN
      },
      has_internet: {
        type: Sequelize.BOOLEAN
      },
      has_heating: {
        type: Sequelize.BOOLEAN
      },
      has_kitchen: {
        type: Sequelize.BOOLEAN
      },
      has_parking: {
        type: Sequelize.BOOLEAN
      },
      has_washer: {
        type: Sequelize.BOOLEAN
      },
      has_dryer: {
        type: Sequelize.BOOLEAN
      },
      room_id: {
        type: Sequelize.INTEGER
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