import React from 'react';
import { 
  Star, 
  ExternalLink, 
  ShieldCheck, 
  CheckCircle, 
  Phone, 
  MessageCircle, 
  Building2, 
  Quote
} from 'lucide-react';
import { BUSINESS_INFO, buildWhatsAppLink } from '../data/businessInfo';
import { PageHero } from '../components/PageHero';
import { SectionHeader } from '../components/SectionHeader';

interface ReviewsPageProps {
  onNavigate: (path: string) => void;
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-0">
      {/* Hero */}
      <PageHero
        badge="Google Verified Reviews"
        title="Authentic Client Feedback. 4.9★ Rating."
        subtitle="S B Real Estate is proud to have earned 157 authentic Google reviews from tenants and homeowners across Bengaluru."
        breadcrumb="Client Reviews"
        whatsappMessage="Hello S B Real Estate, I read your verified Google reviews and would like to enquire about rental services."
        onNavigate={onNavigate}
      />

      {/* 1. Large Rating Metric Card */}
      <section className="py-16 bg-white border-b border-brand-ice/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-brand-iceLight via-white to-brand-iceLight border border-brand-blue/20 shadow-luxury">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-4 text-center md:text-left space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-ice text-brand-blue font-bold text-xs">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Google Business Profile Verified</span>
                </div>
                <div className="flex items-baseline justify-center md:justify-start gap-3">
                  <span className="font-heading font-extrabold text-6xl text-brand-navy">
                    {BUSINESS_INFO.rating.score}
                  </span>
                  <span className="text-xl text-brand-navyMuted font-medium">/ 5.0</span>
                </div>
                <div className="flex justify-center md:justify-start text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-brand-navyMuted font-medium pt-1">
                  Based on {BUSINESS_INFO.rating.reviewCount} authentic client reviews
                </p>
              </div>

              <div className="md:col-span-8 space-y-4 border-t md:border-t-0 md:border-l border-brand-ice md:pl-8 text-center md:text-left">
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-brand-navy">
                  Verified Trust in Bengaluru Residential Renting
                </h3>
                <p className="text-sm sm:text-base text-brand-navyMuted leading-relaxed max-w-2xl">
                  Our Google rating represents authentic experiences from real individuals and families navigating house rentals, flat hunting, and agreement execution. We never buy reviews or publish fabricated praise.
                </p>
                <div className="pt-2">
                  <a
                    href={BUSINESS_INFO.rating.googleProfileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-blue text-white font-heading font-bold text-xs uppercase tracking-wider shadow-electric hover:bg-brand-blueHover transition-all"
                  >
                    <span>Read All 157 Reviews on Google</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Authentic Review Highlights Showcase */}
      <section className="py-20 lg:py-28 bg-brand-ice/20 border-b border-brand-ice/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <SectionHeader
            badge="Customer Excerpts"
            title="Supplied Authentic Review Excerpts"
            subtitle="Verified tenant and client testimonials sourced directly from our Google profile."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BUSINESS_INFO.reviewHighlights.map((review, idx) => (
              <div
                key={idx}
                className="p-8 sm:p-10 rounded-3xl bg-white border border-brand-ice shadow-luxury flex flex-col justify-between space-y-8 relative group hover:border-brand-blue/30 transition-all"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <div className="w-8 h-8 rounded-full bg-brand-ice flex items-center justify-center text-brand-blue">
                      <Quote className="w-4 h-4" />
                    </div>
                  </div>

                  <blockquote className="font-heading font-semibold text-lg sm:text-xl text-brand-navy leading-relaxed">
                    "{review.quote}"
                  </blockquote>
                </div>

                <div className="pt-6 border-t border-brand-ice flex items-center justify-between">
                  <div>
                    <span className="font-heading font-bold text-sm text-brand-navy block">
                      {review.context}
                    </span>
                    <span className="text-xs text-brand-navyMuted">
                      {review.platform}
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold text-[11px] border border-emerald-200">
                    Verified
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-3xl bg-brand-ivory border border-brand-ivoryBorder text-center max-w-2xl mx-auto space-y-2">
            <h4 className="font-heading font-bold text-sm text-brand-navy">
              Strict Authenticity Policy
            </h4>
            <p className="text-xs text-brand-navyMuted leading-relaxed">
              In accordance with ethical digital marketing and consumer protection standards, S B Real Estate displays only authentic client statements. Reviewer personal identities and unverified quotes are never fabricated.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Conversion Bridge */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <SectionHeader
            badge="Work With S B Real Estate"
            title="Experience Reliable Rental Assistance Yourself"
            subtitle="Connect with our agency today to share your rental criteria in Jeevan Bima Nagar and Bengaluru."
            align="center"
          />

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={buildWhatsAppLink(
                "Hello S B Real Estate, I reviewed your Google rating and would like to discuss my rental requirements."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-orange hover:bg-brand-orangeHover text-white font-heading font-bold text-sm shadow-orange-glow hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>Connect on WhatsApp</span>
            </a>

            <a
              href={BUSINESS_INFO.phone.telLink}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white border border-brand-ice hover:bg-brand-iceLight text-brand-navy font-semibold text-sm transition-all"
            >
              <Phone className="w-4 h-4 text-brand-blue" />
              <span>Call {BUSINESS_INFO.phone.display}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

