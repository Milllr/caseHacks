# [case]Hacks 2026 — Problem Identification
**For:** Miller + team · Scotiabank case · "Closing the Gap"
**Status:** Problem-only. Zero solutioning. Data-backed contrarian framing.
**Build clock:** Case released Sat May 23 1:00 PM → submission Sun May 24 **10:00 AM** (not noon — case package overrides Devpost). ~21 hours of build window.

---

## 0. TL;DR — The single sentence to internalize

> **Scotiabank owns the deposit but is absent from the decision moment — and the data asymmetry that lets it stay relevant expires inside the 18-month case horizon when Open Banking read-access lands.**

Everything below defends this sentence.

---

## 1. The case's stated problem (the trap)

Tarundeep Kaur's case lays the answer out for you:

> *"The barrier to first investment among younger Canadians is more often confidence and clarity than it is capital."*

500 teams will accept this framing and build "Scotia Smart Investor v2 with chatbot + plain language + TikTok-style content." **That is the losing pitch.** It accepts the case's diagnosis at face value, ignores the structural reality, and proposes a UX reskin against a competitor that has spent a decade making UX their religion.

**The framing is also empirically wrong.** Inside the very surveys the case cites:

| Stat the case quotes | Stat the case omits from the same source |
|---|---|
| 43% of younger Canadians uncertain where to begin (CIRO 2024) | **61% of non-investors cite lack of funds; 40% of under-35s borrowed for daily expenses in past year** (same CIRO survey) |
| 30% of Canadians have no investment plan (TD/Maru 2024) | **68% of Gen Z invest at least annually — the highest of any cohort in the same TD survey** |
| 84% of 18-34 report negative emotions about RRSPs (Edward Jones Feb 2026) | **Median renter under-35 has $12,000 in total liquid assets — that's emergency fund, not investing surplus** (StatCan SFS 2023) |
| Wealthsimple has 3M+ Canadians, $50B+ AUM | **Wealthsimple just hit $100B AUA in Oct 2025, three years ahead of plan; 35% of all FHSAs in Canada are held at Wealthsimple; 1-in-5 Canadians under 40 use them** |

The case's "confidence, not capital" thesis collapses the moment you look at any subcut.

---

## 2. The actual root problem (the contrarian read)

There are three layers; the deepest is what wins:

### Layer 1 — Surface (what the case says)
Young Canadians have deposits at Scotia but invest at Wealthsimple.

### Layer 2 — The case's framing
Confidence and clarity, not capital.

### Layer 3 — The actual deepest pain point
**The 18-34 cohort is bimodal, and Scotia is absent at the moment of decision for both halves while its only structural advantage — transaction-data visibility — has a 12-18 month expiration date.**

This is the framing 500 teams will not arrive at, and it's the only one that survives the data.

---

## 3. The Bimodal Cohort — two distinct sub-problems

The 18-34 demographic is not one customer. StatCan SFS 2023 makes the split unambiguous:

### Segment A — "The Affluent Activator" (~15-20% of cohort)
- Under-35 **homeowner** family: median net worth **$457,100**, median liquid assets $37,000
- Under-35 high-income renter (top quintile): non-trivial deposit surplus, FHSA-eligible
- Behavior: **already on Wealthsimple.** Opened FHSA there in 2023-24 (Wealthsimple has 35% of all FHSAs in Canada per CEO Mike Katchen). Files with Wealthsimple Tax (1.7M returns = 1-in-5 self-filers). Treats WS Cash as primary checking. Scotia is now a credit card and an ATM.
- **This segment is mostly lost.** Re-acquisition cost is high; Wealthsimple holds 12-month FHSA cohort and is rolling out USD checking, credit card, mortgage, group RRSP in 2026.

### Segment B — "The Capital-Constrained Curious" (~50-65% of cohort)
- Under-35 **renter** family without principal residence: median NW **$44,000**, median liquid assets **$12,000**
- 40% of under-35s have borrowed money for daily expenses in the past year (CIRO 2024)
- 22% of Gen Z TFSA holders cite "haven't saved enough" as their reason for not investing within their TFSA (TD/Léger Nov 2025)
- 41% of Gen Z and Millennial TFSA holders are NOT investing the money in their TFSA — they treat it as a HISA
- Behavior: has a Scotia chequing account. Sees the Scotia app daily. Sees zero proactive investment guidance. Hears Wealthsimple ads on Instagram and TLDR podcast. Has $50-500/month they could invest if the path was frictionless.
- **This is the actual battle ground.** They haven't been activated by anyone yet. Whoever activates them first wins.

### Segment C — "Newcomer Activator" (sub-cohort overlapping both)
- 483,640 PRs in 2024; 996,400 study permits; 1,499,000 work permits in Canada
- StartRight is Scotia's only meaningful structural moat for this group — Nova Credit partnership solves "no Canadian credit history" problem Wealthsimple cannot
- FHSA eligibility requires Canadian tax residency + SIN — **does NOT require citizenship.** Most newcomers don't know this.
- Pre-SIN window: Scotia can open accounts; Wealthsimple cannot.

**The case rewards a team that explicitly chooses ONE segment.** Solutioning for all three dilutes everything.

---

## 4. The Moment-of-Decision Map — where Scotia is absent

The first investment is triggered by one of these temporal/social events. Map of where the trigger occurs and where Scotia is in the room:

| Trigger | Where it happens | Is Scotia present? | Who owns it today |
|---|---|---|---|
| RRSP deadline (Mar 2) | T4 arrives; CRA Notice of Assessment; tax software | **No** | Wealthsimple Tax (1-in-5 self-filers) |
| Tax refund deposit | CRA direct deposit | **Partially** — into Scotia chequing, but no auto-route to FHSA | Wealthsimple "auto-deposit-to-invest" |
| First job / new job | Employer onboarding; group RRSP setup | **No** for SMB; Scotia has corporate banking but conversion is weak | Wealthsimple for Business (Q1 2026 match offer pushes 1% transfer match) |
| Pay raise | Payroll software, banking app | **No** proactive nudge | Wealthsimple Save More Tomorrow analog |
| Tax refund (~$2K avg) | March-April | **No** proactive intercept | Wealthsimple Cash → Invest funnel |
| Home-purchase intent | Real estate search, mortgage pre-approval | **Partially** — Scotia has mortgages, but no FHSA cross-sell at trigger | Wealthsimple Mortgages (pilot 2026) |
| FOMO from social media | Instagram, TikTok, YouTube finance creators | **No** — Scotia has no organic content presence | Wealthsimple Magazine (Devin Friedman, ex-GQ), TLDR newsletter/podcast |
| Friend recommendation | Texts, Instagram DMs | **No** referral mechanic in Scotia app | Wealthsimple referral ($25/side, up to $5K ladder) |
| Inheritance / parental gift | Branch deposit, advisor referral | **Yes** — but converted to GIC, not investment account | Big Six advisor channel |
| Birthday / New Year (fresh-start effect) | Mental landmark | **No** — Scotia has no campaign tied to it | Wealthsimple "Unreal Deal" (Jan 2026, 1/2/3% match → 85% took top tier) |

**Pattern:** Scotia is present at the heaviest-value moments (mortgage, inheritance) and absent at the most numerous moments (tax season, social trigger, fresh-start). Wealthsimple has built a flywheel that catches the high-frequency triggers and converts them into deposits that compound into the heavy-value moments later.

---

## 5. The deepest pain point — one paragraph

The 18-34 Canadian deposit-only Scotia customer is captured at the wrong moment. Scotia's marketing engages them in *February with RRSP ads* (after Wealthsimple Tax has already intercepted them). Scotia's app surfaces investing under "Advice+" — a menu most users never tap — selling 1.77%-2.23% MER Series A mutual funds via a "robo" that no Canadian personal-finance journalist ranks as a robo (Scotia Smart Investor is not in MoneySense's 2026 Best Robo-Advisors list). Scotia's product surface assumes the customer is going to walk into a branch; Wealthsimple's product surface assumes the customer is going to onboard during a 5-minute Instagram break. The gap is not UX. It is **timing, channel, and incentive alignment** — and Scotia's branch-advisor compensation model structurally prevents it from offering a low-MER ETF portfolio to its own under-35 customers, because that would cannibalize ~$320B+ in ScotiaFunds mutual-fund trailing-fee economics. Wealthsimple has no advisor channel to protect; Scotia has nothing else.

---

## 6. The Strategic Decision Moment — the wedge

If you have to pick ONE specific moment to intercept, the data points to the same place from five angles:

**The First-Window Investor moment**: a 23-29 year old Canadian, ~$45-75K income, ~$2-10K idle in a Scotia chequing/savings account, file-with-Wealthsimple-Tax-or-equivalent in February, no investment account yet OR an inactive employer DCPP. Approaching one of: tax refund, RRSP deadline, first home down-payment-saving phase, fresh-start (Jan 1, birthday, new job).

Why this moment:
1. **FHSA evidence**: 484K Canadians contributed to FHSA in year one; **median contribution = $8K = the annual max**. When the cohort has $8K to commit to a tax-advantaged vehicle that maps to a real life goal, they max it instantly. Confidence is not the bottleneck for this moment.
2. **Wealthsimple's funnel**: 35% of all FHSAs opened in Canada are at Wealthsimple. Capturing the FHSA opens a 15-year tax-advantaged relationship and is the on-ramp to mortgage, RRSP, TFSA cross-sell.
3. **Behavioral evidence**: Auto-enrollment defaults move enrollment from 49% to 86% (Madrian & Shea). Save More Tomorrow quadrupled saving rates (Thaler & Benartzi). The "fresh-start effect" produces 33-50% lift in goal-pursuit at temporal landmarks (Dai/Milkman/Riis 2014). Scotia has deployed none of these structurally for this cohort.
4. **The Open Banking clock**: Bill C-15 (Consumer-Driven Banking Act amendments) received Royal Assent **March 26, 2026**. Phase 1 read-access is planned to land inside the case's 18-month implementation horizon. Scotia's transaction-data advantage is therefore a use-it-or-lose-it asset for exactly this window.
5. **The tax-time intercept**: 1-in-5 self-filing Canadians use Wealthsimple Tax. The Feb-Mar tax-attention spike is a 6-week annual window inside which Scotia could see income, refund deposits, RRSP contribution-room delta, and the customer's full financial picture — but Scotia has no analogous product, partnership, or campaign.

---

## 7. What 500 ChatGPT-driven teams will say vs. what wins

| The obvious answer (lose) | The contrarian answer (win) |
|---|---|
| "Build Scotia Smart Investor v2 with better UX" | Scotia Smart Investor is already not a true robo by industry definition. Reskinning the wrong product loses. |
| "Add AI chatbot for plain-language investment advice" | Wealthsimple already has it. The differentiator is structural, not conversational. |
| "Gamify investing to drive engagement" | Robinhood's confetti drove worse outcomes; this is the reputational opposite of what bankers/auditors will score. |
| "Partner with TikTok/Instagram finfluencers" | 82% of 18-24 already use social media for investment info; Wealthsimple owns this channel. Bank can't credibly enter without regulatory exposure. |
| "Lower fees on iTRADE / Smart Investor" | Marginal lift. Wealthsimple is already at $0. The real cost gap is the 2% MER mutual fund Scotia funnels customers into. |
| "Round-up investing à la Acorns" | $30-50/month per active user is meaningful for habits but not for moving the AUM needle. Acorns is not available in Canada (Moka exists at small scale). |
| "Loyalty program tying Scene+ to investing" | Scene+ is already 15M members and 40% of Scotia clients have 3+ products — pulling Scene+ into investing dilutes its everyday-spend hook. Bankers will see this as cross-sell theater. |
| **The winning frame** | **Choose the bimodal cohort and own the decision moment.** Either: (a) defend the FHSA from Wealthsimple via tax-time intercept + employer-channel auto-enroll, OR (b) own the newcomer-investor funnel via StartRight expansion + pre-SIN onboarding + Nova Credit + cultural-fit branches. Both have 18-month feasibility, structural moats Wealthsimple cannot replicate, and bank-side regulatory comfort. |

---

## 8. The data wedges — 10 facts most teams will not have

The team can drop any of these directly into slides. Each is verified and source-cited.

1. **35% of all FHSAs opened in Canada since launch are at Wealthsimple** — Mike Katchen, Wealthsimple CEO, December 2025 Financial Post interview. Scotia launched its FHSA cash-only in August 2023, missing the launch cohort.

2. **484,320 Canadians contributed to FHSA in 2023; median contribution = $8,000 = the annual max.** (StatCan FHSA Statistics, April 2025). When the cohort has the capital and a clear vehicle, they max it.

3. **57.2% of FHSA contributors are aged 25-34** (StatCan); RBC Direct Investing's own book shows 74% of their FHSAs are held by under-34s. This account type is functionally an 18-34 product.

4. **The median renter family under-35 has $12,000 in total liquid assets** — that's emergency fund money, not investing surplus. (StatCan Survey of Financial Security 2023). The case's "they have the money" framing only describes the affluent ~15-20% of the cohort.

5. **41% of Gen Z and Millennial TFSA holders are NOT investing inside their TFSA** — they use it as a HISA. Top reasons: want quick access (27%); haven't saved enough (22%); lack knowledge (19%); lack confidence (22%). (TD/Léger, Nov 2025). The account is open but the activation didn't happen.

6. **30-34 year olds have an average $55,304 in unused TFSA contribution room** — the largest gap of any cohort. (CRA TFSA Statistics).

7. **Only 13% of 18-34 Canadians have a dedicated financial advisor** (vs. 48% of 55+). (Edward Jones Feb 2026). The traditional advisory channel has collapsed for this cohort.

8. **Wealthsimple captured ~50% of net new online brokerage accounts in Q3 2024** and hit **$100B AUA in October 2025 — three years ahead of plan.** (Wealthsimple newsroom, Globe & Mail). The customer-acquisition battle is largely lost; the under-served subset is the Capital-Constrained Curious half who hasn't been activated by anyone.

9. **Bill C-15 (Consumer-Driven Banking Act) received Royal Assent March 26, 2026.** Phase 1 read-access planned to land inside the case's 18-month horizon. Scotia's transaction-data moat has a known expiration date.

10. **26-30% of 18-34 Canadians report gig work in the past year** (H&R Block, CBC); **45.8% of self-employed taxfilers also have T4 income**. Wealthsimple Tax owns the dual-status filer market with 1.7M returns (~1 in 5 self-filers). Scotia has no analogous product, partnership, or campaign for this cohort.

---

## 9. Constraints on the eventual solution (set the box before designing inside it)

When the next session generates solutions, the design must satisfy ALL of these:

| Constraint | Source |
|---|---|
| 18-month implementation horizon | Case package §"The Situation" |
| Compatible with Scotia's regulatory environment (OSFI, CIRO, FCAC, PIPEDA) | Case package |
| Compatible with existing Scotia product infrastructure (Scotia Smart Investor / SigFig stack, Scotia iTRADE, ScotiaFunds, Scotia Wealth Management) | Case package |
| Moves the needle on **both** account openings AND sustained investment engagement | Case package |
| Cannot cannibalize the ~$320B+ ScotiaFunds mutual-fund channel without separate strategic decision (red flag for judges) | ScotiaFunds AUM, this brief §5 |
| Cannot rely on Scotia building a 5-year editorial brand voice that competes with Wealthsimple Magazine | Structural — Scotia legal cannot publish that voice |
| Must address the bimodal cohort honestly — explicit choice of segment, not "everyone 18-34" | StatCan SFS 2023, this brief §3 |
| Must engage Scotia at a specific trigger moment, not abstractly "improve the app" | Moment-of-decision map, §4 |
| Must be defensible against judges who are bankers, auditors, consultants — viability, regulatory awareness, market sizing, polish | Rubric: 60% strategic/feasibility weight, 20% innovation, 20% presentation |
| Must produce a demo-able prototype (Stitch / Figma / Lovable / Codex acceptable) showing key user flow | Case package submission requirements |

### Hard guardrails (do not violate)
- **Do not propose a fintech-style robo-advisor.** The robo race is structurally lost — even Wealthsimple's robo is now a loss leader. JPMorgan, U.S. Bank, UBS, Schwab have all closed or reduced theirs in 2025-2026.
- **Do not pitch "Scotia → social media presence."** Bankers will read this as Scotia ceding its credibility to the very channel CIRO and OSC have been warning about (finfluencer-driven decisions). The case rubric rewards regulatory awareness.
- **Do not propose cryptocurrency.** Big Six are structurally excluded; Wealthsimple Crypto is CIRO-registered. This is not Scotia's lane.
- **Do not solution for "all 18-34."** Pick a segment, defend the choice with market sizing.
- **Do not propose a chatbot as the primary intervention.** Bankers have heard 100 fintech chatbot pitches. It will read as 2023.

---

## 10. The four prompts the next session should answer

Before writing prototype copy, the next Cowork session must crisply answer:

1. **Which segment?** Affluent Activator (re-acquire from Wealthsimple), Capital-Constrained Curious (first-activate), or Newcomer Activator (StartRight expansion)? Pick one. Defend market-size math.

2. **Which moment?** Tax-time intercept, employer-channel auto-enroll, FHSA-at-graduation, branch-based newcomer onboarding, life-event trigger (mortgage pre-approval), or fresh-start campaign? Pick one. Pin to a calendar moment.

3. **Which Scotia asset does the solution lean on that Wealthsimple cannot copy?** Branch network, multilingual advisors, Nova Credit partnership, mortgage book, group RRSP at corporates, CDIC simplicity, Scene+ loyalty, transaction-data visibility (before Open Banking compresses it), or international/newcomer remittance corridors? Name the asset.

4. **What's the killer slide?** A single chart, number, or visual that — if a banker remembers one thing from your 10 minutes — they remember this. Possible candidates: "35% of FHSAs are at Wealthsimple — Scotia's launch cohort is gone unless we intercept this generation"; "Median renter under-35 has $12K liquid — the wedge is auto-enroll, not education"; "Open Banking lands in 18 months — Scotia's data moat has an expiration date."

---

## 11. Quote bank — drop these into the deck verbatim

- **Mike Katchen (Wealthsimple CEO), Dec 2025 Financial Post:** *"For the first time, we saw people move their entire financial relationship to Wealthsimple this year."*
- **Mike Katchen, same source:** *"Canada doesn't need another bank. We need something better than the bank."*
- **Wealthsimple Magazine editorial brief:** *"Financial content is usually pretty boring. It's almost always made by people who work in finance and don't know what it's like to be a normal person."*
- **CIBC Investor's Edge poll (Sept 2025):** *"79% of Gen Z Canadians feel anxious about investing — compared to 64% of Baby Boomers. 45% of Gen Z & Millennial investors rely more on instinct than data."*
- **Edward Jones (Feb 2026):** *"84% of 18-34 Canadians report negative emotions about RRSP contributions — confusion (40%), unsure they're maximizing the opportunity (37%), worried not contributing enough (36%)."*
- **OSC "Getting Started" (Notice 11-782):** *"Many millennials are at a life stage where it is difficult to picture one's future self, are overwhelmed with too many options to know where to begin, and lack opportunity to practice their investing skills."*
- **Madrian & Shea (QJE 2001) — the foundational auto-enroll study:** *"Switching from opt-in to auto-enrolment defaults raised 401(k) participation from 49% to 86%."*
- **Million Dollar Journey on Scotia iTRADE commenter:** *"Between iTrade and Scotia bank it's a wonder I don't just put my money under a mattress."*
- **Globe and Mail on Wealthsimple:** *"Younger Canadians are skipping traditional banks and going straight to platforms that feel more in tune with how they live: mobile-first, flexible, and transparent."*

---

## 12. Open questions for the next session

These are best resolved during solution design, not during problem identification:

1. Do we solve for Segment A (re-acquire from Wealthsimple), Segment B (first-activate the unactivated), or Segment C (newcomer)? **Recommend: Segment B + C blend or Segment B alone. Segment A is mostly lost.**
2. Do we lean into the Open Banking expiration date as a feature (Scotia's data advantage TODAY) or hedge against it (Scotia's structural assets that survive)? **Both work; pick one narrative.**
3. Do we propose a *product* (a new account / feature / tool inside Scotia online banking) or a *campaign* (tax-season intercept, employer partnership) or a *partnership* (Scotia × H&R Block, Scotia × employer payroll platform)? Solutions trend more polished when they pick one.
4. What does the prototype demo show? A new screen in the Scotia app? A standalone onboarding flow? A landing page? A Figma flow of an FHSA-at-graduation kit? **The prototype should show the killer moment from the killer segment, not every screen.**
5. How does the business case slide model lift? Conservative case: 1% incremental FHSA acquisition in Year 1 of new program. Aggressive case: 10% incremental. Both produce defensible math given $1T wealth transfer + intergenerational stickiness.

---

## 13. Refined handoff prompt for the next Cowork session — SOLUTION DESIGN

> Copy everything between the `===` lines into a new Cowork session along with this `CASEHACKS-2026-PROBLEM.md` file AND the original case PDF (`_case_HACKS_Participant_Case_Package_2026.02.pdf` in /uploads).

```
=============================================================================
HANDOFF: Generate the [case]Hacks 2026 winning solution.

You are taking over from an exhaustive problem-identification pass. Read
CASEHACKS-2026-PROBLEM.md in full. It is the source of truth on: the
contrarian problem framing (§2), the bimodal cohort split (§3), the moment-
of-decision map (§4), the deepest pain point (§5), the strategic decision
moment (§6), the wedges (§8), and the constraints box (§9).

THE BIG IDEA — do not violate this:
The case's stated "confidence vs capital" framing is wrong under the data.
The actual problem is that Scotia is absent from the moment of investment
decision for a bimodal 18-34 cohort, and the data moat that gives it any
structural advantage over Wealthsimple expires inside the 18-month case
horizon when Open Banking Phase 1 lands. The winning solution chooses ONE
segment + ONE moment + ONE Scotia structural asset, and proposes a tightly
scoped intervention that bankers/auditors/consultants will score on
business viability, regulatory awareness, and feasibility — not technical
novelty.

Your job, in this order:

1. CHOOSE THE SEGMENT (from §3). Defend with market-size math:
   - Segment A: Affluent Activator (re-acquire from Wealthsimple)
   - Segment B: Capital-Constrained Curious (first-activate the
     unactivated half)
   - Segment C: Newcomer Activator (StartRight expansion)
   Default recommendation: B (largest, least-captured, structurally fits
   Scotia's deposit-customer base). C is defensible if the team has a
   newcomer-specific narrative angle.

2. CHOOSE THE MOMENT (from §4). Pin to a calendar trigger:
   - Tax-time intercept (Feb-Mar 2027 falls inside the horizon)
   - Employer-channel onboarding (group RRSP / FHSA auto-enroll)
   - Fresh-start campaigns (Jan 1, birthday, new job)
   - Life-event triggers (graduation, mortgage pre-approval)
   - First-paycheque auto-enroll
   Default: Tax-time intercept + auto-enrollment on FHSA. Single moment,
   highest behavioral evidence, sits inside horizon.

3. NAME THE SCOTIA STRUCTURAL ASSET the solution leans on (from §9):
   - Branch network + multilingual advisors
   - Nova Credit + StartRight + pre-SIN onboarding
   - Mortgage book (FHSA → mortgage closed loop)
   - Group RRSP / corporate banking relationships
   - CDIC simplicity (one trust layer, not three)
   - Scene+ loyalty (only if it makes sense)
   - Transaction-data visibility (use-it-or-lose-it pre-Open-Banking)
   The asset must be something Wealthsimple structurally cannot copy.

4. DESIGN THE INTERVENTION. ONE focused product/campaign/partnership.
   Define:
   - Product name (single working name)
   - The 30-second pitch
   - The user journey: minute 0 → minute 5 → month 1 → month 12
   - Three screens of prototype (Figma / Stitch / Lovable mockup spec —
     do not waste time over-designing)
   - The Scotia internal owner (which division ships this)
   - Regulatory considerations (KYC, NI 31-103 suitability, PIPEDA,
     FCAC complaint-handling, OSFI capital implications if any)
   - Why it cannot be copied by Wealthsimple inside the same horizon

5. BUILD THE 10-MINUTE PITCH DECK STRUCTURE.
   The case rubric weights are 30% Problem Diagnosis + 30% Solution &
   Feasibility + 20% Innovation & Use of New Tech + 20% Presentation. 60%
   of your score lives in the first six slides; do not over-invest in
   demo polish at the expense of strategic framing.

   Target 12-14 slides (sentence-titled, banker-readable):
   - Slide 1: Hook + one-liner ("We're _____ for _____.")
   - Slide 2: The problem most teams will miss (the bimodal cohort + the
     moment-of-decision map). Use the §8 data wedges. THE KEY MOVE: state
     the case's framing, then defensibly reframe it. Bankers respect
     teams that show critical thinking.
   - Slide 3: The deepest pain point in one sentence + chart
   - Slide 4: Market size (TAM/SAM/SOM) using the wedge stats (35% FHSA
     Wealthsimple share, 484K FHSA contributors, ~ $1T intergen transfer)
   - Slide 5: Why now (Open Banking expiration; Wealthsimple's $100B AUA
     three years ahead of plan; the 18-month horizon)
   - Slide 6: Solution overview (one sentence) + the Scotia asset it
     leans on (the moat slide)
   - Slide 7-9: Live demo / prototype walkthrough (3 screens max)
   - Slide 10: Business case / unit economics (acquisition cost,
     LTV per acquired investor, expected lift)
   - Slide 11: Regulatory feasibility (PIPEDA, NI 31-103, OSFI, CIRO)
   - Slide 12: 18-month implementation roadmap (Q1 / Q2 / Q3-4 / Y2)
   - Slide 13: Ask — pilot scope, partnership target, success metrics
   - Slide 14: Appendix / Q&A backstop

6. WRITE THE OPERATIONAL DOCS (concrete; ready to execute):
   - PITCH.md — the slide-by-slide script, timed to 9:30 to leave buffer
   - DEMO.md — three-screen prototype spec (Stitch / Lovable / Figma)
   - TASKS.md — who does what in the remaining 21-hour build window,
     given a 4-person team
   - QA.md — anticipated banker Q&A questions with crisp answers

7. STRESS-TEST AGAINST THE ANTI-PATTERNS in §9. If the proposed
   solution is a chatbot, a UX reskin of Scotia Smart Investor, a TikTok
   campaign, a crypto play, or a robo-advisor, GO BACK to step 2 and
   pick a different moment.

CONSTRAINTS:
- 21-hour build window (case released 1 PM Sat → due 10 AM Sun)
- Prototype tools: Figma, Stitch, Lovable, Codex, v0. No actual code
  required. Ship polished mockups; bank rubric will not reward working
  software at the cost of strategic depth.
- Judges are bankers, auditors, consultants — polish, viability,
  regulatory awareness, market math beat technical novelty.
- 4-person team distributed across laptops. Coordination via Discord
  pinned message + a single TASKS.md.

OUTPUT ORDER:
1. The chosen segment, moment, and Scotia structural asset (with
   defense)
2. The intervention spec (product name + journey + screens + regulatory)
3. The 12-14 slide deck structure with content per slide
4. The four operational docs
5. A risk register: top 3 things that could blow up at Q&A, with
   prepared answers

Do not ask the team clarifying questions before producing #1 and #2. If
the problem-identification doc is missing critical context, surface it
as a bold line at the top and proceed on the best inference. The team's
build clock has already started.

Begin.
=============================================================================
```

---

## 14. Closing — what to internalize before solution design

1. **The case's framing is the bait.** The teams that accept it write a generic Wealthsimple-clone pitch.
2. **The data is bimodal.** Pick a side. The Capital-Constrained Curious is the actual battle ground.
3. **The moment is the wedge.** Tax-time + FHSA + fresh-start landmark = the highest-probability intercept window inside the horizon.
4. **The Scotia moat is structural, not technological.** Branches, advisors, lending, employer relationships, Nova Credit, CDIC simplicity. Wealthsimple cannot copy these; Scotia must lean into them, not away from them.
5. **The clock matters.** Open Banking lands in 12-18 months. Scotia's data advantage is use-it-or-lose-it. The case's 18-month horizon is not arbitrary.

If the next session can pin the team to one segment + one moment + one Scotia asset + one demo flow inside the first 4 hours of build, the pitch writes itself.

---

## Source map (only the load-bearing citations)

**Case package and event:**
- [case]Hacks 2026 case package PDF (in /uploads)
- Devpost: https://casehacks-2026.devpost.com

**The numbers that win the deck:**
- StatCan Survey of Financial Security 2023: https://www150.statcan.gc.ca/n1/daily-quotidien/241029/dq241029a-eng.htm
- StatCan RRSP/TFSA/FHSA Contributions 2023: https://www150.statcan.gc.ca/n1/daily-quotidien/250401/dq250401a-eng.htm
- CRA FHSA Statistics: https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/first-home-savings-account/fhsa-statistics.html
- CIRO 2024 Investor Survey: https://www.ciro.ca/sites/default/files/2024-06/2024-Investor-Survey-Report-EN.pdf
- TD/Maru Nov 2024 Saving & Investing: https://stories.td.com/ca/en/news/2024-11-14-only-49-25-of-canadians-believe-they-are-saving-enough-to-reac
- TD/Léger Nov 2025 TFSA Survey: https://td.mediaroom.com/2025-11-12-Risking-No-Returns-4-in-10-Young-Canadians-Missing-Out-on-TFSA-Growth-TD-Survey
- Edward Jones Feb 2026 RRSP Survey: https://www.edwardjones.ca/ca-en/why-edward-jones/news-media/press-releases/canadians-feel-poorly-about-retirement-planning
- CIBC Investor's Edge poll Sept 2025: https://cibc.mediaroom.com/2025-09-29-Nearly-Half-of-Young-Canadians-Invest-on-Instinct-Over-Information,-New-CIBC-Investors-Edge-Poll-Finds
- CSA Investor Index 2024: https://www.securities-administrators.ca/wp-content/uploads/2024/07/CSA-2024-Investor-Index-Full-Report.pdf
- FCAC Survey Findings on Financial Advice (Nov 2025): https://www.canada.ca/en/financial-consumer-agency/news/2025/11/survey-findings-offer-glimpse-into-how-canadians-seek-financial-advice.html
- OSC "Missing Out" + "Getting Started" Notice 11-782: https://www.getsmarteraboutmoney.ca/resources/publications/research/getting-started-human-centred-solutions-to-engage-ontario-millennials-in-investing/

**Wealthsimple intelligence:**
- Mike Katchen FP / Yahoo interview Dec 2025: https://ca.finance.yahoo.com/news/wealthsimples-michael-katchen-plans-big-161641970.html
- Wealthsimple $100B AUA newsroom: https://newsroom.wealthsimple.com/wealthsimple-powers-the-next-evolution-of-investing-in-canada
- iPhone in Canada 1-in-5 under-40 stat: https://www.iphoneincanada.ca/2026/05/09/1-in-5-canadians-under-40-uses-wealthsimple-and-it-just-had-a-record-quarter/
- Ipsos Wealthsimple penetration: https://www.ipsos.com/en-ca/ipsos-data-indicates-wealthsimples-market-penetration-canada-steadily-increasing
- Globe & Mail "Wealthsimple is starting to look like Canada's next big bank": https://www.theglobeandmail.com/investing/personal-finance/article-wealthsimple-ceo-michael-katchen-big-bank/

**Scotia Smart Investor reality check:**
- MoneySense Best Robo-Advisors 2026 (note Scotia is absent): https://www.moneysense.ca/save/investing/best-robo-advisors-in-canada/
- Scotia Smart Investor: https://www.scotiabank.com/ca/en/personal/investing/scotia-smart-investor.html
- Scotia iTRADE Trustpilot: https://ca.trustpilot.com/review/www.scotiaitrade.com
- Million Dollar Journey Scotia iTRADE review: https://milliondollarjourney.com/scotia-itrade-online-brokerage-review.htm
- ScotiaFunds fee brochure: https://www.scotiabank.com/ca/en/files/16/09/Customer-Fees-Brochure-ENG.pdf

**Open Banking / regulatory clock:**
- Budget 2025 Consumer-Driven Banking framework: https://www.canada.ca/en/department-finance/programs/financial-sector-policy/open-banking-implementation/budget-2025-canadas-framework-for-consumer-driven-banking.html
- McMillan LLP Open Banking 2025 update: https://mcmillan.ca/insights/publications/canadas-open-banking-framework-key-updates-from-budget-2025/

**Behavioral evidence base:**
- Madrian & Shea (QJE 2001) — auto-enrollment: https://www.nber.org/papers/w7682
- Thaler & Benartzi (JPE 2004) — Save More Tomorrow: https://www.journals.uchicago.edu/doi/10.1086/380085
- Dai, Milkman & Riis (Management Science 2014) — Fresh-Start Effect: https://pubsonline.informs.org/doi/10.1287/mnsc.2014.1901
- CFA Institute / FINRA Foundation — Gen Z & Investing 2023: https://rpc.cfainstitute.org/research/reports/2023/gen-z-investing
