'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'user1@user.io',
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        email: 'user2@user.io',
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        email: 'msmith@user.io',
        username: 'msmith1',
        hashedPassword: bcrypt.hashSync('password4')
      },
      {
        email: 'jhuff@user.io',
        username: 'jay-huff',
        hashedPassword: bcrypt.hashSync('password5')
      },
      {
        email: 'mbrogdon@user.io',
        username: 'mbrogdon',
        hashedPassword: bcrypt.hashSync('password6')
      },
      {
        email: 'jreddick@user.io',
        username: 'jj3',
        hashedPassword: bcrypt.hashSync('password7')
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2', 'msmith1', 'jj3','mbrogdon', 'jay-huff' ] }
    }, {});
  }
};
