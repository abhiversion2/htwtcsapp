import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  CheckCircle,
  HelpCircle,
  Sparkles,
  Phone,
  MessageCircle,
  CalendarCheck,
  AlertCircle
} from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';
import { PricingCard } from '../components/PricingCard';
import { PricingCalculator } from '../components/PricingCalculator';
import { pricingTiers, pricingAddOns } from '../data/pricing';
import { faqs } from '../data/faqs';
import { siteConfig } from '../config/site';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { usePageTitle } from '../utils/seo';

export const Pricing: React.FC = () => {
  usePageTitle(
    'Transparent Water Tank Cleaning Pricing & Calculator | AquaClean Services',
    'Calculate your tank cleaning cost instantly. Transparent pricing from ₹499 with zero hidden charges and volume discounts for societies.'
  );

  const pricingFaqs = faqs.filter(f => f.category === 'pricing' || f.category === 'general');

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Top Banner */}
      <div className="bg-slate-900 text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Pricing & Calculator' }]} />
          <div className="max-w-3xl mt-4">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950 px-3 py-1 rounded-full border border-cyan-800">
              Honest & Transparent Rates
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white mt-3 mb-4 tracking-tight">
              Simple, Upfront Pricing With Zero Hidden Fees
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              No guesswork or arbitrary charges. Pick your tank capacity tier below or use our instant interactive calculator for an immediate custom quote.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        {/* Core Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pricingTiers.map(tier => (
            <PricingCard key={tier.id} tier={tier} />
          ))}
        </div>

        {/* Disclaimer Banner */}
        <div className="bg-amber-50 border border-amber-200/80 rounded-2xl p-4 sm:p-5 flex items-start gap-3 mb-16 text-xs text-amber-900 shadow-sm max-w-4xl mx-auto">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold block mb-0.5">Important Transparency Note:</span>
            <p className="text-slate-700 leading-relaxed">
              Final price may vary depending on tank size, condition, accessibility, and number of tanks. Our technician inspects and confirms the exact scope on site prior to starting work. You pay only after 100% satisfactory completion.
            </p>
          </div>
        </div>

        {/* Interactive Pricing Calculator Section */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Interactive Estimator
            </span>
            <h2 className="text-3xl font-black text-slate-900 mt-2 mb-2 tracking-tight">
              Calculate Your Custom Estimate
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Select your specific tank type, volume, and count to preview exact costs with bundle discounts applied.
            </p>
          </div>

          <PricingCalculator />
        </div>

        {/* Optional Add-on Treatments */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-700 bg-cyan-50 px-3 py-1 rounded-full border border-cyan-200">
              Optional Upgrades
            </span>
            <h2 className="text-3xl font-black text-slate-900 mt-2 mb-2 tracking-tight">
              Specialized Add-On Treatments
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Enhance water purity and prolong tank hygiene between scheduled cleanings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingAddOns.map((addon) => (
              <div
                key={addon.id}
                className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Add-On</span>
                    <span className="text-lg font-black text-slate-900">+₹{addon.price}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{addon.name}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">{addon.description}</p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-emerald-600 text-xs font-semibold">
                  <CheckCircle className="w-4 h-4" />
                  <span>Selectable during booking</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Society AMC Discount Box */}
        <div className="bg-gradient-to-r from-blue-900 via-slate-900 to-blue-950 rounded-3xl p-8 sm:p-12 text-white border border-blue-800 shadow-xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-300 bg-cyan-950 px-3 py-1 rounded-full border border-cyan-800">
                Co-operative Housing Societies
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Managing Committee or CHS Society Member?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                We offer tailored society Annual Maintenance Contracts (AMC) covering biannual cleaning, water laboratory testing, society notice drafts, and bulk resident discounts up to 35%.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <Link
                to="/contact?subject=Society%20AMC"
                className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-black text-xs shadow-md transition-all text-center"
              >
                <span>Request Society AMC Proposal</span>
              </Link>
              <a
                href={getWhatsAppUrl('Hello, I am a Society Managing Committee member interested in an AMC proposal.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700 transition-all text-center"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-400 text-emerald-400" />
                <span>Chat with Society Specialist</span>
              </a>
            </div>
          </div>
        </div>

        {/* Pricing FAQs */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">
            Common Pricing Questions
          </h3>
          <div className="space-y-3">
            {pricingFaqs.map(faq => (
              <div key={faq.id} className="bg-white p-5 rounded-2xl border border-slate-200/80 text-xs">
                <h4 className="font-bold text-slate-900 mb-1.5 text-sm">{faq.question}</h4>
                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
