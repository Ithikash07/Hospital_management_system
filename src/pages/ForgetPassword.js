import React, { useState } from 'react';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [newPass, setNewPass] = useState('');

  const handleReset = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const updatedUsers = users.map(user => {
      if (user.email === email) {
        return { ...user, password: newPass };
      }
      return user;
    });

    const userFound = users.some(user => user.email === email);

    if (userFound) {
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      alert("Password reset successful!");
    } else {
      alert("No user found with that email.");
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <input 
        type="email" 
        placeholder="Enter your email" 
        onChange={e => setEmail(e.target.value)} 
        required 
      />
      <input 
        type="password" 
        placeholder="New Password" 
        onChange={e => setNewPass(e.target.value)} 
        required 
      />
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default ForgetPassword;