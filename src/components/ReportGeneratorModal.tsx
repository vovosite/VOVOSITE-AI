import React, { useState } from 'react';
import {
  X,
  FileText,
  Download,
  CheckCircle2,
  Sparkles,
  BookOpen,
  Layers,
  Printer,
  FileCode,
  Share2
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import confetti from 'canvas-confetti';

interface ReportGeneratorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReportGeneratorModal: React.FC<ReportGeneratorModalProps> = ({ isOpen, onClose }) => {
  const { theme } = useTheme();
  const [template, setTemplate] = useState('antiquity');
  const [includeHarris, setIncludeHarris] = useState(true);
  const [includeLoci, setIncludeLoci] = useState(true);
  const [includePlates, setIncludePlates] = useState(true);
  const [includeSpectrometry, setIncludeSpectrometry] = useState(true);
  const [isExporting, setIsExporting] = useState(false);
  const [exportComplete, setExportComplete] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
      setExportComplete(true);
      confetti({
        particleCount: 70,
        spread: 70,
        origin: { y: 0.6 }
      });
      setTimeout(() => {
        setExportComplete(false);
        onClose();
      }, 2200);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-in fade-in">
      <div className="relative w-full max-w-3xl rounded-3xl bg-[#0A0A0B] border border-slate-800 shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-emerald-400" />
            <span className="inline-block px-3 py-0.5 text-[10px] font-bold tracking-widest text-emerald-400 border border-emerald-500/30 rounded-full bg-emerald-500/5 uppercase font-mono">
              PUBLICATION STUDIO // LATEX & PDF COMPILER
            </span>
          </div>
          <h3 className="font-archaic text-2xl font-bold text-white">
            Publication-Ready Field Report Studio
          </h3>
          <p className="text-xs text-slate-400 font-light">
            Generate formatted archaeological monographs, catalog plates, and stratigraphic matrices compliant with leading academic journals.
          </p>
        </div>

        {/* Template Selector */}
        <div className="space-y-2">
          <label className="text-xs font-mono text-slate-300">Select Academic Journal Format Standard:</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
            {[
              { id: 'antiquity', name: 'Antiquity Journal (Cambridge Univ Press)', spec: 'Harvard ref, 2-column, Vector plates' },
              { id: 'aja', name: 'American Journal of Archaeology (AJA)', spec: 'AIA style guidelines, Harris chart appendix' },
              { id: 'bar', name: 'British Archaeological Reports (BAR)', spec: 'Monograph format, locus index tables' },
              { id: 'unesco', name: 'UNESCO World Heritage Field Dossier', spec: 'State party preservation compliance' },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setTemplate(t.id)}
                className={`p-3 rounded-2xl border text-left transition-all ${
                  template === t.id
                    ? 'bg-slate-900 border-emerald-400 text-white font-bold ring-1 ring-emerald-400/40 shadow-md'
                    : 'bg-[#0A0A0B] border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <div className="font-bold text-slate-200">{t.name}</div>
                <div className="text-[10px] text-slate-400 mt-0.5">{t.spec}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Modules to include */}
        <div className="space-y-2">
          <label className="text-xs font-mono text-slate-300">Compilation Modules to Include:</label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
            <label className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-2 text-slate-300 cursor-pointer">
              <input
                type="checkbox"
                checked={includeHarris}
                onChange={(e) => setIncludeHarris(e.target.checked)}
                className="accent-emerald-500"
              />
              <span>Harris Matrix Plot</span>
            </label>

            <label className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-2 text-slate-300 cursor-pointer">
              <input
                type="checkbox"
                checked={includeLoci}
                onChange={(e) => setIncludeLoci(e.target.checked)}
                className="accent-emerald-500"
              />
              <span>Locus Sheets Log</span>
            </label>

            <label className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-2 text-slate-300 cursor-pointer">
              <input
                type="checkbox"
                checked={includePlates}
                onChange={(e) => setIncludePlates(e.target.checked)}
                className="accent-emerald-500"
              />
              <span>Photo Plates & Scales</span>
            </label>

            <label className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-2 text-slate-300 cursor-pointer">
              <input
                type="checkbox"
                checked={includeSpectrometry}
                onChange={(e) => setIncludeSpectrometry(e.target.checked)}
                className="accent-emerald-500"
              />
              <span>XRF Spectrometry</span>
            </label>
          </div>
        </div>

        {/* Mini Preview Box */}
        <div className="p-4 rounded-2xl bg-[#0A0A0B] border border-slate-800 space-y-2 font-mono text-xs text-slate-400">
          <div className="flex items-center justify-between text-slate-300 border-b border-slate-800 pb-2">
            <span>PREVIEW // SUMMARY DOSSIER (TRENCH IV SECTOR)</span>
            <span className="text-emerald-400 font-bold">Ready to Compile</span>
          </div>
          <div className="text-[11px] space-y-1 text-slate-400">
            <div>• Title: Stratigraphic and Typological Analysis of Trench IV Sanctuary Horizons</div>
            <div>• Authors: Vovosite.pro Field Station Lead & University Archaeological Consortium</div>
            <div>• Includes: 3 Locus Sheets, 9 Stratigraphic Units, 5 High-Res Diagnostic Catalog Plates</div>
            <div>• Estimated Volume: 42 pages (with automated figure cross-references and bibliography)</div>
          </div>
        </div>

        {exportComplete ? (
          <div className="p-4 rounded-2xl bg-emerald-950/80 border border-emerald-500/50 text-center text-xs font-mono text-emerald-200">
            <CheckCircle2 className="w-6 h-6 text-emerald-400 mx-auto mb-1" />
            <span>Monograph Package Downloaded (.PDF + .TEX + Figures.zip)</span>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-2">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2.5 rounded-full text-xs font-mono text-slate-400 hover:text-slate-200"
            >
              Cancel
            </button>
            <button
              onClick={handleDownload}
              disabled={isExporting}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-[#0A0A0B] bg-emerald-500 hover:bg-emerald-400 shadow-lg shadow-emerald-500/25 transition-all disabled:opacity-50"
            >
              <Download className="w-4 h-4" />
              <span>{isExporting ? 'Compiling LaTeX Package...' : 'Download Complete Publication Package'}</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
