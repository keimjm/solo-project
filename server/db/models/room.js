'use strict';
const { Model} = require('sequelize');
const Amenity = require('./amenity')
const Location = require('./location')

module.exports = (sequelize, DataTypes) => {
  class Room extends Model {

    static associate(models) {
      Room.belongsTo(models.User, {
        foreignKey: "owner_id",
        as: "user",
      });
      Room.hasMany(models.Reservation, {
        foreignKey: "room_id",
        as: "reservation",
        onDelete: "CASCADE",hooks:true
      });
      Room.belongsTo(models.Location, {
        foreignKey: "location_id",
        as: "location",
      });
      Room.hasMany(models.Amenity, {
        foreignKey: "room_id",
        as: "amenity",
        onDelete: "CASCADE",hooks:true
      });
      Room.hasMany(models.Favorite, {
        foreignKey: "room_id",
        as: "favorite",
        onDelete: "CASCADE",hooks:true
      });
      Room.hasMany(models.Review, {
        foreignKey: "room_id",
        as: "review",
        onDelete: "CASCADE",hooks:true
      })
    }
    
  }
  Room.init({
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

  Room.addRoom = async function (user, location, fields) {
    const {house_type, description, total_occupancy, total_bedrooms, total_bathrooms, price, file_name} = fields;
    const room = await Room.create({
      house_type,
      description,
      total_occupancy,
      total_bedrooms,
      total_bathrooms,
      price,
      owner_id: user.id,
      location_id: location.id,
      file_name
    });
    await room.save();
    return room;
  };

  Room.deleteRoom = async function (id) {
    const room = await Room.findByPk(id);
    await room.destroy();
    return;
  };

  Room.updateRoom = async function (room, fields) {
    const {house_type, description, total_occupancy, total_bedrooms, total_bathrooms, price, file_name} = fields;
    const updatedRoom = await room.update({
      house_type,
      description,
      total_occupancy,
      total_bedrooms,
      total_bathrooms,
      price,
      file_name
    });
    return updatedRoom;
  }



  return Room;
};
