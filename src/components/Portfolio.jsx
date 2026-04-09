import React, { useState } from 'react';
import './Portfolio.css';

const PROJECTS = [
  {
    title: 'The Magnolia Hotel Searcy',
    category: 'Hotel Website',
    desc: 'Premium hotel website with booking-focused layout, room gallery, amenities showcase, and local SEO.',
    url: 'https://themagnoliahotelsearcy.com',
    tags: ['Hotel', 'Booking', 'SEO'],
    color: '#1e2a3a',
  },
  {
    title: 'Crossroads Inn Florida',
    category: 'Motel Website',
    desc: 'Clean and fast motel website with room listings, rates display, and Google Maps integration.',
    url: 'https://crossroadsinnfl.com',
    tags: ['Motel', 'Lead Gen', 'Maps'],
    color: '#92400e',
  },
  {
    title: 'American Star Inn',
    category: 'Inn Website',
    desc: 'Roadside inn website with strong CTA, amenities section, and contact/booking lead capture.',
    url: 'https://americanstarinn.com',
    tags: ['Inn', 'CTA', 'Responsive'],
    color: '#1e3a5f',
  },
  {
    title: 'Ocean Paradise Hotel',
    category: 'Resort Website',
    desc: 'Resort-styled hotel website with visual gallery, ocean views, and a luxury brand feel.',
    url: 'https://oceanparadisehotel.us',
    tags: ['Resort', 'Luxury', 'Gallery'],
    color: '#164e63',
  },
  {
    title: 'Cinderella Storage',
    category: 'Storage Business',
    desc: 'Storage facility website with unit size guide, pricing, and lead generation form.',
    url: 'https://cinderellastorage.com',
    tags: ['Storage', 'Lead Gen', 'Local SEO'],
    color: '#4a1942',
  },
  {
    title: 'RM Enterprise',
    category: 'Business Website',
    desc: 'Service business website with professional layout, service cards, and contact integration.',
    url: 'https://rmenterprise.vercel.app',
    tags: ['Business', 'Services', 'React'],
    color: '#14532d',
  },
  {
    title: 'Hotel Web Demo',
    category: 'Hotel UI Demo',
    desc: 'Hospitality UI demonstration with booking widget, room cards, and animated hero section.',
    url: 'https://hotelwebame.vercel.app',
    tags: ['Hotel', 'UI Demo', 'React'],
    color: '#312e81',
  },
  {
    title: 'Auberge Motel',
    category: 'Motel Website',
    desc: 'French-inspired motel website with bilingual support, room showcase, and clean layout.',
    url: 'https://auberge-motel-drakk-p8am.vercel.app',
    tags: ['Motel', 'Bilingual', 'Clean'],
    color: '#7c2d12',
  },
  {
    title: 'American Inn — Abilene',
    category: 'Inn Website',
    desc: 'Local inn website with Google Reviews integration, directions, and amenities overview.',
    url: 'https://american-abilene.vercel.app',
    tags: ['Inn', 'Reviews', 'Local'],
    color: '#0c4a6e',
  },
];

const FILTER_CATS = ['All', 'Hotel Website', 'Motel Website', 'Inn Website', 'Resort Website', 'Storage Business', 'Business Website'];

export default function Portfolio() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === active);

  return (
    <section className="section section-alt" id="portfolio">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Our Work</span>
          <h2 className="section-title">Live Projects &amp; Deployed Websites</h2>
          <div className="divider" />
          <p className="section-subtitle">
            Real websites, real businesses. Every project here is live and serving actual customers.
          </p>
        </div>
        <div className="portfolio-filters">
          {FILTER_CATS.map(c => (
            <button key={c} className={`filter-btn${active === c ? ' active' : ''}`} onClick={() => setActive(c)}>
              {c}
            </button>
          ))}
        </div>
        <div className="portfolio-grid">
          {filtered.map((p, i) => (
            <div className="portfolio-card" key={i}>
              <div className="portfolio-thumb" style={{ background: p.color }}>
                <div className="portfolio-thumb-inner">
                  <span className="portfolio-thumb-icon">🌐</span>
                  <span className="portfolio-thumb-label">{p.category}</span>
                </div>
              </div>
              <div className="portfolio-body">
                <div className="portfolio-cat">{p.category}</div>
                <div className="portfolio-title">{p.title}</div>
                <div className="portfolio-desc">{p.desc}</div>
                <div className="portfolio-tags">
                  {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="portfolio-link">
                  View Live Site →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
