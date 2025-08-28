export default function Tips({ regionName }) {
  const tips = [
    { icon: '🧮', text: 'Count all sources — coffee, tea, energy drinks, chocolate, and some meds/supplements.' },
    { icon: '⏰', text: 'Avoid caffeine within ~6 hours of bedtime to reduce sleep disruption.' },
    { icon: '🤰', text: 'Pregnancy or planning? Keep total caffeine ≤200 mg/day.' },
    { icon: '🧑‍🎓', text: 'Kids/teens: caffeine isn’t recommended. See our “Caffeine & Kids” guide.' },
    { icon: '🫀', text: 'Unfiltered coffee (French press/Turkish) may raise LDL; paper filters help.' },
    { icon: '⚠️', text: 'Too much caffeine can cause jitters, anxiety, palpitations, GI upset; taper slowly to reduce withdrawal headaches.' },
  ];

  return (
    <div className="card rounded-2xl p-5">
      <h3 className="text-xl font-semibold mb-4">Smart tips</h3>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
        {tips.map((t, i) => (
          <div key={i} className="tip">
            <div className="text-2xl">{t.icon}</div>
            <p className="mt-2 text-slate-200">{t.text}</p>
          </div>
        ))}
      </div>
      <p className="small mt-4">Region: {regionName}. This tool is informational only, not medical advice.</p>
    </div>
  );
}
