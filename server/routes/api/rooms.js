const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Room, Amenity, Location, Review } = require('../../db/models');



router.get('/', 
    asyncHandler(async (req, res) => {
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
          ]
          })
        console.log(rooms)
        return res.json({rooms});

    })
);

module.exports = router;
