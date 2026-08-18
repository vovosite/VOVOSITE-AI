import React from 'react';
import {
  Landmark,
  ArrowLeft,
  ShieldCheck,
  Globe2,
  FileCheck,
  CheckCircle2,
  AlertTriangle,
  Award,
  BookOpen,
  HeartHandshake
} from 'lucide-react';

interface EthicsPageProps {
  onNavigateHome: () => void;
  onNavigateContact: () => void;
  onRequestAccess: () => void;
}

export const EthicsPage: React.FC<EthicsPageProps> = ({
  onNavigateHome,
  onNavigateContact,
  onRequestAccess,
}) => {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-200">
      
      {/* Top Banner with Breadcrumbs */}
      <div className="border-b border-slate-800/80 bg-slate-950/60 backdrop-blur-xl sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button
            onClick={onNavigateHome}
            className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-emerald-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Excavation Hub</span>
          </button>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span>Home</span>
            <span>/</span>
            <span className="text-emerald-400 font-bold">Ethics & Heritage Standards</span>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <section className="relative pt-16 pb-14 md:pt-20 md:pb-16 overflow-hidden border-b border-slate-800/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-block px-3.5 py-1 text-[10px] font-bold tracking-[0.2em] text-emerald-400 border border-emerald-500/30 rounded-full bg-emerald-500/5 uppercase font-mono">
            HERITAGE INTEGRITY & ETHICAL STANDARDS
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight">
            Archaeological Ethics & Cultural Heritage Principles
          </h1>

          <p className="text-sm sm:text-base text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed">
            Vovosite.pro is built on foundational values of non-destructive digital recording, anti-trafficking safeguards, and respectful stewardship of world heritage.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="py-14 md:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-sm text-slate-300 font-normal leading-relaxed">
        
        {/* Core Principles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs font-mono uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>UNESCO Convention Alignment</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              We adhere strictly to international conventions preventing the illicit import, export, and transfer of cultural property.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs font-mono uppercase tracking-wider">
              <Landmark className="w-4 h-4" />
              <span>Museum Ethical Codes</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              Our reference databases reflect provenance standards established by leading international conservation and museum bodies.
            </p>
          </div>
        </div>

        {/* Section 1: Non-Destructive Recording */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-emerald-400 font-mono text-sm">01.</span>
            Digital Preservation & Non-Destructive Recording
          </h2>
          <p>
            Archaeological excavation is inherently unrepeatable: once a context is excavated, its physical stratigraphy cannot be remade. Vovosite.pro promotes comprehensive digital recording before any layer is removed, ensuring high-fidelity 3D models and photogrammetry are permanently preserved for future generations of scholars.
          </p>
        </section>

        {/* Section 2: Combating Illicit Antiquities */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-emerald-400 font-mono text-sm">02.</span>
            Combating the Illicit Antiquities Trade
          </h2>
          <p>
            Our technology is built solely for scientific excavation and conservation. Vovosite.pro does not provide commercial valuation, pricing, or marketplace tools. Our computer vision models focus strictly on ceramic typology, physical morphology, and stratigraphic sequencing.
          </p>
        </section>

        {/* Section 3: Community & Indigenous Stewardship */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-emerald-400 font-mono text-sm">03.</span>
            Community Stewardship & Indigenous Data Rights
          </h2>
          <p>
            We recognize that archaeological heritage deeply connects to descendant communities. Vovosite.pro incorporates granular access permissions so project directors and local heritage authorities can safeguard culturally sensitive or sacred material according to community protocols.
          </p>
        </section>

        {/* Section 4: Contact & Verification */}
        <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-white">Ethical Review & Heritage Advisory</h4>
            <p className="text-xs text-slate-400">
              For questions regarding ethical standards or community data sovereignty, contact our team.
            </p>
          </div>
          <button
            onClick={onNavigateContact}
            className="px-6 py-2.5 rounded-full text-xs font-bold font-mono uppercase tracking-wider text-[#0A0A0B] bg-emerald-500 hover:bg-emerald-400 transition-all whitespace-nowrap"
          >
            Contact Team
          </button>
        </div>

      </div>

    </div>
  );
};
