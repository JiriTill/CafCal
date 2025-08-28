import UnitBadge from '@/components/UnitBadge';
import { fmt } from '@/lib/units';
import InfoTooltip from '@/components/InfoTooltip';

function StatusPill({ pct, over }) {
  if (over) return <div className="pill pill-danger">Over limit</div>;
  if (pct >= 90) return <div className="pill pill-warning">Near limit</div>;
  if (pct >= 50) return <div className="pill pill-caution">Caution</div>;
  return <div className="pill pill-safe">Within safe range</div>;
}

export default function ResultCard({
  capMg,
  note,
  singleDose,
  bedtime,
  lastCupTime,
  perf,          // may be null
  plannedMg,
  intake = [],
  isYouth,
  kidsLink = '/blog/caffeine-and-kids',
}) {
  if (isYouth) {
    return (
      <div className="card rounded-2xl p-6 space-y-3">
        <div className="pill pill-danger">Not recommended for under 18</div>
        <div className="alert alert-red mt-2">
          Caffeine use is <strong>not recommended for kids or teenagers</strong>.
          Learn more: <a href={kidsLink} className="underline">Caffeine & Kids</a>.
        </div>
      </div>
    );
  }

  const overBudget = capMg > 0 && plannedMg > capMg;
  const pct = capMg ? Math.min(100, Math.round((plannedMg / capMg) * 100)) : 0;
  const remaining = Math.max(0, capMg - plannedMg);
  const stroke = overBudget ? 'rgb(239,68,68)' : pct >= 90 ? 'rgb(249,115,22)' : pct >= 50 ? 'rgb(245,158,11)' : 'rgb(34,197,94)';

  return (
    <div className={`card rounded-2xl p-6 space-y-5 ${overBudget ? 'border-rose-600/40' : 'border-emerald-600/30'}`}>
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-xl font-semibold">Your Caffeine Status</h3>
        <StatusPill pct={pct} over={overBudget} />
      </div>

      <div className="flex items-start gap-6">
        {/* Progress ring */}
        <div className="relative w-28 h-28 shrink-0">
          <svg className="w-28 h-28 -rotate-90">
            <circle cx="56" cy="56" r="48" stroke="rgb(30,41,59)" strokeWidth="10" fill="none" />
            <circle
              cx="56" cy="56" r="48" stroke={stroke} strokeWidth="10" fill="none"
              strokeDasharray={301.59} strokeDashoffset={301.59 - (301.59 * pct) / 100}
              strokeLinecap="round" className="transition-all duration-700 ease-out"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold">{pct}%</span>
            <span className="text-xs text-slate-400">of limit</span>
          </div>
        </div>

        {/* Budget numbers */}
        <div className="flex-1 grid sm:grid-cols-3 gap-4">
          <div>
            <div className="text-slate-400 text-sm">Daily Budget</div>
            <div className="text-2xl font-semibold">{fmt(capMg)} mg</div>
          </div>
          <div>
            <div className="text-slate-400 text-sm">Current Intake</div>
            <div className={`text-2xl font-semibold ${overBudget ? 'text-rose-300' : ''}`}>{fmt(plannedMg)} mg</div>
          </div>
          <div>
            <div className="text-slate-400 text-sm">Remaining</div>
            <div className={`text-2xl font-semibold ${remaining > 0 ? 'text-emerald-300' : 'text-rose-300'}`}>
              {remaining > 0 ? `${fmt(remaining)} mg` : 'None'}
            </div>
          </div>
        </div>
      </div>

      <div className={`grid ${perf ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-4`}>
        {/* Intake breakdown */}
        <div className="card rounded-xl p-4 md:col-span-1">
          <div className="text-sm text-gray-400 mb-1">Intake breakdown</div>
          {intake.length === 0 ? (
            <div className="small text-slate-400">No drinks added.</div>
          ) : (
            <ul className="space-y-2">
              {intake.map((x, idx) => (
                <li key={idx} className="flex items-center justify-between">
                  <div className="truncate">
                    <div className="font-medium truncate">{x.name}</div>
                    <div className="small text-slate-400">{fmt(x.mg)} mg × {x.servings} =</div>
                  </div>
                  <div className="font-semibold">{fmt(x.totalMg)} mg</div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Sleep protection */}
        <div className="card rounded-xl p-4">
          <div className="text-sm text-gray-400 mb-1">Sleep protection</div>
          <div className="font-medium">Bedtime: {bedtime || '—'}</div>
          <div className="text-2xl font-semibold mt-1">Last cup by {lastCupTime || '—'}
            <InfoTooltip label="To protect sleep, avoid caffeine for at least 6 hours before bedtime." />
          </div>
        </div>

        {/* Performance (optional) */}
        {perf && (
          <div className="card rounded-xl p-4">
            <div className="text-sm text-gray-400 mb-1">Performance (optional)</div>
            <div className="text-2xl font-semibold mt-1">{fmt(perf.low)}–{fmt(perf.high)} mg</div>
            <div className="small mt-1">Target earlier in the day.</div>
          </div>
        )}
      </div>

      {/* Planned vs budget bar + warning */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <div className="text-sm text-gray-400">Planned intake vs. daily budget</div>
          <div className={`text-sm ${overBudget ? 'text-rose-300' : ''}`}>{fmt(plannedMg)} / {fmt(capMg)} mg</div>
        </div>
        <div className="bar-track" role="meter" aria-valuemin={0} aria-valuemax={100} aria-valuenow={pct}>
          <div className={`bar-fill ${overBudget ? 'bar-over' : 'bar-ok'}`} style={{ width: `${pct}%` }} />
        </div>
        {overBudget && (
          <div className="mt-2 alert alert-red">
            ⚠️ You’re over the recommended daily budget by <strong>{fmt(plannedMg - capMg)} mg</strong>.
            Reduce servings or choose a lower-caffeine drink.
          </div>
        )}
      </div>

      <div className="small text-slate-300">
        <UnitBadge>{note}</UnitBadge> · Single dose comfort: ≤ {fmt(singleDose)} mg
        <InfoTooltip label="As a comfort guideline, many adults prefer doses ≤200 mg at once to avoid jitters." />
      </div>
    </div>
  );
}
