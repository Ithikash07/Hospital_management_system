import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import useNavigate
import '../assets/css/contact.css';

const ContactUs = () => {
  const navigate = useNavigate(); // ✅ Initialize navigate

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us!');
    setFormData({ name: '', email: '', phone: '', message: '' });

    // ✅ Redirect to home page
    navigate('/');
  };

  return (
    <>
      <div className="contact-container">
        {/* Contact Info Cards */}
        <div className="info-cards">
          <div className="info-card">
            <div className="card-icon">📞</div>
            <h3>Phone Number</h3>
            <p>044 2251 6002 / 6004</p>
          </div>
          <div className="info-card">
            <div className="card-icon">📧</div>
            <h3>Email Address</h3>
            <p>dean@mitindia.edu</p>
          </div>
          <div className="info-card">
            <div className="card-icon">📍</div>
            <h3>Our Location</h3>
            <p>Madras Institute of Technology<br />Chrompet, Chennai - 600044</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h2>Contact Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input 
                type="text" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                required 
                placeholder="Enter your phone"
              />
            </div>
            <div className="form-group">
              <label>Your Message</label>
              <textarea 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                rows="5" 
                required 
                placeholder="Type your message..."
              ></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;