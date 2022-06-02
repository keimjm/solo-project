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

  Reservation.makeReservation = async function (user, start_date, end_date, total, room) {
    

    const reservation = await Reservation.create({
      start_date,
      end_date,
      total,
      user_id: user.id,
      room_id: room.id
    });
    await reservation.save();
    return reservation;
  }

  Reservation.cancelReservation = async function (id) {
    const reservation = await Reservation.findByPk(id);
    await reservation.destroy();
    return;
  }

  Reservation.associate = function(models) {
      Reservation.belongsTo(models.User, { foreignKey: 'user_id' });
      Reservation.belongsTo(models.Room, { foreignKey: 'room_id' });
  };
  return Reservation;
};
