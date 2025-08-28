'use client';
import Script from 'next/script';

const QA = [
  {
    q: 'How much coffee can I drink a day?',
    a: 'Most adults stay under 400 mg caffeine per day (about 4 small coffees).'
  },
  {
    q: 'How much coffee when pregnant?',
    a: 'Use a conservative 200 mg/day cap during pregnancy, trying, or breastfeeding.'
  },
  {
    q: 'Is 400 mg too much at once?',
    a: '400 mg as a single dose is large and may cause side effects; aim for ≤200 mg per dose.'
  },
  {
    q: 'Can you overdose on 800–1000 mg?',
    a: 'Such doses can be dangerous for many people and may cause severe symptoms. Avoid.'
  },
  {
    q: 'Is caffeine ok for kids/teens?',
    a: 'Caffeine isn’t recommended for minors. See our article on caffeine & kids.'
  },
];

export default function FAQ() {
  const faqLD = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: QA.map(x => ({
      '@type': 'Question',
      name: x.q,
      acceptedAnswer: { '@type': 'Answer', text: x.a }
    }))
  };

  return (
    <section className="card rounded-3xl p-6 md:p-8">
      <h2>FAQ</h2>
      <div className="mt-4 space-y-3">
        {QA.map((x, i) => (
          <details key={i} className="rounded-xl border border-slate-800 p-4">
            <summary className="cursor-pointer font-medium">{x.q}</summary>
            <p className="small mt-2 text-slate-300">{x.a}</p>
          </details>
        ))}
      </div>
      <Script id="faq-ld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(faqLD)}
      </Script>
    </section>
  );
}
