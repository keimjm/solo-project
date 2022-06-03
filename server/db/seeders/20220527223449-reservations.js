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
      {
        start_date: '2022/01/17',
        end_date: '2022/01/20',
        total: 302.70,
        user_id: 5,
        room_id: 6
      },
      {
        start_date: '2022/02/11',
        end_date: '2022/02/18',
        total: 281.75,
        user_id: 5,
        room_id: 7
      },
      {
        start_date: '2022/04/01',
        end_date: '2022/04/09',
        total: 647.12,
        user_id: 2,
        room_id: 8
      },
      {
        start_date: '2022/04/10',
        end_date: '2022/01/15',
        total: 404.45,
        user_id: 4,
        room_id: 8
      },
      {
        start_date: '2022/01/18',
        end_date: '2022/01/24',
        total: 183.30,
        user_id: 7,
        room_id: 3
      },
      {
        start_date: '2022/05/08',
        end_date: '2022/05/14',
        total: 1505.94,
        user_id: 2,
        room_id: 5
      },
      {
        start_date: '2022/09/21',
        end_date: '2022/09/24',
        total: 302.70,
        user_id: 1,
        room_id: 6
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Reservations', null, {});
     
  }
};
