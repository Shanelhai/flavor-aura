const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  name: String,
  phone: String,
  address: String,
  selectedItems: Array, // store the selected items data
  itemQuantities: Object, // store quantities as object, e.g., {itemId: quantity}
});

const Form = mongoose.model('Form', formSchema);

module.exports = Form;
