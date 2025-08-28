export const metadata = {
  title: 'Privacy – Caffeine Calculator',
  description:
    'How we handle data and ads. We do not collect personal data; we use aggregate analytics/ads signals only.',
};

export default function PrivacyPage() {
  return (
    <main className="container mx-auto container-max p-6 md:p-10 space-y-6">
      <article className="card rounded-3xl p-6 md:p-8 prose">
        <h1>Privacy Policy</h1>
        <p>
          We designed this tool to be simple and privacy-friendly. We do <strong>not</strong> ask for or store
          personal data. Your inputs (age, drinks) are processed locally to show results.
        </p>

        <h2>Analytics & Ads</h2>
        <p>
          We may use aggregate analytics and advertising signals (e.g., Google Ads/Consent Mode) to
          understand usage and improve the tool. These signals do not include personally identifying information.
        </p>

        <h2>Cookies</h2>
        <p>
          We aim to minimize cookies. If an analytics/ads integration is enabled, we will honor your consent settings.
        </p>

        <h2>Contact</h2>
        <p>
          Questions? Reach us via <a href="https://suppplan.com" target="_blank" rel="noreferrer">SuppPlanner</a>.
        </p>

        <div className="mt-4">
          <a href="/" className="btn">← Back to Calculator</a>
        </div>
      </article>
    </main>
  );
}
