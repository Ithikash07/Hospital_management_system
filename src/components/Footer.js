import React from 'react';
import '../assets/css/footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>CONTACT ADDRESS</h3>
          <address>

            <p>Madras Institute of Technnology</p>
            <p>Chrompet</p>
            <p>Chennai 600044</p>
            <p>Email: dean@mitindia.edu</p>
            <p>Office: 044 2251 6002/6004</p>
          </address>
        </div>

        <div className="footer-section">
          <h3>USEFUL LINKS</h3>
          <ul className="footer-links">
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>QUICK LINKS</h3>
          <ul className="footer-links">
            <li><a href="/appointment">Book Appointment</a></li>
            <li><a href="/find-doctor">Our Doctors</a></li>
            <li><a href="/faq">FAQs</a></li>
            <li><a href="/emergency">Emergency</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; Copyright {new Date().getFullYear()} - INDIA HOSPITAL | All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;