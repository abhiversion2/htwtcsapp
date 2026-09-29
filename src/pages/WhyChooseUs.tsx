import React from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  Wrench,
  ShieldCheck,
  Award,
  Clock,
  Sparkles,
  CheckCircle2,
  CalendarCheck,
  Phone,
  ThumbsUp,
  FileCheck
} from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';
import { siteConfig } from '../config/site';
import { usePageTitle } from '../utils/seo';

export const WhyChooseUs: React.FC = () => {
  usePageTitle(
    'Why Choose AquaClean Services | Professional Water Tank Cleaning',
    'Discover why 5,000+ homes and housing societies trust AquaClean Services for certified, mechanized water tank sanitization with transparent pricing.'
  );

  const pillars = [
    {
      title: 'Professional Team',
      desc: 'Trained, verified personnel following a systematic, standardized cleaning procedure. Our technicians are insured, background-checked, and certified in confined-space protocols.',
      icon: Users,
      badge: 'Certified & Verified'
    },
    {
      title: 'Modern Equipment',
      desc: 'Professional cleaning and high-pressure equipment including 180-bar German rotary jet blasters, heavy slurry dewatering pumps, and clinical UV-C germicidal sterilization wands.',
      icon: Wrench,
      badge: '180-Bar High Pressure'
    },
    {
      title: 'Safe Chemicals',
      desc: 'Use appropriate cleaning and disinfection products. strictly 100% food-grade, biodegradable, and non-corrosive formulations that leave zero foul smell or chlorine residue in your taps.',
      icon: ShieldCheck,
      badge: '100% Food-Grade Safe'
    },
    {
      title: 'Transparent Pricing',
      desc: 'No unexpected charges, no surge pricing, and no mandatory advance deposits. What you calculate online is what you pay upon 100% satisfactory job completion.',
      icon: Award,
      badge: 'Zero Hidden Costs'
    },
    {
      title: 'Fast Service',
      desc: 'Convenient appointment slots scheduled across morning, noon, and evening windows. Same-day emergency response within 2 hours available for water contamination crises.',
      icon: Clock,
      badge: 'On-Time Guaranteed'
    },
    {
      title: 'Complete Cleaning',
      desc: 'Complete 6-stage lifecycle: mechanical dewatering, sludge vacuum suction, rotary wall scrubbing, antibacterial sanitization, UV radiation, and refill-ready inspection.',
      icon: Sparkles,
      badge: 'Full 6-Stage Sanitization'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Top Banner */}
      <div className="bg-slate-900 text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Why Choose Us' }]} />
          <div className="max-w-3xl mt-4">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950 px-3 py-1 rounded-full border border-cyan-800">
              The AquaClean Advantage
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white mt-3 mb-4 tracking-tight">
              Why 5,000+ Properties Trust AquaClean Services
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We deliver hospital-grade cleanliness, certified food-safe water hygiene, and total customer peace of mind through technology and professionalism.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        {/* Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {pillars.map((pillar, i) => {
            const IconComp = pillar.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-emerald-600">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Verified Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4 Guarantees */}
        <div className="bg-gradient-to-r from-blue-900 via-slate-900 to-blue-950 rounded-3xl p-8 sm:p-12 text-white border border-blue-800 shadow-xl mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-300 bg-cyan-950 px-3 py-1 rounded-full border border-cyan-800">
              Our Service Guarantees
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-2">
              Our 4-Way Customer Protection Promise
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-4 bg-slate-800/60 rounded-2xl border border-slate-700/60">
              <div className="text-2xl font-black text-cyan-400 mb-1">Zero Pay Advance</div>
              <p className="text-xs text-slate-300">You inspect the clean tank first. Pay only when you are 100% satisfied.</p>
            </div>
            <div className="p-4 bg-slate-800/60 rounded-2xl border border-slate-700/60">
              <div className="text-2xl font-black text-cyan-400 mb-1">On-Time Arrival</div>
              <p className="text-xs text-slate-300">Arrival within the scheduled 2-hour window or receive a ₹100 punctuality credit.</p>
            </div>
            <div className="p-4 bg-slate-800/60 rounded-2xl border border-slate-700/60">
              <div className="text-2xl font-black text-cyan-400 mb-1">No Scratches</div>
              <p className="text-xs text-slate-300">Non-abrasive jetting preserves delicate plastic linings and inner polymer seals.</p>
            </div>
            <div className="p-4 bg-slate-800/60 rounded-2xl border border-slate-700/60">
              <div className="text-2xl font-black text-cyan-400 mb-1">Free Re-Clean</div>
              <p className="text-xs text-slate-300">30-day warranty: Any odor or sediment issue within 30 days is re-cleaned for free.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-white rounded-3xl p-8 border border-slate-200 shadow-md">
          <h3 className="text-xl font-bold text-slate-900 mb-2">
            Experience the AquaClean Difference Today
          </h3>
          <p className="text-xs text-slate-500 mb-6">
            Book an appointment online in less than a minute.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/book"
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-all"
            >
              Book Tank Cleaning
            </Link>
            <Link
              to="/pricing"
              className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-all"
            >
              View Transparent Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
