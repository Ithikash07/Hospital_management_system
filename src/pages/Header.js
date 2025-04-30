import React, { useState, useEffect } from 'react';
import './Header.css'; // Add your CSS for styling

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem('currentUser');
    window.location.reload();
  };

  if (!currentUser) return null;

  return (
    <div className="header-container">
      <div className="profile-circle" onClick={() => setShowMenu(!showMenu)}>
        {currentUser.name.charAt(0).toUpperCase()}
      </div>
      {showMenu && (
        <div className="dropdown-menu">
          <p><strong>{currentUser.name}</strong></p>
          <button onClick={() => alert('Dashboard Coming Soon!')}>Dashboard</button>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      )}
    </div>
  );
};

export default Header;