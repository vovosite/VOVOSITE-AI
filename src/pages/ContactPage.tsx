import React, { useState } from 'react';
import {
  Mail,
  ArrowLeft,
  Send,
  CheckCircle2,
  Clock,
  MessageSquare,
  Sparkles,
  ShieldCheck,
  Building2,
  HelpCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactPageProps {
  onNavigateHome: () => void;
  onRequestAccess: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigateHome,
  onRequestAccess,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [institution, setInstitution] = useState('');
  const [subject, setSubject] = useState('Institutional Inquiry / Access');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-200">
      
      {/* Top Banner with Breadcrumbs */}
      <div className="border-b border-slate-800/80 bg-slate-950/60 backdrop-blur-xl sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button
            onClick={onNavigateHome}
            className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-emerald-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Excavation Hub</span>
          </button>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span>Home</span>
            <span>/</span>
            <span className="text-emerald-400 font-bold">Contact & Support</span>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <section className="relative pt-16 pb-12 md:pt-20 md:pb-16 overflow-hidden border-b border-slate-800/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-block px-3.5 py-1 text-[10px] font-bold tracking-[0.2em] text-emerald-400 border border-emerald-500/30 rounded-full bg-emerald-500/5 uppercase font-mono">
            GET IN TOUCH
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight">
            Contact & Academic Support
          </h1>

          <p className="text-sm sm:text-base text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed">
            Have questions about integrating Vovosite.pro into your upcoming field season or university curriculum? Our team of archaeologists and technical specialists is here to help.
          </p>
        </div>
      </section>

      {/* Main Grid: Info + Form */}
      <div className="py-14 md:py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl bg-slate-900/40 border border-slate-800 space-y-6">
              <h3 className="text-xl font-bold text-white">
                How We Can Help
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#0A0A0B] border border-slate-800">
                  <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-slate-400 text-[10px] uppercase font-mono">Academic Inquiries</div>
                    <div className="text-slate-200 font-semibold">General & Institutional Support</div>
                    <p className="text-[11px] text-slate-400 leading-snug pt-0.5">
                      Assistance with university licenses, grant applications, and custom excavation requirements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#0A0A0B] border border-slate-800">
                  <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 flex-shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-slate-400 text-[10px] uppercase font-mono">Response Window</div>
                    <div className="text-slate-200 font-semibold">Prompt 24-Hour Turnaround</div>
                    <p className="text-[11px] text-slate-400 leading-snug pt-0.5">
                      Active fieldwork projects receive expedited priority during live excavation months.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#0A0A0B] border border-slate-800">
                  <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 flex-shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-slate-400 text-[10px] uppercase font-mono">Data Sovereignty</div>
                    <div className="text-slate-200 font-semibold">Confidential & Protected</div>
                    <p className="text-[11px] text-slate-400 leading-snug pt-0.5">
                      Your spatial coordinates and unpublished finds remain private to your team.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Access CTA Box */}
            <div className="p-6 rounded-3xl bg-emerald-950/30 border border-emerald-500/40 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider font-mono">
                <Sparkles className="w-4 h-4" />
                <span>Ready to Get Started?</span>
              </div>
              <p className="text-xs text-slate-300 font-normal leading-relaxed">
                Submit an Access Request to provision dedicated credentials for your excavation team and field directors.
              </p>
              <button
                onClick={onRequestAccess}
                className="w-full py-3 rounded-full text-xs font-bold font-mono uppercase tracking-wider text-[#0A0A0B] bg-emerald-500 hover:bg-emerald-400 transition-all shadow-md"
              >
                Request Access
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Dispatch Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800 space-y-6">
              
              <div className="space-y-1">
                <h3 className="text-2xl font-bold text-white">
                  Send Us a Message
                </h3>
                <p className="text-xs text-slate-400 font-normal">
                  Fill out the details below and our team will get back to you shortly.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-950/70 border border-emerald-500/50 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
                  <h4 className="text-xl font-bold text-white">
                    Message Sent Successfully
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Thank you, <strong className="text-white">{name || 'Researcher'}</strong>. Your message has been dispatched to <strong className="text-emerald-400 font-mono">contact@vovosite.pro</strong>. A member of our academic support team will follow up at <strong className="text-emerald-400">{email}</strong>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2 rounded-full text-xs font-mono font-bold bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-slate-300 font-medium">Your Name</label>
                      <input
                        type="text"
                        placeholder="Dr. Julian Ross"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 placeholder-slate-600 focus:border-emerald-400 focus:outline-none text-xs"
                        required
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-slate-300 font-medium">Work / University Email</label>
                      <input
                        type="email"
                        placeholder="j.ross@oxford.ac.uk"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 placeholder-slate-600 focus:border-emerald-400 focus:outline-none text-xs font-mono"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-slate-300 font-medium">University or Organization</label>
                      <input
                        type="text"
                        placeholder="Oxford Archaeological Unit"
                        value={institution}
                        onChange={(e) => setInstitution(e.target.value)}
                        className="w-full p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 placeholder-slate-600 focus:border-emerald-400 focus:outline-none text-xs"
                        required
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-slate-300 font-medium">Inquiry Topic</label>
                      <select
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 focus:border-emerald-400 focus:outline-none text-xs"
                      >
                        <option value="Institutional Inquiry / Access">Access & Credentials Request</option>
                        <option value="Field School Licensing">Field School / Student Licensing</option>
                        <option value="API & Data Integration">API & Data Integration</option>
                        <option value="Museum Archive Donation">Museum Parallel Record Contribution</option>
                        <option value="Technical Support">Technical & Offline Sync Support</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-300 font-medium">Your Message</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your excavation timeline, team size, or questions you have regarding the platform..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 placeholder-slate-600 focus:border-emerald-400 focus:outline-none text-xs"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full text-xs font-bold font-mono uppercase tracking-wider text-[#0A0A0B] bg-emerald-500 hover:bg-emerald-400 shadow-lg shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Message</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>

    </div>
  );
};
