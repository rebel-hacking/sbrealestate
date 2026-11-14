import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  CheckCircle2, 
  Phone, 
  MessageCircle, 
  AlertCircle, 
  ShieldAlert, 
  FileCheck, 
  HelpCircle,
  FileSpreadsheet,
  Users2
} from 'lucide-react';
import { BUSINESS_INFO, buildWhatsAppLink } from '../data/businessInfo';
import { IMAGES } from '../data/images';
import { PageHero } from '../components/PageHero';
import { SectionHeader } from '../components/SectionHeader';
import { FaqAccordion, FaqItem } from '../components/FaqAccordion';
import { EnquiryForm } from '../components/EnquiryForm';
import { FadeIn, StaggerContainer, StaggerItem, ScaleIn, MagneticWrapper } from '../components/MotionWrappers';

interface RentalAgreementsPageProps {
  onNavigate: (path: string) => void;
}

const AGREEMENT_FAQS: FaqItem[] = [
  {
    question: "What does rental agreement assistance include?",
    answer:
      "Our assistance includes collecting agreed commercial terms between the landlord and tenant (such as monthly rent, security deposit, lock-in period, and notice period), organizing the standard documentation drafting, and coordinating the stamp paper execution process.",
  },
  {
    question: "Does S B Real Estate provide legal advice or legal representation?",
    answer:
      "No. S B Real Estate provides rental agreement documentation coordination and administrative facilitation. We do not provide formal legal advice, legal certification, or legal representation. For specific legal counsel or disputes, consulting an independent legal professional is recommended.",
  },
  {
    question: "What documents are usually required from the landlord and tenant?",
    answer:
      "Typically, both parties provide government photo identification (e.g. Aadhaar card or PAN card), permanent and current address proofs, and basic property ownership / electricity bill details for accurate agreement identification.",
  },
  {
    question: "How long does the rental agreement coordination take?",
    answer:
      "Once both parties have confirmed their terms and supplied the necessary ID details, the standard agreement documentation and execution coordination is typically organized quickly and efficiently.",
  },
  {
    question: "Can I use your agreement assistance if I found my tenant or house independently?",
    answer:
      "Yes. S B Real Estate assists landlords and tenants across Bengaluru who have already agreed on a property and need straightforward, reliable assistance coordinating their rental agreement documentation.",
  },
];

export const RentalAgreementsPage: React.FC<RentalAgreementsPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-0 overflow-hidden">
      {/* Hero */}
      <PageHero
        badge="Documentation Coordination"
        title="Rental Agreements, Made More Straightforward."
        subtitle="Smooth, transparent rental agreement documentation assistance in Bengaluru. Clear paperwork coordination connecting landlords and tenants with efficiency."
        breadcrumb="Rental Agreements"
        imageSrc={IMAGES.rentalAgreement.src}
        imageAlt="Rental agreement documentation and coordination in Bengaluru"
        whatsappMessage="Hello S B Real Estate, I need assistance with a residential rental agreement in Bengaluru."
        onNavigate={onNavigate}
      />

      {/* 1. Transparent Scope & Important Non-Legal Disclaimer */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <FadeIn direction="right">
                <SectionHeader
                  badge="Documentation Support"
                  title="Structured, Hassle-Free Paperwork Coordination"
                  subtitle="Ensure key lease terms, deposit timelines, and notice periods are mutually understood and clearly formatted without administrative frustration."
                />
              </FadeIn>

              <FadeIn direction="right" delay={0.15}>
                <div className="space-y-4 text-base text-brand-navyMuted leading-relaxed">
                  <p>
                    A well-structured rental agreement is the foundation of a peaceful landlord-tenant relationship. However, coordinating stamp papers, formatting clauses accurately, and aligning on dates often leads to unnecessary friction.
                  </p>
                  <p>
                    S B Real Estate acts as a reliable facilitator, helping both parties draft standard residential agreements based on their mutually agreed terms, ensuring all fundamental details are clearly captured.
                  </p>
                </div>
              </FadeIn>

              {/* Crucial Ethical Boundary Alert */}
              <FadeIn direction="right" delay={0.25}>
                <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-900 space-y-2 shadow-sm">
                  <div className="flex items-center gap-2 font-heading font-bold text-sm">
                    <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0" />
                    <span>Administrative Coordination Disclaimer</span>
                  </div>
                  <p className="text-xs leading-relaxed text-amber-800">
                    S B Real Estate provides rental agreement documentation coordination and administrative facilitation. The agency does not provide formal legal representation, legal certifications, or specialized legal advice. Parties requiring complex legal counsel should consult an independent legal practitioner.
                  </p>
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-5">
              <ScaleIn delay={0.2}>
                <div className="p-8 rounded-3xl bg-brand-ice/30 border border-brand-ice shadow-luxury space-y-6">
                  <div className="w-12 h-12 rounded-2xl bg-brand-blue text-white flex items-center justify-center shadow-electric">
                    <FileCheck className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-brand-navy">
                    Standard Agreement Elements
                  </h3>
                  <ul className="space-y-3 text-xs sm:text-sm text-brand-navy">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                      <span>Monthly rental amount and due dates</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                      <span>Security deposit terms and refund protocol</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                      <span>Tenancy tenure and lock-in period clauses</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                      <span>Notice period requirements for either party</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                      <span>Utility bills, maintenance, and fixture inventories</span>
                    </li>
                  </ul>
                </div>
              </ScaleIn>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Three Simple Steps for Agreement Assistance */}
      <section className="py-20 bg-brand-ice/20 border-y border-brand-ice/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <FadeIn direction="up">
            <SectionHeader
              badge="Coordination Process"
              title="How Our Rental Agreement Service Works"
              subtitle="Straightforward three-step process designed for both landlords and tenants."
              align="center"
            />
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StaggerItem>
              <motion.div 
                whileHover={{ y: -6, borderColor: '#2455E8' }}
                className="p-8 rounded-3xl bg-white border border-brand-ice shadow-luxury space-y-4 hover:shadow-luxury-hover transition-all duration-300 h-full"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-ice text-brand-blue flex items-center justify-center font-heading font-extrabold text-xl shadow-sm">
                  01
                </div>
                <h4 className="font-heading font-bold text-xl text-brand-navy">Submit Agreed Terms</h4>
                <p className="text-sm text-brand-navyMuted leading-relaxed">
                  Share key commercial parameters (rent, deposit, lock-in, and notice) along with basic landlord and tenant details over WhatsApp or our enquiry form.
                </p>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.div 
                whileHover={{ y: -6, borderColor: '#2455E8' }}
                className="p-8 rounded-3xl bg-white border border-brand-ice shadow-luxury space-y-4 hover:shadow-luxury-hover transition-all duration-300 h-full"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-ice text-brand-blue flex items-center justify-center font-heading font-extrabold text-xl shadow-sm">
                  02
                </div>
                <h4 className="font-heading font-bold text-xl text-brand-navy">Draft Review</h4>
                <p className="text-sm text-brand-navyMuted leading-relaxed">
                  We organize a standardized draft for both parties to review and confirm, ensuring all names, property details, and numbers are accurate.
                </p>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.div 
                whileHover={{ y: -6, borderColor: '#FF7138' }}
                className="p-8 rounded-3xl bg-white border border-brand-ice shadow-luxury space-y-4 hover:shadow-luxury-hover transition-all duration-300 h-full"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-ice text-brand-blue flex items-center justify-center font-heading font-extrabold text-xl shadow-sm">
                  03
                </div>
                <h4 className="font-heading font-bold text-xl text-brand-navy">Stamp Paper Execution</h4>
                <p className="text-sm text-brand-navyMuted leading-relaxed">
                  Coordination of legal stamp paper printing and execution readiness, allowing quick and hassle-free signing by both parties.
                </p>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* 3. Dedicated Agreement Enquiry Form */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <FadeIn direction="right">
                <SectionHeader
                  badge="Agreement Enquiry"
                  title="Initiate Your Rental Agreement Support"
                  subtitle="Whether you are a landlord or a prospective tenant, share your basic details to start the coordination process."
                />
              </FadeIn>

              <FadeIn direction="right" delay={0.15}>
                <div className="p-6 rounded-3xl bg-brand-ivory border border-brand-ivoryBorder space-y-3 shadow-sm">
                  <div className="font-heading font-bold text-sm text-brand-navy flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                    <span>Fast Turnaround in Bengaluru</span>
                  </div>
                  <p className="text-xs text-brand-navyMuted leading-relaxed">
                    As our verified customer feedback confirms: "Responsible person, gets the work done quickly and efficiently." We prioritize prompt execution.
                  </p>
                </div>
              </FadeIn>

              <FadeIn direction="right" delay={0.25}>
                <div className="pt-2">
                  <MagneticWrapper strength={15}>
                    <a
                      href={BUSINESS_INFO.phone.telLink}
                      className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-brand-ice text-brand-navy font-heading font-bold text-sm hover:bg-brand-ice/80 transition-colors w-full"
                    >
                      <Phone className="w-4 h-4 text-brand-blue" />
                      <span>Call Us: {BUSINESS_INFO.phone.display}</span>
                    </a>
                  </MagneticWrapper>
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-7">
              <FadeIn direction="left" delay={0.2}>
                <EnquiryForm defaultService="Rental Agreement" />
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
              badge="Paperwork FAQs"
              title="Rental Agreement Clarifications"
              subtitle="Straightforward answers regarding documentation coordination in Karnataka."
              align="center"
            />
          </FadeIn>

          <FaqAccordion items={AGREEMENT_FAQS} />
        </div>
      </section>
    </div>
  );
};
