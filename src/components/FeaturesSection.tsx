/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export const FeaturesSection: React.FC = () => {
  return (
    <section id="feature" className="feature pos-rel pt-135 pb-120">
      <div className="container">
        <div className="as-feature-wrapper">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10">
              <div className="sec-title sec-title--three mb-60 text-center">
                <p className="sub-title">
                  <img src="/assets/img/shape/sub-vactor.png" alt="" />
                  <span>Feature</span>
                  <img src="/assets/img/shape/sub-vactor02.png" alt="" />
                </p>
                <h2 className="title wow xb-animetion-left" style={{ fontSize: 'clamp(2rem, 3.8vw, 3.2rem)' }}>
                  Everything You Need for Smarter Workflows
                </h2>
              </div>
            </div>
          </div>

          <div className="as-feature-inner">
            <div className="row mt-none-30">
              {/* Card 1: Smart Priority Sorting */}
              <div className="col-lg-4 col-md-6 mt-30">
                <div className="as-feature-item">
                  <div className="xb-item--inner">
                    <div className="xb-item--bg">
                      <img src="/assets/img/shape/fea-bg-shape01.png" alt="image" />
                    </div>
                    <div className="xb-item--img">
                      <img src="/assets/img/feature/as-fea-img01.png" alt="image" />
                    </div>
                    <div className="xb-item--holder">
                      <h2 className="xb-item--title">Smart Priority Sorting</h2>
                      <p className="xb-item--content">Streamline workflow through smart priority ranking with intelligent automation.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Quick Smart Responses */}
              <div className="col-lg-4 col-md-6 mt-30">
                <div className="as-feature-item">
                  <div className="xb-item--inner">
                    <div className="xb-item--bg">
                      <img src="/assets/img/shape/fea-bg-shape02.png" alt="image" />
                    </div>
                    <div className="xb-item--img">
                      <img src="/assets/img/feature/as-fea-img02.png" alt="image" />
                    </div>
                    <div className="xb-item--holder">
                      <h2 className="xb-item--title">Quick Smart Responses</h2>
                      <p className="xb-item--content">Sharp answers to keep conversations flowing smoothly without delays.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3: Smart AI Control */}
              <div className="col-lg-4 col-md-6 mt-30">
                <div className="as-feature-item">
                  <div className="xb-item--inner">
                    <div className="xb-item--bg">
                      <img src="/assets/img/shape/fea-bg-shape03.png" alt="image" />
                    </div>
                    <div className="xb-item--img">
                      <img src="/assets/img/feature/as-fea-img03.png" alt="image" />
                    </div>
                    <div className="xb-item--holder">
                      <h2 className="xb-item--title">Smart AI Control</h2>
                      <p className="xb-item--content">Advanced AI control for seamless workflow automation without complexity.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 4 (large): Unified Channel Sync */}
              <div className="col-lg-6 mt-30">
                <div className="as-feature-item large-item">
                  <div className="xb-item--inner">
                    <div className="xb-item--bg">
                      <img src="/assets/img/shape/fea-bg-shape04.png" alt="image" />
                    </div>
                    <div className="xb-item--img">
                      <img src="/assets/img/feature/as-fea-img04.png" alt="image" />
                    </div>
                    <div className="xb-item--holder">
                      <h2 className="xb-item--title">Unified Channel Sync</h2>
                      <p className="xb-item--content">Connect every platform together, ensuring consistent messaging, instant updates, and smooth workflow management across teams</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 5 (large): Intelligent Lead Ranking */}
              <div className="col-lg-6 mt-30">
                <div className="as-feature-item large-item">
                  <div className="xb-item--inner">
                    <div className="xb-item--bg">
                      <img src="/assets/img/shape/fea-bg-shape05.png" alt="image" />
                    </div>
                    <div className="xb-item--img">
                      <img src="/assets/img/feature/as-fea-img05.png" alt="image" />
                    </div>
                    <div className="xb-item--holder">
                      <h2 className="xb-item--title">Intelligent Lead Ranking</h2>
                      <p className="xb-item--content">Automatically score and prioritize leads using smart data insights to help your team focus on high value prospects</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sec-line-shape top-line">
        <img src="/assets/img/shape/sec-stroke.png" alt="" />
      </div>
    </section>
  );
};
