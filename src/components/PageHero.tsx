import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO, buildWhatsAppLink } from '../data/businessInfo';
import { MagneticWrapper } from './MotionWrappers';

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
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-ice/40 via-white to-white pt-8 pb-16 lg:pb-24 border-b border-brand-ice/60">
      {/* Decorative ambient electric glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full ambient-glow-blue pointer-events-none blur-3xl opacity-70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs font-semibold text-brand-navyMuted mb-6"
        >
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
        </motion.nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-ice text-brand-blue text-xs font-bold uppercase tracking-wider border border-brand-blue/20 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-ping" />
              <span>{badge}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-navy tracking-tight leading-[1.15]"
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-brand-navyMuted leading-relaxed max-w-xl"
            >
              {subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <MagneticWrapper strength={15}>
                <a
                  href={buildWhatsAppLink(
                    whatsappMessage || `Hello S B Real Estate, I would like to enquire about ${title}.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shimmer-btn inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-brand-orange hover:bg-brand-orangeHover text-white font-heading font-bold text-sm shadow-orange-glow hover:shadow-lg transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white/20" />
                  <span>Enquire via WhatsApp</span>
                </a>
              </MagneticWrapper>

              <MagneticWrapper strength={15}>
                <a
                  href={BUSINESS_INFO.phone.telLink}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white border border-brand-ice hover:border-brand-blue/30 hover:bg-brand-iceLight text-brand-navy font-semibold text-sm shadow-sm transition-all"
                >
                  <Phone className="w-4 h-4 text-brand-blue" />
                  <span>Call {BUSINESS_INFO.phone.display}</span>
                </a>
              </MagneticWrapper>
            </motion.div>
          </div>

          {/* Optional Right Architectural Image */}
          {imageSrc && (
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-luxury border-4 border-white aspect-[4/3] lg:aspect-[5/4] group hover:shadow-luxury-hover transition-all duration-500">
                <img
                  src={imageSrc}
                  alt={imageAlt || title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md text-xs font-semibold text-brand-navy flex items-center justify-between shadow-md border border-brand-ice">
                  <span className="font-bold">S B Real Estate • Bengaluru</span>
                  <span className="text-brand-blue font-bold px-2 py-0.5 rounded bg-brand-ice">4.9★ Verified</span>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
