import React from 'react';
import {
  Sparkles,
  Layers,
  Boxes,
  WifiOff,
  Database,
  FileCheck2,
  Cpu,
  Scan,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const FeaturesSection: React.FC = () => {
  const { theme } = useTheme();

  const features = [
    {
      icon: Sparkles,
      tag: 'Computer Vision',
      title: 'Multi-Modal Artifact Classifier',
      desc: 'Trained on 12 million peer-reviewed archaeological finds. Identifies ceramic typologies, metallurgy alloys, and lithic flintknapping styles in under 2 seconds with 97.3% accuracy.',
      bullets: ['XRF chemical spectrometry simulation', 'Micro-wear & rim contour vectorization', 'Diagnostic feature segmentation'],
    },
    {
      icon: Layers,
      tag: 'Photogrammetry',
      title: 'Sub-Centimeter 3D Trench Slicing',
      desc: 'Seamlessly convert drone aerial sweeps, DSLR sequences, and LiDAR point clouds into interactive 3D stratigraphic models with real-time elevation contour slicing.',
      bullets: ['Structure-from-Motion (SfM) pipeline', 'RTK GPS Ground Control georeferencing', 'In-situ 3D artifact coordinate tagging'],
    },
    {
      icon: Boxes,
      tag: 'Stratigraphy',
      title: 'Automated Harris Matrix Phasing',
      desc: 'Formulate chronological deposition trees with graph topological algorithms. Automatically detect and resolve circular stratigraphic paradoxes.',
      bullets: ['Mathematical topological sorting', 'Phase horizon auto-grouping', 'Exportable vector SVG/PDF diagrams'],
    },
    {
      icon: WifiOff,
      tag: 'Field Mobility',
      title: 'Offline-First Field Tablet Sync',
      desc: 'Dig in remote deserts, caves, or high mountains without cellular connectivity. Complete locus sheets and photograph finds offline; sync conflicts auto-resolve at basecamp.',
      bullets: ['Local encrypted SQLite storage', 'Conflict-free replicated data (CRDT)', 'Zero loss of field metadata'],
    },
    {
      icon: Database,
      tag: 'Cross-Reference',
      title: '12M+ Global Museum Archives',
      desc: 'Instant access to indexed accession records from the British Museum, Louvre, MET, Cairo Egyptian Museum, and CDLI cuneiform repositories for provenance confirmation.',
      bullets: ['Typological parallel matching', 'CIDOC-CRM ontology mapping', 'Standardized museum accession citations'],
    },
    {
      icon: FileCheck2,
      tag: 'Publishing',
      title: 'Publication-Ready Field Reports',
      desc: 'Generate complete excavation monographs formatted to major journal guidelines (Antiquity, AJA, BAR series) with automated figure plates and locus tables.',
      bullets: ['One-click LaTeX & DOCX export', 'Automated photo plates with scale bars', 'Comprehensive ceramic frequency stats'],
    },
  ];

  return (
    <section id="features" className="py-20 md:py-28 relative bg-[#0A0A0B] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-3.5 py-1 text-[10px] font-bold tracking-[0.2em] text-emerald-400 border border-emerald-500/30 rounded-full bg-emerald-500/5 uppercase">
            END-TO-END ARCHAEOLOGICAL WORKFLOW
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white font-archaic">
            Built for the Rigors of Modern Fieldwork
          </h2>

          <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed">
            From initial surface survey and trench excavation to lab analysis and academic publication, Vovosite.pro powers every step of archaeological discovery.
          </p>
        </div>

        {/* 6 Grid Features matching Sophisticated Dark card style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="relative p-7 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between group hover:shadow-2xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 transition-all">
                    <feat.icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                    {feat.tag}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-archaic text-xl font-bold text-white group-hover:text-emerald-200 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    {feat.desc}
                  </p>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-slate-800/60">
                  {feat.bullets.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-2 text-[11px] text-slate-300 font-mono">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
