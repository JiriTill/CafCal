import { REGIONS } from './regions';


export function computeDailyCap({ regionId, age, weightKg, pregnant }) {
const region = REGIONS[regionId] || REGIONS.EU;
const isYouth = Number(age || 0) < 18;


if (isYouth) {
if (region.youth.policy === 'cap' && region.youth.capMgPerKg) {
const cap = Math.max(0, (region.youth.capMgPerKg * (weightKg || 0)));
return { capMg: Math.round(cap), note: `Youth informational cap: ${region.youth.capMgPerKg} mg/kg/day (not a goal)` };
}
return { capMg: 0, note: 'Not recommended for under 18.' };
}


const cap = pregnant ? region.pregnancyDailyCap : region.adultDailyCap;
return { capMg: cap, note: pregnant ? 'Pregnancy/lactation limit' : 'Healthy adult guidance' };
}


export function computeSingleDose(regionId) {
const region = REGIONS[regionId] || REGIONS.EU;
return region.singleDoseGuide;
}


export function cupsAllowed(capMg, perCupMg) {
const safeDenom = Math.max(1, Math.round(perCupMg || 0));
return Math.floor(Math.max(0, capMg) / safeDenom);
}


export function performanceDose(weightKg) {
const low = (3 * (weightKg || 0));
const high = (6 * (weightKg || 0));
return { low: Math.round(low), high: Math.round(high) };
}


export function timeMinusHours(hhmm, hours = 6) {
if (!hhmm) return null;
const [h, m] = hhmm.split(':').map(x => parseInt(x, 10));
if (Number.isNaN(h) || Number.isNaN(m)) return null;
const d = new Date();
d.setHours(h); d.setMinutes(m); d.setSeconds(0); d.setMilliseconds(0);
d.setTime(d.getTime() - hours * 60 * 60 * 1000);
const hh = String(d.getHours()).padStart(2, '0');
const mm = String(d.getMinutes()).padStart(2, '0');
return `${hh}:${mm}`;
}
