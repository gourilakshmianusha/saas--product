/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SastikButton } from './SastikButton.tsx';

interface SolutionsSectionProps {
  onOpenDemo: () => void;
  onOpenTrial: () => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ onOpenDemo, onOpenTrial }) => {
  const solutions = [
    {
      title: 'Adaptive Growth',
      desc: 'Processes scale with demand while staying highly efficient and lean.',
      icon: '/assets/img/icon/solution-icon01.svg',
    },
    {
      title: 'Rapid Execution',
      desc: 'Work progresses automatically, minimizing delays and keeping track',
      icon: '/assets/img/icon/solution-icon02.svg',
    },
    {
      title: 'Work Faster',
      desc: 'Automated workflows help teams move quicker and smarter.',
      icon: '/assets/img/icon/solution-icon03.svg',
    },
    {
      title: 'Consistent Result',
      desc: 'Processes run smoothly, ensuring reliable, consistent, and timely results.',
      icon: '/assets/img/icon/solution-icon04.svg',
    },
  ];

  return (
    <section id="solutions" className="solution pos-rel z-1 pt-145 pb-120">
      <div className="container">
        <div className="as-solution-wrapper">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="sec-title sec-title--three mb-60 text-center">
                <p className="sub-title">
                  <img src="/assets/img/shape/sub-vactor.png" alt="" />
                  <span>Solutions</span>
                  <img src="/assets/img/shape/sub-vactor02.png" alt="" />
                </p>
                <div className="clearfix" />
                <h2 className="title d-inline-block" style={{ fontSize: 'clamp(2rem, 3.8vw, 3.2rem)' }}>
                  How Sastik Improves Your Operations
                </h2>
              </div>
            </div>
          </div>

          <div className="as-solution-inner">
            {solutions.map((item) => (
              <div key={item.title} className="as-solution-item">
                <div className="xb-item--holder">
                  <div className="xb-item--icon">
                    <img src={item.icon} alt="icon" width={48} height={48} />
                  </div>
                  <h2 className="xb-item--title">{item.title}</h2>
                  <p className="xb-item--content">{item.desc}</p>
                </div>
                <button
                  type="button"
                  className="xb-item--btn"
                  onClick={onOpenTrial}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: 0,
                    font: 'inherit',
                  }}
                >
                  Learn More
                  <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>

          {/* Sastik Button: See How it Works */}
          <div className="as-solution-btn text-center mt-60">
            <SastikButton onClick={onOpenDemo} variant="gradient" iconType="star">
              See How it Works
            </SastikButton>
          </div>
        </div>
      </div>

      <div className="as-solution-shape" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, textAlign: 'center', pointerEvents: 'none' }}>
        <img src="/assets/img/shape/line-shape.png" alt="" style={{ maxWidth: '100%' }} />
      </div>
      <div className="sec-line-shape top-line" style={{ position: 'absolute', top: 0, left: 0, right: 0, textAlign: 'center', pointerEvents: 'none' }}>
        <img src="/assets/img/shape/sec-stroke.png" alt="" style={{ maxWidth: '100%' }} />
      </div>
    </section>
  );
};
