'use client';

import { useMemo, useRef, useState } from 'react';
import ResultCard from '@/components/ResultCard';
import Tips from '@/components/Tips';
import UnitBadge from '@/components/UnitBadge';
import BlogTeasers from '@/components/BlogTeasers';
import SEOSection from '@/components/SEO';
import FAQ from '@/components/FAQ';
import HowTo from '@/components/HowTo';
import CaffeineTable from '@/components/CaffeineTable';
import StructuredData from '@/components/StructuredData';
import Image from 'next/image';
import { IconClipboardList, IconCoffee } from '@/components/Icons';

import DrinksPlanner from '@/components/DrinksPlanner';

import { BEVERAGES } from '@/lib/beverages';
import { REGION_OPTIONS, REGIONS } from '@/lib/regions';
import { toKg } from '@/lib/units';
import { computeDailyCap, computeSingleDose, performanceDose, timeMinusHours } from '@/lib/utils';
import { usePersistentState } from '@/lib/hooks';

export default function Page() {
  // US-first defaults
  const [region, setRegion] = usePersistentState('region', 'US');
  const [age, setAge] = usePersistentState('age', '');
  const [pregnant, setPregnant] = usePersistentState('pregnant', false);

  // Weight optional (performance)
  const [weight, setWeight] = usePersistentState('weight', '');
  const [weightUnit, setWeightUnit] = usePersistentState('weightUnit', 'kg');

  const [bedtime, setBedtime] = usePersistentState('bedtime', '22:00');
  const [volumeUnit, setVolumeUnit] = usePersistentState('volumeUnit', 'floz'); // US-first

  // Multi-beverage rows
  const defaultBev = BEVERAGES.find(b => b.id === 'filter240') || BEVERAGES[0];
  const [drinks, setDrinks] = usePersistentState('drinks',
    [{ bevId: defaultBev.id, mg: defaultBev.caffeineMg, servings: 0 }]
  );

  const [calculated, setCalculated] = useState(false);
  const [errors, setErrors] = useState({});
  const [attempted, setAttempted] = useState(false);
  const resultRef = useRef(null);
  const ageRef = useRef(null);

  // Derived
  const weightProvided = weight !== '' && Number(weight) > 0;
  const weightKg = useMemo(() => (weightProvided ? toKg(weight, weightUnit) : null), [weight, weightUnit, weightProvided]);

  const { capMg, note } = useMemo(
    () => computeDailyCap({ regionId: region, age: Number(age || 0), weightKg: Number(weightKg || 0), pregnant }),
    [region, age, weightKg, pregnant],
  );
  const singleDose = useMemo(() => computeSingleDose(region), [region]);
  const lastCupTime = useMemo(() => timeMinusHours(bedtime, 6), [bedtime]);
  const perf = useMemo(() => (weightProvided ? performanceDose(Number(weightKg)) : null), [weightKg, weightProvided]);

  const intake = useMemo(() => {
    return drinks.map((row) => {
      const bev = BEVERAGES.find(b => b.id === row.bevId) || BEVERAGES[0];
      const total = Math.max(0, Math.round((Number(row.servings) || 0) * (Number(row.mg) || 0)));
      return { name: bev.name, mg: Number(row.mg) || 0, servings: Number(row.servings) || 0, totalMg: total };
    });
  }, [drinks]);

  const servingsTotal = useMemo(() => intake.reduce((s, x) => s + (x.servings || 0), 0), [intake]);
  const plannedMg = useMemo(() => intake.reduce((s, x) => s + x.totalMg, 0), [intake]);

  const isYouth = Number(age || 0) < 18 && Number(age || 0) > 0;
  const showResults = calculated && !isYouth;

  function markDirty() { setCalculated(false); }

  // Region dropdown UI: US first
  const REGION_OPTIONS_UI = useMemo(() => {
    const arr = [...REGION_OPTIONS];
    arr.sort((a, b) => (a.id === 'US' ? -1 : b.id === 'US' ? 1 : 0));
    return arr;
  }, []);

  function validate() {
    const e = {};
    if (age === '' || Number(age) <= 0) e.age = 'Please enter your age.';
    intake.forEach((row, idx) => {
      if (row.mg < 0) e[`mg${idx}`] = 'Caffeine per serving cannot be negative.';
      if (row.servings < 0) e[`serv${idx}`] = 'Servings cannot be negative.';
    });
    if (servingsTotal <= 0) e.servingsAll = 'Add at least one serving (e.g., 1 espresso).';
    setErrors(e);

    // Focus first invalid field
    const keys = Object.keys(e);
    if (keys.length) {
      const first = keys[0];
      setTimeout(() => {
        if (first === 'age') ageRef.current?.focus();
        else {
          const el = document.getElementById(first.replace('mg', 'mg-').replace('serv', 'serv-')) ||
                     document.getElementById('add-serving-anchor');
          el?.focus();
        }
      }, 0);
    }
    return keys.length === 0;
  }

  function onCalculate() {
    setAttempted(true);
    if (validate()) {
      setCalculated(true);
      // Scroll to results
      setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 0);
    } else {
      setCalculated(false);
    }
  }

  function onReset() {
    if (confirm('Reset all inputs?')) {
      setRegion('US'); setAge(''); setPregnant(false);
      setWeight(''); setWeightUnit('kg');
      setBedtime('22:00'); setVolumeUnit('floz');
      setDrinks([{ bevId: defaultBev.id, mg: defaultBev.caffeineMg, servings: 0 }]);
      setCalculated(false); setErrors({}); setAttempted(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  const missingRequired = (!!errors.age || !!errors.servingsAll) ||
                          (attempted && (age === '' || Number(age) <= 0 || servingsTotal <= 0));

  return (
    <main className="container mx-auto container-max p-6 md:p-10 space-y-10">
      <StructuredData siteUrl={process.env.NEXT_PUBLIC_SITE_URL} />

      {/* Hero */}
      <section className="rounded-3xl card p-6 md:p-8 relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10 opacity-50"
          style={{
            background:
              'radial-gradient(600px 200px at 90% -10%, rgba(99,102,241,.35), transparent 60%), radial-gradient(400px 200px at 10% 120%, rgba(56,189,248,.25), transparent 60%)',
          }}
        />

        <div className="grid md:grid-cols-3 gap-4 items-center">
          {/* Left: heading + copy (2/3 width) */}
          <div className="md:col-span-2">
            <h1 className="mb-2">
              Caffeine Calculator: How much coffee can I drink a day?
            </h1>
            <p className="text-slate-300 max-w-2xl leading-relaxed">
              Add each drink you had today (espresso, latte, energy drink, tea). We’ll total your
              <strong> daily caffeine intake</strong>, compare it to a safe budget, and show a
              <strong> last-cup time</strong> that protects sleep. Toggle pregnancy for the
              <strong> 200 mg/day</strong> limit.
            </p>
          </div>

          {/* Right: hero image (1/3 width) */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="/hero-image.png"
              alt="Man and woman with coffee wondering: How much caffeine did I drink today?"
              width={360}
              height={360}
              priority
              className="w-36 h-36 md:w-56 md:h-56 lg:w-64 lg:h-64 object-contain"
            />
          </div>
        </div>
      </section>


      <HowTo />

      {/* Inputs */}
      <section className="card rounded-3xl p-6 md:p-8 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <IconClipboardList />
            <h2>Tell us about you</h2>
          </div>
          <UnitBadge>Units &amp; Region</UnitBadge>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="region" className="label">Region</label>
            <select id="region" className="select" value={region} onChange={(e) => { setRegion(e.target.value); markDirty(); }}>
              {REGION_OPTIONS_UI.map((r) => <option key={r.id} value={r.id}>{r.name}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="age" className="label">Age</label>
            <input
              id="age"
              ref={ageRef}
              className="input"
              type="number"
              min={0}
              value={age}
              onChange={(e) => { setAge(e.target.value); markDirty(); }}
              aria-invalid={!!(attempted && errors.age)}
              aria-describedby={attempted && errors.age ? 'age-err' : undefined}
            />
            {attempted && errors.age && <div id="age-err" className="small text-rose-300 mt-1">{errors.age}</div>}
          </div>
        </div>

        {/* Pregnancy toggle */}
        <div>
          <div className="label mb-2">Pregnancy / Trying / Breastfeeding</div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-pressed={pregnant}
              aria-label="Toggle pregnancy, trying or breastfeeding"
              onClick={() => { setPregnant(!pregnant); markDirty(); }}
              className={`relative w-14 h-8 rounded-full transition ${pregnant ? 'bg-pink-600' : 'bg-slate-700'} focus-visible:ring-2 ring-indigo-400 ring-offset-2 ring-offset-slate-900`}
            >
              <span className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${pregnant ? 'translate-x-6' : ''}`} />
            </button>
            <span className="small">{pregnant ? 'Yes' : 'No'}</span>
          </div>
        </div>

        {/* Stacked fields */}
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label htmlFor="bedtime" className="label">Usual bedtime</label>
            <input id="bedtime" className="input" type="time" value={bedtime} onChange={(e) => { setBedtime(e.target.value); markDirty(); }} />
          </div>
          <div>
            <label className="label">Avoid caffeine within</label>
            <div className="input flex items-center">6&nbsp;<span className="text-slate-300 ml-1">hours (fixed)</span></div>
          </div>
          <div>
            <label htmlFor="vol" className="label">Volume unit</label>
            <select id="vol" className="select" value={volumeUnit} onChange={(e) => { setVolumeUnit(e.target.value); markDirty(); }}>
              <option value="floz">fl oz (US)</option>
              <option value="ml">ml</option>
            </select>
          </div>
        </div>

        <div className="hr" />

        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <IconCoffee />
            <h2>Your drinks today</h2>
            <span className="badge">Running total: <span className="font-semibold ml-1">{plannedMg} mg</span></span>
          </div>
          <UnitBadge>Add one row per type of drink</UnitBadge>
        </div>

        <DrinksPlanner
          drinks={drinks}
          setDrinks={setDrinks}
          volumeUnit={volumeUnit}
          markDirty={markDirty}
          errors={errors}
          anchorId="add-serving-anchor"
        />

        {/* Inline guidance + validation near Calculate */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 pt-2">
          <div className="small text-slate-400" id="add-serving-anchor" tabIndex={-1}>
            Enter your age and add at least one serving. Use quick buttons 1/2/3 to set servings fast.
            {attempted && ((errors.age || errors.servingsAll)) && (
              <div className="text-rose-300 mt-1">
                Please fill your age and add at least one serving before calculating.
              </div>
            )}
          </div>
          <div className="flex items-center gap-3">
            <button className="btn-secondary" type="button" onClick={onReset}>Reset</button>
            <button className="btn" type="button" onClick={onCalculate}>Calculate</button>
          </div>
        </div>

        {Number(age || 0) > 0 && Number(age) < 18 && (
          <div className="alert alert-red mt-4">
            <strong>Not recommended for under 18.</strong> Read our explainer: {' '}
            <a href="/blog/caffeine-and-kids" className="underline">Caffeine & Kids</a>.
          </div>
        )}

        {/* Sticky action bar (mobile only) */}
        <div className="sm:hidden sticky bottom-4 z-20">
          <div className="mx-auto max-w-md rounded-2xl bg-slate-900/80 backdrop-blur border border-slate-700 p-3 flex items-center justify-between">
            <div className="small">
              <div className="text-slate-300">Running total</div>
              <div className="font-semibold">{plannedMg} mg</div>
            </div>
            <button className="btn" type="button" onClick={onCalculate}>Calculate</button>
          </div>
        </div>
      </section>

      {/* Results */}
      <section ref={resultRef} className="space-y-6" aria-live="polite">
        {showResults && (
          <ResultCard
            capMg={capMg}
            note={note}
            singleDose={singleDose}
            bedtime={bedtime}
            lastCupTime={lastCupTime}
            perf={perf}
            plannedMg={plannedMg}
            intake={intake}
            isYouth={false}
          />
        )}
      </section>

      {/* Always-visible content */}
      <Tips regionName={REGIONS[region].name} />
      <CaffeineTable />
      <BlogTeasers />
      <SEOSection />
      <FAQ />
    </main>
  );
}
