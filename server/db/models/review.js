'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
 
    static associate(models) {
      Review.belongsTo(models.User, {
        foreignKey: "user_id"
      });
      Review.belongsTo(models.Room, {
        foreignKey: "room_id"
      })
    }
  }
  Review.init({
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false 
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false 
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false 
    },
    room_id: {
      type: DataTypes.INTEGER,
      allowNull: false 
    },
  }, {
    sequelize,
    modelName: 'Review',
  });

  Review.addReview = async function (user, room, fields) {
    const {rating, comment} = fields;
    const review = await Review.create({
      rating, 
      comment,
      user_id: user.id,
      room_id: room.id
    })
    await review.save();
    return review;
  } 

  return Review;
};
