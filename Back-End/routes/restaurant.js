const express = require('express');
const Restaurant = require('../models/Restaurant');
const router = express.Router();

// POST endpoint to add a new restaurant
router.post('/', async (req, res) => {
  const { name, address, cuisine, yourname, rating, contact, foodType } = req.body;

  // Validate the data (check if all required fields are provided)
  if (!name || !address || !cuisine || !yourname || !rating || !contact || !foodType) {
    return res.status(400).json({ message: 'All fields are required!' });
  }

  // Create a new restaurant instance
  const newRestaurant = new Restaurant({
    name,
    address,
    cuisine,
    yourname,
    rating,
    contact,
    foodType
  });

  try {
    // Save the new restaurant to the database
    await newRestaurant.save();
    res.status(201).json({ message: 'Restaurant added successfully!', restaurant: newRestaurant });
  } catch (error) {
    console.error('Error saving restaurant:', error);
    res.status(500).json({ message: 'An error occurred while adding the restaurant.' });
  }
});

module.exports = router;
