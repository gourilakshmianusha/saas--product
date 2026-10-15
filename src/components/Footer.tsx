/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Twitter, Linkedin, Facebook, Instagram, ArrowUp, Check } from 'lucide-react';

interface FooterProps {
  onOpenTrial: () => void;
  onOpenDemo: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTrial, onOpenDemo }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 4000);
  };

  return (
    <>
      <footer className="footer pb-40" data-bg-color="#000" style={{ backgroundColor: '#000000', color: '#ffffff' }}>
        <div className="as-footer-wrapper">
          {/* Ambient blur shapes from reference */}
          <div className="as-blur-shape">
            <div className="shape shape--1" />
            <div className="shape shape--2" />
          </div>

          <div className="container">
            <div className="as-footer-inner">
              <div className="row mt-none-50">
                {/* Left Column: Newsletter & Social Media */}
                <div className="col-lg-6 mt-50">
                  <div className="as-footer-newsletter">
                    <h2 className="xb-item--title">Join Our Newsletter</h2>
                    <form className="xb-item--input_field" onSubmit={handleSubscribe}>
                      <input
                        type="email"
                        placeholder={subscribed ? 'Subscribed successfully!' : 'Enter your  mail'}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={subscribed}
                        required
                        aria-label="Email address"
                      />
                      <button
                        type="submit"
                        className="subscribe-btn"
                        style={{
                          fontSize: 18,
                          fontWeight: 700,
                          color: '#2f1257',
                          padding: '17px 29px',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: 6,
                          borderRadius: 100,
                          backgroundColor: subscribed ? '#a1ff62' : '#ffffff',
                          fontFamily: 'var(--font-heading)',
                          border: 'none',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          lineHeight: 1,
                        }}
                      >
                        {subscribed ? (
                          <>
                            <Check size={16} /> Subscribed
                          </>
                        ) : (
                          'Subscribe'
                        )}
                      </button>
                    </form>

                    <ul className="xb-social-media list-unstyled ul_li" style={{ listStyle: 'none', padding: 0 }}>
                      <li>
                        <a href="#hero" aria-label="Instagram">
                          <Instagram size={16} />
                        </a>
                      </li>
                      <li>
                        <a href="#hero" aria-label="Facebook">
                          <Facebook size={16} />
                        </a>
                      </li>
                      <li>
                        <a href="#hero" aria-label="X Twitter">
                          <Twitter size={16} />
                        </a>
                      </li>
                      <li>
                        <a href="#hero" aria-label="LinkedIn">
                          <Linkedin size={16} />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Right Column: 3 Link Groups (Pages, Pages, Help) */}
                <div className="col-lg-6 mt-50">
                  <div className="as-footer-widget-wrap">
                    {/* Widget 1: Pages */}
                    <div className="as-footer-widget">
                      <span className="footer-widget-title">Pages</span>
                      <ul className="widget-list list-unstyled">
                        <li>
                          <a href="#problems" onClick={(e) => { e.preventDefault(); scrollToSection('problems'); }}>
                            Problems
                          </a>
                        </li>
                        <li>
                          <a href="#solutions" onClick={(e) => { e.preventDefault(); scrollToSection('solutions'); }}>
                            Solutions
                          </a>
                        </li>
                        <li>
                          <a href="#work" onClick={(e) => { e.preventDefault(); scrollToSection('work'); }}>
                            How it works
                          </a>
                        </li>
                        <li>
                          <a href="#hero" onClick={(e) => { e.preventDefault(); onOpenDemo(); }}>
                            Use case
                          </a>
                        </li>
                        <li>
                          <a href="#feature" onClick={(e) => { e.preventDefault(); scrollToSection('feature'); }}>
                            Features
                          </a>
                        </li>
                      </ul>
                    </div>

                    {/* Widget 2: Pages */}
                    <div className="as-footer-widget">
                      <span className="footer-widget-title">Pages</span>
                      <ul className="widget-list list-unstyled">
                        <li>
                          <a href="#introduction" onClick={(e) => { e.preventDefault(); scrollToSection('introduction'); }}>
                            AI introduction
                          </a>
                        </li>
                        <li>
                          <a href="#pricing" onClick={(e) => { e.preventDefault(); scrollToSection('pricing'); }}>
                            pricing
                          </a>
                        </li>
                        <li>
                          <a href="#faq" onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }}>
                            FAQ
                          </a>
                        </li>
                        <li>
                          <a href="#integrations" onClick={(e) => { e.preventDefault(); scrollToSection('integrations'); }}>
                            Integrations
                          </a>
                        </li>
                        <li>
                          <a href="#security" onClick={(e) => { e.preventDefault(); scrollToSection('security'); }}>
                            Security
                          </a>
                        </li>
                      </ul>
                    </div>

                    {/* Widget 3: Help */}
                    <div className="as-footer-widget">
                      <span className="footer-widget-title">Help</span>
                      <ul className="widget-list list-unstyled">
                        <li>
                          <a href="#faq" onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }}>
                            24/7 Support
                          </a>
                        </li>
                        <li>
                          <button
                            type="button"
                            onClick={onOpenTrial}
                            style={{
                              background: 'none',
                              border: 'none',
                              color: 'rgba(255, 255, 255, 0.6)',
                              padding: 0,
                              font: 'inherit',
                              cursor: 'pointer',
                              transition: 'color 0.3s',
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)')}
                          >
                            Contact us
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Row */}
              <div className="xb-footer_bottom hd-footer-bottom as-footer-bottom ul_li_between">
                <p>
                  Copyright © 2026{' '}
                  <a href="#hero" style={{ color: '#ffffff', fontWeight: 600 }}>
                    Sastik,
                  </a>{' '}
                  All rights reserved.
                </p>
                <p>
                  <a href="#hero">terms of service .</a> <a href="#hero">privacy policy</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`back-to-top-btn ${showBackToTop ? 'visible' : ''}`}
        aria-label="Scroll back to top of page"
      >
        <ArrowUp size={20} />
      </button>
    </>
  );
};
