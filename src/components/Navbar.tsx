import React, { useState, useEffect, useRef } from 'react';
import { 
  Building2, 
  ChevronDown, 
  Phone, 
  Menu, 
  X, 
  MessageCircle, 
  Star, 
  Home as HomeIcon, 
  Building, 
  FileText, 
  Info, 
  MessageSquare, 
  ArrowRight
} from 'lucide-react';
import { BUSINESS_INFO, buildWhatsAppLink } from '../data/businessInfo';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLinkClick = (path: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isServicesActive = ['/flat-rentals', '/home-rentals', '/rental-agreements'].includes(currentPath);

  return (
    <>
      {/* Top verified bar */}
      <div className="bg-brand-navy text-white text-xs py-2 px-4 border-b border-brand-navyLight">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a 
              href={BUSINESS_INFO.rating.googleProfileUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-brand-ice transition-colors"
            >
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-bold">{BUSINESS_INFO.rating.score}★ Google Rating</span>
              <span className="text-gray-300 hidden sm:inline">({BUSINESS_INFO.rating.reviewCount} verified reviews)</span>
            </a>
            <span className="text-gray-500 hidden md:inline">•</span>
            <span className="text-gray-300 hidden md:inline">
              Jeevan Bima Nagar, Bengaluru
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium">
            <span className="text-gray-300 hidden lg:inline">
              {BUSINESS_INFO.openingInfo.note}
            </span>
            <a
              href={BUSINESS_INFO.phone.telLink}
              className="inline-flex items-center gap-1.5 text-white hover:text-brand-ice transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-brand-orange" />
              <span>{BUSINESS_INFO.phone.display}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-luxury py-3 border-b border-brand-ice/60'
            : 'bg-white py-4 border-b border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => handleLinkClick('/', e)}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-brand-blue flex items-center justify-center text-white shadow-electric group-hover:scale-105 transition-transform duration-300">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-extrabold text-xl tracking-tight text-brand-navy">
                  S B Real Estate
                </span>
                <span className="w-2 h-2 rounded-full bg-brand-orange"></span>
              </div>
              <p className="text-[10px] tracking-wider uppercase font-semibold text-brand-navyMuted">
                Residential Rental Agency
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <a
              href="/"
              onClick={(e) => handleLinkClick('/', e)}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                currentPath === '/'
                  ? 'text-brand-blue bg-brand-ice/40'
                  : 'text-brand-navy hover:text-brand-blue hover:bg-gray-50'
              }`}
            >
              Home
            </a>

            <a
              href="/about"
              onClick={(e) => handleLinkClick('/about', e)}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                currentPath === '/about'
                  ? 'text-brand-blue bg-brand-ice/40'
                  : 'text-brand-navy hover:text-brand-blue hover:bg-gray-50'
              }`}
            >
              About
            </a>

            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                aria-expanded={servicesDropdownOpen}
                className={`px-3 py-2 rounded-lg text-sm font-semibold inline-flex items-center gap-1.5 transition-colors ${
                  isServicesActive
                    ? 'text-brand-blue bg-brand-ice/40'
                    : 'text-brand-navy hover:text-brand-blue hover:bg-gray-50'
                }`}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesDropdownOpen ? 'rotate-180 text-brand-blue' : 'text-gray-400'
                  }`}
                />
              </button>

              {servicesDropdownOpen && (
                <div
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                  className="absolute left-0 mt-1 w-64 rounded-2xl bg-white border border-brand-ice shadow-luxury-hover p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                >
                  <a
                    href="/flat-rentals"
                    onClick={(e) => handleLinkClick('/flat-rentals', e)}
                    className={`flex items-start gap-3 p-3 rounded-xl transition-all ${
                      currentPath === '/flat-rentals'
                        ? 'bg-brand-ice/50 text-brand-blue'
                        : 'hover:bg-brand-iceLight text-brand-navy'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-brand-ice flex items-center justify-center text-brand-blue mt-0.5">
                      <Building className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-heading font-bold text-sm">Flat Rentals</div>
                      <p className="text-xs text-brand-navyMuted mt-0.5">
                        Apartments tailored to personal requirements
                      </p>
                    </div>
                  </a>

                  <a
                    href="/home-rentals"
                    onClick={(e) => handleLinkClick('/home-rentals', e)}
                    className={`flex items-start gap-3 p-3 rounded-xl transition-all ${
                      currentPath === '/home-rentals'
                        ? 'bg-brand-ice/50 text-brand-blue'
                        : 'hover:bg-brand-iceLight text-brand-navy'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-brand-ice flex items-center justify-center text-brand-blue mt-0.5">
                      <HomeIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-heading font-bold text-sm">Home Rentals</div>
                      <p className="text-xs text-brand-navyMuted mt-0.5">
                        Independent houses for families & professionals
                      </p>
                    </div>
                  </a>

                  <a
                    href="/rental-agreements"
                    onClick={(e) => handleLinkClick('/rental-agreements', e)}
                    className={`flex items-start gap-3 p-3 rounded-xl transition-all ${
                      currentPath === '/rental-agreements'
                        ? 'bg-brand-ice/50 text-brand-blue'
                        : 'hover:bg-brand-iceLight text-brand-navy'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-brand-ice flex items-center justify-center text-brand-blue mt-0.5">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-heading font-bold text-sm">Rental Agreements</div>
                      <p className="text-xs text-brand-navyMuted mt-0.5">
                        Straightforward documentation assistance
                      </p>
                    </div>
                  </a>
                </div>
              )}
            </div>

            <a
              href="/reviews"
              onClick={(e) => handleLinkClick('/reviews', e)}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                currentPath === '/reviews'
                  ? 'text-brand-blue bg-brand-ice/40'
                  : 'text-brand-navy hover:text-brand-blue hover:bg-gray-50'
              }`}
            >
              Reviews
            </a>

            <a
              href="/contact"
              onClick={(e) => handleLinkClick('/contact', e)}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                currentPath === '/contact'
                  ? 'text-brand-blue bg-brand-ice/40'
                  : 'text-brand-navy hover:text-brand-blue hover:bg-gray-50'
              }`}
            >
              Contact
            </a>
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={BUSINESS_INFO.phone.telLink}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-brand-navy font-semibold text-sm hover:text-brand-blue hover:bg-brand-ice/40 transition-colors"
            >
              <Phone className="w-4 h-4 text-brand-blue" />
              <span>Call Now</span>
            </a>

            <a
              href={buildWhatsAppLink(
                "Hello S B Real Estate, I am looking for rental assistance in Bengaluru. Could you please share how we can proceed?"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-orange hover:bg-brand-orangeHover text-white font-heading font-bold text-sm shadow-orange-glow hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={buildWhatsAppLink("Hello S B Real Estate, I would like to enquire about residential rentals.")}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-brand-orange text-white shadow-orange-glow"
              aria-label="WhatsApp S B Real Estate"
            >
              <MessageCircle className="w-5 h-5 fill-white/20" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-brand-navy hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-blue"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-brand-navy/60 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              {/* Drawer header */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-brand-blue flex items-center justify-center text-white">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <span className="font-heading font-bold text-brand-navy">S B Real Estate</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 rounded-lg text-gray-500 hover:bg-gray-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Verified rating in mobile */}
              <div className="mt-4 p-3 rounded-xl bg-brand-ice/50 border border-brand-blue/20">
                <div className="flex items-center gap-2">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <span className="font-bold text-xs text-brand-navy">
                    {BUSINESS_INFO.rating.score} / 5.0
                  </span>
                </div>
                <p className="text-[11px] text-brand-navyMuted mt-1">
                  Based on {BUSINESS_INFO.rating.reviewCount} verified Google reviews
                </p>
              </div>

              {/* Navigation Links */}
              <nav className="mt-6 space-y-1">
                <a
                  href="/"
                  onClick={(e) => handleLinkClick('/', e)}
                  className={`flex items-center justify-between p-3 rounded-xl font-semibold text-sm ${
                    currentPath === '/'
                      ? 'bg-brand-blue text-white'
                      : 'text-brand-navy hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <HomeIcon className="w-4 h-4" />
                    <span>Home</span>
                  </div>
                  <ArrowRight className="w-4 h-4 opacity-70" />
                </a>

                <a
                  href="/about"
                  onClick={(e) => handleLinkClick('/about', e)}
                  className={`flex items-center justify-between p-3 rounded-xl font-semibold text-sm ${
                    currentPath === '/about'
                      ? 'bg-brand-blue text-white'
                      : 'text-brand-navy hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Info className="w-4 h-4" />
                    <span>About Us</span>
                  </div>
                  <ArrowRight className="w-4 h-4 opacity-70" />
                </a>

                <div className="pt-2 pb-1 px-3 text-xs font-bold uppercase tracking-wider text-brand-navyMuted">
                  Services
                </div>

                <a
                  href="/flat-rentals"
                  onClick={(e) => handleLinkClick('/flat-rentals', e)}
                  className={`flex items-center justify-between p-3 rounded-xl font-semibold text-sm ml-2 ${
                    currentPath === '/flat-rentals'
                      ? 'bg-brand-blue text-white'
                      : 'text-brand-navy hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Building className="w-4 h-4" />
                    <span>Flat Rentals</span>
                  </div>
                  <ArrowRight className="w-4 h-4 opacity-70" />
                </a>

                <a
                  href="/home-rentals"
                  onClick={(e) => handleLinkClick('/home-rentals', e)}
                  className={`flex items-center justify-between p-3 rounded-xl font-semibold text-sm ml-2 ${
                    currentPath === '/home-rentals'
                      ? 'bg-brand-blue text-white'
                      : 'text-brand-navy hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <HomeIcon className="w-4 h-4" />
                    <span>Home Rentals</span>
                  </div>
                  <ArrowRight className="w-4 h-4 opacity-70" />
                </a>

                <a
                  href="/rental-agreements"
                  onClick={(e) => handleLinkClick('/rental-agreements', e)}
                  className={`flex items-center justify-between p-3 rounded-xl font-semibold text-sm ml-2 ${
                    currentPath === '/rental-agreements'
                      ? 'bg-brand-blue text-white'
                      : 'text-brand-navy hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <FileText className="w-4 h-4" />
                    <span>Rental Agreements</span>
                  </div>
                  <ArrowRight className="w-4 h-4 opacity-70" />
                </a>

                <div className="pt-2"></div>

                <a
                  href="/reviews"
                  onClick={(e) => handleLinkClick('/reviews', e)}
                  className={`flex items-center justify-between p-3 rounded-xl font-semibold text-sm ${
                    currentPath === '/reviews'
                      ? 'bg-brand-blue text-white'
                      : 'text-brand-navy hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-4 h-4" />
                    <span>Customer Reviews</span>
                  </div>
                  <ArrowRight className="w-4 h-4 opacity-70" />
                </a>

                <a
                  href="/contact"
                  onClick={(e) => handleLinkClick('/contact', e)}
                  className={`flex items-center justify-between p-3 rounded-xl font-semibold text-sm ${
                    currentPath === '/contact'
                      ? 'bg-brand-blue text-white'
                      : 'text-brand-navy hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4" />
                    <span>Contact</span>
                  </div>
                  <ArrowRight className="w-4 h-4 opacity-70" />
                </a>
              </nav>
            </div>

            {/* Mobile drawer actions */}
            <div className="pt-6 border-t border-gray-100 space-y-3">
              <a
                href={BUSINESS_INFO.phone.telLink}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-brand-ice text-brand-navy font-heading font-bold text-sm hover:bg-brand-ice/80 transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-blue" />
                <span>Call {BUSINESS_INFO.phone.display}</span>
              </a>

              <a
                href={buildWhatsAppLink(
                  "Hello S B Real Estate, I am looking for rental assistance in Bengaluru. Could you please assist me?"
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-brand-orange text-white font-heading font-bold text-sm shadow-orange-glow hover:bg-brand-orangeHover transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

