export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ProFlow",
    "url": "https://proflow.com",
    "logo": "https://proflow.com/logo.png",
    "description": "AI-powered project management software for modern teams"
  }
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "ProFlow",
    "url": "https://proflow.com"
  }
}

export function generateProductSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "ProFlow",
    "applicationCategory": "BusinessApplication",
    "offers": {
      "@type": "Offer",
      "price": "8.00",
      "priceCurrency": "USD"
    }
  }
}

export function generateFAQSchema(items: Array<{question: string; answer: string}>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  }
}
