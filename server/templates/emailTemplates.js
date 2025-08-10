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
            <div style="text-align: center; padding-bottom: 20px;">
                <a href="[Website Link]" target="_blank" style="text-decoration: none;">
                    <img src="cid:logo.png" alt="MediBookQ Logo" height="40" style="vertical-align: middle;" />
                </a>
            </div>

            <div style="border-top: 1px solid #e0e0e0; padding-top: 20px;">
                <p style="margin: 0 0 15px;">
                    Hello <strong>${name}</strong>,
                </p>

                <p style="margin: 0 0 15px;">
                    We’re excited to have you on board. Your MediBookQ account has been created successfully, and you can now enjoy quick and easy medical bookings at your fingertips.
                </p>

                <p style="margin: 0 0 20px; text-align: center;">
                    <a href="[Dashboard Link]" target="_blank" 
                    style="display: inline-block; background-color: #2b6cb0; color: #fff; padding: 10px 20px; border-radius: 5px; text-decoration: none; font-weight: bold;">
                        Go to Dashboard
                    </a>
                </p>

                <p style="font-size: 13px; color: #888;">
                    If you didn’t sign up for this account, please contact our support team immediately.
                </p>

                <p style="margin-top: 25px;">Thank you,<br /><strong>The MediBookQ Team</strong></p>
            </div>
        </div>
    `;
};

module.exports.passwordResetTemplate = (resetLink) => {
    return `
        <div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 14px; color: #333; line-height: 1.6;">
            <div style="text-align: center; padding-bottom: 20px;">
                <a href="[Website Link]" target="_blank" style="text-decoration: none;">
                    <img src="cid:logo.png" alt="MediBookQ Logo" height="40" style="vertical-align: middle;" />
                </a>
            </div>

            <div style="border-top: 1px solid #e0e0e0; padding-top: 20px;">
                <p style="margin: 0 0 15px;">
                    Hello,
                </p>

                <p style="margin: 0 0 15px;">
                    We received a request to reset your MediBookQ account password. Click the button below to create a new password:
                </p>

                <p style="margin: 0 0 20px; text-align: center;">
                    <a href="${resetLink}" target="_blank" 
                    style="display: inline-block; background-color: #2b6cb0; color: #fff; padding: 10px 20px; border-radius: 5px; text-decoration: none; font-weight: bold;">
                        Reset My Password
                    </a>
                </p>

                <p style="margin: 0 0 10px;">
                    This password reset link will expire in <strong>30 minutes</strong>. If you did not request a password reset, you can safely ignore this email.
                </p>

                <p style="font-size: 13px; color: #888;">
                    For your security, MediBookQ will never ask for your password or login credentials over email, phone, or message.
                </p>

                <p style="margin-top: 25px;">Thank you,<br /><strong>The MediBookQ Team</strong></p>
            </div>
        </div>
    `;
};