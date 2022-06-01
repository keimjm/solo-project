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


router.get('/:id', asyncHandler(async function(req, res) {
  const room = await Room.findByPk(req.params.id, {
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
  return res.json({room});
}));

router.put('/:id', asyncHandler(async function(req, res) {
  const room = await Room.findByPk(req.params.id);
  let updatedRoom = Room.updateRoom(room, req.body);
  return res.json({updatedRoom});
}));

router.delete('/:id', asyncHandler(async function(req, res) {
  //const room = await Room.findByPk(req.params.id);
  Room.deleteRoom(req.params.id)
  return res.json({message: 'Success'});
}));

module.exports = router;
