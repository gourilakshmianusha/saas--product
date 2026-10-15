/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Mail, Check } from 'lucide-react';

interface FinalCtaSectionProps {
  onOpenTrial: () => void;
  onOpenDemo: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenTrial, onOpenDemo }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) return;
    setSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
    }, 2000);
  };

  return (
    <section className="final-cta-section">
      <div className="sastik-container">
        {/* Main CTA Container */}
        <div className="cta-box-inner">
          <div className="section-badge section-badge-dark" style={{ justifyContent: 'center' }}>
            <span className="section-badge-dot" />
            <span>Scale with Confidence</span>
          </div>

          <h2>Make Automation Your Competitive Advantage</h2>

          <p>
            Enterprise-grade security keeps your workflows and data protected. Connect your tools, empower your teams, and launch self-optimizing pipelines in minutes.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
            <button onClick={onOpenTrial} className="btn-primary" style={{ padding: '16px 36px', fontSize: '1.05rem' }}>
              Start a 14-Days Free Trial <ArrowRight size={18} />
            </button>
            <button onClick={onOpenDemo} className="btn-secondary" style={{ padding: '16px 28px', fontSize: '1.05rem' }}>
              Schedule 1-on-1 Demo
            </button>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24, marginTop: 32, fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', flexWrap: 'wrap' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <CheckCircle2 size={16} color="#a1ff62" /> No credit card required
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <ShieldCheck size={16} color="#a1ff62" /> SOC2 Type II Certified
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <Sparkles size={16} color="#a1ff62" /> 5-minute setup
            </span>
          </div>
        </div>

        {/* 18. Newsletter Strip */}
        <div className="newsletter-strip">
          <div className="newsletter-text">
            <h3>Join Our Newsletter</h3>
            <p>Get the latest enterprise automation research and AI engineering playbooks.</p>
          </div>

          <form onSubmit={handleSubscribe} className="newsletter-form">
            <Mail size={18} color="rgba(255,255,255,0.5)" />
            <input
              type="email"
              className="newsletter-input"
              placeholder={subscribed ? 'Thank you for subscribing!' : 'Enter your mail'}
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              disabled={subscribed}
              required
            />
            <button
              type="submit"
              className="btn-primary"
              style={{
                padding: '9px 20px',
                fontSize: '0.875rem',
                backgroundColor: subscribed ? '#10b981' : undefined,
              }}
            >
              {subscribed ? (
                <>
                  <Check size={14} /> Subscribed!
                </>
              ) : (
                'Subscribe'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
