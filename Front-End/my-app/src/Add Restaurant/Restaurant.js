import React, { useState } from "react";
import "./Restaurant.css";
import ChefBooking from "../Chef/ChefBooking";
import Chef from "../Chef/Chef";
import Footer from "../Footer/Footer";

const Restaurant = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: "",
    cuisine: "",
    yourname: "",
    contact: "",
    address: "",
    foodType: "",
    rating: "",
  });

  // State for error/success messages
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("error"); // either 'error' or 'success'

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send data to the backend
      const response = await fetch("http://localhost:5000/api/restaurant", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Success: Show success message and reset form
        setMessage("Restaurant added successfully!");
        setMessageType("success");
        setFormData({
          name: "",
          cuisine: "",
          yourname: "",
          contact: "",
          address: "",
          foodType: "",
          rating: "",
        });
      } else {
        // Error: Show error message from backend
        setMessage(data.message || "An error occurred.");
        setMessageType("error");
      }
    } catch (error) {
      // Handle unexpected errors
      setMessage("An error occurred while adding the restaurant.");
      setMessageType("error");
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="Rest-chef">
        <h1>Experience Chef</h1>
        <Chef />
      </div>
      <div className="Restaurant-box">
        <div className="Rest-boxone">
          <h2>Add New Restaurant</h2>
          <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="name">Restaurant Name:</label>
            <input
              type="text"
              id="restaurant-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your restaurant name"
              required
            />

            <label htmlFor="cuisine">Cuisine Type:</label>
            <input
              type="text"
              id="cuisine"
              name="cuisine"
              value={formData.cuisine}
              onChange={handleChange}
              placeholder="Enter your cuisine type"
              required
            />

            <label htmlFor="yourname">Full Name:</label>
            <input
              type="text"
              id="yourname"
              name="yourname"
              value={formData.yourname}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />

            <label htmlFor="contact">Phone Number:</label>
            <input
              type="tel"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
            />

            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your full address"
              required
            />

            <label htmlFor="rating">Rating:</label>
            <input
              type="text"
              id="rating"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              placeholder="Enter your restaurant's rating"
              required
            />

            <label>Food Type:</label>
            <div className="food">
              <label>
                <input
                  type="radio"
                  name="foodType"
                  value="Veg"
                  checked={formData.foodType === "Veg"}
                  onChange={handleChange}
                />
                Veg
              </label>
              <label>
                <input
                  type="radio"
                  name="foodType"
                  value="Non-Veg"
                  checked={formData.foodType === "Non-Veg"}
                  onChange={handleChange}
                />
                Non-Veg
              </label>
            </div>

            <button type="submit" className="Rest-button">
              Add Restaurant
            </button>
          </form>

          {/* Display the message */}
          {message && (
            <p className={messageType === "error" ? "error-message" : "success-message"}>
              {message}
            </p>
          )}
        </div>
        <div className="Rest-boxtwo">
          <ChefBooking />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Restaurant;
