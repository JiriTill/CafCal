// components/HowTo.jsx
import { IconGlobe, IconUser, IconCoffee, IconClock, IconCalculator } from '@/components/Icons';

export default function HowTo() {
  const steps = [
    { icon: <IconGlobe />, text: 'Choose your region and' },
    { icon: <IconUser />,  text: 'Enter your age.' },
    { icon: <IconCoffee />, text: 'Add each drink you had (espresso, latte, energy drink, tea). You can edit the mg per serving.' },
    { icon: <IconClock />, text: 'Set your usual bedtime — we apply a fixed 6-hour “last-cup” window.' },
    { icon: <IconCalculator />, text: 'Click Calculate. You must enter age and at least one serving. We’ll total your intake and show a clear status.' },
  ];

  return (
    <section className="card rounded-2xl p-6">
      <h2>How to use this caffeine calculator</h2>
      <ol className="pl-0 mt-3 space-y-2 text-slate-200">
        {steps.map((s, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-1">{s.icon}</span>
            <span className="leading-relaxed">{s.text}</span>
          </li>
        ))}
      </ol>
      <p className="small mt-3">Tip: Use the 1/2/3 quick buttons to set servings fast.</p>
    </section>
  );
}
