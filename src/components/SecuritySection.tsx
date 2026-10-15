/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldCheck, Lock, KeyRound, FileCheck, EyeOff, Server } from 'lucide-react';

export const SecuritySection: React.FC = () => {
  const securityBadges = [
    {
      title: 'SOC 2 Type II Certified',
      desc: 'Annual rigorous third-party auditing validating operational security and availability.',
      icon: <FileCheck size={20} />,
    },
    {
      title: 'Hardware HSM AES-256 Encryption',
      desc: 'All customer data and credentials encrypted at rest and in transit (TLS 1.3).',
      icon: <Lock size={20} />,
    },
    {
      title: 'Zero-Trust Role-Based Access (RBAC)',
      desc: 'Granular permissions, SAML SSO, and ephemeral token access policies.',
      icon: <KeyRound size={20} />,
    },
    {
      title: 'GDPR, CCPA & HIPAA Compliant',
      desc: 'Full regulatory compliance, regional data residency, and automated DPA agreements.',
      icon: <ShieldCheck size={20} />,
    },
  ];

  return (
    <section id="security" className="security-section">
      <div className="sastik-container">
        <div className="security-layout-grid">
          {/* Left Column: Visual Radar & Pulsing Shield */}
          <div className="security-visual-wrap">
            <div className="security-radar-circle">
              <div className="security-radar-pulse" />
              <div className="security-radar-pulse" style={{ animationDelay: '1.5s' }} />

              <div className="security-shield-core">
                <ShieldCheck size={48} />
              </div>

              {/* Orbiting security tags */}
              <div
                style={{
                  position: 'absolute',
                  top: '10%',
                  right: '0%',
                  background: 'rgba(20, 15, 38, 0.9)',
                  border: '1px solid rgba(161, 255, 98, 0.4)',
                  padding: '6px 12px',
                  borderRadius: 20,
                  fontSize: '0.75rem',
                  color: '#a1ff62',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                }}
              >
                <Lock size={12} /> TLS 1.3 ENFORCED
              </div>

              <div
                style={{
                  position: 'absolute',
                  bottom: '12%',
                  left: '0%',
                  background: 'rgba(20, 15, 38, 0.9)',
                  border: '1px solid rgba(142, 112, 255, 0.4)',
                  padding: '6px 12px',
                  borderRadius: 20,
                  fontSize: '0.75rem',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                }}
              >
                <Server size={12} color="#8e70ff" /> ISOLATED TENANCY
              </div>
            </div>
          </div>

          {/* Right Column: Security Narrative & Badges */}
          <div>
            <div className="section-badge section-badge-dark">
              <span className="section-badge-dot" />
              <span>Enterprise Trust & Compliance</span>
            </div>
            <h2 style={{ color: '#ffffff', marginBottom: 14 }}>
              Move Fast Without Compromising Security
            </h2>
            <p style={{ color: 'var(--color-dark-body)', fontSize: '1.05rem', marginBottom: 32 }}>
              Enterprise-grade security keeps your workflows and data protected. Designed from the ground up for strict confidentiality and data integrity.
            </p>

            <div className="security-badges-list">
              {securityBadges.map((badge) => (
                <div key={badge.title} className="security-badge-item">
                  <div className="badge-item-icon">{badge.icon}</div>
                  <div>
                    <h4 style={{ color: '#ffffff', fontSize: '1rem', marginBottom: 2 }}>{badge.title}</h4>
                    <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.825rem', margin: 0 }}>
                      {badge.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
