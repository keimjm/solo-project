const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Reservation, Room, Location, Review } = require('../../db/models');

router.get("/", 
asyncHandler(async(req, res) => {
    const id = req.params.id;
    // const booking = await Reservation.findAll({
    //     where: 
    // }) 
}));

router.delete("/:id", 
asyncHandler(async function(req, res) {
  const id = req.params.id;
  await Reservation.cancelReservation(id);
  return res.json({message: 'Success'});
})
)



module.exports = router;
