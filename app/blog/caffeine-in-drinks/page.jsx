import ArticleStructuredData from '@/components/ArticleStructuredData';

export const metadata = {
  title: 'How much caffeine is in your drink?',
  description: 'Brewed coffee, espresso, instant, tea and energy drinks: typical caffeine ranges and why they vary — with sources.',
};

export default function ArticleCaffeineInDrinks() {
  return (
    <main className="container mx-auto container-max p-6 md:p-10 space-y-6">
      <article className="card rounded-3xl p-6 md:p-8 prose">
        <h1>How much caffeine is in your drink?</h1>
        <p>
          Caffeine content varies more than most people realize. Bean type, roast, grind, brew time,
          water temperature, serving size, and brand all matter. Use these ranges as a guide and adjust
          the calculator’s “mg per serving” to match your usual cup.
        </p>

        <h2>Typical ranges (per serving)</h2>
        <ul>
          <li><strong>Brewed coffee (8&nbsp;oz / 240&nbsp;ml):</strong> ~95&nbsp;mg average; ~75–165&nbsp;mg common.</li>
          <li><strong>Espresso (1&nbsp;oz / 30&nbsp;ml):</strong> ~63&nbsp;mg per shot (some cafés ~75&nbsp;mg).</li>
          <li><strong>Instant coffee (8&nbsp;oz):</strong> ~60–75&nbsp;mg.</li>
          <li><strong>Decaf coffee (8&nbsp;oz):</strong> ~2–5&nbsp;mg.</li>
          <li><strong>Tea (8&nbsp;oz):</strong> black ~47&nbsp;mg (14–70), green ~25&nbsp;mg (24–45).</li>
          <li><strong>Energy drinks:</strong> ~80&nbsp;mg per 8&nbsp;oz; many 12–16&nbsp;oz cans contain 150–240+&nbsp;mg.</li>
        </ul>
        <p className="small">
          Sources: <a href="https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/in-depth/caffeine/art-20049372" target="_blank" rel="noreferrer">Mayo Clinic charts</a>,
          {' '}<a href="https://www.fda.gov/consumers/consumer-updates/spilling-beans-how-much-caffeine-too-much" target="_blank" rel="noreferrer">FDA consumer update</a>,
          {' '}<a href="https://ific.org/wp-content/uploads/2025/04/IFIC_Caffeine_v5.pdf" target="_blank" rel="noreferrer">IFIC caffeine chart (PDF)</a>.
        </p>

        <h2>Unfiltered vs filtered coffee (LDL)</h2>
        <p>
          Unfiltered methods (French press, boiled/Turkish) concentrate cafestol, which can raise LDL cholesterol.
          Paper-filtered coffee reduces this. (<a href="https://academic.oup.com/aje/article/153/4/353/129046" target="_blank" rel="noreferrer">Jee et&nbsp;al., meta-analysis</a>;
          {' '}<a href="https://www.sciencedirect.com/science/article/pii/S0939475321000028" target="_blank" rel="noreferrer">Schoeneck et&nbsp;al., 2021 review</a>)
        </p>

        <h2>Daily budgets and overdose questions</h2>
        <p>
          Most adults should stay at or under <strong>400&nbsp;mg/day</strong>. People often ask:
          <em> can you overdose on 800&nbsp;mg of caffeine?</em> or <em>is 1000&nbsp;mg dangerous?</em>
          Those doses are risky and can cause severe symptoms — do not attempt them.
        </p>

        <h2>Sources</h2>
        <ul>
          <li><a href="https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/in-depth/caffeine/art-20049372" target="_blank" rel="noreferrer">Mayo Clinic — Caffeine content</a></li>
          <li><a href="https://www.fda.gov/consumers/consumer-updates/spilling-beans-how-much-caffeine-too-much" target="_blank" rel="noreferrer">FDA — How Much Caffeine Is Too Much?</a></li>
          <li><a href="https://ific.org/wp-content/uploads/2025/04/IFIC_Caffeine_v5.pdf" target="_blank" rel="noreferrer">IFIC — Caffeine content (PDF)</a></li>
          <li><a href="https://academic.oup.com/aje/article/153/4/353/129046" target="_blank" rel="noreferrer">Jee et&nbsp;al., 2001 — Coffee and serum lipids (meta-analysis)</a></li>
          <li><a href="https://www.sciencedirect.com/science/article/pii/S0939475321000028" target="_blank" rel="noreferrer">Schoeneck et&nbsp;al., 2021 — LDL and foods review</a></li>
        </ul>

        <div className="hr" />
        <p className="small">
          Managing coffee alongside vitamins or pre-workout? <a href="https://suppplan.com" target="_blank" rel="noreferrer">SuppPlanner</a> helps you avoid overlapping stimulants and keep your day organized.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a href="/" className="btn">← Back to Calculator</a>
          <a href="/blog/caffeine-and-sleep" className="btn-secondary">Caffeine & Sleep</a>
          <a href="/blog/caffeine-and-pregnancy" className="btn-secondary">Caffeine & Pregnancy</a>
        </div>
      </article>
    </main>
  );
}
