# ScotiaSeed — Validation Memo & Pre-Deck Decision Set
**Prepared for the caseHacks 2026 team — Miller**
**Date:** 2026-05-23 (case released today; submission due May 24, 10:00 AM)

---

## TL;DR — Does the idea hold up?

**Yes — with three sharpening moves and one re-frame.** ScotiaSeed is structurally well-aligned to the case, but the current pitch is vulnerable in two places: (1) the "single bank for everything" thesis is partly already-obsolete because Wealthsimple is *becoming* a bank, and (2) the round-up mechanic is not novel — Wealthsimple Roundup has existed since 2018. You win by re-positioning around **frictionless conversion of an *already-verified* banking customer into an investor** — a moat fintechs structurally cannot replicate at the same speed.

The case's own framing gives you the winning sentence (Page 3 of the case package):

> "The Big Six compete on breadth, brand trust, and integration with full banking relationships; fintechs compete on simplicity, cost, and experience design."

ScotiaSeed's job is to **steal the second column without losing the first.** That is the whole pitch.

---

## 1. How the idea maps to the case's explicit asks

The case states three non-negotiables (Page 7). Mapped:

| Case requirement | ScotiaSeed alignment | Risk |
|---|---|---|
| Compatible with Scotiabank's regulatory environment | Uses existing Scotia Smart Investor + iTRADE + TFSA/FHSA/RRSP rails. No new product license needed. | Cash incentives require clear FCAC disclosure; clawback rules need careful structuring. |
| Viable within 18-month implementation horizon | Re-uses existing infrastructure. Real lift is: (a) bonus-credit engine, (b) round-up rail to investment account, (c) education module surface, (d) pre-filled investment KYC from banking KYC. All ~6–12 month builds at a Big Six bank. | Integration across Scotia banking app + Smart Investor + iTRADE is 3 separate stacks today. |
| Move the needle on **sustained engagement**, not just openings | The yearly $25 unlock + recurring-contribution requirement directly addresses this. | Must measure "still contributing at 12 months" as primary KPI, not "accounts opened". |

The case's four strategic pillars from Scotiabank's Investor Day 2023 (Page 4) — ScotiaSeed directly maps to **two of them** by name, which is the kind of explicit alignment that wins judges:

- **"Earn primary client relationships"** → ScotiaSeed converts a deposit relationship into a primary investing relationship before Wealthsimple captures it.
- **"Make it easy to do business with us"** → ScotiaSeed collapses investment account onboarding from a separate workflow into a 2-tap upgrade of an existing chequing relationship.

In your script, **say these pillar names out loud.** Judges from Scotiabank wrote those phrases.

---

## 2. The four questions you asked — answered with numbers

### Q1: How much can we actually spend on customer acquisition?

**Industry CAC benchmarks** (validated across multiple sources):

- Banking-industry customer lifetime value (CLV): **$2,000–$4,500** per retail relationship.
- Big Six banks historically spend in the low hundreds per acquired retail customer; specialty acquisitions (high-fee credit cards, brokerage accounts) climb into the thousands.
- **RBC Direct Investing is currently running a 2% cashback offer up to $5,000** (requires $10K deposit, funds locked until June 2027). That is a $5K CAC ceiling on a single brokerage acquisition.
- **Wealthsimple's tiered referral pays up to $5,075** for a $1M+ referred deposit; the entry tier is **$25 for $100 deposit** — that is the apples-to-apples ScotiaSeed comp.
- **Scotiabank itself currently spends $175 per new student/youth chequing account** that completes two activation actions (direct deposit + recurring transaction or 5 Visa Debit purchases) before July 1, 2026. **This is the most important data point in your deck:** Scotia has already proven it will spend ~$175 to acquire an *uninvested* youth customer. Adding ~$125 more to convert that same person into an investor is well inside the precedent.

**Defensible CAC ceiling for ScotiaSeed: $300 per fully-converted user, paid over 3+ years and gated on engagement.**

A user who unlocks the full $300 will have, at minimum:
- Opened a registered investment account
- Completed beginner education
- Set up recurring contributions
- Stayed invested for 3 years
- Made at least one annual contribution

That cohort's expected 20-year LTV (assuming they grow into a typical mass-affluent investor with $50K–$100K eventual AUM at Scotia's ~0.50% fee equivalent on managed portfolios, plus cross-sell of mortgages, FHSA→home, eventually wealth advisory) is conservatively **$3,000–$6,000 NPV at a 7% discount rate**. ROI on a $300 incentive: **10x–20x**. Even if you assume aggressive 30% attrition by year 3, NPV-positive at scale.

**The wealth-transfer math is the kicker.** CPA Canada says $1T moves from Boomers to younger generations by 2026. TD Asset Management confirms Boomers hold ~50% of Canadian wealth; Millennials hold ~10%. A 22-year-old you capture today is statistically far more likely than chance to inherit $100K–$500K by their mid-40s. **Capturing them now = capturing the inheritance at no incremental CAC.** Wealthsimple is doing exactly this math; that is why they reached $125B AUA in Q1 2026 (up 71% YoY) and why their CEO has publicly stated a $1T AUA target by 2034.

### Q2: What is actual customer retention? How do similar models perform?

| Reference model | Retention / engagement signal |
|---|---|
| **Acorns** (US micro-investing, paid subscription model) | **98–99% retention** — but heavily helped by paid subscription lock-in and "GoHenry → EarlyBird → Adult" lifecycle integration. |
| **401(k) auto-enrollment** (Vanguard, Thaler/Benartzi research) | **9 in 10 participants still enrolled after 3 years.** Default settings + automatic contributions are the single most powerful retention force in personal finance — *more* powerful than incentives. This is your behavioral foundation. |
| **Wealthsimple** | ~3M Canadians, $125B AUA Q1 2026, **71% YoY growth.** No public churn number, but their unit economics work because cross-sell across managed, trade, cash, FHSA, mortgage, tax. They are running the same lifecycle playbook Acorns runs. |
| **RBC InvestEase** | Requires $15K minimum for cash reward; structurally not a youth product. Low ScotiaSeed competitive overlap. |
| **TD GoalAssist** | $0 minimum, commission-free TD ETFs, no signup promo. This is your nearest Big-Six direct competitor — and they have no acquisition story. |

**The implication for your pitch:** The retention engine you need is NOT the cash bonus. It is the **automated recurring contribution** the user sets up to qualify for the yearly $25. The bonus is the hook; the auto-PAC is the moat. **Frame it that way.** This is also why education-gating before the bonus matters — Acorns/Wealthsimple did not have this and bleed users who never understand what they own.

**Honest weakness to own:** Wealthsimple does not publicly disclose churn, and we should not pretend to know it. In Q&A: "Acorns reports 98–99% with paid subscription; Vanguard auto-enrollment retention is ~90% at 3 years; we assume ScotiaSeed lands between — call it 75–85% at year 3 given no subscription lock-in."

### Q3: What makes it stand out vs. competitors?

There are five things competitors *cannot easily replicate*:

1. **Zero-friction conversion of an already-verified customer.** Under FINTRAC, an existing Scotia chequing customer's identity is already verified; that verification can be re-used for a new investment account (FINTRAC Method 5 / reliance on prior verification). Wealthsimple cannot do this without re-verifying ID. The only thing left to collect is CIRO suitability info (risk tolerance, time horizon, objectives) — a 5-minute in-app questionnaire. **Pitch line: "If you already bank with us, opening your first investment account takes one tap and five questions."**

2. **CDIC + CIPF stacked protection.** Scotia can offer CDIC-insured cash on idle balances ($100K limit) AND CIPF-protected securities ($1M limit). Wealthsimple offers up to $1M CDIC (because deposits are spread across partner banks) but they had to *engineer* this; you get it natively. Translate to plain English on a slide: **"Your money is protected up to $1.1 million across cash + investments. By the bank Canadians have trusted since 1832."**

3. **Full registered-account suite under one roof.** Scotia supports TFSA, RRSP, FHSA, RESP, RRIF, RDSP. FHSA matters most — the bulk of 2023 FHSA contributors are aged 25–34 (CRA stats), and Canadians have opened 300K+ FHSAs in less than 2 years. FHSA is the killer product for your demographic because it solves the housing-anxiety + retirement double-bind specific to under-35s. **Make FHSA the hero registered account in ScotiaSeed onboarding.**

4. **Auto-PAC from chequing → investment with no inter-bank transfer delay.** Wealthsimple Roundup pulls weekly from an external bank account — 1–3 day delay, occasional NSF failures, mental friction. Scotia's round-up routes *internally, in real time, with no transfer*. This is the operational moat.

5. **Existing trust at a moment of low trust.** The case quotes the FCAC (Page 5–6): younger Canadians turn to social media and family/friends for advice but report anxiety about acting on advice from unqualified sources. Scotia's brand is the antidote. **The deck should land this with a single line: "Young Canadians are getting financial advice from TikTok. We can do better."**

### Q4: How do we optimize the streamlining process?

The case's *own* third strategic pillar is literally "Make it easy to do business with us." This is the pillar you over-index on. Concrete moves:

| Friction today | ScotiaSeed move | Why it works |
|---|---|---|
| Separate Scotia main app, Smart Investor portal, iTRADE app | Single "Invest" tab inside the main Scotia app; deep-links into Smart Investor and iTRADE; SSO already exists. | Match Wealthsimple's single-app UX without rebuilding. |
| Re-ask identity, address, employment when opening investment account | Pre-fill all FINTRAC fields from banking KYC; user confirms with one tap. | FINTRAC explicitly permits reliance on prior verification (Method 5). |
| Multi-page CIRO suitability questionnaire | Plain-language, 5-question in-app flow with progress bar. Same regulatory rigor; better UX. | CIRO requires the *content*; format is yours. |
| First contribution requires manual transfer | One-tap "Start with $25" from chequing → registered investment account, then default to $25/month auto-PAC matching the existing Smart Investor minimum. | Default settings drive retention (Vanguard / Thaler). |
| Beginner doesn't know what to buy | Funnel to Scotia Essentials Portfolios (managed, low-MER, age-appropriate allocation) by default; iTRADE as upgrade path. | Avoids the GIC trap (see Section 3) and matches case's risk-appropriate recommendation framing. |
| Three different brands (Scotia / Smart Investor / iTRADE) | One unified "ScotiaSeed" entry point that branches into the right product based on the suitability questionnaire. | Beginners don't pick products; they pick *guidance*. |

---

## 3. Flaws / landmines in Scotiabank's current model that affect your pitch

These are the things judges might ambush you with. Prepare answers.

1. **The GIC default trap.** Smart Investor's onboarding currently recommends GICs, mutual funds, or HISA based on the goal questionnaire. For an 18-year-old saving "for a first home in 5 years," the algorithm may default to a GIC — minimum **$500** for most term structures, and CDIC-insured cash returns ~5%, which is the wrong vehicle for 5+ year wealth building. **Mitigation:** ScotiaSeed's first-time-investor flow must override the default recommendation and steer toward Scotia Essentials Portfolios (managed ETFs, lower MER, equity-tilted for long horizons) unless the user explicitly chooses a sub-3-year goal.

2. **The $500 GIC minimum is incompatible with a $25 first deposit.** If a user puts down their $25 starter, they cannot buy a GIC at all. This is fine — but it forces you to default to Scotia Essentials Portfolios where the practical minimum is **$25/month via pre-authorized contribution** (already a real Scotia feature — confirm this on the Smart Investor page).

3. **Scotia Wealth Management is high-net-worth gated** and not the entry point. Do not mention it in the main funnel. If a ScotiaSeed user grows into $250K+ AUM by their 40s, *then* they upgrade. That upgrade path is the LTV story, not the entry story.

4. **iTRADE commission-free ETFs require 1-business-day hold.** Fine for buy-and-hold beginners but means ScotiaSeed cannot be positioned as a "day trading" product. **Lean into this** — the case's whole pitch is sustained engagement, not trading. Frame as: "We help you invest, not gamble."

5. **CIRO suitability cannot be skipped.** Even with FINTRAC re-use, every new investment account requires the dealer to determine suitability under CIRO rules. The questionnaire is mandatory. **You must be honest:** ScotiaSeed reduces the *time* (from ~25 minutes to ~5) but not the *requirement.* Judges will catch this if you claim "one-tap" too literally.

6. **The TFSA-bonus contribution-room trap.** If the $25 starter bonus is deposited *into* a TFSA, CRA treats it as a contribution — using $25 of the user's room. Most 18–34 users will not be near their cumulative limit, so this is fine, but disclosure must be explicit (FCAC: $10M penalty for misleading communication). **Cleaner alternative:** Pay the $25 into a non-registered Scotia investment account by default, and let the user explicitly opt to deposit into TFSA/FHSA after seeing the room implication. Or: pay it as a cash deposit into chequing, then auto-sweep to investment account on user confirmation (preserves transparency and TFSA room).

7. **Existing $175 student promo creates a perception risk.** Scotia is already running a $175 student/youth chequing bonus (Jan 2 – July 1, 2026). If ScotiaSeed sits on top, total cost per youth-converted-to-investor is $475 — potentially political. **Recommend:** Pitch ScotiaSeed as the *evolution* of the student promo — same dollars, redirected to an investing wedge. Same Scotia spend, much better strategic outcome.

8. **Wealthsimple is becoming a primary bank.** Wealthsimple Cash now offers a chequing account with up to $1M CDIC coverage, no foreign-transaction fees, the highest claimed Canadian chequing rate, and Q1 2026 AUA of $125B (up 71% YoY). Their CEO is publicly targeting $1T AUA by 2034. **Your "single bank for everything" thesis is structurally at risk** — they are doing the same thing in reverse. Re-frame your pitch from "one bank that does everything" to **"the bank that already has you — and the only one that can convert you to an investor with literally zero new signup."** That phrasing is defensible because Wealthsimple cannot match it; they still require a fresh KYC.

9. **The "61% lack of funds" headwind.** Case Exhibit A says 61% of non-investors cite lack of funds as the *primary* barrier. Your $25 bonus and 2–3¢ round-ups directly attack this, but the case's deeper argument (Page 6) is that confidence and clarity, not capital, are the *real* dominant barriers. **Your deck must lead with confidence, not money.** Otherwise judges will say "they fixed the wrong problem."

10. **Round-up is not novel.** Wealthsimple Roundup launched September 2018. Acorns had it before that. You cannot claim invention; you can only claim *integration*. The differentiator is that Scotia's round-up routes internally with no transfer delay, no NSF risk, no external account linkage.

---

## 4. Re-framed positioning for the deck

**Headline (replaces "We'll take the first step with you"):**

> **"You already bank with us. Investing should be one tap away."**

This works because:
- It is true (existing customer, pre-verified KYC, internal transfers).
- It is a structural moat Wealthsimple cannot match (they have to re-onboard).
- It collapses the entire pitch into one sentence judges will remember.

Keep "The first step is on us" as a sub-line on the bonus-explanation slide. Strong as a tactical tagline, but the structural positioning above should be on slide 1.

**The 5-slide spine (for your 10-minute pitch):**

1. **The problem.** Scotiabank has the deposit relationship; Wealthsimple has the investing relationship. Show the AUA growth curve ($64B → $125B in 12 months). Lead with the wealth-transfer urgency.
2. **Why young Canadians actually disengage.** Confidence, not capital. Quote the 43% / 45% / 84% / 36% case data.
3. **The mechanism: ScotiaSeed.** Show the funnel: $25 to start → education unlock → recurring contribution → $25 annual loyalty for up to 3 years, capped at $300. Round-up as the daily reinforcement loop.
4. **The unfair advantage.** One slide showing FINTRAC KYC reuse, CDIC+CIPF protection, FHSA hero product, all-in-one app — the four things Wealthsimple cannot match.
5. **The numbers.** Cost ceiling $300/user; LTV $3K–$6K NPV; payback ~3 years; 18-month build using existing rails. End on the strategic-pillar alignment.

---

## 5. Things I need you to decide before I can build the deck

These are the seven choices that will shape the whole pitch. Most are 1-sentence decisions; one (the bonus structure) is the load-bearing one.

1. **Bonus delivery vehicle**: Pay $25 into the user's TFSA (cleanest UX, uses $25 room — must disclose), into a non-registered account (no room hit, taxable growth), or into chequing-with-auto-sweep-to-investment (most transparent, slight friction)?

2. **Clawback rule** — **FINAL DECISION (2026-05-23):** No clawback. Two-ledger UI shows the user's contributions/interest vs. Scotia's matched contributions/interest. The user can withdraw freely from their own ledger at any time. If they withdraw funds equal to or below their own contribution amount, no impact. If they additionally withdraw an amount that touches Scotia's matched portion, they have a **one-quarter (90-day) grace window** to restore the matched amount. If not restored within 90 days of the withdrawal date, they **forfeit the program** — Scotia's remaining locked contributions are reclaimed and future milestone unlocks are cancelled. This is cleaner than auto-debit, FCAC-friendly (just clear disclosure required), and behaviorally creates "loss aversion with dignity."

3. **Age segment**: Pitch as broad 18–34, narrow Gen Z 18–24 (Scotia's existing student/youth infra), or "students + early earners" 18–28?

4. **Default product on funnel exit**: Scotia Essentials Portfolios (managed, lowest friction, $25/mo PAC fits) vs. iTRADE all-in-one ETF (more agency, slight UX cost) vs. let the suitability questionnaire route them?

5. **Round-up funding source**: Scotia pays the 2–3¢ as new spend (incremental cost), or Scotia redirects existing Scotia Momentum cashback into the investment account (no new cost, just rerouting)?

6. **Education gating**: Required modules *before* the $25 unlocks (better behavioral outcome, slight friction) or unlocked at signup with education recommended (faster activation, lower retention)?

7. **Primary KPI**: Are we optimizing for (a) new investment accounts opened, (b) % of accounts with recurring contributions at month 12, or (c) AUM growth from the 18–34 cohort? Pick one — your whole story changes based on which.

I will use your answers to write the deck and the prototype screen list.

---

## Sources

Case package facts are from the uploaded `_case_HACKS_Participant_Case_Package_2026.02.pdf`. External validation:

- [Wealthsimple referral terms 2026](https://promotions.wealthsimple.com/hc/en-ca/articles/19646567019035-Wealthsimple-Referral-Bonus-Promotion-2026)
- [Wealthsimple business banking expansion (The Logic)](https://thelogic.co/news/wealthsimple-business-banking-rollout/)
- [Wealthsimple Chequing $1M CDIC + Q1 2026 AUA $125B 71% YoY](https://foolinvestor.com/2025/10/wealthsimple-chequing-account-review/)
- [Wealthsimple Roundup launched Sept 2018](https://www.iphoneincanada.ca/deals/wealthsimple-roundup/)
- [Acorns 98–99% retention via subscription lock-in](https://clevertap.com/blog/acorns-cmo-james-moorhead-retention-with-personalized-gamification/)
- [Vanguard auto-enrollment: 9 in 10 still enrolled after 3 years](https://institutional.vanguard.com/VGApp/iip/site/institutional/researchcommentary/article/InvResAutoenrollmentAndTheImportanceOfTheDefault)
- [Save More Tomorrow / Thaler-Benartzi default effects](https://www.chicagobooth.edu/review/behavioral-economics-retirement-savings-crisis)
- [RBC Direct Investing 2% cashback up to $5,000](https://www.rbcdirectinvesting.com/dms/cashback/conditions/index.html?OfferCode=SMR11)
- [RBC InvestEase $15K minimum, no current promo](https://www.rbcinvestease.com/offer/)
- [TD GoalAssist $0 minimum](https://www.td.com/ca/en/personal-banking/personal-investing/products/registered-plans/fhsa)
- [Scotia iTRADE student commission waiver + 10–20 free trades + $175 youth chequing promo (Jan–Jul 2026)](https://www.scotiaitrade.com/en/home/scotiabank-package.html)
- [Scotia Smart Investor: $500 min OR $25/month PAC](https://www.scotiabank.com/ca/en/personal/investing/scotia-smart-investor.html)
- [CIRO KYC/Suitability rules](https://www.ciro.ca/newsroom/publications/know-your-client-and-suitability-determination-retail-clients)
- [FINTRAC identity verification reuse for existing customers (Method 5)](https://www.trulioo.com/blog/financial-services/fintrac-identification)
- [CRA: bank promo bonuses generally not on T5; TFSA contributions reduce room](https://forums.redflagdeals.com/bank-account-sign-up-bonuses-taxable-canada-2488040/)
- [FCAC Financial Consumer Protection Framework — $10M misleading-comms penalty](https://www.canada.ca/en/financial-consumer-agency/services/banking/rights-new-protections/consumer-protection-framework.html)
- [CDIC vs. CIPF coverage explained](https://www.ratehub.ca/blog/what-is-cdic-cipf-insurance-how-your-money-is-protected/)
- [FHSA demographics: bulk of contributors aged 25–34](https://www.theglobeandmail.com/investing/personal-finance/article-first-home-savings-accounts-first-time-buyers-high-earnings-family/)
- [Wealthsimple young investor demographics: 1 in 5 Canadians aged 18–40 use Wealthsimple](https://mediawall.news/gen-z-investing-canada/)
- [Banking industry CLV benchmarks ($2K–$4.5K)](https://www.clv-calculator.com/calculating-value-for-banks/)
