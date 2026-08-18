import React, { createContext, useContext, useState, useEffect } from 'react';
import { ColorTheme, ThemeConfig } from '../types';

export const THEMES: Record<ColorTheme, ThemeConfig> = {
  'sophisticated-dark': {
    id: 'sophisticated-dark',
    name: 'Sophisticated Dark',
    subtitle: 'Obsidian #0A0A0B & Emerald Glow',
    primary: 'from-emerald-500 to-teal-400',
    primaryHover: 'hover:from-emerald-400 hover:to-teal-300',
    accent: 'text-emerald-400',
    badgeBg: 'bg-emerald-500/5',
    badgeBorder: 'border-emerald-500/30',
    badgeText: 'text-emerald-400',
    heroGradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    glowClass: 'glow-emerald',
    borderAccent: 'border-emerald-500/40',
    cardHighlight: 'group-hover:border-emerald-500/50',
    ringClass: 'ring-emerald-500/40',
    bannerBg: 'from-emerald-950/40 via-slate-900/80 to-[#0A0A0B]',
    swatch: '#10b981',
  },
  'desert-bronze': {
    id: 'desert-bronze',
    name: 'Desert Bronze & Ochre',
    subtitle: 'Classic Excavation Gold & Sandstone',
    primary: 'from-amber-500 to-amber-600',
    primaryHover: 'hover:from-amber-400 hover:to-amber-500',
    accent: 'text-amber-400',
    badgeBg: 'bg-amber-500/5',
    badgeBorder: 'border-amber-500/30',
    badgeText: 'text-amber-400',
    heroGradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
    glowClass: 'glow-amber',
    borderAccent: 'border-amber-500/40',
    cardHighlight: 'group-hover:border-amber-500/50',
    ringClass: 'ring-amber-500/40',
    bannerBg: 'from-amber-950/40 via-slate-900/80 to-[#0A0A0B]',
    swatch: '#f59e0b',
  },
  'aegean-cobalt': {
    id: 'aegean-cobalt',
    name: 'Aegean Cobalt & Cyan',
    subtitle: 'Mediterranean Maritime & Classical Marble',
    primary: 'from-cyan-500 to-blue-600',
    primaryHover: 'hover:from-cyan-400 hover:to-blue-500',
    accent: 'text-cyan-400',
    badgeBg: 'bg-cyan-500/5',
    badgeBorder: 'border-cyan-500/30',
    badgeText: 'text-cyan-400',
    heroGradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
    glowClass: 'glow-blue',
    borderAccent: 'border-cyan-500/40',
    cardHighlight: 'group-hover:border-cyan-500/50',
    ringClass: 'ring-cyan-500/40',
    bannerBg: 'from-blue-950/40 via-slate-900/80 to-[#0A0A0B]',
    swatch: '#06b6d4',
  },
  'terracotta-slate': {
    id: 'terracotta-slate',
    name: 'Terracotta & Ember Clay',
    subtitle: 'Etruscan Pottery & Volcanic Ash',
    primary: 'from-orange-600 to-rose-600',
    primaryHover: 'hover:from-orange-500 hover:to-rose-500',
    accent: 'text-orange-400',
    badgeBg: 'bg-orange-500/5',
    badgeBorder: 'border-orange-500/30',
    badgeText: 'text-orange-400',
    heroGradient: 'from-orange-600/20 via-rose-600/10 to-transparent',
    glowClass: 'glow-terracotta',
    borderAccent: 'border-orange-500/40',
    cardHighlight: 'group-hover:border-orange-500/50',
    ringClass: 'ring-orange-500/40',
    bannerBg: 'from-orange-950/40 via-slate-900/80 to-[#0A0A0B]',
    swatch: '#ea580c',
  },
  'amethyst-roman': {
    id: 'amethyst-roman',
    name: 'Imperial Tyrian & Amethyst',
    subtitle: 'Late Antique Royal Dignity & Quartz',
    primary: 'from-purple-500 to-indigo-600',
    primaryHover: 'hover:from-purple-400 hover:to-indigo-500',
    accent: 'text-purple-400',
    badgeBg: 'bg-purple-500/5',
    badgeBorder: 'border-purple-500/30',
    badgeText: 'text-purple-400',
    heroGradient: 'from-purple-500/20 via-indigo-500/10 to-transparent',
    glowClass: 'glow-amethyst',
    borderAccent: 'border-purple-500/40',
    cardHighlight: 'group-hover:border-purple-500/50',
    ringClass: 'ring-purple-500/40',
    bannerBg: 'from-purple-950/40 via-slate-900/80 to-[#0A0A0B]',
    swatch: '#a855f7',
  }
};

interface ThemeContextValue {
  currentTheme: ColorTheme;
  setTheme: (theme: ColorTheme) => void;
  theme: ThemeConfig;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<ColorTheme>('sophisticated-dark');

  useEffect(() => {
    const saved = localStorage.getItem('digsite_color_theme') as ColorTheme;
    if (saved && THEMES[saved]) {
      setCurrentTheme(saved);
    } else {
      setCurrentTheme('sophisticated-dark');
    }
  }, []);

  const handleSetTheme = (theme: ColorTheme) => {
    setCurrentTheme(theme);
    localStorage.setItem('digsite_color_theme', theme);
  };

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        setTheme: handleSetTheme,
        theme: THEMES[currentTheme],
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
