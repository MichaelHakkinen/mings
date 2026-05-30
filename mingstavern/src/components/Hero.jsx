import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content container">
        <h2 className="hero-subtitle reveal" style={{ animationDelay: '0.2s' }}>
          TRADITION REIMAGINED
        </h2>
        <h1 className="hero-title reveal" style={{ animationDelay: '0.4s' }}>
          <span className="text-gold">MING'S</span> <br /> TAVERN
        </h1>
        <p className="hero-description reveal" style={{ animationDelay: '0.6s' }}>
          Experience the art of Chinese cuisine in the heart of Bali's tropical night. 
          A sanctuary of flavor, tradition, and modern elegance.
        </p>
        <div className="hero-btns reveal" style={{ animationDelay: '0.8s' }}>
          <a href="#menu" className="btn-primary">Explore Menu</a>
          <a href="https://tr.ee/dKSh96eLzG" target="_blank" rel="noopener noreferrer" className="btn-secondary">Find Us</a>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <div className="mouse"></div>
        <span>SCROLL</span>
      </div>
    </section>
  );
};

export default Hero;
