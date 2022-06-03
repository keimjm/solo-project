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
        file_name: "https://www.pcgamesn.com/wp-content/uploads/2020/08/minecraft-castle-ideas-blueprints.jpg"
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
        file_name: "https://whatifgaming.com/wp-content/uploads/2021/11/Modern-House-Minecraft-Small-Design-1024x576.jpg"
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
        file_name: 'https://images.wondershare.com/filmora/article-images/simplistic-modern-house-poster.jpg'
      },
      {
        house_type: 'Expensive',
        description: "Featured in Architectural Digest",
        total_occupancy: 3,
        total_bedrooms: 3,
        total_bathrooms: 3, 
        price: 250.99,
        owner_id: 5,
        location_id: 5,
        file_name: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fohhjaybeemc%2Fstatus%2F1285577030151688192&psig=AOvVaw12EaDGR5EmDpw0ArqXWS_4&ust=1654359151942000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPCr2KHWkfgCFQAAAAAdAAAAABAD'
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
        file_name: 'https://images.wondershare.com/filmora/article-images/simplistic-modern-house-poster.jpg'
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
        file_name: 'https://images.wondershare.com/filmora/article-images/simplistic-modern-house-poster.jpg'
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
        file_name: 'https://images.wondershare.com/filmora/article-images/simplistic-modern-house-poster.jpg'
      },
    
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
  
      await queryInterface.bulkDelete('Rooms', null, {});
     
  }
};
