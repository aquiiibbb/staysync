import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', business: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    // In production, connect to your backend or email service
    setSubmitted(true);
  };

  return (
    <section className="section section-alt" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-left">
            <span className="section-label">Get In Touch</span>
            <h2 className="section-title">Let's Build Something<br />Great Together</h2>
            <div className="divider" />
            <p className="section-subtitle">
              Tell us about your business and what you need. We'll study your customer profile and come back with the right digital strategy.
            </p>
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="ci-icon">📧</div>
                <div>
                  <div className="ci-label">Email Us</div>
                  <div className="ci-val">contact@staysync.digital</div>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="ci-icon">💬</div>
                <div>
                  <div className="ci-label">WhatsApp</div>
                  <div className="ci-val">Chat with us directly</div>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="ci-icon">🕐</div>
                <div>
                  <div className="ci-label">Response Time</div>
                  <div className="ci-val">Within 24 hours</div>
                </div>
              </div>
            </div>
            <a
              href="https://wa.me/919999999999?text=Hi StaySync, I'd like to discuss a project."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary whatsapp-btn"
            >
              💬 Chat on WhatsApp
            </a>
          </div>

          <div className="contact-right">
            {submitted ? (
              <div className="success-msg">
                <div className="success-icon">✅</div>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. We'll review your project requirements and get back to you within 24 hours.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@hotel.com"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Business Type</label>
                  <input
                    type="text"
                    name="business"
                    value={form.business}
                    onChange={handleChange}
                    placeholder="e.g. Hotel, Motel, Storage, Local Business..."
                  />
                </div>
                <div className="form-group">
                  <label>Service Needed</label>
                  <select name="service" value={form.service} onChange={handleChange}>
                    <option value="">Select a service...</option>
                    <option>Website Development</option>
                    <option>React / Frontend Development</option>
                    <option>Full-Stack Web Application</option>
                    <option>SEO Optimization</option>
                    <option>Android App Development</option>
                    <option>Chatbot Integration</option>
                    <option>QR Review System</option>
                    <option>Website Redesign</option>
                    <option>Cloud / AWS Deployment</option>
                    <option>Multiple Services</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Tell Us About Your Project *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your business, what you need, and any specific requirements..."
                    rows={5}
                    required
                  />
                </div>
                <button type="submit" className="btn-primary submit-btn">
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
