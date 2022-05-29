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
        total: 91.65,
        user_id: 2,
        room_id: 3
      },
      {
        start_date: '2022/02/15',
        end_date: '2022/02/19',
        total: 282.20,
        user_id: 2,
        room_id: 2
      },
      {
        start_date: '2022/03/23',
        end_date: '2022/03/24',
        total: 70.55,
        user_id: 1,
        room_id: 2
      },
      {
        start_date: '2022/01/21',
        end_date: '2022/01/24',
        total: 10.00,
        user_id: 4,
        room_id: 4
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Reservations', null, {});
     
  }
};
