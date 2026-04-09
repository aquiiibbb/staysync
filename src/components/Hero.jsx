import React from 'react';
import './Hero.css';
import image1 from '../assets/img.png';

export default function Hero() {
  return (
    <section 
      className="hero" 
      id="home"
      style={{ backgroundImage: `url(${image1})` }}
    >
      <div className="hero-bg-pattern" />
      <div className="container hero-inner">
        <div className="hero-content fade-up">
          <span className="hero-badge">🏨 Hotel Website Specialists</span>
          <h1 className="hero-title">
            We Build Digital Experiences<br />
            <span className="hero-highlight">That Grow Businesses</span>
          </h1>
          <p className="hero-sub">
            From hotels and motels to local brands — StaySync crafts powerful websites,
            SEO strategies, Android apps, and smart digital solutions tailored to your customers.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <strong>12+</strong>
              <span>Live Projects</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <strong>8+</strong>
              <span>Services</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <strong>100%</strong>
              <span>Client Focus</span>
            </div>
          </div>
          <div className="hero-actions fade-up-delay-1">
            <a href="#contact" className="btn-primary">
              Get Started →
            </a>
            <a href="#portfolio" className="btn-outline">
              View Our Work
            </a>
          </div>
        </div>
        <div className="hero-visual fade-up-delay-2">
          <div className="hero-card hero-card-main">
            <div className="hero-card-icon">🌐</div>
            <div>
              <div className="hero-card-title">Hotel Website Specialist</div>
              <div className="hero-card-sub">Full-stack digital presence</div>
            </div>
          </div>
          <div className="hero-card hero-card-sm hero-card-1">
            <span>📱</span>
            <span>Android & iOS Apps</span>
          </div>
          <div className="hero-card hero-card-sm hero-card-2">
            <span>🔍</span>
            <span>SEO Ready</span>
          </div>
          <div className="hero-card hero-card-sm hero-card-3">
            <span>🤖</span>
            <span>AI Chatbots</span>
          </div>
          <div className="hero-card hero-card-sm hero-card-4">
            <span>⭐</span>
            <span>QR Reviews</span>
          </div>
          <div className="hero-glow" />
        </div>
      </div>
      <div className="hero-scroll-hint">
        <span>Scroll to explore</span>
        <div className="scroll-arrow" />
      </div>
    </section>
  );
}