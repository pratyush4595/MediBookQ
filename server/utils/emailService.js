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

// Setup send email function using parameters
const sendEmail = async (to, subject, html) => {
    const mailOptions = {
        from: `"MediBookQ" <${process.env.EMAIL_USER}>`,
        to,
        subject,
        html
    };

    try {
        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error(`Failed to send email to ${to}:`, error);
        throw new Error('Email sending failed');
    }
};

module.exports = sendEmail;