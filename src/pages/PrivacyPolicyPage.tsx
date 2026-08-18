import React from 'react';
import {
  ShieldCheck,
  ArrowLeft,
  Lock,
  Database,
  FileCheck,
  CheckCircle2,
  Mail,
  Scale
} from 'lucide-react';

interface PrivacyPolicyPageProps {
  onNavigateHome: () => void;
  onNavigateContact: () => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({
  onNavigateHome,
  onNavigateContact,
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
            <span className="text-emerald-400 font-bold">Privacy Policy</span>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <section className="relative pt-16 pb-14 md:pt-20 md:pb-16 overflow-hidden border-b border-slate-800/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-block px-3.5 py-1 text-[10px] font-bold tracking-[0.2em] text-emerald-400 border border-emerald-500/30 rounded-full bg-emerald-500/5 uppercase font-mono">
            DATA PRIVACY & SOVEREIGNTY
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight">
            Privacy Policy & Data Protection Charter
          </h1>

          <p className="text-xs sm:text-sm text-slate-400 font-mono">
            Last Updated: 2026 • Dedicated to Research Confidentiality and Cultural Heritage Protection
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="py-14 md:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-sm text-slate-300 font-normal leading-relaxed">
        
        {/* Core Sovereignty Guarantee Box */}
        <div className="p-6 rounded-2xl bg-emerald-950/30 border border-emerald-500/40 space-y-3">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider font-mono">
            <ShieldCheck className="w-5 h-5" />
            <span>Our Commitment to Academic Data Ownership</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            All excavation records, 3D photogrammetric models, stratigraphic coordinates, and unpublished field notes remain the exclusive property of your institution and expedition. We will never sell, monetize, or use your private field data for unauthorized third-party purposes.
          </p>
        </div>

        {/* Section 1: Scope */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-emerald-400 font-mono text-sm">01.</span>
            Scope and Application
          </h2>
          <p>
            This policy outlines how Vovosite.pro collects, processes, and safeguards information when you access our platform, mobile sync utilities, and institutional APIs. We treat archaeological research data with the highest level of confidentiality and care.
          </p>
        </section>

        {/* Section 2: Data Categories */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-emerald-400 font-mono text-sm">02.</span>
            Information We Process
          </h2>
          <ul className="space-y-2 list-disc list-inside text-slate-400">
            <li><strong className="text-slate-200">Excavation Documentation:</strong> Field photography, stratigraphic measurements, Munsell soil codes, and Harris matrix sequence relationships.</li>
            <li><strong className="text-slate-200">User Identification:</strong> Name, university/organization email, institution name, and designated field roles.</li>
            <li><strong className="text-slate-200">Access Requests:</strong> Information provided during credentials requests to verify academic and institutional affiliations.</li>
          </ul>
        </section>

        {/* Section 3: Security & Encryption */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-emerald-400 font-mono text-sm">03.</span>
            Security and Encryption Standards
          </h2>
          <p>
            All data transmitted between field devices and our servers is secured using modern TLS encryption protocols. Stored data is safeguarded with robust AES-256 encryption. For offline field operations, local databases are cryptographically secured directly on your hardware.
          </p>
        </section>

        {/* Section 4: Sensitive Coordinate Protection */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-emerald-400 font-mono text-sm">04.</span>
            Sensitive Site Location Controls
          </h2>
          <p>
            To protect archaeological heritage from unauthorized access or illicit activity, exact GPS coordinates of unexcavated or vulnerable sites are access-controlled. Project directors have full authority to restrict high-precision location data to authorized team members.
          </p>
        </section>

        {/* Section 5: Data Rights */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-emerald-400 font-mono text-sm">05.</span>
            Your Rights and Data Portability
          </h2>
          <p>
            You retain the right to export your complete excavation data at any time in standard archaeological formats (CIDOC-CRM, Dublin Core, GeoJSON, and CSV). You may also request the deletion of your account and associated project data upon conclusion of your field permit.
          </p>
        </section>

        {/* Section 6: Contact */}
        <section className="space-y-3 p-6 rounded-2xl bg-slate-900/40 border border-slate-800">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Mail className="w-4 h-4 text-emerald-400" />
            Privacy Inquiries
          </h2>
          <p className="text-xs text-slate-400 leading-relaxed">
            If you have questions regarding data governance, export requests, or institutional security compliance, please feel free to reach out to our privacy and support team.
          </p>
          <div className="pt-2">
            <button
              onClick={onNavigateContact}
              className="px-5 py-2 rounded-full text-xs font-mono font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
            >
              Contact Support Team
            </button>
          </div>
        </section>

      </div>

    </div>
  );
};
