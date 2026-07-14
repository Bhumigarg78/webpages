const mongoose = require('mongoose');

const subAdminSchema = new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  referralCode: { type: String, required: true, unique: true },
  status: { type: String, default: 'Active' },
  createdDate: { type: String, required: true }
});

module.exports = mongoose.model('SubAdmin', subAdminSchema);
