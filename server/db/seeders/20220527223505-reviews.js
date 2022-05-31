'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('Reviews', [
        {
        rating: 4,
        comment: 'Had a wonderful time at this place!',
        user_id: 1,
        room_id: 1
      },
      {
        rating: 5,
        comment: 'Loved staying here',
        user_id: 2,
        room_id: 3
      },
      {
        rating: 3,
        comment: 'The house was fine but there was a large storm while we were there',
        user_id: 2,
        room_id: 2
      },
      {
        rating: 4,
        comment: '',
        user_id: 1,
        room_id: 2
      },
      {
        rating: 5,
        comment: 'This place was well worth the high price',
        user_id: 4,
        room_id: 4
      }
      
    ], {});
    
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Reviews', null, {});
     
  }
};
