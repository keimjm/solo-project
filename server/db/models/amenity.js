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
      type: DataTypes.BOOLEAN,
      allowNull: false, 
      defaultValue: false
    },
    has_ac: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    has_internet: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    has_heating: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false 
    },
    has_kitchen: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false 
    },
    has_parking: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    has_washer: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    has_dryer: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false 
    },
    room_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: false 
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
