/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Slack, 
  Github, 
  Database, 
  Layers, 
  Figma, 
  CreditCard, 
  Cpu, 
  Cloud, 
  Zap, 
  MessageSquare,
  FileText,
  Workflow
} from 'lucide-react';

export const IntegrationsSection: React.FC = () => {
  const row1 = [
    { name: 'Slack', icon: <Slack size={20} color="#e01e5a" />, desc: 'Instant messaging & alerts' },
    { name: 'GitHub', icon: <Github size={20} color="#ffffff" />, desc: 'Repository & PR reviewer' },
    { name: 'HubSpot', icon: <Zap size={20} color="#ff7a00" />, desc: 'CRM & lifecycle sync' },
    { name: 'Jira Software', icon: <Layers size={20} color="#0052cc" />, desc: 'Issue & sprint tracking' },
    { name: 'PostgreSQL', icon: <Database size={20} color="#336791" />, desc: 'Relational data warehouse' },
    { name: 'Stripe', icon: <CreditCard size={20} color="#635bff" />, desc: 'Subscription billing' },
    { name: 'Notion', icon: <FileText size={20} color="#ffffff" />, desc: 'Knowledge base auto-sync' },
    { name: 'Linear', icon: <Workflow size={20} color="#5e6ad2" />, desc: 'Streamlined issue cycles' },
  ];

  const row2 = [
    { name: 'Figma', icon: <Figma size={20} color="#f24e1e" />, desc: 'Design handoff trigger' },
    { name: 'Amazon AWS', icon: <Cloud size={20} color="#ff9900" />, desc: 'Lambda & S3 data lake' },
    { name: 'Salesforce', icon: <Cloud size={20} color="#00a1e0" />, desc: 'Enterprise account sync' },
    { name: 'Zendesk', icon: <MessageSquare size={20} color="#03363d" />, desc: 'Support desk triage' },
    { name: 'Datadog', icon: <Cpu size={20} color="#632ca6" />, desc: 'APM & anomaly alerts' },
    { name: 'Discord', icon: <MessageSquare size={20} color="#5865f2" />, desc: 'Community ops automation' },
    { name: 'Google Cloud', icon: <Cloud size={20} color="#4285f4" />, desc: 'BigQuery & Cloud Run' },
    { name: 'Zapier Webhooks', icon: <Zap size={20} color="#ff4a00" />, desc: 'Universal endpoint mesh' },
  ];

  return (
    <section id="integrations" className="integrations-section">
      <div className="sastik-container" style={{ marginBottom: 45, textAlign: 'center' }}>
        <div className="section-badge section-badge-dark">
          <span className="section-badge-dot" />
          <span>Connected Ecosystem</span>
        </div>
        <h2 style={{ color: '#ffffff' }}>Connect Everything. Work Without Limits.</h2>
        <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 640, margin: '14px auto 0', fontSize: '1.1rem' }}>
          One platform for all your tools and workflows. Over 100+ native connectors ready in seconds.
        </p>
      </div>

      {/* Row 1 Marquee (Left moving) */}
      <div className="marquee-container" aria-label="First row of integrations">
        <div className="marquee-track">
          {[...row1, ...row1].map((item, idx) => (
            <div key={`${item.name}-${idx}`} className="integration-card">
              <div className="integration-icon">{item.icon}</div>
              <div>
                <strong style={{ display: 'block', fontSize: '0.925rem' }}>{item.name}</strong>
                <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 Marquee (Right moving) */}
      <div className="marquee-container" aria-label="Second row of integrations">
        <div className="marquee-track-reverse">
          {[...row2, ...row2].map((item, idx) => (
            <div key={`${item.name}-${idx}`} className="integration-card">
              <div className="integration-icon">{item.icon}</div>
              <div>
                <strong style={{ display: 'block', fontSize: '0.925rem' }}>{item.name}</strong>
                <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
