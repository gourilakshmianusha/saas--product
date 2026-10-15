/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export const IntegrationsSection: React.FC = () => {
  return (
    <section id="integrations" className="integration pos-rel">
      <div className="as-integration-wrapper pt-135 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10">
              <div className="sec-title sec-title--three mb-60 text-center">
                <p className="sub-title">
                  <img src="/assets/img/shape/sub-vactor.png" alt="" />
                  <span>Integrations</span>
                  <img src="/assets/img/shape/sub-vactor02.png" alt="" />
                </p>
                <h2 className="title wow xb-animetion-left" style={{ fontSize: 'clamp(2rem, 3.8vw, 3.2rem)' }}>
                  Connect Everything. Work Without Limits.
                </h2>
                <p className="content" style={{ color: 'var(--color-default)', marginTop: 12 }}>
                  One platform for all your tools and workflows
                </p>
              </div>
            </div>
          </div>

          <div className="as-integration-wrap">
            <ul className="as-integration-list list-unstyled" style={{ listStyle: 'none', padding: 0 }}>
              <li className="shape">
                <img src="/assets/img/shape/int-shape.png" alt="" />
              </li>
              <li className="item item--1">
                <img src="/assets/img/integration/logo01.png" alt="logo" />
              </li>
              <li className="item item--2">
                <img src="/assets/img/integration/logo02.png" alt="logo" />
              </li>
              <li className="item item--3">
                <img src="/assets/img/integration/logo03.png" alt="logo" />
              </li>
              <li className="item item--4">
                <img src="/assets/img/integration/logo04.png" alt="logo" />
              </li>
              <li className="item item--5">
                <img src="/assets/img/integration/logo05.png" alt="logo" />
              </li>
              <li className="item item--6">
                <img src="/assets/img/integration/logo06.png" alt="logo" />
              </li>
              <li className="item item--7">
                <img src="/assets/img/integration/logo07.png" alt="logo" />
              </li>
              <li className="item item--8">
                <img src="/assets/img/integration/logo08.png" alt="logo" />
              </li>
              <li className="item item--9">
                <img src="/assets/img/integration/logo09.png" alt="logo" />
              </li>
              <li className="item item--10">
                <img src="/assets/img/integration/logo10.png" alt="logo" />
              </li>
              <li className="item item--11">
                <img src="/assets/img/integration/logo11.png" alt="logo" />
              </li>
              <li className="item item--12">
                <img src="/assets/img/integration/logo12.png" alt="logo" />
              </li>
              <li className="item item--13">
                <img src="/assets/img/integration/logo13.png" alt="logo" />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="sec-line-shape top-line">
        <img src="/assets/img/shape/sec-stroke.png" alt="" />
      </div>
    </section>
  );
};
