import React, { useState } from 'react';
import {
  Compass,
  Plus,
  Save,
  Trash2,
  FileSpreadsheet,
  CheckCircle2,
  MapPin,
  Calendar,
  Layers,
  Sparkles
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { INITIAL_LOCUS_RECORDS } from '../data/mockData';
import { LocusRecord } from '../types';
import confetti from 'canvas-confetti';

export const FieldLoggerTool: React.FC = () => {
  const { theme } = useTheme();
  const [loci, setLoci] = useState<LocusRecord[]>(INITIAL_LOCUS_RECORDS);
  const [showAddForm, setShowAddForm] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Form State
  const [trenchId, setTrenchId] = useState('Trench IV (West Sector)');
  const [locusNumber, setLocusNumber] = useState(104);
  const [elevationASL, setElevationASL] = useState(139.80);
  const [depthFromSurface, setDepthFromSurface] = useState(2.45);
  const [munsellColor, setMunsellColor] = useState('5YR 2.5/1 (Black Charcoal Matrix)');
  const [soilTexture, setSoilTexture] = useState('Ash Lens with Burned Clay');
  const [inclusionInput, setInclusionInput] = useState('Carbonized wood, Hellenistic sherds, Sling bullets');
  const [directorNotes, setDirectorNotes] = useState('Destruction horizon identified. Strong charcoal concentration with burned mudbrick fragments.');

  const handleAddLocus = (e: React.FormEvent) => {
    e.preventDefault();
    const newLocus: LocusRecord = {
      id: 'loc-' + locusNumber + '-' + Date.now(),
      trenchId,
      locusNumber: Number(locusNumber),
      elevationASL: Number(elevationASL),
      depthFromSurface: Number(depthFromSurface),
      munsellColor,
      soilTexture,
      inclusions: inclusionInput.split(',').map((s) => s.trim()).filter(Boolean),
      openedDate: new Date().toISOString().split('T')[0],
      directorNotes,
      associatedFindsCount: Math.floor(Math.random() * 25) + 5,
    };

    setLoci([newLocus, ...loci]);
    setShowAddForm(false);
    setLocusNumber((prev) => prev + 1);

    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.6 }
    });

    setToastMessage(`Locus ${newLocus.locusNumber} added to Trench register!`);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleDeleteLocus = (id: string) => {
    setLoci(loci.filter((l) => l.id !== id));
  };

  return (
    <section id="field-logger" className="py-20 md:py-28 relative bg-[#0A0A0B] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-block px-3.5 py-1 text-[10px] font-bold tracking-[0.2em] text-emerald-400 border border-emerald-500/30 rounded-full bg-emerald-500/5 uppercase">
            DIGITAL FIELDWORK & LOCUS SHEETS
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white font-archaic">
            Excavation Locus & Field Register
          </h2>

          <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed">
            Record stratigraphic units, elevations (ASL), Munsell soil parameters, and inclusions in real-time. Works fully offline in the trench with auto-sync when online.
          </p>
        </div>

        {/* Workspace Card */}
        <div className="rounded-3xl p-1 bg-gradient-to-b from-slate-700/30 via-slate-800/20 to-[#0A0A0B] border border-slate-800 shadow-2xl">
          <div className="rounded-[22px] bg-[#0A0A0B] p-6 md:p-8 space-y-6">
            
            {/* Action Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-slate-200 font-mono">
                  ACTIVE LOCUS REGISTER ({loci.length} Units)
                </span>
                <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Synced to Basecamp Cloud
                </span>
              </div>

              <button
                onClick={() => setShowAddForm(!showAddForm)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-[#0A0A0B] bg-emerald-500 hover:bg-emerald-400 shadow-lg shadow-emerald-500/20 transition-all"
              >
                <Plus className="w-4 h-4" />
                <span>{showAddForm ? 'Close Form' : 'Log New Stratigraphic Locus'}</span>
              </button>
            </div>

            {toastMessage && (
              <div className="p-3 rounded-2xl bg-emerald-950/80 border border-emerald-500/50 text-xs text-emerald-200 flex items-center gap-2 font-mono">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{toastMessage}</span>
              </div>
            )}

            {/* Modal / Inline Add Form */}
            {showAddForm && (
              <form onSubmit={handleAddLocus} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-700/80 space-y-4 animate-in fade-in">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-xs font-mono font-bold text-emerald-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>NEW STRATIGRAPHIC UNIT (SU) ENTRY FORM</span>
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">Harris Standard Compliant</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-mono">
                  <div className="space-y-1">
                    <label className="text-slate-300">Trench Sector</label>
                    <input
                      type="text"
                      value={trenchId}
                      onChange={(e) => setTrenchId(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-[#0A0A0B] border border-slate-800 text-slate-100 focus:border-emerald-400 focus:outline-none"
                      required
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-slate-300">Locus Number (SU)</label>
                    <input
                      type="number"
                      value={locusNumber}
                      onChange={(e) => setLocusNumber(parseInt(e.target.value))}
                      className="w-full p-2.5 rounded-xl bg-[#0A0A0B] border border-slate-800 text-slate-100 focus:border-emerald-400 focus:outline-none"
                      required
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-slate-300">Elevation ASL (m)</label>
                    <input
                      type="number"
                      step="0.01"
                      value={elevationASL}
                      onChange={(e) => setElevationASL(parseFloat(e.target.value))}
                      className="w-full p-2.5 rounded-xl bg-[#0A0A0B] border border-slate-800 text-slate-100 focus:border-emerald-400 focus:outline-none"
                      required
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-slate-300">Depth from Datum (m)</label>
                    <input
                      type="number"
                      step="0.01"
                      value={depthFromSurface}
                      onChange={(e) => setDepthFromSurface(parseFloat(e.target.value))}
                      className="w-full p-2.5 rounded-xl bg-[#0A0A0B] border border-slate-800 text-slate-100 focus:border-emerald-400 focus:outline-none"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="space-y-1">
                    <label className="text-slate-300">Munsell Soil Color Code</label>
                    <select
                      value={munsellColor}
                      onChange={(e) => setMunsellColor(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-[#0A0A0B] border border-slate-800 text-slate-100 focus:border-emerald-400 focus:outline-none"
                    >
                      <option value="10YR 3/2 (Very Dark Grayish Brown)">10YR 3/2 (Very Dark Grayish Brown)</option>
                      <option value="7.5YR 5/4 (Brown Rubble)">7.5YR 5/4 (Brown Rubble)</option>
                      <option value="10YR 6/4 (Yellowish Brown)">10YR 6/4 (Yellowish Brown)</option>
                      <option value="5YR 2.5/1 (Black Charcoal Matrix)">5YR 2.5/1 (Black Charcoal Matrix)</option>
                      <option value="10YR 5/6 (Yellowish Brown Sandy Silt)">10YR 5/6 (Yellowish Brown Sandy Silt)</option>
                      <option value="7.5YR 4/3 (Dark Brown Clayey Silt)">7.5YR 4/3 (Dark Brown Clayey Silt)</option>
                      <option value="2.5Y 8/2 (White / Pale Marl Bedrock)">2.5Y 8/2 (White / Pale Marl Bedrock)</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-slate-300">Soil Texture & Matrix Type</label>
                    <input
                      type="text"
                      value={soilTexture}
                      onChange={(e) => setSoilTexture(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-[#0A0A0B] border border-slate-800 text-slate-100 focus:border-emerald-400 focus:outline-none"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1 text-xs font-mono">
                  <label className="text-slate-300">Inclusions & Diagnostic Find Indicators (comma separated)</label>
                  <input
                    type="text"
                    value={inclusionInput}
                    onChange={(e) => setInclusionInput(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-[#0A0A0B] border border-slate-800 text-slate-100 focus:border-emerald-400 focus:outline-none"
                  />
                </div>

                <div className="space-y-1 text-xs font-mono">
                  <label className="text-slate-300">Field Director Notes & Phasing Interpretation</label>
                  <textarea
                    rows={2}
                    value={directorNotes}
                    onChange={(e) => setDirectorNotes(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-[#0A0A0B] border border-slate-800 text-slate-100 focus:border-emerald-400 focus:outline-none font-sans"
                  />
                </div>

                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowAddForm(false)}
                    className="px-4 py-2 rounded-full text-xs font-mono text-slate-400 hover:text-slate-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex items-center gap-1.5 px-6 py-2.5 rounded-full text-xs font-bold text-[#0A0A0B] bg-emerald-500 hover:bg-emerald-400 shadow-lg"
                  >
                    <Save className="w-3.5 h-3.5" />
                    <span>Save Locus to Database</span>
                  </button>
                </div>
              </form>
            )}

            {/* List of Loci */}
            <div className="space-y-3">
              {loci.map((loc) => (
                <div
                  key={loc.id}
                  className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-emerald-500/50 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono font-bold text-xs">
                        LOCUS {loc.locusNumber}
                      </span>
                      <span className="text-xs font-bold text-slate-100 font-archaic">
                        {loc.trenchId}
                      </span>
                      <span className="text-[11px] font-mono text-slate-400">
                        • {loc.openedDate}
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed font-light">
                      {loc.directorNotes}
                    </p>

                    <div className="flex flex-wrap items-center gap-1.5 pt-1">
                      {loc.inclusions.map((inc, iIdx) => (
                        <span
                          key={iIdx}
                          className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#0A0A0B] border border-slate-800 text-slate-300"
                        >
                          {inc}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-mono text-right flex-shrink-0">
                    <div className="space-y-0.5">
                      <div className="text-slate-200 font-bold">
                        {loc.elevationASL}m ASL ({loc.depthFromSurface}m depth)
                      </div>
                      <div className="text-[10px] text-emerald-400">
                        {loc.munsellColor.split('(')[0]}
                      </div>
                      <div className="text-[10px] text-teal-400">
                        {loc.associatedFindsCount} Registered Finds
                      </div>
                    </div>

                    <button
                      onClick={() => handleDeleteLocus(loc.id)}
                      className="p-2 rounded-xl text-slate-500 hover:text-red-400 hover:bg-slate-800 transition-colors"
                      title="Delete entry"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
