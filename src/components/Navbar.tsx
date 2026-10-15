/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { SastikLogo } from './SastikLogo.tsx';
import { Search, Menu, X, ArrowRight, ChevronDown } from 'lucide-react';

interface NavbarProps {
  onOpenSearch: () => void;
  onOpenTrial: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenSearch,
  onOpenTrial,
  activeSection,
}) => {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    setPagesDropdownOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const navLinks = [
    { label: 'Home', target: 'hero' },
    { label: 'Problems', target: 'problems' },
    { label: 'Solutions', target: 'solutions' },
    { label: 'Features', target: 'features' },
    { label: 'How It Works', target: 'how-it-works' },
    { label: 'Integrations', target: 'integrations' },
    { label: 'Pricing', target: 'pricing' },
    { label: 'FAQ', target: 'faq' },
  ];

  return (
    <>
      <header className={`sastik-navbar-wrapper ${isSticky ? 'is-sticky' : ''}`}>
        <div className="sastik-container-wide">
          <nav className="sastik-navbar">
            {/* Zone 1: Brand Logo */}
            <div className="navbar-brand">
              <a
                href="#hero"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('hero');
                }}
                aria-label="Sastik Home"
              >
                <SastikLogo theme="light" />
              </a>
            </div>

            {/* Zone 2: Navigation Links */}
            <ul className="navbar-links">
              <li>
                <a
                  href="#hero"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('hero');
                  }}
                  className={`navbar-link ${activeSection === 'hero' ? 'active' : ''}`}
                >
                  Home
                </a>
              </li>

              {/* Pages Dropdown with jump anchors */}
              <li
                style={{ position: 'relative' }}
                onMouseEnter={() => setPagesDropdownOpen(true)}
                onMouseLeave={() => setPagesDropdownOpen(false)}
              >
                <button
                  type="button"
                  className="navbar-link"
                  onClick={() => setPagesDropdownOpen(!pagesDropdownOpen)}
                  style={{ display: 'flex', alignItems: 'center', gap: 4 }}
                >
                  Pages <ChevronDown size={14} style={{ transform: pagesDropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 200ms' }} />
                </button>

                {pagesDropdownOpen && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: -20,
                      width: 220,
                      padding: '12px',
                      background: 'rgba(16, 12, 28, 0.98)',
                      backdropFilter: 'blur(16px)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: 14,
                      boxShadow: '0 20px 45px rgba(0, 0, 0, 0.6)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 4,
                      zIndex: 100,
                    }}
                  >
                    {[
                      { name: 'Problems Faced', target: 'problems' },
                      { name: 'Core Solutions', target: 'solutions' },
                      { name: 'Features Engine', target: 'features' },
                      { name: 'Workflow Builder', target: 'how-it-works' },
                      { name: 'DeepSeek AI Core', target: 'ai-core' },
                      { name: 'Security & Compliance', target: 'security' },
                    ].map((sub) => (
                      <button
                        key={sub.target}
                        onClick={() => scrollToSection(sub.target)}
                        style={{
                          textAlign: 'left',
                          padding: '8px 12px',
                          borderRadius: 8,
                          color: 'rgba(255,255,255,0.78)',
                          fontSize: '0.875rem',
                          fontWeight: 500,
                          transition: 'all 160ms ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'rgba(104, 64, 255, 0.2)';
                          e.currentTarget.style.color = '#ffffff';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'transparent';
                          e.currentTarget.style.color = 'rgba(255,255,255,0.78)';
                        }}
                      >
                        {sub.name}
                      </button>
                    ))}
                  </div>
                )}
              </li>

              <li>
                <a
                  href="#solutions"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('solutions');
                  }}
                  className={`navbar-link ${activeSection === 'solutions' ? 'active' : ''}`}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#ai-core"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('ai-core');
                  }}
                  className={`navbar-link ${activeSection === 'ai-core' ? 'active' : ''}`}
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('pricing');
                  }}
                  className={`navbar-link ${activeSection === 'pricing' ? 'active' : ''}`}
                >
                  Contact
                </a>
              </li>
            </ul>

            {/* Zone 3: Actions (Search Icon + CTA Button + Mobile Toggle) */}
            <div className="navbar-actions">
              <button
                className="search-icon-btn"
                onClick={onOpenSearch}
                aria-label="Open search dialog (Cmd+K)"
                title="Search (Cmd+K)"
              >
                <Search size={18} />
              </button>

              <button
                onClick={onOpenTrial}
                className="btn-primary"
                aria-label="Start 14-days free trial"
              >
                Start a 14-Days Free Trial <ArrowRight size={16} />
              </button>

              <button
                className="hamburger-btn"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open mobile navigation menu"
              >
                <Menu size={22} />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`mobile-drawer-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Drawer */}
      <aside className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-header">
          <SastikLogo theme="light" width={110} height={24} />
          <button
            className="drawer-close-btn"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close mobile navigation drawer"
          >
            <X size={22} />
          </button>
        </div>

        <ul className="mobile-nav-list">
          {navLinks.map((link) => (
            <li key={link.target}>
              <a
                href={`#${link.target}`}
                className="mobile-nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.target);
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 14 }}>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenSearch();
            }}
            className="btn-secondary"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            <Search size={16} /> Search Platform
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenTrial();
            }}
            className="btn-primary"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            Start a 14-Days Free Trial
          </button>
        </div>
      </aside>
    </>
  );
};
