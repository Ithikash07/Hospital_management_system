import React, { useState, useEffect } from 'react';
import '../assets/css/Signup.css';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add('signup-background');
    return () => {
      document.body.classList.remove('signup-background');
    };
  }, []);

  // Regex patterns
  const patterns = {
    name: /^[a-zA-Z]{2,50}$/,
    email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  };

  const errorMessages = {
    fname: 'First name must be 2-50 letters only',
    lname: 'Last name must be 2-50 letters only',
    email: 'Please enter a valid email address',
    password: 'Password must contain: 8+ chars, 1 uppercase, 1 lowercase, 1 number, 1 special char'
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validate = () => {
    const newErrors = {};
    
    if (!patterns.name.test(formData.fname)) {
      newErrors.fname = errorMessages.fname;
    }
    
    if (!patterns.name.test(formData.lname)) {
      newErrors.lname = errorMessages.lname;
    }
    
    if (!patterns.email.test(formData.email)) {
      newErrors.email = errorMessages.email;
    }
    
    if (!patterns.password.test(formData.password)) {
      newErrors.password = errorMessages.password;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = (e) => {
    e.preventDefault();
    
    if (validate()) {
      localStorage.setItem('user', JSON.stringify(formData));
      alert("🎉 Signup successful!");
      setFormData({
        fname: '',
        lname: '',
        email: '',
        password: ''
      });
      navigate('/');
    }
  };

  return (
    <div className="signup-page">
      <form className="signup-form" onSubmit={handleSignup}>
        <h2>🚀 Create Your Account</h2>

        <div className="form-group">
          <input
            type="text"
            name="fname"
            placeholder="First Name"
            value={formData.fname}
            onChange={handleChange}
            className={errors.fname ? 'error' : ''}
          />
          {errors.fname && <span className="error-message">{errors.fname}</span>}
        </div>

        <div className="form-group">
          <input
            type="text"
            name="lname"
            placeholder="Last Name"
            value={formData.lname}
            onChange={handleChange}
            className={errors.lname ? 'error' : ''}
          />
          {errors.lname && <span className="error-message">{errors.lname}</span>}
        </div>
        
        <div className="form-group">
          <input 
            type="email" 
            name="email"
            placeholder="Enter your email" 
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>
        
        <div className="form-group">
          <input 
            type="password" 
            name="password"
            placeholder="Create a password" 
            value={formData.password}
            onChange={handleChange}
            className={errors.password ? 'error' : ''}
          />
          {errors.password && <span className="error-message">{errors.password}</span>}
        </div>
        
        <button type="submit" className='signup-button'>Sign Up</button>
        
        <div className="already-registered">
          <span>Already have an account? </span>
          <Link to="/login" className="login-link">Login here</Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;