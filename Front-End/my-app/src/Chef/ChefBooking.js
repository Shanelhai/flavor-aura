import React, { useState } from 'react';
import axios from 'axios';
import Chefdata from './Chefdata'; // Ensure Chefdata is correctly imported
import './Chef.css';

const ChefBooking = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    address: '',
    chefId: '', 
    time: '',
    amPm: 'AM',
  });

  const [selectedChef, setSelectedChef] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const updatedData = { ...prevData, [name]: value };

      if (name === 'chefId') {
        const chef = Chefdata.find((chef) => chef.id === parseInt(value));
        setSelectedChef(chef);
      }

      return updatedData;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Combine time and am/pm into a full time string before submission
    const formattedTime = `${formData.time} ${formData.amPm}`;

    // Update formData with formatted time
    const updatedFormData = { ...formData, time: formattedTime };

    // Send data to backend
    axios
      .post('http://localhost:5000/api/chefBooking', updatedFormData)
      .then((response) => {
        console.log('Booking Data Submitted:', response.data);

        // Clear form data after submission
        setFormData({
          fullName: '',
          phoneNumber: '',
          address: '',
          chefId: '',
          time: '',
          amPm: 'AM',
        });
        setSelectedChef(null);
      })
      .catch((error) => {
        console.error('Error submitting booking:', error);
      });
  };

  return (
    <div className="Booking-chefc">
      <h2>Chef Booking Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Full Name Input */}
        <div>
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
        </div>

        {/* Phone Number Input */}
        <div>
          <label>Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />
        </div>

        {/* Address Input */}
        <div>
          <label>Full Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your full address"
            required
          ></textarea>
        </div>

        {/* Chef Selection Dropdown */}
        <div>
          <label>Select Chef</label>
          <select
            name="chefId"
            value={formData.chefId}
            onChange={handleChange}
            required
          >
            <option value="">Select a Chef</option>
            {Chefdata.map((chef) => (
              <option key={chef.id} value={chef.id}>
                {chef.name}
              </option>
            ))}
          </select>
        </div>

        {/* Display the selected chef's name and age */}
        {selectedChef && (
          <div>
            <h3>Chef Details</h3>
            <p>Name: {selectedChef.name}</p>
            <p>Age: {selectedChef.age}</p>
          </div>
        )}

        {/* Time Input */}
        <div>
          <label>Select Time</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>

        {/* AM/PM Dropdown */}
        <div>
          <label>AM/PM</label>
          <select
            name="amPm"
            value={formData.amPm}
            onChange={handleChange}
            required
          >
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
        </div>

        {/* Submit Button */}
        <div>
          <button type="submit" className="booking-chef">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChefBooking;
