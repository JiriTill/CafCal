// lib/seo.js
export function generateStructuredData(siteUrl = 'https://example.com') {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much coffee can I drink a day?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most adults can stay under 400 mg caffeine per day, often ≈4 small (8-oz / 240 ml) coffees."
        }
      },
      {
        "@type": "Question",
        "name": "How much coffee can you have when pregnant?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Use a conservative limit of 200 mg/day in pregnancy."
        }
      },
      {
        "@type": "Question",
        "name": "Is 400 mg of caffeine too much at once?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "400 mg as a single dose is large and may cause side effects; we suggest ≤200 mg per dose."
        }
      },
      {
        "@type": "Question",
        "name": "Can you overdose on 800 mg of caffeine?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "800–1000 mg can be dangerous for many people and may cause severe symptoms. Avoid such doses."
        }
      },
      {
        "@type": "Question",
        "name": "Is 200 mg of caffeine a lot for a kid or teenager?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — caffeine is not recommended for minors. See our article on caffeine & kids."
        }
      }
    ]
  };

  const webApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Caffeine Calculator",
    "applicationCategory": "HealthApplication",
    "operatingSystem": "Web",
    "url": siteUrl,
    "description": "Calculate safe daily caffeine intake based on age, weight, region, and pregnancy status."
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": siteUrl }
    ]
  };

  return { faq, webApp, breadcrumbs };
}
