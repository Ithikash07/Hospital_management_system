import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiUser, FiSettings, FiLogOut } from 'react-icons/fi';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    setUser(currentUser);

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('currentUser');
    setUser(null);
    navigate('/login');
  };

  const handleToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button
        className="btn btn-outline-secondary dropdown-toggle d-flex align-items-center"
        onClick={handleToggle}
        aria-expanded={isOpen}
      >
        <div className="bg-primary text-white rounded-circle d-flex justify-content-center align-items-center" style={{ width: '32px', height: '32px' }}>
          {user?.name?.charAt(0).toUpperCase() || <FiUser />}
        </div>
      </button>

      {isOpen && (
        <div className="dropdown-menu dropdown-menu-end show shadow" style={{ minWidth: '250px' }}>
          {user ? (
            <>
              <div className="px-3 py-2 border-bottom">
                <div className="d-flex align-items-center">
                  <div className="bg-secondary text-white rounded-circle me-2 d-flex justify-content-center align-items-center" style={{ width: '40px', height: '40px' }}>
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h6 className="mb-0">{user.name}</h6>
                    <small className="text-muted">{user.email}</small>
                  </div>
                </div>
              </div>

              <button
                className="dropdown-item d-flex align-items-center"
                onClick={() => {
                  setIsOpen(false);
                  navigate('/dashboard');
                }}
              >
                <FiSettings className="me-2" />
                Dashboard
              </button>

              <div className="dropdown-divider"></div>

              <button
                className="dropdown-item text-danger d-flex align-items-center"
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
              >
                <FiLogOut className="me-2" />
                Sign Out
              </button>
            </>
          ) : (
            <>
              <button
                className="dropdown-item"
                onClick={() => {
                  setIsOpen(false);
                  navigate('/login');
                }}
              >
                <FiUser className="me-2" />
                Login
              </button>
              <button
                className="dropdown-item"
                onClick={() => {
                  setIsOpen(false);
                  navigate('/signup');
                }}
              >
                <FiUser className="me-2" />
                Sign Up
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default UserDropdown;