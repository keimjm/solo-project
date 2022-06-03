'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Locations', [
      {
         latitude: 55.92112,
         longitude: 3.238019,
         address: 'Guildford Rd',
         city: 'Edinburgh',
         country: 'Scotland'
       },
       {
        latitude: 37.095209,
        longitude: -79.6367,
        address: '123 Lakeview Dr',
        city: 'Smith Mountain Lake',
        country: 'United States'
      },
      {
        latitude: 47.089483,
        longitude: -122.94595,
        address: '1614 Camden Rd',
        city: 'Olympia',
        country: 'United States'
      },
      {
        latitude: 32.744259,
        longitude: -117.09383,
        address: '601 1st St',
        city: 'San Diego',
        country: 'United States'
      },
      {
        latitude: 32.744259,
        longitude: -117.09383,
        address: '465 Brooks Rd',
        city: 'Honolulu',
        country: 'United States'
      },
      {
        latitude: 32.744259,
        longitude: -117.09383,
        address: '9121 Pax St ',
        city: 'New Orleans',
        country: 'United States'
      },
      {
        latitude: 32.744259,
        longitude: -117.09383,
        address: '647 Grand Ave',
        city: 'Lunenburg',
        country: 'Canada'
      },
      {
        latitude: 32.744259,
        longitude: -117.09383,
        address: '671 2nd St',
        city: 'Chicago',
        country: 'United States'
      },

      ], {});
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('Locations', null, {});
     
  }
};
