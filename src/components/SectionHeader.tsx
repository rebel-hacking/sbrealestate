import React from 'react';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  align = 'left',
  light = false,
  className = '',
}) => {
  return (
    <div
      className={`space-y-3 ${align === 'center' ? 'text-center mx-auto' : 'text-left'} ${className}`}
    >
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
          light
            ? 'bg-white/10 text-brand-ice border border-white/20'
            : 'bg-brand-ice text-brand-blue border border-brand-blue/20'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
          <span>{badge}</span>
        </div>
      )}

      <h2
        className={`font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight leading-tight ${
          light ? 'text-white' : 'text-brand-navy'
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`text-sm sm:text-base leading-relaxed max-w-2xl ${
            align === 'center' ? 'mx-auto' : ''
          } ${light ? 'text-gray-300' : 'text-brand-navyMuted'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

