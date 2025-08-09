const express = require('express');
const { body, validationResult } = require('express-validator');
const userController = require('../controllers/userController');
const router = express.Router();
const validationMiddleware = require('../utils/validationMiddleware');

router.post('/register/send-otp',
    body('email').trim().isEmail().withMessage('A valid email is required'),
    validationMiddleware(validationResult),
    userController.sendOtp
);

router.post('/register/verify-otp',
    body('email').trim().isEmail().withMessage('A valid email is required'),
    body('otp').trim().isLength({ min: 6, max: 6 }),
    validationMiddleware(validationResult),
    userController.verifyOtp
)

module.exports.router = router;
