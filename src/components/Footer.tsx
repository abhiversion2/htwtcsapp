import React from 'react';
import { Link } from 'react-router-dom';
import { Droplet, Phone, Mail, MapPin, Clock, ShieldCheck, Heart } from 'lucide-react';
import { siteConfig } from '../config/site';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-24 lg:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4 group">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 text-white shadow-lg">
                <Droplet className="w-5 h-5 fill-white stroke-white" />
              </div>
              <div className="flex items-center">
                <span className="text-2xl font-black text-white tracking-tight">AquaClean</span>
                <span className="text-2xl font-black text-cyan-400">.</span>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-sky-950 text-cyan-300 px-2 py-0.5 rounded border border-cyan-800/60 ml-2">
                  Services
                </span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              Mumbai & MMR's most trusted mechanized water tank cleaning and microbiological sanitization service. Serving homes, cooperative societies, corporate offices, and industrial premises with 100% food-grade safety standards.
            </p>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 border border-slate-700 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                ISO 9001:2015 Compliant
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 border border-slate-700 font-medium">
                <Droplet className="w-4 h-4 text-cyan-400" />
                Food-Grade Disinfection
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-cyan-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-cyan-400 transition-colors">All Services</Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-cyan-400 transition-colors">Pricing & Calculator</Link>
              </li>
              <li>
                <Link to="/how-it-works" className="hover:text-cyan-400 transition-colors">6-Stage Process</Link>
              </li>
              <li>
                <Link to="/why-choose-us" className="hover:text-cyan-400 transition-colors">Why Choose Us</Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-cyan-400 transition-colors">Customer Reviews</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-cyan-400 transition-colors">FAQs</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Popular Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Popular Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/services/overhead-water-tank-cleaning" className="hover:text-cyan-400 transition-colors">
                  Overhead Tank Cleaning
                </Link>
              </li>
              <li>
                <Link to="/services/underground-water-tank-cleaning" className="hover:text-cyan-400 transition-colors">
                  Underground Tank Cleaning
                </Link>
              </li>
              <li>
                <Link to="/services/housing-society-tank-cleaning" className="hover:text-cyan-400 transition-colors">
                  Housing Society Packages
                </Link>
              </li>
              <li>
                <Link to="/services/sump-cleaning" className="hover:text-cyan-400 transition-colors">
                  Basement Sump Cleaning
                </Link>
              </li>
              <li>
                <Link to="/services/office-water-tank-cleaning" className="hover:text-cyan-400 transition-colors">
                  Commercial Offices
                </Link>
              </li>
              <li>
                <Link to="/services/water-tank-disinfection" className="hover:text-cyan-400 transition-colors">
                  UV & Chemical Disinfection
                </Link>
              </li>
              <li>
                <Link to="/services/emergency-tank-cleaning" className="hover:text-cyan-400 transition-colors text-amber-300">
                  Emergency 2-Hr Cleaning
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Coverage */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Contact & Coverage
            </h3>
            <div className="space-y-3 text-sm text-slate-300">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="flex items-start gap-2.5 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{siteConfig.phone}</span>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-start gap-2.5 hover:text-white transition-colors break-all"
              >
                <Mail className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{siteConfig.email}</span>
              </a>
              <div className="flex items-start gap-2.5 text-xs text-slate-400">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{siteConfig.businessHours.full}</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-400">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{siteConfig.address.full}</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-800">
              <Link
                to="/areas"
                className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
              >
                <span>View All 50+ Service Areas</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/terms" className="hover:text-slate-300 transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact" className="hover:text-slate-300 transition-colors">
              Support
            </Link>
          </div>
          <p className="flex items-center gap-1 text-[11px]">
            <span>Clean Water • Healthy Living</span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500 inline" />
          </p>
        </div>
      </div>
    </footer>
  );
};
