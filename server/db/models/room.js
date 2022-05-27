'use strict';
const { Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Room extends Model {

    static associate(models) {
      Room.belongsTo(models.User, {
        foreignKey: "owner_id",
        as: "user",
      });
      Room.hasMany(models.Reservation, {
        foreignKey: "room_id",
        as: "amenity",
      });
      Room.belongsTo(models.Location, {
        foreignKey: "location_id",
        as: "location",
      });
      Room.hasMany(models.Amenity, {
        foreignKey: "room_id",
        as: "amenity",
      });
      Room.hasMany(models.Favorite, {
        foreignKey: "room_id",
        as: "favorite",
      });
    }
    
  }
  Favorite.init({
    house_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total_occupancy: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total_bedrooms: {
      type:DataTypes.INTEGER,
      allowNull: false,
    },
    total_bathrooms: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },   
    owner_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    location_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    file_name:{
       type: DataTypes.STRING,
       allowNull: false,
},  }, {
    sequelize,
    modelName: 'Room',
  });


  return Room;
};
