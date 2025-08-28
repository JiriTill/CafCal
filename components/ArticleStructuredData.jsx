'use client';
import Script from 'next/script';

export default function ArticleStructuredData({
  title,
  description,
  url,
  datePublished,
  dateModified,
  author = 'SuppPlanner',
}) {
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    author: { '@type': 'Organization', name: author },
    publisher: { '@type': 'Organization', name: 'SuppPlanner' },
    mainEntityOfPage: url,
    datePublished,
    dateModified: dateModified || datePublished,
  };
  return (
    <Script id="article-ld" type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(ld)}
    </Script>
  );
}
