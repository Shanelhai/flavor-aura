const express = require('express');
const router = express.Router();
const Form = require('../models/Form');

// POST endpoint to save form data
router.post('/', async (req, res) => {
  try {
    const form = new Form(req.body);
    await form.save();
    res.status(200).json({ message: 'Form data saved successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving form data', error });
  }
});

module.exports = router;
