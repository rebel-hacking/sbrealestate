import React from 'react';
import { motion } from 'framer-motion';
import { 
  Home as HomeIcon, 
  CheckCircle2, 
  Phone, 
  MessageCircle, 
  MapPin, 
  Trees, 
  ShieldCheck, 
  KeyRound, 
  HeartHandshake,
  Layers,
  Sparkles
} from 'lucide-react';
import { BUSINESS_INFO, buildWhatsAppLink } from '../data/businessInfo';
import { IMAGES } from '../data/images';
import { PageHero } from '../components/PageHero';
import { SectionHeader } from '../components/SectionHeader';
import { FaqAccordion, FaqItem } from '../components/FaqAccordion';
import { EnquiryForm } from '../components/EnquiryForm';
import { FadeIn, StaggerContainer, StaggerItem, ScaleIn, MagneticWrapper } from '../components/MotionWrappers';

interface HomeRentalsPageProps {
  onNavigate: (path: string) => void;
}

const HOME_FAQS: FaqItem[] = [
  {
    question: "What distinguishes home rentals from apartment flat rentals?",
    answer:
      "Home rentals typically encompass independent houses, standalone floors, or duplex residences that offer dedicated entryways, privacy, private terrace or garden access, and absence of common apartment maintenance restrictions.",
  },
  {
    question: "In which Bengaluru neighborhoods do you coordinate independent home rentals?",
    answer:
      "Our core operational focus is centered around Jeevan Bima Nagar, Thimmareddy Colony, HAL 2nd and 3rd Stages, Indiranagar, and established residential pockets in East Bengaluru.",
  },
  {
    question: "Can families with pets find suitable independent houses?",
    answer:
      "Yes. Independent homes are often preferred by pet owners. When you submit your requirements, simply mention pets so we coordinate only with welcoming property owners.",
  },
  {
    question: "How is rent and deposit negotiated for independent homes?",
    answer:
      "S B Real Estate facilitates transparent discussions between prospective tenants and home owners. We ensure both parties have clear visibility on rent expectations, deposit timelines, and maintenance responsibilities.",
  },
  {
    question: "Do you coordinate the rental agreement for home rentals as well?",
    answer:
      "Yes, we provide complete rental agreement assistance for all finalized independent house rentals, ensuring mutually agreed terms are cleanly drafted.",
  },
];

export const HomeRentalsPage: React.FC<HomeRentalsPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-0 overflow-hidden">
      {/* Hero */}
      <PageHero
        badge="Independent Residential Homes"
        title="Make Your Next Move Feel Effortless."
        subtitle="Independent houses and residential homes offering space, privacy, and neighborhood tranquility in Bengaluru. Curated to your family's distinct living requirements."
        breadcrumb="Home Rentals"
        imageSrc={IMAGES.independentHome.src}
        imageAlt="Modern independent residential house in a peaceful Bengaluru neighborhood"
        whatsappMessage="Hello S B Real Estate, I am enquiring about independent home rentals in Bengaluru."
        onNavigate={onNavigate}
      />

      {/* 1. Distinctive Editorial Showcase: Why Independent Living */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Mosaic with Warm Ivory backing */}
            <div className="lg:col-span-6 space-y-4">
              <ScaleIn delay={0.15}>
                <div className="p-4 sm:p-6 rounded-3xl bg-brand-ivory border border-brand-ivoryBorder space-y-4 shadow-luxury">
                  <div className="rounded-2xl overflow-hidden aspect-[16/10] shadow-md group">
                    <img
                      src={IMAGES.balconyGarden.src}
                      alt={IMAGES.balconyGarden.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-xl overflow-hidden aspect-[4/3] shadow-sm group">
                      <img
                        src={IMAGES.interiorBedroom.src}
                        alt={IMAGES.interiorBedroom.alt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <motion.div 
                      whileHover={{ y: -3 }}
                      className="p-4 rounded-xl bg-white border border-brand-ice flex flex-col justify-center shadow-sm"
                    >
                      <span className="font-heading font-extrabold text-2xl text-brand-blue">
                        Privacy & Space
                      </span>
                      <span className="text-xs text-brand-navyMuted mt-1">
                        Independent houses tailored for family peace
                      </span>
                    </motion.div>
                  </div>
                </div>
              </ScaleIn>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <FadeIn direction="left">
                <SectionHeader
                  badge="Independent Living"
                  title="A Home That Delivers Space, Quiet & True Privacy"
                  subtitle="For families and executives who prefer standalone homes over multi-unit towers, S B Real Estate coordinates independent residential house searches in Bengaluru's established localities."
                />
              </FadeIn>

              <FadeIn direction="left" delay={0.15}>
                <div className="space-y-4 text-base text-brand-navyMuted leading-relaxed">
                  <p>
                    Independent homes offer an unparalleled sense of ownership and calm: dedicated parking, private access, individual water and electrical provisions, and open balconies or terraces.
                  </p>
                  <p>
                    However, finding verified independent home rentals requires dependable local connections. S B Real Estate bridges this gap by directly coordinating with local house owners across Jeevan Bima Nagar and surrounding neighborhoods.
                  </p>
                </div>
              </FadeIn>

              {/* Distinctive Features */}
              <StaggerContainer className="space-y-3 pt-2">
                <StaggerItem>
                  <motion.div 
                    whileHover={{ y: -3, borderColor: '#2455E8' }}
                    className="flex items-start gap-3.5 p-4 rounded-2xl bg-brand-iceLight border border-brand-ice shadow-sm transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                      <Trees className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="font-heading font-bold text-sm text-brand-navy">Garden and Terrace Space</h5>
                      <p className="text-xs text-brand-navyMuted leading-relaxed mt-0.5">
                        Enjoy private outdoor spaces, fresh air, and peaceful surroundings.
                      </p>
                    </div>
                  </motion.div>
                </StaggerItem>

                <StaggerItem>
                  <motion.div 
                    whileHover={{ y: -3, borderColor: '#2455E8' }}
                    className="flex items-start gap-3.5 p-4 rounded-2xl bg-brand-iceLight border border-brand-ice shadow-sm transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-ice text-brand-blue flex items-center justify-center shrink-0">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="font-heading font-bold text-sm text-brand-navy">Independent Floors or Complete Houses</h5>
                      <p className="text-xs text-brand-navyMuted leading-relaxed mt-0.5">
                        Options tailored for nuclear families, multi-generational households, or executive sharers.
                      </p>
                    </div>
                  </motion.div>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Step-by-Step Home Finding Journey */}
      <section className="py-20 bg-brand-ice/20 border-y border-brand-ice/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <FadeIn direction="up">
            <SectionHeader
              badge="The Home Finding Journey"
              title="How We Help You Settle Into an Independent Home"
              subtitle="A clear, organized pathway from initial enquiry to final agreement handover."
              align="center"
            />
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StaggerItem>
              <motion.div 
                whileHover={{ y: -6, borderColor: '#2455E8' }}
                className="p-8 rounded-3xl bg-white border border-brand-ice shadow-luxury space-y-4 relative hover:shadow-luxury-hover transition-all duration-300 h-full"
              >
                <span className="font-heading font-extrabold text-3xl text-brand-blue/30 block">
                  PHASE 01
                </span>
                <h4 className="font-heading font-bold text-xl text-brand-navy">Requirement Blueprint</h4>
                <p className="text-sm text-brand-navyMuted leading-relaxed">
                  We capture your exact preferences: number of bedrooms, floor preferences, vehicle parking, pet accommodation, and commute targets.
                </p>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.div 
                whileHover={{ y: -6, borderColor: '#2455E8' }}
                className="p-8 rounded-3xl bg-white border border-brand-ice shadow-luxury space-y-4 relative hover:shadow-luxury-hover transition-all duration-300 h-full"
              >
                <span className="font-heading font-extrabold text-3xl text-brand-blue/30 block">
                  PHASE 02
                </span>
                <h4 className="font-heading font-bold text-xl text-brand-navy">Guided Property Visits</h4>
                <p className="text-sm text-brand-navyMuted leading-relaxed">
                  We organize coordinated site visits to physically inspected independent homes, enabling you to assess natural ventilation, neighborhood quality, and layout.
                </p>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.div 
                whileHover={{ y: -6, borderColor: '#FF7138' }}
                className="p-8 rounded-3xl bg-white border border-brand-ice shadow-luxury space-y-4 relative hover:shadow-luxury-hover transition-all duration-300 h-full"
              >
                <span className="font-heading font-extrabold text-3xl text-brand-orange/40 block">
                  PHASE 03
                </span>
                <h4 className="font-heading font-bold text-xl text-brand-navy">Agreement & Handover</h4>
                <p className="text-sm text-brand-navyMuted leading-relaxed">
                  Facilitating smooth dialogue with the homeowner and coordinating the rental agreement so you step into your new home with complete peace of mind.
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
                  badge="Home Rental Enquiry"
                  title="Tell Us About Your Dream Independent Home"
                  subtitle="Submit your criteria below to initiate a requirement-focused search with S B Real Estate in Bengaluru."
                />
              </FadeIn>

              <FadeIn direction="right" delay={0.15}>
                <div className="p-6 rounded-3xl bg-brand-iceLight border border-brand-ice space-y-3 shadow-sm">
                  <div className="flex items-center gap-2 font-heading font-bold text-sm text-brand-navy">
                    <ShieldCheck className="w-5 h-5 text-brand-blue" />
                    <span>Real Assistance, Real Efficiency</span>
                  </div>
                  <p className="text-xs text-brand-navyMuted leading-relaxed">
                    As our Google reviews attest, we are known for getting the work done quickly and responsibly. Let us do the legwork for your residential move.
                  </p>
                </div>
              </FadeIn>

              <FadeIn direction="right" delay={0.25}>
                <div className="pt-2">
                  <MagneticWrapper strength={15}>
                    <a
                      href={buildWhatsAppLink(
                        "Hello S B Real Estate, I am looking for an independent house for rent in Bengaluru. Please connect with me."
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shimmer-btn inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-brand-orange hover:bg-brand-orangeHover text-white font-heading font-bold text-sm shadow-orange-glow transition-all w-full"
                    >
                      <MessageCircle className="w-4 h-4 fill-white/20" />
                      <span>Chat on WhatsApp Directly</span>
                    </a>
                  </MagneticWrapper>
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-7">
              <FadeIn direction="left" delay={0.2}>
                <EnquiryForm defaultService="Home Rental" />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Home Rental FAQs */}
      <section className="py-20 bg-brand-ice/20 border-t border-brand-ice/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <FadeIn direction="up">
            <SectionHeader
              badge="Common Questions"
              title="Independent Home Rental FAQs"
              subtitle="Answers to frequent questions regarding house rentals in Jeevan Bima Nagar and Bengaluru."
              align="center"
            />
          </FadeIn>

          <FaqAccordion items={HOME_FAQS} />

          <FadeIn direction="up">
            <div className="text-center pt-4">
              <a
                href={BUSINESS_INFO.phone.telLink}
                className="inline-flex items-center gap-2 text-xs font-bold text-brand-blue hover:underline"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call our team at {BUSINESS_INFO.phone.display} for personalized guidance</span>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};
