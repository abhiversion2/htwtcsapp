import React from 'react';
import { Link } from 'react-router-dom';
import { Droplet, Home, CalendarCheck, Phone } from 'lucide-react';
import { siteConfig } from '../config/site';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center p-6 bg-slate-50">
      <div className="bg-white rounded-3xl p-8 sm:p-12 max-w-lg w-full text-center border border-slate-200 shadow-xl">
        <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Droplet className="w-8 h-8 fill-blue-600" />
        </div>
        <span className="text-4xl font-black text-blue-600 font-mono block mb-2">404</span>
        <h1 className="text-2xl font-black text-slate-900 mb-2">Page Not Found</h1>
        <p className="text-xs sm:text-sm text-slate-500 mb-6 leading-relaxed">
          The page you are looking for doesn't exist or has been moved. Explore our cleaning services or return home.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs shadow-md"
          >
            <Home className="w-4 h-4" />
            <span>Go to Home</span>
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs hover:bg-slate-200"
          >
            <span>Our Services</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
