const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const sendEmail = require('../utils/emailService');
const emailTemplates = require('../templates/emailTemplates');


// Setup Three step registration process

// 1. Send OTP
module.exports.sendOtp = async (req, res) => {
    const { email } = req.body;

    try {
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const otpExpiry = Date.now() + 5 * 60 * 1000; // 5 minures

        let user = await userModel.findOne({ email });

        if (!user) {
            user = await userModel.create({ email, otp, otpExpiry });
        } else {
            await userModel.findOneAndUpdate(
                { email },
                { otp, otpExpiry }
            );
        }

        // Send the OTP Email
        await sendEmail(email, 'Your MediBookQ OTP Code', emailTemplates.otpTemplate(otp));

        res.status(200).json({ message: 'OTP sent successully via email' });
    } catch (error) {
        console.error('Error sending OTP', error);
        res.status(500).json({ message: 'Failed to send OTP' });
    }
};