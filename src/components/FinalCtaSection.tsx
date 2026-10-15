/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SastikButton } from './SastikButton.tsx';
import { Star } from 'lucide-react';

interface FinalCtaSectionProps {
  onOpenTrial: () => void;
  onOpenDemo: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenTrial, onOpenDemo }) => {
  const brandLogos = [
    '/assets/img/brand/as-brand-img01.png',
    '/assets/img/brand/as-brand-img02.png',
    '/assets/img/brand/as-brand-img03.png',
    '/assets/img/brand/as-brand-img04.png',
    '/assets/img/brand/as-brand-img05.png',
  ];

  return (
    <>
      {/* 1. CTA Section */}
      <section className="cta pos-rel" data-bg-color="#1b0042" style={{ backgroundColor: '#1b0042' }}>
        <div className="as-cta-wrapper pos-rel">
          <div className="container">
            <div className="as-cta-inner">
              <div className="xb-item--inner">
                <div className="sec-title sec-title--three mb-45">
                  <h2 className="title clr-white" style={{ fontSize: 'clamp(2.1rem, 4vw, 3.4rem)', color: '#ffffff' }}>
                    Make Automation Your Competitive Advantage
                  </h2>
                  <p className="content clr-white" style={{ color: 'rgba(255, 255, 255, 0.8)', marginTop: 14 }}>
                    Enterprise-grade security keeps your workflows and data protected
                  </p>
                </div>
                <div className="xb-item--btn ul_li" style={{ display: 'flex', alignItems: 'center', gap: 18, flexWrap: 'wrap' }}>
                  <SastikButton
                    onClick={onOpenTrial}
                    variant="gradient"
                    iconType="star"
                  >
                    Start a 14-Days Free Trial
                  </SastikButton>

                  <SastikButton
                    onClick={onOpenDemo}
                    variant="white"
                    iconType="play"
                  >
                    Watch 2 Minutes Demo
                  </SastikButton>
                </div>
              </div>
            </div>
          </div>

          <div className="cta-bg-video">
            <video loop muted playsInline autoPlay poster="/assets/img/cta/video-poster.png">
              <source src="/assets/img/cta/cta-video.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="blur-bottom-shape" />
        </div>

        <div className="as-sec-shape">
          <div className="shape shape--5"><img src="/assets/img/shape/corner-shape05.png" alt="" /></div>
          <div className="shape shape--6"><img src="/assets/img/shape/corner-shape06.png" alt="" /></div>
        </div>
      </section>

      {/* 2. Brand Section */}
      <section className="brand-section pb-55" data-bg-color="#000" style={{ backgroundColor: '#000000' }}>
        <div className="container">
          <div className="as-brand-wrapper">
            <div className="row mt-none-30 align-items-center">
              <div className="col-xl-3 col-lg-4 col-md-5 mt-30">
                <div className="as-brand-content">
                  <p className="xb-item--title" style={{ fontSize: '1.05rem', color: '#ffffff', margin: '0 0 10px 0', lineHeight: 1.4 }}>
                    Trusted by <span style={{ color: '#a1ff62', fontWeight: 700 }}>15,000+</span> founders & business owners
                  </p>
                  <div className="xb-item--holder ul_li" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <ul className="xb-item--star ul_li" style={{ listStyle: 'none', display: 'flex', gap: 3, margin: 0, padding: 0 }}>
                      {[...Array(5)].map((_, i) => (
                        <li key={i}>
                          <Star size={13} fill="#f59e0b" color="#f59e0b" />
                        </li>
                      ))}
                    </ul>
                    <p className="xb-item--review" style={{ margin: 0, fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.7)' }}>
                      4.9 Average user ratings
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-xl-9 col-lg-8 col-md-7 mt-30">
                <div className="as-brand-marquee marquee-right" style={{ overflow: 'hidden' }}>
                  <ul className="as-brand-list ul_li" style={{ listStyle: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-around', gap: 30, margin: 0, padding: 0, flexWrap: 'wrap' }}>
                    {brandLogos.map((logo, idx) => (
                      <li key={idx}>
                        <img src={logo} alt="brand logo" style={{ maxHeight: 28, opacity: 0.8 }} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
