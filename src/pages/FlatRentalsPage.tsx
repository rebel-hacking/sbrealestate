import React from 'react';
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
    <div className="space-y-0">
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
              <SectionHeader
                badge="Flat Rental Assistance"
                title="A Thoughtful Approach to Apartment Renting"
                subtitle="Whether you are relocating to Bengaluru for a new role or moving to a larger space, we coordinate flat searches centered around your practical needs."
              />

              <div className="space-y-4 text-base text-brand-navyMuted leading-relaxed">
                <p>
                  Finding an apartment in Bengaluru often involves navigating fragmented portals, outdated listings, or misaligned expectations. At S B Real Estate, we simplify this process by starting with a structured assessment of your lifestyle and requirements.
                </p>
                <p>
                  We coordinate with reputable apartment owners in Jeevan Bima Nagar, Indiranagar, HAL, Murugeshpalya, and adjacent residential pockets, arranging guided viewings and transparent communications.
                </p>
              </div>

              {/* Three user segments */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-5 rounded-2xl bg-brand-ice/30 border border-brand-ice space-y-2">
                  <div className="w-9 h-9 rounded-xl bg-brand-blue text-white flex items-center justify-center">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <h4 className="font-heading font-bold text-sm text-brand-navy">Working Professionals</h4>
                  <p className="text-xs text-brand-navyMuted">
                    Strategic commutes to tech parks, quiet workspaces, and flexible furnishing.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-brand-ice/30 border border-brand-ice space-y-2">
                  <div className="w-9 h-9 rounded-xl bg-brand-blue text-white flex items-center justify-center">
                    <Users className="w-4 h-4" />
                  </div>
                  <h4 className="font-heading font-bold text-sm text-brand-navy">Families</h4>
                  <p className="text-xs text-brand-navyMuted">
                    Spacious 2BHK and 3BHK flats with gated security, parks, and nearby schools.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-brand-ice/30 border border-brand-ice space-y-2">
                  <div className="w-9 h-9 rounded-xl bg-brand-blue text-white flex items-center justify-center">
                    <Compass className="w-4 h-4" />
                  </div>
                  <h4 className="font-heading font-bold text-sm text-brand-navy">Relocating Individuals</h4>
                  <p className="text-xs text-brand-navyMuted">
                    Smooth orientation, trusted guidance, and seamless rental agreement assistance.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Architectural Image */}
            <div className="lg:col-span-5">
              <div className="p-4 rounded-3xl bg-brand-iceLight border border-brand-ice space-y-4">
                <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-luxury">
                  <img
                    src={IMAGES.modernKitchen.src}
                    alt={IMAGES.modernKitchen.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 rounded-xl bg-white text-xs text-brand-navyMuted space-y-1">
                  <div className="font-bold text-brand-navy">Requirement-Focused Matching:</div>
                  <p>
                    We check configurations such as modular kitchens, balcony ventilation, parking facilities, and water supply with owners prior to scheduling visits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Common Customer Requirement Parameters */}
      <section className="py-20 bg-brand-ice/20 border-y border-brand-ice/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <SectionHeader
            badge="Enquiry Parameters"
            title="How We Filter Flat Options for You"
            subtitle="When you share your flat rental requirements, here are the key factors we evaluate to pinpoint the right home."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-brand-ice shadow-luxury space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-ice text-brand-blue flex items-center justify-center font-bold">
                01
              </div>
              <h4 className="font-heading font-bold text-base text-brand-navy">Preferred Locality</h4>
              <p className="text-xs text-brand-navyMuted leading-relaxed">
                Jeevan Bima Nagar, Indiranagar, HAL 2nd/3rd Stage, Murugeshpalya, Old Airport Road, and surrounding Bengaluru hubs.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-brand-ice shadow-luxury space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-ice text-brand-blue flex items-center justify-center font-bold">
                02
              </div>
              <h4 className="font-heading font-bold text-base text-brand-navy">Budget Range</h4>
              <p className="text-xs text-brand-navyMuted leading-relaxed">
                Clear monthly rental bracket and realistic security deposit expectations agreed upfront with property owners.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-brand-ice shadow-luxury space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-ice text-brand-blue flex items-center justify-center font-bold">
                03
              </div>
              <h4 className="font-heading font-bold text-base text-brand-navy">Furnishing Level</h4>
              <p className="text-xs text-brand-navyMuted leading-relaxed">
                Unfurnished flats for long-term setups, semi-furnished with wardrobes & modular kitchens, or fully furnished ready-to-occupy apartments.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-brand-ice shadow-luxury space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-ice text-brand-blue flex items-center justify-center font-bold">
                04
              </div>
              <h4 className="font-heading font-bold text-base text-brand-navy">Move-in Schedule</h4>
              <p className="text-xs text-brand-navyMuted leading-relaxed">
                Immediate occupation, upcoming 15-day notice transitions, or planned next-month relocations.
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
                badge="Flat Rental Form"
                title="Tell Us Your Ideal Flat Criteria"
                subtitle="Fill out the parameters below to generate a pre-formatted WhatsApp message directly to our rental coordinator."
              />

              <div className="p-5 rounded-2xl bg-brand-ivory border border-brand-ivoryBorder space-y-2 text-xs text-brand-navyMuted leading-relaxed">
                <div className="font-bold text-brand-navy flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-brand-blue" />
                  <span>No Fake Inventory Guarantee</span>
                </div>
                <p>
                  We do not publish artificial listings to lure enquiries. All details received are matched against active verified properties in our network.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <a
                  href={BUSINESS_INFO.phone.telLink}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-brand-ice text-brand-navy font-heading font-bold text-sm hover:bg-brand-ice/80 transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand-blue" />
                  <span>Prefer calling? {BUSINESS_INFO.phone.display}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <EnquiryForm defaultService="Flat Rental" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Frequently Asked Questions */}
      <section className="py-20 bg-brand-ice/20 border-t border-brand-ice/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeader
            badge="Frequently Asked Questions"
            title="Questions About Flat Rentals in Bengaluru"
            subtitle="Clear answers about our flat search coordination and client support."
            align="center"
          />

          <FaqAccordion items={FLAT_FAQS} />

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
        </div>
      </section>
    </div>
  );
};

