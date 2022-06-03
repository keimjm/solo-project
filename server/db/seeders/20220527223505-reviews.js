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
        rating: 4,
        comment: 'This place was well worth the high price',
        user_id: 4,
        room_id: 4
      },
      {
        rating: 5,
        comment: '',
        user_id: 5,
        room_id: 6
      },
      {
        rating: 3,
        comment: 'The camper was fine but it stormed during our stay which made it unpleasant. Hope to try again with better weather',
        user_id: 5,
        room_id: 7
      },
      {
        rating: 2,
        comment: 'This place was very beautiful but didn\'t enjoy having to share the common space with the host',
        user_id: 2,
        room_id: 8
      },
      {
        rating: 4,
        comment: 'The room was fine, the location is fantastic which made up for some of the inconveniences',
        user_id: 4,
        room_id: 8
      },
      {
        rating: 3,
        comment: 'The house felt very cramped compared to the photos but still had a fun time',
        user_id: 7,
        room_id: 3
      },
      {
        rating: 5,
        comment: 'Amazing experience! Highly recommend',
        user_id: 2,
        room_id: 5
      },
      {
        rating: 5,
        comment: 'This was just as beautiful as the pictures made it look, we had a great weekend',
        user_id: 1,
        room_id: 6
      },

      
    ], {});
    
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Reviews', null, {});
     
  }
};
