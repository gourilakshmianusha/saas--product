/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Play, 
  Sparkles, 
  Bot, 
  CheckCircle2, 
  Terminal, 
  Activity, 
  Workflow, 
  Database, 
  MessageSquare, 
  GitBranch, 
  Slack, 
  ShieldCheck,
  Zap
} from 'lucide-react';

interface HeroSectionProps {
  onOpenTrial: () => void;
  onOpenDemo: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenTrial, onOpenDemo }) => {
  const [typedMessage, setTypedMessage] = useState('');
  const [activeNode, setActiveNode] = useState<'slack' | 'github' | 'postgres' | 'hubspot'>('slack');

  const fullPrompt = "Sastik Agent: Ingesting webhook from Slack #ops-pipeline... Routing to GPT-4o & DeepSeek for real-time lead qualification... Success (38ms).";

  // Typing effect for the AI copilot panel
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedMessage(fullPrompt.slice(0, index));
      index++;
      if (index > fullPrompt.length + 30) {
        index = 0;
      }
    }, 45);
    return () => clearInterval(interval);
  }, []);

  // Node cycle effect
  useEffect(() => {
    const nodes: ('slack' | 'github' | 'postgres' | 'hubspot')[] = ['slack', 'github', 'postgres', 'hubspot'];
    let idx = 0;
    const timer = setInterval(() => {
      idx = (idx + 1) % nodes.length;
      setActiveNode(nodes[idx]);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="hero-section">
      {/* Ambient background glows & grid */}
      <div className="hero-ambient-glow" />
      <div className="hero-grid-pattern" />

      <div className="sastik-container">
        {/* Hero Copy & CTA Container */}
        <div className="hero-content-wrapper">
          {/* Top announcement */}
          <div className="hero-announcement">
            <span className="hero-badge-tag">New</span>
            <span>Join 1,000+ businesses, grow with confidence</span>
            <Sparkles size={14} color="#a1ff62" />
          </div>

          {/* Main Heading */}
          <h1 className="hero-headline">
            AI Automation for Faster Business Operations
          </h1>

          {/* Supporting Text */}
          <p className="hero-subtext">
            Connect your tools, automate workflows, and help your team get more done with intelligent automation.
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="hero-cta-group">
            <button onClick={onOpenTrial} className="btn-primary" aria-label="Start free trial">
              Start a 14-Days Free Trial <ArrowRight size={16} />
            </button>
            <button onClick={onOpenDemo} className="btn-secondary" aria-label="Watch interactive demo">
              <Play size={15} fill="currentColor" /> Watch Interactive Demo
            </button>
          </div>

          {/* Trust strip */}
          <div className="hero-trust-bar">
            <div className="hero-trust-item">
              <CheckCircle2 size={16} color="#a1ff62" />
              <span>No credit card required</span>
            </div>
            <div className="hero-trust-item">
              <CheckCircle2 size={16} color="#a1ff62" />
              <span>14-day full feature access</span>
            </div>
            <div className="hero-trust-item">
              <CheckCircle2 size={16} color="#a1ff62" />
              <span>Enterprise SOC2 ready</span>
            </div>
          </div>
        </div>

        {/* Sophisticated AI Automation Visual */}
        <div className="hero-visual-container">
          <div className="hero-visual-frame">
            {/* Visual Header Bar */}
            <div className="hero-visual-topbar">
              <div className="window-dots">
                <span className="window-dot" style={{ backgroundColor: '#ff5f56' }} />
                <span className="window-dot" style={{ backgroundColor: '#ffbd2e' }} />
                <span className="window-dot" style={{ backgroundColor: '#27c93f' }} />
              </div>

              <div className="hero-system-status">
                <span>ORCHESTRATOR CLUSTER // US-EAST-01</span>
                <div className="system-status-pill">
                  <span className="status-beacon" />
                  <span>ALL SYSTEMS OPERATIONAL</span>
                </div>
              </div>
            </div>

            {/* 3-Column Autonomous Grid */}
            <div className="hero-workflow-grid">
              {/* Left Column: Source Event Trigger Nodes */}
              <div className="workflow-column">
                <div 
                  className="app-node-card"
                  style={{
                    borderColor: activeNode === 'slack' ? 'rgba(161, 255, 98, 0.6)' : 'rgba(255, 255, 255, 0.1)',
                    background: activeNode === 'slack' ? 'rgba(161, 255, 98, 0.08)' : 'rgba(255, 255, 255, 0.03)',
                  }}
                >
                  <div className="app-node-icon" style={{ background: 'rgba(224, 30, 90, 0.15)', color: '#e01e5a' }}>
                    <MessageSquare size={22} />
                  </div>
                  <div className="app-node-meta">
                    <h4>Slack Inbound Webhook</h4>
                    <p>Trigger · #customer-support</p>
                  </div>
                  {activeNode === 'slack' && (
                    <span style={{ marginLeft: 'auto', width: 8, height: 8, borderRadius: '50%', background: '#a1ff62', boxShadow: '0 0 10px #a1ff62' }} />
                  )}
                </div>

                <div 
                  className="app-node-card"
                  style={{
                    borderColor: activeNode === 'github' ? 'rgba(142, 112, 255, 0.6)' : 'rgba(255, 255, 255, 0.1)',
                    background: activeNode === 'github' ? 'rgba(104, 64, 255, 0.12)' : 'rgba(255, 255, 255, 0.03)',
                  }}
                >
                  <div className="app-node-icon" style={{ background: 'rgba(255, 255, 255, 0.1)', color: '#ffffff' }}>
                    <GitBranch size={22} />
                  </div>
                  <div className="app-node-meta">
                    <h4>GitHub Event Dispatch</h4>
                    <p>PR Reviewer Agent · repo/core</p>
                  </div>
                  {activeNode === 'github' && (
                    <span style={{ marginLeft: 'auto', width: 8, height: 8, borderRadius: '50%', background: '#8e70ff', boxShadow: '0 0 10px #8e70ff' }} />
                  )}
                </div>

                <div className="app-node-card">
                  <div className="app-node-icon" style={{ background: 'rgba(255, 122, 0, 0.15)', color: '#ff7a00' }}>
                    <Zap size={22} />
                  </div>
                  <div className="app-node-meta">
                    <h4>HubSpot CRM Sync</h4>
                    <p>Deal Stage Updated · $45,000</p>
                  </div>
                </div>
              </div>

              {/* Center Column: Sastik AI Orchestrator Core */}
              <div className="orchestrator-core">
                <div className="orchestrator-header">
                  <div className="orchestrator-title">
                    <div className="ai-pulse-icon">
                      <Bot size={18} color="#ffffff" />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.05rem', color: '#ffffff' }}>Sastik Autonomous Orchestrator</h3>
                      <span style={{ fontSize: '0.75rem', color: '#a1ff62' }}>Active Neural Engine v4.2</span>
                    </div>
                  </div>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.45)' }}>
                    EVENT #8942-B
                  </span>
                </div>

                {/* Live stream terminal box */}
                <div className="orchestrator-stream">
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'rgba(255,255,255,0.5)', marginBottom: 6, fontSize: '0.75rem' }}>
                    <Terminal size={13} />
                    <span>NEURAL TELEMETRY STREAM</span>
                  </div>
                  <p style={{ margin: 0, minHeight: 48 }}>
                    {typedMessage}
                    <span style={{ display: 'inline-block', width: 6, height: 14, background: '#a1ff62', marginLeft: 4, verticalAlign: 'middle', animation: 'blink 1s step-end infinite' }} />
                  </p>
                </div>

                {/* Mini Metrics */}
                <div className="orchestrator-metrics">
                  <div className="mini-metric">
                    <div className="mini-metric-val tabular-nums" style={{ color: '#a1ff62' }}>18ms</div>
                    <div className="mini-metric-lbl">Decision Latency</div>
                  </div>
                  <div className="mini-metric">
                    <div className="mini-metric-val tabular-nums">99.98%</div>
                    <div className="mini-metric-lbl">Success Rate</div>
                  </div>
                  <div className="mini-metric">
                    <div className="mini-metric-val tabular-nums" style={{ color: '#8e70ff' }}>14,280</div>
                    <div className="mini-metric-lbl">Ops / Min</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Execution Output Destinations */}
              <div className="workflow-column">
                <div 
                  className="app-node-card"
                  style={{
                    borderColor: activeNode === 'postgres' ? 'rgba(161, 255, 98, 0.6)' : 'rgba(255, 255, 255, 0.1)',
                    background: activeNode === 'postgres' ? 'rgba(161, 255, 98, 0.08)' : 'rgba(255, 255, 255, 0.03)',
                  }}
                >
                  <div className="app-node-icon" style={{ background: 'rgba(51, 103, 145, 0.2)', color: '#336791' }}>
                    <Database size={22} />
                  </div>
                  <div className="app-node-meta">
                    <h4>PostgreSQL Warehouse</h4>
                    <p>Vector Embeddings Indexed</p>
                  </div>
                  {activeNode === 'postgres' && (
                    <span style={{ marginLeft: 'auto', width: 8, height: 8, borderRadius: '50%', background: '#a1ff62', boxShadow: '0 0 10px #a1ff62' }} />
                  )}
                </div>

                <div 
                  className="app-node-card"
                  style={{
                    borderColor: activeNode === 'hubspot' ? 'rgba(142, 112, 255, 0.6)' : 'rgba(255, 255, 255, 0.1)',
                    background: activeNode === 'hubspot' ? 'rgba(104, 64, 255, 0.12)' : 'rgba(255, 255, 255, 0.03)',
                  }}
                >
                  <div className="app-node-icon" style={{ background: 'rgba(104, 64, 255, 0.2)', color: '#8e70ff' }}>
                    <Activity size={22} />
                  </div>
                  <div className="app-node-meta">
                    <h4>Automated Resolution</h4>
                    <p>Response sent · Ticket closed</p>
                  </div>
                  {activeNode === 'hubspot' && (
                    <span style={{ marginLeft: 'auto', width: 8, height: 8, borderRadius: '50%', background: '#8e70ff', boxShadow: '0 0 10px #8e70ff' }} />
                  )}
                </div>

                <div className="app-node-card">
                  <div className="app-node-icon" style={{ background: 'rgba(16, 185, 129, 0.2)', color: '#10b981' }}>
                    <ShieldCheck size={22} />
                  </div>
                  <div className="app-node-meta">
                    <h4>Audit Trail Signed</h4>
                    <p>Zero-Trust Cryptographic Log</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Glowing animated SVG connection beams */}
            <svg className="workflow-connections-svg" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#781afe" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="#a1ff62" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#6840ff" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              {/* Left to Center paths */}
              <path d="M 280 80 C 350 80, 360 170, 420 170" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" fill="none" strokeDasharray="4 4" />
              <path d="M 280 180 C 350 180, 360 190, 420 190" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" fill="none" strokeDasharray="4 4" />
              <path d="M 280 280 C 350 280, 360 210, 420 210" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" fill="none" strokeDasharray="4 4" />

              {/* Center to Right paths */}
              <path d="M 720 170 C 780 170, 790 80, 850 80" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" fill="none" strokeDasharray="4 4" />
              <path d="M 720 190 C 780 190, 790 180, 850 180" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" fill="none" strokeDasharray="4 4" />
              <path d="M 720 210 C 780 210, 790 280, 850 280" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" fill="none" strokeDasharray="4 4" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
