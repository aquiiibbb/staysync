import React from 'react';
import './HowWeWork.css';

const STEPS = [
  {
    num: '01',
    title: 'Understand Your Business',
    desc: 'We start by learning everything about your business — what you do, who your customers are, and what your goals are.',
    icon: '🔎',
  },
  {
    num: '02',
    title: 'Analyze Customer Profile',
    desc: 'We study your target audience — their behavior, expectations, devices, and how they search online.',
    icon: '👤',
  },
  {
    num: '03',
    title: 'Plan the Right Solution',
    desc: 'Based on research, we recommend the exact stack, features, and strategy that fits your business best.',
    icon: '📋',
  },
  {
    num: '04',
    title: 'Design & Develop',
    desc: 'We build clean, fast, and beautiful websites, apps, or systems using modern tools and best practices.',
    icon: '💻',
  },
  {
    num: '05',
    title: 'SEO & Speed Optimization',
    desc: 'Every project is optimized for search engines, page speed, mobile performance, and accessibility.',
    icon: '⚡',
  },
  {
    num: '06',
    title: 'Launch & Ongoing Support',
    desc: 'We deploy on your preferred platform and remain available for updates, improvements, and growth support.',
    icon: '🚀',
  },
];

export default function HowWeWork() {
  return (
    <section className="section" id="process">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-label">Our Process</span>
          <h2 className="section-title">How We Work</h2>
          <div className="divider center-divider" />
          <p className="section-subtitle center-sub">
            A strategic, proven process that ensures every project delivers real business results.
          </p>
        </div>
        <div className="steps-grid">
          {STEPS.map((s, i) => (
            <div className="step-card" key={i}>
              <div className="step-num">{s.num}</div>
              <div className="step-icon">{s.icon}</div>
              <div className="step-title">{s.title}</div>
              <div className="step-desc">{s.desc}</div>
              {i < STEPS.length - 1 && <div className="step-connector" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
