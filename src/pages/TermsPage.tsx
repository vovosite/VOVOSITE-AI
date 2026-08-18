import React from 'react';
import {
  Scale,
  ArrowLeft,
  FileText,
  ShieldCheck,
  Award,
  Landmark,
  CheckCircle2,
  AlertCircle,
  Mail
} from 'lucide-react';

interface TermsPageProps {
  onNavigateHome: () => void;
  onNavigateContact: () => void;
  onRequestAccess: () => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({
  onNavigateHome,
  onNavigateContact,
  onRequestAccess,
}) => {
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
            <span className="text-emerald-400 font-bold">Terms of Service</span>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <section className="relative pt-16 pb-14 md:pt-20 md:pb-16 overflow-hidden border-b border-slate-800/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-block px-3.5 py-1 text-[10px] font-bold tracking-[0.2em] text-emerald-400 border border-emerald-500/30 rounded-full bg-emerald-500/5 uppercase font-mono">
            ACADEMIC TERMS & CONDITIONS
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight">
            Terms of Service & Research Agreement
          </h1>

          <p className="text-xs sm:text-sm text-slate-400 font-mono">
            Last Updated: 2026 • Governing Terms for Institutional & Field Research Access
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="py-14 md:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-sm text-slate-300 font-normal leading-relaxed">
        
        {/* Section 1: Acceptance */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-emerald-400 font-mono text-sm">01.</span>
            Platform Access & Authorization
          </h2>
          <p>
            By using Vovosite.pro or requesting access through our platform, you agree to these Terms of Service. Vovosite.pro provides specialized archaeological workflow software. Access credentials are provisioned following a standard institutional review process to maintain scientific integrity.
          </p>
        </section>

        {/* Section 2: Data Ownership */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-emerald-400 font-mono text-sm">02.</span>
            Intellectual Property & Excavation Rights
          </h2>
          <p>
            You and your affiliated institution retain 100% ownership over all field records, stratigraphic logs, 3D point cloud meshes, artifact photographs, and publication monographs created using our platform. Vovosite.pro claims no rights or title to your archaeological research deliverables.
          </p>
        </section>

        {/* Section 3: Permitted & Prohibited Conduct */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-emerald-400 font-mono text-sm">03.</span>
            Responsible Use & Prohibited Activities
          </h2>
          <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-2 text-xs">
            <div className="text-emerald-400 font-bold uppercase font-mono tracking-wider">Permitted & Expected Use:</div>
            <p className="text-slate-300 leading-relaxed">
              Vovosite.pro is designed exclusively for legitimate academic research, CRM (Cultural Resource Management), university field schools, and museum conservation.
            </p>
            <div className="text-rose-400 font-bold uppercase font-mono tracking-wider pt-2">Prohibited Actions:</div>
            <ul className="space-y-1.5 list-disc list-inside text-slate-300">
              <li>Using platform tools or spatial data to facilitate the illegal trade, looting, or unauthorized extraction of antiquities.</li>
              <li>Unauthorized distribution or sharing of institutional credentials.</li>
              <li>Interfering with system security or attempting unauthorized data extraction.</li>
            </ul>
          </div>
        </section>

        {/* Section 4: Offline Reliability */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-emerald-400 font-mono text-sm">04.</span>
            Service Reliability & Fieldwork Continuity
          </h2>
          <p>
            We understand the realities of remote field conditions. While we strive for high cloud availability, Vovosite.pro includes robust offline-first synchronization to ensure your trench logging continues without interruption, even in areas with zero internet connectivity.
          </p>
        </section>

        {/* Section 5: Data Export */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-emerald-400 font-mono text-sm">05.</span>
            Account Management & Open Data Export
          </h2>
          <p>
            You can export your complete project dataset at any time in open, standard archaeological formats (CIDOC-CRM, LaTeX, GeoJSON, CSV, and 3D OBJ). Upon conclusion of a field permit or project, you may securely archive or delete your project records.
          </p>
        </section>

        {/* Section 6: Contact */}
        <div className="p-6 rounded-2xl bg-[#0A0A0B] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-white">Need Custom Institutional Agreements?</h4>
            <p className="text-xs text-slate-400">
              We provide tailored service level agreements (SLAs) for multi-year field programs.
            </p>
          </div>
          <button
            onClick={onNavigateContact}
            className="px-6 py-2.5 rounded-full text-xs font-bold font-mono uppercase tracking-wider text-[#0A0A0B] bg-emerald-500 hover:bg-emerald-400 transition-all whitespace-nowrap"
          >
            Contact Support
          </button>
        </div>

      </div>

    </div>
  );
};
