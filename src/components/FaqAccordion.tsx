import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  className?: string;
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({ items, className = '' }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        const id = `faq-item-${idx}`;

        return (
          <div
            key={idx}
            className={`rounded-2xl transition-all duration-200 border ${
              isOpen
                ? 'bg-brand-ice/20 border-brand-blue/30 shadow-luxury'
                : 'bg-white border-brand-ice hover:border-brand-blue/20'
            }`}
          >
            <button
              type="button"
              id={`${id}-header`}
              aria-expanded={isOpen}
              aria-controls={`${id}-content`}
              onClick={() => toggle(idx)}
              className="w-full text-left px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-2xl"
            >
              <span className="font-heading font-bold text-base sm:text-lg text-brand-navy">
                {item.question}
              </span>
              <span
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                  isOpen ? 'bg-brand-blue text-white rotate-180' : 'bg-brand-ice text-brand-navy'
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>

            {isOpen && (
              <div
                id={`${id}-content`}
                role="region"
                aria-labelledby={`${id}-header`}
                className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base text-brand-navyMuted leading-relaxed border-t border-brand-ice/50 pt-3 animate-in fade-in duration-200"
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

