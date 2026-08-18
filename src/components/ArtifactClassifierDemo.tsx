import React, { useState } from 'react';
import {
  Sparkles,
  Upload,
  Layers,
  FileSpreadsheet,
  Download,
  CheckCircle2,
  Cpu,
  RefreshCw,
  Eye,
  Info,
  Maximize2,
  Scan,
  Compass,
  ArrowRight
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { ARTIFACT_SAMPLES } from '../data/mockData';
import { ArtifactSample } from '../types';
import confetti from 'canvas-confetti';

interface ArtifactClassifierDemoProps {
  onOpenReportGen: () => void;
}

export const ArtifactClassifierDemo: React.FC<ArtifactClassifierDemoProps> = ({
  onOpenReportGen,
}) => {
  const { requireAuth } = useAuth();
  const [selectedArtifact, setSelectedArtifact] = useState<ArtifactSample>(ARTIFACT_SAMPLES[0]);
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [customImage, setCustomImage] = useState<string | null>(null);
  const [scanStep, setScanStep] = useState<number>(3); // 0=upload, 1=segmenting, 2=spectrometry, 3=complete
  const [imgError, setImgError] = useState<boolean>(false);

  const handleSelectSample = (sample: ArtifactSample) => {
    setSelectedArtifact(sample);
    setCustomImage(null);
    setImgError(false);
    triggerScanAnimation();
  };

  const triggerScanAnimation = () => {
    setIsScanning(true);
    setScanStep(1);
    setTimeout(() => setScanStep(2), 600);
    setTimeout(() => {
      setScanStep(3);
      setIsScanning(false);
      confetti({
        particleCount: 40,
        spread: 50,
        origin: { y: 0.7 }
      });
    }, 1200);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      requireAuth(() => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setCustomImage(reader.result as string);
          setImgError(false);
          triggerScanAnimation();
        };
        reader.readAsDataURL(file);
      }, 'Create a free account or sign in to upload custom field photography.');
    }
  };

  return (
    <section id="ai-classifier" className="py-20 md:py-28 relative bg-[#0A0A0B] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-block px-3.5 py-1 text-[10px] font-bold tracking-[0.2em] text-emerald-400 border border-emerald-500/30 rounded-full bg-emerald-500/5 uppercase font-mono">
            MULTI-MODAL NEURAL INFERENCE
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white font-archaic">
            Interactive AI Artifact Classifier
          </h2>

          <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed">
            Test the 12M+ find computer vision model. Select a diagnostic excavation find or upload your trench photography to analyze typology, XRF metallurgy, Munsell patina, and museum parallels.
          </p>
        </div>

        {/* Outer Workspace Card */}
        <div className="rounded-3xl p-1 bg-gradient-to-b from-slate-700/30 via-slate-800/20 to-[#0A0A0B] border border-slate-800 shadow-2xl">
          <div className="rounded-[22px] bg-[#0A0A0B] overflow-hidden">
            
            {/* Top Toolbar */}
            <div className="p-4 bg-slate-900/40 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="text-slate-400">BENCHMARK SAMPLES:</span>
                <div className="flex flex-wrap gap-1.5">
                  {ARTIFACT_SAMPLES.map((sample) => (
                    <button
                      key={sample.id}
                      onClick={() => handleSelectSample(sample)}
                      className={`px-3 py-1.5 rounded-full text-xs transition-all ${
                        selectedArtifact.id === sample.id && !customImage
                          ? 'bg-emerald-500 text-[#0A0A0B] font-bold shadow-md shadow-emerald-500/20'
                          : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {sample.name.split(' ')[0]} {sample.category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Upload CTA */}
              <div className="flex items-center gap-2">
                <label className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 cursor-pointer transition-all">
                  <Upload className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Upload Field Photo</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>

                <button
                  onClick={triggerScanAnimation}
                  disabled={isScanning}
                  className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 transition-all border border-slate-700"
                >
                  <RefreshCw className={`w-3.5 h-3.5 text-emerald-400 ${isScanning ? 'animate-spin' : ''}`} />
                  <span>Re-Scan Find</span>
                </button>
              </div>
            </div>

            {/* Main Interactive Grid */}
            <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Image Canvas & Laser Scan */}
              <div className="lg:col-span-5 space-y-4">
                <div className="relative rounded-2xl overflow-hidden bg-black border border-slate-800 aspect-[4/3] flex items-center justify-center group shadow-xl">
                  {!imgError ? (
                    <img
                      src={customImage || selectedArtifact.imageUrl}
                      alt={selectedArtifact.name}
                      onError={() => setImgError(true)}
                      className={`w-full h-full object-cover transition-all duration-500 ${
                        isScanning ? 'filter brightness-90 contrast-125' : ''
                      }`}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-slate-950 p-6 text-center">
                      <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-3">
                        <Sparkles className="w-8 h-8" />
                      </div>
                      <span className="text-sm font-archaic text-white font-bold">{selectedArtifact.name}</span>
                      <span className="text-xs font-mono text-emerald-400 mt-1">{selectedArtifact.dating}</span>
                    </div>
                  )}

                  {/* Laser Scan Line */}
                  {isScanning && (
                    <>
                      <div className="absolute inset-0 bg-emerald-500/10 pointer-events-none" />
                      <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-scan shadow-[0_0_20px_#10b981]" />
                    </>
                  )}

                  {/* Neural Point Cloud Overlay */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

                  {/* In-situ GPS & Elevation Tag */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-[#0A0A0B]/85 border border-slate-800 backdrop-blur-md flex items-center justify-between text-[11px] font-mono text-slate-300">
                    <span className="flex items-center gap-1.5">
                      <Compass className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{selectedArtifact.stratigraphicUnit}</span>
                    </span>
                    <span className="text-emerald-400 font-bold">
                      {selectedArtifact.excavationDepth} ASL
                    </span>
                  </div>

                  {/* Confidence Float */}
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#0A0A0B]/90 border border-emerald-500/40 text-emerald-400 text-xs font-mono font-bold shadow-lg flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" />
                    <span>{selectedArtifact.confidence}% Match</span>
                  </div>
                </div>

                {/* Scan Diagnostics Steps */}
                <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-2">
                  <div className="text-xs font-mono text-slate-400 flex items-center justify-between">
                    <span>NEURAL PIPELINE STATUS</span>
                    <span className="text-emerald-400 font-semibold">
                      {isScanning ? 'Computing Tensor Arrays...' : 'Inference Ready (23ms)'}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-[11px] font-mono">
                    <div className={`p-2 rounded-xl border text-center transition-all ${
                      scanStep >= 1 ? 'bg-slate-900 border-emerald-500/40 text-emerald-300' : 'bg-slate-950 border-slate-800 text-slate-500'
                    }`}>
                      1. Contour Vectors
                    </div>
                    <div className={`p-2 rounded-xl border text-center transition-all ${
                      scanStep >= 2 ? 'bg-slate-900 border-emerald-500/40 text-emerald-300' : 'bg-slate-950 border-slate-800 text-slate-500'
                    }`}>
                      2. XRF Spec
                    </div>
                    <div className={`p-2 rounded-xl border text-center transition-all ${
                      scanStep >= 3 ? 'bg-slate-900 border-emerald-500/40 text-emerald-300' : 'bg-slate-950 border-slate-800 text-slate-500'
                    }`}>
                      3. Provenance
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Diagnostic Breakdown */}
              <div className="lg:col-span-7 space-y-5">
                
                {/* Title & Classification Banner */}
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                      {selectedArtifact.category}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      ID: {selectedArtifact.id.toUpperCase()}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-archaic">
                    {selectedArtifact.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
                    {selectedArtifact.description}
                  </p>
                </div>

                {/* Key Field Parameters Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs font-mono">
                  <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800">
                    <div className="text-slate-400 text-[10px]">CHRONOLOGY</div>
                    <div className="font-bold text-slate-100 mt-0.5">{selectedArtifact.dating}</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800">
                    <div className="text-slate-400 text-[10px]">CULTURE / ORIGIN</div>
                    <div className="font-bold text-slate-100 mt-0.5">{selectedArtifact.culture}</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800">
                    <div className="text-slate-400 text-[10px]">MATERIAL TYPE</div>
                    <div className="font-bold text-slate-100 mt-0.5">{selectedArtifact.material}</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800">
                    <div className="text-slate-400 text-[10px]">MUNSELL PATINA</div>
                    <div className="font-bold text-emerald-400 mt-0.5">{selectedArtifact.munsellColor}</div>
                  </div>
                </div>

                {/* XRF Chemical Spectrometry Breakdown */}
                <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-300 font-bold flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                      <span>XRF SPECTROMETRY & ELEMENTAL MATRIX RATIOS</span>
                    </span>
                    <span className="text-slate-400 text-[10px]">Micro-XRF v3.2</span>
                  </div>

                  <div className="space-y-2">
                    {selectedArtifact.chemicalComposition.map((elem, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="flex justify-between text-xs font-mono text-slate-300">
                          <span>{elem.element}</span>
                          <span className="font-bold text-emerald-400">{elem.percentage}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-700"
                            style={{ width: `${elem.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Typological Museum Parallels */}
                <div className="space-y-2">
                  <div className="text-xs font-mono font-bold text-slate-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>MUSEUM ARCHIVE PARALLELS (CONFIRMED MATCHES):</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                    {selectedArtifact.typologicalParallels.map((parallel, pIdx) => (
                      <div
                        key={pIdx}
                        className="p-3 rounded-xl bg-slate-900/40 border border-slate-800 flex items-center justify-between"
                      >
                        <div className="space-y-0.5">
                          <div className="font-bold text-slate-200">{parallel.title}</div>
                          <div className="text-[10px] text-slate-400">
                            {parallel.institution} ({parallel.accessionNo})
                          </div>
                        </div>
                        <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/30">
                          {parallel.similarity}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => {
                      requireAuth(onOpenReportGen, 'Create a free account or sign in to generate and export publication monographs.');
                    }}
                    className="flex-1 py-3 px-4 rounded-full text-xs font-bold font-mono text-[#0A0A0B] bg-emerald-500 hover:bg-emerald-400 shadow-lg shadow-emerald-500/25 transition-all flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    <span>Generate Citation & Monograph Plate</span>
                  </button>

                  <a
                    href="#3d-trench"
                    className="py-3 px-5 rounded-full text-xs font-mono font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-all flex items-center gap-1.5"
                  >
                    <span>View Stratigraphic Profile</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
