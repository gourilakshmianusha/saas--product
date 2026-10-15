/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { TrustStrip } from './components/TrustStrip.tsx';
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
      'features',
      'how-it-works',
      'integrations',
      'ai-core',
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

        {/* 3. Trust / Rating Strip */}
        <TrustStrip />

        {/* 4. Problems Section */}
        <ProblemsSection />

        {/* 5. Solutions Section */}
        <SolutionsSection
          onOpenDemo={() => setIsDemoOpen(true)}
          onOpenTrial={() => {
            setSelectedPlan('Basic Subscription');
            setIsTrialOpen(true);
          }}
        />

        {/* 6. Features Section */}
        <FeaturesSection
          onOpenTrial={() => {
            setSelectedPlan('Basic Subscription');
            setIsTrialOpen(true);
          }}
        />

        {/* 7. How It Works Section */}
        <HowItWorksSection
          onOpenTrial={() => {
            setSelectedPlan('SaStik Joyful Start');
            setIsTrialOpen(true);
          }}
        />

        {/* 8. Integrations Section */}
        <IntegrationsSection />

        {/* 9. AI Introduction Section */}
        <AiIntroductionSection
          onOpenTrial={() => {
            setSelectedPlan('Enterprise Pro');
            setIsTrialOpen(true);
          }}
        />

        {/* 10. Pricing Section */}
        <PricingSection onSelectPlan={handleOpenPlanTrial} />

        {/* 11. Testimonials Carousel */}
        <TestimonialsSection />

        {/* 12. Security Section */}
        <SecuritySection />

        {/* 13. FAQ Section */}
        <FaqSection />

        {/* 14. Final CTA & Newsletter Section */}
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
