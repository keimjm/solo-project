'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Amenity extends Model {

    static associate(models) {
      Amenity.belongsTo(models.Room, {
        foreignKey: "room_id"
      });
    }
  }
  Amenity.init({
    has_tv: {
      types: DataTypes.BOOLEAN,
      allowNull: false 
    },
    has_ac: {
      types: DataTypes.BOOLEAN,
      allowNull: false 
    },
    has_internet: {
      types: DataTypes.BOOLEAN,
      allowNull: false 
    },
    has_heating: {
      types: DataTypes.BOOLEAN,
      allowNull: false 
    },
    has_kitchen: {
      types: DataTypes.BOOLEAN,
      allowNull: false 
    },
    has_parking: {
      types: DataTypes.BOOLEAN,
      allowNull: false 
    },
    has_washer: {
      types: DataTypes.BOOLEAN,
      allowNull: false 
    },
    has_dryer: {
      types: DataTypes.BOOLEAN,
      allowNull: false 
    },
    room_id: {
      types: DataTypes.INTEGER,
      allowNull: false 
},    }, {
    sequelize,
    modelName: 'Amenity',
  });
  return Amenity;
};
