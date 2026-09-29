import React from 'react';
import { Star, MapPin, CheckCircle, Quote } from 'lucide-react';
import { Review } from '../types';

interface ReviewCardProps {
  review: Review;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className="flex flex-col bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm hover:shadow-lg transition-all duration-300 relative group">
      <Quote className="w-8 h-8 text-blue-100 absolute top-5 right-5 group-hover:text-blue-200 transition-colors" />

      {/* Rating Stars */}
      <div className="flex items-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < review.rating
                ? 'text-amber-400 fill-amber-400'
                : 'text-slate-200 fill-slate-200'
            }`}
          />
        ))}
        <span className="text-xs font-bold text-slate-700 ml-1.5">{review.rating}.0</span>
      </div>

      {/* Review Text */}
      <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1 italic">
        "{review.review}"
      </p>

      {/* Author & Location */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-sky-500 text-white font-bold text-sm flex items-center justify-center shadow-sm">
            {review.name.charAt(0)}
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h4 className="text-sm font-bold text-slate-900">{review.name}</h4>
              {review.verified && (
                <span title="Verified Booking" className="inline-flex">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500 fill-emerald-100" />
                </span>
              )}
            </div>
            <div className="flex items-center gap-1 text-xs text-slate-500">
              <MapPin className="w-3 h-3 text-slate-400" />
              <span>{review.location}</span>
            </div>
          </div>
        </div>

        {review.date && (
          <span className="text-[11px] text-slate-400 font-medium shrink-0">
            {review.date}
          </span>
        )}
      </div>
    </div>
  );
};
