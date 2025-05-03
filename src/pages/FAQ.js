import React from 'react';
import '../assets/css/faq.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Footer from '../components/Footer';
//Accordian use 

const FAQ = () => {
  const faqData = [
    {
      question: 'Is this system online?',
      answer: "Currently, it's all in-browser without backend.",
      icon: '🌐'
    },
    {
      question: 'Can I register as a new patient?',
      answer: 'Yes, you can register using the signup page, and your details will be stored locally.',
      icon: '🆕'
    },
    {
      question: 'Are my details secure?',
      answer: "Since it's a frontend-only system, data is saved in your browser's local storage and not sent anywhere.",
      icon: '🔒'
    },
    {
      question: 'Can I reset my password?',
      answer: 'Yes, use the "Forgot Password" link on the login page to reset it.',
      icon: '🔄'
    },
    {
      question: 'Who can access the admin panel?',
      answer: 'Only users with admin credentials can view or manage admin features.',
      icon: '👨‍⚕️'
    },
    {
      question: 'What should I do if my data disappears?',
      answer: 'Local storage data can be cleared by your browser, so make sure not to clear site data if you want to keep your info.',
      icon: '⚠️'
    },
    {
      question: 'Will there be a backend version in the future?',
      answer: 'Yes, a backend-integrated version is planned for upcoming releases.',
      icon: '🚀'
    },
  ];

  return (
    <>
    <div className="faq-section">
      <div className="container">
        <div className="faq-header">
          <h2>Frequently Asked Questions</h2>
          <p>Find answers to common questions about our hospital management system</p>
        </div>

        <div className="accordion" id="faqAccordion">
          {faqData.map((item, index) => (
            <div className="accordion-item" key={index}>
              <h3 className="accordion-header" id={`heading${index}`}>
                <button
                  className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded={index === 0 ? 'true' : 'false'}
                  aria-controls={`collapse${index}`}
                >
                  <span className="faq-icon">{item.icon}</span>
                  {item.question}
                </button>
              </h3>
              <div
                id={`collapse${index}`}
                className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                aria-labelledby={`heading${index}`}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default FAQ;