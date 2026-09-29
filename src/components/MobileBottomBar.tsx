import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, CalendarCheck } from 'lucide-react';
import { siteConfig } from '../config/site';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const MobileBottomBar: React.FC = () => {
  return (
    <aside
      aria-label="Mobile quick actions"
      className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] px-3 py-2"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call Now */}
        <a
          href={`tel:${siteConfig.phoneRaw}`}
          aria-label="Call AquaClean Services directly"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold active:scale-95 transition-all text-center"
        >
          <Phone className="w-4 h-4 text-emerald-600 mb-0.5" />
          <span className="text-[11px] leading-tight">Call Now</span>
        </a>

        {/* WhatsApp */}
        <a
          href={getWhatsAppUrl('Hello AquaClean, I would like to book a water tank cleaning service.')}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#128C7E] font-bold active:scale-95 transition-all text-center border border-[#25D366]/25"
        >
          <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366] mb-0.5" />
          <span className="text-[11px] leading-tight">WhatsApp</span>
        </a>

        {/* Book Now */}
        <Link
          to="/book"
          aria-label="Book tank cleaning appointment"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-r from-blue-600 to-sky-600 text-white font-bold active:scale-95 shadow-md shadow-blue-500/25 transition-all text-center"
        >
          <CalendarCheck className="w-4 h-4 mb-0.5" />
          <span className="text-[11px] leading-tight">Book Now</span>
        </Link>
      </div>
    </aside>
  );
};
