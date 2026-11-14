export interface BusinessInfo {
  name: string;
  category: string;
  tagline: string;
  description: string;
  address: {
    street: string;
    colony: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    full: string;
  };
  phone: {
    display: string;
    raw: string;
    telLink: string;
  };
  whatsapp: {
    rawNumber: string;
    baseLink: string;
  };
  rating: {
    score: number;
    maxScore: number;
    reviewCount: number;
    platform: string;
    googleProfileUrl: string;
  };
  openingInfo: {
    verifiedOpeningTime: string;
    note: string;
  };
  verifiedServices: {
    id: string;
    title: string;
    shortDesc: string;
    slug: string;
  }[];
  reviewHighlights: {
    quote: string;
    platform: string;
    context: string;
  }[];
  googleMapsUrl: string;
}

export const BUSINESS_INFO: BusinessInfo = {
  name: "S B Real Estate",
  category: "Real Estate Rental Agency",
  tagline: "Reliable, Requirement-Focused Home Searches in Bengaluru",
  description:
    "Reliable real estate rental agency specializing in smooth, requirement-focused home searches across Jeevan Bima Nagar and surrounding Bengaluru neighborhoods.",
  address: {
    street: "#12, 2nd Cross Road",
    colony: "Thimmareddy Colony",
    area: "Jeevan Bima Nagar",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "560075",
    country: "India",
    full: "#12, 2nd Cross Road, Thimmareddy Colony, Jeevan Bima Nagar, Bengaluru, Karnataka 560075, India",
  },
  phone: {
    display: "+91 89512 37776",
    raw: "918951237776",
    telLink: "tel:+918951237776",
  },
  whatsapp: {
    rawNumber: "918951237776",
    baseLink: "https://wa.me/918951237776",
  },
  rating: {
    score: 4.9,
    maxScore: 5.0,
    reviewCount: 157,
    platform: "Google Reviews",
    googleProfileUrl: "https://share.google/yo99MyedC7Z9uIwbC",
  },
  openingInfo: {
    verifiedOpeningTime: "8:00 AM",
    note: "Opens at 8:00 AM (Please call or WhatsApp ahead for specific appointment schedules)",
  },
  verifiedServices: [
    {
      id: "flat-rentals",
      title: "Flat Rentals",
      shortDesc: "Curated residential apartments matching your lifestyle, budget, and move-in timeline.",
      slug: "/flat-rentals",
    },
    {
      id: "home-rentals",
      title: "Home Rentals",
      shortDesc: "Independent houses and residential homes tailored for families and working professionals.",
      slug: "/home-rentals",
    },
    {
      id: "rental-agreements",
      title: "Rental Agreements",
      shortDesc: "Straightforward documentation and rental agreement coordination assistance.",
      slug: "/rental-agreements",
    },
  ],
  reviewHighlights: [
    {
      quote: "Good service..I recomend you all to approach S B Real Estate for renting houses",
      platform: "Google Review",
      context: "Verified Tenant Feedback",
    },
    {
      quote: "Responsible person, gets the work done quickly and efficiently.",
      platform: "Google Review",
      context: "Verified Service Experience",
    },
    {
      quote: "I will strongly recommend this agency for all your real estate needs.",
      platform: "Google Review",
      context: "Verified Client Recommendation",
    },
  ],
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=S+B+Real+Estate+%2312+2nd+Cross+Road+Thimmareddy+Colony+Jeevan+Bima+Nagar+Bengaluru+Karnataka+560075",
};

/**
 * Helper to build contextual WhatsApp message links
 */
export function buildWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message.trim());
  return `${BUSINESS_INFO.whatsapp.baseLink}?text=${encoded}`;
}

