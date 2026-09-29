import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calculator, ArrowRight, ShieldCheck, Check, Sparkles, HelpCircle } from 'lucide-react';
import { calculateTankCleaningPrice } from '../utils/pricing';

export const PricingCalculator: React.FC = () => {
  const navigate = useNavigate();

  const [propertyType, setPropertyType] = useState<'residential' | 'commercial' | 'society' | 'industrial'>('residential');
  const [tankType, setTankType] = useState<string>('overhead');
  const [capacityLitres, setCapacityLitres] = useState<number>(1000);
  const [tankCount, setTankCount] = useState<number>(1);
  const [additionalDisinfection, setAdditionalDisinfection] = useState<boolean>(true);

  const priceResult = calculateTankCleaningPrice({
    tankType,
    capacityLitres,
    tankCount,
    propertyType,
    additionalDisinfection
  });

  const presetCapacities = [500, 1000, 2000, 5000, 10000];

  const handleBookNow = () => {
    const query = new URLSearchParams({
      propertyType,
      tankType,
      capacity: capacityLitres.toString(),
      tankCount: tankCount.toString(),
      disinfection: additionalDisinfection ? 'true' : 'false',
      estimatedPrice: priceResult.estimatedPrice.toString()
    });
    navigate(`/book?${query.toString()}`);
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-2xl border border-blue-900/50">
      <div className="flex flex-col lg:flex-row gap-8 items-stretch">
        {/* Left Inputs Section */}
        <div className="flex-1 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Instant Price Estimator
              </h3>
              <p className="text-xs text-slate-300">
                Configure your water tank parameters for a transparent, instant cost estimate
              </p>
            </div>
          </div>

          {/* 1. Property Type */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
              1. Property Category
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'residential', label: 'Residential' },
                { id: 'society', label: 'Housing Society' },
                { id: 'commercial', label: 'Commercial' },
                { id: 'industrial', label: 'Industrial' }
              ].map((item) => (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => setPropertyType(item.id as any)}
                  className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all text-center border ${
                    propertyType === item.id
                      ? 'bg-blue-600 border-blue-400 text-white shadow-lg shadow-blue-600/30'
                      : 'bg-slate-800/80 border-slate-700/80 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* 2. Tank Type */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
              2. Tank Installation Type
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                { id: 'overhead', label: 'Overhead Terrace' },
                { id: 'underground', label: 'Underground Tank' },
                { id: 'sump', label: 'Basement Sump' },
                { id: 'plastic', label: 'Plastic / Sintex' },
                { id: 'concrete', label: 'Concrete / RCC' },
                { id: 'stainless_steel', label: 'Stainless Steel' },
              ].map((item) => (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => setTankType(item.id)}
                  className={`py-2 px-3 rounded-xl text-xs font-semibold transition-all text-center border ${
                    tankType === item.id
                      ? 'bg-cyan-600 border-cyan-400 text-white shadow-md'
                      : 'bg-slate-800/60 border-slate-700/60 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* 3. Tank Capacity */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                3. Tank Capacity (Litres)
              </label>
              <span className="text-sm font-black text-cyan-400">
                {capacityLitres.toLocaleString('en-IN')} Litres
              </span>
            </div>

            {/* Quick capacity buttons */}
            <div className="flex flex-wrap gap-2 mb-3">
              {presetCapacities.map((preset) => (
                <button
                  type="button"
                  key={preset}
                  onClick={() => setCapacityLitres(preset)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all border ${
                    capacityLitres === preset
                      ? 'bg-cyan-500 text-slate-950 border-cyan-400 font-extrabold'
                      : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                  }`}
                >
                  {preset >= 1000 ? `${preset / 1000}k L` : `${preset}L`}
                </button>
              ))}
            </div>

            {/* Range Slider */}
            <input
              type="range"
              min="500"
              max="25000"
              step="500"
              value={capacityLitres}
              onChange={(e) => setCapacityLitres(Number(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>500 L</span>
              <span>5,000 L</span>
              <span>10,000 L</span>
              <span>25,000+ L</span>
            </div>
          </div>

          {/* 4. Number of Tanks & Addon */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                4. Number of Tanks
              </label>
              <div className="flex items-center gap-3 bg-slate-800/80 p-1.5 rounded-xl border border-slate-700 max-w-[200px]">
                <button
                  type="button"
                  onClick={() => setTankCount(Math.max(1, tankCount - 1))}
                  className="w-9 h-9 rounded-lg bg-slate-700 hover:bg-slate-600 text-white font-black text-lg flex items-center justify-center transition-colors"
                >
                  -
                </button>
                <span className="flex-1 text-center font-black text-base text-white">
                  {tankCount} {tankCount > 1 ? 'Tanks' : 'Tank'}
                </span>
                <button
                  type="button"
                  onClick={() => setTankCount(tankCount + 1)}
                  className="w-9 h-9 rounded-lg bg-slate-700 hover:bg-slate-600 text-white font-black text-lg flex items-center justify-center transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Additional Disinfection Add-on */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                5. Special Add-ons
              </label>
              <label className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-800/80 border border-slate-700 cursor-pointer hover:bg-slate-800 transition-colors">
                <input
                  type="checkbox"
                  checked={additionalDisinfection}
                  onChange={(e) => setAdditionalDisinfection(e.target.checked)}
                  className="w-4 h-4 rounded text-cyan-500 focus:ring-cyan-400 border-slate-600 bg-slate-700"
                />
                <div className="text-xs">
                  <span className="font-bold text-white block">UV & Antibacterial Guard</span>
                  <span className="text-slate-400 text-[11px]">+₹249 per tank</span>
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* Right Output Price Card */}
        <div className="lg:w-80 flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-blue-900/90 to-slate-900 border border-blue-500/30 shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-blue-800/60 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-300 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Live Quote
              </span>
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold">
                Transparent
              </span>
            </div>

            <div className="space-y-2.5 text-xs text-slate-300 mb-6">
              <div className="flex justify-between">
                <span>Base Cleaning ({capacityLitres.toLocaleString()}L):</span>
                <span className="font-semibold text-white">₹{priceResult.basePrice}</span>
              </div>
              <div className="flex justify-between">
                <span>Quantity & Scale:</span>
                <span className="font-semibold text-white">× {tankCount} {tankCount > 1 ? 'tanks' : 'tank'}</span>
              </div>
              {additionalDisinfection && (
                <div className="flex justify-between text-cyan-300">
                  <span>UV Sanitization:</span>
                  <span className="font-semibold">+₹{priceResult.addonsCost}</span>
                </div>
              )}
              {tankCount > 1 && (
                <div className="flex justify-between text-emerald-400 font-semibold">
                  <span>Bulk Volume Discount:</span>
                  <span>Applied</span>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-blue-800/60">
              <span className="text-[11px] uppercase tracking-wider text-slate-400 font-medium block">
                Estimated Price
              </span>
              <div className="flex items-baseline gap-1 mt-1 mb-1">
                <span className="text-4xl font-black text-white tracking-tight">
                  ₹{priceResult.estimatedPrice.toLocaleString('en-IN')}
                </span>
                <span className="text-xs text-cyan-300 font-medium">approx.</span>
              </div>
              <p className="text-[10px] text-slate-400 leading-tight">
                *Final price may vary depending on tank condition, accessibility, and actual sludge level.
              </p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-blue-800/40">
            <button
              type="button"
              onClick={handleBookNow}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-sm shadow-lg shadow-cyan-500/25 active:scale-98 transition-all duration-200 cursor-pointer"
            >
              <span>Book This Service</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>
            <p className="text-center text-[10px] text-slate-400 mt-2 flex items-center justify-center gap-1">
              <ShieldCheck className="w-3 h-3 text-emerald-400" />
              Pay after service is 100% completed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
