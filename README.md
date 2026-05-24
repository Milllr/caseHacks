# ScotiaSeed
**caseHacks 2026 submission. Scotiabank "Closing the Gap" challenge.**

> Scotia already has 1.25 million young Canadians as deposit customers. Wealthsimple is acquiring 80,000 of them as investment customers every quarter. ScotiaSeed converts our existing customers into investors using rails Scotia already owns, in under five minutes, for less than Scotia already spends to acquire a single student chequing account.

---

## Quick start for new team members

If you just walked in: open `TEAM_CONTEXT.md`, read it once, and paste the entire file into any new Claude or ChatGPT chat as your first message. That file is the source of truth for every locked decision. Then read `PRESENTATION_SCRIPT.md` to understand the pitch.

If you are about to present: open `PRESENTATION_SCRIPT.md` and run it on a stopwatch. Then open `03_ScotiaSeed_QA_Defense_Pack.md` and skim the five one-liners at the bottom.

If you are designing or writing: read `SCOTIABANK_BRAND_GUIDELINES.md` first. Every artifact must follow those colors, fonts, voice patterns, and the no-em-dash rule.

---

## The two submission deliverables

These go to Devpost. Rename them with your actual team name before upload (the case is strict about `TeamName_SlideDeck` and `TeamName_Prototype` formatting on page 12).

| File | Purpose |
|---|---|
| `ScotiaSeed_SlideDeck.pptx` | The 10-slide pitch deck. Built for the strict 10-minute presentation window. |
| `ScotiaSeed_Prototype.zip` | Eight phone mockups. Required to be submitted separately from the deck per the case rules. |

---

## The five working documents

These never get submitted. They are how the team stays aligned.

| File | What it is | Who reads it |
|---|---|---|
| `TEAM_CONTEXT.md` | Master brief and the source of truth for every locked decision. **Canonical when anything else disagrees.** | Everyone, every chat session |
| `SCOTIABANK_BRAND_GUIDELINES.md` | Verified Scotia colors, typography, voice, and design patterns. Source-cited. | Designers, deck builders, anyone writing copy |
| `PRESENTATION_SCRIPT.md` | Slide-by-slide speaker script with timing, stage directions, and the Maya hook. | Presenters and the team lead |
| `01_ScotiaSeed_Validation_Memo.md` | Early-phase strategic validation memo with full reasoning trail and source links. Predates final locked decisions in some specifics. | Anyone defending strategic choices in Q&A |
| `03_ScotiaSeed_QA_Defense_Pack.md` | 20 anticipated judge questions with headline answers and backup math. | Read in the 15-minute pre-pitch window |

---

## The hard rules

These come from `TEAM_CONTEXT.md` and apply to every artifact this team ships.

1. No em-dashes anywhere. Periods, colons, parentheses, or "and" instead. Em-dashes are the strongest tell of AI-generated text and judges have read 39 other AI-assisted decks today.
2. No invented data. Every number traces back to the case package, a public source, or a clearly-labelled assumption.
3. Match Scotia brand exactly. Use `#EC111A` Scotia Red, the Segoe UI font stack with Georgia for serif moments, and the voice patterns in the brand guidelines doc.
4. Never claim to be Scotiabank. All artifacts are clearly marked as a CaseHacks 2026 team proposal.
5. Lead with the customer, not the bank. Every slide and script line starts from a real person's experience.
6. Quote the case verbatim when citing data. Name the page number.

---

## The locked plan in one paragraph

ScotiaSeed is a 24-month matched-contribution program for Scotia's existing 18 to 24 year old deposit customers. The user opens a Scotia investment account (default: Scotia Essentials Portfolios inside a FHSA) in under five minutes, with their identity pre-filled from existing banking via FINTRAC Method 5. They get $25 instantly, then up to $275 more in milestone unlocks across 24 months. On every Scotia debit purchase, Scotia routes 2 cents into their investment account, capped at $50 over the program. The dashboard shows two side-by-side ledgers: "Your money" in Charcoal (deposits, round-ups, growth, fully liquid) and "Scotia's match" in Scotia Red (locked for 24 months). If a user withdraws into Scotia's portion, they have a 90-day window to restore it or they forfeit the program. The bonus is the hook. The auto-PAC is the moat. The two-ledger UI is the trust.

---

## Repository structure

```
caseHacks/
.
├── README.md                              this file, the entry point
.
├── TEAM_CONTEXT.md                        source of truth, paste into Claude/ChatGPT
├── SCOTIABANK_BRAND_GUIDELINES.md         verified brand reference
├── PRESENTATION_SCRIPT.md                 10-minute speaker script
├── 01_ScotiaSeed_Validation_Memo.md       strategic validation, source links
├── 03_ScotiaSeed_QA_Defense_Pack.md       Q&A prep with 20 questions
.
├── ScotiaSeed_SlideDeck.pptx              SUBMIT THIS (rename to TeamName_SlideDeck.pptx)
├── ScotiaSeed_Prototype.zip               SUBMIT THIS (rename to TeamName_Prototype.zip)
.
├── deck/                                  deck build artifacts (pptxgenjs source)
│   └── build_deck.js
├── prototype/                             prototype build artifacts
│   ├── build_mockups.py                   regenerates the 8 SVG mockups
│   ├── screen_*.svg                       8 source SVG files
│   └── screen_*.png                       8 rendered PNG files
.
└── _archive/                              previous direction, preserved for reference
    └── homestart_direction_v1/            HomeStart was an earlier strategic direction
```

---

## The pre-submission checklist

Before uploading to Devpost.

1. Rename `ScotiaSeed_SlideDeck.pptx` to `[YourTeamName]_SlideDeck.pptx`. Per case page 12.
2. Rename `ScotiaSeed_Prototype.zip` to `[YourTeamName]_Prototype.zip`.
3. Open the deck on the actual presentation laptop. Confirm fonts render. Confirm slide 6's two-ledger image looks crisp.
4. Confirm slide 1 says "She is twenty-two." cleanly on one line. If not, your laptop did not load the Georgia or Segoe UI fallback correctly.
5. Read the 10-minute script aloud with a stopwatch. If you go past 10:00, the case rules cut you off mid-sentence.
6. Skim the Q&A defense pack one-liners. Memorize the elevator pitch at the bottom.
7. Upload deck and prototype zip separately to Devpost as required.
8. Confirm submission shows up on the portal before the May 24 10:00 AM deadline.

---

## Sources for every claim

Every external number cited across these docs is sourced. The full citation list lives in `01_ScotiaSeed_Validation_Memo.md`. The most load-bearing sources:

1. The case package: `_archive/homestart_direction_v1/...` had a copy. The active reference is the uploaded `_case_HACKS_Participant_Case_Package_2026.02.pdf`.
2. Monotype's published Scotiabank case study, confirming Frutiger and ITC Century as the official typefaces.
3. CIRO and FINTRAC documentation for the KYC and suitability defense.
4. CRA guidance on TFSA contribution treatment for the bonus-vehicle decision.
5. Wealthsimple, Acorns, Vanguard, and Edward Jones public research for retention benchmarks.
6. Scotia's own 2025 Annual Report and December 2023 Investor Day for the strategic pillars alignment.

---

## One-line elevator pitch

Scotia already has 1.25 million young Canadians as deposit customers. Wealthsimple is acquiring 80,000 of them as investment customers every quarter. ScotiaSeed converts our existing customers into investors using rails Scotia already owns, in under five minutes, for less than Scotia already spends to acquire a single student chequing account.

Use this in the hallway. Use it as the closing line if Q&A leaves you 30 seconds at the end.
