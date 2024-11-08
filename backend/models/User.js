const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profileImage: { type: String },
  lastLogin: { type: Date },
  activityLogs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Activity' }],
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  twoFactorSecret: { type: String },
});

module.exports = mongoose.model('User', UserSchema);
