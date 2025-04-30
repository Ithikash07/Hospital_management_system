import React, { useEffect, useState } from 'react';
import UserDropdown from './UserDropdown';
import './Dashboard.css';

const Dashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const allAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
    
    const userAppointments = allAppointments.filter(appt => 
      appt.email === user?.email
    ).sort((a, b) => new Date(a.date) - new Date(b.date));
    
    setCurrentUser(user);
    setAppointments(userAppointments);
  }, []);

  const formatDate = (dateString) => {
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const formatTime = (dateString) => {
    return new Date(dateString).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="welcome-container">
          <h2>Welcome back, <span className="user-name">{currentUser?.fname || 'User'}</span>!</h2>
          <p className="welcome-message">Here's your appointment summary</p>
        </div>
        <UserDropdown />
      </header>

      <div className="appointments-section">
        <div className="section-header">
          <h3>Your Appointments</h3>
          <div className="appointment-count">
            {appointments.length} {appointments.length === 1 ? 'appointment' : 'appointments'}
          </div>
        </div>

        {appointments.length > 0 ? (
          <div className="appointments-grid">
            {appointments.map((appt, index) => (
              <div key={index} className={`appointment-card ${
                new Date(appt.date) > new Date() ? 'upcoming' : 'completed'
              }`}>
                <div className="card-header">
                  <div className="doctor-info">
                    <div className="doctor-avatar">
                      {appt.doctor.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <h4>Dr. {appt.doctor}</h4>
                      <p className="specialization">General Physician</p>
                    </div>
                  </div>
                  <div className="appointment-time">
                    <span className="date">{formatDate(appt.date)}</span>
                    <span className="time">{formatTime(appt.date)}</span>
                  </div>
                </div>
                <div className="card-body">
                  <div className="reason-section">
                    <span className="section-label">Reason</span>
                    <p className="appointment-reason">{appt.reason}</p>
                  </div>
                  <div className="card-footer">
                    <span className={`status-badge ${
                      new Date(appt.date) > new Date() ? 'upcoming' : 'completed'
                    }`}>
                      {new Date(appt.date) > new Date() ? 'Upcoming' : 'Completed'}
                    </span>
                    {new Date(appt.date) > new Date() && (
                      <div className="action-buttons">
                        <button className="reschedule-btn">Reschedule</button>
                        <button className="cancel-btn">Cancel</button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-appointments">
            <div className="empty-state">
              <img src="/images/empty-appointments.svg" alt="No appointments" className="empty-image" />
              <h4>No appointments scheduled</h4>
              <p>You don't have any upcoming or past appointments</p>
              <button 
                className="book-appointment-btn"
                onClick={() => window.location.href = '/appointment'}
              >
                Book an Appointment
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;