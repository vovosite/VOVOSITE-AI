import React from 'react';
import {
  Sparkles,
  ArrowLeft,
  ShieldCheck,
  Globe2,
  Landmark,
  Compass,
  CheckCircle2,
  Award,
  Layers,
  Database,
  Cpu,
  Mail,
  ArrowRight,
  BookOpen,
  Users,
  Building,
  Linkedin,
  GraduationCap
} from 'lucide-react';

interface AboutPageProps {
  onNavigateHome: () => void;
  onRequestAccess: () => void;
  onNavigateContact: () => void;
}

const TEAM_MEMBERS = [
  {
    name: 'Sarah Chen',
    role: 'CEO & Co-Founder',
    degree: 'Technology & Business Leadership',
    specialization: 'Company Vision & Strategy',
    bio: 'Leads the company’s vision and strategy, with a strong focus on innovation, customer needs, and building technology that creates meaningful impact.',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop',
    tags: ['Leadership', 'Strategy', 'Innovation']
  },
  {
    name: 'Elena Rodriguez',
    role: 'VP of Product',
    degree: 'Product Management & Technology',
    specialization: 'Product Strategy & User Experience',
    bio: 'Turns customer feedback and real-world challenges into intuitive product experiences that are simple, useful, and built for long-term growth.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
    tags: ['Product Strategy', 'User Experience', 'Customer Focus']
  },
  {
    name: 'Marcus Johnson',
    role: 'CTO & Co-Founder',
    degree: 'Computer Science & Software Engineering',
    specialization: 'Scalable Systems & AI Solutions',
    bio: 'Drives the technical direction of the platform, specializing in scalable systems, modern software architecture, and practical AI solutions.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    tags: ['Software Architecture', 'AI Solutions', 'Scalable Systems']
  },
  {
    name: 'David Park',
    role: 'Head of Engineering',
    degree: 'Computer Science & Engineering',
    specialization: 'Platform Engineering & Performance',
    bio: 'Leads engineering and platform development, focusing on reliability, performance, security, and technology that scales with our customers.',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
    tags: ['Engineering', 'Performance', 'Security']
  }
];

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigateHome,
  onRequestAccess,
  onNavigateContact,
}) => {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-200">
      
      {/* Top Banner with Breadcrumbs & Back Navigation */}
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
            <span className="text-emerald-400 font-bold">About Vovosite.pro</span>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <section className="relative pt-16 pb-16 md:pt-24 md:pb-20 overflow-hidden border-b border-slate-800/80">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-emerald-500/10 via-teal-500/5 to-transparent blur-[140px] pointer-events-none -z-10" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-block px-3.5 py-1 text-[10px] font-bold tracking-[0.2em] text-emerald-400 border border-emerald-500/30 rounded-full bg-emerald-500/5 uppercase font-mono">
            OUR MISSION & SCIENTIFIC LEADERSHIP
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight">
            Empowering Modern Archaeology with <br />
            <span className="text-emerald-400 font-normal">Vovosite.pro Intelligence</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto">
            Vovosite.pro was created by archaeologists, field directors, and spatial data scientists to bridge the gap between active excavation trenches and rapid, publication-grade academic analysis.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onRequestAccess}
              className="px-7 py-3 rounded-full text-xs font-bold font-mono uppercase tracking-wider text-[#0A0A0B] bg-emerald-500 hover:bg-emerald-400 shadow-lg shadow-emerald-500/25 transition-all"
            >
              Request Access
            </button>
            <button
              onClick={onNavigateContact}
              className="px-7 py-3 rounded-full text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-all"
            >
              Contact Advisory Board
            </button>
          </div>
        </div>
      </section>

      {/* Main Narrative & Facts */}
      <section className="py-16 md:py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
              <Landmark className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">450+ Expeditions</h3>
            <p className="text-xs text-slate-400 font-normal leading-relaxed">
              Field teams across the Mediterranean, Near East, Mesoamerica, and Europe rely on Vovosite.pro to capture stratigraphic records with complete spatial precision.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">12.4M+ Peer Records</h3>
            <p className="text-xs text-slate-400 font-normal leading-relaxed">
              Our reference engine indexes typologies, radiocarbon benchmarks, and verified museum collections to give researchers immediate contextual parallels.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">100% Data Sovereignty</h3>
            <p className="text-xs text-slate-400 font-normal leading-relaxed">
              Every institution maintains strict ownership over its unpublished finds, geospatial point clouds, and sensitive coordinate data.
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div className="p-8 md:p-10 rounded-3xl bg-slate-900/30 border border-slate-800 space-y-6">
          <h2 className="text-2xl sm:text-3xl text-white font-bold">
            Built from the Trench Up
          </h2>
          <div className="space-y-4 text-sm text-slate-300 leading-relaxed font-normal">
            <p>
              Field excavations operate under tight seasons, unpredictable weather, and demanding timelines. Traditional methods often meant spending countless hours transcribing paper field notebooks, manually drawing complex stratigraphy, and cross-referencing heavy print catalogs long after the digging season had concluded.
            </p>
            <p>
              Vovosite.pro changes this dynamic by putting computer vision, instant 3D photogrammetric slicing, and automated Harris matrix phasing directly into the hands of field directors and trench supervisors. By simplifying mechanical documentation, teams can focus on what matters most: understanding the history and context of what they discover.
            </p>
          </div>
        </div>

        {/* MEET THE TEAM SECTION (4 MEMBERS) */}
        <div className="space-y-10">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-block px-3.5 py-1 text-[10px] font-bold tracking-[0.2em] text-emerald-400 border border-emerald-500/30 rounded-full bg-emerald-500/5 uppercase font-mono">
              EXECUTIVE LEADERSHIP
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Meet Our Team
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              A multidisciplinary group of field directors, computational archaeologists, and computer vision engineers dedicated to advancing archaeological science.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {TEAM_MEMBERS.map((member, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all flex flex-col sm:flex-row gap-6 items-start group"
              >
                {/* Photo */}
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden flex-shrink-0 border border-slate-700/80 shadow-md">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                {/* Details */}
                <div className="space-y-2.5 flex-1">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {member.name}
                    </h3>
                    <div className="text-xs text-emerald-400 font-medium">
                      {member.role}
                    </div>
                    <div className="text-[11px] text-slate-400 flex items-center gap-1.5 mt-0.5 font-mono">
                      <GraduationCap className="w-3.5 h-3.5 text-slate-500" />
                      <span>{member.degree}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 font-normal leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {member.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-slate-800 text-slate-300 border border-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technological Standards */}
        <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">
                Institutional & Scientific Architecture
              </h3>
              <p className="text-xs text-slate-400">
                Built to conform with international cultural heritage data standards (CIDOC-CRM and Dublin Core).
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-[#0A0A0B] border border-slate-800 space-y-1.5">
              <div className="text-emerald-400 font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Multi-Modal Vision Engine</span>
              </div>
              <p className="text-slate-400 text-[11px] font-normal leading-relaxed">
                Automated profile recognition, contour segmentation, and patina classification trained on verified archaeological typologies.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#0A0A0B] border border-slate-800 space-y-1.5">
              <div className="text-emerald-400 font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Topological Stratigraphy Engine</span>
              </div>
              <p className="text-slate-400 text-[11px] font-normal leading-relaxed">
                Graph-based algorithms to automatically resolve stratigraphic relationships and phase sequences without manual errors.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#0A0A0B] border border-slate-800 space-y-1.5">
              <div className="text-emerald-400 font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>High-Precision Photogrammetry</span>
              </div>
              <p className="text-slate-400 text-[11px] font-normal leading-relaxed">
                Sub-centimeter 3D mesh slicing and georeferencing with support for RTK GPS ground control markers.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#0A0A0B] border border-slate-800 space-y-1.5">
              <div className="text-emerald-400 font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Offline-First Field Sync</span>
              </div>
              <p className="text-slate-400 text-[11px] font-normal leading-relaxed">
                Seamless local caching and multi-device synchronization built specifically for remote excavation sites with intermittent connectivity.
              </p>
            </div>
          </div>
        </div>

        {/* Global Operations Banner */}
        <div className="p-6 rounded-2xl bg-[#0A0A0B] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-white">Have Questions for Our Team?</h4>
            <p className="text-xs text-slate-400">
              Reach out directly to <span className="text-emerald-400 font-mono">contact@vovosite.pro</span> for university curriculum integrations and field licensing.
            </p>
          </div>
          <button
            onClick={onNavigateContact}
            className="px-6 py-2.5 rounded-full text-xs font-bold font-mono uppercase tracking-wider text-[#0A0A0B] bg-emerald-500 hover:bg-emerald-400 transition-all flex items-center gap-1.5 whitespace-nowrap"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </section>

    </div>
  );
};
