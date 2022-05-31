'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    static associate(models) {
      Favorite.belongsTo(models.User, {
        foreignKey: "user_id",
        as: "user",
      });
      Favorite.belongsTo(models.Room, {
        foreignKey: "room_id",
        as: "room",
      });
    }
  }
  Favorite.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    room_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Favorite',
  });

  Favorite.addFavorite = async function (user, room) {
    const favorite = await Favorite.create({
        user_id: user.id,
        room_id: room.id
    })
    await favorite.save();
    return favorite;
  };

  Favorite.removeFavorite = async function (id) {
    const favorite = await Favorite.findByPk(id);
    await favorite.destroy();
    return  
  }

  return Favorite;
};
