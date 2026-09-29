import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Droplet, Menu, X, Phone, CalendarCheck, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../config/site';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'Reviews', path: '/reviews' },
    { label: 'Areas', path: '/areas' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Top emergency announcement bar */}
      <div className="bg-gradient-to-r from-sky-900 via-blue-900 to-sky-900 text-sky-100 text-xs py-1.5 px-4 font-medium">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              ISO Certified
            </span>
            <span className="hidden sm:inline">6-Stage Mechanized Tank Cleaning & 99.9% Bacteria Disinfection</span>
            <span className="sm:hidden">Professional Tank Sanitization</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="hover:text-white flex items-center gap-1 font-semibold text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-cyan-400" />
              <span>{siteConfig.phone}</span>
            </a>
            <span className="hidden md:inline text-sky-400">|</span>
            <span className="hidden md:inline text-sky-200">
              Hours: {siteConfig.businessHours.hours} (All 7 Days)
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'glass-header shadow-md border-b border-slate-200/80 py-2.5'
            : 'bg-white/95 backdrop-blur-md border-b border-slate-100 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-sky-500 via-blue-600 to-cyan-500 text-white shadow-lg shadow-sky-500/25 group-hover:scale-105 transition-transform duration-300">
                <Droplet className="w-6 h-6 fill-white stroke-white" />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center">
                  <ShieldCheck className="w-2.5 h-2.5 text-white" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 group-hover:text-blue-700 transition-colors">
                    AquaClean
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-cyan-600">.</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-sky-100 text-sky-800 px-1.5 py-0.5 rounded ml-1">
                    Services
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 tracking-tight hidden sm:block font-medium">
                  {siteConfig.tagline}
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? 'text-blue-700 bg-blue-50/80 font-bold'
                        : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Header Right Actions */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="hidden xl:flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-blue-700 bg-slate-100/90 hover:bg-slate-200/80 px-3 py-2 rounded-xl border border-slate-200/70 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></div>
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                <span>Quick Call</span>
              </a>

              <Link
                to="/book"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02] active:scale-98 transition-all duration-200"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Book Now</span>
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <Link
                to="/book"
                className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-3 py-2 rounded-lg shadow-sm"
              >
                <CalendarCheck className="w-3.5 h-3.5" />
                <span>Book</span>
              </Link>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-700 hover:text-blue-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[65px] bg-white border-b border-slate-200 shadow-2xl p-5 z-50 animate-in slide-in-from-top-4 duration-200 max-h-[85vh] overflow-y-auto">
            <div className="flex flex-col gap-1 pb-4 border-b border-slate-100">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                      isActive
                        ? 'text-blue-700 bg-blue-50 font-bold'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            <div className="pt-4 flex flex-col gap-3">
              <div className="p-3.5 bg-sky-50 rounded-xl border border-sky-100 text-xs text-slate-600">
                <p className="font-bold text-sky-950 mb-1">Direct Helpdesk & Society Enquiries:</p>
                <p className="text-slate-700">{siteConfig.phone} • {siteConfig.email}</p>
                <p className="text-[11px] text-slate-500 mt-1">{siteConfig.businessHours.full}</p>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 text-white font-bold text-sm"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Call Now</span>
                </a>
                <Link
                  to="/book"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-600 text-white font-bold text-sm shadow-md shadow-blue-500/20"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>Book Slot</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
