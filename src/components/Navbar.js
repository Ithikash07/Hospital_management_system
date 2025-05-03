import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Navbar.css';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const loginStatus = localStorage.getItem('isLoggedIn') === 'true';
    const user = JSON.parse(localStorage.getItem('currentUser'));
    setIsLoggedIn(loginStatus);
    setCurrentUser(user);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('currentUser');
    setIsLoggedIn(false);
    setCurrentUser(null);
    navigate('/');
  };

  const isAdmin = currentUser?.email === 'admin@admin.com';

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4 shadow-sm">
      <div className="container-fluid">
        {/* Brand Section */}
        <Link className="navbar-brand d-flex flex-column align-items-start" to="/">
          <h4 className="mb-0 fw-bold hospital-name">Med Hospital</h4>
          <small className="text-muted portal-name">Care+</small>
        </Link>

        {/* Toggle for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
            <li className="nav-item"><Link to="/find-doctor" className="nav-link">Find Doctor</Link></li>

            {/* Only non-admin users */}
            {!isAdmin && (
              <>
                <li className="nav-item"><Link to="/appointment" className="nav-link">Appointment</Link></li>
                <li className="nav-item"><Link to="/dashboard" className="nav-link">Dashboard</Link></li>
              </>
            )}

            <li className="nav-item"><Link to="/emergency" className="nav-link text-danger fw-bold">Emergency</Link></li>
            <li className="nav-item"><Link to="/medicines" className="nav-link">Medicines</Link></li>
            <li className="nav-item"><Link to="/departments" className="nav-link">Departments</Link></li>

            {/* Admin-only Patients page */}
            {isAdmin && (
              <li className="nav-item"><Link to="/admin-patients" className="nav-link text-primary fw-bold">Users</Link></li>
            )}
          </ul>

          {/* Right Side */}
          <ul className="navbar-nav ms-auto">
            {isLoggedIn && currentUser ? (
              <>
                <li className="nav-item d-flex align-items-center">
                  <span className="nav-link fw-semibold text-success">
                    👋 Welcome, {currentUser.name || 'User'}
                  </span>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-danger ms-2" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/login" className="btn btn-outline-primary me-2">Login</Link>
                </li>
                <li className="nav-item">
                  <Link to="/signup" className="btn btn-primary">Sign Up</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;