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

  Amenity.addAmenities = async function (room_id, fields) {
    const {has_tv, has_ac, has_dryer, has_heating, has_internet, has_kitchen, has_parking, has_washer} = fields;
    const amenities = await Amenity.create({
      has_ac,
      has_dryer,
      has_heating,
      has_internet,
      has_kitchen,
      has_parking,
      has_tv,
      has_washer,
      room_id
    });
    await amenities.save();
    return amenities;
  };

  Amenity.updateAmenities = async function (room_id, amenity, fields) {
    const {has_tv, has_ac, has_dryer, has_heating, has_internet, has_kitchen, has_parking, has_washer} = fields;
    const updateAmenities = await amenity.update({
      has_ac,
      has_dryer,
      has_heating,
      has_internet,
      has_kitchen,
      has_parking,
      has_tv,
      has_washer,
      room_id
    });
    return updateAmenities;
  }

  return Amenity;
};
