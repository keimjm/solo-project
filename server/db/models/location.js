'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    static associate(models) {
      Location.hasMany(models.Room, {
        foreignKey: "location_id",
        as: "room",
        onDelete: "CASCADE",hooks:true
      })
    }
  }
  Location.init({
    latitude: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    longitude: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull:false
    },
    city: {
      type: DataTypes.STRING,
      allowNull:false
    },
    country: {
      type: DataTypes.STRING,
      allowNull:false
    },
  }, {
    sequelize,
    modelName: 'Location',
  });
  return Location;
};
