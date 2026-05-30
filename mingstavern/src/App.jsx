import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import AboutSection from './components/AboutSection';
import GallerySection from './components/GallerySection';
import JoinUs from './components/JoinUs';
import Footer from './components/Footer';
import './App.css';

function App() {
  useEffect(() => {
    // Scroll reveal observer
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <MenuSection />
        <GallerySection />
        <JoinUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
