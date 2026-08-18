import React from 'react';
import { X, Shield, Lock, Eye, Database, CheckCircle2 } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
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
            <Shield className="w-4 h-4 text-emerald-400" />
            <span className="text-[10px] font-bold tracking-widest text-emerald-400 uppercase font-mono">
              LEGAL & DATA PROTECTION
            </span>
          </div>
          <h3 className="font-archaic text-2xl font-bold text-white">Privacy Policy</h3>
          <p className="text-xs text-slate-400 font-mono">Last Updated: August 2026 • vovosite.pro</p>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto space-y-5 text-xs text-slate-300 font-light leading-relaxed pr-2">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
            <h4 className="text-sm font-semibold text-white flex items-center gap-2">
              <Lock className="w-4 h-4 text-emerald-400" /> 1. Archaeological Data Sovereignty
            </h4>
            <p>
              At <strong>Vovosite.pro</strong>, excavation GIS coordinates, confidential trench stratigraphy, unpublished artifact photographs, and chemical spectrometry scans remain 100% the intellectual property of the licensed expedition director, host university, and sovereign antiquities ministry.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-white">2. Data We Collect & Store</h4>
            <ul className="list-disc pl-5 space-y-1 text-slate-400">
              <li><strong>Account Credentials:</strong> Academic email, affiliation, and expedition role for access controls.</li>
              <li><strong>Field Registry Uploads:</strong> Harris matrix units, Munsell soil descriptions, 3D LiDAR point clouds, and locus photos.</li>
              <li><strong>AI Analysis Telemetry:</strong> Inference metadata for classification validation against CIDOC-CRM ontology.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-white">3. Security & Encryption Standards</h4>
            <p>
              All stored field data is encrypted with AES-256 at rest and TLS 1.3 in transit. GPS coordinates for vulnerable heritage sites can be geofenced or randomized to protect sensitive loci from illicit looting.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-white">4. Contact & Inquiries</h4>
            <p>
              For data protection officer inquiries or deletion requests, contact our legal team at <strong className="text-emerald-400 font-mono">contact@vovosite.pro</strong>.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-5 mt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full text-xs font-bold text-[#0A0A0B] bg-emerald-500 hover:bg-emerald-400 transition-all"
          >
            I Understand & Accept
          </button>
        </div>
      </div>
    </div>
  );
};
