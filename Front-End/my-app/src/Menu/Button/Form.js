import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Form.css';

const Form = ({ selectedItems }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: ''
  });

  const [itemQuantities, setItemQuantities] = useState(
    selectedItems.reduce((acc, item) => {
      acc[item.id] = 1; // Default quantity to 1 for each item
      return acc;
    }, {})
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      ...formData,
      selectedItems: selectedItems.map(item => ({
        ...item,
        quantity: itemQuantities[item.id] // Attach selected quantity to each item
      }))
    };

    axios
      .post("http://localhost:5000/api/form", data)
      .then((response) => {
        alert('Your order has been booked!');
        setFormData({
          name: '',
          phone: '',
          address: ''
        });
        setItemQuantities(
          selectedItems.reduce((acc, item) => {
            acc[item.id] = 1; // Reset quantities to 1 after submission
            return acc;
          }, {})
        );
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleQuantityChange = (e, itemId) => {
    const newQuantity = Math.max(1, e.target.value); // Prevent negative or zero quantity
    setItemQuantities({
      ...itemQuantities,
      [itemId]: newQuantity
    });
  };

  const calculateTotalPrice = () => {
    return selectedItems.reduce((total, item) => {
      return total + item.price * itemQuantities[item.id];
    }, 0).toFixed(2); // Calculate total and format to 2 decimal places
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const titles = [
    "Vegetarian", 
    "Non-Vegetarian", 
    "Bread", 
    "Desserts",
    "Beverages",
    "Ice Cream"
  ];
  
  const texts = [
    "Fresh, vibrant, and bursting with life—nature’s goodness on your plate.",
    "Savor every bite, and taste the wild essence of flavor.",
    "Warm, comforting, and irresistible—freshly baked bread straight from heaven.",
    "Sweet, indulgent, and delightful moments that bring joy with every bite.",
    "Refreshing and revitalizing, each sip offers a perfect moment of bliss.",
    "Chill out and enjoy creamy, dreamy flavors with every scoop."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % titles.length);
    }, 4000); // Update every 4 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <>
      <div className='form-box'>
        <div className='box-tag'>
          <h1 className='heading-tag'>{titles[currentIndex]}</h1>
          <p className='paragraph-tag'>{texts[currentIndex]}</p>
        </div>
        <div id="formContainer" className='formcontainer'>
          <h2>Order Details</h2>
          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <label htmlFor="name">Name:</label><br />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            /><br /><br />

            {/* Phone Number Field */}
            <label htmlFor="phone">Phone Number:</label><br />
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            /><br /><br />

            {/* Address Field */}
            <label htmlFor="address">Address:</label><br />
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              rows="4"
              cols="50"
              required
            ></textarea><br /><br />

            {/* Display Selected Items with Quantity */}
            <h3>Selected Items</h3>
            <ul>
              {selectedItems.map(item => (
                <li key={item.id}>
                  <span>{item.name} - ₹{item.price} ({item.category})</span>
                  <br />
                  <label htmlFor={`quantity-${item.id}`}>Quantity:</label>
                  <input
                    type="number"
                    id={`quantity-${item.id}`}
                    value={itemQuantities[item.id]}
                    onChange={(e) => handleQuantityChange(e, item.id)}
                    min="1"
                  />
                </li>
              ))}
            </ul>

            {/* Total Price */}
            <p className='total'>Total Price: ₹{calculateTotalPrice()}</p>

            {/* Submit Button */}
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
