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
        const hashedOTP = await bcrypt.hash(otp, 10);
        const otpExpiry = Date.now() + 5 * 60 * 1000; // 5 minures

        let user = await userModel.findOne({ email });

        if (!user) {
            user = await userModel.create({ email, otp: hashedOTP, otpExpiry });
        } else {

            // Check wheather the user already completed the registration
            if (user.usrename && user.password) {
                return res.status(400).json({ message: 'Email already registered' });
            }

            await userModel.findOneAndUpdate(
                { email },
                { otp: hashedOTP, otpExpiry }
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

// 2. Verify OTP
module.exports.verifyOtp = async (req, res) => {
    const { email, otp } = req.body;

    try {
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (user.otpExpiry < Date.now()) {
            return res.status(400).json({ message: 'OTP expired' });
        }

        const isMatch = await bcrypt.compare(otp, user.otp);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid OTP' });
        }

        await userModel.findOneAndUpdate(
            { email },
            {
                isVerified: true,
                $unset: { otp: "", otpExpiry: "" }
            }
        );

        res.status(200).json({ message: 'OTP verified successfully' });
    } catch (error) {
        console.error('Error: ', error);
        res.status(500).json({ message: 'Failed to verify OTP' });
    }
};

// 3. Complete registration
module.exports.completeRegistration = async (req, res) => {
    const { email, name, username, password } = req.body;

    try {
        const user = await userModel.findOne({ email });

        if (!user || !user.isVerified) {
            return res.status(400).json({ message: 'Email not verified' })
        }

        // Check if username is already taken
        const existingUsername = await userModel.findOne({ username });
        if (existingUsername) {
            return res.status(400).json({ message: 'Username already taken' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        await userModel.findOneAndUpdate(
            { email },
            { name, username, password: hashedPassword }
        );

        await sendEmail(email, 'Welcome to MediBookQ 🎉', emailTemplates.welcomeTemplate(name));

        res.status(201).json({ message: 'Resistration completed successfully' });
    } catch (error) {
        console.error('Complete registration error: ', error);
        res.status(500).json({ message: 'Failed to complete registration' });
    }
};