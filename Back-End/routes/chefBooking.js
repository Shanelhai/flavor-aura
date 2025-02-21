const express = require('express');
const router = express.Router();
const ChefBooking = require('../models/ChefBooking');

// POST endpoint to save chef booking data
router.post('/', async (req, res) => {
  try {
    const chefBooking = new ChefBooking(req.body);
    await chefBooking.save();
    res.status(200).json({ message: 'Chef booking successful!' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving chef booking data', error });
  }
});

module.exports = router;
