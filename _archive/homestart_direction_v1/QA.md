# QA.md — Banker / Auditor / Consultant Q&A Backstop

> **Five minutes of Q&A. Judges are bankers, auditors, and management consultants. They will test for: business viability, regulatory awareness, market math, and intellectual honesty about competitive threats.**
>
> **Drill the "Top 3 Blow-up Risks" until the answers are reflexive. The rest are situational.**
>
> **Universal answer structure (use this every time):**
> 1. *Acknowledge the question is fair.*
> 2. *Reframe to the one-liner from FRAMEWORK.md if applicable.*
> 3. *Answer with a specific number, citation, or mechanism — not a generality.*
> 4. *Close with the moat or the moment, not with "good question."*

---

## Top 3 Blow-Up Risks — drill these reflexively

### Risk 1 — "Why won't Wealthsimple just build this once Open Banking gives them your data?"

**Why this question is dangerous:** It tests whether the team has thought past the data-moat erosion. If the answer is just "we'll move faster," the team loses points.

**The crisp answer (memorize, ~60 sec):**

> "Open Banking gives Wealthsimple read-access to deposit transactions with the customer's consent. That replicates the *surfacing* logic — they can show an FHSA prompt to a Scotia customer who has connected their data. **It does not give them a mortgage book, branch advisor network, or the ability to close the loop at year five.** Wealthsimple has been operating in Canada for 12 years and still does not originate mortgages, because mortgage origination is OSFI capital-intensive, B-20 / B-21 regulated, and requires a deposit funding base they don't have. Wealthsimple Banking for Families launched May 21st — it's still a deposit play. The data moat is the *seeding* mechanism. The mortgage moat is the *retention* mechanism. We use the first to acquire the customer in 2026-27, and the second to keep them — for the next 30 years."

**If they push:** *"What about a Wealthsimple-EQ Bank mortgage partnership?"* — Possible in year 3+. By then Scotia has 100K+ FHSA customers with sticky chequing + investing + nascent mortgage relationships. The customer-LTV switch cost compounds.

---

### Risk 2 — "Your unit economics assume optimistic activation. Sensitize me."

**Why this question is dangerous:** Bankers fishbone the math. If we say "it'll work at any rate," that's the wrong answer. They want to see we've actually modeled downside.

**The crisp answer (~45 sec):**

> "Base case is 15% activation. We're break-even at **0.6%.** Here's the model. Eligible Scotia 18-34 chequing base is roughly 1.3 million. In the 3-city pilot we reach about 750,000. At downside 5% activation that's 37,500 FHSAs at the 2023 median contribution of $8,000 — that's $300 million in new AUA in year one, before mortgage attach. CAC is roughly $30 in-app. Blended five-year LTV is $5,000-$8,000 including mortgage attach at 25-40%. **The downside case still produces 100x ROI on the pilot spend.** The risk isn't economic. The risk is timing — if we miss tax season 2027, we lose 12 months."

**If they push on "blended LTV":** Two components. (1) FHSA management fee on Essentials Balanced at ~70 bps MER × growing balance over 5 years = ~$2,500-3,500 per customer. (2) Mortgage attach: 25-40% of FHSA customers buy a home using the balance; Scotia closes the mortgage at industry-standard ~$5,000-8,000 NPV per mortgage. Blended produces $5K-$8K per activated customer.

---

### Risk 3 — "How do you handle suitability if you're recommending an investment in a chequing-app context?"

**Why this question is dangerous:** This is the one a CPA-trained auditor will ask. If we sound vague, we look like undergrad consultants. If we sound precise, we look like product managers who briefed compliance.

**The crisp answer (~50 sec):**

> "Three layers. **One — the in-app surface is *information*, not advice under NI 31-103.** It's a regulated disclosure with a CTA, the same pattern Scotia uses today on the existing 'Explore Smart Investor' tile. **Two — the recommended product is Scotia Essentials Balanced Portfolio, a managed portfolio where firm-level suitability is established at the KYP layer.** The customer's individual KYC is collected from their banking profile and confirmed at activation. This is identical to how Scotia Smart Investor works today — we are not inventing a new compliance pathway. **Three — CIRO registration sits with Scotia Capital Inc., specifically Scotia iTRADE.** All HomeStart account-opening flows route to the registered dealer through the existing infrastructure. Compliance review for this product is a process step, not a redesign."

**If they push:** *"What about the personalized $1,920 tax-savings estimate — is that 'advice'?"* — No. Estimates of tax outcomes based on the customer's own provided income data are calculations, not investment advice. We label clearly as "estimate," show the calculation, and provide a "speak with a Scotia advisor" path. The Canada Revenue Agency itself publishes equivalent tax estimators.

---

## Other expected questions (have prepared answers)

### Q: "What if young Canadians genuinely just don't have the money? You're activating people who don't have $8,000."

**A:** The $1,500 starter is the default, not $8,000. The product is structured to lower the activation hurdle: $1,500 today, $200 a month auto-contribute. At year-end that's $3,900 — well below the $8,000 cap, and the customer has experienced the product. The 2023 CRA data shows the *median* contributor maxed out, which suggests that the population self-selecting into FHSA already has the capital. We're not asking them to stretch; we're surfacing the option at the moment their cash is highest (tax refund).

### Q: "Why FHSA and not TFSA? TFSA has higher flexibility."

**A:** Three reasons. (1) **Emotional valence** — first home is positive; tax-free savings is generic. (2) **Tax deduction** — the FHSA gives immediate tax savings *and* tax-free withdrawal; TFSA gives only the latter. The deduction is the activating hook. (3) **The mortgage closed loop** — FHSA is by design a downpayment account. TFSA is not. We pick FHSA because of the structural retention mechanism on the back end.

### Q: "Open Banking might not actually launch in 2026. What if it slips to 2028?"

**A:** Our urgency case improves, not weakens. If Phase 1 is delayed, the data moat lasts longer — which means Scotia's first-mover window widens. The product is not dependent on Open Banking launching; it's dependent on Open Banking *not having launched yet* when we surface the tax-time prompt. As of March 2026, the Bank of Canada has not committed to a date. We assume the framework lands inside the horizon; if it slips, we benefit.

### Q: "How does this fit Scotia's stated 4 strategic pillars?"

**A:** Directly aligned with two of the four. **"Earn primary client relationships"** — converting depositors into investors is exactly the wedge Scotia announced at Investor Day in December 2023. **"Make it easy to do business with us"** — 90-second activation, KYC inheritance, single tap. The pilot is not a new strategy; it is the operationalization of the existing strategy for the 18-to-34 cohort.

### Q: "Why won't this cannibalize Scotia Smart Investor or Scotia iTRADE?"

**A:** It uses both. HomeStart is a *use-case-specific entry point* into the same infrastructure. The portfolio is Essentials Balanced from Scotia Smart Investor's product suite; the brokerage rails are Scotia iTRADE. Revenue accrues to Scotia Wealth Management. There is no internal cannibalization — there is internal *channel collaboration.* If anything, customers who activate via HomeStart become more likely to expand into other Smart Investor goal-setting flows over time.

### Q: "What's the marketing cost? You said CAC is $30 — that seems low."

**A:** $30 is the *direct* customer cost — push notification + in-app surfacing + 90-second flow servicing. We include amortized engineering build cost; we exclude paid media because the channel *is* the existing app. The eligible 18-34 chequing base opens the Scotia app on average 18+ times a month. We are buying in-app real estate from ourselves. If we layered on a paid social campaign for awareness, the cost would rise to $80-$120 — still well inside the $5K-$8K LTV.

### Q: "What's your view on Scene+ in this play?"

**A:** Out of scope for this pilot. Scene+ is a points-based loyalty mechanic that doesn't materially change the FHSA activation decision. We avoided layering it because cuteness on the front end distracts from the regulatory and unit-economics rigor on the back end. We'd revisit at scale, year 2.

### Q: "What about the newcomer segment? Scotia StartRight is one of your biggest differentiators."

**A:** Year-2 extension. HomeStart for newcomers uses the same FHSA wedge but extends KYC to the pre-SIN onboarding path Scotia already has via StartRight + Nova Credit. We don't lead with it because the newcomer cohort is smaller and the messaging is different, but it's the natural Y2 expansion — and it's a moat Wealthsimple structurally cannot touch.

### Q: "How do you measure success?"

**A:** Four metrics. (1) **FHSA activations** — target 30K in pilot. (2) **New AUA** — target $240M+. (3) **12-month retention with monthly contribution active** — target 70%. (4) **NPS lift in the 18-34 cohort** — target +20 points vs. control. Mortgage attach measured at month 60 against the original cohort.

### Q: "Your timeline is aggressive. You're shipping compliance review in 3 months. Is that realistic?"

**A:** Compliance review for HomeStart is *modification* review, not greenfield. The CIRO registration exists. NI 31-103 firm-level suitability for Essentials Balanced exists. PIPEDA consent infrastructure exists. The compliance work is a delta — a new disclosure flow, a new product-surfacing rule, a new FCAC complaint pathway entry. Three months is tight but doable for a project sponsored at the EVP level. If it slips two months, we hit the tax-season launch with a 3-week shorter campaign — still inside the window.

### Q: "What if the user doesn't end up buying a home? Did you just trap them in an account that has to roll over?"

**A:** FHSA has a 15-year sunset. At sunset, balances roll to RRSP penalty-free, *without using RRSP contribution room.* So even in the "didn't buy a home" outcome, Scotia retains the AUA inside a Scotia RRSP — which is *also* a moat against Wealthsimple. The customer never loses; we never lose the AUA. The worst case is "FHSA becomes a stealth RRSP," which is still a win.

### Q: "Why now and not 12 months ago?"

**A:** Three reasons. (1) Wealthsimple just announced Banking for Families on May 21st, signaling escalation — they're not stopping. (2) Open Banking Phase 1 hadn't been legally cemented (the Consumer-Driven Banking Act passed June 2024); now the framework is locked in for inside our 18-month window. (3) The Feb 2026 Edward Jones data showed the *negative-emotion-about-RRSP* finding for the first time — that's the wedge for leading with FHSA instead of RRSP, which is new strategic information. The window opens now.

### Q: "Are you using AI / GenAI? The case rubric weights 20% on 'use of new tech.'"

**A:** Yes, two ways. **One — the in-app tax-savings personalization** uses a model trained on Scotia transaction-data signals + tax-bracket inference to estimate the per-customer $X tax-savings figure with precision; this is a real ML use case and the lift from generic to personalized is significant. **Two — the 90-second onboarding** uses an LLM-assisted suitability prefill: rather than asking 10 KYC questions, we use the existing Scotia banking profile to infer the answer to 8 of them, and only ask the customer to confirm. Both are scoped, regulator-defensible AI applications. We are not building a chatbot or a robo-advisor — those are the anti-patterns of this rubric.

### Q: "What's the engineering investment?"

**A:** Roughly $3 million across three sub-projects: (1) in-app surfacing engine + personalization model, (2) FHSA opening flow integration with Smart Investor and iTRADE, (3) the 12-month mortgage-pre-approval indicator. Scotia already has the underlying systems; this is integration and surface work, not greenfield platform.

### Q: "Has Scotia ever done a similar in-app activation campaign?"

**A:** Yes. The existing Scotia Smart Investor "Explore" tile is a precedent for in-app product surfacing. The November 2024 Smart Investor refresh that drove the 1 million goal-creation milestone is evidence that in-app surfacing works at Scotia. HomeStart is the next iteration: from generic goal-setting to a moment-specific, cohort-specific, product-specific surfacing.

### Q: "Won't this just shift activation from Wealthsimple to Scotia for customers who would have invested anyway?"

**A:** Some — but most of our target segment hasn't activated *anywhere.* Segment B is the unactivated half. The 1-in-5 Canadians 18-40 already on Wealthsimple are Segment A — and we explicitly chose not to chase them. For Segment B, this is net-new activation, not shifting.

### Q: "What about retention? FHSA contributors might open and never come back."

**A:** Two engagement loops. (1) **Refund moment** — push notification on tax-refund deposit (Apr-May 2027) prompts the customer to add part of the refund to FHSA. (2) **Anniversary nudge** — month 12 surfaces the mortgage pre-approval estimate, which is the moat-visible card. Retention is not an afterthought; it's two of the three screens.

---

## When you don't know an answer

Three acceptable responses, in this order:

1. **"That's a sharp question. Here's how we'd approach answering it: [hypothesis or method]. We'd want to validate that with [Scotia internal data / specific external source] before committing."** — Shows judgment without faking expertise.
2. **"We didn't model that in the pilot scope; we'd surface it for the Q3 readiness review."** — Acknowledges scope.
3. **"I don't know — what's your intuition on it?"** — Last resort. Works if the question is genuinely outside the case scope and you can't bluff. Bankers respect honesty when it's targeted.

**Do not:**
- Bluff with numbers you don't have.
- Talk for more than 60 seconds on any single answer.
- Argue with the judge — acknowledge their point and reframe.
- Use the phrase "great question." Use "fair question" if you must.

---

## Q&A timing

- 5 minutes total. Expect 4-7 questions.
- ~45-60 seconds per answer is the sweet spot.
- If a judge asks a multi-part question, answer the most important part first, then say *"happy to take the second part if useful."*
- If you're running out of time, do **not** start a long answer — give a 15-sec response and offer to follow up.

---

## The closing line (if there's time)

If the moderator says "any final words," **Presenter A** delivers:

> "Scotia is the bank for 18-to-34 Canadians' first paycheques. We have an 18-month window to be the bank for their first investments and their first homes. **Tax season 2027 is the trigger. The mortgage book is the moat.** Thank you."
