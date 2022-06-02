const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const bookingRouter = require('./bookings.js')
const roomRouter = require('./rooms.js');
const asyncHandler = require('express-async-handler');


router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/rooms', roomRouter);
router.use('/bookings', bookingRouter);



module.exports = router;
