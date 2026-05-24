# Scotia Swipe

A polished React Native demo app for the Scotiabank case competition. Gen Z-friendly investing discovery with Tinder-style stock swipes, watchlist, mock investing, and gamified profile.

**Demo only.** Mock data. Not financial advice. Not affiliated with Scotiabank.

## Features

- Onboarding flow with intro slides
- Discover screen with swipeable stock cards (8 mock stocks)
- Expandable stock detail modal with charts and AI summary
- Post-swipe actions: watchlist, mock invest, details
- Watchlist with mock portfolio value
- Profile with investor level, stats, and achievements
- Bottom tabs: Discover, Watchlist, Profile
- Dark mode UI with Scotia Red accents, gradients, and Reanimated animations

## Tech stack

- Expo SDK 52
- React Native + TypeScript
- React Navigation (stack + tabs)
- React Native Reanimated + Gesture Handler
- Expo Linear Gradient + React Native SVG

## Quick start

### Prerequisites

- Node.js 18+
- npm or yarn
- [Expo Go](https://expo.dev/go) on your phone, or Android Studio / Xcode simulator

### Install and run

```bash
cd scotia-swipe
npm install
```

**Browser demo (recommended for judges, no terminal keys):**

```bash
npm run demo
```

Or double-click **`RUN-DEMO.cmd`** on Windows (works even when PowerShell blocks `npx`).

This opens the app in your browser at **http://localhost:8081**. Do not open that URL while only running `npm start` without `--web`, or you will see Metro JSON instead of the app.

Web demo mode skips onboarding and preloads sample watchlist data so every tab works immediately.

**Phone (Expo Go):**

```bash
npm start
```

Then scan the QR code with Expo Go. Press `w` in the terminal to open web if needed.

### Reset onboarding

Clear app storage in Expo Go, or uninstall and reinstall. Onboarding completion is stored in AsyncStorage under `@scotia_swipe_onboarded`.

## Project structure

```
scotia-swipe/
├── App.tsx                 # Root component
├── index.ts                # Entry (gesture handler import)
├── app.json                # Expo config
├── assets/                 # App icons and splash
└── src/
    ├── components/         # StockCard, SwipeDeck, modals, charts
    ├── screens/            # Onboarding, Discover, Watchlist, Profile
    ├── navigation/         # Root stack + bottom tabs
    ├── data/               # Mock stocks and user
    ├── context/            # Watchlist and mock invest state
    └── styles/             # Theme tokens
```

## Demo flow (for judges)

1. Complete onboarding and tap **Get Started**
2. On **Discover**, swipe right on a stock you recognize (e.g. Apple, Spotify)
3. Choose **Add to watchlist** or **Mock invest $50**
4. Tap a card for full details, chart, and AI summary
5. Open **Watchlist** to see portfolio mock value
6. Open **Profile** to see stats and unlock achievements by swiping and investing

## Mock stocks

Apple, Tesla, Nvidia, Amazon, Microsoft, Meta, Netflix, Spotify with realistic fake prices and beginner-friendly copy.

## Notes

- No backend, auth, or real trading
- Built for presentation quality over production hardening
- Scotia Red (`#EC111A`) used as brand accent on a dark fintech shell
