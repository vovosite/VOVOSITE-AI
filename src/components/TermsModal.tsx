import React from 'react';
import { X, FileText, CheckCircle2, AlertCircle } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
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
            <FileText className="w-4 h-4 text-emerald-400" />
            <span className="text-[10px] font-bold tracking-widest text-emerald-400 uppercase font-mono">
              SERVICE AGREEMENT
            </span>
          </div>
          <h3 className="font-archaic text-2xl font-bold text-white">Terms of Service</h3>
          <p className="text-xs text-slate-400 font-mono">Governing Platform Usage • vovosite.pro</p>
        </div>

        {/* Content */}
        <div className="overflow-y-auto space-y-5 text-xs text-slate-300 font-light leading-relaxed pr-2">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
            <h4 className="text-sm font-semibold text-white">1. Permitted Research & Excavation Usage</h4>
            <p>
              Vovosite.pro is designed for accredited archaeological research institutes, university field schools, CRM contractors, and museum curators. Users agree not to use the platform for illicit artifact trafficking or metal detecting on protected heritage reserves.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-white">2. AI Vision Classifications & Accuracy</h4>
            <p>
              Neural artifact classifications and elemental spectrometry estimates are research aids provided to accelerate curation. While the system delivers 97.3% precision, final publication citations should be validated by certified finds specialists.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-white">3. Offline-First Sync & Licensure</h4>
            <p>
              Licensed expedition tiers permit unlimited offline SQLite syncing on ruggedized field tablets. Cloud synchronization resumes when network connectivity is established.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-white">4. Governing Law & Support</h4>
            <p>
              Questions regarding service level agreements (SLAs) or enterprise academic licensing should be submitted to <strong className="text-emerald-400 font-mono">contact@vovosite.pro</strong>.
            </p>
          </div>
        </div>

        <div className="pt-5 mt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full text-xs font-bold text-[#0A0A0B] bg-emerald-500 hover:bg-emerald-400 transition-all"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
};
