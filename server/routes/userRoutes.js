const express = require('express');
const { body, validationResult } = require('express-validator');
const userController = require('../controllers/userController');
const router = express.Router();

router.post('/register/send-otp',
    body('email').trim().isEmail().withMessage('A valid email is required'),
    (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Invalid data'
            });
        }

        next()
    },
    userController.sendOtp
);

module.exports.router = router;
