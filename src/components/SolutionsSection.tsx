/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TrendingUp, Zap, FastForward, CheckCheck, ArrowRight, Play, Info } from 'lucide-react';

interface SolutionsSectionProps {
  onOpenDemo: () => void;
  onOpenTrial: () => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ onOpenDemo, onOpenTrial }) => {
  const [activeModalItem, setActiveModalItem] = useState<{ title: string; desc: string; detail: string } | null>(null);

  const solutions = [
    {
      title: 'Adaptive Growth',
      desc: 'Processes scale with demand while staying highly efficient and lean.',
      icon: <TrendingUp size={28} />,
      detail: 'Sastik dynamically balances workload across cloud workers, autoscaling concurrency from 10 to 100,000 tasks without configuration.',
    },
    {
      title: 'Rapid Execution',
      desc: 'Work progresses automatically, minimizing delays and keeping track.',
      icon: <Zap size={28} />,
      detail: 'Sub-second event pipeline routing ensures messages, data transfers, and approvals complete in milliseconds rather than hours.',
    },
    {
      title: 'Work Faster',
      desc: 'Automated workflows help teams move quicker and smarter.',
      icon: <FastForward size={28} />,
      detail: 'Pre-trained domain models eliminate tedious data entry, document summarization, and triage across customer and sales channels.',
    },
    {
      title: 'Consistent Result',
      desc: 'Processes run smoothly, ensuring reliable, consistent, and timely results.',
      icon: <CheckCheck size={28} />,
      detail: 'Deterministic fallback handlers and automated retry circuits prevent data loss and ensure 99.99% workflow delivery reliability.',
    },
  ];

  return (
    <section id="solutions" className="solution-section section-padding">
      <div className="sastik-container">
        {/* Section Header */}
        <div className="section-header-center">
          <div className="section-badge">
            <span className="section-badge-dot" />
            <span>Proven Capabilities</span>
          </div>
          <h2>How Sastik Improves Your Operations</h2>
          <p>
            Eliminate repetitive operational overhead. Empower your team with intelligent automation that scales effortlessly with your business.
          </p>
        </div>

        {/* 4 Solution Cards */}
        <div className="solution-grid">
          {solutions.map((item) => (
            <div key={item.title} className="solution-card">
              <div className="solution-icon-wrap">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <button
                type="button"
                className="solution-link"
                onClick={() => setActiveModalItem(item)}
              >
                Learn More <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Banner: See How It Works CTA */}
        <div className="solution-cta-banner">
          <div className="solution-cta-text">
            <h3>Ready to see Sastik in action?</h3>
            <p>Explore an interactive walkthrough of our intelligent automation pipeline.</p>
          </div>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <button onClick={onOpenDemo} className="btn-secondary" style={{ background: 'rgba(255,255,255,0.1)' }}>
              <Play size={15} fill="currentColor" /> See How it Works
            </button>
            <button onClick={onOpenTrial} className="btn-primary">
              Start Free Trial <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Learn More Lightbox Dialog */}
      {activeModalItem && (
        <div className="modal-backdrop" onClick={() => setActiveModalItem(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: 460 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#a1ff62', fontSize: '0.8rem', fontWeight: 700, marginBottom: 8 }}>
              <Info size={14} /> Solution Deep-Dive
            </div>
            <h3 style={{ color: '#ffffff', fontSize: '1.4rem', marginBottom: 12 }}>
              {activeModalItem.title}
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.95rem', marginBottom: 20, lineHeight: 1.6 }}>
              {activeModalItem.detail}
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              <button onClick={() => setActiveModalItem(null)} className="btn-secondary" style={{ flex: 1, padding: '10px' }}>
                Close
              </button>
              <button
                onClick={() => {
                  setActiveModalItem(null);
                  onOpenTrial();
                }}
                className="btn-primary"
                style={{ flex: 1.5, padding: '10px' }}
              >
                Try this feature
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
