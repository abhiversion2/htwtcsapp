import React, { useState } from 'react';
import { Send, CheckCircle2, User, Phone, Mail, MessageSquare } from 'lucide-react';
import { saveContactMessage } from '../utils/storage';

export const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !message.trim()) {
      setError('Please fill in your name, contact phone, and message.');
      return;
    }

    setError('');
    setLoading(true);

    setTimeout(() => {
      saveContactMessage({
        name,
        phone,
        email,
        subject: subject || 'General Inquiry',
        message
      });
      setLoading(false);
      setSubmitted(true);
      setName('');
      setPhone('');
      setEmail('');
      setSubject('');
      setMessage('');
    }, 500);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md">
      <h3 className="text-xl font-bold text-slate-900 mb-2">Send Us a Direct Message</h3>
      <p className="text-xs text-slate-500 mb-6">
        Have questions about society AMCs, commercial capacity, or customized disinfection? Drop us a note and we will reply within 30 minutes during business hours.
      </p>

      {submitted ? (
        <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center animate-in fade-in duration-300">
          <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h4 className="text-base font-bold text-emerald-900 mb-1">Message Received!</h4>
          <p className="text-xs text-emerald-800 leading-relaxed max-w-sm mx-auto mb-4">
            Thank you for reaching out. Our support team will review your enquiry and contact you promptly.
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="text-xs font-bold text-emerald-700 hover:text-emerald-800 underline"
          >
            Send another inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Your Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="text"
                  required
                  placeholder="Rahul Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="tel"
                  required
                  maxLength={10}
                  placeholder="9876543210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ''))}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="email"
                  placeholder="rahul@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Subject
              </label>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl text-sm border border-slate-300 focus:border-blue-500 bg-white"
              >
                <option value="">Select Topic</option>
                <option value="Society AMC Proposal">Housing Society AMC Proposal</option>
                <option value="Commercial Inquiry">Commercial / Corporate Inquiry</option>
                <option value="Emergency Cleanup">Emergency Contamination Cleanup</option>
                <option value="Service Feedback">Service Feedback</option>
                <option value="Other">Other Query</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Your Message <span className="text-red-500">*</span>
            </label>
            <textarea
              rows={4}
              required
              placeholder="Tell us about your tank capacity, location, and requirements..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl text-sm border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-500/20 active:scale-98 transition-all cursor-pointer disabled:opacity-50"
          >
            {loading ? (
              <span>Sending Message...</span>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Submit Message</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};
