import React from 'react';
import { Star, ExternalLink, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

interface TrustBadgeProps {
  variant?: 'compact' | 'full' | 'hero';
  className?: string;
}

export const TrustBadge: React.FC<TrustBadgeProps> = ({ variant = 'full', className = '' }) => {
  if (variant === 'compact') {
    return (
      <a
        href={BUSINESS_INFO.rating.googleProfileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-ice/60 border border-brand-blue/20 text-brand-navy text-xs font-semibold hover:bg-brand-ice hover:border-brand-blue/40 transition-all ${className}`}
        title="View S B Real Estate on Google Business Profile"
      >
        <span className="flex items-center text-amber-500">
          <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
        </span>
        <span className="font-bold">{BUSINESS_INFO.rating.score}</span>
        <span className="text-brand-navyMuted">({BUSINESS_INFO.rating.reviewCount} Google reviews)</span>
      </a>
    );
  }

  if (variant === 'hero') {
    return (
      <a
        href={BUSINESS_INFO.rating.googleProfileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`group inline-flex items-center gap-3.5 px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-brand-ice shadow-luxury hover:shadow-luxury-hover hover:border-brand-blue/30 transition-all duration-300 ${className}`}
      >
        <div className="flex -space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <div className="text-left border-l border-brand-ice pl-3">
          <div className="flex items-center gap-1.5">
            <span className="font-heading font-extrabold text-sm text-brand-navy">
              {BUSINESS_INFO.rating.score} / 5.0
            </span>
            <span className="text-xs px-1.5 py-0.5 rounded bg-brand-ice text-brand-blue font-bold">
              Verified
            </span>
          </div>
          <p className="text-xs text-brand-navyMuted font-medium">
            Based on {BUSINESS_INFO.rating.reviewCount} Google reviews
          </p>
        </div>
        <ExternalLink className="w-3.5 h-3.5 text-brand-navyMuted group-hover:text-brand-blue transition-colors ml-1" />
      </a>
    );
  }

  return (
    <div className={`p-6 rounded-2xl bg-white border border-brand-ice shadow-luxury ${className}`}>
      <div className="flex items-center justify-between gap-4 mb-3">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-brand-ice flex items-center justify-center text-brand-blue">
            <ShieldCheck className="w-5 h-5 text-brand-blue" />
          </div>
          <div>
            <h4 className="font-heading font-bold text-brand-navy text-sm">Google Verified Rating</h4>
            <p className="text-xs text-brand-navyMuted">Authentic client feedback</p>
          </div>
        </div>
        <a
          href={BUSINESS_INFO.rating.googleProfileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-brand-blue font-semibold hover:underline inline-flex items-center gap-1"
        >
          View Profile <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      <div className="flex items-baseline gap-3">
        <span className="font-heading font-extrabold text-3xl text-brand-navy">
          {BUSINESS_INFO.rating.score}
        </span>
        <div className="flex items-center text-amber-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <span className="text-xs text-brand-navyMuted font-medium">
          from {BUSINESS_INFO.rating.reviewCount} verified reviews
        </span>
      </div>
    </div>
  );
};

