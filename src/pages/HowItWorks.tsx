import React from 'react';
import { Link } from 'react-router-dom';
import {
  CalendarCheck,
  Search,
  Droplets,
  Zap,
  CheckCircle2,
  Award,
  ShieldCheck,
  ArrowRight,
  Phone,
  Sparkles,
  Layers,
  Wrench
} from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';
import { siteConfig } from '../config/site';
import { usePageTitle } from '../utils/seo';

export const HowItWorks: React.FC = () => {
  usePageTitle(
    'How It Works | 6-Stage Mechanized Tank Cleaning Process',
    'Discover our 6-stage mechanized cleaning and disinfection methodology: from sludge extraction and rotary pressure jetting to UV sterilization and digital reporting.'
  );

  const workflowSteps = [
    {
      step: '01',
      title: 'Easy Online / Phone Booking',
      subtitle: 'Seamless scheduling in 60 seconds',
      description: 'Choose your tank type, approximate capacity, and pick a convenient 2-hour arrival slot. You immediately receive a confirmed booking ID with technician tracking details. No advance deposit or card info required.',
      icon: CalendarCheck,
      keyAction: 'Instant confirmation with zero advance payments',
      points: [
        'Flexible morning, afternoon, and evening slots',
        'Direct phone helpline support for society management committees',
        'Automatic SMS & WhatsApp booking confirmation'
      ]
    },
    {
      step: '02',
      title: 'Site Arrival & Structural Inspection',
      subtitle: '24-Point safety & sediment diagnosis',
      description: 'Our uniformed technicians arrive with calibrated German machinery. We isolate the incoming and outgoing pipelines, inspect the interior for structural cracks, measure sludge thickness, and test water TDS.',
      icon: Search,
      keyAction: 'Pipeline isolation ensures zero dirty water flows into household taps',
      points: [
        'Visual leak and ball-valve check',
        'Confined space oxygen & gas safety screening',
        'High-resolution before photos captured for your digital report'
      ]
    },
    {
      step: '03',
      title: 'Mechanized Dewatering & Sludge Vacuuming',
      subtitle: 'Extracting heavy mud, silt, and dead contaminants',
      description: 'Using high-capacity submersible slurry pumps, we exhaust the bottom layer of concentrated mud, silt, dead insects, and rust. Industrial wet vacuum extractors lift the stubborn muck from every corner and drain groove.',
      icon: Droplets,
      keyAction: 'Extracts 100% of accumulated sediment without manual bucket mess',
      points: [
        'Fast dewatering minimizes water wastage',
        'Industrial slurry suction handles gravel, clay, and sand',
        'No messy bucket spills on terraces or building corridors'
      ]
    },
    {
      step: '04',
      title: 'High-Pressure Rotary Jet Scrubbing',
      subtitle: '180-Bar rotary jet blasting of all surfaces',
      description: 'We deploy German high-pressure rotary blasters (150–180 Bar) that blast away hardened calcium crust, algae blooms, and biological slime from the walls, ceiling, joints, and floor without etching polymer or concrete linings.',
      icon: Wrench,
      keyAction: 'Mechanical scouring removes years of calcified hard water scaling',
      points: [
        'Zero manual wire brushes that scratch plastic tanks',
        'Deep-pore scouring of concrete RCC tanks',
        'Second vacuum sweep evacuates all remaining dislodged debris'
      ]
    },
    {
      step: '05',
      title: 'Food-Grade Antibacterial & UV-C Disinfection',
      subtitle: 'Eliminating 99.99% of bacteria, cysts, and viruses',
      description: 'We spray certified food-grade, non-toxic antimicrobial sanitizers followed by high-intensity ultraviolet (UV-C) radiation treatment. This destroys dangerous pathogens including E. Coli, Salmonella, and Giardia cysts.',
      icon: Zap,
      keyAction: '100% chlorine-safe, odorless, and food-grade certified',
      points: [
        'Destroys invisible biofilms clinging to microscopic wall pores',
        'UV radiation wand leaves zero residual chemical aftertaste',
        'Safe for immediate baby bathing and kitchen RO use'
      ]
    },
    {
      step: '06',
      title: 'Final Rinse, Quality Audit & Handover',
      subtitle: 'Refill-ready sign-off & digital certification',
      description: 'A final fresh-water rinse leaves the tank pristine and sparkling. Our lead technician runs a calibrated TDS/pH test, captures after-photos, restores the ball valve, and issues your digital hygiene clearance certificate.',
      icon: Award,
      keyAction: 'Tank is 100% refill-ready immediately after service',
      points: [
        'Full digital photo report delivered to your phone/email',
        'Official hygiene certificate for society display boards & audit files',
        'Simple payment via UPI, Card, or Cash only after you are satisfied'
      ]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Top Banner */}
      <div className="bg-slate-900 text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'How It Works' }]} />
          <div className="max-w-3xl mt-4">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950 px-3 py-1 rounded-full border border-cyan-800">
              Scientific Hygiene Protocol
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white mt-3 mb-4 tracking-tight">
              Our 6-Stage Mechanized Tank Cleaning Process
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Discover how our standardized, technology-backed procedure purges toxic mud, scrubs calcified walls, and kills 99.99% of waterborne bacteria with zero chemical contamination.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        {/* Step-by-Step Cards */}
        <div className="space-y-8 mb-16">
          {workflowSteps.map((ws, i) => {
            const IconComp = ws.icon;
            return (
              <div
                key={ws.step}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md relative overflow-hidden group hover:border-blue-300 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Step Number & Icon */}
                  <div className="flex items-center md:flex-col gap-3 shrink-0">
                    <span className="text-3xl sm:text-4xl font-black font-mono text-blue-600 bg-blue-50 px-3.5 py-1 rounded-2xl border border-blue-100">
                      {ws.step}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 text-white flex items-center justify-center shadow-md">
                      <IconComp className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="flex-1 space-y-3">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-cyan-700 block">
                        {ws.subtitle}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-0.5">
                        {ws.title}
                      </h3>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {ws.description}
                    </p>

                    <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200/80 text-xs font-semibold text-emerald-900 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{ws.keyAction}</span>
                    </div>

                    <div className="pt-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Key Quality Standards:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-slate-600">
                        {ws.points.map((pt, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-1.5 bg-slate-50 p-2 rounded-lg border border-slate-100">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5"></div>
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Why Manual Labor Fails vs Mechanized */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl mb-16">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
              The Reality of Tank Hygiene
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2 mb-2">
              Traditional Labor vs. AquaClean Mechanized Cleaning
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Why relying on untrained local manual cleaners puts your family's health at risk.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            <div className="p-5 rounded-2xl bg-rose-50/60 border border-rose-200">
              <h4 className="text-sm font-bold text-rose-900 mb-3 flex items-center gap-1.5">
                <span>❌ Traditional Manual Cleaning</span>
              </h4>
              <ul className="space-y-2.5 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">•</span>
                  <span>Cleaners enter barefoot with unwashed clothes, transferring skin germs inside.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">•</span>
                  <span>Harsh bleaching powders corrode plastic liners and release irritating toxic chlorine fumes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">•</span>
                  <span>Manual brooms scratch plastic tank walls, creating microscopic crevices for algae to bloom faster.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">•</span>
                  <span>No deep slurry extraction—inches of thick bottom sediment remain trapped in drain corners.</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200">
              <h4 className="text-sm font-bold text-emerald-900 mb-3 flex items-center gap-1.5">
                <span>✓ AquaClean Mechanized Protocol</span>
              </h4>
              <ul className="space-y-2.5 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Technicians wear clean sanitized rubber boots, sterile coveralls, and face shields.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>180-bar high pressure jetting washes without damaging polymer coatings.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Food-grade antibacterial solutions + UV-C radiation kill 99.99% of unseen bacteria.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Digital before & after photo documentation with certified TDS and water quality testing.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-blue-700 to-sky-600 rounded-3xl p-8 text-white shadow-xl">
          <h3 className="text-2xl font-black mb-2">Book Your Mechanized Tank Cleaning Today</h3>
          <p className="text-xs sm:text-sm text-blue-100 max-w-md mx-auto mb-6">
            Join thousands of residents in Mumbai, Thane, and Navi Mumbai enjoying purified, certified water storage.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/book"
              className="px-6 py-3 rounded-xl bg-white text-blue-900 font-bold text-xs shadow-md hover:bg-slate-100 transition-all"
            >
              Book Service Online
            </Link>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="px-6 py-3 rounded-xl bg-blue-900/50 border border-white/20 text-white font-bold text-xs hover:bg-blue-900 transition-all"
            >
              Call Specialist: {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
