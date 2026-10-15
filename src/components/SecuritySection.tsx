/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SastikButton } from './SastikButton.tsx';

interface SecuritySectionProps {
  onOpenTrial?: () => void;
}

export const SecuritySection: React.FC<SecuritySectionProps> = ({ onOpenTrial }) => {
  return (
    <section id="security" className="security pos-rel pt-135 pb-120">
      <div className="container">
        <div className="as-security-wrapper">
          {/* Section Header */}
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-10">
              <div className="sec-title sec-title--three mb-65 text-center">
                <p className="sub-title">
                  <img src="/assets/img/shape/sub-vactor.png" alt="" />
                  <span>Security</span>
                  <img src="/assets/img/shape/sub-vactor02.png" alt="" />
                </p>
                <h2 className="title wow xb-animetion-left" style={{ fontSize: 'clamp(2rem, 3.8vw, 3.2rem)' }}>
                  Move Fast Without Compromising Security
                </h2>
                <p className="content" style={{ marginTop: 12 }}>
                  Enterprise-grade security keeps your workflows and data protected
                </p>
              </div>
            </div>
          </div>

          {/* Security Constellation Layout from Reference */}
          <div className="as-security-inner">
            <ul className="as-security-list list-unstyled" style={{ listStyle: 'none', padding: 0 }}>
              <li className="as-security-logo">
                <span className="opacityAnim">
                  <img src="/assets/img/security/logo10.png" alt="security badge" />
                </span>
              </li>
              <li className="as-security-logo">
                <span className="opacityAnim">
                  <img src="/assets/img/security/logo08.png" alt="security badge" />
                </span>
              </li>
              <li className="as-security-logo">
                <span className="opacityAnim">
                  <img src="/assets/img/security/logo07.png" alt="security badge" />
                </span>
              </li>
              <li className="as-security-logo">
                <span className="opacityAnim">
                  <img src="/assets/img/security/logo09.png" alt="security badge" />
                </span>
              </li>
              <li className="as-security-logo">
                <span className="opacityAnim">
                  <img src="/assets/img/security/logo11.png" alt="security badge" />
                </span>
              </li>
              <li className="as-security-logo main-logo">
                <span className="opacityAnim">
                  <span className="core-glow-wrap" style={{ display: 'inline-block' }}>
                    <img src="/assets/img/security/main-logo.svg" alt="Sastik Shield Core Logo" />
                  </span>
                </span>
              </li>
              <li className="shape">
                <span className="img img--1">
                  <img src="/assets/img/shape/arrow_shape04.png" alt="" />
                </span>
                <span className="img img--2">
                  <img src="/assets/img/shape/arrow_shape03.png" alt="" />
                </span>
                <span className="img img--3">
                  <img src="/assets/img/shape/arrow_shape03.png" alt="" />
                </span>
                <span className="img img--4">
                  <img src="/assets/img/shape/arrow_shape05.png" alt="" />
                </span>
                <span className="img img--5">
                  <img src="/assets/img/shape/arrow_shape05.png" alt="" />
                </span>
              </li>
            </ul>
          </div>

          {/* Marquee Trust Metrics Bar at the bottom of Security Section */}
          <div className="as-security-bottom marquee-left" style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
            <ul className="list-unstyled" style={{ display: 'inline-flex', alignItems: 'center', gap: 40, listStyle: 'none', margin: 0, padding: 0 }}>
              <li>#1 Rated AI Workspace by Users</li>
              <li style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <img src="/assets/img/icon/users-icon.svg" alt="" width={18} height={18} />
                Built for Teams That Scale Fast
              </li>
              <li style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <img src="/assets/img/icon/flowsheet-icon.svg" alt="" width={18} height={18} />
                Smarter Workflows. Faster Results
              </li>
              <li style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <img src="/assets/img/icon/star-icon.svg" alt="" width={18} height={18} />
                Top rated by professionals worldwide
              </li>
              <li>#1 Rated AI Workspace by Users</li>
              <li style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <img src="/assets/img/icon/users-icon.svg" alt="" width={18} height={18} />
                Built for Teams That Scale Fast
              </li>
              <li style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <img src="/assets/img/icon/flowsheet-icon.svg" alt="" width={18} height={18} />
                Smarter Workflows. Faster Results
              </li>
            </ul>
          </div>

          {/* Action button */}
          <div className="as-security-btn text-center mt-50">
            <SastikButton
              onClick={onOpenTrial}
              variant="gradient"
              iconType="star"
            >
              Start a 14-Days Free Trial
            </SastikButton>
          </div>
        </div>
      </div>

      <div className="sec-line-shape top-line">
        <img src="/assets/img/shape/sec-stroke.png" alt="" />
      </div>
    </section>
  );
};
