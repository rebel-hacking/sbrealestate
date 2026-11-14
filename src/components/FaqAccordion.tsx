import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className={`rounded-2xl transition-all duration-300 border overflow-hidden ${
              isOpen
                ? 'bg-white border-brand-blue/40 shadow-luxury ring-1 ring-brand-blue/20'
                : 'bg-white/90 border-brand-ice hover:border-brand-blue/30 hover:shadow-sm'
            }`}
          >
            <button
              type="button"
              id={`${id}-header`}
              aria-expanded={isOpen}
              aria-controls={`${id}-content`}
              onClick={() => toggle(idx)}
              className="w-full text-left px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-2xl group"
            >
              <span className={`font-heading font-bold text-base sm:text-lg transition-colors ${
                isOpen ? 'text-brand-blue' : 'text-brand-navy group-hover:text-brand-blue'
              }`}>
                {item.question}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                  isOpen ? 'bg-brand-blue text-white shadow-electric' : 'bg-brand-ice text-brand-navy group-hover:bg-brand-blue/10'
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`${id}-content`}
                  role="region"
                  aria-labelledby={`${id}-header`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base text-brand-navyMuted leading-relaxed border-t border-brand-ice/50 pt-3">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
};
