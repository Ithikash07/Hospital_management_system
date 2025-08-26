import React from 'react';
import '../assets/css/footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="#5f2dee"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="#5f2dee"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#5f2dee"></path>
        </svg>
      </div>
      
      <div className="footer-container">
        <div className="footer-section">
          <h3>OUR HOSPITAL</h3>
          <p className="footer-description">
            Providing exceptional healthcare with cutting-edge technology and compassionate care since 1985.
          </p>
          <div className="footer-social">
            <a href="https://facebook.com"><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
            <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
            <a href="https://linkedin.com"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>

        <div className="footer-section">
          <h3>QUICK LINKS</h3>
          <ul className="footer-links">
            <li><Link to="/"><i className="fas fa-chevron-right"></i> Home</Link></li>
            <li><Link to="/find-doctor"><i className="fas fa-chevron-right"></i> Our Doctors</Link></li>
            <li><Link to="/appointment"><i className="fas fa-chevron-right"></i> Book Appointment</Link></li>
            <li><Link to="/emergency"><i className="fas fa-chevron-right"></i> Emergency</Link></li>
            <li><Link to="/faq"><i className="fas fa-chevron-right"></i> FAQs</Link></li>
            <li><Link to="/about"><i className="fas fa-chevron-right"></i> About Us</Link></li>
            
          </ul>
        </div>

        <div className="footer-section">
          <h3>DEPARTMENTS</h3>
          <ul className="footer-links">
            <li><Link to="/cardiology"><i className="fas fa-heartbeat"></i> Cardiology</Link></li>
            <li><Link to="/neurology"><i className="fas fa-brain"></i> Neurology</Link></li>
            <li><Link to="/orthopedics"><i className="fas fa-bone"></i> Orthopedics</Link></li>
            <li><Link to="/pediatrics"><i className="fas fa-baby"></i> Pediatrics</Link></li>
            <li><Link to="/surgery"><i className="fas fa-procedures"></i> General Surgery</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>CONTACT US</h3>
          <address className="footer-contact">
            <p><i className="fas fa-map-marker-alt"></i> 123 Health Street, Medical City, Chennai 600001</p>
            <p><i className="fas fa-phone-alt"></i> +91 98765 43210</p>
            <p><i className="fas fa-envelope"></i> info@indiahospital.com</p>
            <p><i className="fas fa-clock"></i> Open 24/7 Emergency Services</p>
          </address>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-newsletter">
          <h4>Subscribe to Our Newsletter</h4>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email address" required />
            <button type="submit"><i className="fas fa-paper-plane"></i></button>
          </form>
        </div>
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} India Hospital. All Rights Reserved. | <Link to="/privacy">Privacy Policy</Link> | <Link to="/terms">Terms of Service</Link>| <Link to="/contact">Queries</Link></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;