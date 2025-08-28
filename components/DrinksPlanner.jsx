import { BEVERAGES } from '@/lib/beverages';
import { convertVolume, fmt } from '@/lib/units';

export default function DrinksPlanner({ drinks, setDrinks, volumeUnit = 'ml', markDirty, errors = {}, anchorId }) {
  function update(i, patch) {
    const next = [...drinks];
    next[i] = { ...next[i], ...patch };
    setDrinks(next); markDirty?.();
  }
  function addRow() {
    const def = BEVERAGES.find(b => b.id === 'filter240') || BEVERAGES[0];
    setDrinks([...drinks, { bevId: def.id, mg: def.caffeineMg, servings: 0 }]);
    markDirty?.();
  }
  function removeRow(i) {
    const next = drinks.filter((_, idx) => idx !== i);
    setDrinks(next.length ? next : [{ bevId: BEVERAGES[0].id, mg: BEVERAGES[0].caffeineMg, servings: 0 }]);
    markDirty?.();
  }

  return (
    <div className="space-y-4">
      {drinks.map((row, i) => {
        const bev = BEVERAGES.find(b => b.id === row.bevId) || BEVERAGES[0];
        const vol = convertVolume(bev.volumeMl, volumeUnit);

        return (
          <div key={i} className="rounded-xl border border-slate-800 p-4">
            {/* Beverage row (full width) */}
            <div className="grid md:grid-cols-12 gap-3">
              <div className="md:col-span-11">
                <label htmlFor={`bev-${i}`} className="label">Beverage</label>
                <select
                  id={`bev-${i}`}
                  className="select"
                  value={row.bevId}
                  onChange={(e) => {
                    const nb = BEVERAGES.find(b => b.id === e.target.value);
                    update(i, { bevId: e.target.value, mg: nb ? nb.caffeineMg : row.mg });
                  }}
                >
                  {BEVERAGES.map((b) => (
                    <option key={b.id} value={b.id}>{b.name}</option>
                  ))}
                </select>
                <div className="small mt-1">
                  Serving ≈ {fmt(vol.value, vol.unit === 'ml' ? 0 : 1)} {vol.unit}
                </div>
              </div>
              <div className="md:col-span-1 flex items-end">
                <button type="button" className="btn-secondary w-full" onClick={() => removeRow(i)} title="Remove">✕</button>
              </div>
            </div>

            {/* Mg + Servings row */}
            <div className="grid md:grid-cols-12 gap-3 mt-3">
              <div className="md:col-span-6">
                <label htmlFor={`mg-${i}`} className="label">Caffeine / serving (mg)</label>
                <input
                  id={`mg-${i}`}
                  className="input"
                  type="number"
                  min={0}
                  value={row.mg}
                  onChange={(e) => update(i, { mg: Number(e.target.value) })}
                  aria-invalid={!!errors[`mg${i}`]}
                  aria-describedby={errors[`mg${i}`] ? `mg-err-${i}` : undefined}
                />
                {errors[`mg${i}`] && <div id={`mg-err-${i}`} className="small text-rose-300 mt-1">{errors[`mg${i}`]}</div>}
              </div>

              <div className="md:col-span-6">
                <label htmlFor={`serv-${i}`} className="label">Servings today</label>
                <input
                  id={`serv-${i}`}
                  className="input"
                  type="number"
                  min={0}
                  value={row.servings}
                  onChange={(e) => update(i, { servings: Number(e.target.value) })}
                  aria-invalid={!!errors[`serv${i}`]}
                  aria-describedby={errors[`serv${i}`] ? `serv-err-${i}` : undefined}
                />
                {errors[`serv${i}`] && <div id={`serv-err-${i}`} className="small text-rose-300 mt-1">{errors[`serv${i}`]}</div>}
                <div className="flex gap-2 mt-2">
                  {[1,2,3].map(n => (
                    <button
                      key={n}
                      type="button"
                      className="badge"
                      onClick={() => update(i, { servings: n })}
                    >{n}</button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <div className="flex justify-end">
        <button id={anchorId} type="button" className="btn" onClick={addRow}>+ Add different beverage</button>
      </div>
    </div>
  );
}
