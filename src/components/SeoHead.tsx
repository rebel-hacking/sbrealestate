import React, { useEffect } from 'react';
import { RouteMeta } from '../data/routes';
import { BUSINESS_INFO } from '../data/businessInfo';

interface SeoHeadProps {
  meta: RouteMeta;
}

export const SeoHead: React.FC<SeoHeadProps> = ({ meta }) => {
  useEffect(() => {
    // 1. Update Title
    document.title = meta.metaTitle;

    // 2. Helper to set/update meta tag
    const setMetaTag = (attr: 'name' | 'property', key: string, content: string) => {
      let element = document.querySelector(`meta[${attr}="${key}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, key);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Standard SEO tags
    setMetaTag('name', 'description', meta.metaDescription);
    setMetaTag('name', 'keywords', meta.keywords.join(', '));
    setMetaTag('name', 'author', BUSINESS_INFO.name);

    // OpenGraph
    setMetaTag('property', 'og:title', meta.metaTitle);
    setMetaTag('property', 'og:description', meta.metaDescription);
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:url', `https://sbrealestate.in${meta.canonical}`);
    setMetaTag('property', 'og:site_name', BUSINESS_INFO.name);
    setMetaTag('property', 'og:image', 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80');

    // Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', `https://sbrealestate.in${meta.canonical}`);

    // Schema.org RealEstateAgent / LocalBusiness structured data
    let schemaScript = document.getElementById('structured-data-business');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'structured-data-business';
      schemaScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(schemaScript);
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "RealEstateAgent",
      "@id": "https://sbrealestate.in/#agency",
      "name": BUSINESS_INFO.name,
      "description": BUSINESS_INFO.description,
      "telephone": "+918951237776",
      "url": "https://sbrealestate.in",
      "sameAs": [BUSINESS_INFO.rating.googleProfileUrl],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": `${BUSINESS_INFO.address.street}, ${BUSINESS_INFO.address.colony}`,
        "addressLocality": `${BUSINESS_INFO.address.area}, ${BUSINESS_INFO.address.city}`,
        "addressRegion": BUSINESS_INFO.address.state,
        "postalCode": BUSINESS_INFO.address.pincode,
        "addressCountry": "IN"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "opens": "08:00",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ]
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": BUSINESS_INFO.rating.score.toString(),
        "bestRating": "5",
        "reviewCount": BUSINESS_INFO.rating.reviewCount.toString()
      }
    };

    schemaScript.textContent = JSON.stringify(structuredData);
  }, [meta]);

  return null;
};

