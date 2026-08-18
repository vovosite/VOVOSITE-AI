import React, { useState } from 'react';
import {
  X,
  CheckCircle2,
  Sparkles,
  Send,
  Building2,
  UserCheck,
  ShieldCheck,
  Globe2
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import confetti from 'canvas-confetti';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const { authNotice } = useAuth();
  
  // Request Access Form State
  const [fullName, setFullName] = useState('');
  const [requestEmail, setRequestEmail] = useState('');
  const [institution, setInstitution] = useState('');
  const [role, setRole] = useState('Principal Investigator');
  const [notes, setNotes] = useState('');
  const [requestSubmitted, setRequestSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRequestSubmitted(true);
    confetti({
      particleCount: 65,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleResetAndClose = () => {
    setRequestSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-in fade-in">
      <div className="relative w-full max-w-lg rounded-3xl bg-[#0A0A0B] border border-slate-800 shadow-2xl p-6 sm:p-8 space-y-5">
        
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Notice Banner if triggered by action */}
        {authNotice && !requestSubmitted && (
          <div className="p-3 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 flex items-start gap-2.5 text-xs text-emerald-300">
            <Sparkles className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
            <p className="leading-snug">{authNotice}</p>
          </div>
        )}

        {/* Header */}
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="inline-block px-3 py-0.5 text-[10px] font-bold tracking-widest text-emerald-400 border border-emerald-500/30 rounded-full bg-emerald-500/5 uppercase font-mono">
              EXPEDITION ACCESS
            </span>
          </div>
          <h3 className="text-2xl font-bold text-white tracking-tight">
            Request Platform Access
          </h3>
          <p className="text-xs text-slate-400 font-normal leading-relaxed">
            Submit your excavation and institutional details below. Our team reviews every application and provisions verified credentials tailored to your project.
          </p>
        </div>

        {/* Content View: Form or Submission Confirmation */}
        {requestSubmitted ? (
          <div className="p-6 rounded-2xl bg-emerald-950/70 border border-emerald-500/50 text-center space-y-4">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
            <div className="space-y-1">
              <h4 className="text-xl font-bold text-white">
                Access Request Received
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Thank you, <strong className="text-white">{fullName || 'Researcher'}</strong>. We have registered your application for <strong className="text-emerald-400">{requestEmail}</strong>.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#0A0A0B]/90 border border-emerald-500/30 text-xs text-slate-300 text-left space-y-2">
              <div className="font-semibold text-emerald-400 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                <span>What Happens Next?</span>
              </div>
              <ul className="space-y-1 text-[11px] text-slate-300 list-disc list-inside">
                <li>Our academic review board verifies your research affiliation.</li>
                <li>Your dedicated workspace access keys will be delivered to your inbox.</li>
                <li>Onboarding documentation and API tokens will be provided immediately upon approval.</li>
              </ul>
            </div>

            <div className="pt-2">
              <button
                onClick={handleResetAndClose}
                className="w-full py-3 rounded-full text-xs font-bold text-[#0A0A0B] bg-emerald-500 hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20 uppercase tracking-wider font-mono"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleRequestSubmit} className="space-y-3.5 text-xs">
            <div className="space-y-1">
              <label className="text-slate-300 font-medium">Full Name & Title</label>
              <input
                type="text"
                placeholder="Prof. / Dr. Julian Ross"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 placeholder-slate-600 focus:border-emerald-400 focus:outline-none text-xs"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="text-slate-300 font-medium">Institutional Email Address</label>
              <input
                type="email"
                placeholder="investigator@oxford.ac.uk"
                value={requestEmail}
                onChange={(e) => setRequestEmail(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 placeholder-slate-600 focus:border-emerald-400 focus:outline-none text-xs"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-slate-300 font-medium">University / Department</label>
                <input
                  type="text"
                  placeholder="e.g. Heidelberg Dept. of Archaeology"
                  value={institution}
                  onChange={(e) => setInstitution(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 placeholder-slate-600 focus:border-emerald-400 focus:outline-none text-xs"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-slate-300 font-medium">Field Role</label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 focus:border-emerald-400 focus:outline-none text-xs"
                >
                  <option value="Principal Investigator">Principal Investigator / Director</option>
                  <option value="Trench Supervisor">Trench Supervisor</option>
                  <option value="Finds Specialist">Finds / Ceramic Specialist</option>
                  <option value="Geoarchaeologist">Geoarchaeologist / GIS Lead</option>
                  <option value="Student Researcher">Field School Researcher</option>
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-slate-300 font-medium">Excavation Project / Horizon Notes</label>
              <textarea
                rows={2}
                placeholder="e.g. Knossos Stratigraphic Survey, Late Helladic III Trench C"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 placeholder-slate-600 focus:border-emerald-400 focus:outline-none text-xs"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#0A0A0B] bg-emerald-500 hover:bg-emerald-400 shadow-lg shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Access Request</span>
              </button>
            </div>

            <div className="text-center text-[11px] text-slate-500 pt-1">
              All applications are handled under strict confidentiality protocols.
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
