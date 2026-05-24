import React, { useMemo } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { GradientBackground } from '../components/GradientBackground';
import { useApp } from '../context/AppContext';
import { ACHIEVEMENTS, MOCK_USER } from '../data/mockUser';
import { colors, radius, spacing, typography } from '../styles/theme';

export function ProfileScreen() {
  const insets = useSafeAreaInsets();
  const { watchlist, mockInvestments, swipeCount } = useApp();

  const sectors = useMemo(() => {
    const counts: Record<string, number> = {};
    watchlist.forEach((s) => {
      counts[s.sector] = (counts[s.sector] || 0) + 1;
    });
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .map(([name]) => name)
      .slice(0, 3);
  }, [watchlist]);

  const achievements = useMemo(() => {
    return ACHIEVEMENTS.map((a) => {
      if (a.id === 'first_swipe') return { ...a, unlocked: swipeCount >= 1 };
      if (a.id === 'watchlist_3') return { ...a, unlocked: watchlist.length >= 3 };
      if (a.id === 'mock_invest') return { ...a, unlocked: mockInvestments.length >= 1 };
      if (a.id === 'sector_explorer') return { ...a, unlocked: sectors.length >= 3 };
      return a;
    });
  }, [swipeCount, watchlist.length, mockInvestments.length, sectors.length]);

  const favoriteSectors =
    sectors.length > 0 ? sectors : MOCK_USER.favoriteSectors;

  return (
    <GradientBackground>
      <ScrollView
        contentContainerStyle={[
          styles.container,
          { paddingTop: insets.top + spacing.md, paddingBottom: insets.bottom + 100 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Profile</Text>

        <Animated.View entering={FadeInDown} style={styles.profileCard}>
          <LinearGradient
            colors={[colors.gradientStart, '#8B1530']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.avatar}
          >
            <Text style={styles.avatarText}>{MOCK_USER.avatarInitials}</Text>
          </LinearGradient>
          <Text style={styles.displayName}>{MOCK_USER.displayName}</Text>
          <Text style={styles.username}>{MOCK_USER.username}</Text>

          <View style={styles.levelBox}>
            <View style={styles.levelHeader}>
              <Text style={styles.levelLabel}>Investor level</Text>
              <Text style={styles.levelName}>{MOCK_USER.investorLevel}</Text>
            </View>
            <View style={styles.progressTrack}>
              <View
                style={[styles.progressFill, { width: `${MOCK_USER.levelProgress * 100}%` }]}
              />
            </View>
            <Text style={styles.levelHint}>
              {Math.round(MOCK_USER.levelProgress * 100)}% to Market Maven
            </Text>
          </View>
        </Animated.View>

        <View style={styles.statsRow}>
          <StatCard label="Stocks liked" value={String(watchlist.length)} icon="heart" />
          <StatCard label="Swipes" value={String(swipeCount)} icon="swap-horizontal" />
          <StatCard label="Mock invests" value={String(mockInvestments.length)} icon="rocket" />
        </View>

        <Animated.View entering={FadeInDown.delay(100)} style={styles.section}>
          <Text style={styles.sectionTitle}>Favorite sectors</Text>
          <View style={styles.chips}>
            {favoriteSectors.map((sector) => (
              <View key={sector} style={styles.chip}>
                <Text style={styles.chipText}>{sector}</Text>
              </View>
            ))}
          </View>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(200)} style={styles.section}>
          <Text style={styles.sectionTitle}>Achievements</Text>
          {achievements.map((item, index) => (
            <View
              key={item.id}
              style={[styles.achievement, !item.unlocked && styles.achievementLocked]}
            >
              <View
                style={[
                  styles.achievementIcon,
                  item.unlocked && styles.achievementIconUnlocked,
                ]}
              >
                <Ionicons
                  name={item.icon as keyof typeof Ionicons.glyphMap}
                  size={22}
                  color={item.unlocked ? colors.gold : colors.textMuted}
                />
              </View>
              <View style={styles.achievementText}>
                <Text style={[styles.achievementTitle, !item.unlocked && styles.muted]}>
                  {item.title}
                </Text>
                <Text style={styles.achievementDesc}>{item.description}</Text>
              </View>
              {item.unlocked && (
                <Ionicons name="checkmark-circle" size={24} color={colors.green} />
              )}
            </View>
          ))}
        </Animated.View>
      </ScrollView>
    </GradientBackground>
  );
}

function StatCard({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: keyof typeof Ionicons.glyphMap;
}) {
  return (
    <View style={styles.statCard}>
      <Ionicons name={icon} size={20} color={colors.scotiaRed} />
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.lg,
  },
  title: {
    ...typography.title,
    color: colors.text,
    marginBottom: spacing.lg,
  },
  profileCard: {
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.xl,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.lg,
  },
  avatar: {
    width: 88,
    height: 88,
    borderRadius: 44,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.md,
  },
  avatarText: {
    fontSize: 28,
    fontWeight: '800',
    color: '#FFF',
  },
  displayName: {
    ...typography.headline,
    color: colors.text,
  },
  username: {
    ...typography.caption,
    color: colors.textSecondary,
    marginBottom: spacing.lg,
  },
  levelBox: {
    width: '100%',
  },
  levelHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.sm,
  },
  levelLabel: {
    ...typography.caption,
    color: colors.textSecondary,
  },
  levelName: {
    ...typography.bodyBold,
    color: colors.scotiaRed,
  },
  progressTrack: {
    height: 8,
    backgroundColor: colors.surfaceElevated,
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.scotiaRed,
    borderRadius: 4,
  },
  levelHint: {
    ...typography.micro,
    color: colors.textMuted,
    marginTop: 6,
    textTransform: 'none',
    letterSpacing: 0,
  },
  statsRow: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginBottom: spacing.lg,
  },
  statCard: {
    flex: 1,
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    padding: spacing.md,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
    gap: 4,
  },
  statValue: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.text,
  },
  statLabel: {
    fontSize: 10,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  section: {
    marginBottom: spacing.lg,
  },
  sectionTitle: {
    ...typography.bodyBold,
    color: colors.text,
    marginBottom: spacing.md,
  },
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  chip: {
    backgroundColor: 'rgba(168,85,247,0.2)',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: radius.full,
  },
  chipText: {
    ...typography.caption,
    color: colors.purple,
    fontWeight: '600',
  },
  achievement: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    padding: spacing.md,
    borderRadius: radius.md,
    marginBottom: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
    gap: spacing.md,
  },
  achievementLocked: {
    opacity: 0.55,
  },
  achievementIcon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: colors.surfaceElevated,
    alignItems: 'center',
    justifyContent: 'center',
  },
  achievementIconUnlocked: {
    backgroundColor: 'rgba(245,158,11,0.15)',
  },
  achievementText: {
    flex: 1,
  },
  achievementTitle: {
    ...typography.bodyBold,
    color: colors.text,
  },
  achievementDesc: {
    ...typography.caption,
    color: colors.textSecondary,
    marginTop: 2,
  },
  muted: {
    color: colors.textSecondary,
  },
});
