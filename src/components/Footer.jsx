import React from 'react';
import './Footer.css';

const SERVICES_LIST = ['Website Development', 'React Frontend', 'Full-Stack Solutions', 'SEO Optimization', 'Android Apps', 'Chatbot Integration', 'QR Review Systems', 'Website Redesign', 'Cloud Deployment'];

const INDUSTRIES_LIST = ['Hotels & Motels', 'Inns & Resorts', 'Storage Businesses', 'Local Businesses', 'Service Brands', 'Startups'];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-stay">Stay</span><span className="logo-sync">Sync</span>
            </div>
            <p className="footer-tagline">
              Smart Digital Solutions for Modern Businesses. We understand your customers first, then build the right solution.
            </p>
            <div className="footer-social">
              <a href="#contact" className="social-link">📧</a>
              <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="social-link">💬</a>
              <a href="#contact" className="social-link">🔗</a>
            </div>
          </div>

          <div className="footer-col">
            <div className="footer-col-title">Services</div>
            <ul>
              {SERVICES_LIST.map(s => (
                <li key={s}><a href="#services">{s}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <div className="footer-col-title">Industries</div>
            <ul>
              {INDUSTRIES_LIST.map(s => (
                <li key={s}><a href="#industries">{s}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <div className="footer-col-title">Quick Links</div>
            <ul>
              <li><a href="#about">About StaySync</a></li>
              <li><a href="#portfolio">Our Portfolio</a></li>
              <li><a href="#process">How We Work</a></li>
              <li><a href="#why-us">Why Choose Us</a></li>
              <li><a href="#future">Future Solutions</a></li>
              <li><a href="#contact">Get a Quote</a></li>
            </ul>
            <div className="footer-cta-box">
              <div className="footer-cta-text">Ready to start?</div>
              <a href="#contact" className="btn-primary" style={{ fontSize: '13px', padding: '10px 18px' }}>
                Book Consultation →
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <div>© {new Date().getFullYear()} StaySync. All rights reserved.</div>
          <div className="footer-bottom-right">
            <span>Hotel Website Specialists</span>
            <span className="sep">·</span>
            <span>Built with ❤️ for business growth</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
