import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiUser, FiSettings, FiLogOut } from 'react-icons/fi';
import './UserDropdown.css';

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
    <div className="user-dropdown-container" ref={dropdownRef}>
      <button 
        className="user-profile-button"
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-label="User menu"
      >
        <div className="user-avatar">
          {user?.name?.charAt(0).toUpperCase() || <FiUser size={18} />}
        </div>
      </button>

      {isOpen && (
        <div className="dropdown-content">
          {user ? (
            <>
              <div className="dropdown-header">
                <div className="header-avatar">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <div className="header-info">
                  <h4>{user.name}</h4>
                  <p>{user.email}</p>
                </div>
              </div>

              <div className="dropdown-divider"></div>

              <button 
                className="dropdown-item dashboard"
                onClick={() => {
                  setIsOpen(false);
                  navigate('/dashboard');
                }}
              >
                <FiSettings className="item-icon" />
                Dashboard
              </button>


              <div className="dropdown-divider"></div>

              <button 
                className="dropdown-item logout"
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
              >
                <FiLogOut className="item-icon" />
                Sign Out
              </button>
            </>
          ) : (
            <>
              <button 
                className="dropdown-item login"
                onClick={() => {
                  setIsOpen(false);
                  navigate('/login');
                }}
              >
                <FiUser className="item-icon" />
                Login
              </button>
              <button 
                className="dropdown-item signup"
                onClick={() => {
                  setIsOpen(false);
                  navigate('/signup');
                }}
              >
                <FiUser className="item-icon" />
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
