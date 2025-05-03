import React, { useState } from 'react';
import '../assets/css/Appointment.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    doctor: '',
    reason: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const appointment = {
      ...formData,
      email: user.email, // Store user's email with appointment
      status: 'upcoming'
    };
    
    // Get existing appointments or create new array
    const existingAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
    const updatedAppointments = [...existingAppointments, appointment];
    
    localStorage.setItem('appointments', JSON.stringify(updatedAppointments));
    alert('Appointment requested successfully! ✅');
    setFormData({ name: '', date: '', doctor: '', reason: '' });
  };

  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('currentUser');
    if (!user) {
      alert('Please login to book an appointment!');
      navigate('/login'); // redirect to login
    }
  }, []);
  

  return (
    <div className="appointment-container">
      <div className="appointment-content">
        <h2>Request an Appointment</h2>
        <form className="appointment-form" onSubmit={handleSubmit}>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
          <input type="text" name="doctor" value={formData.doctor} onChange={handleChange} placeholder="Preferred Doctor" required />
          <textarea name="reason" value={formData.reason} onChange={handleChange} placeholder="Reason for Appointment" required />
          <button type="submit">Submit Request</button>
        </form>
      </div>
    </div>
  );
};

export default Appointment;