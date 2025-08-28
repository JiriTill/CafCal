import ArticleStructuredData from '@/components/ArticleStructuredData';

export const metadata = {
  title: 'How much coffee can I drink while pregnant? (Women & caffeine)',
  description:
    'Pregnancy caffeine limits (≤200 mg/day), side effects of coffee in females, timing tips, and safer swaps — with links to ACOG and EFSA.',
};

export default function ArticlePregnancy() {
  return (
    <main className="container mx-auto container-max p-6 md:p-10 space-y-6">
      <article className="card rounded-3xl p-6 md:p-8 prose">
        <h1>How much coffee can I drink while pregnant? (Women & caffeine)</h1>

        <p>
          Many people ask: <em>How much coffee can I drink a day</em> while pregnant? A conservative and widely used guidance is to limit total
          <strong> caffeine to ≤200&nbsp;mg/day</strong>. That roughly equals two small brewed coffees (8&nbsp;oz / 240&nbsp;ml) or three single espressos,
          depending on strength. Our calculator switches to this cap when you toggle <strong>Pregnancy ON</strong>.
        </p>

        <h2>Why the lower limit during pregnancy?</h2>
        <p>
          Caffeine crosses the placenta and the fetus metabolizes it more slowly. Clinical bodies recommend reducing intake to minimize risks.
          The exact risk profile remains an active research area, so many guidelines take a cautious approach and keep the cap at ≤200&nbsp;mg/day.
          See <a href="https://www.acog.org/womens-health/experts-and-stories/ask-acog/how-much-coffee-can-i-drink-while-pregnant" target="_blank" rel="noreferrer">ACOG</a> and the
          <a href="https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2015.4102" target="_blank" rel="noreferrer"> EFSA scientific opinion</a>.
        </p>

        <h2>Side effects of coffee in females</h2>
        <p>
          Outside pregnancy, many women report increased sensitivity around PMS (e.g., anxiety, sleep disruption, reflux). Oral contraceptives
          can slow caffeine breakdown, so the same drink may feel stronger. If you notice side effects, reduce dose, move caffeine earlier, or
          try paper-filtered coffee (gentler on reflux than some unfiltered methods).
        </p>

        <h2>Practical planning: cups, timing, and swaps</h2>
        <ul>
          <li><strong>Count all sources:</strong> coffee, tea, cola, energy drinks, chocolate, and some medicines/supplements.</li>
          <li><strong>Split doses:</strong> smaller cups earlier in the day feel smoother than one large late dose.</li>
          <li><strong>Protect sleep:</strong> avoid caffeine within ~6 hours of bedtime. Pregnancy sleep is precious.</li>
          <li><strong>Smart swaps:</strong> decaf (2–5&nbsp;mg/8&nbsp;oz), half-caf, or herbal caffeine-free teas. Watch herbal safety in pregnancy.</li>
        </ul>

        <h2>“How much caffeine is dangerous?”</h2>
        <p>
          Large single doses (e.g., ≥400&nbsp;mg at once) can trigger palpitations, tremor, and anxiety — not ideal during pregnancy. Extremely high
          totals (e.g., 800–1000&nbsp;mg) are dangerous for anyone. Stick with ≤200&nbsp;mg/day and consider even less if you’re sensitive.
        </p>

        <h2>Sources</h2>
        <ul>
          <li><a href="https://www.acog.org/womens-health/experts-and-stories/ask-acog/how-much-coffee-can-i-drink-while-pregnant" target="_blank" rel="noreferrer">ACOG — How much coffee can I drink while pregnant?</a></li>
          <li><a href="https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2015.4102" target="_blank" rel="noreferrer">EFSA Scientific Opinion on the safety of caffeine</a></li>
          <li><a href="https://www.fda.gov/consumers/consumer-updates/spilling-beans-how-much-caffeine-too-much" target="_blank" rel="noreferrer">FDA — How Much Caffeine Is Too Much?</a></li>
        </ul>

        <div className="hr" />
        <p className="small">
          Taking prenatal vitamins or other supplements? <a href="https://suppplan.com" target="_blank" rel="noreferrer">SuppPlanner</a> helps you track timing and avoid overlapping stimulants.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a href="/" className="btn">← Back to Calculator</a>
          <a href="/blog/caffeine-and-sleep" className="btn-secondary">Caffeine & Sleep</a>
          <a href="/blog/caffeine-in-drinks" className="btn-secondary">Caffeine in Drinks</a>
        </div>
      </article>
    </main>
  );
}
