/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Plus } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What makes this different from other automation tools?',
      a: 'Unlike brittle legacy drag-and-drop tools that break whenever an API payload slightly shifts, Sastik leverages autonomous reasoning models (DeepSeek, GPT-4o, Claude) to self-heal schema drifts, interpret unstructured text, and route tasks intelligently with zero human intervention.',
    },
    {
      q: 'What happens if an automation fails?',
      a: 'Sastik features an enterprise-grade failover pipeline: automated exponential backoff retries, dead-letter queues, and deterministic fallback rules. If an issue requires human input, the system sends an actionable alert to your Slack or email with a 1-click override button.',
    },
    {
      q: 'Do I need multiple tools after using this?',
      a: 'No. Sastik consolidates your orchestration, AI agent pipelines, webhook relays, and monitoring dashboards into one cohesive workspace, replacing fragmented point solutions and reducing your overall software stack costs by up to 40%.',
    },
    {
      q: 'How reliable are the automations?',
      a: 'Our multi-region cloud cluster guarantees a 99.99% uptime SLA. Every execution is backed by immutable cryptographic logs, zero-trust token isolation, and sub-second latency across global edge nodes.',
    },
    {
      q: 'Can I test Sastik with my actual production tools during the trial?',
      a: 'Yes. The 14-day free trial gives you unrestricted access to all 100+ connectors, unlimited pipeline runs, and complete sandbox environments so you can evaluate performance with real workflows before subscribing.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="faq-section section-padding">
      <div className="sastik-container">
        {/* Header */}
        <div className="section-header-center">
          <div className="section-badge">
            <span className="section-badge-dot" />
            <span>Got Questions?</span>
          </div>
          <h2>Everything You Need to Know</h2>
          <p>
            Clear answers to common questions about deployment, integration architecture, security, and pricing.
          </p>
        </div>

        {/* Accordion List */}
        <div className="faq-accordion-list">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className={`faq-item ${isOpen ? 'open' : ''}`}>
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <div className="faq-toggle-icon">
                    <Plus size={18} />
                  </div>
                </button>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
