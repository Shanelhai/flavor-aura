const mongoose = require('mongoose');

// Define the restaurant schema
const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  cuisine: { type: String, required: true },
  yourname: { type: String, required: true },
  rating: { type: String, required: true },
  contact: { type: String, required: true },
  foodType: { type: String, enum: ['Veg', 'Non-Veg'], required: true }
}, { timestamps: true });

// Create and export the model
const Restaurant = mongoose.model('Restaurant', restaurantSchema);
module.exports = Restaurant;
