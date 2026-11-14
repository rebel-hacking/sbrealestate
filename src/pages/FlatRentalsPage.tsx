import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building, 
  CheckCircle2, 
  Phone, 
  MessageCircle, 
  MapPin, 
  ShieldCheck, 
  Users, 
  Briefcase, 
  Home as HomeIcon,
  HelpCircle,
  Clock,
  Compass
} from 'lucide-react';
import { BUSINESS_INFO, buildWhatsAppLink } from '../data/businessInfo';
import { IMAGES } from '../data/images';
import { PageHero } from '../components/PageHero';
import { SectionHeader } from '../components/SectionHeader';
import { FaqAccordion, FaqItem } from '../components/FaqAccordion';
import { EnquiryForm } from '../components/EnquiryForm';
import { FadeIn, StaggerContainer, StaggerItem, ScaleIn, MagneticWrapper } from '../components/MotionWrappers';

interface FlatRentalsPageProps {
  onNavigate: (path: string) => void;
}

const FLAT_FAQS: FaqItem[] = [
  {
    question: "What types of flats do you assist with in Bengaluru?",
    answer:
      "We assist with residential apartments ranging from 1BHK, 2BHK, to 3BHK flats in Jeevan Bima Nagar and surrounding localities. Configurations include fully furnished, semi-furnished, and unfurnished options according to your budget.",
  },
  {
    question: "How do I communicate my flat requirements to S B Real Estate?",
    answer:
      "You can fill out the requirement form on this page, or connect with us directly via WhatsApp or phone call. Simply specify your preferred locality, budget range, BHK configuration, furnishing requirement, and expected move-in date.",
  },
  {
    question: "Are flat viewings arranged before finalizing?",
    answer:
      "Yes. Once we review options that align with your specified criteria, we coordinate in-person property visits with the respective property owners so you can inspect the space firsthand.",
  },
  {
    question: "Do you help with the rental agreement after selecting a flat?",
    answer:
      "Yes, S B Real Estate provides rental agreement assistance to ensure that terms agreed between tenant and owner are clearly documented and coordinated.",
  },
  {
    question: "Are property listings guaranteed to be available immediately?",
    answer:
      "Actual availability is confirmed during direct consultation with the agency, as rental properties move rapidly in Bengaluru. We do not display fabricated or stale inventory.",
  },
];

export const FlatRentalsPage: React.FC<FlatRentalsPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-0 overflow-hidden">
      {/* Hero */}
      <PageHero
        badge="Residential Flat Rentals"
        title="Find a Flat That Fits Your Lifestyle."
        subtitle="Dedicated flat rental assistance across Jeevan Bima Nagar and Bengaluru. Requirement-focused matching for working professionals, individuals, and families."
        breadcrumb="Flat Rentals"
        imageSrc={IMAGES.interiorLiving.src}
        imageAlt="Modern apartment living room with expansive natural light"
        whatsappMessage="Hello S B Real Estate, I would like to enquire about flat rental assistance in Bengaluru."
        onNavigate={onNavigate}
      />

      {/* 1. Service Introduction & Target Audiences */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <FadeIn direction="right">
                <SectionHeader
                  badge="Flat Rental Assistance"
                  title="A Thoughtful Approach to Apartment Renting"
                  subtitle="Whether you are relocating to Bengaluru for a new role or moving to a larger space, we coordinate flat searches centered around your practical needs."
                />
              </FadeIn>

              <FadeIn direction="right" delay={0.15}>
                <div className="space-y-4 text-base text-brand-navyMuted leading-relaxed">
                  <p>
                    Finding an apartment in Bengaluru often involves navigating fragmented portals, outdated listings, or misaligned expectations. At S B Real Estate, we simplify this process by starting with a structured assessment of your lifestyle and requirements.
                  </p>
                  <p>
                    We coordinate with reputable apartment owners in Jeevan Bima Nagar, Indiranagar, HAL, Murugeshpalya, and adjacent residential pockets, arranging guided viewings and transparent communications.
                  </p>
                </div>
              </FadeIn>

              {/* Three user segments */}
              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <StaggerItem>
                  <motion.div 
                    whileHover={{ y: -4, borderColor: '#2455E8' }}
                    className="p-5 rounded-2xl bg-brand-ice/30 border border-brand-ice space-y-2.5 transition-all shadow-sm h-full"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-blue text-white flex items-center justify-center shadow-electric">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <h4 className="font-heading font-bold text-sm text-brand-navy">Working Professionals</h4>
                    <p className="text-xs text-brand-navyMuted leading-relaxed">
                      Strategic commutes to tech parks, quiet workspaces, and flexible furnishing.
                    </p>
                  </motion.div>
                </StaggerItem>

                <StaggerItem>
                  <motion.div 
                    whileHover={{ y: -4, borderColor: '#2455E8' }}
                    className="p-5 rounded-2xl bg-brand-ice/30 border border-brand-ice space-y-2.5 transition-all shadow-sm h-full"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-blue text-white flex items-center justify-center shadow-electric">
                      <Users className="w-4 h-4" />
                    </div>
                    <h4 className="font-heading font-bold text-sm text-brand-navy">Families</h4>
                    <p className="text-xs text-brand-navyMuted leading-relaxed">
                      Spacious 2BHK and 3BHK flats with gated security, parks, and nearby schools.
                    </p>
                  </motion.div>
                </StaggerItem>

                <StaggerItem>
                  <motion.div 
                    whileHover={{ y: -4, borderColor: '#2455E8' }}
                    className="p-5 rounded-2xl bg-brand-ice/30 border border-brand-ice space-y-2.5 transition-all shadow-sm h-full"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-blue text-white flex items-center justify-center shadow-electric">
                      <Compass className="w-4 h-4" />
                    </div>
                    <h4 className="font-heading font-bold text-sm text-brand-navy">Relocating Individuals</h4>
                    <p className="text-xs text-brand-navyMuted leading-relaxed">
                      Smooth orientation, trusted guidance, and seamless rental agreement assistance.
                    </p>
                  </motion.div>
                </StaggerItem>
              </StaggerContainer>
            </div>

            {/* Right Architectural Image */}
            <div className="lg:col-span-5">
              <ScaleIn delay={0.2}>
                <div className="p-4 rounded-3xl bg-brand-iceLight border border-brand-ice space-y-4 shadow-luxury">
                  <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-md group">
                    <img
                      src={IMAGES.modernKitchen.src}
                      alt={IMAGES.modernKitchen.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 rounded-xl bg-white text-xs text-brand-navyMuted space-y-1 border border-brand-ice">
                    <div className="font-bold text-brand-navy flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Requirement-Focused Matching:</span>
                    </div>
                    <p className="leading-relaxed">
                      We check configurations such as modular kitchens, balcony ventilation, parking facilities, and water supply with owners prior to scheduling visits.
                    </p>
                  </div>
                </div>
              </ScaleIn>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Common Customer Requirement Parameters */}
      <section className="py-20 bg-brand-ice/20 border-y border-brand-ice/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <FadeIn direction="up">
            <SectionHeader
              badge="Enquiry Parameters"
              title="How We Filter Flat Options for You"
              subtitle="When you share your flat rental requirements, here are the key factors we evaluate to pinpoint the right home."
              align="center"
            />
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StaggerItem>
              <motion.div 
                whileHover={{ y: -6, borderColor: 'rgba(36, 85, 232, 0.4)' }}
                className="p-6 rounded-3xl bg-white border border-brand-ice shadow-luxury space-y-3 hover:shadow-luxury-hover transition-all duration-300 h-full"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-ice text-brand-blue flex items-center justify-center font-bold">
                  01
                </div>
                <h4 className="font-heading font-bold text-base text-brand-navy">Preferred Locality</h4>
                <p className="text-xs text-brand-navyMuted leading-relaxed">
                  Jeevan Bima Nagar, Indiranagar, HAL 2nd/3rd Stage, Murugeshpalya, Old Airport Road, and surrounding Bengaluru hubs.
                </p>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.div 
                whileHover={{ y: -6, borderColor: 'rgba(36, 85, 232, 0.4)' }}
                className="p-6 rounded-3xl bg-white border border-brand-ice shadow-luxury space-y-3 hover:shadow-luxury-hover transition-all duration-300 h-full"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-ice text-brand-blue flex items-center justify-center font-bold">
                  02
                </div>
                <h4 className="font-heading font-bold text-base text-brand-navy">Budget Range</h4>
                <p className="text-xs text-brand-navyMuted leading-relaxed">
                  Clear monthly rental bracket and realistic security deposit expectations agreed upfront with property owners.
                </p>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.div 
                whileHover={{ y: -6, borderColor: 'rgba(36, 85, 232, 0.4)' }}
                className="p-6 rounded-3xl bg-white border border-brand-ice shadow-luxury space-y-3 hover:shadow-luxury-hover transition-all duration-300 h-full"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-ice text-brand-blue flex items-center justify-center font-bold">
                  03
                </div>
                <h4 className="font-heading font-bold text-base text-brand-navy">Furnishing Level</h4>
                <p className="text-xs text-brand-navyMuted leading-relaxed">
                  Unfurnished flats for long-term setups, semi-furnished with wardrobes & modular kitchens, or fully furnished ready-to-occupy apartments.
                </p>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.div 
                whileHover={{ y: -6, borderColor: 'rgba(36, 85, 232, 0.4)' }}
                className="p-6 rounded-3xl bg-white border border-brand-ice shadow-luxury space-y-3 hover:shadow-luxury-hover transition-all duration-300 h-full"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-ice text-brand-blue flex items-center justify-center font-bold">
                  04
                </div>
                <h4 className="font-heading font-bold text-base text-brand-navy">Move-in Schedule</h4>
                <p className="text-xs text-brand-navyMuted leading-relaxed">
                  Immediate occupation, upcoming 15-day notice transitions, or planned next-month relocations.
                </p>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* 3. Enquiry Form Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <FadeIn direction="right">
                <SectionHeader
                  badge="Flat Rental Form"
                  title="Tell Us Your Ideal Flat Criteria"
                  subtitle="Fill out the parameters below to generate a pre-formatted WhatsApp message directly to our rental coordinator."
                />
              </FadeIn>

              <FadeIn direction="right" delay={0.15}>
                <div className="p-5 rounded-2xl bg-brand-ivory border border-brand-ivoryBorder space-y-2 text-xs text-brand-navyMuted leading-relaxed shadow-sm">
                  <div className="font-bold text-brand-navy flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-brand-blue" />
                    <span>No Fake Inventory Guarantee</span>
                  </div>
                  <p>
                    We do not publish artificial listings to lure enquiries. All details received are matched against active verified properties in our network.
                  </p>
                </div>
              </FadeIn>

              <FadeIn direction="right" delay={0.25}>
                <div className="space-y-3 pt-2">
                  <MagneticWrapper strength={15}>
                    <a
                      href={BUSINESS_INFO.phone.telLink}
                      className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-brand-ice text-brand-navy font-heading font-bold text-sm hover:bg-brand-ice/80 transition-colors w-full"
                    >
                      <Phone className="w-4 h-4 text-brand-blue" />
                      <span>Prefer calling? {BUSINESS_INFO.phone.display}</span>
                    </a>
                  </MagneticWrapper>
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-7">
              <FadeIn direction="left" delay={0.2}>
                <EnquiryForm defaultService="Flat Rental" />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Frequently Asked Questions */}
      <section className="py-20 bg-brand-ice/20 border-t border-brand-ice/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <FadeIn direction="up">
            <SectionHeader
              badge="Frequently Asked Questions"
              title="Questions About Flat Rentals in Bengaluru"
              subtitle="Clear answers about our flat search coordination and client support."
              align="center"
            />
          </FadeIn>

          <FaqAccordion items={FLAT_FAQS} />

          <FadeIn direction="up">
            <div className="text-center pt-4">
              <p className="text-xs text-brand-navyMuted">
                Have another question? Reach us directly on{' '}
                <a
                  href={buildWhatsAppLink("Hello S B Real Estate, I have a question regarding flat rentals.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-orange font-bold hover:underline"
                >
                  WhatsApp (+91 89512 37776)
                </a>
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};
