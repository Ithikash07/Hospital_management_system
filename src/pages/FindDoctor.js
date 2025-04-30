import React, { useState } from 'react';
import './FindDoctor.css';
import doctor from '../assets/imgs/d2.jpg';
import doctor1 from '../assets/imgs/d3.jpg';
import doctor2 from '../assets/imgs/d4.avif';
import doctor3 from '../assets/imgs/d5.jpg';
import { useNavigate } from 'react-router-dom';

const FindDoctor = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [specialtyFilter, setSpecialtyFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const navigate = useNavigate();

  const doctors = [
    {
      id: 1,
      name: "Dr. Robert",
      specialty: "Cardiologist",
      rating: 4.9,
      experience: "12 years",
      image: doctor,
      location: "Main Hospital Chennai"
    },
    {
      id: 2,
      name: "Dr. Ramakrishna",
      specialty: "Neurologist",
      rating: 4.8,
      experience: "9 years",
      image: doctor1,
      location: "North Clinic"
    },
    {
      id: 3,
      name: "Dr. Williams",
      specialty: "Pediatrician",
      rating: 4.7,
      experience: "7 years",
      image: doctor2,
      location: "South Clinic"
    },
    {
      id: 4,
      name: "Dr. Santhosh",
      specialty: "Orthopedic Surgeon",
      rating: 4.9,
      experience: "15 years",
      image: doctor3,
      location: "Main Hospital"
    }
  ];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = !specialtyFilter || doctor.specialty === specialtyFilter;
    const matchesLocation = !locationFilter || doctor.location === locationFilter;
    
    return matchesSearch && matchesSpecialty && matchesLocation;
  });

  return (
    <div className="find-doctor-container">
      <div className="find-doctor-header">
        <h1 className="page-title">Find Your Doctor</h1>
        <p className="page-subtitle">Search and connect with the best healthcare professionals</p>

        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search by name or specialty..." 
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
          </button>
        </div>

        <div className="filter-options">
          <select 
            className="filter-select"
            value={specialtyFilter}
            onChange={(e) => setSpecialtyFilter(e.target.value)}
          >
            <option value="">All Specialties</option>
            <option value="Cardiologist">Cardiology</option>
            <option value="Neurologist">Neurology</option>
            <option value="Pediatrician">Pediatrics</option>
            <option value="Orthopedic Surgeon">Orthopedics</option>
          </select>
          <select 
            className="filter-select"
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
          >
            <option value="">All Locations</option>
            <option value="Main Hospital">Main Hospital</option>
            <option value="North Clinic">North Clinic</option>
            <option value="South Clinic">South Clinic</option>
          </select>
        </div>
      </div>

      <div className="doctors-grid">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map(doctor => (
            <div key={doctor.id} className="doctor-card">
              <div className="doctor-image-container">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="doctor-image"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = '/images/doctor-placeholder.jpg';
                  }}
                />
                <div className="rating-badge">
                  ⭐ {doctor.rating}
                </div>
              </div>
              <div className="doctor-info">
                <h3 className="doctor-name">{doctor.name}</h3>
                <p className="doctor-specialty">{doctor.specialty}</p>
                <p className="doctor-location">{doctor.location}</p>
                <p className="doctor-experience">{doctor.experience} experience</p>
                <div className="doctor-actions">
                  <button 
                    className="book-now-btn" 
                    onClick={() => navigate(`/appointment?doctor=${doctor.id}`)}
                  >
                    Book Appointment
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            <p>No doctors found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FindDoctor;
