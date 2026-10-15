/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SastikButton } from './SastikButton.tsx';

interface PricingSectionProps {
  onSelectPlan: (planName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  return (
    <section id="pricing" className="pricing pos-rel" data-bg-color="#1b0042" style={{ backgroundColor: '#1b0042' }}>
      <div className="as-pricing-container pos-rel z-1 o-clip pt-110 pb-120">
        <div className="container">
          <div className="as-pricing-wrapper">
            {/* Header */}
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-10 col-md-10">
                <div className="sec-title sec-title--three mb-60 text-center">
                  <h2 className="title clr-white" style={{ fontSize: 'clamp(2rem, 3.6vw, 3.2rem)', color: '#ffffff' }}>
                    Powerful Automation That Scales With You
                  </h2>
                  <p className="content clr-white" style={{ color: 'rgba(255, 255, 255, 0.8)', marginTop: 12 }}>
                    Start free and upgrade as your business grows.
                  </p>
                </div>
              </div>
            </div>

            {/* Pricing Cards Grid */}
            <div className="as-pricing-inner pos-rel">
              <div className="row mt-none-30 align-items-center align-items-lg-start">
                {/* Card 1: SaStik Joyful Start ($0) */}
                <div className="col-lg-4 col-md-6 mt-30">
                  <div className="as-pricing-item">
                    <div className="xb-item--holder">
                      <p className="xb-item--sub-title clr-white">SaStik Joyful Start</p>
                      <div className="xb-item--pricing_box">
                        <h3>$0</h3>
                        <p>/14 Day’s Free Trial</p>
                      </div>
                      <p className="xb-item--text">Free Subscription</p>
                    </div>
                    <ul className="xb-item--list list-unstyled" style={{ listStyle: 'none', padding: 0 }}>
                      <li><img src="/assets/img/icon/check-icon.svg" alt="icon" />Basic performance insights</li>
                      <li><img src="/assets/img/icon/check-icon.svg" alt="icon" />Up to 1M tokens included monthly</li>
                      <li><img src="/assets/img/icon/check-icon.svg" alt="icon" />Limited workflow automation</li>
                      <li><img src="/assets/img/icon/check-icon.svg" alt="icon" />Single user access</li>
                      <li><img src="/assets/img/icon/check-icon.svg" alt="icon" />Basic app integrations</li>
                      <li><img src="/assets/img/icon/check-icon.svg" alt="icon" />Community support</li>
                    </ul>
                    <div className="xb-item--btn mt-40">
                      <SastikButton
                        onClick={() => onSelectPlan('SaStik Joyful Start')}
                        variant="gradient"
                        iconType="star"
                      >
                        Start Free Plan
                      </SastikButton>
                    </div>
                    <div className="xb-item--cursor updown-2">
                      <img src="/assets/img/shape/cursor-icon02.png" alt="" />
                    </div>
                  </div>
                </div>

                {/* Card 2: Basic Subscription ($15) */}
                <div className="col-lg-4 col-md-6 mt-30">
                  <div className="as-pricing-item">
                    <div className="xb-item--holder">
                      <p className="xb-item--sub-title clr-white">SaStik Joyful Start</p>
                      <div className="xb-item--pricing_box">
                        <h3>$15</h3>
                        <p>Basic Subscription</p>
                      </div>
                      <p className="xb-item--text">Free Subscription</p>
                    </div>
                    <ul className="xb-item--list list-unstyled" style={{ listStyle: 'none', padding: 0 }}>
                      <li><img src="/assets/img/icon/check-icon.svg" alt="icon" />Standard performance reporting</li>
                      <li><img src="/assets/img/icon/check-icon.svg" alt="icon" />Up to 3M tokens included monthly</li>
                      <li><img src="/assets/img/icon/check-icon.svg" alt="icon" />Smart priority sorting</li>
                      <li><img src="/assets/img/icon/check-icon.svg" alt="icon" />Create and manage automated workflows</li>
                      <li><img src="/assets/img/icon/check-icon.svg" alt="icon" />Basic integrations with popular apps</li>
                      <li><img src="/assets/img/icon/check-icon.svg" alt="icon" />Performance tracking dashboard</li>
                    </ul>
                    <div className="xb-item--btn mt-40">
                      <SastikButton
                        onClick={() => onSelectPlan('Basic Subscription')}
                        variant="gradient"
                        iconType="star"
                      >
                        Start Essential Plan
                      </SastikButton>
                    </div>
                  </div>
                </div>

                {/* Card 3: Enterprise Pro ($160/Year) */}
                <div className="col-lg-4 col-md-12 mt-30">
                  <div className="as-pricing-item pro-item">
                    <div
                      className="xb-item--top ul_li_between bg_img"
                      style={{
                        backgroundImage: 'url(/assets/img/shape/pricing-bg-shape.png)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div className="xb-item--holder">
                        <div className="xb-item--pricing_box">
                          <h3>$160</h3>
                          <p>/Year</p>
                        </div>
                        <p className="xb-item--text">Enterprise Pro</p>
                      </div>
                      <p className="xb-item--text_box">
                        <span className="text">SaStik Enterprise Pro</span>
                        <span className="dot-shape marquee-2">
                          <img src="/assets/img/shape/mini-dot.png" alt="" />
                          <img src="/assets/img/shape/mini-dot.png" alt="" />
                          <img src="/assets/img/shape/mini-dot.png" alt="" />
                        </span>
                      </p>
                    </div>

                    <p className="xb-item--content" style={{ color: 'rgba(255, 255, 255, 0.75)', margin: '15px 0' }}>
                      Essential Automation Toolkit
                    </p>

                    <ul className="xb-item--list list-unstyled" style={{ listStyle: 'none', padding: 0 }}>
                      <li><img src="/assets/img/icon/check-icon02.svg" alt="icon" />Unlimited automation projects</li>
                      <li><img src="/assets/img/icon/check-icon02.svg" alt="icon" />Advanced analytics & reporting dashboard</li>
                      <li><img src="/assets/img/icon/check-icon02.svg" alt="icon" />Memory-powered workflow optimization</li>
                      <li><img src="/assets/img/icon/check-icon02.svg" alt="icon" />Advanced comparison & testing tools</li>
                      <li><img src="/assets/img/icon/check-icon02.svg" alt="icon" />Premium community & priority support</li>
                    </ul>

                    <div className="xb-item--btn mt-30">
                      <SastikButton
                        onClick={() => onSelectPlan('Enterprise Pro')}
                        variant="white"
                        iconType="none"
                      >
                        Start Enterprise Pro
                      </SastikButton>
                    </div>
                  </div>
                </div>
              </div>

              <div className="blur-shape" style={{ position: 'absolute', pointerEvents: 'none', zIndex: 0 }}>
                <img src="/assets/img/shape/pricing-blur02.png" alt="" />
              </div>
            </div>
          </div>

          <div className="as-pricing-shape">
            <div className="shape shape--1">
              <img src="/assets/img/shape/pricing-blur01.png" alt="" />
              <span className="img dot marquee-2">
                <img src="/assets/img/shape/particals-dot02.png" alt="" />
                <img src="/assets/img/shape/particals-dot02.png" alt="" />
              </span>
              <span className="img blur" />
            </div>
          </div>
        </div>

        <div className="as-sec-shape">
          <div className="shape shape--3"><img src="/assets/img/shape/corner-shape03.png" alt="" /></div>
          <div className="shape shape--4"><img src="/assets/img/shape/corner-shape04.png" alt="" /></div>
        </div>
      </div>
    </section>
  );
};
