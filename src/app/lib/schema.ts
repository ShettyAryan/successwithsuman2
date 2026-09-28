import { SITE_NAME, SITE_URL } from './site';

// Shared entities reused across every page's JSON-LD @graph so Suman and the
// business resolve to the same node everywhere, and each page stays
// self-contained (fully resolvable on its own, not dependent on another
// page's markup).

export const organizationNode = {
  '@type': 'FinancialService',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/icon-512.png`,
  image: `${SITE_URL}/og-image.jpg`,
  description:
    'Wealth strategy practice run by Suman Manjrekar, serving high-income professionals, doctors and NRIs across India with insurance, mutual fund and retirement planning support.',
  email: 'connect@successwithsuman.com',
  telephone: '+91-91313-13128',
  areaServed: { '@type': 'Country', name: 'India' },
  sameAs: [
    'https://www.instagram.com/successwithsuman',
    'https://www.trustpilot.com/review/successwithsuman.com',
  ],
};

export const personNode = {
  '@type': 'Person',
  '@id': `${SITE_URL}/about/#person`,
  name: 'Suman Manjrekar',
  url: `${SITE_URL}/about`,
  jobTitle: 'Wealth Strategist',
  description:
    'Wealth Strategist to high-income professionals, doctors and founders. IRDA & AMFI certified, with 19+ years in financial services and 7,000+ hours of training.',
  worksFor: { '@id': `${SITE_URL}/#organization` },
  award: 'Top 100 Speakers of India',
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'certification',
      name: 'IRDA Certified Insurance Advisor',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Insurance Regulatory and Development Authority of India (IRDA)',
      },
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'certification',
      name: 'AMFI Registered Mutual Fund Distributor',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Association of Mutual Funds in India (AMFI)',
      },
    },
  ],
  knowsAbout: [
    'Insurance Planning',
    'Wealth Creation',
    'Mutual Funds',
    'Retirement Planning',
    'Estate & Succession Planning',
    'Money Mindset Coaching',
  ],
  sameAs: [
    'https://www.instagram.com/successwithsuman',
    'https://www.trustpilot.com/review/successwithsuman.com',
  ],
};

export function websiteNode() {
  return {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: 'en-IN',
    publisher: { '@id': `${SITE_URL}/#organization` },
  };
}

export function breadcrumbNode(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function serviceNode(opts: { name: string; description: string; serviceType: string }) {
  return {
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    serviceType: opts.serviceType,
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: { '@type': 'Country', name: 'India' },
  };
}

export function faqPageNode(faqs: { q: string; a: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  };
}

export function courseNode() {
  return {
    '@type': 'Course',
    name: 'The MMH Masterclass',
    description:
      "Suman Manjrekar's masterclass on the MMH Formula, Money Management, Mindset, Healing, for building wealth systems that protect, multiply and outlive high-income professionals and doctors.",
    provider: { '@id': `${SITE_URL}/#organization` },
  };
}

export function reviewNodes(reviews: { name: string; quote: string; rating: number }[]) {
  return reviews.map((r) => ({
    '@type': 'Review',
    itemReviewed: { '@id': `${SITE_URL}/#organization` },
    author: { '@type': 'Person', name: r.name },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: r.rating,
      bestRating: 5,
    },
    reviewBody: r.quote,
  }));
}

// Wraps a set of nodes in a single self-contained JSON-LD @graph for one page.
export function buildGraph(nodes: object[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': nodes,
  };
}
