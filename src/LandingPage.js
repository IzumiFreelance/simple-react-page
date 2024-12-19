// src/LandingPage.js

import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <h1>Welcome to Our Website</h1>
        <p>Your journey to success starts here</p>
        <button className="cta-button">Get Started</button>
      </header>
      <section className="features">
        <div className="feature">
          <img src="https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdvbWVufGVufDB8fDB8fHww" alt="Feature 1" />
          <h2>Feature 1</h2>
          <p>Details about feature 1</p>
        </div>
        <div className="feature">
          <img src="https://images.unsplash.com/photo-1560087637-bf797bc7796a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHdvbWVufGVufDB8fDB8fHww" alt="Feature 2" />
          <h2>Feature 2</h2>
          <p>Details about feature 2</p>
        </div>
        <div className="feature">
          <img src="https://images.unsplash.com/photo-1561643241-9abf82d76a68?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHdvbWVufGVufDB8fDB8fHww" alt="Feature 3" />
          <h2>Feature 3</h2>
          <p>Details about feature 3</p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
