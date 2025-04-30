import React from 'react';
import './Header.css';

const Header = ({ toggleSidebar }) => {
  return (
    <header className="top-header">
      <div className="logo">
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Apollo_Hospitals_Logo.svg/1200px-Apollo_Hospitals_Logo.svg.png" alt="Apollo Logo" />
      </div>
      <div className="header-actions">
        <div className="search-icon">🔍</div>
        <div className="emergency">
          🚨 <span>1066</span>
        </div>
        
        <div className="hamburger-icon" onClick={toggleSidebar}>
          ☰
        </div>
      </div>
    </header>
  );
};

export default Header;