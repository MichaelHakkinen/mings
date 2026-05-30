import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <span className="text-gold">MING'S</span> TAVERN
        </div>
        
        <div className={`nav-links-wrapper ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li><a href="#menu" onClick={() => setIsMenuOpen(false)}>Menu</a></li>
            <li><a href="#gallery" onClick={() => setIsMenuOpen(false)}>Gallery</a></li>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
            <li><a href="#join" onClick={() => setIsMenuOpen(false)}>Join Us</a></li>
            <li><a href="#location" onClick={() => setIsMenuOpen(false)}>Location</a></li>
          </ul>
        </div>

        <div className="nav-actions">
          <a 
            href="https://api.whatsapp.com/send/?phone=6281228867159&text&type=phone_number&app_absent=0" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="nav-cta"
          >
            Book a Table
          </a>
          
          <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
