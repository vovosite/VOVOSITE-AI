import React from 'react';
import { Sparkles, MapPin, Database, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { PLATFORM_METRICS } from '../data/mockData';

export const StatsBar: React.FC = () => {
  const { theme } = useTheme();

  const trustPartners = [
    'OXFORD ARCHAEOLOGY',
    'HEIDELBERG KLASSIK',
    'ATHENS EPHORATE',
    'BRITISH MUSEUM DIGS',
    'POMPEII SUSTAINABILITY',
    'CYPRUS ANTIQUITIES'
  ];

  return (
    <section className="relative py-12 bg-slate-900/20 border-y border-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Metric Cards 4 Columns */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {PLATFORM_METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="relative p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-archaic">
                  {metric.value}
                </span>
                <div className="w-2 h-2 rounded-full bg-emerald-400 opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all" />
              </div>
              <div className="text-sm font-semibold text-slate-200">
                {metric.label}
              </div>
              <p className="text-xs text-slate-400 mt-1 font-light leading-relaxed">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        {/* Institutional Trust Logos Strip */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-slate-500 text-xs font-mono uppercase tracking-widest font-bold flex-shrink-0">
            <span>TRUSTED BY LEADING EXCAVATIONS</span>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 sm:gap-10 text-xs font-bold tracking-wider text-slate-400">
            {trustPartners.map((partner, idx) => (
              <span
                key={idx}
                className="hover:text-emerald-400 transition-colors opacity-70 hover:opacity-100 cursor-default"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
