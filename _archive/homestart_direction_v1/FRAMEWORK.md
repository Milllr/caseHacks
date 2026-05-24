# Scotia HomeStart — Strategic Framework

> **One segment. One moment. One Scotia structural asset. One product.**
> Built for [case]Hacks 2026 — judging weights: 30% Problem Diagnosis, 30% Solution & Feasibility, 20% Innovation & Tech, 20% Presentation.

---

## TL;DR (read this first, even if you skip everything else)

We're building **Scotia HomeStart**: a tax-season-triggered, one-tap FHSA activation product, pre-loaded onto the Scotia mobile banking app for Scotia's existing 18-to-34 chequing customers. It uses Scotia's transaction-data visibility *while the bank still has it* (Open Banking Phase 1 read-access lands inside the case horizon) to surface a personalized "you could save $X on this year's taxes by opening an FHSA" prompt at the moment the customer is already thinking about their refund. The FHSA closes the loop to Scotia's mortgage book — a product Wealthsimple structurally cannot offer. Activation in 90 seconds, $200/mo auto-contribute by default, mortgage pre-approval invitation in month 12.

**The big strategic move:** the case asks how to close the gap on a "confidence vs. capital" framing. We reframe it. The real gap is **moment-of-decision absence** — Wealthsimple, Instagram, and a friend's group chat own the moment the 18-34 investor decides. Scotia is not there. We are putting Scotia *into* that moment, at the one calendar trigger that sits inside the 18-month horizon and produces the highest-intent investor cohort in the year: **tax-time, on the FHSA.**

---

## 1. The chosen segment, moment, and Scotia structural asset

### Segment: **B — Capital-Constrained Curious** (the unactivated half)

- **Who:** The ~50% of 18-to-34 Canadians who already hold a Scotiabank chequing account but have not yet opened an investment account at Scotia (or anywhere). They are *not* the affluent ones already on Wealthsimple. They are not the ones aggressively trading. They are the ones who deposit their paycheque, leave it in chequing, and feel anxious about it.
- **Why this segment, defended with math:**
  - **Largest base.** 34% of *all* Canadians have never invested at any age. Among 18-34, the figure is higher; the cohort is bimodal between "activated on Wealthsimple" and "totally unactivated." The unactivated half is the larger, less-captured half. Wealthsimple itself reports that "1 in 5 Canadians aged 18-40 uses at least one Wealthsimple product" — *4 in 5 do not.* That is our pool.
  - **Structural fit with Scotia's existing assets.** Scotia already has the chequing relationship. CAC is effectively zero. Suitability under NI 31-103 is partially pre-completed via existing KYC. Distribution is the Scotia mobile app, which Canadian Bankers Association says 70% of Canadians (and >70% of 18-29s, the most app-centric age group) already use.
  - **Lowest competitive intensity.** Wealthsimple wins re-acquisition wars (Segment A) because they already have the customer. They win the affluent activator. They are *not* winning the unactivated cohort because the unactivated cohort, by definition, hasn't been activated by anyone yet. The activator that owns the customer's primary chequing relationship has the structural advantage.
- **Why not Segment A (Affluent Activator / re-acquire from Wealthsimple):** Switching costs are real. Wealthsimple has done the hard work of activation. Building a "come back to Scotia" play means competing on Wealthsimple's home turf — UX, fees, brand — where Scotia structurally loses. Avoid.
- **Why not Segment C (Newcomer):** Defensible secondary wedge (StartRight already exists; Nova Credit + pre-SIN onboarding is a real moat) but smaller addressable base (~500K new permanent residents per year vs. millions of unactivated Scotia depositors) and less leverage on the mortgage book. We mention it in the roadmap (Year 2 extension) but do not lead with it.

### Moment: **Tax-Time Intercept (Feb–Mar 2027), pinned to FHSA**

- **Why tax-time:**
  - Sits *inside* the 18-month horizon (May 2026 → Nov 2027 — RRSP/FHSA deadline is March 2, 2027).
  - Highest behavioural intent of the year. T4s arrive. Refund expectations form. The Scotia banking app gets opened more often. It is the one annual moment when "investing" is on the consumer's mind without us having to manufacture it.
  - The pain is at its rawest: a Feb 2026 Edward Jones / Pollara survey found **84% of Canadians aged 18-34 report negative emotions about RRSP contributions — the highest of any age group.** Only 36% feel confident in basic retirement-savings mechanics. That negative emotional valence around RRSPs is precisely why we lead with **FHSA, not RRSP.**
- **Why FHSA specifically, not RRSP or TFSA:**
  - **Positive emotional valence.** First home is aspirational. Retirement is loaded with stress for this cohort.
  - **Tax deduction is identical to RRSP** (the rational hook). Withdrawal is tax-free like TFSA (the safety net). FHSA is the strictly dominant first-account product for an 18-to-34 Canadian who has not yet bought a home — which is most of them.
  - **The closed loop to Scotia's mortgage book.** This is the moat. See §2.
  - **The data: median 2023 FHSA contributor maxed out at $8,000.** People who open FHSAs *use* them. We are not selling a paper account; we are activating real AUA.
- **Why not employer-channel onboarding (group RRSP / FHSA auto-enrol):** Wealthsimple just launched Wealthsimple for Business with Group FHSA on May 21, 2026 — *two days before this case was released.* Competing here means competing on a battlefield Wealthsimple has chosen and where they have first-mover advantage. Avoid.
- **Why not life-event triggers (graduation, mortgage pre-approval):** Diffuse, hard to detect at scale, not pinned to a fixed calendar window inside the 18-month horizon. We surface them as Year-2 extensions.

### Scotia structural asset: **The mortgage book + transaction-data visibility (a use-it-or-lose-it asset)**

The single asset Wealthsimple structurally *cannot* replicate inside the 18-month horizon is the FHSA → mortgage closed loop. Scotia is the third-largest Canadian residential mortgage originator. FHSA balances are by design a downpayment savings vehicle. Linking the two is a moat that does not exist for any pure-play fintech in Canada.

The supporting asset is **transaction-data visibility on the customer's primary chequing account.** This advantage is *time-limited* — Phase 1 of Canada's Consumer-Driven Banking Framework (read-access Open Banking) is scheduled for 2026 and Phase 2 (write-access) for mid-2027, both inside the case horizon. As of March 2026 the Bank of Canada has not committed to a launch date, but the framework is law (Bill C-69, June 2024) and Big Six participation is mandatory. **The transaction-visibility moat will erode inside our build-and-launch window. Therefore the right strategic call is to use it now — to seed the customer relationship before Wealthsimple has API access to the same data.**

The mortgage moat is *not* eroded by Open Banking. Open Banking Phase 1 covers deposit, investment, credit, and payment account *data*. It does not give fintechs the ability to originate mortgages. Scotia retains the structural advantage on the back end of the FHSA → home journey for the entire horizon and beyond.

---

## 2. The intervention spec — "Scotia HomeStart"

### Product name
**Scotia HomeStart** — a deliberate echo of Scotia's existing **StartRight** newcomer brand. Banker-readable, follows the bank's naming convention (Scotia Smart Investor, Scotia iTRADE, Scotia StartRight), instantly communicates first-time-homebuyer + activation.

**Tagline:** *First investment. First home. One path.*

### The 30-second pitch (memorize this verbatim)

> Scotia HomeStart turns Scotia's 18-to-34 chequing customers into FHSA investors in 90 seconds — at tax time, in the app, on a one-tap consent screen pre-filled from existing KYC. The FHSA gives them an immediate tax deduction and starts a five-year runway to a Scotia mortgage pre-approval — a closed-loop that Wealthsimple cannot offer because they have no mortgage book. We use Scotia's transaction-data visibility *now*, before Open Banking erodes it, to identify the right customers and pre-fill the contribution amount. Activation is the wedge. The mortgage is the moat. RRSP season 2027 is the deadline.

### The user journey: minute 0 → minute 5 → month 1 → month 12 → year 5

| Time | What happens | Scotia asset used | Regulatory frame |
|---|---|---|---|
| **Minute 0 — Tax season push** | User (Maxine, 26, Scotia chequing customer since 2022, no FHSA on file, $4,800/mo deposits) opens the Scotia mobile app on Feb 15, 2027. Personalized card: "Maxine, you could save **$1,920** on this year's taxes by opening an FHSA. See your path home →" | Transaction-data visibility (pre-Open-Banking) + push channel | PIPEDA consent already covered by Scotia's banking T&Cs; explicit secondary consent at the activation step. |
| **Minute 3 — 90-second onboarding** | 3 sliders: (1) When do you want to buy a home? (2) How much risk are you OK with? (3) How much to start, $0–$8,000? KYC fields auto-populated and greyed out ("We know this from your Scotia profile"). Recommended portfolio: **Scotia Essentials Balanced Portfolio** (existing product, suitability pre-baked at the firm level). | Existing KYC + Scotia Smart Investor / Essentials Portfolios infrastructure | NI 31-103 suitability: managed-portfolio firm-level KYC/KYP. CIRO oversight via Scotia iTRADE registration. |
| **Minute 5 — One-tap consent** | "Open my FHSA — confirms $X immediate tax deduction this year. CDIC and CIPF protections apply. Suitability assessed. Cancel anytime." User taps. Account is open. | Same-day account opening via Scotia digital infrastructure | FCAC complaint-handling disclosed; cooling-off period offered. |
| **Month 1 — Refund moment** | User's CRA refund deposits into chequing. Push notification: "Add $1,500 of your refund to your FHSA? +$X tax savings next year." One-tap. | Transaction-data visibility (refund deposit detection) | Explicit user-initiated contribution. |
| **Month 12 — Anniversary** | "You've contributed $X this year. Your home runway is **on track 6 months ahead of plan.** Scotia's mortgage team has estimated a pre-approval band of $XXX,XXX based on your trajectory. Want to talk to a Scotia advisor in your branch?" | Mortgage book + branch advisor network | Soft pre-approval (informational only); formal pre-approval requires full mortgage application. |
| **Year 5 — Home purchase** | Customer uses FHSA balance toward downpayment. Scotia mortgage closes. Closed loop. FHSA either drained or rolled to RRSP penalty-free (if home not purchased). | Mortgage origination | Standard mortgage underwriting. |

### Three prototype screens (build in Figma / Stitch / Lovable — see DEMO.md for full spec)

1. **Tax-Season Smart Suggestion** (in Scotia app home, replacing the generic "Explore Scotia Smart Investor" tile)
2. **90-Second FHSA Onboarding** (3 sliders + auto-populated KYC + one-tap consent)
3. **Home Runway Dashboard** (FHSA balance, tax savings, mortgage pre-approval indicator, milestone path graphic)

### The Scotia internal owner

**Joint owner: Canadian Banking (Digital channel team) + Scotia Wealth Management (Scotia Smart Investor team).** Pilot accountability sits with the EVP, Canadian Banking; product owner is the Scotia Smart Investor product lead; engineering shared between digital banking and the Smart Investor platform. Compliance/legal review through Scotia's Chief Compliance Officer (CIRO-registered). The case explicitly cites Scotia's 2023 Investor Day "Earn primary client relationships" pillar — this initiative *is* that pillar made operational for the 18-34 cohort.

### Regulatory considerations

- **NI 31-103 (Registration, Suitability):** Scotia Smart Investor and Scotia iTRADE are already CIRO-registered. The managed-portfolio recommendation (Scotia Essentials Balanced as the default for HomeStart) means firm-level KYP and suitability are pre-assessed; the customer's individual KYC fields are inherited from their banking profile and confirmed at activation.
- **PIPEDA:** Using transaction data to identify the customer for the FHSA prompt is covered under Scotia's existing primary banking consent (reasonable-purpose test met: account suggestion for a Scotia-held product). At activation we obtain explicit secondary consent specific to the FHSA. Customer can opt out of personalized offers from the existing app settings.
- **FCAC complaint-handling:** Standard Scotia complaint-handling regime applies. The activation flow displays the cooling-off period, the right to escalate, and the FCAC contact info on the confirmation screen.
- **OSFI capital implications:** None. FHSA is a customer-owned registered account. Scotia's role is custodian + investment manager (fee revenue). No bank balance-sheet impact, no CET1 ratio impact.
- **CDIC:** FHSA cash balances held in the Scotia HomeStart cash sleeve are CDIC-eligible. Investment portion (Essentials Balanced) is held in Scotia iTRADE accounts and covered by CIPF, not CDIC. Disclosure language follows existing Scotia Smart Investor disclosures.
- **CRA / FHSA rules:** First-time-home-buyer attestation collected at activation (consistent with CRA RC727 / FHSA opening rules). $8,000 annual contribution cap and $40,000 lifetime cap enforced by the product logic. 15-year account lifetime with automatic rollover to RRSP if home is not purchased.
- **Open Banking / Consumer-Driven Banking Act:** Scotia is in mandatory-participation scope as a Big Six bank. HomeStart's data dependence is on first-party Scotia data, so the read-access launch does not break the product — it enables competitors to *replicate* the surfacing logic. That replication threat is exactly why the product must ship before Phase 1 read-access goes live.

### Why Wealthsimple cannot copy this inside the same horizon

| Wealthsimple's barrier | Scotia's structural advantage |
|---|---|
| No mortgage book. Cannot offer pre-approval at month 12. | Third-largest residential mortgage originator in Canada. |
| No view of the customer's *primary chequing account* until Open Banking Phase 1 is live and customer consents. | Direct, real-time, first-party transaction-data visibility today. |
| No branch network for newcomer/affluent advisory hand-off at the pre-approval step. | National branch and multilingual advisor network (used as upsell, not as a gate). |
| 1 in 5 Canadians 18-40 already on Wealthsimple — but 4 in 5 are not, and almost none of those have Wealthsimple as their *primary* deposit relationship. | Scotia is the primary deposit relationship for millions of 18-34 Canadians — Wealthsimple's biggest blind spot. |
| Their Group FHSA play (announced May 21, 2026) targets *employers*, not individual chequing-account customers — different channel, different acquisition motion. | Direct-to-customer in the Scotia app, no employer dependency. |

The differentiator that survives Open Banking is the mortgage closed loop. Even if Wealthsimple obtains API read-access to Scotia transaction data in 2026/27 and surfaces an identical FHSA prompt, they cannot complete the journey at month 60. We can.

---

## 3. Market sizing (TAM / SAM / SOM) — what slide 4 has to defend

**Universe:** ~8.5M Canadians aged 18-34.

- **TAM (18-34 Canadians who could plausibly open an FHSA at any institution over the horizon):**
  Of 8.5M people aged 18-34, the FHSA-eligible subset (first-time home buyers, age 18-71, Canadian resident) is roughly 6-7M. At the 2023-observed FHSA opening rate of ~625K accounts per year nationally and growing, the cumulative *new* FHSA market over 18 months is conservatively **~1.2M to 1.5M new account openings**.

- **SAM (Scotia's 18-34 chequing-customer base × propensity to open):**
  Scotia is one of the Big Six (15-18% of Canadian primary-banking share for the 18-34 cohort, conservative). That implies ~1.3M to 1.5M Scotia 18-34 chequing customers. Of those, an estimated 50% are unactivated investors (Segment B). Inside the case horizon, with a tax-season campaign and in-app placement, a 15-20% activation rate is achievable based on the conversion lift digital-banks see on personalized in-app offers. **SAM ≈ 100K to 150K FHSA activations.**

- **SOM (year-one launch, Feb-Mar 2027 tax season):**
  Pilot scope (3 priority urban markets — Toronto, Vancouver, Montreal — accounting for ~55% of the 18-34 Scotia base): **~30K to 50K FHSA activations.** At a 2023-median contribution of $8,000 max-out, that is **$240M-$400M in new AUA in the launch year**, with a 5-year horizon to mortgage origination on 25-40% of activations.

- **Anchor stats for the slide:**
  - 484,320 Canadians contributed to FHSAs in 2023 (StatCan, the inaugural year).
  - 739,310 FHSA holders by end of 2023 (CRA).
  - Median 2023 FHSA contribution: **$8,000 (the annual maximum).**
  - $1 trillion intergenerational wealth transfer 2023-2026 (CPA Canada).
  - Wealthsimple AUA: $124.8B at Q1 2026, up 71% YoY. 1 in 5 Canadians aged 18-40 uses a Wealthsimple product.
  - Scotia Global Wealth AUA: $868B (FY 2025).
  - Scotia AUM: $432B; AUM up 16% YoY in FY 2025.

- **Unit economics (for slide 10):**
  - **CAC:** ~$15-40 per activated FHSA (existing customer, in-app placement, no media spend, marginal cost is push notification + servicing).
  - **Year-1 revenue per activated customer:** $8,000 × ~0.7% MER on Essentials Balanced ≈ $56. Plus Scotia's deposit float on cash sleeve.
  - **5-year LTV (FHSA-only):** ~$2,500-$3,500 per customer in cumulative management fees on growing balance.
  - **5-year LTV (with mortgage attach at 30%):** an additional ~$5,000-$8,000 NPV per attached customer in mortgage net interest margin (NIM) and origination fees.
  - **Blended LTV:** ~$5,000-$8,000 per activated customer over 5 years. **LTV:CAC ≈ 150x.**
  - **Pilot ROI (30K activations, $30 CAC, $5K blended LTV):** $900K spend → $150M LTV. Even a 10x discount to LTV is a comfortable business case.

---

## 4. Stress test against anti-patterns

The handoff's §9 anti-pattern list says: *if the solution is a chatbot, a UX reskin of Scotia Smart Investor, a TikTok campaign, a crypto play, or a robo-advisor, go back and pick a different moment.*

- **Chatbot?** No. The solution is a structured 3-slider flow + a one-tap consent, not an LLM. No hallucination surface, no NI 31-103 robo-advisor advice exposure.
- **UX reskin of Scotia Smart Investor?** No. HomeStart *uses* Scotia Smart Investor as the back-end portfolio infrastructure but the wedge is the FHSA + mortgage closed loop, surfaced at a specific calendar moment, in a specific channel, to a specific cohort. Smart Investor today is a generic goal-setting flow available to all customers — it does not surface tax-time FHSA at the chequing-app home screen.
- **TikTok campaign?** No. Channel is the Scotia mobile app, not paid social.
- **Crypto?** No.
- **Robo-advisor?** Strictly: no. The product is a *registered account opening flow* that recommends a single managed portfolio (Essentials Balanced) as the default. It is not a robo-advisor in any meaningful sense — it is FHSA activation that happens to include a default investment recommendation. The wedge is the *moment* and the *mortgage loop*, not the algorithm.

Passes anti-pattern check.

---

## 5. Risk register — the three things most likely to blow up at Q&A

### Risk 1 — "Why won't Wealthsimple just build this when Open Banking gives them your data?"

**The hidden assumption in this question:** that Open Banking gives competitors equivalent capability.

**Crisp answer:** Open Banking gives Wealthsimple read-access to deposit transactions with customer consent. It does *not* give them a mortgage book, branch advisor network, or the ability to close the FHSA → mortgage loop. Wealthsimple can replicate the *surfacing* logic in 2027; they cannot replicate the *closed loop* in the case horizon, and arguably not within five years. The mortgage moat is durable. The data moat is the *seeding* mechanism — it gives Scotia first-mover advantage at the moment of activation, after which the mortgage relationship is what locks the customer in.

Supporting evidence: Wealthsimple has been operating in Canada for 12 years and has not yet entered mortgage origination at scale. They added Wealthsimple Cash (chequing-equivalent) and Tax. They have not added mortgages because mortgage origination is regulatory-heavy (OSFI B-20, B-21), capital-intensive, and requires a deposit funding base. Wealthsimple Banking for Families launched May 21, 2026 but is still a deposit play, not a mortgage play.

### Risk 2 — "Your CAC and LTV numbers are pretty rosy. What if activation is only 5%?"

**The hidden assumption:** that the team has not modelled downside.

**Crisp answer:** At 5% activation across the eligible Scotia 18-34 base (Segment B sub-segment ~750K), that is 37,500 activations. At the median $8,000 contribution, that is $300M in new AUA in the launch year. At a blended LTV of $5,000 and CAC of $30, ROI is still 165x. The business case survives a 3x downside on activation. The break-even activation rate is approximately 0.6%. We are not relying on optimistic conversion to make the unit economics work.

### Risk 3 — "How do you handle suitability if you're surfacing an investment recommendation in a chequing-account context?"

**The hidden assumption:** that the team has not engaged with CIRO / NI 31-103 nuance.

**Crisp answer:** Three things make this clean.

1. **The surfacing in the Scotia app is *information*, not advice or a recommendation under NI 31-103.** It is informational disclosure with a CTA — a regulatory pattern Scotia already uses elsewhere (the "Explore Scotia Smart Investor" tile on the existing app).
2. **The recommendation — Scotia Essentials Balanced Portfolio — is a managed portfolio at the firm level.** Suitability is established at the firm/KYP layer; the customer-level KYC is collected and confirmed during the 90-second onboarding. This is identical to how Scotia Smart Investor already operates today; we are not inventing a new compliance pathway.
3. **The CIRO registration sits with Scotia Capital Inc. / Scotia iTRADE.** All HomeStart flows route to those registered entities; the chequing-app surfaces them via a regulated cross-sell mechanism that Scotia compliance already governs.

We will produce a one-page compliance walk-through in the appendix slide on demand.

---

## Appendix — the strategic one-liner the team should memorize

> **"Wealthsimple owns the moment of investment decision for 1 in 5 Canadians aged 18-40. Scotiabank is the primary chequing relationship for most of the other 4 in 5. Our solution puts Scotia *into* the moment of decision at the one calendar trigger inside the case horizon — tax time — using the data moat that expires when Open Banking Phase 1 launches, on the one product Wealthsimple structurally cannot replicate: the FHSA-to-mortgage closed loop."**

Every slide in the deck supports this sentence. Every Q&A answer reduces to it.
