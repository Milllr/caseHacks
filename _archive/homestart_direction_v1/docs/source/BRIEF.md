# [case]Hacks 2026 — Preliminary Battle Plan

**Author:** preliminary research pass (Claude, May 23 2026, ~9 hours before case prompt drop)
**For:** Miller + team, [case]Hacks @ Wilfrid Laurier University
**Status:** Verified against live sources. Open questions flagged inline. Hand this entire document to the next Cowork session along with the prompt at the bottom.

> **READ ME FIRST.** Two facts that change everything you thought you knew about this event:
>
> 1. **You have ~23 hours of build, not 48.** The case prompt drops Saturday May 23 at 1:00 PM EDT. Submissions close Sunday May 24 at **noon**. That is twenty-three hours, not forty-eight.
> 2. **Sixty percent of your score is business thinking.** Rubric weights are 30% Problem Diagnosis & Strategic Thinking, 30% Solution & Feasibility, 20% Innovation/Tech, 20% Presentation. This is a case competition wearing a hackathon hoodie. The judges are bankers, auditors, and consultants. Build the deck like you'd build the code.

---

## 1. Event facts (confirmed against Devpost)

| Field | Value |
|---|---|
| Event | [case]Hacks 2026 (formerly The GoldenHack) |
| Venue | Wilfrid Laurier University, Waterloo ON |
| Dates | Fri May 22 – Sun May 24 2026 |
| Case prompt released | **Sat May 23, 1:00 PM EDT** (Discord live announcement) |
| Submission deadline | **Sun May 24, 12:00 PM EDT** (hard) |
| Winners announced | Sun May 24, 5:00 PM EDT |
| Team size | up to **4** |
| Total participants registered | ~44 (≈ 10–15 teams — placing is plausible) |
| Title sponsor | **Scotiabank** (only sponsor) |
| Judges | 10 — RBC, PwC, EY, Deloitte, Sun Life, Scotiabank ×2, SAS, Lyft, Oracle. Heavy finance/consulting tilt. |
| Prize pool | $1,000 / $500 / $250 CAD + Best UI + Most Creative + Scotiabank coffee chats |
| Presentation format | **10 min present + 5 min Q&A** (strict). Arrive 15 min early. HDMI + USB-C adapters provided. |
| Submission deliverables | Slide deck (`TeamName_SlideDeck`) + Prototype screenshots (`TeamName_Prototype`). Video is **optional** in 2026 (was required prior). No explicit GitHub-public requirement. |
| Code policy | Fresh code only. **Open-source libs, public APIs, AI prototyping tools (Lovable, Codex, Stitch, Figma) all explicitly allowed.** Pre-built apps banned. |

### Rubric — exact weights

| Criterion | Weight |
|---|---|
| Problem Diagnosis & Strategic Thinking | **30%** |
| Solution & Feasibility | **30%** |
| Innovation, Prototype & Use of New Tech | **20%** |
| Presentation, Delivery & Time Management | **20%** |

### Key URLs
- Devpost: https://casehacks-2026.devpost.com
- Rules: https://casehacks-2026.devpost.com/rules
- Schedule: https://casehacks-2026.devpost.com/details/dates
- Marketing site: https://www.casehacks.ca (JS shell, low info)
- Predecessor winners (signal for taste): https://thegoldenhack3.devpost.com/project-gallery

### Past-winner pattern (GoldenHack 3.0 → 4.0)
Winners were **focused, narratively clean consumer-facing products**. Recurring themes: student life, fintech-adjacent, gamified personal finance (PokéPlanner), course/career tools, sponsor-API submissions when the sponsor offered a track. Several winners were solo or pairs, not max teams.

---

## 2. The validated stack (May 2026)

**Constraints met:** 100% free at demo-scale, deployable from macOS/Windows/Linux, judge-phone-accessible URL, TypeScript-clean for Claude Code, 1-day-to-polish.

```
Next.js 15.5 (App Router, React 19)
  + Convex (DB + realtime + storage + functions + auth-adapter)
  + Clerk (auth — 50k MAU free; drop-in <SignIn/>)
  + Vercel AI SDK v6 with @ai-sdk/anthropic v3.0.78
        model: anthropic('claude-sonnet-4-6')
        fallback: 'claude-haiku-4-5-20251001'
  + shadcn/ui on Tailwind v4 + sonner (toast) + lucide-react
Deploy: Vercel (Hobby) — or Cloudflare Pages if commercial-use clause matters
Share:  QR code of deployed URL — judges scan from their phones
Fork:   github.com/get-convex/convex-saas  (TanStack + Convex Auth + shadcn)
        or convex.dev/templates/convex-saas-nextjs (Next.js + Clerk variant)
Tunnel: cloudflared tunnel --url http://localhost:3000   (free, no signup)
```

### Why each pick (and what I considered and rejected)

**Next.js 15.5 over 16.x** — 16.2.6 is stable, but 15.5 has the best starter ecosystem and is what every BaaS targets first. Don't chase the bleeding edge with 23 hours on the clock.

**Convex over Supabase/Firebase** — Supabase free tier *pauses your project after 7 days of inactivity*, which is a real risk if a judge returns Sunday afternoon. Convex's 1M function calls / 0.5 GB storage hard cap is plenty for demo traffic, realtime is the default (not opt-in), and the TypeScript ergonomics make Claude Code measurably faster. Firebase Spark's daily caps trip on realtime listeners.

**Clerk over Auth.js v5 / Supabase Auth / WorkOS** — Auth.js requires per-provider config work you don't want at 2 AM. WorkOS AuthKit is B2B/SSO overkill. Clerk gets you magic-link + Google + GitHub + passkeys in one `<SignIn/>` component in under 10 minutes. Free up to 50k retained MAU (raised from 10k in 2025).

**AI SDK v6 over Mastra / LangChain JS** — Native multi-step tool calling via `stopWhen`/`maxSteps` handles 80% of agentic loops without a framework. Reach for Mastra only if memory+evals+multi-step workflows are the *centerpiece* of the product. LangChain JS DX remains the worst of the three.

**Vercel over Cloudflare Pages (with one footnote)** — Vercel ships the best Next.js polish in the world (instant previews, perfect Convex integration). The footnote: **Vercel Hobby is non-commercial under fair-use** — for a hackathon prize-purse project it's a grey area. If anyone on the team is risk-averse, switch to Cloudflare Pages (unlimited bandwidth, commercial-use OK, `wrangler pages deploy`).

**shadcn/ui + Tailwind v4 over Mantine / HeroUI / daisyUI** — Mantine's visual identity is too recognizable ("this is a Mantine app"). daisyUI reads "side project" to consultant judges. HeroUI is a fine runner-up but less customizable. shadcn ships you the consultant-deck aesthetic out of the box — pair with `sonner` for toasts (the old `toast` component is deprecated), `lucide-react` for icons, and Inter Tight or Geist as the font.

### Recent breaking changes you must know
- **Vercel Hobby** is non-commercial per fair-use — read the wording.
- **Railway free tier eliminated**; prepaid credit option removed early 2026. Skip.
- **Fly.io** is trial-only now. Skip.
- **Netlify build minutes** cut 300 → 100. Stay under it or use Vercel/Cloudflare.
- **Astro acquired by Cloudflare** (Jan 2026) — fine, just know the direction.
- **Remix → React Router v7**; "Remix 3" is a separate young framework.
- **shadcn `toast` deprecated → `sonner`**.
- **Drizzle is now the default ORM in create-t3-app** (over Prisma).
- **Auth.js v5** finally stable (late 2024); **tRPC v11** out.
- **Cal.com forked into `cal.diy`** (MIT) in April 2026 — skip; too heavyweight to fork.
- **Claude Opus 4.7** (`claude-opus-4-7`) requires *adaptive* thinking — old fixed-budget thinking API is rejected. Default to `claude-sonnet-4-6` for production calls, `claude-haiku-4-5-20251001` for cost-sensitive loops.

### Starter repo ranking
1. **Convex SaaS Starter** — TanStack + Convex Auth + Stripe + Resend + shadcn. **Best overall; closest single-fork demo.**
2. **Convex Ents SaaS Next.js Starter** — Next.js App Router + Clerk + orgs/teams + shadcn. Pick this if the case implies multi-user organizations.
3. **v1.run** — Monorepo, code reuse, opinionated production-ready. Heavier; pays off for polish.
4. **create-t3-app** — Use only if you're not using Convex.
5. **Trigger.dev basic-starter** — Layer on top of #1 or #2 only if the case is background-jobs / agent-workflow heavy.

---

## 3. Claude Code setup — the architectural priority

**The failure mode you're avoiding:** Claude rewrites working code because it forgot what was already done. Prevent it with three files and a 60% compaction discipline.

### The minimal `.claude/` layout that actually matters

```
.claude/
  settings.json          # hooks + lint config
  hooks/
    post-bash.sh         # auto-lint after risky commands
  commands/              # (== skills/; equivalent in 2026)
    ship.md              # /ship — lint, type-check, test, build, push
    plan.md              # /plan — read PLAN.md, propose next task
    review.md            # /review — bundled /code-review --effort medium
CLAUDE.md                # root architecture rules (committed)
PLAN.md                  # session state, owners, blockers (committed)
TASKS.md                 # flat checklist with owners (committed)
```

That is the entire setup. Resist adding more on day one.

### Root `CLAUDE.md` template (commit this on day 0)

```markdown
# Project: [name]

## Tech Stack
- Next.js 15.5 App Router (Server Components primary)
- Convex for backend (schema in /convex/schema.ts)
- Clerk for auth
- TypeScript strict mode — no `any`
- TailwindCSS v4 + shadcn/ui + sonner + lucide-react
- @ai-sdk/anthropic, model: anthropic('claude-sonnet-4-6')

## Architecture Rules
- All mutations are Convex functions in /convex/*.ts
- All pages are Server Components by default; client only when needed
- Components in /app/components; hooks in /app/hooks
- No client-side data fetching; use Convex useQuery
- Every form validates with zod before mutation

## Critical Context (Do Not Forget)
- Convex schema relationships: see /convex/schema.ts header comments
- Feature flags in PLAN.md "Feature Flags" section
- Demo seed data lives in /convex/seed.ts — do not break it

## Quick Commands
/ship   → lint, type-check, test, build, push
/plan   → read PLAN.md, list next 3 tasks
/review → /code-review --effort medium
/compact → run at 60% context (CHECK /context FIRST)

## Anti-Patterns (Never Do)
- Do not rewrite a file without reading PLAN.md "Completed" first
- Do not add a new dependency without updating CLAUDE.md
- Do not push if /ship reports any failure
```

### Three custom slash commands worth writing on day zero

**`.claude/commands/ship.md`**

```markdown
---
name: ship
description: Full local CI before pushing. Lint, type-check, test, build, commit, push.
---

Run this sequence and stop on first failure:
1. `npm run type-check && npm run lint`
2. `npm test -- --passWithNoTests`
3. `npm run build`
4. If clean: `git add . && git commit -m "checkpoint: ${SUMMARY}" && git push`

Report: lines changed, tests passed, build time. Never push broken code.
```

**`.claude/commands/plan.md`**

```markdown
---
name: plan
description: Read PLAN.md, summarize what's done, propose the next task.
---

1. Read PLAN.md from repo root.
2. List "Completed" since last session.
3. Propose next task with a 1–3 hour estimate.
4. Check "Known Issues" for blockers.
5. Confirm with user before starting.
```

**`.claude/commands/review.md`**

```markdown
---
name: review
description: Code review of pending changes — security, style, logic.
---

Run `/code-review --effort medium` on the working tree.

Report findings in three tiers:
- Critical (block ship)
- Medium (fix today)
- Minor (backlog into PLAN.md)
```

### Anthropic-published skills worth installing
Install these only if the case demands document output:
- `pdf` — for any document export
- `docx` — status reports, regulatory write-ups
- `xlsx` — analytics export, market-sizing math
- `pptx` — last-resort deck generation (you'll want to drive Slides/Keynote manually for polish)

Skip community plugins on day one. Every plugin costs 15 minutes of context learning.

### Context discipline — the rules
1. **Run `/compact` at 60% context fill** (check with `/context`). Proactive compaction produces higher-fidelity summaries than reactive at 95%.
2. **Before compacting**, ask Claude: "Summarize current progress, architectural decisions, and active bugs in 200 words." Paste that into a new `## Session N Recap` block in `PLAN.md`. Paste back into the next session.
3. **`/clear` between unrelated tasks.** CLAUDE.md survives `/clear`; chat scrollback doesn't.
4. **PLAN.md is your session boundary.** Update it every 2 hours. New team member joins? They read PLAN.md, not scrollback.
5. **Skip subagents** unless you have >100 parallel tests to run. Keep all work in-thread so teammates can see what's happening.
6. **Use git worktrees** for parallel Claude sessions across laptops: `git worktree add ../hack-dashboard feat/dashboard`. Each dev gets their own worktree; one shared `TASKS.md` coordinates.

### `settings.json` and the one hook worth having

```json
{
  "hooks": {
    "PostToolUse": ".claude/hooks/post-bash.sh"
  }
}
```

```bash
#!/bin/bash
# .claude/hooks/post-bash.sh
if [[ "$*" == *"npm install"* ]] || [[ "$*" == *"git commit"* ]]; then
  npx eslint --fix . 2>/dev/null || true
fi
exit 0
```

---

## 4. Distributed git + collaboration

### Workflow
- **Trunk-based.** One `main` branch. Short-lived `feat/*` branches merged via fast-forward within ~2 hours.
- `git pull --rebase origin main` before every push.
- **Never force-push `main`**; only inside your own feature branch.
- One package manager picked on day zero (pnpm recommended for speed). Never mix.

### Codebase carve-up (prevents 90% of merge conflicts)
- Person A: `/app/(marketing)` — landing, deck-aligned hero, problem framing visuals
- Person B: `/app/dashboard` — core demo flow
- Person C: `/convex/` + seed scripts — data layer
- Person D: deck + demo script + integrations

### `.gitignore` essentials
```
node_modules/
.next/
.env*.local
.vercel
.convex/
*.log
.DS_Store
/coverage
```

### `TASKS.md` template (beats Linear for 23 hours)
```markdown
## Now
- [ ] @alex   Convex schema for transactions
- [ ] @sam    Dashboard chart component
- [ ] @priya  Seed 50 fake records (3 personas)
- [ ] @kai    Deck: problem + market-size slides

## Next
- [ ] @alex   Stripe webhook (mock)
- [ ] @sam    Empty/loading states

## Done
- [x] @alex   Auth scaffold (Clerk)
- [x] @sam    Layout + nav
```

Pair with a single Discord/Slack channel and one pinned message containing: deployed URL, Figma link, deck link, demo run-of-show. That's your entire PMO.

---

## 5. The pitch playbook (60% of your score lives here)

### Time budget
**10 minutes presentation + 5 minutes Q&A** (strict). Rehearse to **9:30** to leave breathing room.

### 7-slide structure for banker/consultant judges
1. **Hook + one-liner** (30s) — "We're X for Y." Problem in one sentence.
2. **Problem with a number** (60s) — concrete pain: "1.2M Canadian SMBs lose $X annually to…" Cite a stat.
3. **Market — TAM/SAM/SOM** (60s) — bankers need this. Show the math, even back-of-envelope.
4. **Solution overview + live demo** (3–4 min) — the meat. Pre-clicked happy path.
5. **Business model + unit economics** (60s) — revenue per user, CAC if applicable, gross margin.
6. **Why now + competitive moat + regulatory awareness** (45s) — open banking, OSFI capital, FINTRAC/KYC, PIPEDA. **Free differentiation — most teams skip this.**
7. **Ask** (45s) — name "Scotiabank pilot" explicitly. Judges remember being named.

Each slide title is a **complete declarative sentence**. If a judge reads only the titles top-to-bottom, they get the full argument.

### Implicit judge weighting (vs. published rubric)
| Implicit weight | What banker/consultant judges actually score |
|---|---|
| ~30% | Presentation polish & narrative |
| ~25% | Business viability + market size |
| ~15% | Problem framing — is this a real, sizable pain? |
| ~10% | Regulatory/risk awareness (PIPEDA, FINTRAC, OSFI, FCAC, open banking) |
| ~10% | Demo execution |
| ~10% | Technical novelty — **lowest weight; don't lean here** |

Five adjectives to drop into every slide: **well-structured, logical, realistic, data-driven, actionable**.

### Demo discipline
- **Live demo runs on `localhost`, not Vercel.** Kill the venue Wi-Fi dependency. Ethernet if available.
- **Loom backup** of the 90-second happy path, queued in a browser tab. Devfolio integrates with Loom for a reason.
- **Three screenshot slides** at the end of the deck for if everything dies.
- **Pre-fill all forms.** Never type during a demo. Typos kill momentum.
- **Stop coding 2 hours before the pitch.** Use that time to rehearse, fix the deck, and breathe.

### Rehearsal
- 4 timed end-to-end runs minimum.
- The presenter is the most-rested person on the team. Non-negotiable.

---

## 6. Three plausible Scotiabank prompts — decision tree

### A) SMB cash-flow forecasting
- **App:** Mock QuickBooks/Stripe feed → rolling 13-week cash runway with best/base/worst scenarios → AI suggestion ("Delay supplier X by 5 days to avoid June 14 overdraft").
- **Seed:** Fake Toronto bakery, 90 days of transactions, one bad month coming.
- **Killer slide:** 13-week runway chart with intervention markers. Every banker recognizes this instantly.
- **Stack:** Primary stack handles it. Convex stores transactions, AI SDK streams suggestions.

### B) Fraud detection / KYC for newcomers to Canada
- **App:** Onboarding flow using doc OCR + behavioral signals + alternative data (utility, rent, foreign credit references) to risk-score newcomers without a SIN bureau pull. Ties directly to Scotiabank's existing StartRight program.
- **Seed:** Three persona walkthroughs — legit international student, legit skilled worker, synthetic-ID fraud.
- **Killer slide:** "70% of newcomers wait 6+ months for a credit card → we approve in 4 minutes with comparable default risk." Footnote: PIPEDA + FINTRAC compliance.
- **Stack:** Primary stack handles it. May need a doc-OCR mock — use a hardcoded "extracted" payload to keep the demo deterministic.

### C) Advisor productivity / financial planning copilot
- **App:** Advisor-facing dashboard. Ingest a client portfolio → draft a financial plan → next-best-action ("TFSA underfunded by $4,200") → draft client email.
- **Seed:** Three fake client households.
- **Killer slide:** "Advisor capacity: 80 → 240 clients. Revenue per advisor up 2.4×." Bankers care about leverage.
- **Stack:** Primary stack handles it; consider adding Mastra only if the agent flow becomes multi-step.

**Decision rule:** If the actual prompt is fintech/banking-shaped, lean toward (A) or (B) — they have clearer demo arcs and cleaner regulatory hooks. Reserve (C) only if the prompt names "advisor" or "wealth management" explicitly.

---

## 7. Pre-flight checklist (do before Saturday 1 PM)

- [ ] Repo created, `.gitignore` set, **pnpm** locked in, Vercel deploy live with placeholder homepage
- [ ] CLAUDE.md, PLAN.md, TASKS.md committed
- [ ] `.claude/commands/ship.md`, `plan.md`, `review.md` committed
- [ ] Convex project created and dashboard linked
- [ ] Clerk project created, dev keys in `.env.local`, prod keys in Vercel env
- [ ] Anthropic API key in `.env.local` + Vercel env (use a personal key, not a team key)
- [ ] All 4 team members can run `npm run dev` and see the homepage on their laptop
- [ ] All 4 team members can run `/plan` in Claude Code and see the same output
- [ ] One person has Cloudflared installed and tested
- [ ] Discord/Slack channel pinned with: deployed URL, Figma link, deck link
- [ ] Deck template created (7-slide skeleton, no content yet)
- [ ] Coffee, water bottles, almonds, jerky, bananas, oatmeal stocked
- [ ] **Presenter identified** — they get the bed Sunday morning

---

## 8. Sleep, food, and energy

The teams that win don't pull blind all-nighters. From hackathon-survivor postmortems:
- **One 90-minute sleep cycle Saturday night, ~2–4 AM.** Full cycle = refreshed. 60 min = wrecked.
- **20-minute coffee naps** mid-afternoon: chug coffee, set timer, sleep. Caffeine peaks as you wake.
- **Low-GI food, not pizza-and-energy-drinks.** Save sugar/caffeine spike for final 4 hours pre-pitch.
- **Stop coffee 6 hours before any planned sleep.**
- **One person sleeps at home/hotel** Sunday morning — that's your presenter.
- **Stop coding 2 hours before the pitch.** Rehearse and breathe.

---

## 9. Open questions for the next research pass

The next Cowork session should resolve these against the live case prompt once it drops Saturday 1 PM:

1. **The actual case prompt.** Unknown until 1 PM Saturday. Until then, build the scaffold and pre-stage the three decision-tree scenarios above.
2. **Is the case Scotiabank-themed or open-ended?** Strong prior toward Scotiabank-themed given they're the sole sponsor. Confirm with Discord announcement.
3. **Is a public GitHub repo required?** Devpost 2026 rules don't say. Past years did. Default to public; flip private only if confirmed unnecessary.
4. **Are workshops / mid-checkpoints announced?** Devpost says "TBD when workshops are complete." Watch Discord.
5. **Eligible-countries list** — not enumerated; confirm Canada works (it will).
6. **Are the Best UI and Most Creative mini-prizes judged separately?** If yes, build with both in mind — `Best UI` is winnable independent of the case-strategy axis.
7. **Confirm Convex free-tier ceiling against actual demo load.** Reset usage daily if possible. Worst case: spin a second free Convex project as failover.
8. **Confirm `claude-sonnet-4-6` is enabled on Miller's API account** and that the rate limit is sufficient for ~50 demo calls in the final hour. If not, swap to Haiku for the live demo flow.

---

## 10. Hard blockers and risks

- **23-hour build window** is the most underrated risk. The brief I was handed assumed 48 hours; the real number is 23. Scope accordingly.
- **Vercel Hobby commercial-use** clause — has not been enforced for hackathons in living memory, but if Miller wants zero exposure: deploy to Cloudflare Pages.
- **Live demo on venue Wi-Fi** — already addressed (localhost + Loom backup). Do not forget.
- **Single point of failure on Anthropic API** — `claude-sonnet-4-6` rate limits can bite during a packed final hour. Pre-warm cache, have Haiku fallback ready.

---

## 11. Handoff prompt for the next Cowork session

> Copy everything between the `===` lines and paste into a new Cowork session along with this entire `CASEHACKS-2026-BRIEF.md` file.

```
=============================================================================
HANDOFF: Build the canonical [case]Hacks 2026 starter repo + battle plan.

You are taking over from a preliminary research pass. Read CASEHACKS-2026-BRIEF.md
in full before doing anything. It is the source of truth on: confirmed event facts
(section 1), validated stack (section 2), Claude Code setup (section 3), git
workflow (section 4), pitch playbook (section 5), and three pre-staged Scotiabank
case scenarios (section 6).

Your job, in order:

1. RE-VERIFY the brief against the live world. Today is May 23 2026, the case prompt
   drops at 1 PM EDT. Until then, fetch one more time:
     - https://casehacks-2026.devpost.com (any update to rules, sponsors, prizes)
     - Discord (if you have access) for any pre-released hints
     - Verify Convex / Clerk / Vercel / AI SDK current versions and free-tier limits
       have not shifted since the brief was written
   Flag any deltas with a bold line at the top of your output.

2. RESOLVE the eight open questions in §9 of the brief. Use evidence.

3. PRODUCE the canonical starter repo as a directory tree with FULL file contents.
   Do not summarize. Write every file:
     - Forked conceptually from the Convex SaaS Next.js starter (or whichever §2
       starter best fits, once §1 verification is done)
     - Root: CLAUDE.md, PLAN.md, TASKS.md, README.md, package.json, tsconfig.json,
       next.config.ts, tailwind.config.ts, .gitignore, .env.example
     - .claude/: settings.json, hooks/post-bash.sh, commands/ship.md, plan.md, review.md
     - app/, components/, convex/, lib/ — minimum-viable scaffolding with one
       working demo route
     - setup.sh — one-command bootstrap from fresh clone to first deploy
   Bundle the result as a tarball saved to outputs/casehacks-starter.tar.gz and
   write a GitHub-ready repo description (name, tagline, README.md, topics).

4. PRE-FILL the four operational docs in the repo: PLAN.md, TASKS.md, DEMO.md (run-
   of-show script for the 10-minute pitch), PITCH.md (the 7-slide outline with
   placeholder content). Make them concrete enough that the team only fills in
   "the idea" Saturday at 1 PM, not the structure.

5. STRESS-TEST the stack against the three §6 scenarios. For each, write a one-page
   decision-tree note: which §2 stack components handle it cleanly, which need to
   be swapped, and what the killer slide / killer demo moment is. Save as
   outputs/SCENARIO-DECISIONS.md.

6. PRODUCE BATTLE-PLAN.md — a single carry-in document combining: validated stack,
   resolved open questions, operational doc summaries (full versions in repo),
   decision tree, and pre-pitch checklist. Standalone — readable without the
   original brief. Opinionated — pick one, defend it, no "you could do X or Y."

Constraints:
- Everything free or with free credits sufficient for 48 hours of demo-scale usage
- Every tool installable and deployable from macOS + Windows + Linux
- Claude Code context discipline is the top architectural priority — every file
  in the repo must serve either "ship faster" or "Claude doesn't lose context"
- Pitch (case-side) is equal weight to build (hack-side) — treat both with equal
  rigor in deliverables
- Bias toward fewer dependencies, fewer moving parts, more polished demo
- Judges are bankers, auditors, consultants. Polish, narrative, viability beat raw
  tech every time

Output order:
  1. Validated stack table (with any deltas from the brief surfaced)
  2. Resolved open questions, numbered, evidence-backed
  3. Full starter repo as a file tree with contents + tarball link
  4. Four operational docs pre-filled
  5. Three-scenario decision tree
  6. BATTLE-PLAN.md — the carry-in document

Do not ask Miller clarifying questions before producing #1 and #2. Proceed on the
assumption that the brief's defaults are correct unless §1 verification surfaces a
hard blocker. If you hit a hard blocker, surface it as a bold line at the top and
propose the fix inline.

Begin.
=============================================================================
```

---

## Sources

- [case]Hacks Devpost: https://casehacks-2026.devpost.com
- Rules: https://casehacks-2026.devpost.com/rules
- Schedule: https://casehacks-2026.devpost.com/details/dates
- GoldenHack 3.0 winners (taste signal): https://thegoldenhack3.devpost.com/project-gallery
- Claude Code skills: https://code.claude.com/docs/en/skills
- Claude Code best practices: https://code.claude.com/docs/en/best-practices
- Claude Code worktrees: https://code.claude.com/docs/en/worktrees
- Anthropic skills repo: https://github.com/anthropics/skills
- Next.js 15.5: https://nextjs.org/blog/next-15-5
- Convex limits: https://docs.convex.dev/production/state/limits
- Convex pricing: https://www.convex.dev/pricing
- Convex templates: https://www.convex.dev/templates
- Supabase pricing: https://supabase.com/pricing
- AI SDK Anthropic provider: https://ai-sdk.dev/providers/ai-sdk-providers/anthropic
- Claude model strings: https://platform.claude.com/docs/en/about-claude/models/overview
- shadcn/ui + Tailwind v4: https://ui.shadcn.com/docs/tailwind-v4
- Vercel fair-use: https://vercel.com/docs/limits/fair-use-guidelines
- Cloudflare Tunnel vs ngrok vs Tailscale: https://dev.to/mechcloud_academy/cloudflare-tunnel-vs-ngrok-vs-tailscale-choosing-the-right-secure-tunneling-solution-4inm
- Trunk-based development: https://trunkbaseddevelopment.com/
- YC demo day pitch guide: https://www.ycombinator.com/blog/guide-to-demo-day-pitches/
- Hackathon judging weights study: https://taikai.network/en/blog/hackathon-judging
- Scotiabank StartRight (newcomers): https://startright.scotiabank.com/ca/en.html
- Hackathon sleep science: https://new-website.peerwell.co/blog/how-to-win-hackathons-powered-by-sleep-science/
