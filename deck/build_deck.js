// ScotiaSeed pitch deck v2.
// Verified Scotia brand: #EC111A primary, Charcoal vs Red two-ledger.
// Frutiger stand-in via Segoe UI, ITC Century stand-in via Georgia.
// Zero em-dashes in all displayed copy.

const pptxgen = require("pptxgenjs");
const path = require("path");

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE"; // 13.3 x 7.5
pres.title = "ScotiaSeed";
pres.author = "caseHacks 2026";

// =================== Verified Scotia brand ===================
const RED       = "EC111A";    // Scotia Red (current, verified via Monotype + brand monitors)
const RED_DARK  = "B40005";
const SCOTIA_BLACK = "1A1A1A"; // body text on light
const CHARCOAL  = "2D3748";    // dark surface, "your money" side
const SLATE     = "6B7280";    // muted text
const MIST      = "F5F5F5";
const CREAM     = "FAF7F2";
const BORDER    = "E5E7EB";
const GROWTH    = "00875A";    // signaling green, never large surfaces
const PAPER     = "FFFFFF";

// Frutiger surrogate: Segoe UI (Windows-native, closest match).
// ITC Century surrogate: Georgia (universal serif).
const FONT_SANS  = "Segoe UI";
const FONT_SERIF = "Georgia";

const PROTO = path.resolve(__dirname, "..", "prototype");
const M = (p) => path.join(PROTO, p);

const SW = 13.3, SH = 7.5;

// ============= helpers =============
function footer(slide, num, total = 10) {
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: SH - 0.32, w: SW, h: 0.32,
    fill: { color: SCOTIA_BLACK }, line: { color: SCOTIA_BLACK }
  });
  slide.addText("SCOTIASEED   .   CASEHACKS 2026", {
    x: 0.5, y: SH - 0.32, w: 6, h: 0.32, margin: 0,
    fontFace: FONT_SANS, fontSize: 9, color: PAPER, charSpacing: 4,
    valign: "middle"
  });
  slide.addText(`${num} / ${total}`, {
    x: SW - 1.5, y: SH - 0.32, w: 1, h: 0.32, margin: 0,
    fontFace: FONT_SANS, fontSize: 9, color: PAPER,
    align: "right", valign: "middle"
  });
}

function sectionTag(slide, label, x = 0.6, y = 0.5, onDark = false) {
  slide.addShape(pres.shapes.RECTANGLE, {
    x, y, w: 0.18, h: 0.32, fill: { color: RED }, line: { color: RED }
  });
  slide.addText(label, {
    x: x + 0.3, y, w: 6, h: 0.32, margin: 0,
    fontFace: FONT_SANS, fontSize: 11, color: onDark ? PAPER : SCOTIA_BLACK, bold: true,
    charSpacing: 6, valign: "middle"
  });
}

// ====================================================================
// SLIDE 1. The Maya hook (dark, serif hero)
// ====================================================================
{
  const s = pres.addSlide();
  s.background = { color: SCOTIA_BLACK };

  // Imagine someone (small italic lead)
  s.addText("Imagine someone.", {
    x: 0.7, y: 1.15, w: 8.5, h: 0.55, margin: 0,
    fontFace: FONT_SERIF, fontSize: 28, color: "C4CAD6", italic: true
  });

  // Hero single-line statement
  s.addText("She is twenty-two.", {
    x: 0.7, y: 1.95, w: 8.5, h: 1.2, margin: 0,
    fontFace: FONT_SERIF, fontSize: 58, color: PAPER, bold: true
  });

  // Subhead, sans, wraps naturally
  s.addText("Scotia chequing customer since she was sixteen.", {
    x: 0.7, y: 3.3, w: 8.5, h: 0.8, margin: 0,
    fontFace: FONT_SANS, fontSize: 24, color: "C4CAD6"
  });

  // Tension line, red serif italic
  s.addText("Last Tuesday, she opened Wealthsimple.", {
    x: 0.7, y: 4.45, w: 8.5, h: 0.7, margin: 0,
    fontFace: FONT_SERIF, fontSize: 28, color: RED, italic: true
  });

  // Accent bar + branding
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.7, y: 5.85, w: 1.5, h: 0.08, fill: { color: PAPER }, line: { color: PAPER }
  });
  s.addText("SCOTIASEED", {
    x: 0.7, y: 6.0, w: 6, h: 0.4, margin: 0,
    fontFace: FONT_SANS, fontSize: 13, color: PAPER, bold: true, charSpacing: 8
  });
  s.addText("Closing the Gap. caseHacks 2026.", {
    x: 0.7, y: 6.4, w: 8, h: 0.35, margin: 0,
    fontFace: FONT_SANS, fontSize: 11, color: "8A92A6"
  });

  // Right column: Scotia red panel with phone
  s.addShape(pres.shapes.RECTANGLE, {
    x: 9.4, y: 0, w: 3.9, h: SH,
    fill: { color: RED }, line: { color: RED }
  });
  s.addImage({ path: M("screen_01_welcome.png"), x: 9.7, y: 0.5, w: 3.3, h: 6.5, sizing: { type: "contain", w: 3.3, h: 6.5 } });

  footer(s, 1);
}

// ====================================================================
// SLIDE 2. The Gap
// ====================================================================
{
  const s = pres.addSlide();
  s.background = { color: CREAM };

  sectionTag(s, "THE GAP");

  s.addText("Scotia has the deposit. Wealthsimple has the investor.", {
    x: 0.6, y: 0.95, w: 12.1, h: 1.1, margin: 0,
    fontFace: FONT_SERIF, fontSize: 34, color: SCOTIA_BLACK, bold: true
  });

  s.addText("Same eighteen to thirty-four cohort. Different relationship. The gap widens every quarter.", {
    x: 0.6, y: 2.05, w: 12.1, h: 0.45, margin: 0,
    fontFace: FONT_SANS, fontSize: 15, color: SLATE, italic: true
  });

  // 3 stat cards
  const cols = [
    { label: "WEALTHSIMPLE AUA", big: "$125B", sub: "Q1 2026. Up 71% year over year.", color: RED },
    { label: "OF CANADIANS 18 TO 40", big: "1 in 5", sub: "now use Wealthsimple.", color: SCOTIA_BLACK },
    { label: "WEALTH TRANSFER, BY 2026", big: "$1T", sub: "Boomers to younger generations.", color: GROWTH },
  ];

  cols.forEach((c, i) => {
    const x = 0.6 + i * 4.2;
    const w = 3.8;
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: 2.85, w, h: 3.2, fill: { color: PAPER }, line: { color: BORDER, width: 1 }
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: 2.85, w, h: 0.12, fill: { color: c.color }, line: { color: c.color }
    });
    s.addText(c.label, {
      x: x + 0.3, y: 3.1, w: w - 0.6, h: 0.4, margin: 0,
      fontFace: FONT_SANS, fontSize: 11, color: SLATE, bold: true, charSpacing: 4
    });
    s.addText(c.big, {
      x: x + 0.3, y: 3.7, w: w - 0.6, h: 1.4, margin: 0,
      fontFace: FONT_SERIF, fontSize: 60, color: c.color, bold: true
    });
    s.addText(c.sub, {
      x: x + 0.3, y: 5.2, w: w - 0.6, h: 0.7, margin: 0,
      fontFace: FONT_SANS, fontSize: 13, color: SCOTIA_BLACK
    });
  });

  // Closing band
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 6.25, w: 12.1, h: 0.7,
    fill: { color: SCOTIA_BLACK }, line: { color: SCOTIA_BLACK }
  });
  s.addText("Whoever builds investment relationships with younger Canadians now will manage the next trillion.", {
    x: 0.9, y: 6.25, w: 11.5, h: 0.7, margin: 0,
    fontFace: FONT_SANS, fontSize: 14, color: PAPER, italic: true, valign: "middle"
  });

  footer(s, 2);
}

// ====================================================================
// SLIDE 3. Why they actually disengage
// ====================================================================
{
  const s = pres.addSlide();
  s.background = { color: PAPER };

  sectionTag(s, "WHY THEY DISENGAGE");
  s.addText("It is not the money. It is the confidence.", {
    x: 0.6, y: 0.95, w: 12.1, h: 1.1, margin: 0,
    fontFace: FONT_SERIF, fontSize: 34, color: SCOTIA_BLACK, bold: true
  });
  s.addText("From the case exhibits. The barriers for 18 to 34 Canadians.", {
    x: 0.6, y: 2.05, w: 12.1, h: 0.4, margin: 0,
    fontFace: FONT_SANS, fontSize: 14, color: SLATE, italic: true
  });

  const tiles = [
    { stat: "45%",  desc: "not confident in their investment knowledge" },
    { stat: "43%",  desc: "uncertain where to begin investing" },
    { stat: "84%",  desc: "feel negative emotions about RRSP contributions" },
    { stat: "36%",  desc: "confident in basic retirement mechanics, vs 69% of 55+" },
  ];

  tiles.forEach((t, i) => {
    const x = 0.6 + i * 3.0;
    const y = 2.6;
    s.addShape(pres.shapes.RECTANGLE, {
      x, y, w: 2.85, h: 2.6, fill: { color: CREAM }, line: { color: BORDER }
    });
    s.addText(t.stat, {
      x: x + 0.2, y: y + 0.2, w: 2.45, h: 1.3, margin: 0,
      fontFace: FONT_SERIF, fontSize: 58, color: RED, bold: true
    });
    s.addText(t.desc, {
      x: x + 0.2, y: y + 1.5, w: 2.45, h: 1.0, margin: 0,
      fontFace: FONT_SANS, fontSize: 12, color: SCOTIA_BLACK
    });
  });

  // Pull-quote
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 5.6, w: 0.08, h: 1.3, fill: { color: RED }, line: { color: RED }
  });
  s.addText('"The barrier to first investment among younger Canadians is more often confidence and clarity than it is capital."', {
    x: 0.85, y: 5.6, w: 11.5, h: 0.9, margin: 0,
    fontFace: FONT_SERIF, fontSize: 18, color: SCOTIA_BLACK, italic: true
  });
  s.addText("Scotiabank case package, page six.", {
    x: 0.85, y: 6.45, w: 11.5, h: 0.4, margin: 0,
    fontFace: FONT_SANS, fontSize: 11, color: SLATE
  });

  footer(s, 3);
}

// ====================================================================
// SLIDE 4. The five invisible wedges
// ====================================================================
{
  const s = pres.addSlide();
  s.background = { color: CREAM };

  sectionTag(s, "OUR INVISIBLE WEDGE");
  s.addText("Five things fintechs cannot copy.", {
    x: 0.6, y: 0.95, w: 12.1, h: 1.0, margin: 0,
    fontFace: FONT_SERIF, fontSize: 32, color: SCOTIA_BLACK, bold: true
  });
  s.addText("Wealthsimple competes on simplicity. We compete on already being there.", {
    x: 0.6, y: 1.9, w: 12.1, h: 0.4, margin: 0,
    fontFace: FONT_SANS, fontSize: 14, color: SLATE, italic: true
  });

  const advs = [
    { n: "01", h: "Pre-verified identity", b: "FINTRAC Method 5 reuses the KYC we already did for chequing. No re-upload. Onboarding drops from 25 minutes to 5." },
    { n: "02", h: "$1.1M protection stack", b: "CDIC on cash, CIPF on securities. Wealthsimple engineered this through partner banks. Scotia has it built in." },
    { n: "03", h: "Native FHSA", b: "The bulk of FHSA contributors are 25 to 34. Solves the housing anxiety and retirement anxiety double bind, in one product." },
    { n: "04", h: "Instant internal transfers", b: "Round-ups and PAC move in real time. No 1 to 3 day delay. No NSF risk. No external account linking." },
    { n: "05", h: "Trust where trust is lowest", b: "82% of 18 to 24 year olds get financial info from social media. Scotia is the credible alternative they already chose." },
  ];

  advs.forEach((a, i) => {
    const x = 0.6 + i * 2.46;
    const y = 2.7;
    s.addShape(pres.shapes.RECTANGLE, {
      x, y, w: 2.36, h: 3.9, fill: { color: PAPER }, line: { color: BORDER }
    });
    s.addText(a.n, {
      x: x + 0.2, y: y + 0.15, w: 2.0, h: 0.5, margin: 0,
      fontFace: FONT_SERIF, fontSize: 22, color: RED, bold: true
    });
    s.addText(a.h, {
      x: x + 0.2, y: y + 0.7, w: 2.0, h: 0.85, margin: 0,
      fontFace: FONT_SANS, fontSize: 14, color: SCOTIA_BLACK, bold: true
    });
    s.addText(a.b, {
      x: x + 0.2, y: y + 1.6, w: 2.0, h: 2.2, margin: 0,
      fontFace: FONT_SANS, fontSize: 10, color: SLATE
    });
  });

  footer(s, 4);
}

// ====================================================================
// SLIDE 5. The mechanic
// ====================================================================
{
  const s = pres.addSlide();
  s.background = { color: PAPER };

  sectionTag(s, "THE MECHANIC");
  s.addText("ScotiaSeed. A two-year matched path from zero to investor.", {
    x: 0.6, y: 0.95, w: 12.1, h: 1.0, margin: 0,
    fontFace: FONT_SERIF, fontSize: 28, color: SCOTIA_BLACK, bold: true
  });
  s.addText("The bonus is the hook. The auto-PAC is the moat. The two-ledger UI is the trust.", {
    x: 0.6, y: 1.85, w: 12.1, h: 0.4, margin: 0,
    fontFace: FONT_SANS, fontSize: 14, color: SLATE, italic: true
  });

  const steps = [
    { dollar: "$25",  title: "Account opened",       sub: "Pre-fill from Scotia banking. Five plain questions." },
    { dollar: "$25",  title: "Education complete",    sub: "Five short lessons. Five minutes total." },
    { dollar: "$50",  title: "Recurring PAC set up",  sub: "At least $25 a month, proven over 3 months." },
    { dollar: "$100", title: "Month 12 anniversary",  sub: "Still contributing. Crosses retention cliff one." },
    { dollar: "$100", title: "Month 24 graduation",   sub: "Still contributing. Crosses retention cliff two." },
  ];

  steps.forEach((step, i) => {
    const x = 0.6 + i * 2.46;
    const y = 2.8;
    s.addShape(pres.shapes.RECTANGLE, {
      x, y, w: 2.36, h: 2.7,
      fill: { color: i < 2 ? RED : (i < 4 ? "C4131A" : RED_DARK) },
      line: { color: i < 2 ? RED : (i < 4 ? "C4131A" : RED_DARK) }
    });
    s.addText(step.dollar, {
      x: x + 0.2, y: y + 0.2, w: 2.0, h: 1.2, margin: 0,
      fontFace: FONT_SERIF, fontSize: 44, color: PAPER, bold: true
    });
    s.addText(step.title, {
      x: x + 0.2, y: y + 1.4, w: 2.0, h: 0.5, margin: 0,
      fontFace: FONT_SANS, fontSize: 13, color: PAPER, bold: true
    });
    s.addText(step.sub, {
      x: x + 0.2, y: y + 1.95, w: 2.0, h: 0.7, margin: 0,
      fontFace: FONT_SANS, fontSize: 10, color: "FFE5E6"
    });
  });

  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 5.7, w: 12.1, h: 0.9,
    fill: { color: SCOTIA_BLACK }, line: { color: SCOTIA_BLACK }
  });
  s.addText("$300 lifetime cap. Paid only on engagement. Plus a 2 cent round-up on every Scotia purchase, capped at $50 over the program.", {
    x: 0.9, y: 5.7, w: 11.5, h: 0.9, margin: 0,
    fontFace: FONT_SANS, fontSize: 14, color: PAPER, italic: true, valign: "middle"
  });

  footer(s, 5);
}

// ====================================================================
// SLIDE 6. The two-ledger HERO
// ====================================================================
{
  const s = pres.addSlide();
  s.background = { color: SCOTIA_BLACK };

  s.addImage({ path: M("screen_06_two_ledger.png"), x: 0.7, y: 0.6, w: 4.0, h: 6.2, sizing: { type: "contain", w: 4.0, h: 6.2 } });

  sectionTag(s, "THE HERO UI", 5.5, 0.7, true);

  s.addText("Two ledgers. Total trust.", {
    x: 5.5, y: 1.2, w: 7.3, h: 1.0, margin: 0,
    fontFace: FONT_SERIF, fontSize: 34, color: PAPER, bold: true
  });

  s.addText("Users see their money and Scotia's match side by side, from day one.", {
    x: 5.5, y: 2.2, w: 7.3, h: 0.4, margin: 0,
    fontFace: FONT_SANS, fontSize: 15, color: "C4CAD6", italic: true
  });

  const points = [
    { c: SLATE,    h: "Your money", b: "Deposits, round-ups, growth. Withdraw freely. No clawback, ever." },
    { c: RED,     h: "Scotia's match", b: "Locked for 24 months. Visible from the start. The carrot you can see growing." },
    { c: GROWTH,  h: "The forfeiture rule", b: "Withdraw into Scotia's portion, you have 90 days to restore it. After that, the program ends. No surprises." },
  ];

  points.forEach((p, i) => {
    const y = 3.0 + i * 1.2;
    s.addShape(pres.shapes.RECTANGLE, {
      x: 5.5, y, w: 0.12, h: 1.0, fill: { color: p.c }, line: { color: p.c }
    });
    s.addText(p.h, {
      x: 5.8, y, w: 7.0, h: 0.45, margin: 0,
      fontFace: FONT_SANS, fontSize: 17, color: PAPER, bold: true
    });
    s.addText(p.b, {
      x: 5.8, y: y + 0.45, w: 7.0, h: 0.65, margin: 0,
      fontFace: FONT_SANS, fontSize: 12, color: "C4CAD6"
    });
  });

  s.addText("Vanguard: 9 in 10 auto-enrolled stay invested at three years. Defaults beat incentives. We use both.", {
    x: 5.5, y: 6.7, w: 7.3, h: 0.4, margin: 0,
    fontFace: FONT_SANS, fontSize: 11, color: "8A92A6", italic: true
  });

  footer(s, 6);
}

// ====================================================================
// SLIDE 7. The flow (prototype gallery)
// ====================================================================
{
  const s = pres.addSlide();
  s.background = { color: CREAM };

  sectionTag(s, "THE FLOW");
  s.addText("From chequing customer to invested in under five minutes.", {
    x: 0.6, y: 0.95, w: 12.1, h: 1.0, margin: 0,
    fontFace: FONT_SERIF, fontSize: 28, color: SCOTIA_BLACK, bold: true
  });

  const phones = [
    { img: "screen_01_welcome.png",            cap: "1. Hook" },
    { img: "screen_02_pre_fill.png",           cap: "2. Pre-filled KYC" },
    { img: "screen_03_suitability.png",        cap: "3. Plain-language risk" },
    { img: "screen_04_account_pick.png",       cap: "4. FHSA recommended" },
    { img: "screen_05_starter_celebration.png", cap: "5. $25 unlocked" },
  ];

  phones.forEach((p, i) => {
    const x = 0.5 + i * 2.5;
    const y = 2.3;
    s.addImage({ path: M(p.img), x, y, w: 2.3, h: 4.0, sizing: { type: "contain", w: 2.3, h: 4.0 } });
    s.addText(p.cap, {
      x, y: y + 4.05, w: 2.3, h: 0.4, margin: 0,
      fontFace: FONT_SANS, fontSize: 12, color: SCOTIA_BLACK, bold: true, align: "center"
    });
  });

  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 6.85, w: 12.1, h: 0.25, fill: { color: RED }, line: { color: RED }
  });

  footer(s, 7);
}

// ====================================================================
// SLIDE 8. The numbers
// ====================================================================
{
  const s = pres.addSlide();
  s.background = { color: PAPER };

  sectionTag(s, "THE NUMBERS");
  s.addText("$300 in. Three to six thousand out. Defensible.", {
    x: 0.6, y: 0.95, w: 12.1, h: 1.0, margin: 0,
    fontFace: FONT_SERIF, fontSize: 30, color: SCOTIA_BLACK, bold: true
  });

  s.addText("CUSTOMER ACQUISITION COST. INDUSTRY CONTEXT.", {
    x: 0.6, y: 2.0, w: 6.0, h: 0.4, margin: 0,
    fontFace: FONT_SANS, fontSize: 11, color: SLATE, bold: true, charSpacing: 4
  });

  s.addChart(pres.charts.BAR, [{
    name: "CAC",
    labels: ["Scotia student\n(existing promo)", "Wealthsimple\nreferral entry", "ScotiaSeed\n(proposed)", "RBC Direct\nInvesting"],
    values: [175, 25, 300, 5000]
  }], {
    x: 0.6, y: 2.4, w: 6.0, h: 3.6,
    barDir: "col",
    chartColors: [RED],
    chartArea: { fill: { color: PAPER } },
    catAxisLabelColor: "475569",
    catAxisLabelFontSize: 9,
    valAxisLabelColor: "475569",
    valAxisLabelFontSize: 9,
    valGridLine: { color: "E2E8F0", size: 0.5 },
    catGridLine: { style: "none" },
    showValue: true,
    dataLabelPosition: "outEnd",
    dataLabelColor: "1E293B",
    dataLabelFontSize: 10,
    showLegend: false
  });

  s.addText("EXPECTED 20-YEAR VALUE PER USER", {
    x: 7.0, y: 2.0, w: 5.7, h: 0.4, margin: 0,
    fontFace: FONT_SANS, fontSize: 11, color: SLATE, bold: true, charSpacing: 4
  });

  const ltv = [
    { label: "Banking-industry CLV benchmark",        val: "$2,000 to $4,500" },
    { label: "FHSA into mortgage attach",             val: "plus $1,500" },
    { label: "Wealth transfer optionality",           val: "embedded" },
    { label: "ScotiaSeed effective NPV at 7%",        val: "$3,000 to $6,000" },
  ];
  ltv.forEach((row, i) => {
    const y = 2.5 + i * 0.65;
    s.addShape(pres.shapes.RECTANGLE, {
      x: 7.0, y, w: 5.7, h: 0.55, fill: { color: CREAM }, line: { color: BORDER }
    });
    s.addText(row.label, {
      x: 7.15, y, w: 3.5, h: 0.55, margin: 0,
      fontFace: FONT_SANS, fontSize: 11, color: SCOTIA_BLACK, valign: "middle"
    });
    s.addText(row.val, {
      x: 10.6, y, w: 2.05, h: 0.55, margin: 0,
      fontFace: FONT_SANS, fontSize: 12, color: RED, bold: true, align: "right", valign: "middle"
    });
  });

  s.addShape(pres.shapes.RECTANGLE, {
    x: 7.0, y: 5.3, w: 5.7, h: 0.7,
    fill: { color: GROWTH }, line: { color: GROWTH }
  });
  s.addText("10x to 20x ROI on a fully converted user.", {
    x: 7.15, y: 5.3, w: 5.55, h: 0.7, margin: 0,
    fontFace: FONT_SANS, fontSize: 16, color: PAPER, bold: true, valign: "middle"
  });

  s.addText("Scotia already spends $175 to acquire a student chequing account through July 2026. We redirect $125 more to convert that same person into an investor.", {
    x: 0.6, y: 6.4, w: 12.1, h: 0.5, margin: 0,
    fontFace: FONT_SANS, fontSize: 12, color: SLATE, italic: true
  });

  footer(s, 8);
}

// ====================================================================
// SLIDE 9. Alignment and roadmap
// ====================================================================
{
  const s = pres.addSlide();
  s.background = { color: CREAM };

  sectionTag(s, "ALIGNMENT AND TIMELINE");
  s.addText("Two of Scotia's four pillars. Eighteen months to launch.", {
    x: 0.6, y: 0.95, w: 12.1, h: 1.0, margin: 0,
    fontFace: FONT_SERIF, fontSize: 28, color: SCOTIA_BLACK, bold: true
  });

  const pillars = [
    { h: '"Earn primary client relationships"', b: "Convert the deposit relationship into a primary investing relationship, before fintechs do." },
    { h: '"Make it easy to do business with us"', b: "Collapse investment account onboarding into a five-minute upgrade of an existing chequing relationship." },
  ];
  pillars.forEach((p, i) => {
    const x = 0.6 + i * 6.05;
    const y = 2.0;
    s.addShape(pres.shapes.RECTANGLE, { x, y, w: 5.95, h: 1.7, fill: { color: PAPER }, line: { color: BORDER } });
    s.addShape(pres.shapes.RECTANGLE, { x, y, w: 0.12, h: 1.7, fill: { color: RED }, line: { color: RED } });
    s.addText("SCOTIA STRATEGIC PILLAR", {
      x: x + 0.3, y: y + 0.15, w: 5.6, h: 0.3, margin: 0,
      fontFace: FONT_SANS, fontSize: 9, color: SLATE, bold: true, charSpacing: 4
    });
    s.addText(p.h, {
      x: x + 0.3, y: y + 0.5, w: 5.6, h: 0.55, margin: 0,
      fontFace: FONT_SERIF, fontSize: 18, color: SCOTIA_BLACK, bold: true, italic: true
    });
    s.addText(p.b, {
      x: x + 0.3, y: y + 1.05, w: 5.6, h: 0.55, margin: 0,
      fontFace: FONT_SANS, fontSize: 11, color: SCOTIA_BLACK
    });
  });

  s.addText("18-MONTH ROLLOUT", {
    x: 0.6, y: 4.05, w: 12.1, h: 0.4, margin: 0,
    fontFace: FONT_SANS, fontSize: 11, color: SLATE, bold: true, charSpacing: 4
  });

  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 4.7, w: 12.1, h: 0.06, fill: { color: BORDER }, line: { color: BORDER }
  });

  const phases = [
    { x: 0.6,  m: "Q3 2026",  h: "Build",        b: "KYC reuse API. Two-ledger UI. Education modules. Forfeiture engine." },
    { x: 3.6,  m: "Q1 2027",  h: "Student pilot", b: "20,000 Preferred Package for Students and Youth customers. Validate retention curve." },
    { x: 6.6,  m: "Q3 2027",  h: "Broaden",      b: "Roll to 18 to 24 non-students. Iterate on milestone unlock structure." },
    { x: 9.6,  m: "Q1 2028",  h: "Full launch",  b: "All 18 to 34. Marketing, social, FHSA hero campaign." },
  ];
  phases.forEach(p => {
    s.addShape(pres.shapes.OVAL, {
      x: p.x, y: 4.55, w: 0.36, h: 0.36, fill: { color: RED }, line: { color: RED }
    });
    s.addText(p.m, {
      x: p.x - 0.3, y: 4.95, w: 1.5, h: 0.3, margin: 0,
      fontFace: FONT_SANS, fontSize: 10, color: SLATE, bold: true
    });
    s.addText(p.h, {
      x: p.x - 0.3, y: 5.25, w: 3.0, h: 0.4, margin: 0,
      fontFace: FONT_SANS, fontSize: 14, color: SCOTIA_BLACK, bold: true
    });
    s.addText(p.b, {
      x: p.x - 0.3, y: 5.65, w: 2.9, h: 1.0, margin: 0,
      fontFace: FONT_SANS, fontSize: 10, color: SLATE
    });
  });

  footer(s, 9);
}

// ====================================================================
// SLIDE 10. The close
// ====================================================================
{
  const s = pres.addSlide();
  s.background = { color: RED };

  s.addText("Young Canadians are getting", {
    x: 0.7, y: 1.4, w: 12, h: 0.9, margin: 0,
    fontFace: FONT_SERIF, fontSize: 42, color: PAPER, bold: true
  });
  s.addText("financial advice from TikTok.", {
    x: 0.7, y: 2.25, w: 12, h: 0.9, margin: 0,
    fontFace: FONT_SERIF, fontSize: 42, color: PAPER, bold: true
  });
  s.addText("Scotia can do better.", {
    x: 0.7, y: 3.5, w: 12, h: 1.0, margin: 0,
    fontFace: FONT_SERIF, fontSize: 56, color: PAPER, bold: true, italic: true
  });

  s.addText("ScotiaSeed. The bank that already has them. Converting them into the investors who stay for a lifetime.", {
    x: 0.7, y: 5.3, w: 12, h: 0.6, margin: 0,
    fontFace: FONT_SANS, fontSize: 16, color: "FFE5E6", italic: true
  });

  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.7, y: 6.2, w: 1.5, h: 0.08, fill: { color: PAPER }, line: { color: PAPER }
  });
  s.addText("THE FIRST STEP IS ON US.", {
    x: 0.7, y: 6.35, w: 12, h: 0.5, margin: 0,
    fontFace: FONT_SANS, fontSize: 14, color: PAPER, bold: true, charSpacing: 6
  });

  footer(s, 10);
}

pres.writeFile({ fileName: path.join(__dirname, "ScotiaSeed_SlideDeck.pptx") })
  .then(f => console.log("Deck written:", f));
