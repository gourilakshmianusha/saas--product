/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  ArrowUpDown, 
  MessageSquareCode, 
  SlidersHorizontal, 
  RefreshCw, 
  Target, 
  Check, 
  ArrowRight,
  Sparkles,
  Layers,
  Cpu
} from 'lucide-react';

interface FeaturesSectionProps {
  onOpenTrial: () => void;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ onOpenTrial }) => {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);

  const features = [
    {
      title: 'Smart Priority Sorting',
      desc: 'Streamline workflow through smart priority ranking with intelligent automation.',
      icon: <ArrowUpDown size={22} />,
      tag: 'Rank-Engine v3',
      visualTitle: 'Autonomous Queue Prioritization',
      items: [
        { label: 'Critical: Database Read Replica Failover', score: 'P0 · 99.4%', status: 'Escalated' },
        { label: 'High: Enterprise License Renewal ($80k ARR)', score: 'P1 · 94.2%', status: 'Routed' },
        { label: 'Medium: API Rate-Limit Warning Notification', score: 'P2 · 78.1%', status: 'Queued' },
      ],
      metric: '4.2x Faster Response Time',
    },
    {
      title: 'Quick Smart Responses',
      desc: 'Sharp answers to keep conversations flowing smoothly without delays.',
      icon: <MessageSquareCode size={22} />,
      tag: 'Neural-Chat Sync',
      visualTitle: 'Multi-Modal Contextual Auto-Replies',
      items: [
        { label: 'Inbound Customer Question: "SSO SAML configuration for Okta"', score: 'Confidence 99.8%', status: 'Answered' },
        { label: 'Suggested Response: "Sastik supports SAML 2.0 with instant Okta provisioning."', score: 'Reviewed by AI', status: 'Delivered' },
        { label: 'Outcome: Ticket resolved in 1.2s without human agent wait', score: 'Satisfaction 5/5', status: 'Archived' },
      ],
      metric: '92% First-Touch Resolution',
    },
    {
      title: 'Smart AI Control',
      desc: 'Advanced AI control for seamless workflow automation without complexity.',
      icon: <SlidersHorizontal size={22} />,
      tag: 'Policy-Governed AI',
      visualTitle: 'Granular Guardrails & Autonomous Execution',
      items: [
        { label: 'Data Redaction: PII filtered before inference', score: 'Enforced', status: 'Active' },
        { label: 'Human-in-the-Loop Threshold: Actions > $5,000 need approval', score: 'Rule Active', status: 'Enforced' },
        { label: 'Execution Audit Trail: Immutable cryptographic logging', score: 'Compliant', status: 'Synced' },
      ],
      metric: '100% Policy Verification',
    },
    {
      title: 'Unified Channel Sync',
      desc: 'Connect every platform together, ensuring consistent messaging, instant updates, and smooth workflow management across teams.',
      icon: <RefreshCw size={22} />,
      tag: 'Omni-Channel Stream',
      visualTitle: 'Universal Webhook & Bi-Directional Event Relay',
      items: [
        { label: 'Slack #engineering ↔ Jira Cloud ↔ GitHub PRs', score: 'Bi-directional', status: 'Synchronized' },
        { label: 'Salesforce CRM ↔ HubSpot ↔ Stripe Billing', score: 'Real-time (12ms)', status: 'Connected' },
        { label: 'Customer Portal ↔ Zendesk ↔ Datadog APM', score: 'Zero Lag', status: 'Streaming' },
      ],
      metric: '0 Lost Context Switches',
    },
    {
      title: 'Intelligent Lead Ranking',
      desc: 'Automatically score and prioritize leads using smart data insights to help your team focus on high value prospects.',
      icon: <Target size={22} />,
      tag: 'Predictive Propensity ML',
      visualTitle: 'Algorithmic Lead Scoring & Deal Routing',
      items: [
        { label: 'Venture Capital Corp · 450 seats · Cloud migration', score: 'Score: 98/100', status: 'Priority A+' },
        { label: 'Global Retail Holdings · 1,200 seats · ERP Integration', score: 'Score: 96/100', status: 'Priority A+' },
        { label: 'Regional Agency · 35 seats · Marketing automation', score: 'Score: 84/100', status: 'Priority B' },
      ],
      metric: '68% Increase in Win Rates',
    },
  ];

  const current = features[activeFeatureIndex];

  return (
    <section id="features" className="features-section section-padding">
      <div className="sastik-container">
        {/* Section Header */}
        <div className="section-header-center">
          <div className="section-badge">
            <span className="section-badge-dot" />
            <span>Interactive Feature Engine</span>
          </div>
          <h2>Everything You Need for Smarter Workflows</h2>
          <p>
            Experience next-generation automation architecture designed to eliminate operational friction and orchestrate mission-critical workflows.
          </p>
        </div>

        {/* Interactive Showcase Grid */}
        <div className="features-interactive-wrapper">
          {/* Left Column: Feature Tabs */}
          <div className="features-tab-list">
            {features.map((feature, idx) => {
              const isActive = activeFeatureIndex === idx;
              return (
                <button
                  key={feature.title}
                  type="button"
                  className={`feature-tab-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveFeatureIndex(idx)}
                >
                  <div className="feature-tab-icon">{feature.icon}</div>
                  <div className="feature-tab-content">
                    <h4>{feature.title}</h4>
                    <p>{feature.desc}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Live Showcase Visual Canvas */}
          <div className="feature-showcase-canvas">
            <div>
              <div className="canvas-header">
                <div>
                  <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: 4 }}>
                    {current.visualTitle}
                  </h3>
                  <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>
                    {current.desc}
                  </span>
                </div>
                <span className="canvas-tag">{current.tag}</span>
              </div>

              {/* Dynamic Mock Interface */}
              <div className="canvas-live-demo">
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {current.items.map((row, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '12px 16px',
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: 10,
                        gap: 12,
                        flexWrap: 'wrap',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#a1ff62' }} />
                        <span style={{ fontSize: '0.9rem', color: '#ffffff', fontWeight: 500 }}>
                          {row.label}
                        </span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                        <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-mono)' }}>
                          {row.score}
                        </span>
                        <span
                          style={{
                            fontSize: '0.725rem',
                            fontWeight: 700,
                            padding: '3px 8px',
                            borderRadius: 6,
                            background: 'rgba(104, 64, 255, 0.25)',
                            color: '#8e70ff',
                            border: '1px solid rgba(142, 112, 255, 0.4)',
                          }}
                        >
                          {row.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom canvas strip */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: 24,
                marginTop: 20,
                borderTop: '1px solid rgba(255,255,255,0.08)',
                flexWrap: 'wrap',
                gap: 14,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Sparkles size={16} color="#a1ff62" />
                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#a1ff62' }}>
                  {current.metric}
                </span>
              </div>
              <button
                onClick={onOpenTrial}
                className="btn-primary"
                style={{ padding: '10px 20px', fontSize: '0.85rem' }}
              >
                Launch with this workflow <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
