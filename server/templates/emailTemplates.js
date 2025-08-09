module.exports.otpTemplate = (otp) => {
    return `
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
    `;
};

module.exports.welcomeTemplate = (name) => {
    return `
        <div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 14px; color: #333; line-height: 1.6;">
            <h2 style="color: #2b6cb0; text-align: center;">Welcome to MediBookQ!</h2>
            <p>Hi ${name},</p>
            <p>We’re excited to have you on board! MediBookQ is here to make booking your medical appointments fast and easy.</p>
            <p>Start exploring now and make your healthcare journey seamless.</p>
            <p>Thank you,<br/><strong>The MediBookQ Team</strong></p>
        </div>
    `;
};

module.exports.passwordResetTemplate = (resetLink) => {
    return `
        <div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 14px; color: #333; line-height: 1.6;">
            <h2 style="color: #2b6cb0; text-align: center;">Password Reset Request</h2>
            <p>Hello,</p>
            <p>We received a request to reset your MediBookQ account password. Click the link below to reset it:</p>
            <p style="text-align: center;"><a href="${resetLink}" style="background: #2b6cb0; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Reset Password</a></p>
            <p>If you did not request this, you can safely ignore this email.</p>
            <p>Thank you,<br/><strong>The MediBookQ Team</strong></p>
        </div>
    `;
};