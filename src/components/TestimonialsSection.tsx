/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export const TestimonialsSection: React.FC = () => {
  const row1 = [
    {
      logo: '/assets/img/testimonial/logo01.png',
      quote: (
        <>
          Before switching to this platform, our workflows were scattered across multiple tools.{' '}
          <span>Now everything runs smoothly in one place,</span> saving us hours every week.
        </>
      ),
      avatar: '/assets/img/avatar/tes-avatar01.png',
      name: 'Daniel Thompson',
      desig: 'VP of Operations',
    },
    {
      logo: '/assets/img/testimonial/logo02.png',
      quote: (
        <>
          Before switching to this platform, our workflows were scattered across multiple tools.{' '}
          <span>Now everything runs smoothly in one place,</span> saving us hours every week.
        </>
      ),
      avatar: '/assets/img/avatar/tes-avatar02.png',
      name: 'David Reynolds',
      desig: 'Operations Manager',
    },
    {
      logo: '/assets/img/testimonial/logo03.png',
      quote: (
        <>
          <span>The efficiency boost was immediate.</span> Processes that previously took hours are now completed without any manual involvement.
        </>
      ),
      avatar: '/assets/img/avatar/tes-avatar02.png',
      name: 'Matthew Collins',
      desig: 'Marketing Manager',
    },
  ];

  const row2 = [
    {
      logo: '/assets/img/testimonial/logo04.png',
      quote: (
        <>
          Our operations <span>became far more organized and transparent.</span> Everyone knows what’s happening without constant check-ins.
        </>
      ),
      avatar: '/assets/img/avatar/tes-avatar04.png',
      name: 'Ethan Brooks',
      desig: 'Automation Specialist',
    },
    {
      logo: '/assets/img/testimonial/logo05.png',
      quote: (
        <>
          What impressed me most is <span>how seamlessly it integrates into our existing process</span> without disrupting our workflow.
        </>
      ),
      avatar: '/assets/img/avatar/tes-avatar05.png',
      name: 'Daniel Thompson',
      desig: 'VP of Operations',
    },
    {
      logo: '/assets/img/testimonial/logo03.png',
      quote: (
        <>
          The <span>automation features genuinely changed</span> how our team operates. Tasks that used to take days now happen automatically in the background.
        </>
      ),
      avatar: '/assets/img/avatar/tes-avatar01.png',
      name: 'Noah Richardson',
      desig: 'Technical Project Manager',
    },
  ];

  // Repeat items for seamless vertical scroll marquee loop
  const repeatedRow1 = [...row1, ...row1, ...row1];
  const repeatedRow2 = [...row2, ...row2, ...row2];

  return (
    <section id="testimonials" className="testimonial pos-rel pt-135 pb-120">
      <div className="container">
        <div className="as-testimonials-wrapper">
          {/* Section Title Header */}
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10">
              <div className="sec-title sec-title--three mb-60 text-center">
                <p className="sub-title">
                  <img src="/assets/img/shape/sub-vactor.png" alt="" />
                  <span>Testimonials</span>
                  <img src="/assets/img/shape/sub-vactor02.png" alt="" />
                </p>
                <h2 className="title" style={{ fontSize: 'clamp(2rem, 3.6vw, 3rem)' }}>
                  How Teams Use Sastik to Work Faster
                </h2>
              </div>
            </div>
          </div>

          {/* Testimonial Inner Layout matching reference */}
          <div className="as-testimonials-inner o-hidden">
            <div className="row g-0 mt-none-30 align-items-center justify-content-center">
              {/* Left Column: David Reynolds Video Card */}
              <div className="col-lg-4 col-md-12 mt-30 d-flex justify-content-center">
                <div className="as-testimonail-video">
                  <video
                    loop
                    muted
                    playsInline
                    autoPlay
                    poster="/assets/img/testimonial/video-img.png"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  >
                    <source src="https://www.pexels.com/download/video/7262257/" type="video/mp4" />
                  </video>
                  <div className="xb-holder">
                    <h2>David Reynolds</h2>
                    <p>
                      Operations Manager at <span>Luminus.co</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Sliding Vertical Marquee Columns */}
              <div className="col-lg-8 col-md-12 mt-30">
                <div className="as-testimonail-wrap">
                  <div className="as-testimonail-content">
                    {/* Marquee Column 1 */}
                    <div className="as-testimonail-inner marquee-2">
                      {repeatedRow1.map((item, idx) => (
                        <div key={`col1-${idx}`} className="as-testimonail-item">
                          <div className="xb-item--logo">
                            <img src={item.logo} alt="client company logo" />
                          </div>
                          <p className="xb-item--content">{item.quote}</p>
                          <div className="xb-item--avatar ul_li" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                            <div className="xb-item--author" style={{ width: 44, height: 44, borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
                              <img src={item.avatar} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div className="xb-item--holder">
                              <h3 className="xb-item--name" style={{ fontSize: '1.05rem', margin: '0 0 2px 0', fontWeight: 700 }}>
                                {item.name}
                              </h3>
                              <p className="xb-item--desig" style={{ margin: 0, fontSize: '0.85rem', color: '#777676' }}>
                                {item.desig}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Marquee Column 2 (hidden on mobile, visible on desktop) */}
                    <div className="as-testimonail-inner marquee-first d-none d-md-flex" style={{ flexDirection: 'column' }}>
                      {repeatedRow2.map((item, idx) => (
                        <div key={`col2-${idx}`} className="as-testimonail-item">
                          <div className="xb-item--logo">
                            <img src={item.logo} alt="client company logo" />
                          </div>
                          <p className="xb-item--content">{item.quote}</p>
                          <div className="xb-item--avatar ul_li" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                            <div className="xb-item--author" style={{ width: 44, height: 44, borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
                              <img src={item.avatar} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div className="xb-item--holder">
                              <h3 className="xb-item--name" style={{ fontSize: '1.05rem', margin: '0 0 2px 0', fontWeight: 700 }}>
                                {item.name}
                              </h3>
                              <p className="xb-item--desig" style={{ margin: 0, fontSize: '0.85rem', color: '#777676' }}>
                                {item.desig}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sec-line-shape top-line" style={{ position: 'absolute', top: 0, left: 0, right: 0, textAlign: 'center', pointerEvents: 'none' }}>
        <img src="/assets/img/shape/sec-stroke.png" alt="" style={{ maxWidth: '100%' }} />
      </div>
    </section>
  );
};
