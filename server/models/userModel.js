const mongoose = require('mongoose');

// Create user schema
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        lowercase: true,
        unique: true,
    },
    otp: {
        type: String
    },
    otpExpiry: {
        type: Date,
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    name: {
        type: String,
        trim: true
    },
    usrename: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        sparse: true,
        minlength: [5, 'Username must be atleast 5 characters long']
    },
    password: {
        type: String,
        trim: true,
        minlength: [6, 'Password must be atleast 6 characters long']
    }
}, { timestamps: true });

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;