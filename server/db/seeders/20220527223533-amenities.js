'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
 
      await queryInterface.bulkInsert('Amenities', [
        {
        has_tv: "1",
        has_ac: "0",
        has_internet: "1",
        has_heating: "1",
        has_kitchen: "1",
        has_parking: "1",
        has_washer: "0",
        has_dryer: "0",
        room_id: "1"
      },
      {
        has_tv: "1",
        has_ac: "1",
        has_internet: "1",
        has_heating: "1",
        has_kitchen: "1",
        has_parking: "0",
        has_washer: "1",
        has_dryer: "1",
        room_id: 2
      },
      {
        has_tv: "1",
        has_ac: "0",
        has_internet: "0",
        has_heating: "1",
        has_kitchen: "1",
        has_parking: "1",
        has_washer: "0",
        has_dryer: "0",
        room_id: 3
      },
      {
        has_tv: "1",
        has_ac: "1",
        has_internet: "1",
        has_heating: "1",
        has_kitchen: "1",
        has_parking: "1",
        has_washer: "1",
        has_dryer: "1",
        room_id: 4
      }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
      
      await queryInterface.bulkDelete('Amenities', null, {});
     
  }
};
