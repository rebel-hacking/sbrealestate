import React from 'react';
import { ChevronRight, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO, buildWhatsAppLink } from '../data/businessInfo';

interface PageHeroProps {
  badge: string;
  title: string;
  subtitle: string;
  breadcrumb: string;
  imageSrc?: string;
  imageAlt?: string;
  whatsappMessage?: string;
  onNavigate?: (path: string) => void;
}

export const PageHero: React.FC<PageHeroProps> = ({
  badge,
  title,
  subtitle,
  breadcrumb,
  imageSrc,
  imageAlt,
  whatsappMessage,
  onNavigate,
}) => {
  return (
    <section className="relative bg-gradient-to-b from-brand-ice/30 via-white to-white pt-8 pb-16 lg:pb-24 border-b border-brand-ice/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-brand-navyMuted mb-6">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              if (onNavigate) onNavigate('/');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="hover:text-brand-blue transition-colors"
          >
            Home
          </a>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-brand-navy">{breadcrumb}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-ice text-brand-blue text-xs font-bold uppercase tracking-wider border border-brand-blue/20">
              <span className="w-2 h-2 rounded-full bg-brand-orange" />
              <span>{badge}</span>
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-navy tracking-tight leading-[1.15]">
              {title}
            </h1>

            <p className="text-base sm:text-lg text-brand-navyMuted leading-relaxed max-w-xl">
              {subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={buildWhatsAppLink(
                  whatsappMessage || `Hello S B Real Estate, I would like to enquire about ${title}.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-orange hover:bg-brand-orangeHover text-white font-heading font-bold text-sm shadow-orange-glow transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Enquire via WhatsApp</span>
              </a>

              <a
                href={BUSINESS_INFO.phone.telLink}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white border border-brand-ice hover:bg-brand-iceLight text-brand-navy font-semibold text-sm transition-all"
              >
                <Phone className="w-4 h-4 text-brand-blue" />
                <span>Call {BUSINESS_INFO.phone.display}</span>
              </a>
            </div>
          </div>

          {/* Optional Right Architectural Image */}
          {imageSrc && (
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-luxury border-4 border-white aspect-[4/3] lg:aspect-[5/4] group">
                <img
                  src={imageSrc}
                  alt={imageAlt || title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-white/90 backdrop-blur-md text-xs font-semibold text-brand-navy flex items-center justify-between">
                  <span>S B Real Estate • Bengaluru</span>
                  <span className="text-brand-blue font-bold">4.9★ Verified</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

