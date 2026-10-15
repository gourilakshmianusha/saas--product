/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { SastikLogo } from './SastikLogo.tsx';
import { Twitter, Github, Linkedin, MessageCircle, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenTrial: () => void;
  onOpenDemo: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTrial, onOpenDemo }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

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

  return (
    <>
      <footer className="sastik-footer">
        <div className="sastik-container">
          <div className="footer-top-grid">
            {/* Column 1: Brand Info */}
            <div className="footer-brand-col">
              <SastikLogo theme="light" width={130} height={28} />
              <p>
                Next-generation AI automation platform empowering modern companies to connect tools, orchestrate workflows, and move faster with intelligent operations.
              </p>
              <div style={{ marginTop: 24 }}>
                <span style={{ fontSize: '0.8rem', color: '#a1ff62', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Enterprise Ready
                </span>
                <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)', margin: '4px 0 0 0' }}>
                  SOC 2 Type II · ISO 27001 · 99.99% SLA
                </p>
              </div>
            </div>

            {/* Column 2: Pages 1 */}
            <div className="footer-col">
              <h4>Pages</h4>
              <ul className="footer-links-list">
                <li>
                  <a href="#problems" className="footer-link" onClick={(e) => { e.preventDefault(); scrollToSection('problems'); }}>
                    Problems
                  </a>
                </li>
                <li>
                  <a href="#solutions" className="footer-link" onClick={(e) => { e.preventDefault(); scrollToSection('solutions'); }}>
                    Solutions
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="footer-link" onClick={(e) => { e.preventDefault(); scrollToSection('how-it-works'); }}>
                    How it works
                  </a>
                </li>
                <li>
                  <a href="#hero" className="footer-link" onClick={(e) => { e.preventDefault(); onOpenDemo(); }}>
                    Use case
                  </a>
                </li>
                <li>
                  <a href="#features" className="footer-link" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}>
                    Features
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Pages 2 */}
            <div className="footer-col">
              <h4>Pages</h4>
              <ul className="footer-links-list">
                <li>
                  <a href="#ai-core" className="footer-link" onClick={(e) => { e.preventDefault(); scrollToSection('ai-core'); }}>
                    AI Introduction
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="footer-link" onClick={(e) => { e.preventDefault(); scrollToSection('pricing'); }}>
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#faq" className="footer-link" onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }}>
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#integrations" className="footer-link" onClick={(e) => { e.preventDefault(); scrollToSection('integrations'); }}>
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="#security" className="footer-link" onClick={(e) => { e.preventDefault(); scrollToSection('security'); }}>
                    Security
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Help */}
            <div className="footer-col">
              <h4>Help</h4>
              <ul className="footer-links-list">
                <li>
                  <a href="#faq" className="footer-link" onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }}>
                    24/7 Support
                  </a>
                </li>
                <li>
                  <button
                    onClick={onOpenTrial}
                    className="footer-link"
                    style={{ textAlign: 'left', cursor: 'pointer' }}
                  >
                    Contact Us
                  </button>
                </li>
                <li>
                  <span className="footer-link" style={{ opacity: 0.6 }}>
                    API Reference v4.2
                  </span>
                </li>
                <li>
                  <span className="footer-link" style={{ color: '#a1ff62' }}>
                    ● All Systems Operational
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="footer-bottom-bar">
            <div>
              © {new Date().getFullYear()} Sastik Technologies Inc. All rights reserved.
            </div>

            <div style={{ display: 'flex', gap: 20 }}>
              <a href="#hero" className="footer-link">Terms of Service</a>
              <a href="#hero" className="footer-link">Privacy Policy</a>
              <a href="#hero" className="footer-link">Security Disclosures</a>
            </div>

            <div className="social-links-row">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="Twitter">
                <Twitter size={16} />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="GitHub">
                <Github size={16} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
              <a href="https://discord.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="Discord">
                <MessageCircle size={16} />
              </a>
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
