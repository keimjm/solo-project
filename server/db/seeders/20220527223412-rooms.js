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
        file_name: "https://i.pinimg.com/originals/16/7a/ab/167aab778ba5e9b18b449a631581e373.png"
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
        location_id: 6,
        file_name: 'https://momsgotthestuff.com/wp-content/uploads/2021/04/minecraft-mansion-ideas-13.jpg'
      },
      {
        house_type: 'Beachfront',
        description: "Open Beach style house right on the water",
        total_occupancy: 4,
        total_bedrooms: 3,
        total_bathrooms: 3, 
        price: 100.90,
        owner_id: 6,
        location_id: 5,
        file_name: "https://staticg.sportskeeda.com/editor/2022/02/360df-16446359460401-1920.jpg"
      },
      {
        house_type: 'Camper',
        description: "A very open modern style that will allow you to relax in comfort",
        total_occupancy: 2,
        total_bedrooms: 1,
        total_bathrooms: 1, 
        price: 40.25,
        owner_id: 7,
        location_id: 7,
        file_name: 'https://i.ytimg.com/vi/0DzVcNvqVF8/maxresdefault.jpg'
      },
      {
        house_type: 'City',
        description: "A very open modern style that will allow you to relax in comfort",
        total_occupancy: 2,
        total_bedrooms: 1,
        total_bathrooms: 1, 
        price: 80.89,
        owner_id: 7,
        location_id: 8,
        file_name: 'https://whatifgaming.com/wp-content/uploads/2021/12/Minecraft-Bathroom-Interior.jpg'
      },
      {
        house_type: 'Treehouse',
        description: "Come experience a wonderful—and sustainable—kind of getaway at our retreat",
        total_occupancy: 4,
        total_bedrooms: 2,
        total_bathrooms: 1, 
        price: 65.69,
        owner_id: 1,
        location_id: 9,
        file_name: 'https://whatifgaming.com/wp-content/uploads/2021/12/Jungle-Treehouse-Minecraft-Design.png'
      },
      {
        house_type: 'City',
        description: "The house is equipped with a large kitchen and two modern bathrooms",
        total_occupancy: 3,
        total_bedrooms: 1,
        total_bathrooms: 2, 
        price: 172.89,
        owner_id: 2,
        location_id: 10,
        file_name: 'https://i.pinimg.com/originals/89/53/49/895349efd458955fc6f9c5813e90508a.jpg'
      },
      {
        house_type: 'Lakefront',
        description: "Relax on the water in this peaceful spot. A boat is needed to reach the house.",
        total_occupancy: 2,
        total_bedrooms: 1,
        total_bathrooms: 1, 
        price: 80.89,
        owner_id: 6,
        location_id: 11,
        file_name: 'https://i.pinimg.com/736x/50/e5/22/50e522fe48cf1e40172f5be0584a463a.jpg'
      },
      {
        house_type: 'Tiny',
        description: "Very secluded spot with lots of outdoor things to do nearby",
        total_occupancy: 2,
        total_bedrooms: 1,
        total_bathrooms: 0, 
        price: 35.99,
        owner_id: 1,
        location_id: 12,
        file_name: 'https://cdn.exputer.com/wp-content/uploads/2021/12/Source-1-6.png'
      },
      
    
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
  
      await queryInterface.bulkDelete('Rooms', null, {});
     
  }
};
