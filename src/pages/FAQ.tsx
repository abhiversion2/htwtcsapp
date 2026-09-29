import React from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, Phone, MessageCircle, CalendarCheck, ShieldCheck } from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';
import { FAQAccordion } from '../components/FAQAccordion';
import { faqs } from '../data/faqs';
import { siteConfig } from '../config/site';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { usePageTitle } from '../utils/seo';

export const FAQ: React.FC = () => {
  usePageTitle(
    'Frequently Asked Questions (FAQ) | AquaClean Services',
    'Find answers to common questions regarding water tank cleaning frequency, safety, costs, underground sumps, UV disinfection, and housing society protocols.'
  );

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Top Banner */}
      <div className="bg-slate-900 text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'FAQs' }]} />
          <div className="max-w-3xl mt-4">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950 px-3 py-1 rounded-full border border-cyan-800">
              Clear Answers
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white mt-3 mb-4 tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Everything you need to know about our mechanized water tank cleaning procedure, health safety, pricing, and society scheduling.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        {/* Accordion Component */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200/80 mb-12">
          <FAQAccordion faqs={faqs} initialOpenIndex={0} showCategoryFilter={true} />
        </div>

        {/* Still have questions block */}
        <div className="bg-gradient-to-r from-blue-900 via-slate-900 to-blue-950 rounded-3xl p-8 text-white border border-blue-800 shadow-xl text-center">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto mb-3">
            <HelpCircle className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-black mb-2">Still Have Questions?</h3>
          <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto mb-6">
            Our technical support team is available 7 days a week from 8:00 AM to 7:00 PM to assist with special requirements or society meetings.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-900 font-bold text-xs shadow-md hover:bg-slate-100 transition-all"
            >
              <Phone className="w-4 h-4 text-blue-600" />
              <span>Call: {siteConfig.phone}</span>
            </a>
            <a
              href={getWhatsAppUrl('Hi AquaClean, I have a question about water tank cleaning services.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Ask on WhatsApp</span>
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 text-white font-bold text-xs border border-slate-700 hover:bg-slate-700 transition-all"
            >
              <span>Contact Form</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
