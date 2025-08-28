"use client";
import { CAFFEINE_ITEMS } from '@/lib/foods';

export default function CaffeineTable() {
  return (
    <section className="card rounded-2xl p-6">
      <details className="group">
        <summary className="cursor-pointer flex items-center justify-between select-none">
          <h2>Caffeine content by drink &amp; food</h2>
          <span className="text-slate-400 transition-transform group-open:rotate-180">⌄</span>
        </summary>

        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-slate-300">
              <tr className="text-left">
                <th className="py-2 pr-3 font-medium">Category</th>
                <th className="py-2 pr-3 font-medium">Item</th>
                <th className="py-2 pr-3 font-medium">Serving</th>
                <th className="py-2 pr-3 font-medium">Caffeine</th>
              </tr>
            </thead>
            <tbody>
              {CAFFEINE_ITEMS.map((it, i) => (
                <tr key={i} className="border-t border-slate-800">
                  <td className="py-2 pr-3">{it.category}</td>
                  <td className="py-2 pr-3">{it.name}</td>
                  <td className="py-2 pr-3">{it.serving}</td>
                  <td className="py-2 pr-3">{it.range}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="small mt-3">
          Sources: FDA, Mayo Clinic, IFIC; values are estimates and can vary by brand/brew.
        </p>
      </details>
    </section>
  );
}
