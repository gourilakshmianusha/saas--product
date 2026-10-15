/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { X, Play, RefreshCw, CheckCircle, ArrowRight, Zap, Database, MessageSquare } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTrial: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose, onOpenTrial }) => {
  const [pipelineState, setPipelineState] = useState<'idle' | 'running' | 'completed'>('idle');
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (pipelineState === 'running') {
      if (activeStep < 3) {
        timer = setTimeout(() => {
          setActiveStep((prev) => prev + 1);
        }, 850);
      } else {
        setPipelineState('completed');
      }
    }
    return () => clearTimeout(timer);
  }, [pipelineState, activeStep]);

  useEffect(() => {
    if (isOpen) {
      setPipelineState('idle');
      setActiveStep(0);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const runSimulation = () => {
    setActiveStep(0);
    setPipelineState('running');
  };

  const steps = [
    { title: 'Trigger Ingested', detail: 'New Enterprise Lead submitted via website form', icon: <Zap size={18} /> },
    { title: 'AI Enrichment', detail: 'DeepSeek LLM extracts firmographic data and assigns 98/100 score', icon: <MessageSquare size={18} /> },
    { title: 'Automated CRM Sync', detail: 'HubSpot contact created + Slack priority notification dispatched to sales lead', icon: <Database size={18} /> },
    { title: 'Self-Optimizing Loop', detail: 'Telemetry metrics reported to analytics warehouse. Latency: 42ms', icon: <CheckCircle size={18} /> },
  ];

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: 640 }}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close demo">
          <X size={20} />
        </button>

        <div style={{ marginBottom: 20 }}>
          <div style={{ color: '#a1ff62', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: 8 }}>
            Interactive Automation Simulator
          </div>
          <h2 style={{ fontSize: '1.65rem', color: '#ffffff', marginBottom: 8 }}>
            Experience Sastik Pipeline in Action
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.925rem' }}>
            Watch an autonomous multi-node pipeline execute with real-time state tracking and instant synchronization.
          </p>
        </div>

        <div
          style={{
            background: 'rgba(0,0,0,0.4)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 14,
            padding: '24px',
            marginBottom: 24,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {steps.map((s, idx) => {
              const isCurrent = pipelineState === 'running' && activeStep === idx;
              const isDone = pipelineState === 'completed' || (pipelineState === 'running' && activeStep > idx);

              return (
                <div
                  key={s.title}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 14,
                    padding: '12px 14px',
                    borderRadius: 10,
                    background: isCurrent
                      ? 'rgba(104, 64, 255, 0.25)'
                      : isDone
                      ? 'rgba(161, 255, 98, 0.08)'
                      : 'rgba(255,255,255,0.02)',
                    border: isCurrent
                      ? '1px solid #8e70ff'
                      : isDone
                      ? '1px solid rgba(161, 255, 98, 0.3)'
                      : '1px solid rgba(255,255,255,0.05)',
                    transition: 'all 240ms ease',
                  }}
                >
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 8,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      background: isDone ? '#a1ff62' : isCurrent ? '#6840ff' : 'rgba(255,255,255,0.08)',
                      color: isDone ? '#09070c' : '#ffffff',
                    }}
                  >
                    {isDone ? <CheckCircle size={18} /> : s.icon}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.95rem', color: isDone ? '#a1ff62' : '#ffffff', display: 'flex', alignItems: 'center', gap: 8 }}>
                      {s.title}
                      {isCurrent && (
                        <span style={{ fontSize: '0.7rem', padding: '2px 6px', borderRadius: 4, background: '#6840ff', color: '#fff' }}>
                          Processing...
                        </span>
                      )}
                    </div>
                    <div style={{ fontSize: '0.825rem', color: 'rgba(255,255,255,0.65)', marginTop: 2 }}>
                      {s.detail}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          {pipelineState !== 'completed' ? (
            <button
              onClick={runSimulation}
              disabled={pipelineState === 'running'}
              className="btn-secondary"
              style={{ padding: '12px 20px', background: 'rgba(255,255,255,0.08)' }}
            >
              {pipelineState === 'running' ? (
                <>
                  <RefreshCw size={16} className="animate-spin" /> Running Pipeline...
                </>
              ) : (
                <>
                  <Play size={16} /> Execute Test Event
                </>
              )}
            </button>
          ) : (
            <button
              onClick={runSimulation}
              className="btn-secondary"
              style={{ padding: '12px 20px' }}
            >
              <RefreshCw size={16} /> Run Again
            </button>
          )}

          <button
            onClick={() => {
              onClose();
              onOpenTrial();
            }}
            className="btn-primary"
            style={{ padding: '12px 22px' }}
          >
            Start Free Trial <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
