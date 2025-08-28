'use client';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="text-center small text-slate-400 py-8">
      <nav aria-label="Footer" className="inline-flex items-center gap-3">
        <span>© {year}</span>
        <span>•</span>
        <span>
          Powered by{' '}
          <a href="https://suppplan.com" target="_blank" rel="noreferrer" className="underline">
            SuppPlanner
          </a>
        </span>
        <span>•</span>
        <a href="/about" className="underline">About</a>
        <span>•</span>
        <a href="/blog" className="underline">Blog</a>
        <span>•</span>
        <a href="/privacy" className="underline">Privacy</a>
      </nav>
    </footer>
  );
}

