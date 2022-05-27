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

  Location.addLocation = async function (fields) {
    const {latitude, longitude, address, city, country} = fields;
    const location = await Location.create({
      latitude,
      longitude,
      address,
      city,
      country
    })
    await location.save()
    return location;
  }

  return Location;
};
