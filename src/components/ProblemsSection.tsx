/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { RefreshCw, Unplug, AlertTriangle } from 'lucide-react';

export const ProblemsSection: React.FC = () => {
  const problems = [
    {
      number: '01',
      title: 'Manual Work Everywhere',
      icon: <RefreshCw size={26} />,
      bullets: [
        'Teams repeat the same tasks manually.',
        'Unnecessary operational effort increases.',
        'Automation opportunities remain unused.',
      ],
    },
    {
      number: '02',
      title: 'Disconnected Tools',
      icon: <Unplug size={26} />,
      bullets: [
        "Tools don't integrate properly.",
        'Data lives in separate silos.',
        'Constant context switching reduces focus.',
      ],
    },
    {
      number: '03',
      title: 'Inefficient Processes',
      icon: <AlertTriangle size={26} />,
      bullets: [
        'Information scattered across platforms.',
        'Manual reporting slows leadership.',
        'No real-time performance visibility.',
      ],
    },
  ];

  return (
    <section id="problems" className="problem-section section-padding">
      <div className="sastik-container">
        {/* Section Header */}
        <div className="section-header-center">
          <div className="section-badge">
            <span className="section-badge-dot" />
            <span>Operational Bottlenecks</span>
          </div>
          <h2>What's Slowing Your Team Down?</h2>
          <p>
            Traditional workflows are fragmented and manual. Here is what drains productivity and inflates operational drag across modern companies.
          </p>
        </div>

        {/* 3 Problem Cards */}
        <div className="problem-cards-grid">
          {problems.map((problem) => (
            <div key={problem.number} className="problem-card">
              <div className="problem-card-top">
                <span className="problem-number tabular-nums">{problem.number}</span>
                <div className="problem-icon-wrap">{problem.icon}</div>
              </div>

              <h3>{problem.title}</h3>

              <ul className="problem-bullet-list">
                {problem.bullets.map((bullet, idx) => (
                  <li key={idx} className="problem-bullet-item">
                    <span className="bullet-dot" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
