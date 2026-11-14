import React, { useState } from 'react';
import { MessageCircle, CheckCircle2, AlertCircle, ArrowRight, RefreshCw } from 'lucide-react';
import { BUSINESS_INFO, buildWhatsAppLink } from '../data/businessInfo';

interface EnquiryFormProps {
  defaultService?: 'Flat Rental' | 'Home Rental' | 'Rental Agreement';
  className?: string;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  defaultService = 'Flat Rental',
  className = '',
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    serviceType: defaultService,
    preferredLocation: '',
    budgetRange: '',
    requirements: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedWhatsAppUrl, setSubmittedWhatsAppUrl] = useState('');

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    } else if (formData.fullName.trim().length < 2) {
      errs.fullName = 'Name must be at least 2 characters.';
    }

    const cleanPhone = formData.phone.replace(/[\s\-+]/g, '');
    if (!cleanPhone) {
      errs.phone = 'Please enter your phone number.';
    } else if (!/^[0-9]{10,12}$/.test(cleanPhone)) {
      errs.phone = 'Please enter a valid 10-digit Indian mobile number.';
    }

    if (!formData.serviceType) {
      errs.serviceType = 'Please select a service type.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Construct structured WhatsApp message
    const message = [
      `*New Rental Enquiry — S B Real Estate*`,
      `👤 *Name:* ${formData.fullName.trim()}`,
      `📞 *Phone:* ${formData.phone.trim()}`,
      `🏷️ *Service:* ${formData.serviceType}`,
      formData.preferredLocation ? `📍 *Preferred Location:* ${formData.preferredLocation.trim()}` : '',
      formData.budgetRange ? `💰 *Budget Range:* ${formData.budgetRange}` : '',
      formData.requirements ? `📝 *Requirements:* ${formData.requirements.trim()}` : '',
      ``,
      `_Sent via S B Real Estate Website Enquiry Form_`,
    ]
      .filter(Boolean)
      .join('\n');

    const whatsappUrl = buildWhatsAppLink(message);
    setSubmittedWhatsAppUrl(whatsappUrl);
    setIsSubmitted(true);

    // Trigger WhatsApp in new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      serviceType: defaultService,
      preferredLocation: '',
      budgetRange: '',
      requirements: '',
    });
    setErrors({});
    setIsSubmitted(false);
    setSubmittedWhatsAppUrl('');
  };

  if (isSubmitted) {
    return (
      <div className={`p-8 rounded-3xl bg-brand-iceLight border border-brand-blue/30 text-center space-y-5 ${className}`}>
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h3 className="font-heading font-extrabold text-2xl text-brand-navy">
            WhatsApp Enquiry Prepared!
          </h3>
          <p className="text-sm text-brand-navyMuted max-w-md mx-auto leading-relaxed">
            Your requirement details were formulated. WhatsApp should have opened in a new tab to send directly to S B Real Estate.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-brand-ice text-xs text-brand-navyMuted max-w-md mx-auto text-left space-y-1">
          <div className="flex items-center gap-1.5 font-bold text-brand-navy text-xs">
            <AlertCircle className="w-3.5 h-3.5 text-brand-orange" />
            <span>Important Verification Notice:</span>
          </div>
          <p>
            Submitting this enquiry communicates your preferences to S B Real Estate. It does not constitute a property reservation or confirm availability until verified by the agency.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <a
            href={submittedWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-orange hover:bg-brand-orangeHover text-white font-heading font-bold text-sm shadow-orange-glow transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white/20" />
            <span>Re-open WhatsApp Chat</span>
          </a>

          <button
            type="button"
            onClick={handleReset}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white border border-brand-ice hover:bg-gray-50 text-brand-navy font-semibold text-sm transition-all"
          >
            <RefreshCw className="w-4 h-4 text-brand-blue" />
            <span>Submit Another Enquiry</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`p-6 sm:p-8 rounded-3xl bg-white border border-brand-ice shadow-luxury space-y-5 ${className}`}>
      <div className="border-b border-brand-ice pb-4">
        <h3 className="font-heading font-bold text-xl text-brand-navy">Share Your Requirements</h3>
        <p className="text-xs text-brand-navyMuted mt-1">
          Provide your preferences and connect with S B Real Estate directly over WhatsApp.
        </p>
      </div>

      {/* Service Type Selection */}
      <div className="space-y-2">
        <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy">
          Select Service Type <span className="text-brand-orange">*</span>
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {(['Flat Rental', 'Home Rental', 'Rental Agreement'] as const).map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setFormData({ ...formData, serviceType: type })}
              className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all text-center ${
                formData.serviceType === type
                  ? 'bg-brand-blue text-white border-brand-blue shadow-electric'
                  : 'bg-white text-brand-navy border-brand-ice hover:bg-brand-iceLight'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Name and Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-brand-navy mb-1">
            Full Name <span className="text-brand-orange">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="e.g. Rahul Sharma"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className={`w-full px-4 py-2.5 rounded-xl border text-sm text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-blue transition-colors ${
              errors.fullName ? 'border-red-400 bg-red-50/30' : 'border-gray-200 focus:border-brand-blue'
            }`}
          />
          {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-brand-navy mb-1">
            Mobile Number <span className="text-brand-orange">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="e.g. 9876543210"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={`w-full px-4 py-2.5 rounded-xl border text-sm text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-blue transition-colors ${
              errors.phone ? 'border-red-400 bg-red-50/30' : 'border-gray-200 focus:border-brand-blue'
            }`}
          />
          {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
        </div>
      </div>

      {/* Preferred Location and Budget */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="preferredLocation" className="block text-xs font-bold uppercase tracking-wider text-brand-navy mb-1">
            Preferred Location in Bengaluru
          </label>
          <input
            id="preferredLocation"
            type="text"
            placeholder="e.g. Jeevan Bima Nagar, HAL, Indiranagar"
            value={formData.preferredLocation}
            onChange={(e) => setFormData({ ...formData, preferredLocation: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors"
          />
        </div>

        <div>
          <label htmlFor="budgetRange" className="block text-xs font-bold uppercase tracking-wider text-brand-navy mb-1">
            Budget Range (Approx)
          </label>
          <select
            id="budgetRange"
            value={formData.budgetRange}
            onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors bg-white"
          >
            <option value="">Select an approximate range</option>
            <option value="Under ₹20,000 / month">Under ₹20,000 / month</option>
            <option value="₹20,000 – ₹35,000 / month">₹20,000 – ₹35,000 / month</option>
            <option value="₹35,000 – ₹50,000 / month">₹35,000 – ₹50,000 / month</option>
            <option value="₹50,000+ / month">₹50,000+ / month</option>
            <option value="Rental Agreement Service Only">Rental Agreement Service Only</option>
          </select>
        </div>
      </div>

      {/* Requirements */}
      <div>
        <label htmlFor="requirements" className="block text-xs font-bold uppercase tracking-wider text-brand-navy mb-1">
          Additional Requirements (BHK, Move-in Date, Furnishing)
        </label>
        <textarea
          id="requirements"
          rows={3}
          placeholder="e.g. Looking for a 2BHK semi-furnished flat with parking, ready to move in next month..."
          value={formData.requirements}
          onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors resize-none"
        />
      </div>

      {/* Disclaimer */}
      <div className="p-3 rounded-xl bg-brand-ice/40 border border-brand-ice text-[11px] text-brand-navyMuted leading-relaxed">
        <strong>Notice:</strong> Submitting your requirements initiates a direct WhatsApp enquiry with S B Real Estate. Property availability and terms are confirmed during direct discussion with the agency.
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-brand-orange hover:bg-brand-orangeHover text-white font-heading font-bold text-sm shadow-orange-glow hover:scale-[1.01] active:scale-[0.99] transition-all"
      >
        <MessageCircle className="w-4 h-4 fill-white/20" />
        <span>Proceed to WhatsApp with Enquiry</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </form>
  );
};

