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
      {
        rating: 5,
        comment: 'Loved the design and look of this spot!',
        user_id: 1,
        room_id: 10
      },
      {
        rating: 3,
        comment: 'The place was very cool but felt very unsafe at times in the house.',
        user_id: 6,
        room_id: 9
      },
      {
        rating: 2,
        comment: 'Very inconvenient to have to row back and forth every time you want to leave.',
        user_id: 3,
        room_id: 11
      },
      {
        rating: 5,
        comment: '',
        user_id: 3,
        room_id: 12
      },
      {
        rating: 4,
        comment: 'Was a cool experience but was a little creeped out in some places.',
        user_id: 7,
        room_id: 1
      },
      {
        rating: 3,
        comment: '',
        user_id: 5,
        room_id: 7
      },
      {
        rating: 5,
        comment: 'Had a great time and this house was a big reason for that',
        user_id: 7,
        room_id: 5
      },

      
    ], {});
    
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Reviews', null, {});
     
  }
};
