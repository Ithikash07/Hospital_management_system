import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/departments.css';
import Footer from '../components/Footer';

// Department Icons
import heartIcon from '../assets/imgs/heart-icon.png';
import brainIcon from '../assets/imgs/brain-icon.jpg';
import boneIcon from '../assets/imgs/ortho.jpg';
import babyIcon from '../assets/imgs/baby.jpg';

const Departments = () => {
  const navigate = useNavigate();

  // Your actual doctor data (from FindDoctor.jsx)
  const doctors = [
    {
      id: 1,
      name: "Dr. Robert",
      specialty: "Cardiologist",
      rating: 4.9,
      experience: "12 years",
      location: "Main Hospital Chennai"
    },
    {
      id: 2,
      name: "Dr. Ramakrishna",
      specialty: "Neurologist",
      rating: 4.8,
      experience: "9 years",
      location: "North Clinic"
    },
    {
      id: 3,
      name: "Dr. Williams",
      specialty: "Pediatrician",
      rating: 4.7,
      experience: "7 years",
      location: "South Clinic"
    },
    {
      id: 4,
      name: "Dr. Santhosh",
      specialty: "Orthopedic Surgeon",
      rating: 4.9,
      experience: "15 years",
      location: "Main Hospital"
    }
  ];

  // Departments that actually have doctors
  const availableDepartments = [
    {
      id: 'cardiology',
      name: 'Cardiology',
      icon: heartIcon,
      specialty: 'Cardiologist',
      description: 'Comprehensive heart care with advanced diagnostics.',
      doctorCount: doctors.filter(d => d.specialty === 'Cardiologist').length
    },
    {
      id: 'neurology',
      name: 'Neurology',
      icon: brainIcon,
      specialty: 'Neurologist',
      description: 'Specialized care for brain and nervous system disorders.',
      doctorCount: doctors.filter(d => d.specialty === 'Neurologist').length
    },
    {
      id: 'orthopedics',
      name: 'Orthopedics',
      icon: boneIcon,
      specialty: 'Orthopedic Surgeon',
      description: 'Expert care for bones, joints, and musculoskeletal issues.',
      doctorCount: doctors.filter(d => d.specialty === 'Orthopedic Surgeon').length
    },
    {
      id: 'pediatrics',
      name: 'Pediatrics',
      icon: babyIcon,
      specialty: 'Pediatrician',
      description: 'Child-friendly care for infants, kids, and adolescents.',
      doctorCount: doctors.filter(d => d.specialty === 'Pediatrician').length
    }
  ];

  const handleDepartmentClick = (specialty) => {
    navigate(`/find-doctor?department=${encodeURIComponent(specialty)}`);
  };

  return (
    <>
      <div className="departments-page">
        {/* Hero Section */}
        <section className="departments-hero">
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1>Our Available Departments</h1>
            <p>Connect with specialists in these fields</p>
          </div>
        </section>

        {/* Departments Grid */}
        <section className="departments-container">
          <h2 className="section-title">Specialized Care Units</h2>
          <p className="section-subtitle">
            {availableDepartments.length} departments with expert doctors
          </p>
          
          <div className="departments-grid">
            {availableDepartments.map(dept => (
              <div key={dept.id} className="department-card">
                <div className="card-icon">
                  <img src={dept.icon} alt={dept.name} />
                </div>
                <h3>{dept.name}</h3>
                <p>{dept.description}</p>
                <div className="doctor-count">
                  {dept.doctorCount} {dept.doctorCount === 1 ? 'Specialist' : 'Specialists'} Available
                </div>
                <button 
                  className="view-doctors-btn"
                  onClick={() => handleDepartmentClick(dept.specialty)}
                >
                  View Doctors →
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="departments-cta">
          <h2>Need Help Finding the Right Department?</h2>
          <p>Our team can guide you to the appropriate specialist</p>
          <div className="cta-buttons">
            <button 
              className="btn purple"
              onClick={() => navigate('/contact')}
            >
              Contact Us
            </button>
            <button 
              className="btn orange"
              onClick={() => navigate('/find-doctor')}
            >
              Browse All Doctors
            </button>
          </div>
        </section>
        <Footer />
      </div>

    </>
  );
};

export default Departments;