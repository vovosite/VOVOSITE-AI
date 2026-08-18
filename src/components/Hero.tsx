import React, { useState } from 'react';
import {
  Sparkles,
  Play,
  ArrowRight,
  ShieldCheck,
  Compass,
  Cpu,
  Layers,
  CheckCircle2,
  ScanLine,
  Boxes,
  Database,
  BarChart3,
  MapPin,
  Lock
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface HeroProps {
  onOpenVideo: () => void;
  onOpenAuth: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenVideo, onOpenAuth }) => {
  const { user, requireAuth } = useAuth();
  const [activeTab, setActiveTab] = useState<'scan' | 'strata' | 'matrix'>('scan');
  const [imageError, setImageError] = useState(false);

  const handleGetStarted = () => {
    requireAuth(() => {
      const el = document.getElementById('ai-classifier');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 'Submit an Access Request to get started with Vovosite.pro.');
  };

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-grid-pattern bg-[#0A0A0B]">
      {/* Sophisticated Dark Ambient Background Glows */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-emerald-500/15 via-teal-500/10 to-transparent blur-[150px] rounded-full pointer-events-none -z-10"
      />
      <div className="absolute top-12 right-10 w-96 h-96 bg-slate-900/40 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto space-y-7">
          
          {/* Top Pill Badge */}
          <div className="inline-block px-3.5 py-1 text-[10px] font-bold tracking-[0.2em] text-emerald-400 border border-emerald-500/30 rounded-full bg-emerald-500/5 uppercase backdrop-blur-md font-mono">
            THE ARCHAEOLOGICAL INSIGHTS ACCELERATOR
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tighter leading-[1.1] text-white">
            Agile Research for <br />
            <span className="font-serif italic text-emerald-400">Forward Thinking</span> Excavations
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            Replace slow, disconnected field methods with a unified platform that connects you to archaeological insights in real-time. Validated results in days, not months.
          </p>

          {/* Call to Actions - Enforcing Request Access */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={handleGetStarted}
              className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-emerald-50 transition-all shadow-xl shadow-white/5 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 text-sm font-mono uppercase tracking-wider"
            >
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Request Access</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Micro Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-xs text-slate-400 font-mono">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>100% Data Sovereignty</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Offline-First Field Sync</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>97.3% Vision Accuracy</span>
            </div>
          </div>
        </div>

        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-14 max-w-5xl mx-auto">
          <div className="p-6 bg-slate-900/40 border border-slate-800 rounded-2xl hover:border-emerald-500/50 transition-colors group">
            <div className="w-10 h-10 mb-4 flex items-center justify-center bg-emerald-500/10 rounded-xl group-hover:bg-emerald-500/20 transition-colors">
              <Sparkles className="w-5 h-5 text-emerald-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Smart Vision AI</h3>
            <p className="text-sm text-slate-400 leading-relaxed font-light">
              Automated artifact segmentation, period horizon classification, and elemental spectrometry trained on 12M+ peer-reviewed museum records.
            </p>
          </div>

          <div className="p-6 bg-slate-900/40 border border-slate-800 rounded-2xl hover:border-emerald-500/50 transition-colors group">
            <div className="w-10 h-10 mb-4 flex items-center justify-center bg-emerald-500/10 rounded-xl group-hover:bg-emerald-500/20 transition-colors">
              <Layers className="w-5 h-5 text-emerald-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">3D Stratigraphy</h3>
            <p className="text-sm text-slate-400 leading-relaxed font-light">
              Sub-centimeter photogrammetry, mesh slicing, Munsell soil matrix profiling, and automated topological Harris matrix phasing.
            </p>
          </div>

          <div className="p-6 bg-slate-900/40 border border-slate-800 rounded-2xl hover:border-emerald-500/50 transition-colors group">
            <div className="w-10 h-10 mb-4 flex items-center justify-center bg-emerald-500/10 rounded-xl group-hover:bg-emerald-500/20 transition-colors">
              <BarChart3 className="w-5 h-5 text-emerald-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Real-Time Synthesis</h3>
            <p className="text-sm text-slate-400 leading-relaxed font-light">
              Instant publication-ready monographs, LaTeX plates, CIDOC-CRM Dublin Core ontologies, and offline-first rugged field synchronization.
            </p>
          </div>
        </div>

        {/* Hero Interactive Showcase HUD Card */}
        <div className="mt-12 max-w-5xl mx-auto">
          <div className="relative rounded-3xl p-1 bg-gradient-to-b from-slate-700/30 via-slate-800/20 to-[#0A0A0B] shadow-2xl backdrop-blur-xl border border-slate-800/80">
            <div className="relative rounded-[22px] bg-[#0A0A0B] border border-slate-800/80 overflow-hidden">
              
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900/60 border-b border-slate-800/80 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="text-slate-600 font-mono">|</span>
                  <span className="font-mono text-slate-300 font-medium truncate">
                    VOVOSITE-EXPEDITION-STATION // TRENCH_04_WEST.prj
                  </span>
                </div>

                {/* Submode Switcher Tabs */}
                <div className="flex items-center bg-slate-950 p-1 rounded-full border border-slate-800 text-[11px] font-mono">
                  <button
                    onClick={() => setActiveTab('scan')}
                    className={`px-3 py-1 rounded-full transition-all ${
                      activeTab === 'scan'
                        ? 'bg-slate-800 text-white font-semibold shadow'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Vision HUD
                  </button>
                  <button
                    onClick={() => setActiveTab('strata')}
                    className={`px-3 py-1 rounded-full transition-all ${
                      activeTab === 'strata'
                        ? 'bg-slate-800 text-white font-semibold shadow'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Strata Profile
                  </button>
                  <button
                    onClick={() => setActiveTab('matrix')}
                    className={`px-3 py-1 rounded-full transition-all ${
                      activeTab === 'matrix'
                        ? 'bg-slate-800 text-white font-semibold shadow'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Phasing
                  </button>
                </div>
              </div>

              {/* Main Interactive HUD Canvas */}
              <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Left Live Visual */}
                <div className="lg:col-span-7 relative bg-slate-900/40 rounded-2xl border border-slate-800 overflow-hidden min-h-[320px] sm:min-h-[360px] flex flex-col justify-between p-4">
                  <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

                  {/* Top HUD overlay */}
                  <div className="relative z-10 flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-2 bg-[#0A0A0B]/90 px-2.5 py-1 rounded-full border border-slate-800">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-slate-300">SPECTRAL VISION STREAM</span>
                    </div>
                    <div className="text-slate-400 bg-[#0A0A0B]/90 px-2.5 py-1 rounded-full border border-slate-800">
                      37°58'16.2"N 23°43'34.1"E
                    </div>
                  </div>

                  {/* Central Artifact Preview - Guaranteed Bronze Helmet Visual with fallback */}
                  <div className="relative my-auto flex items-center justify-center">
                    {activeTab === 'scan' && (
                      <div className="relative w-64 h-52 sm:w-80 sm:h-60 rounded-xl overflow-hidden border border-slate-700 shadow-2xl bg-[#12141a]">
                        {!imageError ? (
                          <img
                            src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
                            alt="Archaic Corinthian Bronze Helmet"
                            className="w-full h-full object-cover filter contrast-105"
                            onError={() => setImageError(true)}
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center bg-slate-950 p-4 text-center">
                            <svg viewBox="0 0 120 120" className="w-24 h-24 text-emerald-400/80 mb-2" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M60 15 C35 15 25 35 25 65 C25 85 35 95 45 95 L45 75 C45 70 50 65 60 65 C70 65 75 70 75 75 L75 95 C85 95 95 85 95 65 C95 35 85 15 60 15 Z" fill="currentColor" fillOpacity="0.2" />
                              <circle cx="45" cy="55" r="4" fill="currentColor" />
                              <circle cx="75" cy="55" r="4" fill="currentColor" />
                              <path d="M60 40 L60 65" strokeWidth="3" />
                            </svg>
                            <span className="text-xs font-mono text-emerald-300 font-bold">BRONZE HELMET // 3D MESH</span>
                          </div>
                        )}
                        <div className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-scan shadow-[0_0_15px_#10b981]" />

                        {/* Bounding Box */}
                        <div className="absolute top-1/4 left-1/4 w-36 h-28 border-2 border-emerald-400/80 rounded-lg bg-emerald-400/10 flex flex-col justify-between p-1.5 pointer-events-none">
                          <div className="flex justify-between items-start text-[9px] font-mono font-bold text-emerald-300 bg-[#0A0A0B]/90 px-1 py-0.5 rounded border border-emerald-400/40 w-max">
                            <span>CORINTHIAN B // 98.4%</span>
                          </div>
                          <div className="text-[8px] font-mono text-slate-300 bg-[#0A0A0B]/80 px-1 py-0.5 rounded w-max">
                            87.6% Cu • 11.2% Sn
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 'strata' && (
                      <div className="w-full space-y-2 py-2">
                        <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700 text-xs flex justify-between items-center">
                          <span className="font-mono text-slate-300">0.0–0.35m Layer I: Modern Humus</span>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-mono">10YR 3/2</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-emerald-950/30 border border-emerald-800/40 text-xs flex justify-between items-center">
                          <span className="font-mono text-emerald-200">0.35–1.15m Layer II: Byzantine Rubble</span>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-900/40 text-emerald-300 font-mono">7.5YR 5/4</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-teal-950/40 border border-teal-700/60 text-xs flex justify-between items-center ring-1 ring-emerald-500/40">
                          <span className="font-mono text-teal-200 font-bold">1.15–2.45m Layer III: Roman Forum Opus Signinum</span>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-teal-900/40 text-teal-300 font-mono font-bold">10YR 6/4</span>
                        </div>
                      </div>
                    )}

                    {activeTab === 'matrix' && (
                      <div className="flex flex-col items-center gap-2 py-2">
                        <div className="px-4 py-1.5 rounded-full bg-slate-800 border border-slate-600 text-xs font-mono text-slate-200">
                          [SU 101] Topsoil (Modern)
                        </div>
                        <div className="w-0.5 h-4 bg-slate-600" />
                        <div className="px-4 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-600 text-xs font-mono text-emerald-200 font-bold shadow-lg">
                          [SU 103] Roman Forum Pavement (242 CE)
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Bottom Telemetry Footer */}
                  <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-slate-800/80">
                    <span>CONFIDENCE: <strong className="text-emerald-400">98.4%</strong></span>
                    <span>PERIOD: <strong className="text-slate-200">540–510 BCE</strong></span>
                    <span>ID: <strong className="text-slate-300">ART-COR-001</strong></span>
                  </div>
                </div>

                {/* Right Breakdown Sidebar */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-emerald-400 font-mono">
                      CATALOG ENTRY AUTO-PARSED
                    </span>
                    <h3 className="text-xl font-bold text-white">
                      Archaic Corinthian Bronze Helmet
                    </h3>
                    <p className="text-xs text-slate-400 font-light">
                      Identified via multi-modal photogrammetric contour analysis and XRF spectrometry parallel matching.
                    </p>
                  </div>

                  <div className="space-y-2 pt-2">
                    <div className="flex items-center justify-between text-xs py-2 px-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                      <span className="text-slate-400">Chronological Phase</span>
                      <span className="font-medium text-white font-mono">Late Archaic Peloponnese</span>
                    </div>
                    <div className="flex items-center justify-between text-xs py-2 px-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                      <span className="text-slate-400">Stratigraphic Depth</span>
                      <span className="font-medium text-emerald-400 font-mono">3.45m (SU 108)</span>
                    </div>
                    <div className="flex items-center justify-between text-xs py-2 px-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                      <span className="text-slate-400">Museum Parallel</span>
                      <span className="font-medium text-teal-400 font-mono">Olympia B 4211 (96.8%)</span>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center gap-3">
                    <button
                      onClick={handleGetStarted}
                      className="flex-1 text-center py-2.5 px-3 rounded-full text-xs font-bold text-[#0A0A0B] bg-emerald-500 hover:bg-emerald-400 shadow-md transition-all"
                    >
                      Test with Sample Artifacts
                    </button>
                    <a
                      href="#3d-trench"
                      className="py-2.5 px-4 rounded-full text-xs font-semibold text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-colors"
                    >
                      Strata Profile
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
