const mongoose = require('mongoose');

const chefBookingSchema = new mongoose.Schema({
  fullName: String,
  phoneNumber: String,
  address: String,
  chefId: String, // Store the selected chef's ID
  time: String,
  amPm: { type: String, default: 'AM' }
});

const ChefBooking = mongoose.model('ChefBooking', chefBookingSchema);

module.exports = ChefBooking;
