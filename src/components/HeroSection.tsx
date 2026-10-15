/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SastikButton } from './SastikButton.tsx';

interface HeroSectionProps {
  onOpenTrial: () => void;
  onOpenDemo: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenTrial, onOpenDemo }) => {
  return (
    <section id="hero" className="hero-area hero-area--three pos-rel z-1" data-bg-color="#09070c">
      <div className="as-hero-container pos-rel z-1 o-hidden">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="xb-hero-content">
                {/* Top breadcrumb with reference flag images */}
                <p className="xb-item--breadcrumd xb-blur-title ul_li heroTitleUp">
                  <img src="/assets/img/hero/flag-img01.png" alt="flag image" />
                  <img src="/assets/img/hero/flag-img02.png" alt="flag image" />
                  <img src="/assets/img/hero/flag-img03.png" alt="flag image" />
                  Join 1,000+ businesses, grow with confidence
                  <img src="/assets/img/hero/flag-img04.png" alt="flag image" />
                  <img src="/assets/img/hero/flag-img05.png" alt="flag image" />
                  <img src="/assets/img/hero/flag-img06.png" alt="flag image" />
                </p>

                {/* Main title */}
                <div className="sec-title mb-30">
                  <h2 className="title xb-blur-title heroTitleUp">
                    AI Automation for Faster Business Operations
                  </h2>
                </div>

                {/* Subtitle */}
                <p className="xb-item--content xb-blur-content">
                  Connect your tools, automate workflows, and help your team get more done with intelligent automation.
                </p>

                {/* CTAs with animated reference buttons */}
                <div className="xb-hero-btn ul_li justify-content-center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
                  <SastikButton onClick={onOpenTrial} variant="gradient" iconType="star">
                    Start a 14-Days Free Trial
                  </SastikButton>

                  <SastikButton onClick={onOpenDemo} variant="white" iconType="play">
                    Watch 2 Minutes Demo
                  </SastikButton>
                </div>

                {/* Hero Visual matching reference markup */}
                <div className="xb-item--img" style={{ position: 'relative', marginTop: 50 }}>
                  <img
                    src="/assets/img/hero/img03.png"
                    alt="AI Automation Dashboard Platform"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />

                  {/* Floating Card 1 */}
                  <div className="img img--1 updown" style={{ position: 'absolute', top: '15%', left: '-5%', maxWidth: '35%' }}>
                    <div className="xb-blur-img">
                      <img
                        src="/assets/img/hero/img04.png"
                        alt="Workflow Node"
                        style={{ width: '100%', height: 'auto', display: 'block', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.6))' }}
                      />
                    </div>
                  </div>

                  {/* Floating Card 2 */}
                  <div className="img img--2 updown-2" style={{ position: 'absolute', bottom: '15%', right: '-4%', maxWidth: '35%' }}>
                    <div className="xb-blur-img">
                      <img
                        src="/assets/img/hero/img05.png"
                        alt="Agent Telemetry"
                        style={{ width: '100%', height: 'auto', display: 'block', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.6))' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ambient reference shapes */}
        <div className="as-hero-shape">
          <div className="shape shape--1">
            <img src="/assets/img/shape/hero-light-effect01.png" alt="" />
          </div>
          <div className="shape shape--2">
            <img src="/assets/img/shape/hero-light-effect02.png" alt="" />
          </div>
          <div className="shape shape--3">
            <div className="img marquee-2">
              <img src="/assets/img/shape/particals-dot.png" alt="" />
              <img src="/assets/img/shape/particals-dot.png" alt="" />
            </div>
          </div>
          <div className="shape shape--4">
            <img src="/assets/img/shape/hero-circle.png" alt="" />
          </div>
          <div className="shape shape--5" />
        </div>
      </div>

      <div className="as-sec-shape">
        <div className="shape shape--1">
          <img src="/assets/img/shape/corner-shape1.png" alt="" />
        </div>
        <div className="shape shape--2">
          <img src="/assets/img/shape/corner-shape2.png" alt="" />
        </div>
      </div>
    </section>
  );
};
