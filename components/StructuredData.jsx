'use client';
import Script from 'next/script';
import { generateStructuredData } from '@/lib/seo';

export default function StructuredData({ siteUrl }) {
  const data = generateStructuredData(siteUrl);
  return (
    <>
      <Script id="ld-webapp" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(data.webApp)}
      </Script>
      <Script id="ld-breadcrumbs" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(data.breadcrumbs)}
      </Script>
    </>
  );
}
