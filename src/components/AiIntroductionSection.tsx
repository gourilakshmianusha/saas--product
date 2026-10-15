/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Bot, Sparkles, Cpu, Compass, Activity, BrainCircuit, ArrowRight } from 'lucide-react';

interface AiIntroductionProps {
  onOpenTrial: () => void;
}

export const AiIntroductionSection: React.FC<AiIntroductionProps> = ({ onOpenTrial }) => {
  const [activeModel, setActiveModel] = useState<string>('DeepSeek');

  const models = [
    {
      name: 'DeepSeek',
      role: 'Intelligence Analyst',
      coords: { top: '12%', left: '8%' },
      tag: 'Deep Reasoning R1',
      desc: 'Parses complex multi-step logical operations and formulates optimal workflow routing with mathematical precision.',
    },
    {
      name: 'AI Operational',
      role: 'Automation Orchestrator',
      coords: { top: '15%', right: '8%' },
      tag: 'Autonomous Engine',
      desc: 'Coordinates stateful event handling, failure retries, and high-throughput concurrent task scheduling.',
    },
    {
      name: 'ChatGPT',
      role: 'Live Data Hunter',
      coords: { bottom: '14%', left: '10%' },
      tag: 'GPT-4o Realtime',
      desc: 'Extracts real-time information across unbounded internet and API sources to enrich operational data.',
    },
    {
      name: 'Claude',
      role: 'Logic & Code Verifier',
      coords: { bottom: '14%', right: '10%' },
      tag: 'Sonnet 3.7',
      desc: 'Audits code syntax, validates schema transformations, and ensures zero runtime regressions.',
    },
  ];

  return (
    <section id="ai-core" className="ai-intro-section">
      <div className="sastik-container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <div className="section-header-center text-white">
          <div className="section-badge section-badge-dark">
            <span className="section-badge-dot" />
            <span>Custom AI Machine Learning</span>
          </div>
          <h2 style={{ color: '#ffffff' }}>Unlock the Full Strength of SaaS All in One Platform</h2>
          <p style={{ color: 'var(--color-dark-body)' }}>
            Custom intelligence powering innovation. Connect frontier reasoning models into a unified autonomous pipeline.
          </p>
        </div>

        {/* Futuristic AI Visual & Orbiting Cards */}
        <div className="ai-intro-visual">
          {/* Orbit Rings */}
          <div className="orbit-ring orbit-ring-1" />
          <div className="orbit-ring orbit-ring-2" />

          {/* Central Glowing AI Core */}
          <div className="ai-core-sphere">
            <BrainCircuit size={44} color="#09070c" />
            <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#09070c', marginTop: 4, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              SASTIK CORE
            </span>
            <span style={{ fontSize: '0.65rem', color: 'rgba(9, 7, 12, 0.75)', fontWeight: 600 }}>
              AI ORCHESTRATOR
            </span>
          </div>

          {/* Orbiting Agent Cards */}
          {models.map((m) => {
            const isHovered = activeModel === m.name;
            return (
              <div
                key={m.name}
                className="orbit-agent-card"
                style={{
                  ...m.coords,
                  borderColor: isHovered ? 'var(--color-secondary)' : 'rgba(255,255,255,0.14)',
                  cursor: 'pointer',
                }}
                onMouseEnter={() => setActiveModel(m.name)}
                onClick={() => setActiveModel(m.name)}
              >
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 10,
                    background: 'rgba(104, 64, 255, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: isHovered ? 'var(--color-secondary)' : '#ffffff',
                    flexShrink: 0,
                  }}
                >
                  <Bot size={20} />
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <h4 style={{ fontSize: '0.95rem', color: '#ffffff', margin: 0 }}>{m.name}</h4>
                    <span style={{ fontSize: '0.7rem', padding: '1px 6px', borderRadius: 4, background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.6)' }}>
                      {m.tag}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: isHovered ? 'var(--color-secondary)' : 'rgba(255,255,255,0.5)', margin: 0 }}>
                    {m.role}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Model Focus Bar */}
        <div
          style={{
            maxWidth: 620,
            margin: '35px auto 0',
            background: 'rgba(20, 15, 38, 0.7)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: 16,
            padding: '20px 24px',
            textAlign: 'center',
            backdropFilter: 'blur(10px)',
          }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#a1ff62', fontSize: '0.8rem', fontWeight: 700, marginBottom: 6 }}>
            <Sparkles size={14} /> ACTIVE AGENT PROFILE: {activeModel}
          </div>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.925rem', marginBottom: 16 }}>
            {models.find((m) => m.name === activeModel)?.desc}
          </p>
          <button onClick={onOpenTrial} className="btn-primary" style={{ padding: '10px 22px', fontSize: '0.875rem' }}>
            Deploy with {activeModel} <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
};
