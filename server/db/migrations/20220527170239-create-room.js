'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Rooms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      house_type: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING
      },
      total_occupancy: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      total_bedrooms: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      total_bathrooms: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      price: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      owner_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Users', key: 'id' },
      },
      location_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Locations', key: 'id' },
      },
      file_name: {
        allowNull: false,
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Rooms');
  }
};
