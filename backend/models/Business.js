const mongoose = require('mongoose');

const businessSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  contactInfo: { type: String, required: true },
}, { timestamps: true });

const Business = mongoose.model('Business', businessSchema);

module.exports = Business;