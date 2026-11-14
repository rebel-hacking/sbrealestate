import React from 'react';
import { 
  Building2, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Clock, 
  ExternalLink, 
  ShieldCheck, 
  Star,
  CheckCircle2,
  Navigation
} from 'lucide-react';
import { BUSINESS_INFO, buildWhatsAppLink } from '../data/businessInfo';
import { PageHero } from '../components/PageHero';
import { SectionHeader } from '../components/SectionHeader';
import { EnquiryForm } from '../components/EnquiryForm';

interface ContactPageProps {
  onNavigate: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-0">
      {/* Hero */}
      <PageHero
        badge="Connect Directly"
        title="Contact S B Real Estate"
        subtitle="Reach out via WhatsApp, phone, or our requirement form. Based at Thimmareddy Colony, Jeevan Bima Nagar, Bengaluru."
        breadcrumb="Contact"
        whatsappMessage="Hello S B Real Estate, I am reaching out to discuss rental assistance in Bengaluru."
        onNavigate={onNavigate}
      />

      {/* 1. Main Contact Layout */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: Contact Info & Address */}
            <div className="lg:col-span-5 space-y-8">
              <SectionHeader
                badge="Agency Office"
                title="Get in Touch with Our Coordinator"
                subtitle="We are readily available for consultations regarding residential flat rentals, independent house searches, and rental agreement coordination."
              />

              {/* Direct channels */}
              <div className="space-y-4">
                {/* Phone Card */}
                <a
                  href={BUSINESS_INFO.phone.telLink}
                  className="p-5 rounded-2xl bg-brand-iceLight border border-brand-ice flex items-center justify-between group hover:border-brand-blue/40 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-blue text-white flex items-center justify-center shadow-electric">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-brand-navyMuted font-medium">Click to Call</div>
                      <div className="font-heading font-extrabold text-lg text-brand-navy group-hover:text-brand-blue transition-colors">
                        {BUSINESS_INFO.phone.display}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-brand-blue px-3 py-1 rounded-full bg-white border border-brand-ice">
                    Call
                  </span>
                </a>

                {/* WhatsApp Card */}
                <a
                  href={buildWhatsAppLink("Hello S B Real Estate, I would like to enquire about residential rentals.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-2xl bg-brand-orangeLight border border-brand-orange/30 flex items-center justify-between group hover:border-brand-orange transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-orange text-white flex items-center justify-center shadow-orange-glow">
                      <MessageCircle className="w-5 h-5 fill-white/20" />
                    </div>
                    <div>
                      <div className="text-xs text-brand-orangeHover font-bold uppercase tracking-wider">Fastest Response</div>
                      <div className="font-heading font-extrabold text-lg text-brand-navy">
                        Chat on WhatsApp
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-white px-3 py-1 rounded-full bg-brand-orange shadow-sm">
                    Online
                  </span>
                </a>
              </div>

              {/* Address details */}
              <div className="p-6 rounded-3xl bg-white border border-brand-ice shadow-luxury space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-ice text-brand-blue flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-heading font-bold text-sm text-brand-navy">Office Address</h4>
                    <p className="text-sm text-brand-navyMuted leading-relaxed">
                      {BUSINESS_INFO.address.full}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-brand-ice">
                  <div className="w-10 h-10 rounded-xl bg-brand-ice text-brand-navy flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-heading font-bold text-sm text-brand-navy">Operating Schedule</h4>
                    <p className="text-xs sm:text-sm text-brand-navyMuted leading-relaxed">
                      {BUSINESS_INFO.openingInfo.note}
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-blue hover:bg-brand-blueHover text-white font-heading font-bold text-xs uppercase tracking-wider shadow-electric transition-all"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </a>
                </div>
              </div>

              {/* Rating Card */}
              <div className="p-5 rounded-2xl bg-brand-ivory border border-brand-ivoryBorder flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <div>
                    <span className="font-heading font-bold text-sm text-brand-navy">4.9 / 5.0</span>
                    <span className="text-xs text-brand-navyMuted ml-1.5">(157 Google reviews)</span>
                  </div>
                </div>
                <a
                  href={BUSINESS_INFO.rating.googleProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-brand-blue hover:underline"
                >
                  View Profile
                </a>
              </div>
            </div>

            {/* Right: Conversion Form */}
            <div className="lg:col-span-7">
              <EnquiryForm defaultService="Flat Rental" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Embedded Google Maps Representation */}
      <section className="pb-20 lg:pb-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden border-2 border-brand-ice shadow-luxury relative bg-brand-iceLight">
            <div className="p-8 sm:p-12 text-center space-y-4 max-w-xl mx-auto">
              <div className="w-16 h-16 rounded-3xl bg-brand-blue text-white flex items-center justify-center mx-auto shadow-electric">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-brand-navy">
                S B Real Estate — Jeevan Bima Nagar
              </h3>
              <p className="text-sm text-brand-navyMuted">
                #12, 2nd Cross Road, Thimmareddy Colony, Jeevan Bima Nagar, Bengaluru, Karnataka 560075
              </p>
              <div className="pt-2">
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-orange hover:bg-brand-orangeHover text-white font-heading font-bold text-sm shadow-orange-glow transition-all"
                >
                  <span>Open Directions in Google Maps App</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

