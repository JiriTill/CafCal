// app/not-found.jsx
export default function NotFound() {
  return (
    <main className="container mx-auto container-max p-6 md:p-10">
      <section className="card rounded-3xl p-8 text-center space-y-3">
        <h1>Page not found</h1>
        <p className="small">The page you’re looking for doesn’t exist.</p>
        <a href="/" className="btn">← Back to Calculator</a>
      </section>
    </main>
  );
}
