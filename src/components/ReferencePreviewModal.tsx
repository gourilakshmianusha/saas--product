/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, ExternalLink, Code2, Eye, Sliders, Check, Copy } from 'lucide-react';

interface ReferencePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReferencePreviewModal: React.FC<ReferencePreviewModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'css' | 'tokens'>('preview');
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyCode = (code: string, name: string) => {
    navigator.clipboard.writeText(code);
    setCopiedToken(name);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  const tokens = [
    { label: 'Primary Accent', var: '--color-primary', val: '#781afe', desc: 'Electric Violet (Buttons & Highlights)' },
    { label: 'Secondary Lime', var: '--color-secondary', val: '#a1ff62', desc: 'Vibrant Mint (Badges & Accents)' },
    { label: 'Heading Color', var: '--color-heading', val: '#140f26', desc: 'Obsidian Navy (Titles & Text)' },
    { label: 'Default Text', var: '--color-default', val: '#777676', desc: 'Muted Body Grey' },
    { label: 'Dark Hero BG', var: '--color-dark-bg', val: '#09070c', desc: 'Deep Space Navy' },
    { label: 'Pricing CTA BG', var: '--color-cta-bg', val: '#1b0042', desc: 'Royal Deep Violet' },
    { label: 'Solution Hover', var: '--color-solution-bg', val: '#efe5fd', desc: 'Soft Lavender Tint' },
    { label: 'Border Divider', var: '--color-border', val: 'rgba(20, 15, 38, 0.08)', desc: 'Hairline Card Border' },
  ];

  const buttonCssSnippet = `/* Authentic Sastik Gradient Button with Split-Text Roll */
.thm-btn--gradient2 {
  font-weight: 700;
  overflow: hidden;
  padding: 16px 32px;
  background: transparent;
  font-family: var(--font-heading);
}

.thm-btn--gradient2::before {
  position: absolute;
  content: '';
  left: 0;
  height: 100%;
  width: 220px;
  z-index: -2;
  filter: blur(8px);
  border-radius: inherit;
  transform-origin: right;
  background: #ffffff;
  animation: spinBorder 4s linear infinite;
}

.thm-btn--gradient2::after {
  position: absolute;
  content: '';
  width: calc(100% - 2px);
  height: calc(100% - 2px);
  inset: 1px;
  z-index: -2;
  border-radius: inherit;
  background-color: #781afe;
}

.thm-btn .text {
  line-height: 1.4;
  color: #fff;
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  text-shadow: 0 1.3em #fff;
}

.thm-btn:hover .text {
  transform: translateY(-1.3em);
}`;

  return (
    <div className="modal-backdrop" onClick={onClose} style={{ zIndex: 1050 }}>
      <div
        className="modal-card"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: 960,
          width: '95vw',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          padding: '24px 28px',
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: 16, marginBottom: 16 }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#a1ff62', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase' }}>
              <Eye size={14} /> Live Reference & CSS Inspector
            </div>
            <h2 style={{ fontSize: '1.45rem', color: '#ffffff', margin: '4px 0 0 0' }}>
              Reference Website Preview (Sastik Home 3)
            </h2>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <a
              href="https://html.xpressbuddy.com/sastik/home-3.html"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                padding: '6px 14px',
                borderRadius: 100,
                background: 'rgba(255,255,255,0.08)',
                color: '#ffffff',
                fontSize: '0.8rem',
                border: '1px solid rgba(255,255,255,0.15)',
              }}
            >
              Open in New Window <ExternalLink size={13} />
            </a>

            <button
              onClick={onClose}
              className="modal-close-btn"
              style={{ position: 'static' }}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
          <button
            onClick={() => setActiveTab('preview')}
            style={{
              padding: '8px 16px',
              borderRadius: 8,
              fontSize: '0.875rem',
              fontWeight: 600,
              background: activeTab === 'preview' ? '#781afe' : 'rgba(255,255,255,0.06)',
              color: '#ffffff',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              transition: 'all 0.2s',
            }}
          >
            <Eye size={15} /> Live Reference Webpage
          </button>

          <button
            onClick={() => setActiveTab('tokens')}
            style={{
              padding: '8px 16px',
              borderRadius: 8,
              fontSize: '0.875rem',
              fontWeight: 600,
              background: activeTab === 'tokens' ? '#781afe' : 'rgba(255,255,255,0.06)',
              color: '#ffffff',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              transition: 'all 0.2s',
            }}
          >
            <Sliders size={15} /> CSS Design Tokens & Palette
          </button>

          <button
            onClick={() => setActiveTab('css')}
            style={{
              padding: '8px 16px',
              borderRadius: 8,
              fontSize: '0.875rem',
              fontWeight: 600,
              background: activeTab === 'css' ? '#781afe' : 'rgba(255,255,255,0.06)',
              color: '#ffffff',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              transition: 'all 0.2s',
            }}
          >
            <Code2 size={15} /> Button & Animation CSS Rules
          </button>
        </div>

        {/* Tab Content */}
        <div style={{ flexGrow: 1, minHeight: 460, overflowY: 'auto' }}>
          {activeTab === 'preview' && (
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', background: 'rgba(0,0,0,0.3)', padding: '6px 12px', borderRadius: 6 }}>
                <span>URL: https://html.xpressbuddy.com/sastik/home-3.html</span>
                <span>Demo Viewport Preview</span>
              </div>
              <iframe
                src="https://html.xpressbuddy.com/sastik/home-3.html"
                title="Sastik Reference Website"
                style={{
                  width: '100%',
                  height: 480,
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: 10,
                  backgroundColor: '#ffffff',
                }}
              />
            </div>
          )}

          {activeTab === 'tokens' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14 }}>
              {tokens.map((t) => (
                <div
                  key={t.var}
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 10,
                    padding: '14px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div
                      style={{
                        width: 34,
                        height: 34,
                        borderRadius: 8,
                        backgroundColor: t.val,
                        border: '1px solid rgba(255,255,255,0.2)',
                        boxShadow: `0 0 12px ${t.val}`,
                      }}
                    />
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.925rem', color: '#ffffff' }}>{t.label}</div>
                      <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.5)' }}>
                        {t.var}: {t.val}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#a1ff62', marginTop: 2 }}>{t.desc}</div>
                    </div>
                  </div>

                  <button
                    onClick={() => copyCode(t.val, t.label)}
                    style={{
                      padding: '6px 10px',
                      borderRadius: 6,
                      background: 'rgba(255,255,255,0.08)',
                      color: '#ffffff',
                      fontSize: '0.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 4,
                    }}
                  >
                    {copiedToken === t.label ? <Check size={12} color="#a1ff62" /> : <Copy size={12} />}
                    {copiedToken === t.label ? 'Copied' : 'Copy'}
                  </button>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'css' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>
                  Sastik Button Animation (.thm-btn--gradient2) Keyframe CSS:
                </span>
                <button
                  onClick={() => copyCode(buttonCssSnippet, 'css')}
                  style={{
                    padding: '6px 12px',
                    borderRadius: 6,
                    background: '#781afe',
                    color: '#ffffff',
                    fontSize: '0.8rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                  }}
                >
                  {copiedToken === 'css' ? <Check size={14} /> : <Copy size={14} />}
                  {copiedToken === 'css' ? 'Copied CSS!' : 'Copy Snippet'}
                </button>
              </div>

              <pre
                style={{
                  background: '#09070c',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: 10,
                  padding: '18px',
                  color: '#b1acc7',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.825rem',
                  overflowX: 'auto',
                  lineHeight: 1.6,
                }}
              >
                <code>{buttonCssSnippet}</code>
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
