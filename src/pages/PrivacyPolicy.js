import React from 'react';
import '../assets/css/privacy.css'; // Create this CSS file

const PrivacyPolicy = () => (
  <div className="privacy-container">
    <div className="privacy-content">
      <h1 className="privacy-title">Privacy Policy</h1>
      <div className="privacy-text">
        <p>Last Updated: {new Date().toLocaleDateString()}</p>
        

        <h3 className="privacy-section-title">Data Usage</h3>
        <p>Any information collected is used solely for the purpose of providing and improving our services to you.</p>
        
    
        <h3 className="privacy-section-title">Your Rights</h3>
        <ul className="privacy-list">
          <li>Right to access your personal data</li>
          <li>Right to request correction of inaccurate data</li>
          <li>Right to request deletion of your data</li>
          <li>Right to withdraw consent</li>
        </ul>
        
        <h3 className="privacy-section-title">Changes to This Policy</h3>
        <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page.</p>
      </div>
    </div>
  </div>
);

export default PrivacyPolicy;