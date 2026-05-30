import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section id="about" className="about-section section-padding">
      <div className="container about-container">
        <div className="about-image reveal">
          <div className="image-placeholder">
             <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1000" alt="Restaurant Vibe" />
          </div>
          <div className="experience-tag">
            <span className="number">12</span>
            <span className="text">YEARS OF <br /> TRADITION</span>
          </div>
        </div>
        
        <div className="about-content reveal" style={{ animationDelay: '0.3s' }}>
          <h2 className="section-title">A TALE OF TWO WORLDS</h2>
          <p className="about-text">
            Ming's Tavern was born from a desire to blend the rich heritage of Chinese culinary arts with the vibrant, tropical soul of Bali. Our tavern is more than just a restaurant; it's a sensory journey through time and culture.
          </p>
          <div className="about-features">
            <div className="feature">
              <h4 className="feature-title text-gold">AUTHENTICITY</h4>
              <p>Traditional recipes passed down through generations, prepared with modern precision.</p>
            </div>
            <div className="feature">
              <h4 className="feature-title text-gold">ATMOSPHERE</h4>
              <p>A moody, intimate setting designed for deep conversations and unforgettable nights.</p>
            </div>
          </div>
          <button className="btn-primary">Learn Our Story</button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
