export const REGIONS = {
EU: {
id: 'EU',
name: 'EU (EFSA)',
adultDailyCap: 400, // mg/day
pregnancyDailyCap: 200,
singleDoseGuide: 200,
youth: { policy: 'avoid', capMgPerKg: null },
},
US: {
id: 'US',
name: 'US (FDA/ACOG)',
adultDailyCap: 400,
pregnancyDailyCap: 200,
singleDoseGuide: 200,
youth: { policy: 'avoid', capMgPerKg: null },
},
CA: {
id: 'CA',
name: 'Canada (Health Canada)',
adultDailyCap: 400,
pregnancyDailyCap: 200,
singleDoseGuide: 200,
// Health Canada commonly cites 2.5 mg/kg/day informational cap for youth
youth: { policy: 'cap', capMgPerKg: 2.5 },
},
};


export const REGION_OPTIONS = Object.values(REGIONS);
