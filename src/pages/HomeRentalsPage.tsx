import React from 'react';
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
    <div className="space-y-0">
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
              <div className="p-4 sm:p-6 rounded-3xl bg-brand-ivory border border-brand-ivoryBorder space-y-4">
                <div className="rounded-2xl overflow-hidden aspect-[16/10] shadow-luxury">
                  <img
                    src={IMAGES.balconyGarden.src}
                    alt={IMAGES.balconyGarden.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl overflow-hidden aspect-[4/3] shadow-sm">
                    <img
                      src={IMAGES.interiorBedroom.src}
                      alt={IMAGES.interiorBedroom.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-brand-ice flex flex-col justify-center">
                    <span className="font-heading font-extrabold text-2xl text-brand-blue">
                      Privacy & Space
                    </span>
                    <span className="text-xs text-brand-navyMuted mt-1">
                      Independent houses tailored for family peace
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <SectionHeader
                badge="Independent Living"
                title="A Home That Delivers Space, Quiet & True Privacy"
                subtitle="For families and executives who prefer standalone homes over multi-unit towers, S B Real Estate coordinates independent residential house searches in Bengaluru's established localities."
              />

              <div className="space-y-4 text-base text-brand-navyMuted leading-relaxed">
                <p>
                  Independent homes offer an unparalleled sense of ownership and calm: dedicated parking, private access, individual water and electrical provisions, and open balconies or terraces.
                </p>
                <p>
                  However, finding verified independent home rentals requires dependable local connections. S B Real Estate bridges this gap by directly coordinating with local house owners across Jeevan Bima Nagar and surrounding neighborhoods.
                </p>
              </div>

              {/* Distinctive Features */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-brand-iceLight border border-brand-ice">
                  <Trees className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-heading font-bold text-sm text-brand-navy">Garden and Terrace Space</h5>
                    <p className="text-xs text-brand-navyMuted">
                      Enjoy private outdoor spaces, fresh air, and peaceful surroundings.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-brand-iceLight border border-brand-ice">
                  <Layers className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-heading font-bold text-sm text-brand-navy">Independent Floors or Complete Houses</h5>
                    <p className="text-xs text-brand-navyMuted">
                      Options tailored for nuclear families, multi-generational households, or executive sharers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Step-by-Step Home Finding Journey */}
      <section className="py-20 bg-brand-ice/20 border-y border-brand-ice/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <SectionHeader
            badge="The Home Finding Journey"
            title="How We Help You Settle Into an Independent Home"
            subtitle="A clear, organized pathway from initial enquiry to final agreement handover."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-brand-ice shadow-luxury space-y-4 relative">
              <span className="font-heading font-extrabold text-3xl text-brand-blue/30 block">
                PHASE 01
              </span>
              <h4 className="font-heading font-bold text-xl text-brand-navy">Requirement Blueprint</h4>
              <p className="text-sm text-brand-navyMuted leading-relaxed">
                We capture your exact preferences: number of bedrooms, floor preferences, vehicle parking, pet accommodation, and commute targets.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-brand-ice shadow-luxury space-y-4 relative">
              <span className="font-heading font-extrabold text-3xl text-brand-blue/30 block">
                PHASE 02
              </span>
              <h4 className="font-heading font-bold text-xl text-brand-navy">Guided Property Visits</h4>
              <p className="text-sm text-brand-navyMuted leading-relaxed">
                We organize coordinated site visits to physically inspected independent homes, enabling you to assess natural ventilation, neighborhood quality, and layout.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-brand-ice shadow-luxury space-y-4 relative">
              <span className="font-heading font-extrabold text-3xl text-brand-orange/40 block">
                PHASE 03
              </span>
              <h4 className="font-heading font-bold text-xl text-brand-navy">Agreement & Handover</h4>
              <p className="text-sm text-brand-navyMuted leading-relaxed">
                Facilitating smooth dialogue with the homeowner and coordinating the rental agreement so you step into your new home with complete peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Enquiry Form Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <SectionHeader
                badge="Home Rental Enquiry"
                title="Tell Us About Your Dream Independent Home"
                subtitle="Submit your criteria below to initiate a requirement-focused search with S B Real Estate in Bengaluru."
              />

              <div className="p-6 rounded-3xl bg-brand-iceLight border border-brand-ice space-y-3">
                <div className="flex items-center gap-2 font-heading font-bold text-sm text-brand-navy">
                  <ShieldCheck className="w-5 h-5 text-brand-blue" />
                  <span>Real Assistance, Real Efficiency</span>
                </div>
                <p className="text-xs text-brand-navyMuted leading-relaxed">
                  As our Google reviews attest, we are known for getting the work done quickly and responsibly. Let us do the legwork for your residential move.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={buildWhatsAppLink(
                    "Hello S B Real Estate, I am looking for an independent house for rent in Bengaluru. Please connect with me."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-brand-orange hover:bg-brand-orangeHover text-white font-heading font-bold text-sm shadow-orange-glow transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white/20" />
                  <span>Chat on WhatsApp Directly</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <EnquiryForm defaultService="Home Rental" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Home Rental FAQs */}
      <section className="py-20 bg-brand-ice/20 border-t border-brand-ice/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeader
            badge="Common Questions"
            title="Independent Home Rental FAQs"
            subtitle="Answers to frequent questions regarding house rentals in Jeevan Bima Nagar and Bengaluru."
            align="center"
          />

          <FaqAccordion items={HOME_FAQS} />

          <div className="text-center pt-4">
            <a
              href={BUSINESS_INFO.phone.telLink}
              className="inline-flex items-center gap-2 text-xs font-bold text-brand-blue hover:underline"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call our team at {BUSINESS_INFO.phone.display} for personalized guidance</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

