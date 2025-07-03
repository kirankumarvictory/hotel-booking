const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  roomType: String,
  checkIn: Date,
  checkOut: Date,
});

module.exports = mongoose.model('Booking', BookingSchema);
