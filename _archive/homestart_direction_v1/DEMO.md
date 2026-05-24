# DEMO.md — Scotia HomeStart Prototype Spec

> **Build target: 3 screens in Figma / Stitch / Lovable / v0. ~5 hours of work. Polished mockups beat working code at this rubric.**
> **Submit as: separate prototype screenshots + embedded in slides 7-9.**
> **Tool preference (in order): Figma (highest fidelity, most banker-credible) → Lovable (fastest, if Figma owner is bottlenecked) → Stitch / v0 (fallback).**

---

## Global design system (lock these before building any screen)

Pull from Scotia's actual brand to make this feel like a real bank screen, not a hackathon mockup. Judges will instinctively trust visual fidelity to the existing app.

- **Primary color:** Scotia Red `#EC111A`
- **Secondary navy:** `#001E60`
- **Background:** White `#FFFFFF` / Off-white `#F7F7F8`
- **Text primary:** `#1A1A1A`
- **Text secondary:** `#6B7280`
- **Success / positive numbers:** `#0F8B3A`
- **Type:** Inter or System UI (Scotia's actual brand uses a custom face; Inter is the closest free substitute). 16-18pt body, 24-28pt section headers, 36-42pt hero numbers.
- **Corner radius:** 12-16px on cards, 24px+ on primary CTAs.
- **Iconography:** Phosphor or Lucide line icons, single-weight.
- **Photography:** None on mockups — photography is a trap that screams "hackathon." Use abstract gradient backgrounds and product-illustration glyphs only.
- **Device frame:** iPhone 15 Pro frame, status bar set to 9:41 AM, signal/wifi/battery present. Use the actual Apple device frame, not a generic mobile shell.
- **Format:** All three screens in a single Figma file, three sequential frames, named `01_TaxPrompt`, `02_Onboarding`, `03_Runway`. Export as PNG @2x and embed in slides 7, 8, 9. Also export the three as a single concatenated image for the Devpost prototype submission.

---

## Screen 1 — Tax-Season Smart Suggestion (`01_TaxPrompt`)

**Goal of the screen:** Show the judge how Scotia surfaces the HomeStart offer at the right moment in the user's banking life. This is the "Wealthsimple owns this moment today; we put Scotia *into* it" visual.

### Layout (top → bottom)

1. **Scotia top nav bar.** Scotia red. "Welcome back, Maxine" centered. Profile avatar top-right.
2. **Account balances strip** (3 horizontal cards):
   - Chequing — $4,287.42
   - Savings — $1,150.00
   - Visa — -$340.18 *(small grey number)*
3. **The HomeStart suggestion card** *(this is the hero element — make it visually distinct from the surrounding cards but not gaudy)*:
   - Background: soft gradient (off-white to very faint Scotia red, ~5% saturation)
   - 1px border, 16px radius
   - **Headline (24pt, semibold):** *"Maxine, you could save **$1,920** on this year's taxes."*
   - **Subhead (16pt, regular):** *"Open your First Home Savings Account in 90 seconds. The deduction lands on this year's return — and starts your runway home."*
   - **A small inline illustration:** a stylized 5-year runway/path graphic curving from "Today" to a small house icon. Keep it abstract; no human figures.
   - **Primary CTA (full-width, Scotia red):** *"See your path home →"*
   - **Footer link (12pt, grey, underlined):** *"Why we're showing you this"* — small accordion that expands to one sentence: *"Based on your $4,800 average monthly deposits and no FHSA on file, your FHSA tax savings estimate is $1,920 at your federal-and-Ontario marginal rate."*
4. **Below it, two greyed-down standard tiles:** "Scotia Smart Investor" / "Send Money" — to show the new card is contextually surfaced inside Scotia's existing app, not a separate destination.
5. **Bottom tab bar (Scotia app standard):** Home / Move money / Pay / Invest / More.

### Annotation callouts to add to the slide (for slide 7)

- (a) Personalized name — pulled from CIF
- (b) Personalized tax-savings estimate — calculated from real deposit pattern
- (c) Transparency link — FCAC-aligned, no dark pattern
- (d) One-tap CTA

### What this screen proves to the judge

That the trigger is **right-place, right-time, right-customer** — and that Scotia is using transaction data to personalize the offer *while it still has exclusive access to that data* (i.e., before Open Banking Phase 1).

---

## Screen 2 — 90-Second FHSA Onboarding (`02_Onboarding`)

**Goal of the screen:** Show the judge the activation flow is fast, regulator-friendly, and uses existing Scotia infrastructure.

### Layout (top → bottom)

1. **Status bar + back arrow** to home. Step indicator: *"Step 1 of 1 — Just three questions."* (Yes, **one** step — this is the entire flow.)
2. **Section header (28pt, semibold):** *"Let's set up your FHSA."*
3. **Three sliders, stacked, each in its own card:**

   - **Card A — Timeline.** Question: *"When do you want to buy your first home?"*
     - Slider: 1 year ←→ 15 years. Default position: 5 years.
     - Live readout: *"5 years from today (May 2031)"*

   - **Card B — Risk.** Question: *"How aggressive should we invest?"*
     - Three pill buttons: **Cautious** / **Balanced (recommended)** / **Growth**.
     - Default: Balanced, highlighted in Scotia red.
     - Live readout below: *"We recommend Balanced based on your 5-year timeline. Recommendation: Scotia Essentials Balanced Portfolio."*
     - Tiny info icon expands a tooltip: *"Suitability assessed at portfolio level under NI 31-103. CIRO regulated."*

   - **Card C — Start amount.** Question: *"How much to start? You can add more anytime."*
     - Slider: $0 ←→ $8,000. Default position: $1,500.
     - Live readout: *"$1,500 today, then $200 a month (auto). Est. tax savings this year: **$360.** You'll also use $1,500 of your $8,000 FHSA room."*

4. **KYC inheritance card (greyed):** Title: *"Already on file with Scotia"*. Lists: Full name, SIN, date of birth, current address, employment status, citizenship/residency. Footer: *"We've inherited these from your Scotia banking profile. Tap any to update."*

5. **Compliance footer (12pt grey, important — judges WILL read this):**
   *"Recommended portfolio: Scotia Essentials Balanced. Suitability assessed under NI 31-103 / CIRO regulations. Cash sleeve CDIC-eligible; invested portion CIPF-protected. Cancel within 5 business days at no cost."*

6. **Primary CTA (sticky, full-width, Scotia red):** *"Open my FHSA — save $1,920 on this year's taxes"*

7. **Secondary tap (smaller, below):** *"Talk to a Scotia advisor first"* — keeps the human-channel optionality without making it a gate.

### What this screen proves to the judge

That the 90-second activation is **regulatorily legitimate** — not a casual click-through. Greyed-out KYC plus the compliance footer is the visual signal that compliance/legal has been thought through.

---

## Screen 3 — The Home Runway Dashboard (`03_Runway`)

**Goal of the screen:** Show the judge where the *moat* lives — the mortgage attach moment, which Wealthsimple cannot replicate.

### Layout (top → bottom)

1. **Header strip (Scotia red gradient).** Hero text: *"Your Home Runway."* Big number underneath: **$3,840** with subtext *"FHSA balance — tracking 4 months ahead of plan ✓"*

2. **Runway visualization (the centerpiece — invest design effort here).**
   A horizontal "path" graphic with 5 milestone dots:
   - **Today (May 2026):** filled. Label: "$3,840 saved."
   - **Year 1:** filled. Label: "$8,000 max." Tooltip: "On track."
   - **Year 2:** filled-to-half. Label: "$16,000."
   - **Year 3:** outline. Label: "$24,000."
   - **Year 5 — Your Home:** house icon, outline, slightly larger. Label: "Pre-approval ready."
   Below the path: a thin progress bar that visually fills with each contribution.

3. **Three quick-info cards:**

   - **Card 1 — Tax savings.**
     - Big number: **$360** *(YTD)*
     - Subtext: *"Will appear as a deduction on your 2027 return."*

   - **Card 2 — Mortgage pre-approval estimate.** *(This is the moat-visible card.)*
     - Big number: **$485,000** *(estimated)*
     - Subtext: *"Estimated Scotia mortgage pre-approval at your projected savings + income trajectory. Estimate only. Talk to a Scotia advisor for a formal pre-approval."*
     - Small CTA underneath: *"Book a mortgage advisor →"*

   - **Card 3 — Next contribution.**
     - Big text: *"$200 — June 1"*
     - Subtext: *"Auto-contribute on. Change anytime."*
     - Small toggle.

4. **Anniversary nudge (only appears at month 12, but include it on the mockup as a "preview" callout for the demo):** A subtle card: *"At month 12, we'll invite you to talk to a Scotia mortgage advisor about your projected pre-approval. No commitment — just the conversation, on your terms."*

5. **Bottom tab bar** unchanged from Screen 1.

### Annotation callouts to add to the slide (for slide 9)

- (a) Tax savings — the immediate rational hook
- (b) **Mortgage pre-approval estimate — the moat. Wealthsimple cannot ever show this card.**
- (c) Auto-contribute — sustained engagement, not just account opening
- (d) Anniversary advisor invitation — the branch-network hand-off

### What this screen proves to the judge

That the product is not just an FHSA opener — it's a **5-year customer journey** that ends at a Scotia mortgage. The pre-approval card is the slide's killer detail. **Make sure it's clearly visible at the back of the room. Use 32-36pt for the $485,000 number.**

---

## Build sequence (5 hours total)

| Hour | Step | Owner |
|---|---|---|
| 0:00–0:30 | Set up Figma file. Pull Scotia brand colors. Drop iPhone 15 Pro frames. | Designer |
| 0:30–2:00 | Build Screen 1. Hero card is the focus — iterate the headline-stat-CTA stack until it reads at 6 feet. | Designer |
| 2:00–3:30 | Build Screen 2. Most layout work; the three sliders + KYC inheritance card need rhythm. | Designer |
| 3:30–4:30 | Build Screen 3. Runway visualization is the centerpiece — invest here. | Designer |
| 4:30–5:00 | Export PNG @2x. Drop into PITCH deck slides 7-9. QA all three for legibility at projector resolution. Also concatenate into a single image for Devpost. | Designer + Presenter C |

## Things NOT to do

- **Do not show a graph of fund performance.** That triggers NI 31-103 marketing rules and the team is not licensed.
- **Do not animate.** Static PNGs only. Animation costs hours and adds nothing.
- **Do not use stock photography of "diverse young Canadians smiling at phones."** It is the visual marker of a hackathon team that didn't think. Abstract design only.
- **Do not invent fictional dollar amounts that contradict the deck math.** The $3,840 balance in Screen 3 must be plausible against the $1,500 + $200 × 12 = $3,900 contribution math (we're a few weeks under year-end intentionally — looks more realistic).
- **Do not include a chatbot or "ask AI" surface anywhere.** Anti-pattern.
