import React from 'react';
import { X, Award, ShieldCheck, Scale, FileCheck, CheckCircle2 } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EthicsComplianceModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-in fade-in">
      <div className="relative w-full max-w-2xl max-h-[85vh] rounded-3xl bg-[#0A0A0B] border border-slate-800 shadow-2xl p-6 sm:p-8 flex flex-col">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1 mb-6">
          <div className="flex items-center gap-2">
            <Scale className="w-4 h-4 text-emerald-400" />
            <span className="text-[10px] font-bold tracking-widest text-emerald-400 uppercase font-mono">
              STANDARDS & COMPLIANCE
            </span>
          </div>
          <h3 className="font-archaic text-2xl font-bold text-white">Archaeological Ethics & Open Standards</h3>
          <p className="text-xs text-slate-400 font-mono">CIDOC-CRM • UNESCO • ICOMOS Guidelines • vovosite.pro</p>
        </div>

        <div className="overflow-y-auto space-y-5 text-xs text-slate-300 font-light leading-relaxed pr-2">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
            <h4 className="text-sm font-semibold text-white flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> 1970 UNESCO Convention Alignment
            </h4>
            <p>
              Vovosite.pro enforces provenance and accession number verification against the ICOM Red Lists to eliminate illicit antiquities trafficking and protect cultural heritage integrity worldwide.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-white">Ontology & Schema Compatibility</h4>
            <ul className="list-disc pl-5 space-y-1 text-slate-400">
              <li><strong>CIDOC Conceptual Reference Model (CRM):</strong> Full mapping of E22 Man-Made Object and E52 Time-Span entities.</li>
              <li><strong>Munsell Standard Soil Colors:</strong> Rigorous chromatic calibration for geoarchaeology.</li>
              <li><strong>Harris Matrix Topology:</strong> Automated topological sort preventing unresolvable stratigraphic paradoxes.</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-[#0A0A0B] border border-slate-800 space-y-2">
            <h4 className="text-sm font-semibold text-white">Contact Compliance Board</h4>
            <p>
              For ethics review or data governance protocols: <span className="text-emerald-400 font-mono">contact@vovosite.pro</span>
            </p>
          </div>
        </div>

        <div className="pt-5 mt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full text-xs font-bold text-[#0A0A0B] bg-emerald-500 hover:bg-emerald-400 transition-all"
          >
            Acknowledge Compliance
          </button>
        </div>
      </div>
    </div>
  );
};
