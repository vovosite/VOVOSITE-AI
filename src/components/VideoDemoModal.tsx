import React, { useState } from 'react';
import { X, Play, Pause, RotateCcw, Sparkles, CheckCircle2, Layers, Cpu } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface VideoDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoDemoModal: React.FC<VideoDemoModalProps> = ({ isOpen, onClose }) => {
  const { theme } = useTheme();
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeChapter, setActiveChapter] = useState(0);

  if (!isOpen) return null;

  const chapters = [
    { title: '0:00 — Multi-Modal Vision Ingestion', desc: 'Uploading DSLR raw batch & instant edge segmentation' },
    { title: '0:35 — 3D Photogrammetry Slicing', desc: 'Isolating Byzantine vs Roman stratigraphic levels' },
    { title: '1:10 — Harris Matrix Phasing Tree', desc: 'Auto-resolving deposit sequences and cuts' },
    { title: '1:45 — One-Click LaTeX Journal Export', desc: 'Compiling formatted monograph with artifact plates' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-in fade-in">
      <div className="relative w-full max-w-4xl rounded-3xl bg-[#0A0A0B] border border-slate-800 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900/60 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="font-archaic text-sm font-bold text-white">
              Vovosite.pro Platform Walkthrough (2 Min Field Overview)
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Canvas Simulation */}
        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80"
            alt="Excavation site video"
            className="w-full h-full object-cover filter brightness-75"
          />

          {/* Laser scanning lines overlay */}
          <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
          <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-scan shadow-[0_0_20px_#10b981]" />

          {/* Central Overlay HUD */}
          <div className="absolute inset-x-8 top-8 flex items-center justify-between text-xs font-mono text-slate-300">
            <div className="flex items-center gap-2 bg-[#0A0A0B]/90 px-3 py-1.5 rounded-full border border-slate-800">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>LIVE FIELD DEMO: GREECE KNOSSOS EXCAVATION</span>
            </div>
            <div className="bg-[#0A0A0B]/90 px-3 py-1.5 rounded-full border border-slate-800">
              FPS: 60 • SfM Points: 1,480,210
            </div>
          </div>

          {/* Play/Pause Button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="relative z-10 w-16 h-16 rounded-full bg-emerald-500 hover:bg-emerald-400 text-[#0A0A0B] flex items-center justify-center shadow-2xl shadow-emerald-500/30 transition-transform transform hover:scale-110 active:scale-95"
          >
            {isPlaying ? (
              <Pause className="w-7 h-7 fill-[#0A0A0B]" />
            ) : (
              <Play className="w-7 h-7 fill-[#0A0A0B] ml-1" />
            )}
          </button>

          {/* Video bottom timeline */}
          <div className="absolute inset-x-4 bottom-4 p-3 rounded-2xl bg-[#0A0A0B]/90 border border-slate-800 backdrop-blur-md flex items-center gap-4 text-xs font-mono text-slate-300">
            <button onClick={() => setIsPlaying(!isPlaying)} className="text-emerald-400">
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
            <div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 w-3/4 animate-pulse" />
            </div>
            <span>01:34 / 02:15</span>
          </div>
        </div>

        {/* Chapters selection */}
        <div className="p-4 bg-[#0A0A0B] grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
          {chapters.map((ch, idx) => (
            <button
              key={idx}
              onClick={() => setActiveChapter(idx)}
              className={`p-2.5 rounded-2xl text-left border transition-all ${
                activeChapter === idx
                  ? 'bg-slate-800 border-emerald-400 text-white font-bold'
                  : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              <div className="text-[11px] text-emerald-400">{ch.title}</div>
              <div className="text-[10px] text-slate-400 truncate mt-0.5">{ch.desc}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
