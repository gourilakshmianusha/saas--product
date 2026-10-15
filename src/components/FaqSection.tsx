/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SastikButton } from './SastikButton.tsx';
import { ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);

  const faqData = [
    {
      q: 'What makes this different from other automation tools?',
      a: 'We focus on simplicity and real operational impact. Instead of complex setups, you get visual workflows, smart automation logic, and scalable performance built for everyday business use.',
    },
    {
      q: 'What happens if an automation fails?',
      a: 'If an automation encounters an issue, the system instantly notifies you and logs the error so you can quickly review and fix it. You can also edit, restart, or adjust the workflow to ensure everything runs smoothly again.',
    },
    {
      q: 'Do I need multiple tools after using this?',
      a: 'No. The platform is designed to bring tasks, workflows, integrations, and collaboration into one unified workspace, helping reduce the need for multiple disconnected tools.',
    },
    {
      q: 'How reliable are the automations?',
      a: 'Our automations are built to run consistently and accurately, even for complex workflows. With reliable infrastructure and real-time monitoring, your processes stay active and dependable.',
    },
  ];

  const handleToggle = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section pos-rel pb-15">
      <div className="container">
        <div className="as-faq-wrapper pt-135 pb-120">
          {/* Section Heading */}
          <div className="sec-title sec-title--three mb-50 text-center">
            <p className="sub-title">
              <img src="/assets/img/shape/sub-vactor.png" alt="" />
              <span>Faq</span>
              <img src="/assets/img/shape/sub-vactor02.png" alt="" />
            </p>
            <h2 className="title wow xb-animetion-left" style={{ fontSize: 'clamp(2rem, 3.6vw, 3rem)' }}>
              Everything You Need to Know
            </h2>
          </div>

          <div className="as-faq-inner">
            <div className="row mt-none-30">
              {/* Left Column: Accordion */}
              <div className="col-lg-7 mt-30">
                <div className="xb-faq as-faq">
                  <ul className="accordion_box clearfix list-unstyled" style={{ listStyle: 'none', padding: 0 }}>
                    {faqData.map((item, index) => {
                      const isActive = activeAccordion === index;
                      return (
                        <li
                          key={index}
                          className={`accordion block ${isActive ? 'active-block' : ''}`}
                        >
                          <div
                            className={`acc-btn ${isActive ? 'active' : ''}`}
                            onClick={() => handleToggle(index)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                handleToggle(index);
                              }
                            }}
                          >
                            <span>{item.q}</span>
                            <span className="arrow">
                              <ChevronDown
                                size={15}
                                style={{
                                  transition: 'transform 0.3s ease',
                                  transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)',
                                  color: isActive ? 'var(--color-heading)' : '#777676',
                                }}
                              />
                            </span>
                          </div>

                          <div
                            className={`acc_body ${isActive ? 'current' : ''}`}
                            style={{
                              display: isActive ? 'block' : 'none',
                              animation: 'fadeIn 0.3s ease',
                            }}
                          >
                            <div className="content">
                              <p>{item.a}</p>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              {/* Right Column: Contact Card */}
              <div className="col-lg-5 mt-30">
                <div className="as-faq-contact">
                  <div className="xb-item--inner">
                    <div className="xb-item--logo">
                      <span>
                        <img src="/assets/img/security/main-logo.svg" alt="logo" />
                      </span>
                    </div>

                    <p className="xb-item--title">
                      Have More Questions? Book A Free Discovery Call
                    </p>

                    <div className="xb-item--btn">
                      <SastikButton
                        href="tel:02079460958"
                        variant="gradient"
                        iconType="call"
                      >
                        020 7946 0958
                      </SastikButton>
                    </div>

                    <p className="xb-item--mail">
                      Or, Email us at <a href="mailto:sastik@gmail.com">sastik@gmail.com</a>
                    </p>

                    <div className="xb-item--cursor updown-2">
                      <img src="/assets/img/shape/cursor-icon03.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative top and bottom stroke dividing lines */}
      <div className="sec-line-shape top-line">
        <img src="/assets/img/shape/sec-stroke.png" alt="" />
      </div>
      <div className="sec-line-shape bottom-line">
        <img src="/assets/img/shape/sec-stroke.png" alt="" />
      </div>
    </section>
  );
};
