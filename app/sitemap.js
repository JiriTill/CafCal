// app/sitemap.js
export default async function sitemap() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const staticPages = ['', '/about', '/blog',
    '/blog/how-much-caffeine-per-day',
    '/blog/caffeine-and-pregnancy',
    '/blog/caffeine-and-kids'
  ];
  return staticPages.map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: p === '' ? 1 : 0.7,
  }));
}
