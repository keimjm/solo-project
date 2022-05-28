'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Reservations', [
      {
        start_date: '2022/08/06',
        end_date: '2022/08/10',
        total: 641.00,
        user_id: 1,
        room_id: 1
      },
      {
        start_date: '2022/07/01',
        end_date: '2022/07/04',
        total: 211.65,
        user_id: 2,
        room_id: 2
      },
      {
        start_date: '2022/08/06',
        end_date: '2022/08/10',
        total: 10.00,
        user_id: 1,
        room_id: 1
      },
      {
        start_date: '2022/08/06',
        end_date: '2022/08/10',
        total: 10.00,
        user_id: 1,
        room_id: 1
      },
      {
        start_date: '2022/08/06',
        end_date: '2022/08/10',
        total: 10.00,
        user_id: 1,
        room_id: 1
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Reservations', null, {});
     
  }
};
