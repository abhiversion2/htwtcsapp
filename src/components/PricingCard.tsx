import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { PricingTier } from '../types';

interface PricingCardProps {
  tier: PricingTier;
}

export const PricingCard: React.FC<PricingCardProps> = ({ tier }) => {
  return (
    <div
      className={`relative flex flex-col rounded-3xl bg-white transition-all duration-300 ${
        tier.popular
          ? 'border-2 border-blue-600 shadow-xl shadow-blue-500/10 -translate-y-1'
          : 'border border-slate-200/80 shadow-md hover:shadow-lg hover:border-slate-300'
      } p-6 sm:p-8`}
    >
      {tier.popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
            <Sparkles className="w-3.5 h-3.5" />
            Most Popular
          </span>
        </div>
      )}

      {/* Tier Heading */}
      <div className="mb-6">
        <h3 className="text-xl font-black text-slate-900 mb-1">{tier.name}</h3>
        <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-3">
          {tier.capacityLabel}
        </p>
        <p className="text-xs text-slate-500 leading-relaxed min-h-[36px]">
          {tier.description}
        </p>
      </div>

      {/* Price Block */}
      <div className="mb-6 p-4 rounded-2xl bg-slate-50 border border-slate-100">
        <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
          Starting from
        </div>
        <div className="flex items-baseline gap-1 mt-1">
          <span className="text-3xl font-black text-slate-900 tracking-tight">
            ₹{tier.startingPrice.toLocaleString('en-IN')}
          </span>
          <span className="text-xs text-slate-500 font-medium">/ tank</span>
        </div>
        <p className="text-[10px] text-slate-400 mt-1 italic">
          *Taxes inclusive, exact price depends on condition & accessibility
        </p>
      </div>

      {/* Feature List */}
      <div className="flex-1 space-y-3 mb-8">
        <div className="text-xs font-bold uppercase tracking-wider text-slate-700">
          What's included:
        </div>
        {tier.features.map((feat, index) => (
          <div key={index} className="flex items-start gap-2.5 text-xs text-slate-600">
            <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
              <Check className="w-3 h-3 stroke-[2.5]" />
            </div>
            <span>{feat}</span>
          </div>
        ))}
      </div>

      {/* Action Button */}
      <Link
        to={`/book?capacity=${tier.maxLitres}`}
        className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm transition-all duration-200 active:scale-98 ${
          tier.popular
            ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/25'
            : 'bg-slate-900 hover:bg-slate-800 text-white'
        }`}
      >
        <span>Book This Tier</span>
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
};
