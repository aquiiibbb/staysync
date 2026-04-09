import React from 'react';
import './WhyChooseUs.css';

const REASONS = [
  { icon: '✅', title: 'Real Project Experience', desc: '12+ live, deployed websites for real businesses — not just demos or templates.' },
  { icon: '🏨', title: 'Hotel Industry Specialist', desc: 'Deep expertise in hospitality digital presence. We know what hotel guests and owners need.' },
  { icon: '🎨', title: 'Clean, Business-Focused Design', desc: 'No flashy or gimmicky designs. Just clean, professional work that converts visitors into customers.' },
  { icon: '📈', title: 'SEO-Friendly from Day One', desc: 'Every project is built with on-page SEO, fast loading, and mobile-first principles baked in.' },
  { icon: '📱', title: 'Mobile-First Development', desc: 'Your website will look and work perfectly on phones, tablets, and desktops — always.' },
  { icon: '🔗', title: 'Full-Stack Capability', desc: 'Frontend, backend, mobile apps, cloud deployment — we handle the entire digital ecosystem.' },
  { icon: '💰', title: 'Affordable Freelance Rates', desc: 'Agency-quality work at freelance pricing. Maximum value for your investment.' },
  { icon: '🤝', title: 'Client-First Communication', desc: 'We keep you in the loop at every step. No ghosting, no delays, no surprises.' },
];

const STATS = [
  { num: '12+', label: 'Live Projects Delivered' },
  { num: '8+', label: 'Services Offered' },
  { num: '5+', label: 'Industries Served' },
  { num: '100%', label: 'Client Satisfaction Goal' },
];

export default function WhyChooseUs() {
  return (
    <section className="section section-alt" id="why-us">
      <div className="container">
        <div className="why-top">
          <div className="why-left">
            <span className="section-label">Why StaySync</span>
            <h2 className="section-title">Why Businesses Choose Us</h2>
            <div className="divider" />
            <p className="section-subtitle">
              We're not just developers. We're digital partners who care about your business growth and online success.
            </p>
            <div className="stats-row">
              {STATS.map((s, i) => (
                <div className="stat-box" key={i}>
                  <strong>{s.num}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="why-right">
            {REASONS.map((r, i) => (
              <div className="reason-item" key={i}>
                <div className="reason-icon">{r.icon}</div>
                <div>
                  <div className="reason-title">{r.title}</div>
                  <div className="reason-desc">{r.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
