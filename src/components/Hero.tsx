import React from 'react';
import { Link } from 'react-router-dom';
import {
  CalendarCheck,
  Phone,
  ShieldCheck,
  Star,
  CheckCircle2,
  Droplet,
  Sparkles,
  MapPin,
  Clock
} from 'lucide-react';
import { siteConfig } from '../config/site';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 text-xs font-bold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Certified 6-Stage German Mechanized Sanitization</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12]">
              Clean Water Starts With a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-300 underline decoration-cyan-500/40 underline-offset-8">
                Clean Tank
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Professional water tank cleaning and sanitization services for homes, apartments, societies, offices, hospitals, restaurants, and commercial properties.
            </p>

            {/* Key Value Prop Checkmarks */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1 text-xs text-slate-300 font-medium">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero Chemical Residue</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>UV-C Disinfection Wand</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Trained & Verified Techs</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Sludge Suction Vacuum</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Non-Toxic Sanitizers</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Digital Service Certificate</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                to="/book"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-extrabold text-base shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-98 transition-all duration-200"
              >
                <CalendarCheck className="w-5 h-5" />
                <span>Book Tank Cleaning</span>
              </Link>

              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-slate-800/90 hover:bg-slate-800 text-white font-bold text-base border border-slate-700/80 shadow-md hover:border-cyan-400/50 transition-all duration-200"
              >
                <Phone className="w-5 h-5 text-emerald-400" />
                <span>Call Now: {siteConfig.phone}</span>
              </a>
            </div>

            {/* Social Trust Snippet */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="text-slate-300 font-semibold">
                4.8 / 5 Rating
              </span>
              <span className="text-slate-500">•</span>
              <span>2,400+ Verified Customer Cleanings in MMR</span>
            </div>
          </div>

          {/* Hero Right Visual (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-700/60 group">
                <img
                  src="/images/hero-tank.jpg"
                  alt="Professional technician performing high pressure water tank cleaning and sanitization"
                  className="w-full h-[380px] sm:h-[440px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-left">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400">
                        Technician On Site
                      </span>
                      <h4 className="text-sm font-bold text-white">
                        High-Pressure 180 Bar Sludge Purge
                      </h4>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                      Active
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: 100% Safe */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-slate-900/95 backdrop-blur-md border border-cyan-500/30 p-3 sm:p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-pulse-subtle">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                  <Droplet className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <div className="text-xs font-black text-white">Food-Grade Safe</div>
                  <div className="text-[10px] text-cyan-300 font-medium">WHO & ISO Compliant</div>
                </div>
              </div>

              {/* Floating Badge 2: Same Day Slots */}
              <div className="absolute -bottom-4 -right-4 sm:-right-6 bg-slate-900/95 backdrop-blur-md border border-emerald-500/30 p-3 sm:p-4 rounded-2xl shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-black text-white">Same-Day Slots</div>
                  <div className="text-[10px] text-emerald-300 font-medium">Available across 50+ Areas</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Statistics Bar */}
        <div className="mt-14 pt-8 border-t border-slate-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-800/60">
              <div className="text-3xl sm:text-4xl font-black text-cyan-400 tracking-tight">
                {siteConfig.stats.tanksCleaned}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">
                Tanks Cleaned
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-800/60">
              <div className="text-3xl sm:text-4xl font-black text-cyan-400 tracking-tight">
                {siteConfig.stats.yearsExperience}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">
                Years Experience
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-800/60">
              <div className="text-3xl sm:text-4xl font-black text-cyan-400 tracking-tight">
                {siteConfig.stats.serviceAreas}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">
                Service Areas
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-800/60">
              <div className="text-3xl sm:text-4xl font-black text-amber-400 tracking-tight flex items-center justify-center gap-1">
                <span>{siteConfig.stats.customerRating}</span>
                <Star className="w-6 h-6 fill-amber-400" />
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">
                Customer Rating
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
