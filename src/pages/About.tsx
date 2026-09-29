import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Award,
  Heart,
  Target,
  Sparkles,
  Users,
  CheckCircle,
  CalendarCheck,
  Phone,
  Clock,
  MapPin
} from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';
import { teamMembers } from '../data/team';
import { siteConfig } from '../config/site';
import { usePageTitle } from '../utils/seo';

export const About: React.FC = () => {
  usePageTitle(
    'About Us | AquaClean Services',
    'Learn about AquaClean Services - Mumbai’s trusted water tank cleaning and sanitization team with over 10 years of experience and 5,000+ tanks serviced.'
  );

  const values = [
    {
      title: 'Hygiene Above All',
      desc: 'We never compromise on sanitation. Every step uses strictly food-grade, safe disinfectants and sterile microfiber equipment.',
      icon: Sparkles,
      color: 'bg-cyan-50 text-cyan-700 border-cyan-200'
    },
    {
      title: 'Uncompromised Safety',
      desc: 'Confined space entry requires rigorous OSHA-standard protocols, low-voltage lighting, harnesses, and certified dewatering pumps.',
      icon: ShieldCheck,
      color: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    },
    {
      title: '100% Price Transparency',
      desc: 'Clear, published rates by tank capacity. Zero surprise extra fees, hidden transport charges, or unapproved repairs.',
      icon: Award,
      color: 'bg-blue-50 text-blue-700 border-blue-200'
    },
    {
      title: 'Technical Professionalism',
      desc: 'Uniformed, background-checked crews arrive on time with calibrated equipment and provide documented before/after reports.',
      icon: Target,
      color: 'bg-purple-50 text-purple-700 border-purple-200'
    },
    {
      title: 'Customer Satisfaction',
      desc: 'We consider our job done only when your water tests clear, odor-free, and you are 100% satisfied with the result.',
      icon: Heart,
      color: 'bg-rose-50 text-rose-700 border-rose-200'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Top Banner */}
      <div className="bg-slate-900 text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'About Us' }]} />
          <div className="max-w-3xl mt-4">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950 px-3 py-1 rounded-full border border-cyan-800">
              Our Story & Heritage
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white mt-3 mb-4 tracking-tight">
              Pioneering Clean & Safe Water Storage Since 2014
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We started AquaClean Services with one simple mission: to ensure that no family, school child, or workplace staff drinks or bathes in dirty, contaminated tank water.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200/80 mb-16">
          <div className="text-center p-3 border-r border-slate-100 last:border-0">
            <div className="text-3xl sm:text-4xl font-black text-blue-600">{siteConfig.stats.yearsExperience}</div>
            <div className="text-xs font-semibold text-slate-500 mt-1">Years of Service</div>
          </div>
          <div className="text-center p-3 border-r border-slate-100 last:border-0">
            <div className="text-3xl sm:text-4xl font-black text-cyan-600">{siteConfig.stats.tanksCleaned}</div>
            <div className="text-xs font-semibold text-slate-500 mt-1">Tanks Sterilized</div>
          </div>
          <div className="text-center p-3 border-r border-slate-100 last:border-0">
            <div className="text-3xl sm:text-4xl font-black text-emerald-600">{siteConfig.stats.serviceAreas}</div>
            <div className="text-xs font-semibold text-slate-500 mt-1">Active MMR Areas</div>
          </div>
          <div className="text-center p-3">
            <div className="text-3xl sm:text-4xl font-black text-amber-500">{siteConfig.stats.customerRating}</div>
            <div className="text-xs font-semibold text-slate-500 mt-1">Customer Rating</div>
          </div>
        </div>

        {/* Who We Are & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Who We Are
            </span>
            <h2 className="text-3xl font-black text-slate-900 mt-3 mb-4 tracking-tight">
              Professional Mechanized Water Storage Sanitization
            </h2>
            <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
              <p>
                <strong>AquaClean Services</strong> is Mumbai and MMR’s premier technology-driven water tank cleaning and microbiological sanitization provider. We specialize in deep sludge vacuuming, high-pressure rotary washing, biological disinfection, and certified water reservoir hygiene for residential homes, housing societies, corporate offices, and industrial complexes.
              </p>
              <p>
                For decades, property owners relied on unequipped local laborers who stepped into tanks with bare feet and used harsh, toxic bleaching powders. We revolutionized this process by importing high-pressure German equipment, adopting 100% food-grade antimicrobial formulations, and training verified technicians who follow a standardized 6-stage protocol.
              </p>
            </div>

            {/* Mission Box */}
            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-blue-900 to-sky-900 text-white shadow-lg">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-300 block mb-1">
                Our Mission
              </span>
              <p className="text-base sm:text-lg font-bold text-white italic">
                "To help households and businesses maintain cleaner and safer water storage systems through certified, mechanized, and eco-friendly sanitization."
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-200 group">
              <img
                src="/images/overhead-tank.jpg"
                alt="AquaClean technician sanitizing terrace water tanks"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl border border-slate-200 max-w-xs hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Zero Water Contamination</div>
                  <div className="text-[11px] text-slate-500">Pipeline isolated during work</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Core Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Guiding Principles
            </span>
            <h2 className="text-3xl font-black text-slate-900 mt-2 mb-3 tracking-tight">
              Our Core Values
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              The ethical and operational foundation of every single tank cleaning appointment we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => {
              const IconComp = v.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 border ${v.color}`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{v.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Our Team Section */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
              Leadership & Field Experts
            </span>
            <h2 className="text-3xl font-black text-slate-900 mt-2 mb-3 tracking-tight">
              Meet Our Specialist Team
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Backed by certified environmental health engineers, confined-space safety leads, and seasoned field technicians.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 text-white font-black text-xl flex items-center justify-center mb-4 shadow-md">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{member.name}</h3>
                  <p className="text-xs font-semibold text-blue-600 mb-2">{member.role}</p>
                  <p className="text-xs text-slate-500 mb-4 leading-relaxed">{member.bio}</p>
                </div>
                <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                  <span className="font-semibold text-slate-700 block mb-0.5">Certification:</span>
                  <span className="text-emerald-700 font-medium">{member.certification}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 sm:p-12 text-white text-center shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-black mb-3">
            Ready to Experience Pure, Hygienic Water Storage?
          </h2>
          <p className="text-blue-100 text-xs sm:text-sm max-w-xl mx-auto mb-6">
            Book an appointment online in 60 seconds or contact our team for housing society AMC proposals.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/book"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-blue-900 font-bold text-xs shadow-md hover:bg-slate-100 transition-all"
            >
              <CalendarCheck className="w-4 h-4 text-blue-600" />
              <span>Book Tank Cleaning</span>
            </Link>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-900/40 border border-white/20 text-white font-bold text-xs hover:bg-blue-900/60 transition-all"
            >
              <Phone className="w-4 h-4 text-emerald-300" />
              <span>Call Helpline</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
