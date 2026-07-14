'use client';
import { useState, useEffect } from 'react';

export default function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slidesCount = 3;

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slidesCount);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-slider" id="hero">
      <div className="hero-slides">
        
        <div className={`hero-slide ${activeSlide === 0 ? 'active' : ''}`} style={{ backgroundImage: "url('hero-bg.jpg')" }}>
          <div className="hero-overlay"></div>
          <div className="hero-slide-content">
            <h1>AI Will <span className="highlight">Replace You!</span></h1>
            <p className="hero-subtitle">If AI can do your work, what makes you valuable? Learn to think, analyze, and decide.</p>
            <div className="hero-actions">
              <a href="#enroll" className="btn-hero-primary">
                Enroll Right Now
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
              <a href="https://chat.whatsapp.com/BU0jlt2VSzQ5mL49U9oq3R" target="_blank" rel="noopener noreferrer" className="btn-hero-secondary">
                Join Community
                <span className="material-symbols-outlined">group</span>
              </a>
            </div>
          </div>
        </div>

        
        <div className={`hero-slide ${activeSlide === 1 ? 'active' : ''}`} style={{ backgroundImage: "url('hero-slide-2.png')" }}>
          <div className="hero-overlay"></div>
          <div className="hero-slide-content">
            <h1>Think <span className="highlight">Beyond</span> the Algorithm</h1>
            <p className="hero-subtitle">Machines follow patterns. Leaders break them. Build the thinking edge AI can't replicate.</p>
            <div className="hero-actions">
              <a href="#enroll" className="btn-hero-primary">
                Start Learning
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
              <a href="#programs" className="btn-hero-secondary">
                Explore Programs
                <span className="material-symbols-outlined">school</span>
              </a>
            </div>
          </div>
        </div>

        
        <div className={`hero-slide ${activeSlide === 2 ? 'active' : ''}`} style={{ backgroundImage: "url('hero-slide-3.jpg')" }}>
          <div className="hero-overlay"></div>
          <div className="hero-slide-content">
            <h1>Your Career Needs <span className="highlight">Critical Thinking</span></h1>
            <p className="hero-subtitle">45.9% employability rate. Don't be on the wrong side. Upgrade how you think, not just what you know.</p>
            <div className="hero-actions">
              <a href="#enroll" className="btn-hero-primary">
                Book a Demo
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
              <a href="#about" className="btn-hero-secondary">
                Learn More
                <span className="material-symbols-outlined">info</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      
      <div className="hero-dots">
        {[0, 1, 2].map((i) => (
          <button 
            key={i}
            className={`hero-dot ${activeSlide === i ? 'active' : ''}`} 
            onClick={() => setActiveSlide(i)}
            aria-label={`Slide ${i + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
}
