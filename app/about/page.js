export const metadata = {
  title: 'About – Caffeine Calculator',
  description: 'Why we built this tool, how it works, and our privacy approach.',
};

export default function AboutPage() {
  return (
    <main className="container mx-auto container-max p-6 md:p-10 space-y-6">
      <article className="card rounded-3xl p-6 md:p-8 prose">
        <h1>About this Caffeine Calculator</h1>
        <p>
          We built this tool so anyone can quickly see how much coffee or caffeine is safe per day,
          and when to have the last cup to protect sleep. It’s simple, evidence-informed, and free.
        </p>

        <h2>How it works</h2>
        <ul>
          <li>Enter age and add each drink (espresso, latte, energy drink, tea).</li>
          <li>Toggle pregnancy/trying/breastfeeding for a conservative 200&nbsp;mg/day cap.</li>
          <li>Set bedtime — we show a fixed 6-hour “last-cup” window.</li>
        </ul>

        <h2>Privacy</h2>
        <p>
          We don’t collect personal data. We may use aggregate analytics and advertising signals
          (e.g., Google Ads) to understand usage and improve the tool. Please avoid sharing
          sensitive information.
        </p>

        <h2>Support the project</h2>
        <p>
          We want this tool to remain free and raise awareness about caffeine’s effects. If you’d
          like to support us, consider <a href="https://ko-fi.com" target="_blank" rel="noreferrer">Ko-Fi</a>.
          Thank you!
        </p>

        <div className="hr" />
        <p className="small">
          Built by the SuppPlanner team — helping people plan supplements and daily routines responsibly.
        </p>

        <div className="mt-4">
          <a href="/" className="btn">← Back to Calculator</a>
        </div>
      </article>
    </main>
  );
}
