import React from 'react';
import { Quote, Sparkles, Star, MapPin, CheckCircle2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { TESTIMONIALS } from '../data/mockData';

export const CaseStudiesSection: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section id="case-studies" className="py-20 md:py-28 relative bg-[#0A0A0B] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-3.5 py-1 text-[10px] font-bold tracking-[0.2em] text-emerald-400 border border-emerald-500/30 rounded-full bg-emerald-500/5 uppercase">
            FIELD PROVENANCE & CASE STUDIES
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white font-archaic">
            Validated by Excavation Directors Worldwide
          </h2>

          <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed">
            See how leading archaeological field missions and heritage institutes accelerate discovery with Vovosite.pro.
          </p>
        </div>

        {/* Testimonials 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-7 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-emerald-500/50 transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Metric Badge */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div>
                    <span className="text-2xl font-black font-archaic text-emerald-400">
                      {t.stat}
                    </span>
                    <div className="text-[10px] font-mono text-slate-400">{t.statLabel}</div>
                  </div>
                  <Quote className="w-6 h-6 text-slate-700" />
                </div>

                {/* Quote text */}
                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author info */}
              <div className="pt-4 border-t border-slate-800 flex items-center gap-3">
                <img
                  src={t.avatarUrl}
                  alt={t.author}
                  className="w-11 h-11 rounded-full object-cover border border-slate-700"
                />
                <div className="space-y-0.5">
                  <div className="text-xs font-bold text-white">{t.author}</div>
                  <div className="text-[11px] text-slate-400">{t.role}</div>
                  <div className="text-[10px] font-mono font-semibold text-emerald-400">
                    {t.institution}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
