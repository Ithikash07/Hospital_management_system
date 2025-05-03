import React from 'react';
import '../assets/css/Terms.css'; // Create this CSS file

const TermsAndConditions = () => (
  <div className="terms-container">
    <div className="terms-content">
      <h2 className="terms-title">Terms and Conditions</h2>
      <div className="terms-text">
        <p>This app is for demo purposes. No real data is processed.</p>
        <p>By using this application, you agree to the following terms:</p>
        <ul className="terms-list">
          <li>The application is provided "as is" without warranties of any kind</li>
          <li>You will not use this application for any illegal purposes</li>
          <li>All content is for demonstration only</li>
          <li>We reserve the right to modify these terms at any time</li>
        </ul>
      </div>
    </div>
  </div>
);

export default TermsAndConditions;