/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Cable, Layers, PlayCircle, Check, ArrowRight, Sparkles, Database, Slack, Github } from 'lucide-react';

interface HowItWorksProps {
  onOpenTrial: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksProps> = ({ onOpenTrial }) => {
  const [activeStep, setActiveStep] = useState<1 | 2 | 3>(1);

  const steps = [
    {
      num: '01',
      title: 'Connect Your Tools',
      desc: 'Plug Sastik into your tools and data sources securely. Setup is quick, seamless, and requires no heavy configuration.',
      icon: <Cable size={22} />,
      badge: 'Zero-Code Setup',
    },
    {
      num: '02',
      title: 'Build Your Workflow',
      desc: "Define your workflows once. Sastik's AI handles repetitive tasks, adapts to change, and keeps everything running smoothly.",
      icon: <Layers size={22} />,
      badge: 'Visual Canvas + AI Prompting',
    },
    {
      num: '03',
      title: 'Run Automation',
      desc: 'Monitor performance, gain insights, and optimize in real time. Stay in control while your work runs itself.',
      icon: <PlayCircle size={22} />,
      badge: 'Self-Healing Telemetry',
    },
  ];

  return (
    <section id="how-it-works" className="how-it-works-section section-padding">
      <div className="sastik-container">
        {/* Header */}
        <div className="section-header-center">
          <div className="section-badge">
            <span className="section-badge-dot" />
            <span>Effortless Onboarding</span>
          </div>
          <h2>Get Started with Sastik in a Few Easy Steps</h2>
          <p>
            From zero to autonomous enterprise operations in less than five minutes. No heavy migrations or code rewrites required.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="how-steps-grid">
          {steps.map((s, index) => {
            const stepNum = (index + 1) as 1 | 2 | 3;
            const isSelected = activeStep === stepNum;
            return (
              <div
                key={s.num}
                className="how-step-card"
                onClick={() => setActiveStep(stepNum)}
                style={{
                  cursor: 'pointer',
                  borderColor: isSelected ? 'var(--color-primary)' : 'var(--color-border-light)',
                  boxShadow: isSelected ? '0 12px 35px rgba(104, 64, 255, 0.12)' : 'var(--shadow-sm)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                  <div className="how-step-badge">{s.num}</div>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: isSelected ? 'var(--color-primary)' : 'var(--color-body-light)',
                      background: isSelected ? 'rgba(104, 64, 255, 0.08)' : 'rgba(0,0,0,0.03)',
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-pill)',
                    }}
                  >
                    {s.badge}
                  </span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Interactive Visual Workflow Timeline */}
        <div className="workflow-timeline-box">
          <div className="stepper-nav">
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--color-heading)' }}>
                Interactive Workflow Stage
              </span>
              <span style={{ fontSize: '0.825rem', color: 'var(--color-body)', background: 'var(--color-bg-alt)', padding: '3px 8px', borderRadius: 6 }}>
                Step 0{activeStep} Active
              </span>
            </div>

            <div style={{ display: 'flex', gap: 8 }}>
              <button
                type="button"
                className={`stepper-btn ${activeStep === 1 ? 'active' : ''}`}
                onClick={() => setActiveStep(1)}
              >
                01. Connect
              </button>
              <button
                type="button"
                className={`stepper-btn ${activeStep === 2 ? 'active' : ''}`}
                onClick={() => setActiveStep(2)}
              >
                02. Build
              </button>
              <button
                type="button"
                className={`stepper-btn ${activeStep === 3 ? 'active' : ''}`}
                onClick={() => setActiveStep(3)}
              >
                03. Run
              </button>
            </div>
          </div>

          {/* Timeline Visual Box */}
          <div
            style={{
              background: '#09070c',
              borderRadius: 16,
              padding: '30px',
              color: '#ffffff',
              minHeight: 220,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {activeStep === 1 && (
              <div style={{ textAlign: 'center', maxWidth: 540 }}>
                <div style={{ display: 'flex', justifyContent: 'center', gap: 18, marginBottom: 18 }}>
                  <div style={{ padding: 14, background: 'rgba(255,255,255,0.08)', borderRadius: 12, border: '1px solid rgba(255,255,255,0.15)' }}>
                    <Slack size={28} color="#e01e5a" />
                  </div>
                  <div style={{ padding: 14, background: 'rgba(255,255,255,0.08)', borderRadius: 12, border: '1px solid rgba(255,255,255,0.15)' }}>
                    <Github size={28} color="#ffffff" />
                  </div>
                  <div style={{ padding: 14, background: 'rgba(255,255,255,0.08)', borderRadius: 12, border: '1px solid rgba(255,255,255,0.15)' }}>
                    <Database size={28} color="#336791" />
                  </div>
                </div>
                <h4 style={{ color: '#a1ff62', fontSize: '1.2rem', marginBottom: 6 }}>
                  One-Click Secure OAuth & Webhook Pairing
                </h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
                  Authorize Sastik with read/write granular scoped permissions. Credentials are encrypted at rest with hardware HSM AES-256.
                </p>
              </div>
            )}

            {activeStep === 2 && (
              <div style={{ textAlign: 'center', maxWidth: 540 }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 16px', background: 'rgba(104, 64, 255, 0.2)', border: '1px solid #8e70ff', borderRadius: 20, color: '#ffffff', marginBottom: 16, fontSize: '0.85rem' }}>
                  <Sparkles size={16} color="#a1ff62" /> Natural Language Workflow Generator
                </div>
                <h4 style={{ color: '#ffffff', fontSize: '1.2rem', marginBottom: 6 }}>
                  "When a user signs up with corporate domain, sync to HubSpot and ping #sales"
                </h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
                  Sastik instantly compiles natural language prompts into deterministic, typed state machines with error fallbacks.
                </p>
              </div>
            )}

            {activeStep === 3 && (
              <div style={{ textAlign: 'center', maxWidth: 540 }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#a1ff62', fontSize: '0.85rem', fontWeight: 700, marginBottom: 12 }}>
                  <Check size={18} /> AUTOMATION RUNNING AT 99.99% HEALTH
                </div>
                <h4 style={{ color: '#ffffff', fontSize: '1.2rem', marginBottom: 6 }}>
                  Live Telemetry, Auto-Retry & Real-Time Dashboards
                </h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
                  Sastik continuously observes task execution, self-heals transient network timeouts, and delivers live logs to your team.
                </p>
              </div>
            )}
          </div>

          <div style={{ marginTop: 20, display: 'flex', justifyContent: 'flex-end' }}>
            <button onClick={onOpenTrial} className="btn-primary">
              Build your first workflow <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
