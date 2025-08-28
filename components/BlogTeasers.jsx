export default function BlogTeasers() {
  const posts = [
    {
      slug: '/blog/caffeine-and-kids',
      tag: 'Parents’ Guide',
      title: 'Caffeine & Kids: Why it’s not recommended',
      blurb: 'Why minors should avoid caffeine, with references from public-health agencies.',
    },
    {
      slug: '/blog/caffeine-and-sleep',
      tag: 'Sleep',
      title: 'Caffeine & Sleep: What science says',
      blurb: 'The 6-hour rule, half-life, and smart timing strategies for better nights.',
    },
    {
      slug: '/blog/caffeine-in-drinks',
      tag: 'Know your mg',
      title: 'How much caffeine is in your drink?',
      blurb: 'Brewed, espresso, instant, tea, energy drinks — typical ranges & why they vary.',
    },
    {
      slug: '/blog/caffeine-and-pregnancy',
      tag: 'Women & Pregnancy',
      title: 'How much coffee can I drink while pregnant?',
      blurb: 'Pregnancy caffeine limits, side effects in females, and practical swaps — with sources.',
    },
  ];

  return (
    <div className="space-y-3">
      <h3 className="text-xl font-semibold">From the blog</h3>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
        {posts.map((p) => (
          <a key={p.slug} href={p.slug} className="card rounded-2xl p-4 hover:border-indigo-500 transition">
            <div className="text-sm text-indigo-300 mb-1">{p.tag}</div>
            <div className="font-semibold">{p.title}</div>
            <div className="small mt-1">{p.blurb}</div>
            <div className="small mt-2">Read more →</div>
          </a>
        ))}
      </div>
    </div>
  );
}
