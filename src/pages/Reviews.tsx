import React, { useState } from 'react';
import { Star, CheckCircle, Plus, Send, MessageSquare } from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';
import { ReviewCard } from '../components/ReviewCard';
import { customerReviews } from '../data/reviews';
import { Review } from '../types';
import { usePageTitle } from '../utils/seo';

export const Reviews: React.FC = () => {
  usePageTitle(
    'Customer Reviews & Testimonials | AquaClean Services',
    'Read real, verified reviews from homeowners, housing societies, and businesses in Mumbai, Thane, and Navi Mumbai who use AquaClean Services.'
  );

  const [reviewsList, setReviewsList] = useState<Review[]>(customerReviews);
  const [filterRating, setFilterRating] = useState<number | 'all'>('all');
  const [showSubmitModal, setShowSubmitModal] = useState(false);

  // New review form state
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [serviceType, setServiceType] = useState('Overhead Tank Cleaning');
  const [rating, setRating] = useState(5);
  const [reviewText, setReviewText] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !reviewText.trim()) return;

    const newRev: Review = {
      id: `rev-${Date.now()}`,
      name,
      location: location || 'Mumbai',
      serviceType,
      rating,
      review: reviewText,
      date: 'Just now',
      verified: true
    };

    setReviewsList([newRev, ...reviewsList]);
    setSubmitSuccess(true);
    setTimeout(() => {
      setShowSubmitModal(false);
      setSubmitSuccess(false);
      setName('');
      setLocation('');
      setReviewText('');
    }, 1500);
  };

  const filteredReviews = reviewsList.filter(r => {
    if (filterRating === 'all') return true;
    return r.rating === filterRating;
  });

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Top Banner */}
      <div className="bg-slate-900 text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Customer Reviews' }]} />
          <div className="max-w-3xl mt-4">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-950 px-3 py-1 rounded-full border border-amber-800">
              Verified Feedback
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white mt-3 mb-4 tracking-tight">
              What Our Customers Say
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Read real stories and experiences from homeowners, housing society committees, and business managers across Mumbai, Thane, and MMR.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        {/* Rating Overview Bar */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200/80 mb-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="text-center sm:text-left">
              <div className="text-5xl font-black text-slate-900 tracking-tight">4.8</div>
              <div className="flex items-center gap-1 text-amber-400 my-1 justify-center sm:justify-start">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-500 font-medium">Based on 2,400+ verified cleanings</p>
            </div>

            <div className="hidden lg:block h-16 w-px bg-slate-200"></div>

            <div className="hidden lg:grid grid-cols-2 gap-x-6 gap-y-1 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>99.4% On-time arrival rate</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>100% Food-grade safe chemicals</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Zero advance deposit required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Before & after photo report included</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <button
              type="button"
              onClick={() => setShowSubmitModal(true)}
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-500/20 active:scale-98 transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>Write a Review</span>
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-1">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-2">Filter by:</span>
          {[
            { label: 'All Reviews', val: 'all' },
            { label: '5 Stars ★★★★★', val: 5 },
            { label: '4 Stars ★★★★☆', val: 4 }
          ].map(f => (
            <button
              key={f.val}
              type="button"
              onClick={() => setFilterRating(f.val as any)}
              className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                filterRating === f.val
                  ? 'bg-slate-900 text-white border-slate-900'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map(review => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        {/* Write a Review Modal */}
        {showSubmitModal && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
              <div className="flex justify-between items-center pb-4 mb-4 border-b border-slate-100">
                <h3 className="text-lg font-bold text-slate-900">Share Your Experience</h3>
                <button
                  onClick={() => setShowSubmitModal(false)}
                  className="text-slate-400 hover:text-slate-600 font-bold text-lg"
                >
                  ✕
                </button>
              </div>

              {submitSuccess ? (
                <div className="p-6 text-center text-emerald-700 bg-emerald-50 rounded-2xl">
                  <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto mb-2" />
                  <p className="font-bold">Thank you for your review!</p>
                  <p className="text-xs text-emerald-600">Your feedback has been published.</p>
                </div>
              ) : (
                <form onSubmit={handleAddReview} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Malhotra"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl text-sm border border-slate-300 focus:border-blue-500 outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Location / Area
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Borivali West"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl text-sm border border-slate-300 focus:border-blue-500 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Rating
                      </label>
                      <select
                        value={rating}
                        onChange={(e) => setRating(Number(e.target.value))}
                        className="w-full px-4 py-2.5 rounded-xl text-sm border border-slate-300 focus:border-blue-500 bg-white"
                      >
                        <option value={5}>5 Stars - Outstanding</option>
                        <option value={4}>4 Stars - Very Good</option>
                        <option value={3}>3 Stars - Average</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Your Review & Feedback
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Describe how the cleaning went, technician punctuality, water clarity..."
                      value={reviewText}
                      onChange={(e) => setReviewText(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl text-sm border border-slate-300 focus:border-blue-500 outline-none"
                    ></textarea>
                  </div>

                  <div className="flex justify-end gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setShowSubmitModal(false)}
                      className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20"
                    >
                      Publish Review
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
