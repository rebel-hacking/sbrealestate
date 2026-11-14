import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Star, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  ExternalLink,
  ArrowRight
} from 'lucide-react';
import { BUSINESS_INFO, buildWhatsAppLink } from '../data/businessInfo';
import { IMAGES } from '../data/images';
import { PageHero } from '../components/PageHero';
import { SectionHeader } from '../components/SectionHeader';
import { TrustBadge } from '../components/TrustBadge';
import { FadeIn, StaggerContainer, StaggerItem, ScaleIn, MagneticWrapper } from '../components/MotionWrappers';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-0 overflow-hidden">
      {/* Hero */}
      <PageHero
        badge="About S B Real Estate"
        title="Local Rental Assistance. A More Straightforward Way to Find Home."
        subtitle="A dedicated residential rental agency in Jeevan Bima Nagar, Bengaluru, built around responsive communication, careful requirement listening, and efficient execution."
        breadcrumb="About Us"
        imageSrc={IMAGES.architecturalFacade.src}
        imageAlt="Modern architectural facade in Bengaluru residential area"
        onNavigate={onNavigate}
      />

      {/* 1. Core Positioning — Editorial Section with Warm Ivory accents */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <FadeIn direction="right">
                <SectionHeader
                  badge="Our Purpose"
                  title="Focused on What You Actually Need in a Rental"
                  subtitle="We believe residential renting in Bengaluru should be straightforward, respectful of your time, and grounded in clear communication."
                />
              </FadeIn>

              <FadeIn direction="right" delay={0.15}>
                <div className="space-y-4 text-base text-brand-navyMuted leading-relaxed">
                  <p>
                    S B Real Estate was established with a clear mandate: to help tenants navigate Bengaluru’s residential rental market with ease and confidence. Rather than acting as a generic listing directory, we operate as a hands-on rental agency that takes the time to understand your individual criteria before suggesting properties.
                  </p>
                  <p>
                    Whether you are seeking a convenient apartment near your workplace, a quiet residential home for your family, or assistance with drafting and executing a transparent rental agreement, our agency coordinates every step with care and accountability.
                  </p>
                </div>
              </FadeIn>

              {/* Service Values */}
              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <StaggerItem>
                  <motion.div 
                    whileHover={{ y: -4, borderColor: '#2455E8' }}
                    className="p-4 rounded-2xl bg-brand-iceLight border border-brand-ice space-y-1 transition-all shadow-sm"
                  >
                    <div className="font-heading font-bold text-brand-navy text-sm flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                      <span>Requirement Listening</span>
                    </div>
                    <p className="text-xs text-brand-navyMuted">
                      We match properties to your budget, preferred move-in date, and family priorities.
                    </p>
                  </motion.div>
                </StaggerItem>

                <StaggerItem>
                  <motion.div 
                    whileHover={{ y: -4, borderColor: '#2455E8' }}
                    className="p-4 rounded-2xl bg-brand-iceLight border border-brand-ice space-y-1 transition-all shadow-sm"
                  >
                    <div className="font-heading font-bold text-brand-navy text-sm flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                      <span>Direct Coordination</span>
                    </div>
                    <p className="text-xs text-brand-navyMuted">
                      Facilitating direct, polite, and constructive discussions with property owners.
                    </p>
                  </motion.div>
                </StaggerItem>
              </StaggerContainer>
            </div>

            <div className="lg:col-span-6">
              <ScaleIn delay={0.2}>
                <div className="p-4 sm:p-6 rounded-3xl bg-brand-ivory border border-brand-ivoryBorder relative shadow-luxury">
                  <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-md group">
                    <img
                      src={IMAGES.balconyGarden.src}
                      alt={IMAGES.balconyGarden.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                  </div>
                  <motion.div 
                    initial={{ y: 0 }}
                    animate={{ y: [-4, 4, -4] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute -bottom-6 -left-6 p-4 rounded-2xl bg-white border border-brand-ice shadow-luxury-hover hidden sm:flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-orange text-white flex items-center justify-center font-bold shadow-sm">
                      ★
                    </div>
                    <div className="text-left">
                      <div className="font-heading font-bold text-sm text-brand-navy">4.9 / 5 Rating</div>
                      <div className="text-xs text-brand-navyMuted">157 Google Reviews</div>
                    </div>
                  </motion.div>
                </div>
              </ScaleIn>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Customer Service Philosophy */}
      <section className="py-20 bg-brand-ice/20 border-y border-brand-ice/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <FadeIn direction="up">
            <SectionHeader
              badge="Customer Service Philosophy"
              title="How We Deliver Value to Renters and Landlords"
              subtitle="Ground rules that guide how S B Real Estate handles every enquiry."
              align="center"
            />
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StaggerItem>
              <motion.div 
                whileHover={{ y: -6, borderColor: 'rgba(36, 85, 232, 0.4)' }}
                className="p-8 rounded-3xl bg-white border border-brand-ice shadow-luxury space-y-4 hover:shadow-luxury-hover transition-all duration-300 h-full"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-ice text-brand-blue flex items-center justify-center font-heading font-extrabold text-xl shadow-sm">
                  01
                </div>
                <h3 className="font-heading font-bold text-xl text-brand-navy">No Fabricated Inventory</h3>
                <p className="text-sm text-brand-navyMuted leading-relaxed">
                  We never showcase non-existent properties or artificial prices. Every option discussed is physically verified and confirmed with property owners.
                </p>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.div 
                whileHover={{ y: -6, borderColor: 'rgba(36, 85, 232, 0.4)' }}
                className="p-8 rounded-3xl bg-white border border-brand-ice shadow-luxury space-y-4 hover:shadow-luxury-hover transition-all duration-300 h-full"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-ice text-brand-blue flex items-center justify-center font-heading font-extrabold text-xl shadow-sm">
                  02
                </div>
                <h3 className="font-heading font-bold text-xl text-brand-navy">Respecting Your Time</h3>
                <p className="text-sm text-brand-navyMuted leading-relaxed">
                  Instead of overwhelming you with endless incompatible options, we filter rigorously according to your stated budget, location, and move-in constraints.
                </p>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.div 
                whileHover={{ y: -6, borderColor: 'rgba(36, 85, 232, 0.4)' }}
                className="p-8 rounded-3xl bg-white border border-brand-ice shadow-luxury space-y-4 hover:shadow-luxury-hover transition-all duration-300 h-full"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-ice text-brand-blue flex items-center justify-center font-heading font-extrabold text-xl shadow-sm">
                  03
                </div>
                <h3 className="font-heading font-bold text-xl text-brand-navy">Prompt Communication</h3>
                <p className="text-sm text-brand-navyMuted leading-relaxed">
                  As reflected in our client feedback, we pride ourselves on being responsible, reachable on WhatsApp and phone, and getting the work done quickly.
                </p>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* 3. Verified Client Reviews Highlight */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <FadeIn direction="right">
              <SectionHeader
                badge="Client Feedback"
                title="Recognized for Responsibility & Efficiency"
                subtitle="Verifiable quotes from our Google reviews profile reflecting our day-to-day commitment to renters."
              />
            </FadeIn>
            <FadeIn direction="left">
              <TrustBadge variant="compact" />
            </FadeIn>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BUSINESS_INFO.reviewHighlights.map((r, i) => (
              <StaggerItem key={i}>
                <motion.div
                  whileHover={{ y: -4, borderColor: 'rgba(36, 85, 232, 0.4)' }}
                  className="p-8 rounded-3xl bg-brand-iceLight border border-brand-ice space-y-4 flex flex-col justify-between hover:shadow-md transition-all h-full"
                >
                  <div className="space-y-3">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-brand-navy font-medium italic text-base leading-relaxed">
                      "{r.quote}"
                    </p>
                  </div>
                  <div className="pt-4 border-t border-brand-ice flex items-center justify-between text-xs text-brand-navyMuted">
                    <span className="font-bold text-brand-blue">{r.context}</span>
                    <span>{r.platform}</span>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn direction="up">
            <div className="text-center pt-4">
              <button
                type="button"
                onClick={() => {
                  onNavigate('/reviews');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 text-brand-blue font-heading font-bold text-sm hover:underline group"
              >
                <span>Read all verified reviews and details</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 4. Verified Location and Opening Details */}
      <section className="py-16 bg-brand-navy text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-brand-ice text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5 text-brand-orange" />
                <span>Our Office Address</span>
              </div>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                Visit Our Agency in Jeevan Bima Nagar
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl">
                {BUSINESS_INFO.address.full}
              </p>
              <div className="flex items-center gap-2 text-xs text-brand-ice pt-1">
                <Clock className="w-4 h-4 text-brand-orange" />
                <span>Verified Google Profile indicates opening at 8:00 AM. Please call or WhatsApp ahead.</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <MagneticWrapper strength={15}>
                <a
                  href={BUSINESS_INFO.phone.telLink}
                  className="shimmer-btn inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-orange hover:bg-brand-orangeHover text-white font-heading font-bold text-sm shadow-orange-glow transition-all w-full"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {BUSINESS_INFO.phone.display}</span>
                </a>
              </MagneticWrapper>

              <MagneticWrapper strength={15}>
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all w-full"
                >
                  <MapPin className="w-4 h-4 text-brand-ice" />
                  <span>View Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1" />
                </a>
              </MagneticWrapper>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
