import React, { useState } from 'react';
import { X, Mail, MessageSquare, Building2, CheckCircle2, Globe, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 }
    });
    setTimeout(() => {
      setSent(false);
      setName('');
      setEmail('');
      setMessage('');
      onClose();
    }, 2500);
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
            <Mail className="w-4 h-4 text-emerald-400" />
            <span className="text-[10px] font-bold tracking-widest text-emerald-400 uppercase font-mono">
              DIRECT CORRESPONDENCE
            </span>
          </div>
          <h3 className="font-archaic text-2xl font-bold text-white">Contact Our Team</h3>
          <p className="text-xs text-slate-400 font-mono">
            Direct routing to: <span className="text-emerald-400 font-semibold">contact@vovosite.pro</span>
          </p>
        </div>

        {sent ? (
          <div className="p-6 rounded-2xl bg-emerald-950/80 border border-emerald-500/50 text-center space-y-2">
            <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
            <h4 className="font-archaic text-lg font-bold text-white">Message Dispatched</h4>
            <p className="text-xs text-emerald-200 font-mono">
              Your inquiry has been sent to <strong>contact@vovosite.pro</strong>. Our field team will reply within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-slate-300">Your Name</label>
                <input
                  type="text"
                  placeholder="Dr. Elena Rostova"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 placeholder-slate-600 focus:border-emerald-400 focus:outline-none"
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="text-slate-300">Email Address</label>
                <input
                  type="email"
                  placeholder="elena@institute.org"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 placeholder-slate-600 focus:border-emerald-400 focus:outline-none"
                  required
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-slate-300">Subject</label>
              <input
                type="text"
                placeholder="Institutional Licensing / Field Support"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 placeholder-slate-600 focus:border-emerald-400 focus:outline-none"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="text-slate-300">Message / Excavation Details</label>
              <textarea
                rows={4}
                placeholder="Describe your research project, field requirements, or inquiry..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 placeholder-slate-600 focus:border-emerald-400 focus:outline-none"
                required
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 rounded-full text-xs font-bold text-[#0A0A0B] bg-emerald-500 hover:bg-emerald-400 shadow-lg shadow-emerald-500/25 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send to contact@vovosite.pro</span>
              </button>
            </div>

            <div className="text-center text-[10px] text-slate-500">
              Official inquiries: contact@vovosite.pro • Domain: vovosite.pro
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
