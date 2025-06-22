const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  city: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Contact', contactSchema);
