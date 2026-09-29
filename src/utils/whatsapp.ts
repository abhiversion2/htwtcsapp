import { siteConfig } from '../config/site';

export function getWhatsAppUrl(customMessage?: string): string {
  const defaultMessage = `Hello ${siteConfig.name}, I would like to book a water tank cleaning service. Please share details and pricing.`;
  const message = customMessage ? customMessage : defaultMessage;
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${siteConfig.whatsappRaw}?text=${encoded}`;
}

export function openWhatsApp(customMessage?: string): void {
  window.open(getWhatsAppUrl(customMessage), '_blank', 'noopener,noreferrer');
}
