
import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  businessName?: string;
  serviceArea?: string;
  services?: string[];
  licenseNumber?: string;
  yearsInBusiness?: number;
}

const SEOHead = ({
  title = "Future Remodeling - Professional Roofing Services in Bergen County, NJ",
  description = "Experienced roofing contractor with 15+ years serving Bergen County. Licensed, insured, and verified by MrXP. Get your free quote today!",
  businessName = "Future Remodeling",
  serviceArea = "Bergen County, New Jersey",
  services = ["Roof Installation", "Roof Repair", "Gutter Installation", "Siding Installation"],
  licenseNumber = "13VH13329600",
  yearsInBusiness = 15
}: SEOHeadProps) => {
  
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Add structured data for Local Business
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "RoofingContractor",
      "name": businessName,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "37a Woodbine Street",
        "addressLocality": "Bergenfield",
        "addressRegion": "NJ",
        "postalCode": "07621",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "40.9276",
        "longitude": "-73.9976"
      },
      "telephone": "+1-XXX-XXX-XXXX",
      "url": "https://futureremodeling.com",
      "areaServed": serviceArea,
      "serviceType": services,
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Professional License",
        "recognizedBy": {
          "@type": "Organization",
          "name": "State of New Jersey"
        }
      },
      "foundingDate": String(new Date().getFullYear() - yearsInBusiness),
      "slogan": "Your Trusted Roofing Expert - Verified by MrXP",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "0",
        "reviewCount": "0"
      }
    };

    // Remove existing structured data
    const existingScript = document.querySelector('script[data-type="structured-data"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-type', 'structured-data');
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Add additional meta tags for SEO
    const metaTags = [
      { name: 'keywords', content: `roofing contractor, ${serviceArea}, licensed roofer, roof repair, roof installation` },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'business.business' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description }
    ];

    metaTags.forEach(tag => {
      const existingTag = document.querySelector(`meta[${tag.name ? 'name' : 'property'}="${tag.name || tag.property}"]`);
      if (existingTag) {
        existingTag.setAttribute('content', tag.content);
      } else {
        const meta = document.createElement('meta');
        if (tag.name) meta.name = tag.name;
        if (tag.property) meta.setAttribute('property', tag.property);
        meta.content = tag.content;
        document.head.appendChild(meta);
      }
    });

  }, [title, description, businessName, serviceArea, services, licenseNumber, yearsInBusiness]);

  return null; // This component only handles head elements
};

export default SEOHead;
