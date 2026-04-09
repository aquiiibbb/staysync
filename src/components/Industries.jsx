import React from 'react';
import './Industries.css';

const INDUSTRIES = [
  { icon: '🏨', label: 'Hotels', desc: 'Booking-ready hotel websites with room displays, gallery, and amenities.' },
  { icon: '🛏️', label: 'Motels & Inns', desc: 'Budget-friendly, fast-loading sites for motels and roadside inns.' },
  { icon: '🏖️', label: 'Resorts', desc: 'Premium resort websites with experience showcases and booking flows.' },
  { icon: '📦', label: 'Storage Businesses', desc: 'Lead generation sites for self-storage facilities with unit size guides.' },
  { icon: '🏪', label: 'Local Businesses', desc: 'Google-ready websites for local shops and service providers.' },
  { icon: '🛎️', label: 'Service Brands', desc: 'Professional service websites with appointment booking and CTA.' },
  { icon: '🚀', label: 'Startups', desc: 'Clean, conversion-focused landing pages for early-stage startups.' },
  { icon: '🍽️', label: 'Restaurants & Cafes', desc: 'Menu-driven websites with online ordering and table booking features.' },
];

export default function Industries() {
  return (
    <section className="section" id="industries">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Industries We Serve</span>
          <h2 className="section-title">Specialized Experience<br />Across Key Sectors</h2>
          <div className="divider" />
          <p className="section-subtitle">
            We don't build one-size-fits-all websites. Each industry gets a tailored approach built on real experience.
          </p>
        </div>
        <div className="industries-grid">
          {INDUSTRIES.map((ind, i) => (
            <div className="industry-card" key={i}>
              <div className="industry-icon">{ind.icon}</div>
              <div className="industry-label">{ind.label}</div>
              <div className="industry-desc">{ind.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
