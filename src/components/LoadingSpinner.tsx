import React from 'react';
import { Droplet } from 'lucide-react';

export const LoadingSpinner: React.FC<{ message?: string }> = ({ message = 'Loading AquaClean...' }) => {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center p-8">
      <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 border border-blue-200 text-blue-600 mb-4 animate-bounce">
        <Droplet className="w-8 h-8 fill-blue-600 animate-pulse" />
      </div>
      <p className="text-sm font-bold text-slate-700">{message}</p>
      <div className="w-32 h-1 bg-slate-200 rounded-full mt-3 overflow-hidden">
        <div className="w-full h-full bg-blue-600 animate-indeterminate"></div>
      </div>
    </div>
  );
};
