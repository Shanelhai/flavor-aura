const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  fname: String,
  email: String,
  phone: String,
  address: String
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
