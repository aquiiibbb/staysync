import React from 'react';
import './About.css';

const PILLARS = [
  { icon: '🎯', title: 'Customer-First Approach', desc: 'We study your business, understand your target audience, and then craft the perfect digital solution.' },
  { icon: '🏨', title: 'Hotel Website Specialists', desc: 'Deep expertise in hospitality — hotels, motels, inns, and resorts are our core strength.' },
  { icon: '🚀', title: 'Full-Stack Capability', desc: 'From React frontends to Node.js backends, Android apps to AWS deployments — we do it all.' },
  { icon: '💡', title: 'Strategic Thinking', desc: 'Not just developers — we are digital strategists who think about growth, conversion, and branding.' },
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-left">
            <span className="section-label">About StaySync</span>
            <h2 className="section-title">We Understand Your Customer<br /><em>Before</em> We Build</h2>
            <div className="divider" />
            <p className="about-text">
              StaySync is a freelance digital brand built on a simple principle: understand the customer profile first,
              then deliver the right digital solution. We don't build generic websites — we build experiences that convert visitors into customers.
            </p>
            <p className="about-text">
              With hands-on experience across <strong>12+ live, deployed projects</strong> — ranging from hotel booking platforms
              to storage business websites — we bring real-world expertise to every engagement.
              Whether you're a boutique motel or a growing service brand, we deliver clean, fast, and business-focused digital solutions.
            </p>
            <div className="about-process-teaser">
              <div className="process-step">
                <span className="ps-num">01</span>
                <span>Study your business type</span>
              </div>
              <div className="process-step">
                <span className="ps-num">02</span>
                <span>Understand your target customer</span>
              </div>
              <div className="process-step">
                <span className="ps-num">03</span>
                <span>Build the right solution</span>
              </div>
            </div>
          </div>
          <div className="about-right">
            {PILLARS.map((p, i) => (
              <div className="pillar-card" key={i}>
                <div className="pillar-icon">{p.icon}</div>
                <div>
                  <div className="pillar-title">{p.title}</div>
                  <div className="pillar-desc">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
