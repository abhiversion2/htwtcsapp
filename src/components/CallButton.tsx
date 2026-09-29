import React from 'react';
import { Phone } from 'lucide-react';
import { siteConfig } from '../config/site';

interface CallButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'pill';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showNumber?: boolean;
  text?: string;
}

export const CallButton: React.FC<CallButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  showNumber = false,
  text
}) => {
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs font-semibold gap-1.5',
    md: 'px-4 py-2.5 text-sm font-semibold gap-2',
    lg: 'px-6 py-3.5 text-base font-bold gap-2.5'
  };

  const variantClasses = {
    primary: 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-600/20 active:scale-98',
    secondary: 'bg-slate-800 hover:bg-slate-900 text-white shadow-md active:scale-98',
    outline: 'border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 active:scale-98',
    ghost: 'text-emerald-700 hover:bg-emerald-50 active:scale-98',
    pill: 'bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100 rounded-full'
  };

  const displayText = text || (showNumber ? siteConfig.phone : 'Call Now');

  return (
    <a
      href={`tel:${siteConfig.phoneRaw}`}
      aria-label={`Call AquaClean Services at ${siteConfig.phone}`}
      className={`inline-flex items-center justify-center rounded-xl transition-all duration-200 cursor-pointer ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      <Phone className={size === 'sm' ? 'w-3.5 h-3.5' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} />
      <span>{displayText}</span>
    </a>
  );
};
