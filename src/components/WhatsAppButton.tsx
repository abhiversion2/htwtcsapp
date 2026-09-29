import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface WhatsAppButtonProps {
  message?: string;
  variant?: 'primary' | 'outline' | 'floating' | 'pill';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  text?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  message,
  variant = 'primary',
  size = 'md',
  className = '',
  text = 'WhatsApp Us'
}) => {
  const url = getWhatsAppUrl(message);

  if (variant === 'floating') {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with AquaClean on WhatsApp"
        className={`fixed bottom-20 right-5 z-40 flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white p-3.5 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 group ${className}`}
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 font-semibold text-sm pr-1">
          Chat on WhatsApp
        </span>
      </a>
    );
  }

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs font-semibold gap-1.5',
    md: 'px-4 py-2.5 text-sm font-semibold gap-2',
    lg: 'px-6 py-3.5 text-base font-bold gap-2.5'
  };

  const variantClasses = {
    primary: 'bg-[#25D366] hover:bg-[#20ba59] text-white shadow-md shadow-emerald-500/25 active:scale-98',
    outline: 'border-2 border-[#25D366] text-[#128C7E] hover:bg-emerald-50 active:scale-98',
    pill: 'bg-emerald-50 border border-emerald-200 text-emerald-800 hover:bg-emerald-100 rounded-full'
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Send WhatsApp message"
      className={`inline-flex items-center justify-center rounded-xl transition-all duration-200 cursor-pointer ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      <MessageCircle className={size === 'sm' ? 'w-3.5 h-3.5' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} />
      <span>{text}</span>
    </a>
  );
};
