import React from 'react';
import { ShieldCheck, Clock, CheckCircle2, Phone, CalendarCheck } from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';
import { BookingForm } from '../components/BookingForm';
import { siteConfig } from '../config/site';
import { usePageTitle } from '../utils/seo';

export const Booking: React.FC = () => {
  usePageTitle(
    'Book Water Tank Cleaning Service | AquaClean Services',
    'Schedule your residential, commercial, or housing society water tank cleaning appointment. Instant transparent price preview with zero advance payment.'
  );

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Top Banner */}
      <div className="bg-slate-900 text-white py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Book a Service' }]} />
          <div className="max-w-3xl mt-4">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950 px-3 py-1 rounded-full border border-cyan-800">
              Easy 2-Minute Appointment
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white mt-3 mb-3 tracking-tight">
              Book Your Water Tank Cleaning
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Confirm your convenient time slot. Our certified team arrives with high-pressure machinery and leaves your water storage pure and safe.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        {/* Trust Badges Bar */}
        <div className="bg-white rounded-3xl p-4 sm:p-5 shadow-lg border border-slate-200/80 mb-8 max-w-4xl mx-auto flex flex-wrap items-center justify-around gap-4 text-xs font-semibold text-slate-700">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Zero Advance • Pay After Cleaning</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-blue-600 shrink-0" />
            <span>Punctual 2-Hour Arrival Slot</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
            <span>100% Food-Grade Safe Chemicals</span>
          </div>
        </div>

        {/* The Form */}
        <BookingForm />
      </div>
    </div>
  );
};
