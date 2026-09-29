import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  CheckCircle,
  CalendarCheck,
  Phone,
  MessageCircle,
  ArrowRight,
  Sparkles,
  MapPin,
  Clock,
  Droplets,
  Layers,
  Wrench,
  ThumbsUp,
  FileCheck,
  Search
} from 'lucide-react';
import { Hero } from '../components/Hero';
import { ServiceCard } from '../components/ServiceCard';
import { ReviewCard } from '../components/ReviewCard';
import { services } from '../data/services';
import { customerReviews } from '../data/reviews';
import { serviceLocations } from '../data/locations';
import { siteConfig } from '../config/site';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { usePageTitle } from '../utils/seo';

export const Home: React.FC = () => {
  usePageTitle(
    'Water Tank Cleaning Services | AquaClean Services',
    'Professional residential, commercial and industrial water tank cleaning, sanitization and sludge removal services in Mumbai & MMR. Book a service today.'
  );

  // Key featured services for Home Page showcase
  const featuredServices = services.filter(s =>
    [
      'overhead-water-tank-cleaning',
      'underground-water-tank-cleaning',
      'home-water-tank-cleaning',
      'housing-society-tank-cleaning',
      'commercial-tank-cleaning',
      'office-water-tank-cleaning',
      'industrial-water-tank-cleaning',
      'plastic-tank-cleaning',
      'concrete-tank-cleaning',
      'stainless-steel-tank-cleaning',
      'sump-cleaning',
      'water-tank-disinfection',
      'water-tank-sanitization'
    ].includes(s.slug)
  ).slice(0, 8);

  const steps = [
    {
      num: '01',
      title: 'Book Service',
      desc: 'Select your tank type, capacity, and pick a convenient date & 2-hour arrival slot online or over call.'
    },
    {
      num: '02',
      title: 'Site Inspection',
      desc: 'Our uniformed technicians inspect internal sludge depth, tank structural walls, valves, and water clarity.'
    },
    {
      num: '03',
      title: 'Tank Cleaning',
      desc: 'Slurry vacuum suction evacuates sediments, followed by 180-bar German rotary jet scrubbing of all surfaces.'
    },
    {
      num: '04',
      title: 'Disinfection',
      desc: 'Food-grade antibacterial treatment and high-intensity ultraviolet (UV) radiation kill 99.9% of germs.'
    },
    {
      num: '05',
      title: 'Quality Check',
      desc: 'Technicians check TDS/pH levels, photograph the spotless tank interior, and check plumbing outlets.'
    },
    {
      num: '06',
      title: 'Service Completed',
      desc: 'Receive your official hygiene clearance report, before/after photos, and pay with zero advance hassles.'
    }
  ];

  const benefits = [
    {
      title: 'Trained Professionals',
      desc: 'Background-verified, uniformed technicians equipped with safety PPE, harnesses, and confined-space training.'
    },
    {
      title: 'Safe Cleaning Process',
      desc: 'Strict adherence to hygienic protocols preventing pipe blockages or dirty water contamination.'
    },
    {
      title: 'Modern Equipment',
      desc: 'High-pressure 180-bar jet washers, industrial slurry sludge extractors, and UV disinfection wands.'
    },
    {
      title: 'Eco-Friendly Cleaning',
      desc: '100% biodegradable and non-toxic sanitizing formulations that leave zero foul smell or chemical taste.'
    },
    {
      title: 'Proper Disinfection',
      desc: '2-tier antibacterial application and UV-C radiation eliminates hidden fungal spores and amoebic cysts.'
    },
    {
      title: 'Transparent Pricing',
      desc: 'Fixed rate cards based on capacity with no hidden surprises, extra plumbing charges, or surge pricing.'
    },
    {
      title: 'On-Time Service',
      desc: 'Punctual arrival within your selected 2-hour window across Mumbai, Thane, and Navi Mumbai.'
    },
    {
      title: 'No Hidden Charges',
      desc: 'Free post-cleaning water testing and full before-and-after photo inspection report included.'
    }
  ];

  return (
    <div>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Services Section */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Our Comprehensive Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 mb-4 tracking-tight">
              Professional Mechanized Tank Cleaning
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              From compact residential rooftop tanks to multi-million litre industrial reservoirs, our certified cleaning units deliver spotless, bacteria-free water storage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-white hover:bg-slate-100 text-blue-700 font-bold text-sm border border-slate-300 shadow-sm hover:shadow-md transition-all active:scale-98"
            >
              <span>Explore All 25+ Specialized Cleaning Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Why Choose AquaClean */}
      <section className="py-16 sm:py-24 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Trust & Quality Assurance
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 mb-4 tracking-tight">
              Why Choose AquaClean?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We replace unreliable, unhygienic local manual labor with high-tech German equipment, food-safe hygiene standards, and verified technicians.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:shadow-lg hover:border-blue-200 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-100/70 text-blue-700 flex items-center justify-center font-bold mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{b.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. How It Works (6-Stage Process) */}
      <section className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-300 bg-cyan-950/70 px-3 py-1 rounded-full border border-cyan-800">
              Systematic 6-Stage Procedure
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-3 mb-4 tracking-tight">
              How It Works
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Our standardized 6-step mechanized methodology ensures thorough sediment extraction and microbial sterilization with zero water pipeline contamination.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="relative p-6 sm:p-7 rounded-3xl bg-slate-800/80 border border-slate-700/80 shadow-md hover:border-cyan-400/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-mono text-cyan-400">
                      Step {step.num}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-slate-700 text-slate-300 flex items-center justify-center text-xs font-bold">
                      {idx + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-bold text-sm"
            >
              <span>Read in-depth technical details about our cleaning equipment</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Customer Reviews */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                Real Customer Feedback
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 tracking-tight">
                Trusted by 5,000+ Happy Households
              </h2>
            </div>
            <Link
              to="/reviews"
              className="text-xs font-bold text-blue-700 hover:text-blue-800 flex items-center gap-1 self-start md:self-auto"
            >
              <span>View all reviews</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {customerReviews.slice(0, 3).map(rev => (
              <ReviewCard key={rev.id} review={rev} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Areas We Serve */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Local Presence
            </span>
            <h2 className="text-3xl font-black text-slate-900 mt-3 mb-2 tracking-tight">
              Areas We Serve
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Active mobile cleaning vans deployed across Western Suburbs, Central Mumbai, Thane & Navi Mumbai.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto">
            {serviceLocations.map(loc => (
              <Link
                key={loc.id}
                to={`/areas?search=${encodeURIComponent(loc.name)}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-50 hover:bg-blue-50 hover:text-blue-700 text-slate-700 text-xs font-bold border border-slate-200 transition-all hover:scale-105"
              >
                <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>{loc.name}</span>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/areas"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:underline"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Search your exact locality or pincode</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Strong Bottom CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-1.5 bg-white/15 px-3 py-1 rounded-full text-xs font-bold text-white mb-4 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
            <span>Fast Turnaround • Zero Contamination Risk</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4">
            Need Your Water Tank Cleaned?
          </h2>
          <p className="text-blue-100 text-sm sm:text-base max-w-xl mx-auto mb-8 font-normal">
            Book a professional cleaning service today. Enjoy pure, crystal clear water for drinking, cooking, and daily family use.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/book"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-blue-900 font-extrabold text-sm shadow-xl hover:scale-105 active:scale-95 transition-all"
            >
              <CalendarCheck className="w-4 h-4 text-blue-700" />
              <span>Book Now</span>
            </Link>

            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-950/40 hover:bg-blue-950/60 text-white font-bold text-sm border border-white/20 transition-all"
            >
              <Phone className="w-4 h-4 text-emerald-300" />
              <span>Call Us: {siteConfig.phone}</span>
            </a>

            <a
              href={getWhatsAppUrl('Hello AquaClean Services, I would like to book a water tank cleaning service.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-lg shadow-emerald-950/20 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
