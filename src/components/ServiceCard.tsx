import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Droplets,
  Home,
  Layers,
  Building,
  Briefcase,
  Utensils,
  Sparkles,
  GraduationCap,
  Activity,
  ShoppingBag,
  Users,
  Building2,
  Boxes,
  HardHat,
  Sun,
  Factory,
  Maximize,
  Wrench,
  Cog,
  CheckCircle2,
  Zap,
  Leaf,
  Trash2,
  Search,
  AlertTriangle,
  Shield,
  Box,
  ArrowRight,
  Clock,
  Check
} from 'lucide-react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

export const ServiceIcon: React.FC<{ icon: string; className?: string }> = ({ icon, className = 'w-6 h-6' }) => {
  switch (icon) {
    case 'ShieldCheck': return <ShieldCheck className={className} />;
    case 'Droplets': return <Droplets className={className} />;
    case 'Home': return <Home className={className} />;
    case 'Layers': return <Layers className={className} />;
    case 'Building': return <Building className={className} />;
    case 'Briefcase': return <Briefcase className={className} />;
    case 'Utensils': return <Utensils className={className} />;
    case 'Sparkles': return <Sparkles className={className} />;
    case 'GraduationCap': return <GraduationCap className={className} />;
    case 'Activity': return <Activity className={className} />;
    case 'ShoppingBag': return <ShoppingBag className={className} />;
    case 'Users': return <Users className={className} />;
    case 'Building2': return <Building2 className={className} />;
    case 'Boxes': return <Boxes className={className} />;
    case 'HardHat': return <HardHat className={className} />;
    case 'Sun': return <Sun className={className} />;
    case 'Factory': return <Factory className={className} />;
    case 'Maximize': return <Maximize className={className} />;
    case 'Wrench': return <Wrench className={className} />;
    case 'Cog': return <Cog className={className} />;
    case 'CheckCircle2': return <CheckCircle2 className={className} />;
    case 'Zap': return <Zap className={className} />;
    case 'Leaf': return <Leaf className={className} />;
    case 'Trash2': return <Trash2 className={className} />;
    case 'Search': return <Search className={className} />;
    case 'AlertTriangle': return <AlertTriangle className={className} />;
    case 'Shield': return <Shield className={className} />;
    case 'Box': return <Box className={className} />;
    default: return <Droplets className={className} />;
  }
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const categoryBadgeColors = {
    residential: 'bg-blue-50 text-blue-700 border-blue-200',
    commercial: 'bg-purple-50 text-purple-700 border-purple-200',
    society: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    industrial: 'bg-amber-50 text-amber-800 border-amber-200',
    specialized: 'bg-cyan-50 text-cyan-800 border-cyan-200',
  };

  return (
    <div className="group relative flex flex-col bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 overflow-hidden">
      {/* Top Banner or popular badge */}
      {service.popular && (
        <div className="absolute top-3 right-3 z-10">
          <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-2.5 py-0.5 rounded-full shadow-sm">
            Popular
          </span>
        </div>
      )}

      {/* Card Header & Icon */}
      <div className="p-6 pb-4 flex-1">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-sky-100 border border-blue-200/60 flex items-center justify-center text-blue-600 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
            <ServiceIcon icon={service.icon} className="w-6 h-6" />
          </div>
          <span className={`text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${categoryBadgeColors[service.category]}`}>
            {service.category}
          </span>
        </div>

        <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2 line-clamp-1">
          <Link to={`/services/${service.slug}`}>
            {service.name}
          </Link>
        </h3>

        <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4">
          {service.description}
        </p>

        {/* Benefits snippet */}
        {service.benefits && service.benefits.length > 0 && (
          <div className="space-y-1.5 mb-4 pt-3 border-t border-slate-100">
            {service.benefits.slice(0, 2).map((b, i) => (
              <div key={i} className="flex items-start gap-1.5 text-xs text-slate-600">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="line-clamp-1">{b}</span>
              </div>
            ))}
          </div>
        )}

        {/* Duration badge */}
        <div className="flex items-center gap-1 text-xs text-slate-500 font-medium">
          <Clock className="w-3.5 h-3.5 text-slate-400" />
          <span>Approx: {service.duration}</span>
        </div>
      </div>

      {/* Card Footer with Price & Actions */}
      <div className="p-6 pt-4 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between gap-3">
        <div>
          <span className="block text-[11px] uppercase tracking-wider text-slate-500 font-medium">
            Starting from
          </span>
          <span className="text-xl font-extrabold text-slate-900">
            ₹{service.startingPrice.toLocaleString('en-IN')}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Link
            to={`/services/${service.slug}`}
            className="text-xs font-bold text-blue-700 hover:text-blue-800 bg-white hover:bg-blue-50 px-3 py-2 rounded-xl border border-blue-200 transition-colors"
          >
            Details
          </Link>
          <Link
            to={`/book?service=${service.slug}`}
            className="inline-flex items-center gap-1 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-xl shadow-sm transition-all active:scale-95"
          >
            <span>Book</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </div>
  );
};
