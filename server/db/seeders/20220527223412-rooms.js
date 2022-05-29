'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('Rooms', [
        {
        house_type: 'Castle',
        description: "Lovely medieval castle with refurbished inside and spacious rooms",
        total_occupancy: 6,
        total_bedrooms: 5,
        total_bathrooms: 4, 
        price: 160.25,
        owner_id: 3,
        location_id: 1,
        file_name: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pcgamesn.com%2Fminecraft%2Fcastle-ideas-blueprints&psig=AOvVaw0v1eNUy6hjj_Mie-J2LlSE&ust=1653841027221000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCMjg7IvMgvgCFQAAAAAdAAAAABAD"
      },
      {
        house_type: 'Lakefront',
        description: "Cozy wood house on a beautiful lake with a porch view ",
        total_occupancy: 3,
        total_bedrooms: 2,
        total_bathrooms: 2, 
        price: 70.55,
        owner_id: 3,
        location_id: 2,
        file_name: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dx2fvHwCSGbk&psig=AOvVaw1K202YFxRjfSGAvns3cuU0&ust=1653841137180000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCIj73L7MgvgCFQAAAAAdAAAAABAD"
      },
      {
        house_type: 'Tiny',
        description: "Get the tiny home experience in style",
        total_occupancy: 2,
        total_bedrooms: 1,
        total_bathrooms: 1, 
        price: 30.55,
        owner_id: 3,
        location_id: 3,
        file_name: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwhatifgaming.com%2Fsmallest-minecraft-house-ideas%2F&psig=AOvVaw39dFJP22tSHu3BX4qogxBW&ust=1653841810282000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKDViIHPgvgCFQAAAAAdAAAAABAD"
      },
      {
        house_type: 'Expensive',
        description: "A very open modern style that will allow you to relax in comfort",
        total_occupancy: 2,
        total_bedrooms: 1,
        total_bathrooms: 2, 
        price: 300.99,
        owner_id: 1,
        location_id: 4,
        file_name: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D935YXFFcCJg&psig=AOvVaw1_EnGlEYpOmcFC5nLIeh2L&ust=1653926865866000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKC-te6LhfgCFQAAAAAdAAAAABAD'
      },
    
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
  
      await queryInterface.bulkDelete('Rooms', null, {});
     
  }
};
