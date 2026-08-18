import React, { useState } from 'react';
import {
  Layers,
  Eye,
  MapPin,
  Sparkles,
  Info,
  Ruler,
  Grid,
  Filter,
  CheckCircle2,
  ChevronRight,
  SlidersHorizontal,
  Compass
} from 'lucide-react';
import { STRATIGRAPHIC_LAYERS } from '../data/mockData';
import { StratigraphicLayer } from '../types';

export const Trench3DViewer: React.FC = () => {
  const [selectedLayer, setSelectedLayer] = useState<StratigraphicLayer>(STRATIGRAPHIC_LAYERS[0]);
  const [depthSlice, setDepthSlice] = useState<number>(6.0); // max 6.0m depth
  const [showArtifactPins, setShowArtifactPins] = useState<boolean>(true);
  const [selectedPin, setSelectedPin] = useState<{
    name: string;
    type: string;
    depth: string;
    year: string;
    details: string;
    layer: string;
  } | null>(null);

  const [filterPeriod, setFilterPeriod] = useState<string>('all');

  const filteredLayers = STRATIGRAPHIC_LAYERS.filter((layer) => {
    if (layer.depthStart >= depthSlice) return false;
    if (filterPeriod !== 'all') {
      return layer.epoch.toLowerCase().includes(filterPeriod.toLowerCase());
    }
    return true;
  });

  return (
    <section id="3d-trench" className="py-20 md:py-28 relative bg-[#0A0A0B] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-block px-3.5 py-1 text-[10px] font-bold tracking-[0.2em] text-emerald-400 border border-emerald-500/30 rounded-full bg-emerald-500/5 uppercase font-mono">
            ARCHAEOLOGICAL ELEVATION & STRATIGRAPHY
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white font-archaic">
            Trench & Stratigraphic Layer Explorer
          </h2>

          <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed">
            Clean 2D depositional profile cross-section of Trench IV. Inspect chronological soil horizons, in-situ find coordinates, Munsell soil codes, and automated Harris matrix units.
          </p>
        </div>

        {/* Main 2D Profile Canvas Box */}
        <div className="rounded-3xl p-1 bg-gradient-to-b from-slate-700/30 via-slate-800/20 to-[#0A0A0B] border border-slate-800 shadow-2xl">
          <div className="rounded-[22px] bg-[#0A0A0B] overflow-hidden">
            
            {/* Top Toolbar */}
            <div className="p-4 bg-slate-900/40 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 bg-[#0A0A0B] px-3 py-1.5 rounded-full border border-slate-800">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-slate-200 font-semibold">TRENCH IV (NORTH BAULK PROFILE) — 2D ELEVATION</span>
                </div>
                <span className="text-slate-400 hidden sm:inline">Datum: 142.85m ASL</span>
              </div>

              {/* Toolbar Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowArtifactPins(!showArtifactPins)}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border transition-all ${
                    showArtifactPins
                      ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-300'
                      : 'bg-slate-900 border-slate-800 text-slate-500'
                  }`}
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{showArtifactPins ? 'Artifact Pins (ON)' : 'Artifact Pins (OFF)'}</span>
                </button>
              </div>
            </div>

            {/* Main Interactive 2D Stratigraphic Layout */}
            <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left 2D Profile Column */}
              <div className="lg:col-span-7 space-y-4">
                
                {/* 2D Elevation View Card */}
                <div className="relative rounded-2xl bg-slate-900/40 border border-slate-800 p-5 space-y-4 shadow-inner">
                  
                  {/* Metric Top Bar */}
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-2 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <Ruler className="w-4 h-4 text-emerald-400" />
                      <span>DEPTH BELOW SURFACE: <strong>0.00m to -{depthSlice.toFixed(2)}m</strong></span>
                    </div>
                    <div className="text-emerald-400 font-bold bg-[#0A0A0B] px-3 py-1 rounded-full border border-slate-800">
                      {filteredLayers.length} Active Strata Shown
                    </div>
                  </div>

                  {/* Clean 2D Cross Section Beds */}
                  <div className="space-y-2.5">
                    {filteredLayers.map((layer) => {
                      const isSelected = selectedLayer.id === layer.id;

                      return (
                        <div
                          key={layer.id}
                          onClick={() => setSelectedLayer(layer)}
                          className={`relative cursor-pointer transition-all duration-200 rounded-xl p-4 border text-left ${
                            isSelected
                              ? 'border-emerald-400 ring-2 ring-emerald-500/30 bg-slate-850 shadow-lg shadow-emerald-500/5'
                              : 'border-slate-800 hover:border-slate-700 bg-slate-900/50 hover:bg-slate-900/80'
                          }`}
                          style={{
                            borderLeftWidth: '6px',
                            borderLeftColor: layer.color,
                          }}
                        >
                          {/* Top Row: Name, Unit, Depth */}
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <div className="flex items-center gap-2.5">
                              <span
                                className="w-3.5 h-3.5 rounded-full flex-shrink-0 shadow-sm"
                                style={{ backgroundColor: layer.color }}
                              />
                              <h4 className="text-sm font-bold text-white font-archaic">
                                {layer.name}
                              </h4>
                              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#0A0A0B] text-emerald-400 border border-slate-800">
                                {layer.stratigraphicUnit}
                              </span>
                            </div>

                            <div className="flex items-center gap-2 text-right">
                              <span className="text-xs font-mono text-slate-300 font-bold">
                                {layer.depthRange}
                              </span>
                              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#0A0A0B] text-slate-400 border border-slate-800">
                                {layer.keyFindsCount} finds
                              </span>
                            </div>
                          </div>

                          {/* Subtext: Epoch & Munsell */}
                          <div className="mt-1.5 flex items-center justify-between text-xs text-slate-400">
                            <span className="font-medium text-slate-300">{layer.epoch}</span>
                            <span className="font-mono text-emerald-300/90 bg-[#0A0A0B] px-2 py-0.5 rounded border border-slate-800 text-[11px]">
                              Munsell: {layer.munsellCode}
                            </span>
                          </div>

                          {/* In-Situ Artifact Pins inside this layer */}
                          {showArtifactPins && layer.artifactsInLayer.length > 0 && (
                            <div className="mt-3 pt-2.5 border-t border-slate-800 flex flex-wrap gap-2">
                              {layer.artifactsInLayer.map((art, aIdx) => (
                                <button
                                  key={aIdx}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedLayer(layer);
                                    setSelectedPin({
                                      name: art.name,
                                      type: art.type,
                                      depth: layer.depthRange,
                                      year: art.year,
                                      details: art.details,
                                      layer: layer.name,
                                    });
                                  }}
                                  className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0A0A0B] hover:bg-emerald-500/15 border border-slate-800 hover:border-emerald-500/40 text-[11px] font-mono text-slate-300 hover:text-emerald-300 transition-all shadow-sm"
                                >
                                  <MapPin className="w-3 h-3 text-emerald-400" />
                                  <span>{art.name} ({art.year})</span>
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Clean 2D Depth Slider Control */}
                  <div className="pt-3 border-t border-slate-800 text-xs font-mono space-y-1.5">
                    <div className="flex justify-between text-slate-400">
                      <span>PROFILE VERTICAL CUT DEPTH</span>
                      <span className="text-emerald-400 font-bold">{depthSlice.toFixed(2)}m</span>
                    </div>
                    <input
                      type="range"
                      min="0.8"
                      max="6.0"
                      step="0.1"
                      value={depthSlice}
                      onChange={(e) => setDepthSlice(parseFloat(e.target.value))}
                      className="w-full accent-emerald-500 cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* Right Diagnostic Inspector Column */}
              <div className="lg:col-span-5 space-y-4">
                
                {/* Pin Card popup if pin clicked */}
                {selectedPin && (
                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-emerald-500/50 space-y-2 shadow-xl animate-in fade-in">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="flex items-center gap-1 text-emerald-400 font-bold">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>IN-SITU RECOVERY PIN</span>
                      </span>
                      <button
                        onClick={() => setSelectedPin(null)}
                        className="text-slate-400 hover:text-white text-xs px-2 py-0.5 rounded-full hover:bg-slate-800"
                      >
                        ✕ Close
                      </button>
                    </div>
                    <div className="font-archaic text-base font-bold text-white">
                      {selectedPin.name}
                    </div>
                    <div className="text-xs text-slate-300 font-mono">
                      Era: {selectedPin.year} • Depth: {selectedPin.depth}
                    </div>
                    <p className="text-xs text-slate-300 leading-snug">
                      {selectedPin.details}
                    </p>
                    <div className="text-[10px] font-mono text-emerald-400 pt-1">
                      Located in: {selectedPin.layer}
                    </div>
                  </div>
                )}

                {/* Layer Diagnostic Inspector */}
                <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <Info className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs font-mono font-bold text-slate-200 uppercase">
                        Stratum Inspector
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-[#0A0A0B] px-2.5 py-1 rounded-full border border-slate-800">
                      {selectedLayer.stratigraphicUnit}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <h4 className="font-archaic text-lg font-bold text-white">
                        {selectedLayer.name}
                      </h4>
                      <div className="text-xs text-emerald-400 font-mono mt-0.5">
                        {selectedLayer.epoch}
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-[#0A0A0B] border border-slate-800 text-xs text-slate-300 font-light leading-relaxed">
                      {selectedLayer.soilDescription}
                    </div>

                    <div className="space-y-2 text-xs font-mono">
                      <div className="flex justify-between py-2 px-3 rounded-xl bg-[#0A0A0B] border border-slate-800">
                        <span className="text-slate-400">Munsell Soil Code</span>
                        <span className="text-slate-200 font-bold">{selectedLayer.munsellCode}</span>
                      </div>
                      <div className="flex justify-between py-2 px-3 rounded-xl bg-[#0A0A0B] border border-slate-800">
                        <span className="text-slate-400">Excavation Depth Range</span>
                        <span className="text-emerald-400 font-bold">{selectedLayer.depthRange}</span>
                      </div>
                      <div className="flex justify-between py-2 px-3 rounded-xl bg-[#0A0A0B] border border-slate-800">
                        <span className="text-slate-400">Chronological Phase</span>
                        <span className="text-teal-400 font-bold">{selectedLayer.phasing}</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <a
                        href="#harris-matrix"
                        className="w-full block text-center py-2.5 px-3 rounded-full text-xs font-bold text-[#0A0A0B] bg-emerald-500 hover:bg-emerald-400 shadow-md transition-all"
                      >
                        Calculate in Harris Matrix Phasing
                      </a>
                    </div>
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
