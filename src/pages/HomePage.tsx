import React from 'react';
import { 
  Building2, 
  ArrowRight, 
  Phone, 
  MessageCircle, 
  CheckCircle, 
  MapPin, 
  Star, 
  ShieldCheck, 
  Building, 
  Home as HomeIcon, 
  FileText, 
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import { BUSINESS_INFO, buildWhatsAppLink } from '../data/businessInfo';
import { IMAGES } from '../data/images';
import { TrustBadge } from '../components/TrustBadge';
import { SectionHeader } from '../components/SectionHeader';
import { EnquiryForm } from '../components/EnquiryForm';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const handleNav = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToServices = () => {
    const el = document.getElementById('services-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-0">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-iceLight via-white to-white pt-10 pb-20 lg:pt-16 lg:pb-32">
        {/* Subtle decorative architectural grid */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{ backgroundImage: 'radial-gradient(#2455E8 1px, transparent 1px)', backgroundSize: '24px 24px' }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="flex flex-wrap items-center gap-3">
                <TrustBadge variant="hero" />
              </div>

              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-brand-navy tracking-tight leading-[1.12]">
                Find a Place That <br />
                <span className="electric-gradient-text">Feels Like Home.</span>
              </h1>

              <p className="text-lg sm:text-xl text-brand-navyMuted max-w-2xl leading-relaxed">
                Discover rental homes with reliable, requirement-focused assistance from S B Real Estate in Bengaluru.
              </p>

              {/* Verified Services Pills */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-navyMuted mr-1">
                  Verified Services:
                </span>
                <span className="px-3 py-1 rounded-full bg-brand-ice text-brand-blue text-xs font-semibold">
                  Flat Rentals
                </span>
                <span className="px-3 py-1 rounded-full bg-brand-ice text-brand-blue text-xs font-semibold">
                  Home Rentals
                </span>
                <span className="px-3 py-1 rounded-full bg-brand-ice text-brand-blue text-xs font-semibold">
                  Rental Agreements
                </span>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  type="button"
                  onClick={scrollToServices}
                  className="inline-flex items-center gap-2.5 px-6 py-4 rounded-xl bg-brand-blue hover:bg-brand-blueHover text-white font-heading font-bold text-sm shadow-electric hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <span>Explore Rental Services</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={buildWhatsAppLink(
                    "Hello S B Real Estate, I am looking for rental assistance in Bengaluru. Could you please share how we can proceed?"
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-brand-orange hover:bg-brand-orangeHover text-white font-heading font-bold text-sm shadow-orange-glow hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white/20" />
                  <span>WhatsApp Us</span>
                </a>

                <a
                  href={BUSINESS_INFO.phone.telLink}
                  className="inline-flex items-center gap-2 px-5 py-4 rounded-xl bg-white border border-brand-ice hover:bg-brand-iceLight text-brand-navy font-semibold text-sm transition-all"
                >
                  <Phone className="w-4 h-4 text-brand-blue" />
                  <span>Call Now</span>
                </a>
              </div>

              {/* Subtle local trust note */}
              <div className="flex items-center gap-2 text-xs text-brand-navyMuted pt-2">
                <MapPin className="w-3.5 h-3.5 text-brand-orange" />
                <span>
                  Office at #12, 2nd Cross Road, Thimmareddy Colony, Jeevan Bima Nagar, Bengaluru
                </span>
              </div>
            </div>

            {/* Right Architectural Composition */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Hero Image */}
                <div className="relative rounded-3xl overflow-hidden shadow-luxury border-4 border-white aspect-[4/5] bg-gray-100">
                  <img
                    src={IMAGES.heroExterior.src}
                    alt={IMAGES.heroExterior.alt}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent pointer-events-none" />

                  {/* Overlay badge */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-brand-ice">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                          Local Agency
                        </div>
                        <div className="font-heading font-extrabold text-base text-brand-navy">
                          Jeevan Bima Nagar & Bengaluru
                        </div>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-brand-ice flex items-center justify-center text-brand-blue">
                        <Building2 className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Overlapping secondary photo */}
                <div className="hidden sm:block absolute -bottom-8 -left-10 w-48 h-48 rounded-2xl overflow-hidden border-4 border-white shadow-luxury">
                  <img
                    src={IMAGES.interiorLiving.src}
                    alt={IMAGES.interiorLiving.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center pt-12">
          <button
            type="button"
            onClick={scrollToServices}
            className="flex flex-col items-center gap-1 text-xs text-brand-navyMuted hover:text-brand-blue transition-colors focus:outline-none"
            aria-label="Scroll down to services"
          >
            <span>Scroll to explore</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-brand-blue" />
          </button>
        </div>
      </section>

      {/* 2. RENTAL DISCOVERY EDITORIAL SECTION */}
      <section className="py-20 bg-brand-ice/20 border-y border-brand-ice/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <SectionHeader
            badge="Rental Discovery"
            title="Curated Rental Solutions for Every Requirement"
            subtitle="Whether you are an individual relocating for work or a family seeking an independent sanctuary, S B Real Estate helps you discover homes that match your exact living expectations."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Flat Rentals Card */}
            <div className="rounded-3xl bg-white border border-brand-ice overflow-hidden shadow-luxury flex flex-col justify-between group hover:border-brand-blue/30 transition-all duration-300">
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={IMAGES.interiorLiving.src}
                  alt={IMAGES.interiorLiving.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 text-brand-blue font-bold text-xs shadow-sm">
                  Residential Apartments
                </div>
              </div>

              <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-ice flex items-center justify-center text-brand-blue">
                    <Building className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-extrabold text-2xl text-brand-navy">
                    Flat Rentals
                  </h3>
                  <p className="text-sm text-brand-navyMuted leading-relaxed">
                    Requirement-aligned apartments in prime residential areas of Jeevan Bima Nagar and Bengaluru. Options tailored to your budget, preferred furnishings, and expected move-in timeline.
                  </p>
                  <ul className="space-y-2 pt-2 text-xs font-semibold text-brand-navy">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Dedicated support for working professionals & families</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Custom requirement filtering for location & budget</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 border-t border-brand-ice flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => handleNav('/flat-rentals')}
                    className="inline-flex items-center gap-2 text-brand-blue font-heading font-bold text-sm hover:underline"
                  >
                    <span>View Flat Rental Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={buildWhatsAppLink("Hello S B Real Estate, I am enquiring about flat rentals in Bengaluru.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-brand-orange text-white shadow-orange-glow hover:bg-brand-orangeHover transition-colors"
                    title="Enquire on WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4 fill-white/20" />
                  </a>
                </div>
              </div>
            </div>

            {/* Home Rentals Card */}
            <div className="rounded-3xl bg-white border border-brand-ice overflow-hidden shadow-luxury flex flex-col justify-between group hover:border-brand-blue/30 transition-all duration-300">
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={IMAGES.independentHome.src}
                  alt={IMAGES.independentHome.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 text-brand-blue font-bold text-xs shadow-sm">
                  Independent Houses
                </div>
              </div>

              <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-ice flex items-center justify-center text-brand-blue">
                    <HomeIcon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-extrabold text-2xl text-brand-navy">
                    Home Rentals
                  </h3>
                  <p className="text-sm text-brand-navyMuted leading-relaxed">
                    Independent residential houses offering privacy, space, and neighborhood peace. Thoughtfully sourced according to your family preferences and neighborhood proximity.
                  </p>
                  <ul className="space-y-2 pt-2 text-xs font-semibold text-brand-navy">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Spacious residential houses in tranquil localities</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Smooth liaison with verified property owners</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 border-t border-brand-ice flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => handleNav('/home-rentals')}
                    className="inline-flex items-center gap-2 text-brand-blue font-heading font-bold text-sm hover:underline"
                  >
                    <span>View Home Rental Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={buildWhatsAppLink("Hello S B Real Estate, I am enquiring about home rentals in Bengaluru.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-brand-orange text-white shadow-orange-glow hover:bg-brand-orangeHover transition-colors"
                    title="Enquire on WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4 fill-white/20" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT INTRODUCTION */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Column with Warm Ivory background accent */}
            <div className="lg:col-span-6 relative">
              <div className="p-4 sm:p-6 rounded-3xl bg-brand-ivory border border-brand-ivoryBorder">
                <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-luxury">
                  <img
                    src={IMAGES.neighborhoodStreet.src}
                    alt={IMAGES.neighborhoodStreet.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Floating verified badge */}
              <div className="absolute -bottom-6 right-6 sm:right-10 p-5 rounded-2xl bg-white shadow-luxury-hover border border-brand-ice max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue text-white flex items-center justify-center font-heading font-extrabold text-xl shadow-electric">
                    4.9
                  </div>
                  <div>
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-xs font-bold text-brand-navy mt-1">157 Google Reviews</p>
                    <p className="text-[11px] text-brand-navyMuted">Verified Customer Trust</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Copy Column */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <SectionHeader
                badge="About S B Real Estate"
                title="Reliable, Requirement-Focused Home Searches"
                subtitle="Based in Jeevan Bima Nagar, S B Real Estate is committed to simplifying residential renting in Bengaluru through transparent coordination and responsive assistance."
              />

              <div className="space-y-4 text-sm sm:text-base text-brand-navyMuted leading-relaxed">
                <p>
                  Finding the right rental in Bengaluru often feels complex and time-consuming. S B Real Estate takes a requirement-first approach: instead of pushing random options, we listen to your specific location priorities, budget, and timing before guiding you to appropriate options.
                </p>
                <p>
                  As an agency specializing in residential flat rentals, independent home rentals, and rental agreement coordination, our focus is getting the work done quickly, responsibly, and efficiently.
                </p>
              </div>

              {/* Three key pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-4 rounded-2xl bg-brand-iceLight border border-brand-ice">
                  <h4 className="font-heading font-bold text-brand-navy text-sm">Responsive</h4>
                  <p className="text-xs text-brand-navyMuted mt-1">Quick follow-ups via phone and WhatsApp</p>
                </div>
                <div className="p-4 rounded-2xl bg-brand-iceLight border border-brand-ice">
                  <h4 className="font-heading font-bold text-brand-navy text-sm">Efficient</h4>
                  <p className="text-xs text-brand-navyMuted mt-1">Focused matching without wasted visits</p>
                </div>
                <div className="p-4 rounded-2xl bg-brand-iceLight border border-brand-ice">
                  <h4 className="font-heading font-bold text-brand-navy text-sm">Responsible</h4>
                  <p className="text-xs text-brand-navyMuted mt-1">Clear coordination from enquiry to move-in</p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => handleNav('/about')}
                  className="inline-flex items-center gap-2 text-brand-blue font-heading font-bold text-sm hover:underline"
                >
                  <span>Learn more about our agency</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES SHOWCASE (Distinct Layouts) */}
      <section id="services-section" className="py-20 lg:py-28 bg-brand-ice/20 border-y border-brand-ice/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <SectionHeader
            badge="Verified Services"
            title="Three Dedicated Rental Services"
            subtitle="Transparent and focused assistance across the residential rental lifecycle."
            align="center"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Service 1: Flat Rentals */}
            <div className="p-8 rounded-3xl bg-white border border-brand-ice shadow-luxury flex flex-col justify-between hover:border-brand-blue/40 transition-all">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-ice flex items-center justify-center text-brand-blue">
                  <Building className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-extrabold text-2xl text-brand-navy">
                  Flat Rentals
                </h3>
                <p className="text-sm text-brand-navyMuted leading-relaxed">
                  Tailored apartment searches for individuals, working professionals, and families across Jeevan Bima Nagar and neighboring localities.
                </p>
                <div className="p-4 rounded-2xl bg-brand-iceLight text-xs text-brand-navy space-y-1.5">
                  <div className="font-bold text-brand-navy">Key Highlights:</div>
                  <div>• Requirement-aligned 1BHK, 2BHK, 3BHK flat options</div>
                  <div>• Furnished, semi-furnished & unfurnished choices</div>
                  <div>• Direct owner coordination</div>
                </div>
              </div>

              <div className="pt-8 flex items-center justify-between border-t border-brand-ice mt-6">
                <button
                  type="button"
                  onClick={() => handleNav('/flat-rentals')}
                  className="text-xs font-bold uppercase tracking-wider text-brand-blue hover:underline"
                >
                  Explore Flats
                </button>
                <a
                  href={buildWhatsAppLink("Hello S B Real Estate, I would like to enquire about flat rentals.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-orange text-white text-xs font-bold shadow-sm hover:bg-brand-orangeHover transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Enquire</span>
                </a>
              </div>
            </div>

            {/* Service 2: Home Rentals */}
            <div className="p-8 rounded-3xl bg-white border border-brand-ice shadow-luxury flex flex-col justify-between hover:border-brand-blue/40 transition-all">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-ice flex items-center justify-center text-brand-blue">
                  <HomeIcon className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-extrabold text-2xl text-brand-navy">
                  Home Rentals
                </h3>
                <p className="text-sm text-brand-navyMuted leading-relaxed">
                  Independent houses and family residences offering greater independence, yard space, and quiet neighborhood settings.
                </p>
                <div className="p-4 rounded-2xl bg-brand-iceLight text-xs text-brand-navy space-y-1.5">
                  <div className="font-bold text-brand-navy">Key Highlights:</div>
                  <div>• Independent houses and floor units</div>
                  <div>• Suitable for expanding family needs</div>
                  <div>• Assistance with viewing and owner discussion</div>
                </div>
              </div>

              <div className="pt-8 flex items-center justify-between border-t border-brand-ice mt-6">
                <button
                  type="button"
                  onClick={() => handleNav('/home-rentals')}
                  className="text-xs font-bold uppercase tracking-wider text-brand-blue hover:underline"
                >
                  Explore Homes
                </button>
                <a
                  href={buildWhatsAppLink("Hello S B Real Estate, I would like to enquire about home rentals.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-orange text-white text-xs font-bold shadow-sm hover:bg-brand-orangeHover transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Enquire</span>
                </a>
              </div>
            </div>

            {/* Service 3: Rental Agreements */}
            <div className="p-8 rounded-3xl bg-white border border-brand-ice shadow-luxury flex flex-col justify-between hover:border-brand-blue/40 transition-all">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-ice flex items-center justify-center text-brand-blue">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-extrabold text-2xl text-brand-navy">
                  Rental Agreements
                </h3>
                <p className="text-sm text-brand-navyMuted leading-relaxed">
                  Smooth rental agreement documentation coordination ensuring terms agreed between tenant and owner are clearly drafted and executed.
                </p>
                <div className="p-4 rounded-2xl bg-brand-iceLight text-xs text-brand-navy space-y-1.5">
                  <div className="font-bold text-brand-navy">Key Highlights:</div>
                  <div>• Structured documentation assistance</div>
                  <div>• Stamp paper & execution coordination</div>
                  <div>• Clear terms for both landlords & tenants</div>
                </div>
              </div>

              <div className="pt-8 flex items-center justify-between border-t border-brand-ice mt-6">
                <button
                  type="button"
                  onClick={() => handleNav('/rental-agreements')}
                  className="text-xs font-bold uppercase tracking-wider text-brand-blue hover:underline"
                >
                  Agreement Details
                </button>
                <a
                  href={buildWhatsAppLink("Hello S B Real Estate, I need assistance with a rental agreement.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-orange text-white text-xs font-bold shadow-sm hover:bg-brand-orangeHover transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Enquire</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <SectionHeader
            badge="The Customer Journey"
            title="How It Works"
            subtitle="A transparent, step-by-step process designed to help you find and settle into your rental without stress."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 01 */}
            <div className="p-6 rounded-3xl bg-brand-ice/20 border border-brand-ice relative space-y-4">
              <span className="font-heading font-extrabold text-4xl text-brand-blue/30 block">
                01
              </span>
              <h4 className="font-heading font-bold text-lg text-brand-navy">
                Share Your Requirements
              </h4>
              <p className="text-xs text-brand-navyMuted leading-relaxed">
                Tell us your preferred locality, budget range, BHK preference, furnishing needs, and move-in timeline via WhatsApp or our enquiry form.
              </p>
            </div>

            {/* Step 02 */}
            <div className="p-6 rounded-3xl bg-brand-ice/20 border border-brand-ice relative space-y-4">
              <span className="font-heading font-extrabold text-4xl text-brand-blue/30 block">
                02
              </span>
              <h4 className="font-heading font-bold text-lg text-brand-navy">
                Discuss Suitable Options
              </h4>
              <p className="text-xs text-brand-navyMuted leading-relaxed">
                We review current residential opportunities that align with your criteria, avoiding unsuited viewings to respect your valuable time.
              </p>
            </div>

            {/* Step 03 */}
            <div className="p-6 rounded-3xl bg-brand-ice/20 border border-brand-ice relative space-y-4">
              <span className="font-heading font-extrabold text-4xl text-brand-blue/30 block">
                03
              </span>
              <h4 className="font-heading font-bold text-lg text-brand-navy">
                Connect With the Agency
              </h4>
              <p className="text-xs text-brand-navyMuted leading-relaxed">
                Coordinate property visits and engage in clear, direct discussions with property owners facilitated by S B Real Estate.
              </p>
            </div>

            {/* Step 04 */}
            <div className="p-6 rounded-3xl bg-brand-ice/20 border border-brand-ice relative space-y-4">
              <span className="font-heading font-extrabold text-4xl text-brand-orange/40 block">
                04
              </span>
              <h4 className="font-heading font-bold text-lg text-brand-navy">
                Proceed With Rental
              </h4>
              <p className="text-xs text-brand-navyMuted leading-relaxed">
                Finalize mutually agreed terms with rental agreement coordination and move in with confidence and clarity.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-brand-ivory border border-brand-ivoryBorder max-w-2xl mx-auto text-center text-xs text-brand-navyMuted">
            <strong>Transparency Notice:</strong> All rental options and viewings are subject to physical verification and mutual agreement with property owners. Actual availability depends on confirmation by the agency.
          </div>
        </div>
      </section>

      {/* 6. TRUST SECTION (Google Reviews) */}
      <section className="py-20 lg:py-28 bg-brand-navy text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-brand-ice text-xs font-bold uppercase tracking-wider border border-white/20">
              <ShieldCheck className="w-4 h-4 text-brand-ice" />
              <span>Verified Client Trust</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white">
              Rated 4.9/5 Across 157 Google Reviews
            </h2>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-xl mx-auto">
              Real feedback from tenants and clients who experienced our requirement-focused rental assistance firsthand in Bengaluru.
            </p>
          </div>

          {/* Three Supplied Review Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BUSINESS_INFO.reviewHighlights.map((review, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-brand-navyLight/70 border border-white/10 flex flex-col justify-between space-y-6 shadow-luxury"
              >
                <div className="space-y-4">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <blockquote className="text-base sm:text-lg text-white font-medium italic leading-relaxed">
                    "{review.quote}"
                  </blockquote>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-brand-ice block">{review.context}</span>
                    <span className="text-gray-400">{review.platform}</span>
                  </div>
                  <span className="w-6 h-6 rounded-full bg-brand-blue/30 flex items-center justify-center text-brand-ice font-bold">
                    ✓
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Button to Google Business Profile */}
          <div className="text-center pt-4">
            <a
              href={BUSINESS_INFO.rating.googleProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-brand-navy font-heading font-bold text-sm hover:bg-brand-ice transition-all"
            >
              <span>Explore Original Reviews on Google Business Profile</span>
              <ExternalLink className="w-4 h-4 text-brand-blue" />
            </a>
          </div>
        </div>
      </section>

      {/* 7. LOCATION & VERIFIED OFFICE SECTION */}
      <section className="py-20 lg:py-24 bg-white border-b border-brand-ice/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <SectionHeader
                badge="Office Location"
                title="Visit or Connect With S B Real Estate"
                subtitle="Conveniently situated in Jeevan Bima Nagar, serving residential tenants and landlords across Bengaluru."
              />

              <div className="p-6 rounded-3xl bg-brand-iceLight border border-brand-ice space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-blue text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-brand-navy text-sm">Registered Agency Address</h4>
                    <p className="text-xs sm:text-sm text-brand-navyMuted mt-1 leading-relaxed">
                      {BUSINESS_INFO.address.full}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-brand-ice">
                  <div className="w-10 h-10 rounded-xl bg-brand-orange text-white flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-brand-navy text-sm">Direct Contact Number</h4>
                    <a
                      href={BUSINESS_INFO.phone.telLink}
                      className="text-xs sm:text-sm text-brand-blue font-bold hover:underline mt-1 inline-block"
                    >
                      {BUSINESS_INFO.phone.display}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-blue text-white font-heading font-bold text-sm shadow-electric hover:bg-brand-blueHover transition-all"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <a
                  href={BUSINESS_INFO.phone.telLink}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-brand-ice text-brand-navy font-semibold text-sm hover:bg-brand-iceLight transition-all"
                >
                  <Phone className="w-4 h-4 text-brand-blue" />
                  <span>Call Office</span>
                </a>
              </div>
            </div>

            {/* Interactive Map Visual Link */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl overflow-hidden border-2 border-brand-ice shadow-luxury relative bg-brand-iceLight aspect-[16/10]">
                {/* Visual Representation of Map with pin */}
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-ice/80 via-white to-brand-ice/40 flex items-center justify-center p-8">
                  <div className="text-center space-y-4 max-w-md">
                    <div className="w-16 h-16 rounded-3xl bg-brand-blue text-white flex items-center justify-center mx-auto shadow-electric">
                      <MapPin className="w-8 h-8 text-white animate-bounce" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-xl text-brand-navy">
                        S B Real Estate
                      </h4>
                      <p className="text-xs text-brand-navyMuted mt-1">
                        #12, 2nd Cross Road, Thimmareddy Colony, Jeevan Bima Nagar, Bengaluru
                      </p>
                    </div>
                    <a
                      href={BUSINESS_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-brand-orange text-white text-xs font-bold shadow-orange-glow hover:bg-brand-orangeHover transition-all"
                    >
                      <span>View Route on Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA & INLINE ENQUIRY */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-white via-brand-iceLight to-brand-ice/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* CTA copy */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-ice text-brand-blue text-xs font-bold uppercase tracking-wider border border-brand-blue/20">
                <span className="w-2 h-2 rounded-full bg-brand-orange" />
                <span>Start Your Rental Search</span>
              </div>

              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-navy tracking-tight leading-tight">
                Your Next Home Starts With the Right Conversation.
              </h2>

              <p className="text-base sm:text-lg text-brand-navyMuted leading-relaxed max-w-xl">
                Reach out to S B Real Estate today. Tell us what you are looking for, and let us coordinate the search responsibly and efficiently.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={buildWhatsAppLink(
                    "Hello S B Real Estate, I am ready to share my rental requirements in Bengaluru. Please assist me."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-4 rounded-xl bg-brand-orange hover:bg-brand-orangeHover text-white font-heading font-bold text-sm shadow-orange-glow hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white/20" />
                  <span>WhatsApp Us</span>
                </a>

                <a
                  href={BUSINESS_INFO.phone.telLink}
                  className="inline-flex items-center gap-2.5 px-6 py-4 rounded-xl bg-brand-blue hover:bg-brand-blueHover text-white font-heading font-bold text-sm shadow-electric hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>

            {/* Quick Enquiry Form */}
            <div className="lg:col-span-6">
              <EnquiryForm defaultService="Flat Rental" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

