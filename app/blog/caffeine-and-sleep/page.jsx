import ArticleStructuredData from '@/components/ArticleStructuredData';

export const metadata = {
  title: 'Caffeine & Sleep: What science says',
  description: 'Timing matters: how caffeine disrupts sleep, the 6-hour rule, and practical scheduling tips — with sources.',
};

export default function ArticleSleep() {
  return (
    <main className="container mx-auto container-max p-6 md:p-10 space-y-6">
      <article className="card rounded-3xl p-6 md:p-8 prose">
        <h1>Caffeine & Sleep: What science says</h1>
        <p>
          Caffeine blocks adenosine receptors in the brain, delaying sleepiness and sharpening alertness.
          Late-day caffeine can be a sleep killer. The practical question is: <strong>how late is too late</strong> and
          <strong> how much is too much at once</strong>?
        </p>

        <h2>The 6-hour rule</h2>
        <p>
          A controlled study in the <em>Journal of Clinical Sleep Medicine</em> found that a substantial dose taken even
          <strong> 6 hours before bedtime</strong> still reduced total sleep time and disrupted sleep quality. That’s why
          our calculator sets a fixed 6-hour window for “last-cup time.” (<a href="https://jcsm.aasm.org/doi/10.5664/jcsm.3170" target="_blank" rel="noreferrer">Drake et&nbsp;al., 2013</a>)
        </p>

        <h2>“Is 400 mg too much at once?”</h2>
        <p>
          A single 400&nbsp;mg hit is a lot for most people and increases the odds of side effects (jitters, palpitations, anxiety).
          We suggest ≤200&nbsp;mg per dose, split earlier in the day.
        </p>

        <h2>Half-life and sensitivity</h2>
        <p>
          Caffeine’s half-life is roughly 3–7 hours but varies with genetics, meds (e.g., oral contraceptives, fluvoxamine),
          and smoking. The same latte can affect two people very differently.
        </p>

        <h2>Daily limits</h2>
        <p>
          For healthy adults, a common ceiling is <strong>≤400&nbsp;mg/day</strong>; pregnancy uses <strong>≤200&nbsp;mg/day</strong>.
          (<a href="https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2015.4102" target="_blank" rel="noreferrer">EFSA</a>,{' '}
          <a href="https://www.acog.org/womens-health/experts-and-stories/ask-acog/how-much-coffee-can-i-drink-while-pregnant" target="_blank" rel="noreferrer">ACOG</a>)
        </p>

        <h2>Sources</h2>
        <ul>
          <li><a href="https://jcsm.aasm.org/doi/10.5664/jcsm.3170" target="_blank" rel="noreferrer">Drake et&nbsp;al., 2013 — 0/3/6-hour caffeine timing</a></li>
          <li><a href="https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2015.4102" target="_blank" rel="noreferrer">EFSA Scientific Opinion on the safety of caffeine</a></li>
          <li><a href="https://www.acog.org/womens-health/experts-and-stories/ask-acog/how-much-coffee-can-i-drink-while-pregnant" target="_blank" rel="noreferrer">ACOG — How much coffee can I drink while pregnant?</a></li>
        </ul>

        <div className="hr" />
        <p className="small">
          Track vitamins or performance supplements? <a href="https://suppplan.com" target="_blank" rel="noreferrer">SuppPlanner</a> helps you schedule doses and avoid stimulant overlap.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a href="/" className="btn">← Back to Calculator</a>
          <a href="/blog/caffeine-in-drinks" className="btn-secondary">Caffeine in Drinks</a>
          <a href="/blog/caffeine-and-kids" className="btn-secondary">Caffeine & Kids</a>
        </div>
      </article>
    </main>
  );
}
