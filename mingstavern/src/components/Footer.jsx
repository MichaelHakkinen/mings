import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="location" className="footer-section section-padding">
      <div className="container footer-grid">
        <div className="footer-brand">
          <h2 className="footer-logo"><span className="text-gold">MING'S</span> TAVERN</h2>
          <p className="footer-tagline">Tradition in every bite, Bali in every breath.</p>
          <div className="social-icons">
            <a href="https://www.instagram.com/mings.tavern/" target="_blank" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://linktr.ee/mingstaverncanggu" target="_blank" aria-label="Linktree">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
            </a>
            <a href="#" target="_blank" aria-label="TripAdvisor">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="7" cy="12" r="3"></circle><circle cx="17" cy="12" r="3"></circle><path d="M12 18c-3 0-5-2-5-2"></path><path d="M12 18c3 0 5-2 5-2"></path><circle cx="7" cy="12" r="1" fill="currentColor"></circle><circle cx="17" cy="12" r="1" fill="currentColor"></circle></svg>
            </a>
          </div>
        </div>

        <div className="footer-map">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.455325414842!2d115.123543!3d-8.648171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2392764b8a217%3A0xc3b8a1c6a2b3b3b!2sJl.%20Canggu%20Padang%20Linjong%20No.47%2C%20Canggu%2C%20Kec.%20Kuta%20Utara%2C%20Kabupaten%20Badung%2C%20Bali%2080361!5e0!3m2!1sen!2sid!4v1715456000000!5m2!1sen!2sid" 
            width="100%" 
            height="100%" 
            style={{ border: 0, borderRadius: '8px', opacity: 0.7 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        
        <div className="footer-contact">
          <h4 className="footer-heading">VISIT US</h4>
          <p>Jl. Canggu Padang Linjong No.47, <br /> Canggu, Kec. Kuta Utara, Bali 80361</p>
          <div className="contact-icons">
            <a href="https://tr.ee/dKSh96eLzG" target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="Google Maps">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            </a>
            <a href="https://api.whatsapp.com/send/?phone=6281228867159" target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="WhatsApp">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </a>
            <a href="mailto:hello@mingstavern.com" className="icon-link" aria-label="Email">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </a>
          </div>
        </div>
        
        <div className="footer-hours">
          <h4 className="footer-heading">OPENING HOURS</h4>
          <div className="hours-visual">
            <div className="hours-card">
              <span className="days">WEEKDAYS</span>
              <span className="time">12:00 - 23:00</span>
            </div>
            <div className="hours-card active">
              <span className="days">WEEKENDS</span>
              <span className="time">12:00 - 01:00</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom container">
        <p>&copy; 2024 MING'S TAVERN BALI. ALL RIGHTS RESERVED.</p>
        <div className="footer-legal">
          <a href="#">PRIVACY POLICY</a>
          <a href="#">TERMS OF SERVICE</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
