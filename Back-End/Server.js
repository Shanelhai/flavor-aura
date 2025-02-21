const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize the Express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/Restaurant', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to MongoDB!");
}).catch((error) => {
  console.log("Error connecting to MongoDB:", error);
});

// Routes
const restaurantRoutes = require('./routes/restaurant');
const contactRoutes = require('./routes/contact');
const formRoutes = require('./routes/form');
const chefBookingRoutes = require('./routes/chefBooking');

// Use routes
app.use('/api/restaurant', restaurantRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/form', formRoutes);
app.use('/api/chefBooking', chefBookingRoutes);

// Start server
const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
