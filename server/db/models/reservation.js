'use strict';
const { Validator } = require("sequelize");


module.exports = (sequelize, DataTypes) => {
  const Reservation = sequelize.define('Reservation', {
    start_date: {
      allowNull: false,
      type: DataTypes.DATEONLY
    },
    end_date: {
      allowNull: false,
      type: DataTypes.DATEONLY
    },
    price: {
      allowNull: false,
      type: DataTypes.FLOAT
    },
    total: {
      allowNull: false,
      type: DataTypes.FLOAT
    },
    user_id: {
      allowNull: false,
      references: { model: 'Users', key: 'id' },
      type: DataTypes.INTEGER
    },
    room_id: {
      allowNull: false,
      references: { model: 'Rooms', key: 'id' },
      type: DataTypes.INTEGER
    }
  
  }) 

  Reservation.associate = function(models) {
      Reservation.belongsTo('User', { foreignKey: 'user_id' });
      Reservation.belongsTo('Room', { foreignKey: 'room_id' });
  };
  return Reservation;
};
