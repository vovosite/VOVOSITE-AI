import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { FAQ_ITEMS } from '../data/mockData';

export const FAQSection: React.FC = () => {
  const { theme } = useTheme();
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    if (filterCategory === 'all') return true;
    return item.category === filterCategory;
  });

  const toggleAccordion = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 relative bg-[#0A0A0B] border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-block px-3.5 py-1 text-[10px] font-bold tracking-[0.2em] text-emerald-400 border border-emerald-500/30 rounded-full bg-emerald-500/5 uppercase">
            ARCHAEOLOGICAL METHOD & FAQ
          </div>

          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white font-archaic">
            Frequently Asked Questions
          </h2>

          <p className="text-sm text-slate-400 font-light leading-relaxed">
            Everything you need to know about Vovosite.pro’s AI vision accuracy, photogrammetry algorithms, field tablet synchronization, and institutional data governance.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {[
              { id: 'all', label: 'All Questions' },
              { id: 'accuracy', label: 'AI Accuracy (97.3%)' },
              { id: 'fieldwork', label: 'Offline Fieldwork' },
              { id: 'photogrammetry', label: '3D Photogrammetry' },
              { id: 'data', label: 'Data Sovereignty' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilterCategory(tab.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                  filterCategory === tab.id
                    ? 'bg-emerald-500 text-[#0A0A0B] font-bold shadow-md shadow-emerald-500/20'
                    : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen
                    ? 'bg-slate-900/60 border-slate-700 shadow-xl'
                    : 'bg-slate-900/30 border-slate-800 hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4"
                >
                  <span className="font-archaic text-base sm:text-lg font-bold text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`p-1.5 rounded-lg bg-slate-800 text-slate-400 transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? 'rotate-180 text-emerald-400' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 font-light leading-relaxed border-t border-slate-800/80 pt-4 animate-in fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
