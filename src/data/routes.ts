export interface RouteMeta {
  path: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  canonical: string;
  keywords: string[];
}

export const ROUTES: Record<string, RouteMeta> = {
  home: {
    path: "/",
    title: "Home",
    metaTitle: "S B Real Estate — Residential Rental Agency in Bengaluru",
    metaDescription:
      "Reliable residential rental agency specializing in smooth, requirement-focused home searches in Jeevan Bima Nagar and Bengaluru. 4.9★ Google rating.",
    canonical: "/",
    keywords: [
      "real estate rental agency Bengaluru",
      "rental agency Jeevan Bima Nagar",
      "flat rentals Bangalore",
      "house for rent Jeevan Bima Nagar",
      "S B Real Estate Bengaluru",
    ],
  },
  about: {
    path: "/about",
    title: "About Us",
    metaTitle: "About S B Real Estate — Trusted Rental Agency in Bengaluru",
    metaDescription:
      "Discover S B Real Estate: our requirement-focused approach, commitment to reliable residential renting, and 4.9-star customer trust in Bengaluru.",
    canonical: "/about",
    keywords: [
      "about S B Real Estate",
      "rental property specialist Bengaluru",
      "real estate broker Jeevan Bima Nagar",
      "reliable house rental agent",
    ],
  },
  flatRentals: {
    path: "/flat-rentals",
    title: "Flat Rentals",
    metaTitle: "Flat Rentals in Bengaluru — S B Real Estate",
    metaDescription:
      "Requirement-focused flat rental assistance in Jeevan Bima Nagar and nearby Bengaluru areas. Tailored for professionals and families. Enquire today.",
    canonical: "/flat-rentals",
    keywords: [
      "flat rentals Jeevan Bima Nagar",
      "apartments for rent Bengaluru",
      "1BHK 2BHK 3BHK flats Bangalore",
      "executive flat rental Bengaluru",
    ],
  },
  homeRentals: {
    path: "/home-rentals",
    title: "Home Rentals",
    metaTitle: "Home Rentals in Bengaluru — S B Real Estate",
    metaDescription:
      "Independent home and house rental guidance in Bengaluru. Thoughtful matching based on location, budget, and family preferences. Contact S B Real Estate.",
    canonical: "/home-rentals",
    keywords: [
      "home rentals Bengaluru",
      "independent house for rent Bangalore",
      "residential house rent Jeevan Bima Nagar",
      "family homes rent Bengaluru",
    ],
  },
  rentalAgreements: {
    path: "/rental-agreements",
    title: "Rental Agreements",
    metaTitle: "Rental Agreement Assistance in Bengaluru — S B Real Estate",
    metaDescription:
      "Straightforward rental agreement assistance and coordination in Bengaluru. Clear paperwork guidance for landlords and tenants.",
    canonical: "/rental-agreements",
    keywords: [
      "rental agreement assistance Bengaluru",
      "house rental agreement Bangalore",
      "tenant agreement Jeevan Bima Nagar",
      "lease agreement paperwork help",
    ],
  },
  reviews: {
    path: "/reviews",
    title: "Customer Reviews",
    metaTitle: "Client Reviews & Ratings (4.9★) — S B Real Estate",
    metaDescription:
      "Read authentic Google reviews and feedback for S B Real Estate. Rated 4.9/5 from 157 Google reviews for reliable, efficient rental assistance.",
    canonical: "/reviews",
    keywords: [
      "S B Real Estate reviews",
      "Google reviews S B Real Estate",
      "best rental broker Bengaluru review",
      "Jeevan Bima Nagar real estate feedback",
    ],
  },
  contact: {
    path: "/contact",
    title: "Contact",
    metaTitle: "Contact S B Real Estate — Jeevan Bima Nagar, Bengaluru",
    metaDescription:
      "Connect with S B Real Estate via WhatsApp, phone, or requirement form. Located at Thimmareddy Colony, Jeevan Bima Nagar, Bengaluru.",
    canonical: "/contact",
    keywords: [
      "contact S B Real Estate",
      "S B Real Estate phone number",
      "S B Real Estate address Jeevan Bima Nagar",
      "rental enquiry Bengaluru",
    ],
  },
};

