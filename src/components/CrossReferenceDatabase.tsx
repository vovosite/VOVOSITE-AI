import React, { useState } from 'react';
import {
  Database,
  Search,
  ExternalLink,
  Filter,
  Globe2,
  Sparkles,
  Layers,
  Award,
  BookOpen
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { MUSEUM_RECORDS } from '../data/mockData';
import { MuseumRecord } from '../types';

export const CrossReferenceDatabase: React.FC = () => {
  const { theme } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');
  const [selectedRecord, setSelectedRecord] = useState<MuseumRecord | null>(MUSEUM_RECORDS[0]);

  const tags = ['All', 'Militaria', 'Ceramics', 'Numismatics', 'Funerary', 'Lapidary', 'Epigraphy'];

  const filteredRecords = MUSEUM_RECORDS.filter((rec) => {
    const matchesSearch =
      rec.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rec.museum.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rec.culture.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rec.epoch.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTag = selectedTag === 'All' || rec.tags.includes(selectedTag);

    return matchesSearch && matchesTag;
  });

  return (
    <section id="archive-database" className="py-20 md:py-28 relative bg-[#0A0A0B] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-block px-3.5 py-1 text-[10px] font-bold tracking-[0.2em] text-emerald-400 border border-emerald-500/30 rounded-full bg-emerald-500/5 uppercase">
            12,400,000+ INDEXED ARCHAEOLOGICAL FINDS
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white font-archaic">
            Global Museum & Archive Cross-Reference
          </h2>

          <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed">
            Instantly compare excavation discoveries against digitized collections from the British Museum, Louvre, MET, Cairo Egyptian Museum, and CDLI cuneiform archives to establish typological provenance.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="rounded-3xl p-1 bg-gradient-to-b from-slate-700/30 via-slate-800/20 to-[#0A0A0B] border border-slate-800 shadow-2xl">
          <div className="rounded-[22px] bg-[#0A0A0B] p-6 md:p-8 space-y-6">
            
            {/* Search Input Bar */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  type="text"
                  placeholder="Search 12M+ records by artifact name, culture, museum, or accession number..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-full bg-slate-900/60 border border-slate-800 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-400 font-mono"
                />
              </div>

              {/* Tag filters */}
              <div className="flex flex-wrap items-center gap-1.5">
                {tags.map((t) => (
                  <button
                    key={t}
                    onClick={() => setSelectedTag(t)}
                    className={`px-3 py-2 rounded-full text-xs font-mono transition-all ${
                      selectedTag === t
                        ? 'bg-emerald-500 text-[#0A0A0B] font-bold shadow-md shadow-emerald-500/20'
                        : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredRecords.map((rec) => {
                const isSelected = selectedRecord?.id === rec.id;
                return (
                  <div
                    key={rec.id}
                    onClick={() => setSelectedRecord(rec)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer space-y-3 group ${
                      isSelected
                        ? 'bg-slate-900 border-emerald-400/80 ring-2 ring-emerald-500/30 shadow-xl'
                        : 'bg-slate-900/40 border-slate-800 hover:border-emerald-500/50 hover:bg-slate-900/70'
                    }`}
                  >
                    <div className="w-full h-36 rounded-xl overflow-hidden bg-slate-950 relative">
                      <img
                        src={rec.imageUrl}
                        alt={rec.title}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80';
                        }}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute top-2 right-2 px-2.5 py-0.5 rounded-full bg-[#0A0A0B]/90 border border-slate-800 text-[10px] font-mono text-emerald-400 font-bold">
                        {rec.confidenceMatch}% Parallel
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-[11px] font-mono text-emerald-400">
                        <span>{rec.museum}</span>
                        <span className="text-slate-500">{rec.accessionId}</span>
                      </div>
                      <h4 className="font-archaic text-base font-bold text-white group-hover:text-emerald-200 transition-colors">
                        {rec.title}
                      </h4>
                      <div className="text-xs text-slate-400 font-mono">
                        {rec.epoch} • {rec.culture}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 pt-1">
                      {rec.tags.map((tg, idx) => (
                        <span
                          key={idx}
                          className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-[#0A0A0B] border border-slate-800 text-slate-400"
                        >
                          {tg}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Selected Record Parallel Detail */}
            {selectedRecord && (
              <div className="mt-6 p-5 rounded-2xl bg-slate-900/40 border border-slate-800 flex flex-col sm:flex-row items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>MUSEUM CITATION & CIDOC-CRM PROVENANCE</span>
                  </div>
                  <h4 className="font-archaic text-lg font-bold text-white">
                    {selectedRecord.title} — {selectedRecord.accessionId}
                  </h4>
                  <p className="text-xs text-slate-400">
                    Repository: {selectedRecord.museum} ({selectedRecord.location}). Discovered at {selectedRecord.siteDiscovered}.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/30 font-bold">
                    Validated Parallel (98% match)
                  </span>
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
};
