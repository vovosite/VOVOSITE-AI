import React, { useState } from 'react';
import {
  Check,
  Sparkles,
  HelpCircle,
  ShieldCheck,
  Zap,
  Building2,
  GraduationCap
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { PRICING_PLANS } from '../data/mockData';

interface PricingSectionProps {
  onOpenAuth: () => void;
  onOpenBookDemo: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  onOpenAuth,
  onOpenBookDemo,
}) => {
  const { theme } = useTheme();
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="py-20 md:py-28 relative bg-[#0A0A0B] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-block px-3.5 py-1 text-[10px] font-bold tracking-[0.2em] text-emerald-400 border border-emerald-500/30 rounded-full bg-emerald-500/5 uppercase">
            TRANSPARENT ACADEMIC & FIELD PRICING
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white font-archaic">
            Flexible Plans for Every Excavation Season
          </h2>

          <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed">
            Whether you are a PhD candidate analyzing ceramic sherds or a multi-year national expedition mapping ancient cityscapes, Vovosite.pro scales with your field goals.
          </p>

          {/* Billing Cycle Switcher */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <span
              className={`text-xs font-mono font-medium ${
                !isAnnual ? 'text-white' : 'text-slate-400'
              }`}
            >
              Monthly Billing
            </span>

            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-14 h-7 rounded-full bg-slate-800 p-1 transition-colors border border-slate-700 focus:outline-none"
            >
              <div
                className={`w-5 h-5 rounded-full bg-emerald-500 transition-transform ${
                  isAnnual ? 'translate-x-7' : 'translate-x-0'
                }`}
              />
            </button>

            <span
              className={`text-xs font-mono font-medium flex items-center gap-1.5 ${
                isAnnual ? 'text-white' : 'text-slate-400'
              }`}
            >
              <span>Annual Expedition (Save 20%)</span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                2 MONTHS FREE
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? 'bg-slate-900/70 border-2 border-emerald-500/80 shadow-2xl shadow-emerald-500/10 scale-105 z-10'
                    : 'bg-slate-900/40 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-emerald-500 text-[#0A0A0B] text-[11px] font-mono font-extrabold uppercase tracking-wider shadow-lg shadow-emerald-500/25">
                    {plan.badge}
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="font-archaic text-2xl font-bold text-white">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1.5 font-light leading-relaxed">
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-4xl sm:text-5xl font-black font-archaic text-white">
                      ${price}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {isAnnual ? '/ month (billed annually)' : '/ month'}
                    </span>
                  </div>

                  {/* Limits summary banner */}
                  <div className="p-3.5 rounded-2xl bg-[#0A0A0B] border border-slate-800 space-y-1.5 text-xs font-mono">
                    <div className="flex justify-between text-slate-400">
                      <span>AI Scans:</span>
                      <span className="text-slate-200 font-bold">{plan.limits.scansPerMonth}</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Resolution:</span>
                      <span className="text-slate-200 font-bold">{plan.limits.resolution}</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Team Capacity:</span>
                      <span className="text-slate-200 font-bold">{plan.limits.teamMembers}</span>
                    </div>
                  </div>

                  {/* Feature check list */}
                  <div className="space-y-3 pt-2">
                    <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      Included Capabilities:
                    </div>
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <div className="p-0.5 rounded-full bg-emerald-500/20 text-emerald-400 mt-0.5 flex-shrink-0">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="font-light leading-tight">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="pt-8">
                  <button
                    onClick={() => {
                      if (plan.id === 'institution-enterprise') {
                        onOpenBookDemo();
                      } else {
                        onOpenAuth();
                      }
                    }}
                    className={`w-full py-3.5 rounded-full text-xs font-bold font-mono uppercase tracking-wider transition-all shadow-lg ${
                      plan.popular
                        ? 'text-[#0A0A0B] bg-emerald-500 hover:bg-emerald-400 shadow-emerald-500/25 transform hover:-translate-y-0.5'
                        : 'text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700'
                    }`}
                  >
                    {plan.ctaText}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Institutional Grant & Educational Discount Note */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900/40 border border-slate-800 text-center max-w-2xl mx-auto space-y-2">
          <div className="flex items-center justify-center gap-2 text-xs font-mono font-bold text-emerald-400">
            <GraduationCap className="w-4 h-4" />
            <span>50% ACADEMIC GRANT DISCOUNT FOR UNIVERSITY FIELD SCHOOLS</span>
          </div>
          <p className="text-xs text-slate-400 font-light leading-relaxed">
            Registered university field schools and student excavations receive 50% subsidized licenses upon verifying academic institutional status.
          </p>
        </div>

      </div>
    </section>
  );
};
