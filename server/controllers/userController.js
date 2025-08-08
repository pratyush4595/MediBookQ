const userModel = require('../models/userModel');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');

// Nodemailer transporter setup using environment variables
const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
})


// Setup Three step registration

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

        // Setup Email HTML
        const html = `
            <div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 14px; color: #333; line-height: 1.6;">
                <div style="text-align: center; padding-bottom: 20px;">
                    <a href="[Website Link]" target="_blank" style="text-decoration: none;">
                        <img src="cid:logo.png" alt="MediBookQ Logo" height="40" style="vertical-align: middle;" />
                    </a>
                </div>

                <div style="border-top: 1px solid #e0e0e0; padding-top: 20px;">
                    <p style="font-size: 15px; margin: 0 0 10px;">Hello,</p>

                    <p style="margin: 0 0 15px;">
                        To verify your identity on <strong>MediBookQ</strong>, please use the One-Time Password (OTP) below:
                    </p>

                    <p style="font-size: 26px; font-weight: bold; letter-spacing: 3px; color: #2b6cb0; margin: 0 0 20px;">
                        ${otp}
                    </p>

                    <p style="margin: 0 0 10px;">This OTP is valid for <strong>5 minutes</strong>.</p>

                    <p style="margin: 0 0 10px;">
                        Please <strong>do not share</strong> this OTP with anyone. If you didn’t request this, you can safely ignore this email.
                    </p>

                    <p style="font-size: 13px; color: #888;">
                        MediBookQ will never ask for your OTP or login credentials over email, phone, or message.
                        Stay alert and protect your account from phishing attempts.
                    </p>

                    <p style="margin-top: 25px;">Thank you,<br /><strong>The MediBookQ Team</strong></p>
                </div>
            </div>
        `

        // Email Content
        const mailOptions = {
            from: `"MediBookQ" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: 'Your MediBookQ OTP Code',
            html: html
        }

        // Send the Email
        await transporter.sendMail(mailOptions);

        res.status(200).json({ message: 'OTP sent successully via email' });
    } catch (error) {
        console.error('Error sending OTP', error);
        res.status(500).json({ message: 'Failed to send OTP' });
    }
};