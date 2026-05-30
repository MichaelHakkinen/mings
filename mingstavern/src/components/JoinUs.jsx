import React from 'react';
import './JoinUs.css';

const JoinUs = () => {
  return (
    <section id="join" className="join-section section-padding">
      <div className="container join-container">
        <div className="join-content reveal">
          <h2 className="section-title">JOIN THE TAVERN</h2>
          <p className="join-text">
            We are always looking for passionate creators, partners, and culinary enthusiasts to grow with us. 
            Whether you're looking for a new career path or an exciting collaboration, we want to hear from you.
          </p>
          <div className="join-options">
            <div className="join-card">
              <h3 className="text-gold">RESERVATIONS</h3>
              <p>Secure your table for an unforgettable evening at the Tavern.</p>
              <a 
                href="https://api.whatsapp.com/send/?phone=6281228867159&text&type=phone_number&app_absent=0" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-outline small"
              >
                Book Now
              </a>
            </div>
            <div className="join-card">
              <h3 className="text-gold">COLLABORATIONS</h3>
              <p>Passionate about content creation? Let's collaborate and share the Tavern story.</p>
              <a 
                href="https://api.whatsapp.com/send/?phone=6281215868514&text&type=phone_number&app_absent=0" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-outline small"
              >
                Partner With Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
