/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { X, Check, ArrowRight, Loader2, Sparkles, ShieldCheck } from 'lucide-react';

interface FreeTrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlan?: string;
}

export const FreeTrialModal: React.FC<FreeTrialModalProps> = ({
  isOpen,
  onClose,
  initialPlan = 'SaStik Joyful Start',
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [selectedTools, setSelectedTools] = useState<string[]>(['Slack', 'GitHub', 'PostgreSQL']);
  const [isProvisioning, setIsProvisioning] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setError('');
      setIsProvisioning(false);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const toolsList = ['Slack', 'GitHub', 'HubSpot', 'Jira', 'PostgreSQL', 'Stripe', 'Notion', 'Linear'];

  const toggleTool = (tool: string) => {
    if (selectedTools.includes(tool)) {
      setSelectedTools(selectedTools.filter((t) => t !== tool));
    } else {
      setSelectedTools([...selectedTools, tool]);
    }
  };

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid work email.');
      return;
    }
    setError('');
    setStep(2);
  };

  const handleProvisionWorkspace = () => {
    setIsProvisioning(true);
    setTimeout(() => {
      setIsProvisioning(false);
      setStep(3);
    }, 1400);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: 540 }}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close trial signup">
          <X size={20} />
        </button>

        {step === 1 && (
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#a1ff62', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: 12 }}>
              <Sparkles size={14} /> 14-Day Full-Feature Trial · {initialPlan}
            </div>
            <h2 style={{ fontSize: '1.75rem', color: '#ffffff', marginBottom: 10 }}>
              Start Automating with Sastik
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', marginBottom: 24 }}>
              Zero credit card required. Connect your tools and launch your first AI agent pipeline in under 3 minutes.
            </p>

            <form onSubmit={handleStep1Submit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)', marginBottom: 6 }}>
                  Work Email Address *
                </label>
                <input
                  type="email"
                  placeholder="alex@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: 10,
                    background: 'rgba(255,255,255,0.06)',
                    border: error ? '1px solid #ef4444' : '1px solid rgba(255,255,255,0.15)',
                    color: '#ffffff',
                    outline: 'none',
                  }}
                />
                {error && <span style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: 4, display: 'block' }}>{error}</span>}
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)', marginBottom: 6 }}>
                  Company Name (Optional)
                </label>
                <input
                  type="text"
                  placeholder="Acme Technologies"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: 10,
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    color: '#ffffff',
                    outline: 'none',
                  }}
                />
              </div>

              <button type="submit" className="btn-primary" style={{ marginTop: 10, width: '100%', padding: '14px' }}>
                Next: Choose Integrations <ArrowRight size={16} />
              </button>
            </form>

            <div style={{ marginTop: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 18, fontSize: '0.785rem', color: 'rgba(255,255,255,0.5)' }}>
              <span>✓ Instant access</span>
              <span>✓ Enterprise isolation</span>
              <span>✓ Cancel anytime</span>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#a1ff62', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: 12 }}>
              Step 2 of 2 · Ecosystem Setup
            </div>
            <h2 style={{ fontSize: '1.65rem', color: '#ffffff', marginBottom: 8 }}>
              Select Tools to Automate
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.925rem', marginBottom: 20 }}>
              Sastik will provision live webhook connectors and secure sandbox credentials for your workspace.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10, marginBottom: 24 }}>
              {toolsList.map((tool) => {
                const isSelected = selectedTools.includes(tool);
                return (
                  <button
                    key={tool}
                    type="button"
                    onClick={() => toggleTool(tool)}
                    style={{
                      padding: '12px 14px',
                      borderRadius: 10,
                      background: isSelected ? 'rgba(104, 64, 255, 0.2)' : 'rgba(255,255,255,0.04)',
                      border: isSelected ? '1px solid #8e70ff' : '1px solid rgba(255,255,255,0.08)',
                      color: isSelected ? '#ffffff' : 'rgba(255,255,255,0.75)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      transition: 'all 160ms ease',
                    }}
                  >
                    <span>{tool}</span>
                    {isSelected && <Check size={16} color="#a1ff62" />}
                  </button>
                );
              })}
            </div>

            <div style={{ display: 'flex', gap: 12 }}>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="btn-secondary"
                style={{ flex: 1, padding: '13px' }}
                disabled={isProvisioning}
              >
                Back
              </button>
              <button
                type="button"
                onClick={handleProvisionWorkspace}
                className="btn-primary"
                style={{ flex: 2, padding: '13px' }}
                disabled={isProvisioning}
              >
                {isProvisioning ? (
                  <>
                    <Loader2 size={18} className="animate-spin" /> Provisioning Node...
                  </>
                ) : (
                  <>
                    Provision Workspace <Sparkles size={16} />
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div style={{ textAlign: 'center', padding: '10px 0' }}>
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: '50%',
                background: 'rgba(161, 255, 98, 0.15)',
                border: '1px solid #a1ff62',
                color: '#a1ff62',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
              }}
            >
              <ShieldCheck size={36} />
            </div>
            <h2 style={{ fontSize: '1.75rem', color: '#ffffff', marginBottom: 10 }}>
              Workspace Ready!
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.975rem', marginBottom: 24, lineHeight: 1.6 }}>
              A confirmation link and temporary admin keys have been generated for <strong>{email}</strong>. Connected <strong>{selectedTools.length}</strong> active tool nodes.
            </p>

            <div
              style={{
                background: 'rgba(0,0,0,0.3)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 12,
                padding: '16px',
                textAlign: 'left',
                fontSize: '0.85rem',
                fontFamily: 'var(--font-mono)',
                color: '#b1acc7',
                marginBottom: 24,
              }}
            >
              <div style={{ color: '#a1ff62' }}>✓ Sastik Autonomous Agent Core initialized</div>
              <div style={{ color: '#ffffff' }}>✓ Connectors: {selectedTools.join(', ')}</div>
              <div style={{ color: 'rgba(255,255,255,0.6)' }}>✓ 14-day unrestricted trial license active</div>
            </div>

            <button
              onClick={onClose}
              className="btn-primary"
              style={{ width: '100%', padding: '14px' }}
            >
              Go to Workspace Console
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
