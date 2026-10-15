/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { ProblemsSection } from './components/ProblemsSection.tsx';
import { SolutionsSection } from './components/SolutionsSection.tsx';
import { FeaturesSection } from './components/FeaturesSection.tsx';
import { HowItWorksSection } from './components/HowItWorksSection.tsx';
import { IntegrationsSection } from './components/IntegrationsSection.tsx';
import { AiIntroductionSection } from './components/AiIntroductionSection.tsx';
import { PricingSection } from './components/PricingSection.tsx';
import { TestimonialsSection } from './components/TestimonialsSection.tsx';
import { SecuritySection } from './components/SecuritySection.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { FinalCtaSection } from './components/FinalCtaSection.tsx';
import { Footer } from './components/Footer.tsx';
import { SearchModal } from './components/SearchModal.tsx';
import { FreeTrialModal } from './components/FreeTrialModal.tsx';
import { DemoModal } from './components/DemoModal.tsx';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isTrialOpen, setIsTrialOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('SaStik Joyful Start');

  // Keyboard shortcut listener (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Intersection observer to track current active section for navbar
  useEffect(() => {
    const sectionIds = [
      'hero',
      'problems',
      'solutions',
      'feature',
      'work',
      'integrations',
      'introduction',
      'pricing',
      'testimonials',
      'security',
      'faq',
    ];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 180;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleOpenPlanTrial = (planName: string) => {
    setSelectedPlan(planName);
    setIsTrialOpen(true);
  };

  return (
    <div className="sastik-app-root">
      {/* 1. Sticky Navigation Bar */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenTrial={() => {
          setSelectedPlan('SaStik Joyful Start');
          setIsTrialOpen(true);
        }}
        activeSection={activeSection}
      />

      {/* Main Single Homepage Container */}
      <main>
        {/* 2. Hero Section */}
        <HeroSection
          onOpenTrial={() => {
            setSelectedPlan('SaStik Joyful Start');
            setIsTrialOpen(true);
          }}
          onOpenDemo={() => setIsDemoOpen(true)}
        />

        {/* First Content Body Container with Authentic Side Stroke Frames */}
        <div className="as-body-inner mxw-1339 mb-120">
          <div className="as-site-line">
            <div className="line line--1">
              <img src="/assets/img/shape/side-stroke.png" alt="line shape" />
            </div>
            <div className="line line--2">
              <img src="/assets/img/shape/side-stroke.png" alt="line shape" />
            </div>
          </div>

          {/* 3. Problems Section */}
          <ProblemsSection />

          {/* 4. Solutions Section */}
          <SolutionsSection
            onOpenDemo={() => setIsDemoOpen(true)}
            onOpenTrial={() => {
              setSelectedPlan('Basic Subscription');
              setIsTrialOpen(true);
            }}
          />

          {/* 5. Features Section */}
          <FeaturesSection />

          {/* 6. How It Works Section */}
          <HowItWorksSection />

          {/* 7. Integrations Section */}
          <IntegrationsSection />

          {/* 8. AI Introduction Section */}
          <AiIntroductionSection />
        </div>

        {/* 9. Pricing Section (Full Width) */}
        <PricingSection onSelectPlan={handleOpenPlanTrial} />

        {/* Second Content Body Container with Authentic Side Stroke Frames */}
        <div className="as-body-inner mxw-1339 mt-120 mb-120">
          <div className="as-site-line">
            <div className="line line--1">
              <img src="/assets/img/shape/side-stroke.png" alt="line shape" />
            </div>
            <div className="line line--2">
              <img src="/assets/img/shape/side-stroke.png" alt="line shape" />
            </div>
          </div>

          {/* 10. Testimonials Carousel & Marquee */}
          <TestimonialsSection />

          {/* 11. Security Section */}
          <SecuritySection
            onOpenTrial={() => {
              setSelectedPlan('SaStik Joyful Start');
              setIsTrialOpen(true);
            }}
          />

          {/* 12. FAQ Section */}
          <FaqSection />
        </div>

        {/* 13. Final CTA & Brand Section */}
        <FinalCtaSection
          onOpenTrial={() => {
            setSelectedPlan('SaStik Joyful Start');
            setIsTrialOpen(true);
          }}
          onOpenDemo={() => setIsDemoOpen(true)}
        />
      </main>

      {/* 15. Footer */}
      <Footer
        onOpenTrial={() => {
          setSelectedPlan('SaStik Joyful Start');
          setIsTrialOpen(true);
        }}
        onOpenDemo={() => setIsDemoOpen(true)}
      />

      {/* Global Interactive Dialogs & Modals */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleNavigate}
      />

      <FreeTrialModal
        isOpen={isTrialOpen}
        onClose={() => setIsTrialOpen(false)}
        initialPlan={selectedPlan}
      />

      <DemoModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
        onOpenTrial={() => {
          setSelectedPlan('Basic Subscription');
          setIsTrialOpen(true);
        }}
      />
    </div>
  );
}
