import React from 'react';
import { X, Users, Globe2, Award, Landmark, Sparkles } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-in fade-in">
      <div className="relative w-full max-w-2xl max-h-[85vh] rounded-3xl bg-[#0A0A0B] border border-slate-800 shadow-2xl p-6 sm:p-8 flex flex-col">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-1 mb-6">
          <div className="flex items-center gap-2">
            <Landmark className="w-4 h-4 text-emerald-400" />
            <span className="text-[10px] font-bold tracking-widest text-emerald-400 uppercase font-mono">
              ABOUT VOVOSITE.PRO
            </span>
          </div>
          <h3 className="font-archaic text-2xl font-bold text-white">About Our Mission</h3>
          <p className="text-xs text-slate-400 font-mono">Pioneering AI Archaeological Software • vovosite.pro</p>
        </div>

        {/* Content */}
        <div className="overflow-y-auto space-y-5 text-xs text-slate-300 font-light leading-relaxed pr-2">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
            <h4 className="text-sm font-semibold text-white">Connecting Past & Future Through AI</h4>
            <p>
              Vovosite.pro was engineered in collaboration with field archaeologists, geoarchaeologists, and museum curators across Europe, the Mediterranean, and North America.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-[#0A0A0B] border border-slate-800 space-y-1 text-center">
              <div className="text-xl font-bold text-emerald-400 font-mono">450+</div>
              <div className="text-[11px] text-slate-400">Excavation Sites</div>
            </div>
            <div className="p-3 rounded-xl bg-[#0A0A0B] border border-slate-800 space-y-1 text-center">
              <div className="text-xl font-bold text-teal-400 font-mono">12.4M+</div>
              <div className="text-[11px] text-slate-400">Museum Records</div>
            </div>
            <div className="p-3 rounded-xl bg-[#0A0A0B] border border-slate-800 space-y-1 text-center">
              <div className="text-xl font-bold text-emerald-400 font-mono">38</div>
              <div className="text-[11px] text-slate-400">Countries Deployed</div>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-white">Our Core Pillars</h4>
            <ul className="list-disc pl-5 space-y-1 text-slate-400">
              <li><strong>Open Science & Standards:</strong> Full compliance with CIDOC-CRM, Dublin Core, and open Linked Data for cultural heritage.</li>
              <li><strong>Sub-Centimeter Photogrammetry:</strong> Real-time point-cloud meshing from low-cost drone footage and iPad LiDAR.</li>
              <li><strong>Academic Velocity:</strong> Turn trench notes into LaTeX camera-ready publication monographs in minutes.</li>
            </ul>
          </div>
        </div>

        <div className="pt-5 mt-4 border-t border-slate-800 flex justify-between items-center">
          <span className="text-[11px] font-mono text-slate-500">Contact: contact@vovosite.pro</span>
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full text-xs font-bold text-[#0A0A0B] bg-emerald-500 hover:bg-emerald-400 transition-all"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
