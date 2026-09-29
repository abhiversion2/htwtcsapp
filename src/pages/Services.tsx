import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, ShieldCheck, Sparkles } from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';
import { ServiceCard } from '../components/ServiceCard';
import { services } from '../data/services';
import { ServiceCategory } from '../types';
import { usePageTitle } from '../utils/seo';

export const Services: React.FC = () => {
  usePageTitle(
    'Our Water Tank Cleaning Services | AquaClean Services',
    'Explore complete residential, commercial, industrial, and housing society water tank cleaning, UV disinfection, and sludge suction services.'
  );

  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { id: string; label: string; count: number }[] = [
    { id: 'all', label: 'All Services', count: services.length },
    { id: 'residential', label: 'Residential', count: services.filter(s => s.category === 'residential').length },
    { id: 'commercial', label: 'Commercial', count: services.filter(s => s.category === 'commercial').length },
    { id: 'society', label: 'Housing Societies', count: services.filter(s => s.category === 'society').length },
    { id: 'industrial', label: 'Industrial & Plants', count: services.filter(s => s.category === 'industrial').length },
    { id: 'specialized', label: 'Specialized Treatments', count: services.filter(s => s.category === 'specialized').length },
  ];

  const handleCategoryChange = (catId: string) => {
    setSelectedCategory(catId);
    if (catId === 'all') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: catId });
    }
  };

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch =
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.suitableFor.some(sf => sf.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Top Header Banner */}
      <div className="bg-slate-900 text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Services' }]} />
          <div className="max-w-3xl mt-4">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950 px-3 py-1 rounded-full border border-cyan-800">
              Complete Service Catalog
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white mt-3 mb-4 tracking-tight">
              Professional Mechanized Tank Cleaning Services
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Comprehensive 6-stage mechanized cleaning, sludge dredging, and microbiological sanitization tailored for every tank size, material, and building structure.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        {/* Filter and Search Bar Card */}
        <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-xl border border-slate-200/80 mb-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Category Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  type="button"
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
                    selectedCategory === cat.id
                      ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20'
                      : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`ml-1.5 px-1.5 py-0.2 rounded-full text-[10px] ${
                    selectedCategory === cat.id ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                placeholder="Search services (e.g. overhead, sump)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none bg-slate-50/50"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-slate-600 font-bold"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex justify-between items-center mb-6 px-1">
          <p className="text-xs text-slate-500 font-medium">
            Showing <span className="font-bold text-slate-800">{filteredServices.length}</span> specialized services
            {selectedCategory !== 'all' && <span> in <strong className="capitalize">{selectedCategory}</strong></span>}
          </p>
          {(selectedCategory !== 'all' || searchQuery) && (
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="text-xs font-bold text-blue-600 hover:underline"
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Services Grid */}
        {filteredServices.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 max-w-lg mx-auto">
            <Filter className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-900 mb-1">No services found</h3>
            <p className="text-xs text-slate-500 mb-4">
              We couldn't find any service matching "{searchQuery}". Try searching for terms like "overhead", "sump", or "disinfection".
            </p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="px-5 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs"
            >
              View All Services
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        )}

        {/* Hygiene Guarantee Banner */}
        <div className="mt-16 bg-gradient-to-r from-blue-900 via-slate-900 to-blue-950 rounded-3xl p-8 sm:p-10 text-white border border-blue-800/50 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              Not sure which service fits your tank?
            </span>
            <h3 className="text-2xl font-black text-white">Need a Free On-Site or Phone Assessment?</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Our technical specialists can guide you on the exact tank capacity, inspection requirements, or tailored multi-tank society proposals.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="tel:+919876543210"
              className="px-6 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-black text-xs transition-all shadow-md"
            >
              Call Specialist: +91 98765 43210
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
