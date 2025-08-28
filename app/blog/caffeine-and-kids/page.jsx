import ArticleStructuredData from '@/components/ArticleStructuredData';

export const metadata = {
  title: 'Caffeine & Kids: Why it’s not recommended',
  description: 'What health authorities say about caffeine for children and teens, risks, and safer alternatives — with sources.',
};

export default function ArticleKids() {
  return (
    <main className="container mx-auto container-max p-6 md:p-10 space-y-6">
      <article className="card rounded-3xl p-6 md:p-8 prose">
        <h1>Caffeine & Kids: Why it’s not recommended</h1>
        <p>
          Energy drinks on store shelves, espresso-based beverages in every mall, and sodas at parties
          make <strong>caffeine</strong> easy for children and teenagers to access. But major public-health bodies
          urge caution. Unlike adults, growing bodies and brains are more sensitive to stimulants:
          smaller body mass means a given dose produces a higher concentration, and adolescents already face
          biologically driven shifts in sleep that caffeine can easily worsen.
        </p>

        <h2>What official guidance says</h2>
        <ul>
          <li>
            <strong>Health Canada</strong> uses an informational ceiling of <strong>2.5&nbsp;mg/kg/day</strong> for children
            and adolescents, not as a target but a <em>maximum</em>. See Health Canada’s references and decision summaries.
            (<a href="https://www.canada.ca/en/health-canada/services/food-nutrition/food-safety/food-additives/caffeine-foods.html" target="_blank" rel="noreferrer">Caffeine in Foods</a>;
             <a href="https://www.canada.ca/en/health-canada/services/food-nutrition/food-safety/food-additives/caffeine-foods/summary-basis-decision-allow-use-carbonated-soft-drinks.html" target="_blank" rel="noreferrer">Summary of Decision</a>)
          </li>
          <li>
            Pediatric groups advise <strong>avoiding energy drinks</strong> for minors, highlighting large doses and added stimulants.
            (<a href="https://caringforkids.cps.ca/handouts/healthy-living/energy-drinks-and-sports-drinks" target="_blank" rel="noreferrer">Canadian Paediatric Society</a>)
          </li>
        </ul>

        <h2>Common questions from parents</h2>
        <ul>
          <li><strong>Is 200 mg of caffeine a lot for a 12-year-old?</strong> Yes — we do not recommend caffeine for minors.</li>
          <li><strong>Are “pre-workout” products okay for teens?</strong> Many contain caffeine and other stimulants. Avoid.</li>
        </ul>

        <h2>Better options</h2>
        <p>
          Encourage water, milk, and decaf or caffeine-free drinks. If your teen wants the café ritual,
          <strong>decaf</strong> or <strong>half-caf</strong> plus smaller sizes can help. Prioritize sleep hygiene:
          a consistent schedule, morning light, and screens off before bed.
        </p>

        <h2>Sources</h2>
        <ul>
          <li><a href="https://www.canada.ca/en/health-canada/services/food-nutrition/food-safety/food-additives/caffeine-foods.html" target="_blank" rel="noreferrer">Health Canada — Caffeine in Foods</a></li>
          <li><a href="https://www.canada.ca/en/health-canada/services/food-nutrition/food-safety/food-additives/caffeine-foods/summary-basis-decision-allow-use-carbonated-soft-drinks.html" target="_blank" rel="noreferrer">Health Canada — Summary of Decision</a></li>
          <li><a href="https://caringforkids.cps.ca/handouts/healthy-living/energy-drinks-and-sports-drinks" target="_blank" rel="noreferrer">Canadian Paediatric Society — Energy & Sports Drinks</a></li>
        </ul>

        <div className="hr" />
        <p className="small">
          If your family uses vitamins or other supplements, <a href="https://suppplan.com" target="_blank" rel="noreferrer">SuppPlanner</a> can help you organize doses and check for caffeine-containing products.
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
