/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Search, X, ArrowRight, Sparkles, Layers, Cpu, Shield, Zap, DollarSign, HelpCircle } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
}

interface SearchItem {
  id: string;
  title: string;
  category: string;
  icon: React.ReactNode;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const items: SearchItem[] = [
    { id: 'hero', title: 'AI Automation Overview', category: 'Introduction', icon: <Sparkles size={16} /> },
    { id: 'problems', title: "What's Slowing Your Team Down?", category: 'Problem Analysis', icon: <Zap size={16} /> },
    { id: 'solutions', title: 'How Sastik Improves Operations', category: 'Capabilities', icon: <Layers size={16} /> },
    { id: 'features', title: 'Everything You Need for Smarter Workflows', category: 'Core Features', icon: <Cpu size={16} /> },
    { id: 'how-it-works', title: 'Get Started in a Few Easy Steps', category: 'Workflow Setup', icon: <ArrowRight size={16} /> },
    { id: 'integrations', title: 'Connect 100+ Tools Seamlessly', category: 'Ecosystem', icon: <Layers size={16} /> },
    { id: 'ai-core', title: 'Deep Intelligence & Autonomous Agents', category: 'AI Architecture', icon: <Cpu size={16} /> },
    { id: 'pricing', title: 'Plans & Transparent Pricing', category: 'Billing', icon: <DollarSign size={16} /> },
    { id: 'security', title: 'Enterprise-Grade Security & SOC2', category: 'Compliance', icon: <Shield size={16} /> },
    { id: 'faq', title: 'Frequently Asked Questions', category: 'Support', icon: <HelpCircle size={16} /> },
  ];

  const filtered = items.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: 580 }}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close search">
          <X size={20} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, borderBottom: '1px solid rgba(255,255,255,0.12)', paddingBottom: 16, marginBottom: 20 }}>
          <Search size={20} color="#a1ff62" />
          <input
            type="text"
            placeholder="Search features, workflows, integrations, pricing..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            style={{
              background: 'none',
              border: 'none',
              color: '#ffffff',
              fontSize: '1.05rem',
              width: '100%',
              outline: 'none',
            }}
          />
        </div>

        <div style={{ maxHeight: 340, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 8 }}>
          {filtered.length > 0 ? (
            filtered.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  onClose();
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 14px',
                  borderRadius: 10,
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  color: '#ffffff',
                  textAlign: 'left',
                  transition: 'all 160ms ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(104, 64, 255, 0.18)';
                  e.currentTarget.style.borderColor = 'rgba(142, 112, 255, 0.4)';
                  e.currentTarget.style.transform = 'translateX(4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ color: '#8e70ff' }}>{item.icon}</div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.925rem' }}>{item.title}</div>
                    <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>{item.category}</div>
                  </div>
                </div>
                <ArrowRight size={14} color="rgba(255,255,255,0.4)" />
              </button>
            ))
          ) : (
            <div style={{ textAlign: 'center', padding: '30px 0', color: 'rgba(255,255,255,0.5)' }}>
              No matching sections found for "{query}"
            </div>
          )}
        </div>

        <div style={{ marginTop: 20, paddingTop: 14, borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', fontSize: '0.775rem', color: 'rgba(255,255,255,0.45)' }}>
          <span>Tip: Press ESC or click outside to dismiss</span>
          <span>Sastik Enterprise Index</span>
        </div>
      </div>
    </div>
  );
};
