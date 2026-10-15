/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const testimonials = [
    {
      name: 'David Reynolds',
      role: 'Operations Manager',
      company: 'CloudScale Global',
      initials: 'DR',
      quote:
        'Sastik unified our disparate ticketing and CRM pipelines in 48 hours. Our operational cycle times dropped by 64%, and we eliminated over 14 hours of manual copy-paste overhead every single week.',
      rating: 5,
    },
    {
      name: 'Daniel Thompson',
      role: 'VP of Operations',
      company: 'Synthetix Dynamics',
      initials: 'DT',
      quote:
        'The autonomous self-healing execution is pure magic. When third-party webhook endpoints time out, Sastik handles retries and backoff seamlessly without our engineers ever getting paged.',
      rating: 5,
    },
    {
      name: 'Matthew Collins',
      role: 'Marketing Manager',
      company: 'PulseFlow Media',
      initials: 'MC',
      quote:
        'Our lead enrichment pipeline now triggers instantaneously. Qualified prospect response time shifted from 4 hours to 45 seconds, which directly increased our demo conversion rate by 38%.',
      rating: 5,
    },
    {
      name: 'Ethan Brooks',
      role: 'Automation Specialist',
      company: 'NexusHQ Technologies',
      initials: 'EB',
      quote:
        'Having DeepSeek and OpenAI reasoning agents embedded natively in our workflow graphs completely transformed how we process unstructured invoices and customer requirements.',
      rating: 5,
    },
    {
      name: 'Noah Richardson',
      role: 'Technical Project Manager',
      company: 'OrbitWorks Software',
      initials: 'NR',
      quote:
        'Security was our top hurdle with SaaS tools. Sastik passed our SOC2 Type II and internal zero-trust architecture audit with zero exceptions. It is the gold standard for enterprise automation.',
      rating: 5,
    },
  ];

  // Autoplay
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (testimonials.length - 2));
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 3 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % (testimonials.length - 2));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (deltaX > 50) handlePrev();
    if (deltaX < -50) handleNext();
    touchStartX.current = null;
  };

  return (
    <section id="testimonials" className="testimonials-section section-padding">
      <div className="sastik-container">
        {/* Header */}
        <div className="section-header-center">
          <div className="section-badge">
            <span className="section-badge-dot" />
            <span>Customer Stories</span>
          </div>
          <h2>How Teams Use Sastik to Work Faster</h2>
          <p>
            Real results from engineering, product, and operations leaders who eliminated repetitive tasks and unlocked 10x throughput.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="testimonial-carousel-container"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="testimonial-slider"
            style={{
              transform: `translateX(-${currentIndex * 404}px)`,
            }}
          >
            {testimonials.map((t) => (
              <div key={t.name} className="testimonial-card">
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
                    <div className="rating-stars">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} size={15} fill="#f59e0b" color="#f59e0b" />
                      ))}
                    </div>
                    <Quote size={24} color="rgba(104, 64, 255, 0.25)" />
                  </div>
                  <p className="testimonial-quote">"{t.quote}"</p>
                </div>

                <div className="testimonial-author-block">
                  <div className="author-avatar">{t.initials}</div>
                  <div className="author-info">
                    <h4>{t.name}</h4>
                    <p>{t.role} · {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="carousel-controls">
            <button
              onClick={handlePrev}
              className="carousel-btn"
              aria-label="Previous testimonials"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Pagination Indicators */}
            <div style={{ display: 'flex', gap: 6 }}>
              {[0, 1, 2].map((idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  style={{
                    width: idx === currentIndex ? 24 : 8,
                    height: 8,
                    borderRadius: 4,
                    background: idx === currentIndex ? 'var(--color-primary)' : 'rgba(20, 15, 38, 0.15)',
                    transition: 'all 240ms ease',
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="carousel-btn"
              aria-label="Next testimonials"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
