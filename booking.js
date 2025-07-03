const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

router.post('/', async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    await newBooking.save();
    res.status(200).json({ message: 'Booking successful!' });
  } catch (err) {
    res.status(500).json({ message: 'Error saving booking.' });
  }
});

module.exports = router;
