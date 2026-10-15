/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Award, Star, Users, Zap, Check } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  return (
    <section className="trust-strip-section" aria-label="Trust and rating metrics">
      <div className="sastik-container-wide">
        <div className="trust-strip-grid">
          {/* Item 1 */}
          <div className="trust-item">
            <div className="trust-item-icon">
              <Award size={22} />
            </div>
            <div className="trust-item-content">
              <h4>#1 Rated AI Workspace</h4>
              <p>Top rated by professionals worldwide</p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="trust-item">
            <div className="trust-item-icon">
              <Zap size={22} />
            </div>
            <div className="trust-item-content">
              <h4>Built for Teams That Scale Fast</h4>
              <p>Smarter Workflows. Faster Results</p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="trust-item">
            <div className="trust-item-icon">
              <Users size={22} />
            </div>
            <div className="trust-item-content">
              <h4 className="tabular-nums">15,000+ Founders</h4>
              <p>Trusted by business leaders globally</p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="trust-item">
            <div className="trust-item-icon">
              <Star size={22} fill="currentColor" />
            </div>
            <div className="trust-item-content">
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <h4 className="tabular-nums" style={{ margin: 0 }}>4.9 / 5.0 Rating</h4>
                <div className="rating-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
              </div>
              <p>Verified reviews on G2 & Capterra</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
