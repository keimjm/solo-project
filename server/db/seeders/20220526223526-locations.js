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
        latitude: 21.353339,
        longitude: -157.861176,
        address: '465 Brooks Rd',
        city: 'Honolulu',
        country: 'United States'
      },
      {
        latitude: 29.985866,
        longitude: -90.089271,
        address: '9121 Pax St ',
        city: 'New Orleans',
        country: 'United States'
      },
      {
        latitude: 44.871443,
        longitude: -64.226025,
        address: '647 Grand Ave',
        city: 'Lunenburg',
        country: 'Canada'
      },
      {
        latitude: 41.836828,
        longitude: -87.736865,
        address: '671 2nd St',
        city: 'Chicago',
        country: 'United States'
      },
      {
        latitude: 38.882481,
        longitude: -104.859009,
        address: '3987 Walnut Dr',
        city: 'Colorado Springs',
        country: 'United States'
      },
      {
        latitude: 41.505196,
        longitude: -71.301444,
        address: '3938 Ledner Station',
        city: 'Newport',
        country: 'United States'
      },
      {
        latitude: 42.570864,
        longitude: -87.872708,
        address: '96220 Pfeffer Forge',
        city: 'Kenosha',
        country: 'United States'
      },
      {
        latitude: 41.189364,
        longitude: -112.025308,
        address: '3812 Freda Forks',
        city: 'Salt Lake City',
        country: 'United States'
      },

      ], {});
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('Locations', null, {});
     
  }
};
