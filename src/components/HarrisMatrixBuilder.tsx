import React, { useState } from 'react';
import {
  Boxes,
  ArrowDown,
  GitBranch,
  Shield,
  Layers,
  Sparkles,
  Download,
  CheckCircle2,
  Filter,
  Info
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { HARRIS_MATRIX_DATA } from '../data/mockData';
import { HarrisUnit } from '../types';
import confetti from 'canvas-confetti';

export const HarrisMatrixBuilder: React.FC = () => {
  const { theme } = useTheme();
  const [selectedUnit, setSelectedUnit] = useState<HarrisUnit | null>(HARRIS_MATRIX_DATA[4]); // SU 103 Roman
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [showResolvedToast, setShowResolvedToast] = useState<boolean>(false);

  const filteredUnits = HARRIS_MATRIX_DATA.filter((u) => {
    if (typeFilter === 'all') return true;
    return u.type === typeFilter;
  });

  const handleResolvePhasing = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 }
    });
    setShowResolvedToast(true);
    setTimeout(() => setShowResolvedToast(false), 3000);
  };

  const getTypeBadge = (type: HarrisUnit['type']) => {
    switch (type) {
      case 'deposit':
        return { label: 'Layer / Deposit', bg: 'bg-emerald-950/60 text-emerald-300 border-emerald-800' };
      case 'cut':
        return { label: 'Cut / Trench', bg: 'bg-red-950/60 text-red-300 border-red-800' };
      case 'structure':
        return { label: 'Masonry / Wall', bg: 'bg-blue-950/60 text-blue-300 border-blue-800' };
      case 'surface':
        return { label: 'Floor / Pavement', bg: 'bg-teal-950/60 text-teal-300 border-teal-800' };
      case 'destruction':
        return { label: 'Destruction / Burn', bg: 'bg-amber-950/60 text-amber-300 border-amber-800' };
      default:
        return { label: 'Unit', bg: 'bg-slate-800 text-slate-300 border-slate-700' };
    }
  };

  return (
    <section id="harris-matrix" className="py-20 md:py-28 relative bg-[#0A0A0B] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-block px-3.5 py-1 text-[10px] font-bold tracking-[0.2em] text-emerald-400 border border-emerald-500/30 rounded-full bg-emerald-500/5 uppercase">
            TOPOLOGICAL STRATIGRAPHIC SEQUENCING
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white font-archaic">
            Automated Harris Matrix Generator
          </h2>

          <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed">
            Eliminate stratigraphic circularities. DigSite translates complex field relationships into mathematically verified Harris Matrices, resolving temporal sequences from topsoil down to virgin bedrock.
          </p>
        </div>

        {/* Workspace Card */}
        <div className="rounded-3xl p-1 bg-gradient-to-b from-slate-700/30 via-slate-800/20 to-[#0A0A0B] border border-slate-800 shadow-2xl">
          <div className="rounded-[22px] bg-[#0A0A0B] p-6 md:p-8">
            
            {/* Top Filter and Action Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
              {/* Type Filters */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-slate-400 mr-1 flex items-center gap-1">
                  <Filter className="w-3.5 h-3.5" /> Filter:
                </span>
                {[
                  { id: 'all', label: 'All Units' },
                  { id: 'deposit', label: 'Deposits' },
                  { id: 'structure', label: 'Structures' },
                  { id: 'cut', label: 'Cuts' },
                  { id: 'destruction', label: 'Destruction Layers' },
                  { id: 'surface', label: 'Floors/Bedrock' },
                ].map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setTypeFilter(f.id)}
                    className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all ${
                      typeFilter === f.id
                        ? 'bg-slate-800 text-white font-bold border border-slate-600 shadow'
                        : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2.5">
                <button
                  onClick={handleResolvePhasing}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-[#0A0A0B] bg-emerald-500 hover:bg-emerald-400 shadow-lg shadow-emerald-500/20 transition-all"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Auto-Resolve Phasing</span>
                </button>
              </div>
            </div>

            {showResolvedToast && (
              <div className="mt-4 p-3 rounded-2xl bg-emerald-950/80 border border-emerald-500/50 text-xs text-emerald-200 flex items-center gap-2 font-mono">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Stratigraphic graph verified: Zero cyclic loops detected across 9 Stratigraphic Units.</span>
              </div>
            )}

            {/* Matrix Graph Canvas & Unit Detail View */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Graph Layout */}
              <div className="lg:col-span-8 bg-slate-900/30 rounded-2xl border border-slate-800 p-6 space-y-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

                <div className="relative z-10 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>TOPOLOGICAL DEPOSITION ORDER (YOUNGEST → OLDEST)</span>
                  <span className="text-emerald-400 font-semibold">Trench IV Harris Tree</span>
                </div>

                {/* Nodes Stack */}
                <div className="relative z-10 space-y-4 max-w-xl mx-auto">
                  
                  {/* Level 1: Youngest */}
                  <div className="flex justify-center">
                    {filteredUnits.filter(u => u.id === 'su-101').map(unit => (
                      <button
                        key={unit.id}
                        onClick={() => setSelectedUnit(unit)}
                        className={`w-56 p-3 rounded-2xl border text-center font-mono text-xs transition-all ${
                          selectedUnit?.id === unit.id
                            ? 'bg-emerald-500/20 border-emerald-400 text-emerald-200 ring-2 ring-emerald-500/50 font-bold shadow-lg scale-105'
                            : 'bg-slate-900 border-slate-700 text-slate-200 hover:border-slate-500'
                        }`}
                      >
                        <div className="font-bold text-sm">{unit.code}</div>
                        <div className="text-[10px] text-slate-400 truncate">{unit.description}</div>
                      </button>
                    ))}
                  </div>

                  <div className="flex justify-center">
                    <ArrowDown className="w-4 h-4 text-slate-600" />
                  </div>

                  {/* Level 2: Intermediary */}
                  <div className="flex justify-center gap-4">
                    {filteredUnits.filter(u => ['su-102', 'su-105'].includes(u.id)).map(unit => (
                      <button
                        key={unit.id}
                        onClick={() => setSelectedUnit(unit)}
                        className={`w-44 p-2.5 rounded-2xl border text-center font-mono text-xs transition-all ${
                          selectedUnit?.id === unit.id
                            ? 'bg-emerald-500/20 border-emerald-400 text-emerald-200 ring-2 ring-emerald-500/50 font-bold shadow-lg scale-105'
                            : 'bg-slate-900 border-slate-700 text-slate-200 hover:border-slate-500'
                        }`}
                      >
                        <div className="font-bold">{unit.code}</div>
                        <div className="text-[10px] text-slate-400 truncate">{unit.description}</div>
                      </button>
                    ))}
                  </div>

                  <div className="flex justify-center">
                    <ArrowDown className="w-4 h-4 text-slate-600" />
                  </div>

                  {/* Level 3: Roman Horizon */}
                  <div className="flex justify-center gap-4">
                    {filteredUnits.filter(u => ['su-103', 'su-107'].includes(u.id)).map(unit => (
                      <button
                        key={unit.id}
                        onClick={() => setSelectedUnit(unit)}
                        className={`w-48 p-3 rounded-2xl border text-center font-mono text-xs transition-all ${
                          selectedUnit?.id === unit.id
                            ? 'bg-emerald-500/20 border-emerald-400 text-emerald-200 ring-2 ring-emerald-500/50 font-bold shadow-lg scale-105'
                            : 'bg-slate-900 border-slate-700 text-slate-200 hover:border-slate-500'
                        }`}
                      >
                        <div className="font-bold text-sm text-emerald-300">{unit.code}</div>
                        <div className="text-[10px] text-slate-300 truncate">{unit.description}</div>
                        <div className="text-[9px] text-teal-400 mt-0.5">{unit.datingEstimate}</div>
                      </button>
                    ))}
                  </div>

                  <div className="flex justify-center">
                    <ArrowDown className="w-4 h-4 text-slate-600" />
                  </div>

                  {/* Level 4: Archaic & Bronze Age & Bedrock */}
                  <div className="flex justify-center gap-3">
                    {filteredUnits.filter(u => ['su-104', 'su-108', 'su-112'].includes(u.id)).map(unit => (
                      <button
                        key={unit.id}
                        onClick={() => setSelectedUnit(unit)}
                        className={`w-36 p-2 rounded-2xl border text-center font-mono text-xs transition-all ${
                          selectedUnit?.id === unit.id
                            ? 'bg-emerald-500/20 border-emerald-400 text-emerald-200 ring-2 ring-emerald-500/50 font-bold shadow-lg scale-105'
                            : 'bg-slate-900 border-slate-700 text-slate-200 hover:border-slate-500'
                        }`}
                      >
                        <div className="font-bold">{unit.code}</div>
                        <div className="text-[9px] text-slate-400 truncate">{unit.phase}</div>
                      </button>
                    ))}
                  </div>

                  <div className="flex justify-center">
                    <ArrowDown className="w-4 h-4 text-slate-600" />
                  </div>

                  {/* Level 5: Bedrock */}
                  <div className="flex justify-center">
                    {filteredUnits.filter(u => u.id === 'su-120').map(unit => (
                      <button
                        key={unit.id}
                        onClick={() => setSelectedUnit(unit)}
                        className={`w-56 p-2.5 rounded-2xl border text-center font-mono text-xs transition-all ${
                          selectedUnit?.id === unit.id
                            ? 'bg-slate-800 border-slate-500 text-white font-bold'
                            : 'bg-[#0A0A0B] border-slate-800 text-slate-500 hover:text-slate-300'
                        }`}
                      >
                        <div className="font-bold text-slate-300">{unit.code} [Geological Bedrock]</div>
                      </button>
                    ))}
                  </div>

                </div>
              </div>

              {/* Right: Selected Stratigraphic Unit Inspector */}
              <div className="lg:col-span-4 space-y-4">
                <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <GitBranch className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs font-mono font-bold text-slate-200 uppercase">
                        SU Matrix Node Inspector
                      </span>
                    </div>
                    {selectedUnit && (
                      <span className="text-xs font-mono font-bold text-emerald-400">
                        {selectedUnit.code}
                      </span>
                    )}
                  </div>

                  {selectedUnit ? (
                    <div className="space-y-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${getTypeBadge(selectedUnit.type).bg}`}>
                            {getTypeBadge(selectedUnit.type).label}
                          </span>
                          <span className="text-[10px] font-mono text-slate-400">
                            {selectedUnit.phase}
                          </span>
                        </div>
                        <h4 className="font-archaic text-base font-bold text-white">
                          {selectedUnit.description}
                        </h4>
                      </div>

                      <div className="space-y-2 text-xs font-mono">
                        <div className="p-3 rounded-xl bg-[#0A0A0B] border border-slate-800">
                          <div className="text-slate-400 text-[10px]">DIRECTLY SUPERIMPOSED ABOVE:</div>
                          <div className="text-emerald-300 font-bold mt-0.5">
                            {selectedUnit.above.length > 0 ? selectedUnit.above.join(', ').toUpperCase() : 'None (Top of Sequence)'}
                          </div>
                        </div>

                        <div className="p-3 rounded-xl bg-[#0A0A0B] border border-slate-800">
                          <div className="text-slate-400 text-[10px]">SEALED BY / SITS BELOW:</div>
                          <div className="text-teal-300 font-bold mt-0.5">
                            {selectedUnit.below.length > 0 ? selectedUnit.below.join(', ').toUpperCase() : 'None (Geological Bedrock)'}
                          </div>
                        </div>

                        {selectedUnit.munsell && (
                          <div className="p-3 rounded-xl bg-[#0A0A0B] border border-slate-800">
                            <div className="text-slate-400 text-[10px]">MUNSELL MATRIX CODE:</div>
                            <div className="text-slate-200 font-bold mt-0.5">
                              {selectedUnit.munsell}
                            </div>
                          </div>
                        )}

                        {selectedUnit.datingEstimate && (
                          <div className="p-3 rounded-xl bg-[#0A0A0B] border border-slate-800">
                            <div className="text-slate-400 text-[10px]">CHRONOLOGICAL ESTIMATE:</div>
                            <div className="text-emerald-400 font-bold mt-0.5">
                              {selectedUnit.datingEstimate}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="py-8 text-center text-xs text-slate-400 font-mono">
                      Click any node in the Harris matrix diagram to inspect relationships.
                    </div>
                  )}

                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
