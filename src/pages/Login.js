import React, { useState, useEffect } from 'react';
import '../assets/css/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showForgot, setShowForgot] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');

  useEffect(() => {
    document.body.classList.add('login-background');
    return () => {
      document.body.classList.remove('login-background');
    };
  }, []);

  // Update handleLogin in Login.js
const handleLogin = (e) => {
  e.preventDefault();
  const storedUser = JSON.parse(localStorage.getItem('user'));

  if (storedUser && storedUser.email === email && storedUser.password === password) {
    alert("🎉 Login successful!");
    // Store login state and user data
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('currentUser', JSON.stringify({
      email: storedUser.email,
      name: storedUser.name || storedUser.email.split('@')[0] // Default to email prefix if name not available
    }));
    window.location.href = '/dashboard'; // Redirect to dashboard
  } if (storedUser && storedUser.email === email && storedUser.password === password) {
    alert("🎉 Login successful!");
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('currentUser', JSON.stringify({
      email: storedUser.email,
      name: storedUser.name || storedUser.email.split('@')[0]
    }));
  
    // Redirect logic
    if (storedUser.email === 'admin@admin.com') {
      window.location.href = '/';  // Redirect to home page
    } else {
      window.location.href = '/dashboard';  // Redirect regular users to dashboard
    }
  }
};

  const handleForgotPassword = (e) => {
    e.preventDefault();
    if (!forgotEmail) {
      alert("⚠️ Please enter your registered email.");
      return;
    }
    alert("📩 Reset link sent to " + forgotEmail);
    setForgotEmail('');
    setShowForgot(false);
  };

  return (
    <div className="form-container">
      {!showForgot ? (
        <form onSubmit={handleLogin} className="form-card">
          <h2>👩‍⚕️ Login</h2>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
          <p className="link">
            <button
              type="button"
              className="link-button"
              onClick={() => setShowForgot(true)}
            >
              Forgot password?
            </button>
          </p>
        </form>
      ) : (
        <form onSubmit={handleForgotPassword} className="form-card">
          <h3>🔒 Reset Password</h3>
          <input
            type="email"
            placeholder="Enter your registered email"
            value={forgotEmail}
            onChange={e => setForgotEmail(e.target.value)}
            required
          />
          <button type="submit">Send Reset Link</button>
          <button 
            type="button" 
            className="link-button" 
            onClick={() => setShowForgot(false)}
            style={{ marginTop: '10px' }}
          >
            Back to Login
          </button>
        </form>
      )}
    </div>
  );
};

export default Login;