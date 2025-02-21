const express = require('express');
const mongoose = require('mongoose');
const Contact = require('../models/Contact'); // Import the Contact model
const router = express.Router();

// POST route to handle the contact form submission
router.post('/contact', async (req, res) => {
  const { fname, email, phone, address } = req.body;

  // Validate the incoming data (e.g., check if fields are empty)
  if (!fname || !email || !phone || !address) {
    return res.status(400).json({ success: false, message: 'Please fill in all fields.' });
  }

  // Simple email validation (can be enhanced)
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, message: 'Please enter a valid email address.' });
  }

  try {
    // Create a new Contact document
    const newContact = new Contact({
      fname,
      email,
      phone,
      address
    });

    // Save the contact to the database
    await newContact.save();

    // Return a success message
    return res.status(200).json({ success: true, message: 'Your contact information has been successfully submitted.' });
  } catch (error) {
    console.error('Error saving contact:', error);
    return res.status(500).json({ success: false, message: 'An error occurred while submitting your contact information. Please try again later.' });
  }
});

module.exports = router;
