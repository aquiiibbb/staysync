import React from 'react';
import './FutureReady.css';

const FUTURE_ITEMS = [
  {
    icon: '🤖',
    title: 'AI Chatbot Integration',
    desc: 'Smart chatbots that handle customer inquiries 24/7, capture leads, assist with bookings, and reduce manual workload.',
  },
  {
    icon: '⚙️',
    title: 'Business Automation',
    desc: 'Automated email flows, booking confirmations, review requests, and customer follow-ups — all without manual effort.',
  },
  {
    icon: '📊',
    title: 'Smart Customer Flow',
    desc: 'Data-driven customer journeys with analytics, heatmaps, and conversion tracking built into every project.',
  },
  {
    icon: '🏗️',
    title: 'Scalable Architecture',
    desc: 'Projects built on scalable full-stack architecture that can grow from a simple landing page to a full business platform.',
  },
  {
    icon: '📱',
    title: 'Android & Web Expansion',
    desc: 'Start with a website and scale to Android apps, Progressive Web Apps, and multi-platform digital products.',
  },
  {
    icon: '☁️',
    title: 'Cloud-Ready Deployment',
    desc: 'AWS, Vercel, Netlify — your project is deployed on reliable, fast, and globally distributed infrastructure.',
  },
];

export default function FutureReady() {
  return (
    <section className="future-section" id="future">
      <div className="future-bg" />
      <div className="container">
        <div className="future-header">
          <span className="section-label" style={{ color: '#fdba74' }}>Future-Ready Solutions</span>
          <h2 className="section-title" style={{ color: 'white' }}>Built for Today.<br />Ready for Tomorrow.</h2>
          <div className="divider" style={{ background: 'var(--orange)' }} />
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Every StaySync project is architected with future growth in mind — from AI integrations to cloud-scale deployments.
          </p>
        </div>
        <div className="future-grid">
          {FUTURE_ITEMS.map((item, i) => (
            <div className="future-card" key={i}>
              <div className="future-icon">{item.icon}</div>
              <div className="future-title">{item.title}</div>
              <div className="future-desc">{item.desc}</div>
            </div>
          ))}
        </div>
        <div className="future-cta">
          <p>Ready to build something future-proof?</p>
          <a href="#contact" className="btn-primary">Start Your Project →</a>
        </div>
      </div>
    </section>
  );
}
