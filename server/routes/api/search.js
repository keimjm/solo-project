const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { Op } = require('sequelize');
const { handleValidationErrors } = require('../../utils/validation');
const { Room, Amenity, Location, Review, Reservation } = require('../../db/models');



router.get('/', 
    asyncHandler(async (req, res) => {
        //const {searchInput} = req.body

        const query = req.url.match(/query=([^&]*)/)[1];
        const rooms = await Room.findAll({
            include: [
                {
                model: Amenity,
                as: "amenity"
              },
              {
                 model: Location,
                 as: "location"
              },
              {
                  model: Review,
                  as: "review"
              }
            ],
            where: {
                [Op.or]: [
                  {
                    description: {
                      [Op.iLike]: `%${query}%`
                    }
                  },
                  {
                    house_type: {
                      [Op.iLike]: `%${query}%`
                    }
                  },
                  {
                    '$location.city$': {
                      [Op.iLike]: `%${query}%`
                    }
                  },
                  {
                    '$location.country$': {
                      [Op.iLike]: `%${query}%`
                    }
                  }
                ]
              },
        })

        return res.json({rooms})

    })
);

module.exports = router;
