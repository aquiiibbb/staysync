import React from 'react';
import './Testimonials.css';

const TESTIMONIALS = [
  {
    name: 'Robert M.',
    role: 'Hotel Owner, Arkansas',
    text: 'StaySync completely transformed our online presence. Bookings increased noticeably within weeks. They understood our guests better than we did.',
    stars: 5,
    initial: 'R',
  },
  {
    name: 'James K.',
    role: 'Motel Manager, Florida',
    text: 'Fast, professional, and easy to work with. They delivered our motel website on time and it looks better than sites costing 5x more.',
    stars: 5,
    initial: 'J',
  },
  {
    name: 'Sarah L.',
    role: 'Storage Business Owner',
    text: 'The QR review system they set up has been a game-changer. Our Google reviews doubled in two months. Highly recommend StaySync.',
    stars: 5,
    initial: 'S',
  },
  {
    name: 'Mike D.',
    role: 'Resort Director',
    text: 'They took the time to understand our resort brand and built a site that truly reflects our luxury experience. Outstanding work.',
    stars: 5,
    initial: 'M',
  },
];

export default function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-label">Client Feedback</span>
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="divider center-divider" />
          <p className="section-subtitle center-sub">
            Real feedback from real business owners who trusted StaySync with their digital presence.
          </p>
        </div>
        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, i) => (
            <div className="testi-card" key={i}>
              <div className="testi-stars">{'★'.repeat(t.stars)}</div>
              <p className="testi-text">"{t.text}"</p>
              <div className="testi-author">
                <div className="testi-avatar">{t.initial}</div>
                <div>
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="trust-badges">
          <div className="trust-badge">🔒 Secure & Confidential</div>
          <div className="trust-badge">⚡ Fast Turnaround</div>
          <div className="trust-badge">📞 Always Reachable</div>
          <div className="trust-badge">✅ Satisfaction Guaranteed</div>
        </div>
      </div>
    </section>
  );
}
