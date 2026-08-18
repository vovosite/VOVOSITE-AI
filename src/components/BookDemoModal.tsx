import React, { useState } from 'react';
import { X, Building2, Calendar, CheckCircle2, Sparkles, Mail } from 'lucide-react';
import confetti from 'canvas-confetti';

interface BookDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookDemoModal: React.FC<BookDemoModalProps> = ({ isOpen, onClose }) => {
  const [institutionName, setInstitutionName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [projectScope, setProjectScope] = useState('multi-trench');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 }
    });
    setTimeout(() => {
      setSubmitted(false);
      setInstitutionName('');
      setContactName('');
      setEmail('');
      onClose();
    }, 2800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-in fade-in">
      <div className="relative w-full max-w-lg rounded-3xl bg-[#0A0A0B] border border-slate-800 shadow-2xl p-6 sm:p-8 space-y-6">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-emerald-400" />
            <span className="inline-block px-3 py-0.5 text-[10px] font-bold tracking-widest text-emerald-400 border border-emerald-500/30 rounded-full bg-emerald-500/5 uppercase font-mono">
              INSTITUTIONAL EXPEDITION DEMO
            </span>
          </div>
          <h3 className="font-archaic text-2xl font-bold text-white">
            Schedule a Custom Field Demo
          </h3>
          <p className="text-xs text-slate-400 font-light">
            Connect with our archaeological engineering team to configure 3D photogrammetry pipelines and custom catalog fine-tuning for your institution.
          </p>
        </div>

        {submitted ? (
          <div className="p-6 rounded-2xl bg-emerald-950/80 border border-emerald-500/50 text-center space-y-3">
            <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto animate-bounce" />
            <h4 className="font-archaic text-lg font-bold text-white">Demo Request Confirmed</h4>
            <p className="text-xs text-emerald-200 font-mono">
              Your inquiry has been dispatched to <strong>contact@vovosite.pro</strong>.
            </p>
            <p className="text-[11px] text-slate-300">
              A calendar invite and preparation deck have been sent to <strong>{email}</strong>.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
            <div className="space-y-1">
              <label className="text-slate-300">University / Ministry / Institution</label>
              <input
                type="text"
                placeholder="e.g. University of Bologna / Department of Antiquities"
                value={institutionName}
                onChange={(e) => setInstitutionName(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 placeholder-slate-600 focus:border-emerald-400 focus:outline-none"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-slate-300">Principal Contact Name</label>
                <input
                  type="text"
                  placeholder="Prof. Marcus Thorne"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 placeholder-slate-600 focus:border-emerald-400 focus:outline-none"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-slate-300">Institutional Email</label>
                <input
                  type="email"
                  placeholder="director@archaeology.org"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 placeholder-slate-600 focus:border-emerald-400 focus:outline-none"
                  required
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-slate-300">Excavation Project Scale</label>
              <select
                value={projectScope}
                onChange={(e) => setProjectScope(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 focus:border-emerald-400 focus:outline-none"
              >
                <option value="multi-trench">Multi-Trench Seasonal Dig (5–20 excavators)</option>
                <option value="regional-survey">Regional Landscape & Aerial LiDAR Survey</option>
                <option value="museum-catalog">National Museum Catalog Digitization (10k+ finds)</option>
                <option value="field-school">University Field School Training Course</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-full text-xs font-bold text-[#0A0A0B] bg-emerald-500 hover:bg-emerald-400 shadow-lg shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5"
            >
              Confirm Demonstration Request
            </button>

            <div className="text-center text-[10px] text-slate-500">
              Inquiries dispatched to contact@vovosite.pro (vovosite.pro)
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
