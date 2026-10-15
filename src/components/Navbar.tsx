/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { SastikButton } from './SastikButton.tsx';
import { Search, Menu, X, ChevronDown, Sparkles } from 'lucide-react';

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
      if (window.scrollY > 30) {
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
    { label: 'Features', target: 'feature' },
    { label: 'How It Works', target: 'work' },
    { label: 'Integrations', target: 'integrations' },
    { label: 'SaaS Platform', target: 'introduction' },
    { label: 'Pricing', target: 'pricing' },
    { label: 'Testimonials', target: 'testimonials' },
    { label: 'Security', target: 'security' },
    { label: 'FAQ', target: 'faq' },
  ];

  return (
    <>
      <header
        className={`header-area header-area--three ${isSticky ? 'is-sticky' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          zIndex: 9999,
          padding: isSticky ? '14px 0' : '22px 0',
          backgroundColor: isSticky ? 'rgba(27, 0, 66, 0.95)' : 'rgba(9, 7, 12, 0.75)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: isSticky ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(255, 255, 255, 0.05)',
          boxShadow: isSticky ? '0 10px 30px rgba(0, 0, 0, 0.45)' : 'none',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <div className="sastik-container-wide">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 20,
            }}
          >
            {/* Left Zone: Single Official Sastik Logo */}
            <div className="xb-header-logo" style={{ flexShrink: 0 }}>
              <a
                href="#hero"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('hero');
                }}
                className="logo"
                aria-label="Sastik Home"
                style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
              >
                <img
                  src="/assets/img/logo/logo-white.svg"
                  alt="Sastik"
                  style={{ height: 28, width: 'auto', display: 'block' }}
                />
              </a>
            </div>

            {/* Center Zone: Desktop Navigation */}
            <nav className="desktop-navbar-nav" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ul
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  listStyle: 'none',
                  margin: 0,
                  padding: 0,
                }}
              >
                <li>
                  <a
                    href="#hero"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('hero');
                    }}
                    style={{
                      padding: '8px 16px',
                      borderRadius: 6,
                      fontSize: '15px',
                      fontWeight: 500,
                      color: activeSection === 'hero' ? '#a1ff62' : '#ffffff',
                      background: activeSection === 'hero' ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
                      transition: 'all 0.2s ease',
                      display: 'inline-block',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#a1ff62')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = activeSection === 'hero' ? '#a1ff62' : '#ffffff')}
                  >
                    Home
                  </a>
                </li>

                {/* Pages Dropdown */}
                <li
                  style={{ position: 'relative' }}
                  onMouseEnter={() => setPagesDropdownOpen(true)}
                  onMouseLeave={() => setPagesDropdownOpen(false)}
                >
                  <button
                    type="button"
                    onClick={() => setPagesDropdownOpen(!pagesDropdownOpen)}
                    style={{
                      padding: '8px 16px',
                      borderRadius: 6,
                      fontSize: '15px',
                      fontWeight: 500,
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 4,
                      background: 'transparent',
                      cursor: 'pointer',
                      border: 'none',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#a1ff62')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#ffffff')}
                  >
                    Pages <ChevronDown size={14} style={{ transform: pagesDropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 200ms' }} />
                  </button>

                  {pagesDropdownOpen && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        width: 250,
                        padding: '12px',
                        background: '#140f26',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        borderRadius: 14,
                        boxShadow: '0 20px 45px rgba(0, 0, 0, 0.7)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 4,
                        zIndex: 1000,
                      }}
                    >
                      {[
                        { name: 'Problems Faced', target: 'problems' },
                        { name: 'Core Solutions', target: 'solutions' },
                        { name: 'Features Engine', target: 'feature' },
                        { name: 'How It Works', target: 'work' },
                        { name: 'Integrations Hub', target: 'integrations' },
                        { name: 'SaaS All in One Platform', target: 'introduction' },
                        { name: 'Pricing Plans', target: 'pricing' },
                        { name: 'Client Testimonials', target: 'testimonials' },
                        { name: 'Security & Compliance', target: 'security' },
                        { name: 'FAQ', target: 'faq' },
                      ].map((sub) => (
                        <button
                          key={sub.target}
                          onClick={() => scrollToSection(sub.target)}
                          style={{
                            textAlign: 'left',
                            padding: '8px 12px',
                            borderRadius: 8,
                            color: 'rgba(255,255,255,0.85)',
                            fontSize: '0.875rem',
                            fontWeight: 500,
                            background: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                            transition: 'all 160ms ease',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(120, 26, 254, 0.35)';
                            e.currentTarget.style.color = '#a1ff62';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'transparent';
                            e.currentTarget.style.color = 'rgba(255,255,255,0.85)';
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
                    style={{
                      padding: '8px 16px',
                      borderRadius: 6,
                      fontSize: '15px',
                      fontWeight: 500,
                      color: activeSection === 'solutions' ? '#a1ff62' : '#ffffff',
                      background: activeSection === 'solutions' ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
                      transition: 'all 0.2s ease',
                      display: 'inline-block',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#a1ff62')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = activeSection === 'solutions' ? '#a1ff62' : '#ffffff')}
                  >
                    About Us
                  </a>
                </li>

                <li>
                  <a
                    href="#introduction"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('introduction');
                    }}
                    style={{
                      padding: '8px 16px',
                      borderRadius: 6,
                      fontSize: '15px',
                      fontWeight: 500,
                      color: activeSection === 'introduction' ? '#a1ff62' : '#ffffff',
                      background: activeSection === 'introduction' ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
                      transition: 'all 0.2s ease',
                      display: 'inline-block',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#a1ff62')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = activeSection === 'introduction' ? '#a1ff62' : '#ffffff')}
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
                    style={{
                      padding: '8px 16px',
                      borderRadius: 6,
                      fontSize: '15px',
                      fontWeight: 500,
                      color: activeSection === 'pricing' ? '#a1ff62' : '#ffffff',
                      background: activeSection === 'pricing' ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
                      transition: 'all 0.2s ease',
                      display: 'inline-block',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#a1ff62')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = activeSection === 'pricing' ? '#a1ff62' : '#ffffff')}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>

            {/* Right Zone: Search + Action Button + Hamburger */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexShrink: 0 }}>
              <button
                className="search-icon-btn"
                onClick={onOpenSearch}
                aria-label="Open search dialog (Cmd+K)"
                title="Search (Cmd+K)"
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  background: 'rgba(255, 255, 255, 0.06)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                <Search size={18} />
              </button>

              <div className="header-cta-btn-wrap">
                <SastikButton
                  onClick={onOpenTrial}
                  variant="gradient"
                  iconType="star"
                  style={{ padding: '12px 24px', fontSize: '15px' }}
                >
                  Start a 14-Days Free Trial
                </SastikButton>
              </div>

              <button
                className="mobile-hamburger-btn"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open mobile navigation menu"
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 8,
                  display: 'none',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  background: 'rgba(255, 255, 255, 0.06)',
                  cursor: 'pointer',
                }}
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer - ONLY mounted/visible when mobileMenuOpen is true */}
      {mobileMenuOpen && (
        <>
          <div
            className="mobile-drawer-overlay"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.75)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              zIndex: 10000,
            }}
          />

          <aside
            className="mobile-drawer"
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              width: '85%',
              maxWidth: 380,
              backgroundColor: '#140f26',
              borderLeft: '1px solid rgba(255, 255, 255, 0.12)',
              zIndex: 10001,
              display: 'flex',
              flexDirection: 'column',
              padding: '28px 24px',
              overflowY: 'auto',
              boxShadow: '-10px 0 40px rgba(0, 0, 0, 0.6)',
              animation: 'slideInRight 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: 20,
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                marginBottom: 20,
              }}
            >
              <img
                src="/assets/img/logo/logo-white.svg"
                alt="Sastik"
                style={{ height: 24, width: 'auto' }}
              />
              <button
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#ffffff',
                  cursor: 'pointer',
                  padding: 6,
                }}
              >
                <X size={24} />
              </button>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {navLinks.map((link) => (
                <li key={link.target}>
                  <button
                    onClick={() => scrollToSection(link.target)}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: '10px 14px',
                      borderRadius: 8,
                      background: 'none',
                      border: 'none',
                      color: activeSection === link.target ? '#a1ff62' : '#ffffff',
                      fontSize: '1rem',
                      fontWeight: 500,
                      cursor: 'pointer',
                      transition: 'background 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = 'none')}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSearch();
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  padding: '12px',
                  borderRadius: 100,
                  background: 'rgba(255, 255, 255, 0.08)',
                  color: '#ffffff',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                <Search size={16} /> Search Platform
              </button>

              <SastikButton
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTrial();
                }}
                variant="gradient"
                iconType="star"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Start a 14-Days Free Trial
              </SastikButton>
            </div>
          </aside>
        </>
      )}
    </>
  );
};
