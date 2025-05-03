import React, { useEffect, useState } from 'react';
import '../assets/css/Home.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// Images
import hospital1 from '../assets/imgs/hospital1.jpg';
import hospital2 from '../assets/imgs/hospital2.avif';
import doctorIcon from '../assets/imgs/doctor-2.webp'; // Add icon for features
import technology from '../assets/imgs/technology.jpg';
import care from '../assets/imgs/care.avif';
import Footer from '../components/Footer';

const images = [hospital1, hospital2,technology];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    doctor: '',
    reason: ''
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleAppointmentClick = () => {
    setShowAppointmentModal(true);
  };

  const handleCloseModal = () => {
    setShowAppointmentModal(false);
  };

  const handleEmergencyClick = () => {
    alert('🚨 Emergency Care Activated! Our team is on standby. Call +91 98765 43210 Immediately!');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment request submitted!\nName: ${formData.name}\nDate: ${formData.date}\nDoctor: ${formData.doctor || 'Any available'}`);
    setShowAppointmentModal(false);
    setFormData({
      name: '',
      date: '',
      doctor: '',
      reason: ''
    });
  };

  return (
    <>
    
    <div className="home-container">
      {/* Navbar */}
     

      {/* Image Slider */}
      <div className="slider" id="home">
        <img src={images[currentImage]} alt="Hospital" class="full-width-image"/>
        <div className="slider-overlay"></div>
        <div className="overlay-text">
          <h1>Exceptional Healthcare Experience</h1>
          <p>Where compassion meets innovation for your complete wellbeing.</p>
          <div className="cta-buttons">
            <button className="btn purple" onClick={handleAppointmentClick}>
              <span>Book Appointment</span>
              <span className="icon">→</span>
            </button>
            <button className="btn orange" onClick={handleEmergencyClick}>
              <span>Emergency Help</span>
              <span className="icon">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="section-title">Why Choose Us</h2>
        <div className="features-grid">
          <div className="feature-card">
            <img src={doctorIcon} alt="Expert Doctors" className="feature-icon" />
            <h3>Expert Doctors</h3>
            <p>Board-certified specialists with years of experience in their fields.</p>
          </div>
          <div className="feature-card">
          <img src={technology} alt="Technology" className="feature-icon" />
            <h3>Advanced Technology</h3>
            <p>State-of-the-art medical equipment for accurate diagnosis and treatment.</p>
          </div>
          <div className="feature-card">
          <img src={care} alt="Expert care" className="feature-icon" />
            <h3>Personalized Care</h3>
            <p>Tailored treatment plans designed specifically for your needs.</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stat-item">
          <h3>10,000+</h3>
          <p>Patients Treated</p>
        </div>
        <div className="stat-item">
          <h3>200+</h3>
          <p>Expert Doctors</p>
        </div>
        <div className="stat-item">
          <h3>50+</h3>
          <p>Specialities</p>
        </div>
        <div className="stat-item">
          <h3>24/7</h3>
          <p>Emergency Service</p>
        </div>
      </section>

      {/* Appointment Modal */}
      {showAppointmentModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close-button" onClick={handleCloseModal}>&times;</span>
            <h2>Request an Appointment</h2>
            <form className="appointment-form" onSubmit={handleSubmit}>
              <input 
                type="text" 
                name="name"
                placeholder="Your Full Name" 
                value={formData.name}
                onChange={handleInputChange}
                required 
              />
              <input 
                type="date" 
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                required 
              />
              <input 
                type="tel" 
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
              <select 
                name="department"
                value={formData.department}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Department</option>
                <option value="cardiology">Cardiology</option>
                <option value="neurology">Neurology</option>
                <option value="orthopedics">Orthopedics</option>
                <option value="pediatrics">Pediatrics</option>
              </select>
              <textarea 
                name="reason"
                placeholder="Briefly describe your reason for appointment" 
                value={formData.reason}
                onChange={handleInputChange}
                required
                rows="4"
              ></textarea>
              <button type="submit">Confirm Appointment</button>
            </form>
          </div>
        </div>
        
      )}
          <Footer/>

    </div>
   
    </>
  );
};

export default Home;