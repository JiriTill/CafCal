import BlogTeasers from '@/components/BlogTeasers';

export const metadata = {
  title: 'Blog – Caffeine & Coffee Guides',
  description: 'Articles on caffeine limits, sleep timing, pregnancy, kids, and drink content.',
};

export default function BlogIndex() {
  return (
    <main className="container mx-auto container-max p-6 md:p-10 space-y-6">
      <section className="card rounded-3xl p-6 md:p-8">
        <h1>Blog</h1>
        <p className="small mt-2 text-slate-300">
          Evidence-based explainers to help you use caffeine wisely.
        </p>
      </section>

      <BlogTeasers />
    </main>
  );
}
