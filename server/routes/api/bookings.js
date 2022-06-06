const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Reservation, Room, Location, Review } = require('../../db/models');

router.delete("/:id", 
asyncHandler(async function(req, res) {
  const id = req.params.id;
  await Reservation.cancelReservation(id);
  return res.json({message: 'Success'});
})
)

router.put("/:id", 
asyncHandler(async(req, res) => {
    const id = req.params.id;
    const {user, room, start_date, end_date, total} = req.body;
    const reservationToUpdate = await Reservation.findByPk(id)
    const reservation = await reservationToUpdate.update({
      start_date,
      end_date,
      total,
      user_id: user.id,
      room_id: room.id
    })
    return res.json({reservation})

  })
)




module.exports = router;
