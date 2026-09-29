import React from 'react';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Headphones,
  CheckCircle2,
  CalendarCheck
} from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';
import { ContactForm } from '../components/ContactForm';
import { siteConfig } from '../config/site';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { usePageTitle } from '../utils/seo';

export const Contact: React.FC = () => {
  usePageTitle(
    'Contact Us | AquaClean Services Mumbai & MMR',
    'Get in touch with AquaClean Services for residential, housing society, and commercial water tank cleaning inquiries, urgent appointments, and society AMC proposals.'
  );

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Top Banner */}
      <div className="bg-slate-900 text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Contact Us' }]} />
          <div className="max-w-3xl mt-4">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950 px-3 py-1 rounded-full border border-cyan-800">
              We Are Here to Help
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white mt-3 mb-4 tracking-tight">
              Contact AquaClean Services
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Have questions about tank accessibility, pricing, society presentations, or need an emergency team dispatched? Reach out via phone, WhatsApp, or our quick form.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left Cards: Contact Info & Hours (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Cards */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-md space-y-6">
              <h3 className="text-lg font-bold text-slate-900 pb-3 border-b border-slate-100 flex items-center gap-2">
                <Headphones className="w-5 h-5 text-blue-600" />
                <span>Direct Contact Channels</span>
              </h3>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                    Phone Helpline
                  </span>
                  <a
                    href={`tel:${siteConfig.phoneRaw}`}
                    className="text-base font-black text-slate-900 hover:text-blue-600 transition-colors"
                  >
                    {siteConfig.phone}
                  </a>
                  <p className="text-[11px] text-slate-500 mt-0.5">Direct line to technical coordinator</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-[#25D366] flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                    WhatsApp Chat
                  </span>
                  <a
                    href={getWhatsAppUrl('Hi AquaClean, I would like to inquire about tank cleaning.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-black text-slate-900 hover:text-emerald-600 transition-colors"
                  >
                    {siteConfig.whatsapp}
                  </a>
                  <p className="text-[11px] text-slate-500 mt-0.5">Fast response within 10 minutes</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                    Official Email
                  </span>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-base font-black text-slate-900 hover:text-purple-600 transition-colors break-all"
                  >
                    {siteConfig.email}
                  </a>
                  <p className="text-[11px] text-slate-500 mt-0.5">For formal quotes & society tenders</p>
                </div>
              </div>

              {/* Office Address */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                    Registered Operations Office
                  </span>
                  <p className="text-xs font-bold text-slate-800 leading-snug">
                    {siteConfig.address.full}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Serving entire Mumbai, Thane, Palghar & Navi Mumbai zones
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="bg-gradient-to-br from-slate-900 to-blue-950 rounded-3xl p-6 sm:p-7 text-white border border-blue-900/60 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-cyan-400" />
                <div>
                  <h4 className="text-base font-bold text-white">Operational Working Hours</h4>
                  <p className="text-xs text-slate-300">Open all 7 days of the week</p>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-300 pt-2 border-t border-slate-800">
                <div className="flex justify-between py-1">
                  <span className="font-medium">Monday – Sunday:</span>
                  <span className="font-bold text-white">8:00 AM – 7:00 PM</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="font-medium">Cleaning Slots:</span>
                  <span className="font-bold text-cyan-400">8 AM, 10 AM, 12 PM, 2 PM, 4 PM</span>
                </div>
                <div className="flex justify-between py-1 text-emerald-400">
                  <span className="font-medium">Emergency Contamination:</span>
                  <span className="font-bold">2-Hour Rapid Response</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>

        {/* Google Maps / Service Hub Location Placeholder */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Central Operations Depot
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-2">
                Service Hub & Mobile Fleet Coverage
              </h3>
            </div>
            <span className="text-xs font-semibold text-slate-500 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-emerald-600" />
              <span>Mobile vans dispatched across 50+ localities</span>
            </span>
          </div>

          {/* Map Graphic Container */}
          <div className="relative w-full h-80 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 flex flex-col items-center justify-center p-6 text-center group">
            {/* Visual background map simulation */}
            <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] opacity-70"></div>
            
            <div className="relative z-10 max-w-md p-6 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-slate-200">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-inner">
                <MapPin className="w-6 h-6 animate-bounce" />
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-1">
                AquaClean Central Hub: Borivali West, Mumbai
              </h4>
              <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                Operating mobile van units across Mumbai Western Suburbs, Central Mumbai, Thane City, Mira-Bhayandar, Vasai-Virar, and Navi Mumbai.
              </p>
              <a
                href="https://maps.google.com/?q=Borivali+West+Mumbai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow transition-all"
              >
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
