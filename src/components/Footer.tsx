import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Globe2,
  Mail,
  CheckCircle2,
  FileText,
  Lock,
  Landmark,
  Scale,
  Send
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface FooterProps {
  onOpenReportGen: () => void;
  onOpenBookDemo: () => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenAbout: () => void;
  onOpenEthics: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenReportGen,
  onOpenBookDemo,
  onOpenPrivacy,
  onOpenTerms,
  onOpenAbout,
  onOpenEthics,
  onOpenContact,
}) => {
  const { requireAuth } = useAuth();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="relative bg-[#0A0A0B] text-slate-400 border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      {/* Bottom CTA Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden bg-slate-900/40 border border-slate-800 shadow-2xl backdrop-blur-xl">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="inline-block px-3.5 py-1 text-[10px] font-bold tracking-[0.2em] text-emerald-400 border border-emerald-500/30 rounded-full bg-emerald-500/5 uppercase font-mono">
              NEXT SEASON STARTS HERE
            </span>
            <h2 className="font-archaic text-3xl sm:text-4xl font-light text-white tracking-tight">
              Ready to modernize your excavation workflow?
            </h2>
            <p className="text-sm text-slate-300 font-light leading-relaxed">
              Join 450+ universities, heritage authorities, and field schools using DigSite to streamline cataloging, 3D stratigraphy, and publication.
            </p>
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <button
                onClick={() => {
                  requireAuth(() => {
                    const el = document.getElementById('ai-classifier');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 'Submit an Access Request to receive authorized credentials.');
                }}
                className="px-6 py-3 rounded-full text-xs font-bold font-mono uppercase tracking-wider text-[#0A0A0B] bg-emerald-500 hover:bg-emerald-400 shadow-lg shadow-emerald-500/25 transition-all"
              >
                Request Access
              </button>
              <button
                onClick={onOpenBookDemo}
                className="px-6 py-3 rounded-full text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all"
              >
                Book Institutional Demo
              </button>
              <button
                onClick={() => {
                  requireAuth(onOpenReportGen, 'Sign up or log in to generate publication reports and monographs.');
                }}
                className="px-6 py-3 rounded-full text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all flex items-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5 text-emerald-400" />
                <span>Publication Studio</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-tr from-emerald-500 to-teal-400 rounded-lg shadow-lg shadow-emerald-500/20 flex items-center justify-center">
                <svg
                  viewBox="0 0 100 100"
                  className="w-4 h-4 text-[#0A0A0B]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="8"
                >
                  <polygon points="50,15 85,35 85,75 50,95 15,75 15,35" />
                  <circle cx="50" cy="55" r="9" fill="currentColor" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Vovosite<span className="text-emerald-400">.pro</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed font-light">
              The unified intelligence platform for field archaeology, museum curation, and cultural heritage documentation. AI-powered classification, sub-centimeter photogrammetry, and journal publication.
            </p>
          </div>

          {/* Col 2: Platform Tools */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-200">
              Platform Tools
            </h4>
            <ul className="space-y-2 text-xs font-light">
              <li><a href="#ai-classifier" className="hover:text-emerald-400 transition-colors">AI Artifact Classifier</a></li>
              <li><a href="#3d-trench" className="hover:text-emerald-400 transition-colors">Stratigraphic Cross-Sections</a></li>
              <li><a href="#harris-matrix" className="hover:text-emerald-400 transition-colors">Harris Matrix Generator</a></li>
              <li><a href="#field-logger" className="hover:text-emerald-400 transition-colors">Digital Locus Logger</a></li>
              <li><a href="#archive-database" className="hover:text-emerald-400 transition-colors">12M+ Museum Archive</a></li>
              <li>
                <button
                  onClick={() => requireAuth(onOpenReportGen, 'Please sign up or sign in to generate reports.')}
                  className="hover:text-emerald-400 text-left transition-colors"
                >
                  Generate Monograph Plate
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Institutional & Legal Pages (Requirement 9) */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-200">
              Company & Legal
            </h4>
            <ul className="space-y-2 text-xs font-light">
              <li>
                <button
                  onClick={onOpenAbout}
                  className="hover:text-emerald-400 transition-colors text-left flex items-center gap-1.5"
                >
                  <span>About DigSite Pro</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenPrivacy}
                  className="hover:text-emerald-400 transition-colors text-left flex items-center gap-1.5"
                >
                  <span>Privacy Policy</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenTerms}
                  className="hover:text-emerald-400 transition-colors text-left flex items-center gap-1.5"
                >
                  <span>Terms of Service</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenEthics}
                  className="hover:text-emerald-400 transition-colors text-left flex items-center gap-1.5"
                >
                  <span>Ethics & Heritage Standards</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenContact}
                  className="hover:text-emerald-400 transition-colors text-left flex items-center gap-1.5"
                >
                  <span>Contact & Support</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter (Requirement 6) */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-200">
              Field Dispatch
            </h4>
            <p className="text-xs text-slate-400 font-light">
              Monthly breakthroughs in archaeological vision AI and excavation methodologies.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-2xl bg-emerald-950/70 border border-emerald-500/40 text-xs text-emerald-300 font-mono space-y-1">
                <div className="flex items-center gap-1.5 font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Subscribed Successfully!</span>
                </div>
                <div className="text-[10px] text-emerald-400/80">
                  You will receive our next academic publication digest.
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="excavator@university.edu"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full p-2.5 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-400 font-mono px-4"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-full text-xs font-bold text-[#0A0A0B] bg-emerald-500 hover:bg-emerald-400 shadow transition-all flex items-center justify-center gap-1.5 font-mono uppercase tracking-wider"
                >
                  <Send className="w-3 h-3" />
                  <span>Subscribe to Dispatch</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom copyright & status */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            © {new Date().getFullYear()} Vovosite.pro. Empowering better decisions through strategic archaeological insights.
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button onClick={onOpenPrivacy} className="hover:text-slate-400 underline">Privacy</button>
            <span>•</span>
            <button onClick={onOpenTerms} className="hover:text-slate-400 underline">Terms</button>
            <span>•</span>
            <button onClick={onOpenAbout} className="hover:text-slate-400 underline">About</button>
            <span>•</span>
            <button onClick={onOpenContact} className="hover:text-slate-400 underline">Contact</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
