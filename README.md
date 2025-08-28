# Coffee Dosage Calculator (MVP)


**What it is:** A tiny, evidence-informed caffeine planner with region and unit toggles. Built on Next.js App Router + Tailwind. No server, no env vars.


## One-click deploy via Vercel
1. Create a new GitHub repo and add these files.
2. Go to Vercel → **New Project** → Import the repo.
3. Framework: **Next.js** (auto-detected). Build/Output: defaults.
4. Deploy. That’s it.


## Features
- Region toggle: EU (EFSA), US (FDA/ACOG), Canada (Health Canada)
- Unit toggle: kg / lb / st; volume: ml / fl oz (US)
- Daily cap logic: adult 400 mg; pregnancy 200 mg; youth: avoid (EU/US) or 2.5 mg/kg info cap (Canada)
- Single-dose guide (200 mg)
- Sleep timing: last cup = bedtime − N hours (default 6)
- Drink presets (editable mg) and cups-allowed calculator
- Optional performance dose (3–6 mg/kg) shown in results


## Customize
- **Presets:** edit `lib/beverages.js`
- **Region rules:** edit `lib/regions.js`
- **Math helpers:** `lib/utils.js`
- **Styling:** Tailwind in `app/globals.css`


## Notes
- Caffeine amounts vary widely by brew/brand. Keep the mg field editable.
- This tool is informational only and not a substitute for clinical advice.
