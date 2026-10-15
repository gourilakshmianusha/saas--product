/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export const AiIntroductionSection: React.FC = () => {
  return (
    <section id="introduction" className="introduction pos-rel pb-15">
      <div className="container">
        <div className="as-introduction-wrapper pt-135 pb-120">
          {/* Section Header */}
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="sec-title sec-title--three mb-60 text-center">
                <p className="sub-title">
                  <img src="/assets/img/shape/sub-vactor.png" alt="" />
                  <span>AI Introduction</span>
                  <img src="/assets/img/shape/sub-vactor02.png" alt="" />
                </p>
                <h2 className="title" style={{ fontSize: 'clamp(1.9rem, 3.8vw, 3.2rem)' }}>
                  Unlock the Full Strength of SaaS All in One Platform
                </h2>
                <p className="content" style={{ color: 'var(--color-default)', marginTop: 12 }}>
                  Powerful automation solutions, all in one platform
                </p>
              </div>
            </div>
          </div>

          {/* 3-Column Introduction Wrap matching reference */}
          <div className="as-introduction-wrap pos-rel">
            <div className="row g-10 align-items-center">
              {/* Left Column: col-lg-4 col-md-5 col-12 */}
              <div className="col-lg-4 col-md-5 col-12">
                <div className="as-introduction-inner top-item">
                  {/* Card 1: Custom AI Machine Learning */}
                  <div className="as-asintroduction-item">
                    <div className="xb-item--inner">
                      <div className="xb-item--holder">
                        <h2 className="xb-item--title">Custom AI Machine Learning</h2>
                        <p className="xb-item--content">Custom Intelligence Powering Innovation.</p>
                      </div>
                      <div className="xb-item--img blure-shadow">
                        <img src="/assets/img/integrate/img01.png" alt="Custom AI" style={{ width: '100%', display: 'block' }} />
                        <div className="code">
                          <div className="marquee-2">
                            <img src="/assets/img/integrate/img02.png" alt="code telemetry" style={{ width: '100%', display: 'block' }} />
                            <img src="/assets/img/integrate/img02.png" alt="code telemetry" style={{ width: '100%', display: 'block' }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card 2: DeepSeek */}
                  <div className="as-asintroduction-item">
                    <div className="xb-item--inner">
                      <div className="xb-item--holder">
                        <div className="xb-item--top ul_li_between" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                          <h2 className="xb-item--title" style={{ margin: 0 }}>DeepSeek</h2>
                          <p className="xb-item--tag" style={{ margin: 0 }}>
                            <span>Intelligence Analyst</span>
                          </p>
                        </div>
                        <p className="xb-item--content">Excels in reasoning, calculations, and programming with clear.</p>
                      </div>
                      <div className="xb-item--img">
                        <div className="img">
                          <img src="/assets/img/integrate/img03.png" alt="DeepSeek" style={{ width: '100%', height: 'auto', display: 'block' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center Column: Animated SVG Circuit Lines & Sastik Core (Desktop & Tablet) */}
              <div className="col-lg-4 col-md-2 d-none d-md-block text-center">
                <div className="as-introduction-logo">
                  <div className="xb-item--line">
                    {/* Line 1 SVG */}
                    <div className="line line--1">
                      <svg width="188" height="415" viewBox="0 0 188 415" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M187.5 164H77.9999C66.9542 164 57.9999 155.046 57.9999 144V21C57.9999 9.9543 49.0456 1 37.9999 1L1.5 1"
                          stroke="url(#paint0_linear_intro_1)"
                          strokeOpacity="0.5"
                          strokeWidth="2"
                          strokeDasharray="6 6"
                        />
                        <path
                          d="M187 251H78C66.9543 251 58 259.954 58 271V394C58 405.046 49.0457 414 38 414H0"
                          stroke="url(#paint1_linear_intro_1)"
                          strokeOpacity="0.5"
                          strokeWidth="2"
                          strokeDasharray="6 6"
                        />
                        <defs>
                          <linearGradient id="paint0_linear_intro_1" x1="162.5" y1="164" x2="1.5" y2="1.00001" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="#F2EBFE" />
                            <stop offset="100%" stopColor="#9451F5" />
                          </linearGradient>
                          <linearGradient id="paint1_linear_intro_1" x1="11" y1="414" x2="162.5" y2="251" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="#9451F5" />
                            <stop offset="100%" stopColor="#F3EBFE" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>

                    {/* Line 2 SVG */}
                    <div className="line line--2">
                      <svg width="180" height="415" viewBox="0 0 180 415" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M0 164H107C118.046 164 127 155.046 127 144V21C127 9.9543 135.947 1 146.992 1C154.816 1 165.397 1 179.5 1"
                          stroke="url(#paint0_linear_intro_2)"
                          strokeOpacity="0.5"
                          strokeWidth="2"
                          strokeDasharray="6 6"
                        />
                        <path
                          d="M0 251H107C118.046 251 127 259.954 127 271V394C127 405.046 135.954 414 147 414H179"
                          stroke="url(#paint1_linear_intro_2)"
                          strokeWidth="2"
                          strokeDasharray="6 6"
                        />
                        <defs>
                          <linearGradient id="paint0_linear_intro_2" x1="180" y1="1.00001" x2="16.5" y2="164" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="#9451F5" />
                            <stop offset="100%" stopColor="#F5EFFE" />
                          </linearGradient>
                          <linearGradient id="paint1_linear_intro_2" x1="179" y1="414" x2="20.5" y2="251" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="#9451F5" />
                            <stop offset="100%" stopColor="#F5EFFE" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>

                  {/* Central Core Glowing Sastik Logo */}
                  <div className="xb-item--logo as-security-logo main-logo">
                    <span className="opacityAnim">
                      <span className="core-pulse-wrap" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 80, height: 80, borderRadius: '50%', background: 'linear-gradient(135deg, #781afe 0%, #a1ff62 100%)', boxShadow: '0 0 45px rgba(120, 26, 254, 0.65)' }}>
                        <img src="/assets/img/security/main-logo.svg" alt="Sastik Core Logo" width={44} height={44} />
                      </span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Mobile Central Brand Badge (Visible on mobile only between cards) */}
              <div className="col-12 d-md-none text-center my-3">
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 64, height: 64, borderRadius: '50%', background: 'linear-gradient(135deg, #781afe 0%, #a1ff62 100%)', boxShadow: '0 0 25px rgba(120, 26, 254, 0.5)' }}>
                  <img src="/assets/img/security/main-logo.svg" alt="Sastik Core Logo" width={34} height={34} />
                </div>
              </div>

              {/* Right Column: col-lg-4 col-md-5 col-12 */}
              <div className="col-lg-4 col-md-5 col-12">
                <div className="as-introduction-inner">
                  {/* Card 3: AI Operational Automation */}
                  <div className="as-asintroduction-item">
                    <div className="xb-item--inner">
                      <div className="xb-item--holder">
                        <h2 className="xb-item--title">AI Operational Automation</h2>
                        <p className="xb-item--content">Streamline repetitive tasks on autopilot.</p>
                      </div>
                      <div className="xb-item--img shadow-img">
                        <img src="/assets/img/integrate/img05.png" alt="Operational Automation" style={{ width: '100%', height: 'auto', display: 'block' }} />
                        <div className="apps-img">
                          <img className="rotateanim" src="/assets/img/integrate/img06.png" alt="app wheel" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card 4: ChatGPT 5 */}
                  <div className="as-asintroduction-item">
                    <div className="xb-item--inner">
                      <div className="xb-item--holder">
                        <div className="xb-item--top ul_li_between" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                          <h2 className="xb-item--title" style={{ margin: 0 }}>ChatGPT 5</h2>
                          <p className="xb-item--tag" style={{ margin: 0 }}>
                            <span>Live Data Hunter</span>
                          </p>
                        </div>
                        <p className="xb-item--content">Provides up-to-date insights and news from trusted sources.</p>
                      </div>
                      <div className="xb-item--img">
                        <div className="img">
                          <img src="/assets/img/integrate/img04.png" alt="ChatGPT 5" style={{ width: '100%', height: 'auto', display: 'block' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Blur Shape */}
            <div className="blur-shape">
              <img src="/assets/img/shape/int-blur-bg.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative top & bottom dividing stroke lines */}
      <div className="sec-line-shape top-line">
        <img src="/assets/img/shape/sec-stroke.png" alt="" />
      </div>
      <div className="sec-line-shape bottom-line">
        <img src="/assets/img/shape/sec-stroke.png" alt="" />
      </div>
    </section>
  );
};
