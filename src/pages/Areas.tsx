import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  Search,
  MapPin,
  CheckCircle2,
  AlertCircle,
  CalendarCheck,
  Phone,
  MessageCircle,
  Building,
  Navigation
} from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';
import { serviceLocations, searchLocation } from '../data/locations';
import { siteConfig } from '../config/site';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { usePageTitle } from '../utils/seo';

export const Areas: React.FC = () => {
  usePageTitle(
    'Areas We Serve in Mumbai, Thane & MMR | AquaClean Services',
    'Check water tank cleaning service availability in your area: Mumbai, Borivali, Andheri, Thane, Vasai, Virar, Nalasopara, Mira Road, Navi Mumbai, and Panvel.'
  );

  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get('search') || '';

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const results = searchLocation(searchQuery);

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Top Banner */}
      <div className="bg-slate-900 text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Areas We Serve' }]} />
          <div className="max-w-3xl mt-4">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950 px-3 py-1 rounded-full border border-cyan-800">
              Coverage Network
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white mt-3 mb-4 tracking-tight">
              Service Areas in Mumbai & MMR
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Our mobile tank cleaning vans are stationed across Western Suburbs, Central Mumbai, Thane City, Mira-Bhayandar, Vasai-Virar, and Navi Mumbai for rapid dispatch.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        {/* Search Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200/90 mb-10 max-w-3xl mx-auto">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            Check Service Availability in Your Area
          </label>
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
            <input
              type="text"
              placeholder="Enter your city, area, locality or 6-digit pincode (e.g. Borivali, Vasai, 400092)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-10 py-3.5 rounded-2xl text-sm sm:text-base border border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-3.5 text-xs font-bold text-slate-400 hover:text-slate-600 p-1"
              >
                ✕
              </button>
            )}
          </div>

          {/* Instant Search Feedback */}
          {searchQuery.trim() !== '' && (
            <div className="mt-4 pt-3 border-t border-slate-100">
              {results.length > 0 ? (
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 px-3.5 py-2 rounded-xl border border-emerald-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Great news! Service is actively available in your area. Same-day & advance slots open.</span>
                </div>
              ) : (
                <div className="flex items-start gap-2 text-xs text-amber-800 bg-amber-50 p-3 rounded-xl border border-amber-200">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">Don't see your specific location?</span>
                    <p className="text-slate-600 mt-0.5">
                      We frequently accommodate nearby societies and properties. Contact our dispatch team at <a href={`tel:${siteConfig.phoneRaw}`} className="font-bold underline text-blue-700">{siteConfig.phone}</a> or on WhatsApp and we will check route availability!
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Areas Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {results.map((loc) => (
            <div
              key={loc.id}
              className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <h3 className="text-lg font-black text-slate-900">{loc.name}</h3>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Active Hub
                  </span>
                </div>

                <p className="text-xs font-semibold text-slate-500 mb-3">{loc.region}</p>

                <div className="mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Popular Covered Neighborhoods:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {loc.popularPlaces.map((place, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 font-medium"
                      >
                        {place}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4 text-[11px] text-slate-500">
                  <span className="font-semibold text-slate-700">Supported Pincodes:</span>{' '}
                  <span>{loc.pincodes.join(', ')}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                <span className="text-[11px] text-emerald-600 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Van Stationed</span>
                </span>
                <Link
                  to={`/book?city=${encodeURIComponent(loc.name)}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 px-3.5 py-2 rounded-xl shadow-sm transition-all"
                >
                  <CalendarCheck className="w-3.5 h-3.5" />
                  <span>Book in {loc.name}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Unlisted Area Help Section */}
        <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-blue-900 shadow-xl text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-black mb-2">Need Service Outside Our Primary List?</h3>
          <p className="text-xs sm:text-sm text-slate-300 mb-6 max-w-lg mx-auto leading-relaxed">
            We regularly undertake large housing society contracts, bungalow complexes, and factory water storage sanitization across the extended MMR and Maharashtra.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-900 font-bold text-xs shadow-md hover:bg-slate-100 transition-all"
            >
              <Phone className="w-4 h-4 text-blue-600" />
              <span>Call Helpline: {siteConfig.phone}</span>
            </a>
            <a
              href={getWhatsAppUrl('Hi AquaClean, I would like to check service availability for my location.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Check on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
