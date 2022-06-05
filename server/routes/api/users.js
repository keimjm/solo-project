const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Room, Location, Review, Reservation } = require('../../db/models');

const router = express.Router();

const validateSignup = [
    check('email')
      .exists({ checkFalsy: true })
      .isEmail()
      .withMessage('Please provide a valid email.'),
    check('username')
      .exists({ checkFalsy: true })
      .isLength({ min: 4 })
      .withMessage('Please provide a username with at least 4 characters.'),
    check('username')
      .not()
      .isEmail()
      .withMessage('Username cannot be an email.'),
    check('password')
      .exists({ checkFalsy: true })
      .isLength({ min: 6 })
      .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors
  ];

// Sign up
router.post(
    '/',
    validateSignup,
    asyncHandler(async (req, res) => {
      const { email, password, username } = req.body;
      const user = await User.signup({ email, username, password });
  
      await setTokenCookie(res, user);
  
      return res.json({
        user
      });
    })
  );

  router.get(
    '/:id',
    asyncHandler(async (req, res) => {
      const user = await User.findByPk(req.params.id, {
        include: [
        {
            model: Review,
            as: "review"
        },
        {
          model: Reservation,
          as: "reservation"
        }
      ]
      });

      console.log(user)
  
      return res.json({
        user
      });
    })
  ); 

  router.post('/:id/room', 
  asyncHandler(async (req, res) => {
    const {address, city, country} = req.body
    const user = await User.findByPk(req.params.id);
    const locationFields = {latitude: 37.550407, longitude: -77.432006, address, city, country};
    const location = await Location.addLocation(locationFields);
    const room = await Room.addRoom(user, location, req.body);

    return res.json({room});

  })
  )


module.exports = router;
