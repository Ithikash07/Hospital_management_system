import React, { useState } from 'react';
import '../assets/css/about.css';
import hospitalBuilding from '../assets/imgs/hospital-building.webp';
import medicalTeam from '../assets/imgs/medical-team.jpg';
import innovationIcon from '../assets/imgs/innovation-icon.jpg';
import Footer from '../components/Footer';

const AboutUs = () => {
  const [expandedCards, setExpandedCards] = useState({
    primary: false,
    critical: false,
    lab: false,
    cancer: false,
    pregnancy: false,
    dialysis: false
  });

  const toggleCard = (card) => {
    setExpandedCards(prev => ({
      ...prev,
      [card]: !prev[card]
    }));
  };

  const serviceDetails = {
    primary: {
      title: "Primary Health Care",
      description: "The ultimate goal of primary health care is better health for all. We provide an easily accessible route to care, whatever the patient's problem.",
      extended: [
        "24/7 general physician availability",
        "Preventive health checkups",
        "Vaccination programs",
        "Chronic disease management",
        "Health education and counseling"
      ]
    },
    critical: {
      title: "Critical Care",
      description: "Our hospitals have specialized critical care areas as per the specialty requirements with support from super specialists.",
      extended: [
        "24-bedded ICU with 1:1 nurse-patient ratio",
        "Advanced cardiac life support",
        "Neurological intensive care",
        "Pediatric critical care",
        "Post-operative recovery units"
      ]
    },
    lab: {
      title: "Modern Medical Lab",
      description: "We offer patients the best in diagnostic care without diverting focus from core healthcare services.",
      extended: [
        "Fully automated pathology lab",
        "Molecular diagnostics",
        "Radiology and imaging center",
        "Same-day test results",
        "Home sample collection service"
      ]
    },
    cancer: {
      title: "Cancer Care",
      description: "We provide comprehensive cancer care with the best treatment facilities. Our expert team of oncologists examines every case jointly.",
      extended: [
        "Medical, surgical and radiation oncology",
        "PET-CT scanning",
        "Targeted therapy",
        "Palliative care",
        "Support groups and rehabilitation"
      ]
    },
    pregnancy: {
      title: "Pregnancy & Delivery",
      description: "We offer a host of facilities to ensure high quality antenatal care for expectant mothers, new mothers and babies.",
      extended: [
        "High-risk pregnancy management",
        "3D/4D ultrasound",
        "Water birth facilities",
        "Neonatal intensive care",
        "Lactation counseling"
      ]
    },
    dialysis: {
      title: "Dialysis",
      description: "Our hospital runs an exclusive Institute for Diabetes, Endocrine and Metabolic Disorders with state-of-the-art dialysis facilities.",
      extended: [
        "Hemodialysis and peritoneal dialysis",
        "24-hour dialysis unit",
        "Vascular access procedures",
        "Nutritional counseling",
        "Continuous renal replacement therapy"
      ]
    }
  };

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>About Our Hospital</h1>
          <p>Compassionate care meets cutting-edge technology</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-text">
            <h2>Our Mission</h2>
            <p>
              To provide exceptional healthcare services through innovation, compassion, 
              and excellence. We are committed to improving the health and well-being 
              of our community by delivering patient-centered care with the highest 
              standards of quality and safety.
            </p>
          </div>
          <div className="mission-image">
            <img src={hospitalBuilding} alt="Modern hospital facility" />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Compassion</h3>
            <p>Treating every patient with empathy, dignity, and respect</p>
          </div>
          <div className="value-card">
            <h3>Excellence</h3>
            <p>Delivering the highest quality care through continuous improvement</p>
          </div>
          <div className="value-card">
            <img src={innovationIcon} alt="Innovation icon" />
            <h3>Innovation</h3>
            <p>Embracing advanced technologies and treatments for better outcomes</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="team-image">
            <img src={medicalTeam} alt="Our medical team" />
          </div>
          <div className="team-text">
            <h2>Our Expert Team</h2>
            <p>
              Our hospital is staffed by board-certified physicians, skilled nurses, 
              and dedicated healthcare professionals who bring years of experience 
              and specialized training. We work collaboratively to provide 
              comprehensive, personalized care for every patient.
            </p>
            <div className="team-stats">
              <div className="stat">
                <h3>200+</h3>
                <p>Specialists</p>
              </div>
              <div className="stat">
                <h3>500+</h3>
                <p>Staff Members</p>
              </div>
              <div className="stat">
                <h3>50+</h3>
                <p>Specialties</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Services Section */}
      <section className="medical-services">
        <h2>Our Medical Services</h2>
        <div className="services-intro">
          <p>We provide top & best medical services in our city with cutting-edge technology and compassionate care.</p>
        </div>

        <div className="services-grid">
          {Object.entries(serviceDetails).map(([key, service]) => (
            <div className="service-card" key={key}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              
              {expandedCards[key] && (
                <div className="service-details">
                  <h4>Services Include:</h4>
                  <ul>
                    {service.extended.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              <button 
                className="read-more"
                onClick={() => toggleCard(key)}
              >
                {expandedCards[key] ? 'Show Less' : 'Read More'}
                <span className="arrow-icon">{expandedCards[key] ? '↑' : '↓'}</span>
              </button>
            </div>
          ))}
        </div>
      </section>
      <Footer/>


    </div>
  );
};

export default AboutUs;