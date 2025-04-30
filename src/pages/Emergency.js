import React from 'react';
import '../assets/css/Emergency.css'; // Create this CSS file

const Emergency = () => {
  const emergencyContacts = [
    { name: "Ambulance", number: "108", icon: "🚑" },
    { name: "Police", number: "100", icon: "🚔" },
    { name: "Fire Department", number: "101", icon: "🚒" },
    { name: "Women's Helpline", number: "1091", icon: "👩" },
    { name: "Child Helpline", number: "1098", icon: "🧒" },
    { name: "Mental Health", number: "1800-599-0019", icon: "🧠" }
  ];

  return (
    <div className="emergency-container">
      <div className="emergency-header">
        <h1>Emergency Services</h1>
        <p className="emergency-subtitle">Immediate assistance available 24/7</p>
      </div>

      <div className="emergency-content">
        <div className="emergency-info">
          <h2>Emergency Contacts</h2>
          <p>In case of emergency, please contact the following services:</p>
          
          <div className="contact-cards">
            {emergencyContacts.map((contact, index) => (
              <div key={index} className="contact-card">
                <div className="contact-icon">{contact.icon}</div>
                <div className="contact-details">
                  <h3>{contact.name}</h3>
                  <a href={`tel:${contact.number}`} className="emergency-number">
                    {contact.number}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="emergency-instructions">
          <h2>Emergency Procedures</h2>
          <ol className="procedure-list">
            <li>Stay calm and assess the situation</li>
            <li>Call the appropriate emergency number</li>
            <li>Provide clear location details</li>
            <li>Follow operator instructions</li>
            <li>Administer first aid if trained</li>
            <li>Keep emergency exits clear</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Emergency;