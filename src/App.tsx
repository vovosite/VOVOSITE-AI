import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { ArtifactClassifierDemo } from './components/ArtifactClassifierDemo';
import { Trench3DViewer } from './components/Trench3DViewer';
import { HarrisMatrixBuilder } from './components/HarrisMatrixBuilder';
import { FieldLoggerTool } from './components/FieldLoggerTool';
import { CrossReferenceDatabase } from './components/CrossReferenceDatabase';
import { FeaturesSection } from './components/FeaturesSection';
import { PricingSection } from './components/PricingSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { VideoDemoModal } from './components/VideoDemoModal';
import { AuthModal } from './components/AuthModal';
import { BookDemoModal } from './components/BookDemoModal';
import { ReportGeneratorModal } from './components/ReportGeneratorModal';

// Dedicated Full Pages
import { AboutPage } from './pages/AboutPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { EthicsPage } from './pages/EthicsPage';
import { ContactPage } from './pages/ContactPage';

type PageRoute = 'home' | 'about' | 'privacy' | 'terms' | 'ethics' | 'contact';

const AppContent: React.FC = () => {
  const { isAuthModalOpen, openAuthModal, closeAuthModal, requireAuth } = useAuth();
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isBookDemoModalOpen, setIsBookDemoModalOpen] = useState(false);
  const [isReportGenModalOpen, setIsReportGenModalOpen] = useState(false);

  // Sync with browser hash if present
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#about' || hash === '#/about') setCurrentPage('about');
      else if (hash === '#privacy' || hash === '#/privacy') setCurrentPage('privacy');
      else if (hash === '#terms' || hash === '#/terms') setCurrentPage('terms');
      else if (hash === '#ethics' || hash === '#/ethics') setCurrentPage('ethics');
      else if (hash === '#contact' || hash === '#/contact') setCurrentPage('contact');
      else if (hash === '' || hash === '#') setCurrentPage('home');
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigateTo = (page: PageRoute) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (page === 'home') {
      window.location.hash = '';
    } else {
      window.location.hash = `#${page}`;
    }
  };

  const handleRequestAccess = () => {
    openAuthModal('Submit your excavation credentials to request access.');
  };

  // Render Full Dedicated Pages if selected
  if (currentPage === 'about') {
    return (
      <div className="min-h-screen bg-[#0A0A0B] text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-200">
        <Navbar
          onOpenAuth={handleRequestAccess}
          onOpenBookDemo={() => setIsBookDemoModalOpen(true)}
          onOpenReportGen={() => {
            requireAuth(() => setIsReportGenModalOpen(true), 'Sign in to launch the Publication Studio.');
          }}
        />
        <div className="pt-16 sm:pt-20">
          <AboutPage
            onNavigateHome={() => navigateTo('home')}
            onRequestAccess={handleRequestAccess}
            onNavigateContact={() => navigateTo('contact')}
          />
        </div>
        <Footer
          onOpenReportGen={() => requireAuth(() => setIsReportGenModalOpen(true))}
          onOpenBookDemo={() => setIsBookDemoModalOpen(true)}
          onOpenPrivacy={() => navigateTo('privacy')}
          onOpenTerms={() => navigateTo('terms')}
          onOpenAbout={() => navigateTo('about')}
          onOpenEthics={() => navigateTo('ethics')}
          onOpenContact={() => navigateTo('contact')}
        />
        <AuthModal isOpen={isAuthModalOpen} onClose={closeAuthModal} />
        <BookDemoModal isOpen={isBookDemoModalOpen} onClose={() => setIsBookDemoModalOpen(false)} />
      </div>
    );
  }

  if (currentPage === 'privacy') {
    return (
      <div className="min-h-screen bg-[#0A0A0B] text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-200">
        <Navbar
          onOpenAuth={handleRequestAccess}
          onOpenBookDemo={() => setIsBookDemoModalOpen(true)}
          onOpenReportGen={() => {
            requireAuth(() => setIsReportGenModalOpen(true), 'Sign in to launch the Publication Studio.');
          }}
        />
        <div className="pt-16 sm:pt-20">
          <PrivacyPolicyPage
            onNavigateHome={() => navigateTo('home')}
            onNavigateContact={() => navigateTo('contact')}
          />
        </div>
        <Footer
          onOpenReportGen={() => requireAuth(() => setIsReportGenModalOpen(true))}
          onOpenBookDemo={() => setIsBookDemoModalOpen(true)}
          onOpenPrivacy={() => navigateTo('privacy')}
          onOpenTerms={() => navigateTo('terms')}
          onOpenAbout={() => navigateTo('about')}
          onOpenEthics={() => navigateTo('ethics')}
          onOpenContact={() => navigateTo('contact')}
        />
        <AuthModal isOpen={isAuthModalOpen} onClose={closeAuthModal} />
        <BookDemoModal isOpen={isBookDemoModalOpen} onClose={() => setIsBookDemoModalOpen(false)} />
      </div>
    );
  }

  if (currentPage === 'terms') {
    return (
      <div className="min-h-screen bg-[#0A0A0B] text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-200">
        <Navbar
          onOpenAuth={handleRequestAccess}
          onOpenBookDemo={() => setIsBookDemoModalOpen(true)}
          onOpenReportGen={() => {
            requireAuth(() => setIsReportGenModalOpen(true), 'Sign in to launch the Publication Studio.');
          }}
        />
        <div className="pt-16 sm:pt-20">
          <TermsPage
            onNavigateHome={() => navigateTo('home')}
            onNavigateContact={() => navigateTo('contact')}
            onRequestAccess={handleRequestAccess}
          />
        </div>
        <Footer
          onOpenReportGen={() => requireAuth(() => setIsReportGenModalOpen(true))}
          onOpenBookDemo={() => setIsBookDemoModalOpen(true)}
          onOpenPrivacy={() => navigateTo('privacy')}
          onOpenTerms={() => navigateTo('terms')}
          onOpenAbout={() => navigateTo('about')}
          onOpenEthics={() => navigateTo('ethics')}
          onOpenContact={() => navigateTo('contact')}
        />
        <AuthModal isOpen={isAuthModalOpen} onClose={closeAuthModal} />
        <BookDemoModal isOpen={isBookDemoModalOpen} onClose={() => setIsBookDemoModalOpen(false)} />
      </div>
    );
  }

  if (currentPage === 'ethics') {
    return (
      <div className="min-h-screen bg-[#0A0A0B] text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-200">
        <Navbar
          onOpenAuth={handleRequestAccess}
          onOpenBookDemo={() => setIsBookDemoModalOpen(true)}
          onOpenReportGen={() => {
            requireAuth(() => setIsReportGenModalOpen(true), 'Sign in to launch the Publication Studio.');
          }}
        />
        <div className="pt-16 sm:pt-20">
          <EthicsPage
            onNavigateHome={() => navigateTo('home')}
            onNavigateContact={() => navigateTo('contact')}
            onRequestAccess={handleRequestAccess}
          />
        </div>
        <Footer
          onOpenReportGen={() => requireAuth(() => setIsReportGenModalOpen(true))}
          onOpenBookDemo={() => setIsBookDemoModalOpen(true)}
          onOpenPrivacy={() => navigateTo('privacy')}
          onOpenTerms={() => navigateTo('terms')}
          onOpenAbout={() => navigateTo('about')}
          onOpenEthics={() => navigateTo('ethics')}
          onOpenContact={() => navigateTo('contact')}
        />
        <AuthModal isOpen={isAuthModalOpen} onClose={closeAuthModal} />
        <BookDemoModal isOpen={isBookDemoModalOpen} onClose={() => setIsBookDemoModalOpen(false)} />
      </div>
    );
  }

  if (currentPage === 'contact') {
    return (
      <div className="min-h-screen bg-[#0A0A0B] text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-200">
        <Navbar
          onOpenAuth={handleRequestAccess}
          onOpenBookDemo={() => setIsBookDemoModalOpen(true)}
          onOpenReportGen={() => {
            requireAuth(() => setIsReportGenModalOpen(true), 'Sign in to launch the Publication Studio.');
          }}
        />
        <div className="pt-16 sm:pt-20">
          <ContactPage
            onNavigateHome={() => navigateTo('home')}
            onRequestAccess={handleRequestAccess}
          />
        </div>
        <Footer
          onOpenReportGen={() => requireAuth(() => setIsReportGenModalOpen(true))}
          onOpenBookDemo={() => setIsBookDemoModalOpen(true)}
          onOpenPrivacy={() => navigateTo('privacy')}
          onOpenTerms={() => navigateTo('terms')}
          onOpenAbout={() => navigateTo('about')}
          onOpenEthics={() => navigateTo('ethics')}
          onOpenContact={() => navigateTo('contact')}
        />
        <AuthModal isOpen={isAuthModalOpen} onClose={closeAuthModal} />
        <BookDemoModal isOpen={isBookDemoModalOpen} onClose={() => setIsBookDemoModalOpen(false)} />
      </div>
    );
  }

  // Home Page (Main Workspace Hub)
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Sticky Top Navigation */}
      <Navbar
        onOpenAuth={handleRequestAccess}
        onOpenBookDemo={() => setIsBookDemoModalOpen(true)}
        onOpenReportGen={() => {
          requireAuth(() => setIsReportGenModalOpen(true), 'Sign in or submit an Access Request to launch the Publication Studio.');
        }}
      />

      {/* Main Content Sections */}
      <main className="relative">
        <Hero
          onOpenVideo={() => setIsVideoModalOpen(true)}
          onOpenAuth={handleRequestAccess}
        />

        <StatsBar />

        {/* Multi-Modal AI Artifact Scanner */}
        <ArtifactClassifierDemo
          onOpenReportGen={() => {
            requireAuth(() => setIsReportGenModalOpen(true), 'Sign in or submit an Access Request to generate publication plates.');
          }}
        />

        {/* 2D Stratigraphic Horizon Cross-Section Explorer */}
        <Trench3DViewer />

        {/* Harris Matrix Phasing Graph */}
        <HarrisMatrixBuilder />

        {/* Digital Locus Logger */}
        <FieldLoggerTool />

        {/* 12M+ Museum Global Database */}
        <CrossReferenceDatabase />

        {/* Core Platform Capabilities */}
        <FeaturesSection />

        {/* Pricing Plans */}
        <PricingSection
          onOpenAuth={handleRequestAccess}
          onOpenBookDemo={() => setIsBookDemoModalOpen(true)}
        />

        {/* Testimonials & Case Studies */}
        <CaseStudiesSection />

        {/* FAQ Accordion */}
        <FAQSection />
      </main>

      {/* Footer with full page links */}
      <Footer
        onOpenReportGen={() => {
          requireAuth(() => setIsReportGenModalOpen(true), 'Sign in or submit an Access Request to generate monographs.');
        }}
        onOpenBookDemo={() => setIsBookDemoModalOpen(true)}
        onOpenPrivacy={() => navigateTo('privacy')}
        onOpenTerms={() => navigateTo('terms')}
        onOpenAbout={() => navigateTo('about')}
        onOpenEthics={() => navigateTo('ethics')}
        onOpenContact={() => navigateTo('contact')}
      />

      {/* Interactive Modals */}
      <VideoDemoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={closeAuthModal}
      />

      <BookDemoModal
        isOpen={isBookDemoModalOpen}
        onClose={() => setIsBookDemoModalOpen(false)}
      />

      <ReportGeneratorModal
        isOpen={isReportGenModalOpen}
        onClose={() => setIsReportGenModalOpen(false)}
      />
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </ThemeProvider>
  );
}
