import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO, buildWhatsAppLink } from '../data/businessInfo';

interface MobileStickyBarProps {
  currentPath?: string;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ currentPath }) => {
  const getContextualWhatsAppText = () => {
    switch (currentPath) {
      case '/flat-rentals':
        return 'Hello S B Real Estate, I am looking for a flat for rent in Bengaluru. Please share how we can proceed with my requirements.';
      case '/home-rentals':
        return 'Hello S B Real Estate, I am searching for an independent house for rent in Bengaluru. Please guide me.';
      case '/rental-agreements':
        return 'Hello S B Real Estate, I need assistance with a residential rental agreement in Bengaluru.';
      default:
        return 'Hello S B Real Estate, I would like to enquire about residential rental services in Bengaluru.';
    }
  };

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-brand-ice p-3 shadow-2xl md:hidden">
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2.5">
        <a
          href={BUSINESS_INFO.phone.telLink}
          className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-ice text-brand-navy font-heading font-bold text-xs tracking-wide active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 text-brand-blue" />
          <span>Call Now</span>
        </a>

        <a
          href={buildWhatsAppLink(getContextualWhatsAppText())}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-orange text-white font-heading font-bold text-xs tracking-wide shadow-orange-glow active:scale-95 transition-transform"
        >
          <MessageCircle className="w-4 h-4 fill-white/20" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
};

