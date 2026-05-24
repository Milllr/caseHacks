"""
ScotiaSeed prototype mockup generator v2.
True Scotia brand: Scotia Red #EC111A, Segoe UI font stack, charcoal-vs-red two-ledger.
Zero em-dashes in any displayed copy.
Phone frame: 760x1560 (2x iPhone Pro frame).
"""

import os

OUT_DIR = os.path.dirname(os.path.abspath(__file__))

# ===== Verified Scotia brand tokens =====
RED          = "#EC111A"   # Scotia Red (current, verified)
RED_DARK     = "#B40005"
SCOTIA_BLACK = "#1A1A1A"   # Scotia body text
CHARCOAL     = "#2D3748"   # "Your money" panel
SLATE        = "#6B7280"
MIST         = "#F5F5F5"
CREAM        = "#FAF7F2"
BORDER       = "#E5E7EB"
GROWTH       = "#00875A"   # signaling only
GOLD         = "#C8A24B"   # milestone only

# Segoe UI fallback to Frutiger, Helvetica, Arial
FONT = "Frutiger, 'Segoe UI', Helvetica, Arial, sans-serif"
FONT_SERIF = "'ITC Century', Cambria, Georgia, serif"

W, H = 760, 1560
RADIUS = 60

def phone_frame(content_svg, status_label="9:41"):
    """iPhone-style frame with status bar and home indicator."""
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" width="{W}" height="{H}">
  <defs>
    <clipPath id="frame">
      <rect x="20" y="20" width="{W-40}" height="{H-40}" rx="{RADIUS-10}" />
    </clipPath>
    <linearGradient id="bezelGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#000"/>
      <stop offset="1" stop-color="#222"/>
    </linearGradient>
  </defs>
  <!-- bezel -->
  <rect x="0" y="0" width="{W}" height="{H}" rx="{RADIUS}" fill="url(#bezelGrad)"/>
  <!-- screen -->
  <rect x="20" y="20" width="{W-40}" height="{H-40}" rx="{RADIUS-10}" fill="#FFFFFF"/>
  <g clip-path="url(#frame)">
    <!-- status bar -->
    <g font-family="{FONT}" font-weight="600" fill="{SCOTIA_BLACK}">
      <text x="80" y="74" font-size="22">{status_label}</text>
      <g transform="translate({W-180}, 56)">
        <rect x="0" y="0" width="22" height="11" rx="2" fill="{SCOTIA_BLACK}"/>
        <rect x="3" y="2" width="16" height="7" rx="1" fill="#FFFFFF"/>
        <rect x="3" y="2" width="16" height="7" rx="1" fill="{SCOTIA_BLACK}"/>
        <rect x="25" y="4" width="2" height="4" rx="1" fill="{SCOTIA_BLACK}"/>
      </g>
      <text x="{W-150}" y="74" font-size="22">100%</text>
    </g>
    <!-- notch -->
    <rect x="{W/2-95}" y="34" width="190" height="34" rx="17" fill="#000"/>
    {content_svg}
    <!-- home indicator -->
    <rect x="{W/2-70}" y="{H-50}" width="140" height="6" rx="3" fill="{SCOTIA_BLACK}" opacity="0.4"/>
  </g>
</svg>'''


def header_bar(title, back=True, right=""):
    back_svg = '' if not back else f'<path d="M 60 130 l -22 22 l 22 22" stroke="{SCOTIA_BLACK}" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>'
    right_svg = '' if not right else f'<text x="{W-60}" y="160" font-size="20" font-weight="600" fill="{RED}" text-anchor="end" font-family="{FONT}">{right}</text>'
    return f'''
    <g font-family="{FONT}">
      {back_svg}
      <text x="{W/2}" y="160" font-size="28" font-weight="700" fill="{SCOTIA_BLACK}" text-anchor="middle">{title}</text>
      {right_svg}
    </g>'''


# =====================================================================
# Screen 1: Welcome / hook
# =====================================================================
s1 = phone_frame(f'''
  <!-- Top brand band, Scotia Red -->
  <rect x="20" y="110" width="{W-40}" height="540" fill="{RED}"/>
  <g font-family="{FONT}" fill="white">
    <!-- Flying S approximation: white circle with red S -->
    <circle cx="{W/2}" cy="260" r="68" fill="white"/>
    <text x="{W/2}" y="296" font-size="100" font-weight="900" fill="{RED}" text-anchor="middle" font-family="{FONT_SERIF}">S</text>
    <text x="{W/2}" y="408" font-size="44" font-weight="800" text-anchor="middle">ScotiaSeed</text>
    <text x="{W/2}" y="452" font-size="20" font-weight="500" text-anchor="middle" opacity="0.92">From the bank that already knows you</text>
  </g>

  <!-- Headline -->
  <g font-family="{FONT}" fill="{SCOTIA_BLACK}">
    <text x="60" y="760" font-size="46" font-weight="800">You already bank</text>
    <text x="60" y="816" font-size="46" font-weight="800">with us.</text>
    <text x="60" y="900" font-size="32" font-weight="600" fill="{RED}">Investing should be</text>
    <text x="60" y="942" font-size="32" font-weight="600" fill="{RED}">one tap away.</text>
  </g>

  <!-- Value props -->
  <g font-family="{FONT}" fill="{SCOTIA_BLACK}">
    <g transform="translate(60, 1020)">
      <circle cx="22" cy="22" r="22" fill="{GROWTH}" opacity="0.15"/>
      <path d="M 12 22 l 8 8 l 16 -16" stroke="{GROWTH}" stroke-width="4" fill="none" stroke-linecap="round"/>
      <text x="68" y="30" font-size="22" font-weight="600">$25 to start. On us.</text>
    </g>
    <g transform="translate(60, 1080)">
      <circle cx="22" cy="22" r="22" fill="{GROWTH}" opacity="0.15"/>
      <path d="M 12 22 l 8 8 l 16 -16" stroke="{GROWTH}" stroke-width="4" fill="none" stroke-linecap="round"/>
      <text x="68" y="30" font-size="22" font-weight="600">Up to $300 matched over 2 years.</text>
    </g>
    <g transform="translate(60, 1140)">
      <circle cx="22" cy="22" r="22" fill="{GROWTH}" opacity="0.15"/>
      <path d="M 12 22 l 8 8 l 16 -16" stroke="{GROWTH}" stroke-width="4" fill="none" stroke-linecap="round"/>
      <text x="68" y="30" font-size="22" font-weight="600">No new signup. No new app.</text>
    </g>
  </g>

  <!-- CTA -->
  <rect x="60" y="1280" width="{W-120}" height="100" rx="50" fill="{RED}"/>
  <text x="{W/2}" y="1342" font-size="28" font-weight="700" fill="white" text-anchor="middle" font-family="{FONT}">Open in 60 seconds</text>
  <text x="{W/2}" y="1430" font-size="18" font-weight="500" fill="{SLATE}" text-anchor="middle" font-family="{FONT}">Already a Scotiabank customer? You are ready.</text>
''')

# =====================================================================
# Screen 2: KYC pre-fill
# =====================================================================
s2 = phone_frame(f'''
  {header_bar("We already know you", back=True, right="Step 1 of 3")}

  <rect x="60" y="200" width="{W-120}" height="6" rx="3" fill="{BORDER}"/>
  <rect x="60" y="200" width="{(W-120)//3}" height="6" rx="3" fill="{RED}"/>

  <text x="60" y="270" font-size="24" font-weight="600" fill="{SCOTIA_BLACK}" font-family="{FONT}">Confirm the info we have on file.</text>
  <text x="60" y="305" font-size="18" fill="{SLATE}" font-family="{FONT}">From your existing Scotia chequing account.</text>

  <rect x="60" y="350" width="{W-120}" height="700" rx="24" fill="white" stroke="{BORDER}"/>

  <g font-family="{FONT}">
    <text x="100" y="410" font-size="16" fill="{SLATE}">Legal name</text>
    <text x="100" y="445" font-size="22" font-weight="600" fill="{SCOTIA_BLACK}">Miller Chen</text>
    <circle cx="{W-110}" cy="425" r="18" fill="{GROWTH}" opacity="0.15"/>
    <path d="M {W-122} 425 l 8 8 l 14 -14" stroke="{GROWTH}" stroke-width="3" fill="none" stroke-linecap="round"/>
    <line x1="100" y1="490" x2="{W-100}" y2="490" stroke="{BORDER}"/>

    <text x="100" y="530" font-size="16" fill="{SLATE}">Date of birth</text>
    <text x="100" y="565" font-size="22" font-weight="600" fill="{SCOTIA_BLACK}">March 14, 2004</text>
    <circle cx="{W-110}" cy="545" r="18" fill="{GROWTH}" opacity="0.15"/>
    <path d="M {W-122} 545 l 8 8 l 14 -14" stroke="{GROWTH}" stroke-width="3" fill="none" stroke-linecap="round"/>
    <line x1="100" y1="610" x2="{W-100}" y2="610" stroke="{BORDER}"/>

    <text x="100" y="650" font-size="16" fill="{SLATE}">SIN</text>
    <text x="100" y="685" font-size="22" font-weight="600" fill="{SCOTIA_BLACK}">●●● ●●● 421</text>
    <circle cx="{W-110}" cy="665" r="18" fill="{GROWTH}" opacity="0.15"/>
    <path d="M {W-122} 665 l 8 8 l 14 -14" stroke="{GROWTH}" stroke-width="3" fill="none" stroke-linecap="round"/>
    <line x1="100" y1="730" x2="{W-100}" y2="730" stroke="{BORDER}"/>

    <text x="100" y="770" font-size="16" fill="{SLATE}">Address</text>
    <text x="100" y="805" font-size="22" font-weight="600" fill="{SCOTIA_BLACK}">221 Bay St, Toronto ON</text>
    <circle cx="{W-110}" cy="785" r="18" fill="{GROWTH}" opacity="0.15"/>
    <path d="M {W-122} 785 l 8 8 l 14 -14" stroke="{GROWTH}" stroke-width="3" fill="none" stroke-linecap="round"/>
    <line x1="100" y1="850" x2="{W-100}" y2="850" stroke="{BORDER}"/>

    <text x="100" y="890" font-size="16" fill="{SLATE}">Employment</text>
    <text x="100" y="925" font-size="22" font-weight="600" fill="{SCOTIA_BLACK}">Student, Ryerson University</text>
    <circle cx="{W-110}" cy="905" r="18" fill="{GROWTH}" opacity="0.15"/>
    <path d="M {W-122} 905 l 8 8 l 14 -14" stroke="{GROWTH}" stroke-width="3" fill="none" stroke-linecap="round"/>
    <line x1="100" y1="970" x2="{W-100}" y2="970" stroke="{BORDER}"/>

    <text x="100" y="1010" font-size="16" fill="{SLATE}">Annual income</text>
    <text x="100" y="1045" font-size="22" font-weight="600" fill="{SCOTIA_BLACK}">Under $25,000</text>
  </g>

  <text x="60" y="1110" font-size="16" fill="{SLATE}" font-family="{FONT}">Re-used under FINTRAC identity verification.</text>
  <text x="60" y="1136" font-size="16" fill="{SLATE}" font-family="{FONT}">No new ID upload needed.</text>

  <rect x="60" y="1200" width="{W-120}" height="100" rx="50" fill="{RED}"/>
  <text x="{W/2}" y="1262" font-size="26" font-weight="700" fill="white" text-anchor="middle" font-family="{FONT}">Confirm and continue</text>

  <text x="{W/2}" y="1370" font-size="20" font-weight="600" fill="{SLATE}" text-anchor="middle" font-family="{FONT}">Need to update something? Edit</text>
''')

# =====================================================================
# Screen 3: Suitability question
# =====================================================================
s3 = phone_frame(f'''
  {header_bar("A few quick questions", back=True, right="Step 2 of 3")}

  <rect x="60" y="200" width="{W-120}" height="6" rx="3" fill="{BORDER}"/>
  <rect x="60" y="200" width="{(W-120)*2//3}" height="6" rx="3" fill="{RED}"/>

  <text x="60" y="270" font-size="20" fill="{SLATE}" font-family="{FONT}">Question 3 of 5</text>

  <text x="60" y="340" font-size="36" font-weight="800" fill="{SCOTIA_BLACK}" font-family="{FONT}">If your investment dropped</text>
  <text x="60" y="386" font-size="36" font-weight="800" fill="{SCOTIA_BLACK}" font-family="{FONT}">20% next month,</text>
  <text x="60" y="432" font-size="36" font-weight="800" fill="{RED}" font-family="{FONT}">what would you do?</text>

  <text x="60" y="490" font-size="18" fill="{SLATE}" font-family="{FONT}">No wrong answer. We use this to recommend a portfolio that matches how you actually think.</text>

  <g font-family="{FONT}">
    <rect x="60" y="600" width="{W-120}" height="140" rx="20" fill="white" stroke="{BORDER}" stroke-width="2"/>
    <circle cx="105" cy="670" r="22" fill="white" stroke="{BORDER}" stroke-width="3"/>
    <text x="155" y="660" font-size="22" font-weight="700" fill="{SCOTIA_BLACK}">Sell everything.</text>
    <text x="155" y="700" font-size="18" fill="{SLATE}">Get out before it gets worse.</text>

    <rect x="60" y="760" width="{W-120}" height="140" rx="20" fill="white" stroke="{BORDER}" stroke-width="2"/>
    <circle cx="105" cy="830" r="22" fill="white" stroke="{BORDER}" stroke-width="3"/>
    <text x="155" y="820" font-size="22" font-weight="700" fill="{SCOTIA_BLACK}">Hold and wait.</text>
    <text x="155" y="860" font-size="18" fill="{SLATE}">It will probably come back.</text>

    <rect x="60" y="920" width="{W-120}" height="140" rx="20" fill="white" stroke="{RED}" stroke-width="4"/>
    <circle cx="105" cy="990" r="22" fill="{RED}"/>
    <circle cx="105" cy="990" r="9" fill="white"/>
    <text x="155" y="980" font-size="22" font-weight="700" fill="{SCOTIA_BLACK}">Keep buying.</text>
    <text x="155" y="1020" font-size="18" fill="{SLATE}">It is on sale.</text>

    <rect x="60" y="1080" width="{W-120}" height="140" rx="20" fill="white" stroke="{BORDER}" stroke-width="2"/>
    <circle cx="105" cy="1150" r="22" fill="white" stroke="{BORDER}" stroke-width="3"/>
    <text x="155" y="1140" font-size="22" font-weight="700" fill="{SCOTIA_BLACK}">Honestly, I do not know.</text>
    <text x="155" y="1180" font-size="18" fill="{SLATE}">That is a normal answer.</text>
  </g>

  <rect x="60" y="1270" width="{W-120}" height="100" rx="50" fill="{RED}"/>
  <text x="{W/2}" y="1332" font-size="26" font-weight="700" fill="white" text-anchor="middle" font-family="{FONT}">Next</text>
''')

# =====================================================================
# Screen 4: Account picker, FHSA hero
# =====================================================================
s4 = phone_frame(f'''
  {header_bar("Pick your account", back=True, right="Step 3 of 3")}

  <rect x="60" y="200" width="{W-120}" height="6" rx="3" fill="{BORDER}"/>
  <rect x="60" y="200" width="{W-120}" height="6" rx="3" fill="{RED}"/>

  <text x="60" y="270" font-size="20" fill="{SLATE}" font-family="{FONT}">Based on your answers, we recommend:</text>

  <rect x="60" y="310" width="{W-120}" height="380" rx="24" fill="{RED}"/>
  <g font-family="{FONT}" fill="white">
    <rect x="80" y="335" width="180" height="40" rx="20" fill="white" fill-opacity="0.22"/>
    <text x="170" y="362" font-size="18" font-weight="700" text-anchor="middle">RECOMMENDED</text>

    <text x="80" y="432" font-size="42" font-weight="800">FHSA</text>
    <text x="80" y="470" font-size="22" font-weight="500" opacity="0.95">First Home Savings Account</text>

    <text x="80" y="542" font-size="20" font-weight="500" opacity="0.95">Save up to $40,000 tax-free</text>
    <text x="80" y="574" font-size="20" font-weight="500" opacity="0.95">toward your first home.</text>

    <text x="80" y="632" font-size="18" opacity="0.88">Contributions reduce your taxable income.</text>
    <text x="80" y="660" font-size="18" opacity="0.88">Withdrawals for a first home are tax-free.</text>
  </g>

  <text x="60" y="755" font-size="20" font-weight="600" fill="{SCOTIA_BLACK}" font-family="{FONT}">Or choose:</text>

  <g font-family="{FONT}">
    <rect x="60" y="790" width="{(W-140)//2}" height="220" rx="20" fill="white" stroke="{BORDER}" stroke-width="2"/>
    <text x="90" y="840" font-size="30" font-weight="800" fill="{SCOTIA_BLACK}">TFSA</text>
    <text x="90" y="880" font-size="16" fill="{SLATE}">Tax-free growth.</text>
    <text x="90" y="905" font-size="16" fill="{SLATE}">Withdraw anytime.</text>
    <text x="90" y="955" font-size="16" fill="{SCOTIA_BLACK}" font-weight="600">2026 room:</text>
    <text x="90" y="985" font-size="22" font-weight="800" fill="{RED}">$7,000</text>

    <rect x="{(W+20)//2}" y="790" width="{(W-140)//2}" height="220" rx="20" fill="white" stroke="{BORDER}" stroke-width="2"/>
    <text x="{(W+20)//2 + 30}" y="840" font-size="30" font-weight="800" fill="{SCOTIA_BLACK}">Non-reg</text>
    <text x="{(W+20)//2 + 30}" y="880" font-size="16" fill="{SLATE}">No contribution limit.</text>
    <text x="{(W+20)//2 + 30}" y="905" font-size="16" fill="{SLATE}">Gains are taxable.</text>
    <text x="{(W+20)//2 + 30}" y="955" font-size="16" fill="{SCOTIA_BLACK}" font-weight="600">Best for:</text>
    <text x="{(W+20)//2 + 30}" y="985" font-size="18" font-weight="700" fill="{RED}">flexibility</text>
  </g>

  <text x="60" y="1080" font-size="16" fill="{SLATE}" font-family="{FONT}">You are 22. The FHSA matches your timeline best.</text>
  <text x="60" y="1106" font-size="16" fill="{SLATE}" font-family="{FONT}">You can always change later.</text>

  <rect x="60" y="1180" width="{W-120}" height="100" rx="50" fill="{RED}"/>
  <text x="{W/2}" y="1242" font-size="26" font-weight="700" fill="white" text-anchor="middle" font-family="{FONT}">Open FHSA</text>
''')

# =====================================================================
# Screen 5: $25 starter celebration
# =====================================================================
s5 = phone_frame(f'''
  <defs>
    <linearGradient id="celebGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="{RED}"/>
      <stop offset="1" stop-color="{RED_DARK}"/>
    </linearGradient>
  </defs>
  <rect x="20" y="20" width="{W-40}" height="{H-40}" rx="50" fill="url(#celebGrad)"/>

  <!-- confetti -->
  <g opacity="0.85">
    <circle cx="140" cy="280" r="8" fill="{GOLD}"/>
    <circle cx="280" cy="200" r="6" fill="white"/>
    <circle cx="550" cy="260" r="10" fill="{GOLD}"/>
    <circle cx="640" cy="180" r="7" fill="white"/>
    <rect x="200" y="320" width="14" height="14" fill="white" transform="rotate(20 207 327)"/>
    <rect x="500" y="340" width="14" height="14" fill="{GOLD}" transform="rotate(-15 507 347)"/>
    <rect x="120" y="450" width="12" height="12" fill="white" transform="rotate(30 126 456)"/>
    <rect x="600" y="500" width="12" height="12" fill="{GOLD}" transform="rotate(45 606 506)"/>
    <circle cx="100" cy="600" r="5" fill="white"/>
    <circle cx="680" cy="640" r="6" fill="{GOLD}"/>
    <rect x="350" y="280" width="10" height="10" fill="{GOLD}"/>
    <rect x="240" y="540" width="10" height="10" fill="white"/>
  </g>

  <g font-family="{FONT}" fill="white" text-anchor="middle">
    <text x="{W/2}" y="200" font-size="22" font-weight="600" opacity="0.85">Welcome to ScotiaSeed</text>
    <text x="{W/2}" y="640" font-size="200" font-weight="900">$25</text>
    <text x="{W/2}" y="710" font-size="34" font-weight="700">unlocked</text>
  </g>

  <rect x="60" y="800" width="{W-120}" height="380" rx="24" fill="white"/>
  <g font-family="{FONT}">
    <text x="{W/2}" y="860" font-size="22" font-weight="700" fill="{SCOTIA_BLACK}" text-anchor="middle">Here is where it is going</text>

    <rect x="100" y="900" width="80" height="80" rx="40" fill="{RED}" opacity="0.1"/>
    <text x="140" y="958" font-size="44" font-weight="900" fill="{RED}" text-anchor="middle" font-family="{FONT_SERIF}">S</text>

    <text x="210" y="935" font-size="22" font-weight="700" fill="{SCOTIA_BLACK}">Your new FHSA</text>
    <text x="210" y="965" font-size="18" fill="{SLATE}">Scotia Essentials Portfolio</text>
    <text x="210" y="990" font-size="16" fill="{SLATE}">Balanced growth, 0.65% MER</text>

    <line x1="100" y1="1030" x2="{W-100}" y2="1030" stroke="{BORDER}"/>

    <text x="100" y="1075" font-size="16" font-weight="600" fill="{SLATE}">NEXT</text>
    <text x="100" y="1115" font-size="22" font-weight="700" fill="{SCOTIA_BLACK}">Set a monthly contribution</text>
    <text x="100" y="1145" font-size="18" fill="{SLATE}">Unlock another $50 in 3 months.</text>
  </g>

  <rect x="60" y="1240" width="{W-120}" height="100" rx="50" fill="white"/>
  <text x="{W/2}" y="1302" font-size="26" font-weight="700" fill="{RED}" text-anchor="middle" font-family="{FONT}">Set up auto-contribute</text>

  <text x="{W/2}" y="1410" font-size="18" font-weight="600" fill="white" text-anchor="middle" opacity="0.85" font-family="{FONT}">Skip for now</text>
''')

# =====================================================================
# Screen 6: TWO-LEDGER HERO (Charcoal vs Scotia Red)
# =====================================================================
s6 = phone_frame(f'''
  <g font-family="{FONT}">
    <text x="60" y="170" font-size="20" font-weight="500" fill="{SLATE}">FHSA, Scotia Essentials</text>
    <text x="60" y="218" font-size="34" font-weight="800" fill="{SCOTIA_BLACK}">Hey Miller</text>

    <text x="60" y="290" font-size="18" fill="{SLATE}" font-weight="600">TOTAL VALUE</text>
    <text x="60" y="362" font-size="74" font-weight="900" fill="{SCOTIA_BLACK}">$487.14</text>

    <g transform="translate(60, 390)">
      <circle cx="14" cy="0" r="14" fill="{GROWTH}" opacity="0.15"/>
      <path d="M 6 0 l 0 -8 l 8 0 m -8 0 l 16 16" stroke="{GROWTH}" stroke-width="3" fill="none" stroke-linecap="round"/>
      <text x="40" y="6" font-size="20" font-weight="700" fill="{GROWTH}">+$14.81 this month, +3.1%</text>
    </g>
  </g>

  <g font-family="{FONT}">
    <text x="{W/2}" y="470" font-size="18" font-weight="700" fill="{SLATE}" text-anchor="middle" letter-spacing="2">YOUR MONEY  ·  SCOTIA'S MATCH</text>
  </g>

  <!-- LEFT: your money, charcoal -->
  <rect x="60" y="510" width="{(W-140)//2}" height="280" rx="24" fill="{CHARCOAL}"/>
  <g font-family="{FONT}" fill="white">
    <text x="90" y="555" font-size="14" font-weight="700" opacity="0.85" letter-spacing="1">YOUR CONTRIBUTIONS</text>
    <text x="90" y="615" font-size="42" font-weight="900">$362.14</text>
    <line x1="90" y1="650" x2="{(W-140)//2 + 30}" y2="650" stroke="white" stroke-opacity="0.3"/>
    <text x="90" y="690" font-size="14" font-weight="600" opacity="0.85">Deposits</text>
    <text x="{(W-140)//2 + 30}" y="690" font-size="18" font-weight="700" text-anchor="end">$340.00</text>
    <text x="90" y="725" font-size="14" font-weight="600" opacity="0.85">Round-ups</text>
    <text x="{(W-140)//2 + 30}" y="725" font-size="18" font-weight="700" text-anchor="end">$11.46</text>
    <text x="90" y="760" font-size="14" font-weight="600" opacity="0.85">Growth</text>
    <text x="{(W-140)//2 + 30}" y="760" font-size="18" font-weight="700" text-anchor="end">+$10.68</text>
  </g>

  <!-- RIGHT: Scotia's match, red -->
  <rect x="{(W+20)//2}" y="510" width="{(W-140)//2}" height="280" rx="24" fill="{RED}"/>
  <g font-family="{FONT}" fill="white">
    <text x="{(W+20)//2 + 30}" y="555" font-size="14" font-weight="700" opacity="0.92" letter-spacing="1">SCOTIA'S MATCH</text>
    <text x="{(W+20)//2 + 30}" y="615" font-size="42" font-weight="900">$125.00</text>
    <line x1="{(W+20)//2 + 30}" y1="650" x2="{W-90}" y2="650" stroke="white" stroke-opacity="0.35"/>
    <text x="{(W+20)//2 + 30}" y="690" font-size="14" font-weight="600" opacity="0.92">Welcome</text>
    <text x="{W-90}" y="690" font-size="18" font-weight="700" text-anchor="end">$25.00</text>
    <text x="{(W+20)//2 + 30}" y="725" font-size="14" font-weight="600" opacity="0.92">PAC bonus</text>
    <text x="{W-90}" y="725" font-size="18" font-weight="700" text-anchor="end">$50.00</text>
    <text x="{(W+20)//2 + 30}" y="760" font-size="14" font-weight="600" opacity="0.92">Yr-1 milestone</text>
    <text x="{W-90}" y="760" font-size="18" font-weight="700" text-anchor="end">$50.00</text>
  </g>

  <!-- Locked notice -->
  <rect x="60" y="820" width="{W-120}" height="90" rx="20" fill="white" stroke="{BORDER}"/>
  <g font-family="{FONT}">
    <circle cx="110" cy="865" r="22" fill="{RED}" opacity="0.12"/>
    <rect x="100" y="855" width="20" height="14" rx="2" fill="none" stroke="{RED}" stroke-width="3"/>
    <path d="M 104 855 v -4 a 6 6 0 0 1 12 0 v 4" fill="none" stroke="{RED}" stroke-width="3"/>
    <text x="150" y="858" font-size="18" font-weight="700" fill="{SCOTIA_BLACK}">Scotia's match unlocks May 23, 2028</text>
    <text x="150" y="888" font-size="15" fill="{SLATE}">Withdraw freely from your side anytime.</text>
  </g>

  <rect x="60" y="940" width="{W-120}" height="170" rx="20" fill="white" stroke="{BORDER}"/>
  <g font-family="{FONT}">
    <text x="90" y="980" font-size="14" font-weight="700" fill="{SLATE}" letter-spacing="1">NEXT MILESTONE, IN 8 MONTHS</text>
    <text x="90" y="1020" font-size="22" font-weight="800" fill="{SCOTIA_BLACK}">12-month anniversary</text>
    <text x="90" y="1052" font-size="18" font-weight="700" fill="{GROWTH}">+$100 from Scotia</text>
    <rect x="90" y="1075" width="{W-180}" height="10" rx="5" fill="{BORDER}"/>
    <rect x="90" y="1075" width="{int((W-180) * 0.42)}" height="10" rx="5" fill="{GROWTH}"/>
    <text x="{W-90}" y="1072" font-size="14" font-weight="700" fill="{SLATE}" text-anchor="end">4 of 12 months</text>
  </g>

  <!-- Bottom nav -->
  <rect x="20" y="1380" width="{W-40}" height="120" fill="white"/>
  <line x1="20" y1="1380" x2="{W-20}" y2="1380" stroke="{BORDER}"/>
  <g font-family="{FONT}" font-size="13" font-weight="700" text-anchor="middle">
    <circle cx="100" cy="1420" r="20" fill="{RED}" opacity="0.12"/>
    <text x="100" y="1428" font-size="22" fill="{RED}" font-weight="900">$</text>
    <text x="100" y="1470" fill="{RED}">Invest</text>

    <path d="M 270 1418 l 10 -8 l 10 8 v 10 h -20 z" fill="{SLATE}"/>
    <text x="280" y="1470" fill="{SLATE}">Banking</text>

    <path d="M 452 1410 a 8 8 0 1 1 16 0 a 8 8 0 1 1 -16 0 m -6 22 a 14 14 0 0 1 28 0" fill="none" stroke="{SLATE}" stroke-width="2"/>
    <text x="460" y="1470" fill="{SLATE}">Learn</text>

    <circle cx="640" cy="1415" r="10" fill="none" stroke="{SLATE}" stroke-width="2"/>
    <path d="M 630 1432 a 12 12 0 0 1 20 0" fill="none" stroke="{SLATE}" stroke-width="2"/>
    <text x="640" y="1470" fill="{SLATE}">You</text>
  </g>
''')

# =====================================================================
# Screen 7: Round-up feed
# =====================================================================
s7 = phone_frame(f'''
  {header_bar("Round-ups", back=True, right="")}

  <rect x="60" y="210" width="{W-120}" height="200" rx="24" fill="{CHARCOAL}"/>
  <g font-family="{FONT}" fill="white">
    <text x="90" y="260" font-size="14" font-weight="700" opacity="0.85" letter-spacing="1">THIS WEEK</text>
    <text x="90" y="330" font-size="62" font-weight="900">$3.47</text>
    <text x="90" y="370" font-size="18" font-weight="600" opacity="0.85">invested from spare change</text>
  </g>

  <g font-family="{FONT}">
    <rect x="60" y="450" width="{W-120}" height="60" rx="30" fill="white" stroke="{BORDER}"/>
    <rect x="64" y="454" width="{(W-128)//3}" height="52" rx="26" fill="{SCOTIA_BLACK}"/>
    <text x="{60 + (W-120)//6}" y="488" font-size="18" font-weight="700" fill="white" text-anchor="middle">Week</text>
    <text x="{60 + (W-120)//2}" y="488" font-size="18" font-weight="700" fill="{SLATE}" text-anchor="middle">Month</text>
    <text x="{60 + 5*(W-120)//6}" y="488" font-size="18" font-weight="700" fill="{SLATE}" text-anchor="middle">All time</text>
  </g>

  <g font-family="{FONT}">
    <text x="60" y="580" font-size="14" font-weight="700" fill="{SLATE}" letter-spacing="1">TODAY</text>

    <g transform="translate(60, 610)">
      <rect x="0" y="0" width="60" height="60" rx="14" fill="{GOLD}" opacity="0.18"/>
      <text x="30" y="40" font-size="26" font-weight="700" fill="{GOLD}" text-anchor="middle">☕</text>
      <text x="80" y="25" font-size="20" font-weight="700" fill="{SCOTIA_BLACK}">Tim Hortons</text>
      <text x="80" y="50" font-size="15" fill="{SLATE}">$4.87 rounded to $5.00</text>
      <text x="{W-150}" y="40" font-size="22" font-weight="800" fill="{GROWTH}" text-anchor="end">+$0.13</text>
    </g>

    <g transform="translate(60, 700)">
      <rect x="0" y="0" width="60" height="60" rx="14" fill="{CHARCOAL}" opacity="0.15"/>
      <text x="30" y="40" font-size="22" font-weight="700" fill="{CHARCOAL}" text-anchor="middle">🚇</text>
      <text x="80" y="25" font-size="20" font-weight="700" fill="{SCOTIA_BLACK}">TTC Presto</text>
      <text x="80" y="50" font-size="15" fill="{SLATE}">$3.35 rounded to $4.00</text>
      <text x="{W-150}" y="40" font-size="22" font-weight="800" fill="{GROWTH}" text-anchor="end">+$0.65</text>
    </g>

    <text x="60" y="820" font-size="14" font-weight="700" fill="{SLATE}" letter-spacing="1">YESTERDAY</text>

    <g transform="translate(60, 850)">
      <rect x="0" y="0" width="60" height="60" rx="14" fill="{RED}" opacity="0.12"/>
      <text x="30" y="40" font-size="22" font-weight="700" fill="{RED}" text-anchor="middle">📚</text>
      <text x="80" y="25" font-size="20" font-weight="700" fill="{SCOTIA_BLACK}">Indigo Books</text>
      <text x="80" y="50" font-size="15" fill="{SLATE}">$22.41 rounded to $23.00</text>
      <text x="{W-150}" y="40" font-size="22" font-weight="800" fill="{GROWTH}" text-anchor="end">+$0.59</text>
    </g>

    <g transform="translate(60, 940)">
      <rect x="0" y="0" width="60" height="60" rx="14" fill="{GROWTH}" opacity="0.15"/>
      <text x="30" y="40" font-size="22" font-weight="700" fill="{GROWTH}" text-anchor="middle">🛒</text>
      <text x="80" y="25" font-size="20" font-weight="700" fill="{SCOTIA_BLACK}">Loblaws</text>
      <text x="80" y="50" font-size="15" fill="{SLATE}">$47.62 rounded to $48.00</text>
      <text x="{W-150}" y="40" font-size="22" font-weight="800" fill="{GROWTH}" text-anchor="end">+$0.38</text>
    </g>

    <g transform="translate(60, 1030)">
      <rect x="0" y="0" width="60" height="60" rx="14" fill="{GOLD}" opacity="0.18"/>
      <text x="30" y="40" font-size="22" font-weight="700" fill="{GOLD}" text-anchor="middle">🎬</text>
      <text x="80" y="25" font-size="20" font-weight="700" fill="{SCOTIA_BLACK}">Cineplex</text>
      <text x="80" y="50" font-size="15" fill="{SLATE}">$14.25 rounded to $15.00</text>
      <text x="{W-150}" y="40" font-size="22" font-weight="800" fill="{GROWTH}" text-anchor="end">+$0.75</text>
    </g>
  </g>

  <rect x="60" y="1170" width="{W-120}" height="120" rx="20" fill="{RED}" opacity="0.08"/>
  <g font-family="{FONT}">
    <text x="90" y="1210" font-size="14" font-weight="700" fill="{RED}" letter-spacing="1">SCOTIA BONUS</text>
    <text x="90" y="1245" font-size="20" font-weight="700" fill="{SCOTIA_BLACK}">Plus 2¢ per purchase, on us.</text>
    <text x="90" y="1273" font-size="16" fill="{SLATE}">Up to $50 over the 2-year program.</text>
  </g>

  <text x="60" y="1370" font-size="16" fill="{SLATE}" font-family="{FONT}">Settings, Pause round-ups</text>
''')

# =====================================================================
# Screen 8: Education + milestones
# =====================================================================
s8 = phone_frame(f'''
  {header_bar("Learn", back=False, right="")}

  <text x="60" y="220" font-size="34" font-weight="800" fill="{SCOTIA_BLACK}" font-family="{FONT}">Five minutes,</text>
  <text x="60" y="265" font-size="34" font-weight="800" fill="{RED}" font-family="{FONT}">five lessons.</text>

  <text x="60" y="310" font-size="18" fill="{SLATE}" font-family="{FONT}">Finish to unlock $25.</text>

  <rect x="60" y="360" width="{W-120}" height="140" rx="24" fill="white" stroke="{BORDER}"/>
  <g font-family="{FONT}">
    <text x="90" y="405" font-size="14" font-weight="700" fill="{SLATE}" letter-spacing="1">YOUR PROGRESS</text>
    <text x="90" y="445" font-size="26" font-weight="800" fill="{SCOTIA_BLACK}">3 of 5 lessons</text>
    <rect x="90" y="465" width="{W-180}" height="10" rx="5" fill="{BORDER}"/>
    <rect x="90" y="465" width="{int((W-180) * 0.6)}" height="10" rx="5" fill="{GROWTH}"/>
  </g>

  <g font-family="{FONT}">
    <rect x="60" y="540" width="{W-120}" height="110" rx="20" fill="white" stroke="{BORDER}"/>
    <circle cx="115" cy="595" r="28" fill="{GROWTH}" opacity="0.18"/>
    <path d="M 100 595 l 12 12 l 22 -22" stroke="{GROWTH}" stroke-width="4" fill="none" stroke-linecap="round"/>
    <text x="170" y="585" font-size="20" font-weight="700" fill="{SCOTIA_BLACK}">What is a TFSA, really?</text>
    <text x="170" y="615" font-size="15" fill="{SLATE}">1 min, in plain language</text>

    <rect x="60" y="670" width="{W-120}" height="110" rx="20" fill="white" stroke="{BORDER}"/>
    <circle cx="115" cy="725" r="28" fill="{GROWTH}" opacity="0.18"/>
    <path d="M 100 725 l 12 12 l 22 -22" stroke="{GROWTH}" stroke-width="4" fill="none" stroke-linecap="round"/>
    <text x="170" y="715" font-size="20" font-weight="700" fill="{SCOTIA_BLACK}">FHSA vs TFSA vs RRSP</text>
    <text x="170" y="745" font-size="15" fill="{SLATE}">2 min, which is right for you</text>

    <rect x="60" y="800" width="{W-120}" height="110" rx="20" fill="white" stroke="{BORDER}"/>
    <circle cx="115" cy="855" r="28" fill="{GROWTH}" opacity="0.18"/>
    <path d="M 100 855 l 12 12 l 22 -22" stroke="{GROWTH}" stroke-width="4" fill="none" stroke-linecap="round"/>
    <text x="170" y="845" font-size="20" font-weight="700" fill="{SCOTIA_BLACK}">Why time matters more than money</text>
    <text x="170" y="875" font-size="15" fill="{SLATE}">1 min, the compounding story</text>

    <rect x="60" y="930" width="{W-120}" height="110" rx="20" fill="white" stroke="{RED}" stroke-width="3"/>
    <circle cx="115" cy="985" r="28" fill="{RED}"/>
    <text x="115" y="998" font-size="28" font-weight="900" fill="white" text-anchor="middle">▶</text>
    <text x="170" y="975" font-size="20" font-weight="700" fill="{SCOTIA_BLACK}">What you actually own in a portfolio</text>
    <text x="170" y="1005" font-size="15" fill="{RED}" font-weight="600">Continue, 1 min left</text>

    <rect x="60" y="1060" width="{W-120}" height="110" rx="20" fill="white" stroke="{BORDER}"/>
    <circle cx="115" cy="1115" r="28" fill="{BORDER}" opacity="0.5"/>
    <rect x="105" y="1108" width="20" height="14" rx="2" fill="none" stroke="{SLATE}" stroke-width="3"/>
    <path d="M 109 1108 v -4 a 6 6 0 0 1 12 0 v 4" fill="none" stroke="{SLATE}" stroke-width="3"/>
    <text x="170" y="1105" font-size="20" font-weight="700" fill="{SLATE}">When markets drop, what really happens?</text>
    <text x="170" y="1135" font-size="15" fill="{SLATE}">1 min, unlocks $25</text>
  </g>

  <rect x="60" y="1220" width="{W-120}" height="100" rx="20" fill="{RED}"/>
  <text x="{W/2}" y="1262" font-size="18" font-weight="700" fill="white" text-anchor="middle" opacity="0.92" font-family="{FONT}">FINISH IN 2 MINUTES TO UNLOCK</text>
  <text x="{W/2}" y="1298" font-size="32" font-weight="900" fill="white" text-anchor="middle" font-family="{FONT}">$25</text>
''')

screens = {
    "screen_01_welcome.svg": s1,
    "screen_02_pre_fill.svg": s2,
    "screen_03_suitability.svg": s3,
    "screen_04_account_pick.svg": s4,
    "screen_05_starter_celebration.svg": s5,
    "screen_06_two_ledger.svg": s6,
    "screen_07_roundup_feed.svg": s7,
    "screen_08_education.svg": s8,
}

for name, svg in screens.items():
    path = os.path.join(OUT_DIR, name)
    with open(path, "w", encoding="utf-8") as f:
        f.write(svg)
    print(f"wrote {name} ({len(svg)} bytes)")

print(f"\nDone. {len(screens)} screens in {OUT_DIR}")
