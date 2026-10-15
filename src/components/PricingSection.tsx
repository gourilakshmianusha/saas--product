/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Check, ArrowRight, Zap, Shield, Sparkles } from 'lucide-react';

interface PricingSectionProps {
  onSelectPlan: (planName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

  const plans = [
    {
      name: 'SaStik Joyful Start',
      tagline: 'Best for exploring workflows and small project automation.',
      priceMonthly: '$0',
      priceAnnual: '$0',
      period: '14 Day\'s Free Trial',
      ctaText: 'Start Free Trial',
      featured: false,
      features: [
        'Up to 3 Active Workflow Pipelines',
        '1,000 Tasks executed per month',
        'Standard Webhook connectors (Slack, GitHub)',
        'Community Discord & Forum Support',
        'Single Team Member Access',
        'Standard 24-hr Log Retention',
      ],
    },
    {
      name: 'Basic Subscription',
      tagline: 'Ideal for scaling startups and fast-moving agile product teams.',
      priceMonthly: '$15',
      priceAnnual: '$12',
      period: billingCycle === 'annual' ? '/ Month (Billed Annually)' : '/ Month',
      ctaText: 'Get Started with Basic',
      featured: true,
      popularTag: 'Most Popular',
      features: [
        'Unlimited Active Workflow Pipelines',
        '50,000 Tasks executed per month',
        'All 100+ Native SaaS Integrations',
        'DeepSeek & GPT-4o Agent Routing',
        'Priority Slack & Email Support (4-hr SLA)',
        'Up to 10 Team Collaborator Seats',
        '30-Day Audit Logs & Performance Analytics',
      ],
    },
    {
      name: 'Enterprise Pro',
      tagline: 'Engineered for high-volume enterprise operations and compliance.',
      priceMonthly: '$190',
      priceAnnual: '$160',
      period: '/ Year (or $19/mo billed annually)',
      ctaText: 'Contact Enterprise Sales',
      featured: false,
      features: [
        'Dedicated Private VPC Agent Orchestration',
        'Unlimited Monthly Task Executions',
        'Custom AI Machine Learning Model Training',
        'SOC2 Type II, HIPAA & GDPR Compliance Packet',
        '24/7 Dedicated Solutions Engineer',
        'Unlimited Seats & Custom RBAC Roles',
        'Custom SLA Guarantee (99.99% Uptime)',
      ],
    },
  ];

  return (
    <section id="pricing" className="pricing-section">
      <div className="sastik-container">
        {/* Section Header */}
        <div className="section-header-center text-white">
          <div className="section-badge section-badge-dark">
            <span className="section-badge-dot" />
            <span>Transparent Pricing</span>
          </div>
          <h2 style={{ color: '#ffffff' }}>Powerful Automation That Scales With You</h2>
          <p style={{ color: 'var(--color-dark-body)' }}>
            Start free and upgrade as your business grows. No hidden transaction fees or surprise overages.
          </p>
        </div>

        {/* Monthly / Annual Toggle */}
        <div className="pricing-billing-switch">
          <div className="switch-pill-container">
            <button
              type="button"
              className={`billing-tab ${billingCycle === 'monthly' ? 'active' : ''}`}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly Billing
            </button>
            <button
              type="button"
              className={`billing-tab ${billingCycle === 'annual' ? 'active' : ''}`}
              onClick={() => setBillingCycle('annual')}
            >
              Annual Billing
            </button>
          </div>
          <span className="save-badge">Save 20% on Annual</span>
        </div>

        {/* Pricing Cards Grid */}
        <div className="pricing-cards-grid">
          {plans.map((plan) => {
            const price = billingCycle === 'annual' ? plan.priceAnnual : plan.priceMonthly;
            return (
              <div
                key={plan.name}
                className={`pricing-card ${plan.featured ? 'featured' : ''}`}
              >
                {plan.popularTag && <div className="popular-ribbon">{plan.popularTag}</div>}

                <div className="pricing-header">
                  <h3>{plan.name}</h3>
                  <p className="pricing-desc">{plan.tagline}</p>
                </div>

                <div className="pricing-amount-box">
                  <span className="price-val tabular-nums">{price}</span>
                  <span className="price-sub">{plan.period}</span>
                </div>

                <ul className="feature-check-list">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="check-item">
                      <Check size={16} className="check-icon" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => onSelectPlan(plan.name)}
                  className={plan.featured ? 'btn-primary' : 'btn-secondary'}
                  style={{ width: '100%', padding: '14px', justifyContent: 'center' }}
                >
                  {plan.ctaText} <ArrowRight size={16} />
                </button>
              </div>
            );
          })}
        </div>

        {/* Money-back guarantee note */}
        <div style={{ textAlign: 'center', marginTop: 45, fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>
          All paid subscriptions include our unconditional 30-day money-back guarantee. Need custom invoice terms?{' '}
          <button
            onClick={() => onSelectPlan('Enterprise Custom')}
            style={{ color: '#a1ff62', textDecoration: 'underline', fontWeight: 600 }}
          >
            Talk to sales
          </button>
        </div>
      </div>
    </section>
  );
};
