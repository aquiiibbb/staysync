import React from 'react';
import './Services.css';

const SERVICES = [
  {
    icon: '🌐',
    title: 'Website Development',
    desc: 'Fully custom, responsive websites built with clean code. Optimized for speed, SEO, and conversion.',
    tags: ['React', 'HTML/CSS', 'WordPress'],
  },
  {
    icon: '⚛️',
    title: 'React Frontend Development',
    desc: 'Component-based, scalable React frontends with smooth UX and modern design patterns.',
    tags: ['React.js', 'Next.js', 'Tailwind'],
  },
  {
    icon: '🔧',
    title: 'Full-Stack Web Solutions',
    desc: 'Complete web apps using Node.js, Express, MongoDB, and more. Scalable architecture ready for growth.',
    tags: ['Node.js', 'MongoDB', 'Python', 'PHP'],
  },
  {
    icon: '🔍',
    title: 'SEO Optimization',
    desc: 'On-page SEO, speed optimization, schema markup, and local SEO to help your business rank higher.',
    tags: ['On-Page SEO', 'Local SEO', 'Speed'],
  },
  {
    icon: '📱',
    title: 'Android App Development',
    desc: 'Native Android apps for hotels, service businesses, and startups. Clean UI, functional, and market-ready.',
    tags: ['Java', 'Kotlin', 'Android Studio'],
  },
  {
    icon: '🤖',
    title: 'Chatbot Integration',
    desc: 'AI-powered chatbots for 24/7 customer interaction, booking assistance, and lead capture.',
    tags: ['AI Chatbot', 'WhatsApp Bot', 'Widget'],
  },
  {
    icon: '⭐',
    title: 'QR Review Systems',
    desc: 'Custom QR-based feedback and review systems to collect customer reviews and build your online reputation.',
    tags: ['QR Code', 'Google Reviews', 'Custom'],
  },
  {
    icon: '🔄',
    title: 'Redesign & Maintenance',
    desc: 'Transform outdated websites into modern, fast, and business-ready platforms. Ongoing support included.',
    tags: ['Redesign', 'Updates', 'Hosting'],
  },
  {
    icon: '☁️',
    title: 'Cloud & Deployment',
    desc: 'Deploy your projects on AWS, Vercel, Netlify, or any cloud platform with proper CI/CD setup.',
    tags: ['AWS', 'Vercel', 'Netlify', 'cPanel'],
  },
];

export default function Services() {
  return (
    <section className="section section-alt" id="services">
      <div className="container">
        <div className="section-header">
          <span className="section-label">What We Offer</span>
          <h2 className="section-title">Our Services</h2>
          <div className="divider" />
          <p className="section-subtitle">
            From concept to launch — we cover every digital need your business requires to succeed online.
          </p>
        </div>
        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <div className="service-card" key={i}>
              <div className="service-icon">{s.icon}</div>
              <div className="service-title">{s.title}</div>
              <div className="service-desc">{s.desc}</div>
              <div className="service-tags">
                {s.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
