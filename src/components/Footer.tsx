import React from 'react';
import { 
  Building2, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Star, 
  Clock, 
  ArrowUpRight, 
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { BUSINESS_INFO, buildWhatsAppLink } from '../data/businessInfo';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLink = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-navy text-white pt-16 pb-28 md:pb-16 border-t border-brand-navyLight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-brand-navyLight">
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-blue flex items-center justify-center text-white shadow-electric">
                <Building2 className="w-5 h-5" />
              </div>
              <span className="font-heading font-extrabold text-2xl tracking-tight text-white">
                S B Real Estate
              </span>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed max-w-md">
              {BUSINESS_INFO.description}
            </p>

            {/* Google rating card */}
            <div className="inline-flex items-center gap-4 p-3.5 rounded-2xl bg-brand-navyLight/60 border border-brand-blue/30 max-w-sm">
              <div className="w-10 h-10 rounded-xl bg-brand-blue/20 flex items-center justify-center text-brand-ice">
                <ShieldCheck className="w-5 h-5 text-brand-ice" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="font-heading font-bold text-sm text-white">
                    {BUSINESS_INFO.rating.score} / 5.0
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-300 mt-0.5">
                  <span>{BUSINESS_INFO.rating.reviewCount} Google reviews</span>
                  <span>•</span>
                  <a
                    href={BUSINESS_INFO.rating.googleProfileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-ice hover:underline inline-flex items-center gap-0.5"
                  >
                    View on Google <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Opening schedule verified info */}
            <div className="flex items-start gap-2.5 text-xs text-gray-300 pt-1">
              <Clock className="w-4 h-4 text-brand-orange mt-0.5 shrink-0" />
              <span>
                Verified Opening Time: Opens at 8:00 AM. Please call or WhatsApp ahead to schedule visits.
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading font-bold text-white text-base">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="/"
                  onClick={(e) => handleLink('/', e)}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  onClick={(e) => handleLink('/about', e)}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/reviews"
                  onClick={(e) => handleLink('/reviews', e)}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Client Reviews
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  onClick={(e) => handleLink('/contact', e)}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact Agency
                </a>
              </li>
            </ul>
          </div>

          {/* Verified Services */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading font-bold text-white text-base">Verified Services</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="/flat-rentals"
                  onClick={(e) => handleLink('/flat-rentals', e)}
                  className="text-gray-300 hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Flat Rentals</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="/home-rentals"
                  onClick={(e) => handleLink('/home-rentals', e)}
                  className="text-gray-300 hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Home Rentals</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="/rental-agreements"
                  onClick={(e) => handleLink('/rental-agreements', e)}
                  className="text-gray-300 hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Rental Agreements</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details & Directions */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-bold text-white text-base">Agency Office</h4>
            
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-orange mt-1 shrink-0" />
                <div>
                  <p className="font-medium text-white">#12, 2nd Cross Road</p>
                  <p>Thimmareddy Colony, Jeevan Bima Nagar</p>
                  <p>Bengaluru, Karnataka 560075, India</p>
                  <a
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-brand-ice font-semibold hover:underline mt-1.5"
                  >
                    Get Directions on Google Maps <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-2">
                <Phone className="w-4 h-4 text-brand-blue shrink-0" />
                <a
                  href={BUSINESS_INFO.phone.telLink}
                  className="text-white hover:text-brand-ice font-semibold"
                >
                  {BUSINESS_INFO.phone.display}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={buildWhatsAppLink("Hello S B Real Estate, I would like to enquire about rental services.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-brand-orange hover:bg-brand-orangeHover text-white font-heading font-bold text-sm shadow-orange-glow transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white/20" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved. Residential Rental Agency in Bengaluru.
          </p>
          <p className="text-gray-400 text-center md:text-right max-w-xl">
            S B Real Estate provides residential rental agency services for flats, homes, and rental agreement coordination. Property availability is subject to physical verification and mutual landlord-tenant agreement.
          </p>
        </div>
      </div>
    </footer>
  );
};

