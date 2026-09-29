import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  CalendarCheck,
  Clock,
  MapPin,
  User,
  Phone,
  Mail,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  FileText,
  ArrowRight,
  Printer
} from 'lucide-react';
import { services } from '../data/services';
import { serviceLocations } from '../data/locations';
import { calculateTankCleaningPrice } from '../utils/pricing';
import { saveBooking } from '../utils/storage';
import { BookingRequest, PropertyType } from '../types';
import { siteConfig } from '../config/site';

const timeSlots = [
  '8 AM – 10 AM',
  '10 AM – 12 PM',
  '12 PM – 2 PM',
  '2 PM – 4 PM',
  '4 PM – 6 PM',
];

export const BookingForm: React.FC = () => {
  const [searchParams] = useSearchParams();

  // Read URL query params if user clicked from Service or Pricing calculator
  const initialServiceSlug = searchParams.get('service') || 'overhead-water-tank-cleaning';
  const initialPropertyType = (searchParams.get('propertyType') as PropertyType) || 'residential';
  const initialTankType = searchParams.get('tankType') || 'overhead';
  const initialCapacity = Number(searchParams.get('capacity')) || 1000;
  const initialTankCount = Number(searchParams.get('tankCount')) || 1;
  const initialDisinfection = searchParams.get('disinfection') !== 'false';

  // Form State
  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('Mumbai');
  const [pincode, setPincode] = useState('');

  const [selectedServiceSlug, setSelectedServiceSlug] = useState(initialServiceSlug);
  const [propertyType, setPropertyType] = useState<PropertyType>(initialPropertyType);
  const [tankType, setTankType] = useState(initialTankType);
  const [capacity, setCapacity] = useState(initialCapacity);
  const [tankCount, setTankCount] = useState(initialTankCount);
  const [additionalDisinfection, setAdditionalDisinfection] = useState(initialDisinfection);

  // Default to tomorrow's date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const defaultDateStr = tomorrow.toISOString().split('T')[0];

  const [preferredDate, setPreferredDate] = useState(defaultDateStr);
  const [preferredTimeSlot, setPreferredTimeSlot] = useState(timeSlots[1]); // 10 AM - 12 PM
  const [additionalNotes, setAdditionalNotes] = useState('');

  // UI / Status State
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedBooking, setSubmittedBooking] = useState<BookingRequest | null>(null);

  // Recalculate price dynamically
  const priceResult = calculateTankCleaningPrice({
    tankType,
    capacityLitres: capacity,
    tankCount,
    propertyType,
    additionalDisinfection
  });

  const selectedService = services.find(s => s.slug === selectedServiceSlug) || services[0];

  // Validation
  const validateForm = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = 'Full Name is required';
    if (!mobile.trim()) {
      errs.mobile = 'Mobile Number is required';
    } else if (!/^[0-9]{10}$/.test(mobile.replace(/[^0-9]/g, ''))) {
      errs.mobile = 'Please enter a valid 10-digit mobile number';
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!address.trim()) errs.address = 'Service Address is required';
    if (!pincode.trim() || pincode.length < 6) {
      errs.pincode = 'Please enter a valid 6-digit Pincode';
    }
    if (!preferredDate) errs.preferredDate = 'Please select a preferred service date';
    if (!preferredTimeSlot) errs.preferredTimeSlot = 'Please select a time slot';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      // scroll to first error
      window.scrollTo({ top: 300, behavior: 'smooth' });
      return;
    }

    setSubmitting(true);

    setTimeout(() => {
      const created = saveBooking({
        fullName,
        mobile,
        email: email || `${mobile}@customer.placeholder`,
        address,
        city,
        pincode,
        serviceId: selectedService.id,
        serviceName: selectedService.name,
        tankType,
        capacity,
        tankCount,
        propertyType,
        preferredDate,
        preferredTimeSlot,
        additionalNotes,
        additionalDisinfection,
        estimatedPrice: priceResult.estimatedPrice
      });

      setSubmitting(false);
      setSubmittedBooking(created);
      window.scrollTo({ top: 100, behavior: 'smooth' });
    }, 600);
  };

  // SUCCESS SCREEN
  if (submittedBooking) {
    return (
      <div className="max-w-3xl mx-auto py-8 px-4 sm:px-6">
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-2xl p-6 sm:p-10 text-center relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-3 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500"></div>

          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
            <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12" />
          </div>

          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200 mb-3">
            Appointment Confirmed
          </span>

          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">
            Booking Request Submitted!
          </h2>
          <p className="text-slate-600 text-sm max-w-lg mx-auto mb-6">
            Thank you, <span className="font-semibold text-slate-900">{submittedBooking.fullName}</span>! Our technical service manager will call you at <span className="font-semibold text-slate-900">{submittedBooking.mobile}</span> to confirm technician arrival.
          </p>

          {/* Ticket Card */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-left max-w-xl mx-auto mb-8 shadow-sm">
            <div className="flex justify-between items-center pb-4 border-b border-slate-200 mb-4">
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Booking Reference ID
                </span>
                <span className="text-lg font-mono font-black text-blue-700 tracking-wider">
                  {submittedBooking.id}
                </span>
              </div>
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-700 border border-emerald-500/20">
                {submittedBooking.status}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-slate-400 block font-medium">Service Selected</span>
                <span className="font-bold text-slate-800 text-sm">{submittedBooking.serviceName}</span>
              </div>
              <div>
                <span className="text-slate-400 block font-medium">Scheduled Date & Time</span>
                <span className="font-bold text-slate-800 text-sm">{submittedBooking.preferredDate} ({submittedBooking.preferredTimeSlot})</span>
              </div>
              <div>
                <span className="text-slate-400 block font-medium">Tank Details</span>
                <span className="font-semibold text-slate-700">
                  {submittedBooking.capacity.toLocaleString()}L • {submittedBooking.tankCount} tank(s) • {submittedBooking.tankType}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block font-medium">Service Address</span>
                <span className="font-semibold text-slate-700">
                  {submittedBooking.address}, {submittedBooking.city} - {submittedBooking.pincode}
                </span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-200 flex justify-between items-baseline">
              <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                Estimated Amount Due
              </span>
              <span className="text-2xl font-black text-slate-900">
                ₹{submittedBooking.estimatedPrice.toLocaleString('en-IN')}
              </span>
            </div>
          </div>

          <div className="bg-sky-50 rounded-xl p-4 border border-sky-100 max-w-xl mx-auto mb-8 text-xs text-sky-900 text-left flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold mb-0.5">Zero Prepayment Required</p>
              <p className="text-slate-600 text-[11px]">
                You only pay after our team finishes cleaning, runs a water clarity check, and hands over your inspection certificate. We accept UPI, Cards, and Cash.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs shadow-sm transition-all"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save Receipt</span>
            </button>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-500/20 transition-all"
            >
              <span>Back to Home</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Main Form (2 cols) */}
        <div className="lg:col-span-2 space-y-8">
          {/* Section 1: Customer Information */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
            <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-black">
                <User className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">1. Customer Information</h3>
                <p className="text-xs text-slate-500">Contact details for technician dispatch</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className={`w-full px-4 py-2.5 rounded-xl text-sm border ${
                    errors.fullName ? 'border-red-400 bg-red-50/50' : 'border-slate-300 focus:border-blue-500'
                  } focus:ring-2 focus:ring-blue-200 outline-none transition-all`}
                />
                {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
              </div>

              {/* Mobile Number */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-2.5 text-xs font-bold text-slate-400">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    placeholder="9876543210"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value.replace(/[^0-9]/g, ''))}
                    className={`w-full pl-12 pr-4 py-2.5 rounded-xl text-sm border ${
                      errors.mobile ? 'border-red-400 bg-red-50/50' : 'border-slate-300 focus:border-blue-500'
                    } focus:ring-2 focus:ring-blue-200 outline-none transition-all`}
                  />
                </div>
                {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Email Address <span className="text-slate-400 font-normal">(for report & receipt)</span>
                </label>
                <input
                  type="email"
                  placeholder="rahul@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full px-4 py-2.5 rounded-xl text-sm border ${
                    errors.email ? 'border-red-400' : 'border-slate-300 focus:border-blue-500'
                  } focus:ring-2 focus:ring-blue-200 outline-none transition-all`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              {/* City Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  City / Region <span className="text-red-500">*</span>
                </label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl text-sm border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none bg-white transition-all"
                >
                  <option value="Mumbai">Mumbai (Western & Central)</option>
                  <option value="Thane">Thane & Ghodbunder</option>
                  <option value="Vasai">Vasai (West / East)</option>
                  <option value="Virar">Virar</option>
                  <option value="Nalasopara">Nalasopara</option>
                  <option value="Mira Road">Mira Road & Bhayandar</option>
                  <option value="Borivali">Borivali / Kandivali</option>
                  <option value="Andheri">Andheri / Vile Parle</option>
                  <option value="Navi Mumbai">Navi Mumbai (Vashi to Panvel)</option>
                </select>
              </div>

              {/* Address */}
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Service Address (Building / Flat / Society) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Flat 402, Gokul Dham Heights, Link Road, Borivali West"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className={`w-full px-4 py-2.5 rounded-xl text-sm border ${
                    errors.address ? 'border-red-400 bg-red-50/50' : 'border-slate-300 focus:border-blue-500'
                  } focus:ring-2 focus:ring-blue-200 outline-none transition-all`}
                />
                {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
              </div>

              {/* Pincode */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Pincode <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  maxLength={6}
                  placeholder="400092"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value.replace(/[^0-9]/g, ''))}
                  className={`w-full px-4 py-2.5 rounded-xl text-sm border ${
                    errors.pincode ? 'border-red-400 bg-red-50/50' : 'border-slate-300 focus:border-blue-500'
                  } focus:ring-2 focus:ring-blue-200 outline-none transition-all`}
                />
                {errors.pincode && <p className="text-red-500 text-xs mt-1">{errors.pincode}</p>}
              </div>
            </div>
          </div>

          {/* Section 2: Service & Tank Information */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
            <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center font-black">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">2. Service & Tank Details</h3>
                <p className="text-xs text-slate-500">Configure your tank specifications</p>
              </div>
            </div>

            <div className="space-y-5">
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Select Specific Service Package
                </label>
                <select
                  value={selectedServiceSlug}
                  onChange={(e) => setSelectedServiceSlug(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl text-sm border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none bg-white font-semibold text-slate-800"
                >
                  {services.map((s) => (
                    <option key={s.id} value={s.slug}>
                      {s.name} (from ₹{s.startingPrice})
                    </option>
                  ))}
                </select>
              </div>

              {/* Property Type Radio */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Property Classification
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'residential', label: 'Residential' },
                    { id: 'society', label: 'Housing Society' },
                    { id: 'commercial', label: 'Commercial' },
                    { id: 'industrial', label: 'Industrial' }
                  ].map((p) => (
                    <button
                      type="button"
                      key={p.id}
                      onClick={() => setPropertyType(p.id as PropertyType)}
                      className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all text-center ${
                        propertyType === p.id
                          ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tank Type & Capacity */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Tank Type
                  </label>
                  <select
                    value={tankType}
                    onChange={(e) => setTankType(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl text-sm border border-slate-300 focus:border-blue-500 bg-white"
                  >
                    <option value="overhead">Overhead Terrace</option>
                    <option value="underground">Underground RCC</option>
                    <option value="sump">Basement Sump</option>
                    <option value="plastic">Plastic / Sintex</option>
                    <option value="concrete">Concrete / Masonry</option>
                    <option value="stainless_steel">Stainless Steel</option>
                    <option value="loft">Loft Tank</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Capacity (Litres)
                  </label>
                  <select
                    value={capacity}
                    onChange={(e) => setCapacity(Number(e.target.value))}
                    className="w-full px-4 py-2.5 rounded-xl text-sm border border-slate-300 focus:border-blue-500 bg-white"
                  >
                    <option value={500}>Up to 500 Litres</option>
                    <option value={1000}>1,000 Litres</option>
                    <option value={2000}>2,000 Litres</option>
                    <option value={3000}>3,000 Litres</option>
                    <option value={5000}>5,000 Litres</option>
                    <option value={10000}>10,000 Litres</option>
                    <option value={20000}>20,000 Litres</option>
                    <option value={50000}>50,000+ Litres (Society/Industrial)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Number of Tanks
                  </label>
                  <div className="flex items-center border border-slate-300 rounded-xl bg-white p-1">
                    <button
                      type="button"
                      onClick={() => setTankCount(Math.max(1, tankCount - 1))}
                      className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold"
                    >
                      -
                    </button>
                    <span className="flex-1 text-center font-bold text-sm text-slate-800">
                      {tankCount}
                    </span>
                    <button
                      type="button"
                      onClick={() => setTankCount(tankCount + 1)}
                      className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Disinfection Addon Checkbox */}
              <label className="flex items-center gap-3 p-3 rounded-xl bg-emerald-50/70 border border-emerald-200/80 cursor-pointer">
                <input
                  type="checkbox"
                  checked={additionalDisinfection}
                  onChange={(e) => setAdditionalDisinfection(e.target.checked)}
                  className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 border-emerald-300"
                />
                <div className="text-xs">
                  <span className="font-bold text-emerald-950 block">Include UV & Antibacterial Disinfection Stage</span>
                  <span className="text-emerald-700 text-[11px]">Recommended for drinking water hygiene (+₹249/tank)</span>
                </div>
              </label>
            </div>
          </div>

          {/* Section 3: Date, Time & Instructions */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
            <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-black">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">3. Preferred Schedule</h3>
                <p className="text-xs text-slate-500">Pick convenient appointment slot</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Preferred Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  min={new Date().toISOString().split('T')[0]}
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl text-sm border border-slate-300 focus:border-blue-500 bg-white"
                />
                {errors.preferredDate && <p className="text-red-500 text-xs mt-1">{errors.preferredDate}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Time Slot <span className="text-red-500">*</span>
                </label>
                <select
                  value={preferredTimeSlot}
                  onChange={(e) => setPreferredTimeSlot(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl text-sm border border-slate-300 focus:border-blue-500 bg-white"
                >
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Any Additional Information / Location Instructions
              </label>
              <textarea
                rows={3}
                placeholder="e.g. Tank is on 4th floor terrace, ladder is available, society security needs advance entry clearance..."
                value={additionalNotes}
                onChange={(e) => setAdditionalNotes(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl text-sm border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              ></textarea>
            </div>
          </div>
        </div>

        {/* Sticky Price & Summary Sidebar (1 col) */}
        <div className="lg:sticky lg:top-24 space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-lg">
            <h3 className="text-base font-bold text-slate-900 pb-3 mb-4 border-b border-slate-100 flex items-center justify-between">
              <span>Booking Summary</span>
              <span className="text-xs font-medium text-slate-500">Live Preview</span>
            </h3>

            <div className="space-y-3 text-xs text-slate-600 mb-6">
              <div className="flex justify-between items-start">
                <span className="text-slate-400">Selected Service:</span>
                <span className="font-bold text-slate-800 text-right max-w-[170px]">
                  {selectedService.name}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Tank Category:</span>
                <span className="font-semibold text-slate-800 capitalize">{tankType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Total Capacity:</span>
                <span className="font-semibold text-slate-800">{capacity.toLocaleString()} Litres</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Quantity:</span>
                <span className="font-semibold text-slate-800">{tankCount} {tankCount > 1 ? 'Tanks' : 'Tank'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Disinfection:</span>
                <span className="font-semibold text-slate-800">
                  {additionalDisinfection ? 'Included (UV)' : 'Standard'}
                </span>
              </div>
            </div>

            {/* Price Box */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-100 mb-6">
              <span className="text-[11px] font-bold text-blue-900 uppercase tracking-wider block">
                Estimated Price
              </span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-3xl font-black text-blue-700 tracking-tight">
                  ₹{priceResult.estimatedPrice.toLocaleString('en-IN')}
                </span>
                <span className="text-xs text-slate-500 font-medium">approx.</span>
              </div>
              <p className="text-[10px] text-slate-500 mt-1 italic leading-tight">
                *Final cost verified on site before starting work. No advance payment required.
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-lg shadow-blue-500/25 active:scale-98 transition-all duration-200 disabled:opacity-50 cursor-pointer"
            >
              {submitting ? (
                <span>Submitting Booking...</span>
              ) : (
                <>
                  <CalendarCheck className="w-4 h-4" />
                  <span>Confirm Booking</span>
                </>
              )}
            </button>

            <div className="mt-4 pt-4 border-t border-slate-100 space-y-2 text-[11px] text-slate-500">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>100% Satisfaction Guarantee</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>Free reschedule anytime up to 2 hours before</span>
              </div>
            </div>
          </div>

          {/* Quick Help Card */}
          <div className="p-4 rounded-2xl bg-slate-100 border border-slate-200 text-xs text-slate-700">
            <p className="font-bold text-slate-900 mb-1">Prefer booking over call?</p>
            <p className="text-slate-600 text-[11px] mb-2">Speak directly with our technical scheduler:</p>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="font-bold text-blue-700 hover:underline flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{siteConfig.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </form>
  );
};
