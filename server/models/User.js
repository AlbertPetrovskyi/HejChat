// models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: false,
    unique: true,
    sparse: true
  },
  password: {
    type: String,
    required: false
  },
  walletAddress: {
    type: String,
    required: true,
    unique: true
  },
  isAirdropRegistered: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', UserSchema);