import React from 'react';
import './GallerySection.css';

const galleryImages = [
  { url: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800", alt: "Tavern Vibe" },
  { url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800", alt: "Dim Sum" },
  { url: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800", alt: "Cocktails" },
  { url: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=800", alt: "Interior" },
  { url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800", alt: "Roasted Duck" },
  { url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800", alt: "Bali Night" }
];

const GallerySection = () => {
  return (
    <section id="gallery" className="gallery-section section-padding">
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">THE EXPERIENCE</h2>
          <p className="section-subtitle">A glimpse into the life at Ming's Tavern</p>
        </div>
        
        <div className="gallery-grid">
          {galleryImages.map((img, index) => (
            <div key={index} className="gallery-item reveal" style={{ animationDelay: `${0.1 * index}s` }}>
              <img src={img.url} alt={img.alt} loading="lazy" />
              <div className="gallery-overlay">
                <span className="overlay-text">{img.alt}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="gallery-cta reveal">
          <a href="https://www.instagram.com/mings.tavern/" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Follow our Journey
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
