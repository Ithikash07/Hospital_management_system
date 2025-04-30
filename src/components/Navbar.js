import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import UserDropdown from '../pages/UserDropdown';

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-left-section">
        <div className="navbar-brand">
          <h1 className="hospital-name"> Med Hospital</h1>
          <p className="portal-name">Care+</p>
        </div>
      </div>
      
      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/find-doctor" className="nav-link">Find Doctor</Link>
        <Link to="/appointment" className="nav-link">Appointment</Link>
        <Link to="/emergency" className="nav-link emergency-link">Emergency</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
        <Link to="/medicines" className="nav-link">Medicines</Link>
      </div>
      
      <div className="navbar-actions">
        <UserDropdown />
      </div>
    </nav>
  );
};

export default Navbar;