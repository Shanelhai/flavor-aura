import React, { useState } from "react";
import './Contact.css';
import Footer from "../Footer/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    fname: "",
    email: "",
    phone: "",
    address: "",
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { fname, email, phone, address } = formData;

    // Check for empty fields before submitting
    if (!fname || !email || !phone || !address) {
      setError("Please fill in all fields.");
      return;
    }

    // Simple email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/contact/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setSuccess(result.message);
        setError(null);
        setFormData({
          fname: "",
          email: "",
          phone: "",
          address: "",
        });
      } else {
        setError(result.message);
        setSuccess(null);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('An error occurred while submitting your information. Please try again later.');
      setSuccess(null);
    }
  };

  return (
    <>
      <div className="contact-container">
        <div className="contact-box">
          <h1>Contact Us</h1>
          <p>We’d love to hear from you! Whether you have a question, need assistance with your booking, or would like to share feedback, our dedicated team is here to support you every step of the way.</p>
        </div>

        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <label htmlFor="fname">Full name:</label><br />
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="Your full name"
              value={formData.fname}
              onChange={handleChange}
              required
            /><br />

            <label htmlFor="email">Email:</label><br />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
            /><br />

            <label htmlFor="phone">Phone number:</label><br />
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            /><br />

            <label htmlFor="address">Address:</label><br />
            <textarea
              id="address"
              name="address"
              rows="6"
              cols="50"
              placeholder="Write your address..."
              value={formData.address}
              onChange={handleChange}
              required
            ></textarea><br />

            <button type="submit">Submit</button>
          </form>

          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">{success}</p>}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
