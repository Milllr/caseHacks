export const colors = {
  background: '#0A0A0F',
  surface: '#14141F',
  surfaceElevated: '#1C1C2A',
  card: '#1E1E2E',
  border: 'rgba(255,255,255,0.08)',
  text: '#FFFFFF',
  textSecondary: '#9CA3AF',
  textMuted: '#6B7280',
  scotiaRed: '#EC111A',
  green: '#22C55E',
  greenMuted: 'rgba(34,197,94,0.15)',
  red: '#EF4444',
  redMuted: 'rgba(239,68,68,0.15)',
  purple: '#A855F7',
  blue: '#3B82F6',
  gold: '#F59E0B',
  gradientStart: '#EC111A',
  gradientEnd: '#FF6B35',
  glow: 'rgba(236,17,26,0.35)',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const radius = {
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  full: 9999,
};

export const typography = {
  hero: { fontSize: 36, fontWeight: '800' as const, letterSpacing: -0.5 },
  title: { fontSize: 28, fontWeight: '700' as const, letterSpacing: -0.3 },
  headline: { fontSize: 22, fontWeight: '700' as const },
  body: { fontSize: 16, fontWeight: '400' as const, lineHeight: 24 },
  bodyBold: { fontSize: 16, fontWeight: '600' as const },
  caption: { fontSize: 13, fontWeight: '500' as const },
  micro: { fontSize: 11, fontWeight: '600' as const, letterSpacing: 0.5 },
};

export const shadows = {
  card: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 24,
    elevation: 12,
  },
  glow: {
    shadowColor: colors.scotiaRed,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 8,
  },
};
