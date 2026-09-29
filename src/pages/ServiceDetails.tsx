import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  CalendarCheck,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Wrench,
  AlertTriangle,
  ArrowRight,
  Phone,
  MessageCircle,
  HelpCircle,
  Sparkles,
  Droplet
} from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';
import { ServiceIcon } from '../components/ServiceCard';
import { ReviewCard } from '../components/ReviewCard';
import { getServiceBySlug, services } from '../data/services';
import { customerReviews } from '../data/reviews';
import { faqs } from '../data/faqs';
import { siteConfig } from '../config/site';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { usePageTitle } from '../utils/seo';

export const ServiceDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug || '');

  usePageTitle(
    service ? `${service.name} | AquaClean Services` : 'Service Not Found',
    service ? service.description : 'Professional water tank cleaning services'
  );

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Related services in the same category
  const relatedServices = services
    .filter(s => s.category === service.category && s.id !== service.id)
    .slice(0, 3);

  // Relevant FAQs
  const relevantFaqs = faqs.slice(0, 4);

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Hero Section */}
      <div className="bg-slate-900 text-white py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: 'Services', path: '/services' },
              { label: service.name }
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mt-6">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950 px-3 py-1 rounded-full border border-cyan-800">
                  {service.category} Category
                </span>
                <span className="text-xs font-semibold text-slate-300 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Duration: {service.duration}</span>
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                {service.name}
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                {service.longDescription || service.description}
              </p>

              {/* Price and CTA box */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                    Service Starting At
                  </span>
                  <span className="text-3xl font-black text-white">
                    ₹{service.startingPrice.toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  <Link
                    to={`/book?service=${service.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-lg shadow-blue-500/25 active:scale-98 transition-all"
                  >
                    <CalendarCheck className="w-4 h-4" />
                    <span>Book This Service</span>
                  </Link>

                  <a
                    href={`tel:${siteConfig.phoneRaw}`}
                    className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 transition-all"
                  >
                    <Phone className="w-4 h-4 text-emerald-400" />
                    <span>Call Enquiry</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-700/60">
                <img
                  src={service.image || '/images/hero-tank.jpg'}
                  alt={service.name}
                  className="w-full h-80 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700 text-xs text-slate-200 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% Non-Toxic & Food-Grade Sanitization Standard</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content (2 cols) */}
          <div className="lg:col-span-2 space-y-10">
            {/* Suitable For */}
            {service.suitableFor && service.suitableFor.length > 0 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-blue-600" />
                  <span>Recommended & Suitable For</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {service.suitableFor.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 rounded-xl bg-blue-50 text-blue-800 text-xs font-semibold border border-blue-100"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Benefits */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                <span>Key Benefits of This Service</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.benefits.map((b, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50/70 border border-slate-100">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span className="text-xs text-slate-700 font-medium leading-relaxed">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Complete Cleaning Process */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Our Standardized Cleaning Process
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Executed by trained technicians in accordance with municipal public health hygiene standards.
              </p>

              <div className="space-y-4">
                {service.process.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="w-7 h-7 rounded-xl bg-blue-600 text-white font-black text-xs flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 mb-0.5">
                        Stage {idx + 1}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {step}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Equipment Used & Safety Precautions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Equipment */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm">
                <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-blue-600" />
                  <span>Equipment Deployed</span>
                </h3>
                <ul className="space-y-2.5 text-xs text-slate-600">
                  {service.equipment.map((eq, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-1.5"></div>
                      <span>{eq}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Safety */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm">
                <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  <span>Safety Precautions</span>
                </h3>
                <ul className="space-y-2.5 text-xs text-slate-600">
                  {service.safetyPrecautions.map((safe, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0 mt-1.5"></div>
                      <span>{safe}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Relevant FAQs */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Frequently Asked Questions
              </h3>
              <div className="space-y-3">
                {relevantFaqs.map((faq) => (
                  <div key={faq.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-xs">
                    <h4 className="font-bold text-slate-900 mb-1">{faq.question}</h4>
                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Booking Sidebar (1 col) */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xl sticky top-24">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-black mb-4">
                <ServiceIcon icon={service.icon} className="w-6 h-6" />
              </div>

              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Estimated Starting Rate
              </span>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-3xl font-black text-slate-900">
                  ₹{service.startingPrice.toLocaleString('en-IN')}
                </span>
                <span className="text-xs text-slate-500 font-medium">/ tank</span>
              </div>

              <div className="space-y-3 text-xs text-slate-600 pb-5 mb-5 border-b border-slate-100">
                <div className="flex justify-between">
                  <span className="text-slate-400">Duration:</span>
                  <span className="font-semibold text-slate-800">{service.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Chemicals:</span>
                  <span className="font-semibold text-emerald-600">100% Food-Grade</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">UV Disinfection:</span>
                  <span className="font-semibold text-blue-600">Included</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Service Report:</span>
                  <span className="font-semibold text-slate-800">Digital PDF Certificate</span>
                </div>
              </div>

              <Link
                to={`/book?service=${service.slug}`}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-lg shadow-blue-500/25 active:scale-98 transition-all mb-3"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Book This Service Now</span>
              </Link>

              <a
                href={getWhatsAppUrl(`Hi AquaClean, I would like to enquire about ${service.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#128C7E] font-bold text-xs border border-[#25D366]/30 transition-all mb-4"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Enquire via WhatsApp</span>
              </a>

              <div className="p-3 bg-slate-50 rounded-xl text-[11px] text-slate-500 flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>Zero advance deposit. Pay after service completion.</span>
              </div>
            </div>

            {/* Related Services */}
            {relatedServices.length > 0 && (
              <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm">
                <h4 className="text-sm font-bold text-slate-900 mb-3">Related Services</h4>
                <div className="space-y-3">
                  {relatedServices.map(rel => (
                    <Link
                      key={rel.id}
                      to={`/services/${rel.slug}`}
                      className="block p-3 rounded-xl bg-slate-50 hover:bg-blue-50 transition-colors border border-slate-100 group"
                    >
                      <span className="text-xs font-bold text-slate-800 group-hover:text-blue-600 line-clamp-1 block">
                        {rel.name}
                      </span>
                      <span className="text-[11px] text-slate-500">
                        From ₹{rel.startingPrice} • {rel.duration}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
