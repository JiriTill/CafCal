export function toKg(value, unit) {
const v = Number(value || 0);
if (!v || v < 0) return 0;
switch (unit) {
case 'kg': return v;
case 'lb': return v * 0.45359237;
case 'st': return v * 6.35029318; // stone → kg
default: return v;
}
}


export function convertVolume(valueMl, outUnit) {
if (outUnit === 'ml') return { value: valueMl, unit: 'ml' };
// US fluid ounce
const flOz = valueMl / 29.5735295625;
return { value: flOz, unit: 'fl oz' };
}


export function fmt(n, dp = 0) {
return Number(n).toLocaleString(undefined, { maximumFractionDigits: dp, minimumFractionDigits: dp });
}
