import React, { useState } from 'react';
import { Palette, Check, Sparkles } from 'lucide-react';
import { useTheme, THEMES } from '../context/ThemeContext';
import { ColorTheme } from '../types';

export const ThemeSelector: React.FC = () => {
  const { currentTheme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Palette Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-all shadow-sm group"
        title="Change Design Palette"
      >
        <span
          className="w-3 h-3 rounded-full shadow-sm ring-1 ring-white/20 transition-transform group-hover:scale-110"
          style={{ backgroundColor: THEMES[currentTheme].swatch }}
        />
        <span className="hidden sm:inline font-medium">
          {THEMES[currentTheme].name}
        </span>
        <Palette className="w-3.5 h-3.5 text-emerald-400 opacity-70 group-hover:opacity-100" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-72 p-2 rounded-2xl bg-[#0A0A0B] border border-slate-800 shadow-2xl backdrop-blur-2xl z-50 animate-in fade-in slide-in-from-top-2">
            <div className="px-3 py-2 border-b border-slate-800/80">
              <div className="text-xs font-mono font-bold text-slate-200 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>DESIGN COLOR PALETTE</span>
              </div>
              <p className="text-[10px] text-slate-400 mt-0.5">
                Instant theme customization
              </p>
            </div>

            <div className="p-1 space-y-1 mt-1">
              {(Object.keys(THEMES) as ColorTheme[]).map((key) => {
                const item = THEMES[key];
                const isSelected = currentTheme === key;

                return (
                  <button
                    key={key}
                    onClick={() => {
                      setTheme(key);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center justify-between p-2 rounded-xl text-left transition-all ${
                      isSelected
                        ? 'bg-slate-900 border border-emerald-500/40 text-white shadow-sm'
                        : 'hover:bg-slate-900/60 text-slate-300 hover:text-white border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className="w-4 h-4 rounded-full flex-shrink-0 shadow-sm ring-1 ring-white/20"
                        style={{ backgroundColor: item.swatch }}
                      />
                      <div>
                        <div className="text-xs font-bold font-archaic text-slate-100">
                          {item.name}
                        </div>
                        <div className="text-[10px] text-slate-400 font-mono">
                          {item.subtitle}
                        </div>
                      </div>
                    </div>

                    {isSelected && (
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
