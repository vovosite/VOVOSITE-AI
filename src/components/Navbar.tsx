import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Menu,
  X,
  Layers,
  Compass,
  ArrowRight,
  Database,
  Boxes,
  HelpCircle,
  LogIn,
  LogOut,
  UserCheck
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface NavbarProps {
  onOpenAuth: () => void;
  onOpenBookDemo: () => void;
  onOpenReportGen: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAuth, onOpenBookDemo }) => {
  const { user, logout, requireAuth } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'AI Classifier', href: '#ai-classifier' },
    { name: 'Stratigraphy', href: '#3d-trench' },
    { name: '12M+ Archive', href: '#archive-database' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0A0B]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/50'
          : 'bg-[#0A0A0B]/70 backdrop-blur-sm border-b border-slate-800/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="w-8 h-8 sm:w-9 sm:h-9 bg-gradient-to-tr from-emerald-500 to-teal-400 rounded-xl shadow-lg shadow-emerald-500/20 flex items-center justify-center transition-transform group-hover:scale-105">
              <svg
                viewBox="0 0 100 100"
                className="w-4 h-4 sm:w-5 sm:h-5 text-[#0A0A0B]"
                fill="none"
                stroke="currentColor"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="50,15 85,35 85,75 50,95 15,75 15,35" />
                <circle cx="50" cy="55" r="9" fill="currentColor" />
              </svg>
            </div>
            <span className="text-lg sm:text-xl font-bold tracking-tight text-white">
              Vovosite<span className="text-emerald-400">.pro</span>
            </span>
          </a>

          {/* Desktop Nav Links - Clean & Balanced */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold text-slate-300 hover:text-emerald-400 uppercase tracking-wider transition-colors py-1 whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <button
              onClick={onOpenBookDemo}
              className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white rounded-full hover:bg-slate-800/80 border border-slate-800 transition-all whitespace-nowrap"
            >
              Request Demo
            </button>

            <button
              onClick={() => {
                requireAuth(() => {
                  const el = document.getElementById('ai-classifier');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 'Submit an Access Request to receive authorized credentials.');
              }}
              className="px-5 py-2.5 text-xs font-bold bg-emerald-500 text-[#0A0A0B] rounded-full shadow-lg shadow-emerald-500/25 hover:bg-emerald-400 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-1.5 whitespace-nowrap font-mono uppercase tracking-wider"
            >
              <span>Request Access</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-[#0A0A0B]/98 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-3">
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-xl text-xs font-medium uppercase tracking-wider text-slate-300 hover:bg-slate-900 hover:text-emerald-400"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookDemo();
              }}
              className="w-full py-2.5 text-center text-xs font-semibold text-slate-300 bg-slate-900 border border-slate-800 rounded-full"
            >
              Request Demo
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                requireAuth(() => {
                  const el = document.getElementById('ai-classifier');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 'Submit an Access Request to receive authorized expedition credentials.');
              }}
              className="w-full py-2.5 text-center text-xs font-bold font-mono uppercase tracking-wider text-[#0A0A0B] bg-emerald-500 rounded-full shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-1.5"
            >
              <span>Request Access</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
