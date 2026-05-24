import React, { useMemo } from 'react';
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { GradientBackground } from '../components/GradientBackground';
import { MiniChart } from '../components/MiniChart';
import { StockLogo } from '../components/StockLogo';
import { Badge } from '../components/Badge';
import { useApp } from '../context/AppContext';
import { MOCK_STOCKS } from '../data/mockStocks';
import { colors, radius, spacing, typography } from '../styles/theme';

export function WatchlistScreen() {
  const insets = useSafeAreaInsets();
  const { watchlist, mockInvestments } = useApp();

  const portfolio = useMemo(() => {
    const holdings = mockInvestments.map((inv) => {
      const stock = MOCK_STOCKS.find((s) => s.id === inv.stockId);
      if (!stock) return { value: inv.amount, gain: 0 };
      const currentValue = inv.shares * stock.price;
      const gain = currentValue - inv.amount;
      return { value: currentValue, gain };
    });
    const totalValue =
      holdings.reduce((sum, h) => sum + h.value, 0) +
      watchlist
        .filter((w) => !mockInvestments.some((i) => i.stockId === w.id))
        .reduce((sum, w) => sum + w.price * 0.1, 0);
    const totalGain = holdings.reduce((sum, h) => sum + h.gain, 0);
    const dayChange = watchlist.reduce((sum, w) => sum + w.price * (w.changePercent / 100) * 0.05, 0);
    return { totalValue: totalValue || 1247.5, totalGain, dayChange: dayChange || 18.42 };
  }, [watchlist, mockInvestments]);

  const dayPositive = portfolio.dayChange >= 0;

  return (
    <GradientBackground>
      <View style={[styles.container, { paddingTop: insets.top + spacing.md }]}>
        <Text style={styles.title}>Watchlist</Text>
        <Text style={styles.sub}>Stocks you swiped right on</Text>

        <LinearGradient
          colors={['rgba(236,17,26,0.2)', 'rgba(30,30,46,0.9)']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.portfolioCard}
        >
          <Text style={styles.portfolioLabel}>Mock portfolio value</Text>
          <Text style={styles.portfolioValue}>
            ${portfolio.totalValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </Text>
          <View style={styles.portfolioRow}>
            <Badge
              label={`${dayPositive ? '+' : ''}$${Math.abs(portfolio.dayChange).toFixed(2)} today`}
              variant={dayPositive ? 'green' : 'red'}
            />
            <Text style={styles.portfolioHint}>Demo numbers only</Text>
          </View>
          <MiniChart
            data={[1100, 1120, 1150, 1140, 1180, 1200, 1220, 1210, 1240, 1235, 1248, portfolio.totalValue]}
            width={320}
            height={64}
            positive={dayPositive}
          />
        </LinearGradient>

        {watchlist.length === 0 ? (
          <View style={styles.empty}>
            <Ionicons name="heart-outline" size={56} color={colors.textMuted} />
            <Text style={styles.emptyTitle}>No likes yet</Text>
            <Text style={styles.emptySub}>
              Swipe right on stocks in Discover to build your watchlist.
            </Text>
          </View>
        ) : (
          <FlatList
            data={watchlist}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.list}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => {
              const invested = mockInvestments.find((i) => i.stockId === item.id);
              const positive = item.changePercent >= 0;
              return (
                <Animated.View entering={FadeInDown.delay(index * 60)}>
                  <Pressable style={styles.row}>
                    <StockLogo stock={item} size={48} />
                    <View style={styles.rowText}>
                      <Text style={styles.rowName}>{item.name}</Text>
                      <Text style={styles.rowTicker}>{item.ticker}</Text>
                    </View>
                    <View style={styles.rowRight}>
                      <Text style={styles.rowPrice}>${item.price.toFixed(2)}</Text>
                      <Badge
                        label={`${positive ? '+' : ''}${item.changePercent.toFixed(2)}%`}
                        variant={positive ? 'green' : 'red'}
                      />
                      {invested && (
                        <Text style={styles.investedLabel}>
                          Mock ${invested.amount.toFixed(0)} invested
                        </Text>
                      )}
                    </View>
                  </Pressable>
                </Animated.View>
              );
            }}
          />
        )}
      </View>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing.lg,
  },
  title: {
    ...typography.title,
    color: colors.text,
  },
  sub: {
    ...typography.caption,
    color: colors.textSecondary,
    marginBottom: spacing.lg,
  },
  portfolioCard: {
    borderRadius: radius.lg,
    padding: spacing.lg,
    marginBottom: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
  },
  portfolioLabel: {
    ...typography.micro,
    color: colors.textSecondary,
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  portfolioValue: {
    fontSize: 36,
    fontWeight: '800',
    color: colors.text,
    letterSpacing: -1,
  },
  portfolioRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    marginVertical: spacing.sm,
  },
  portfolioHint: {
    ...typography.micro,
    color: colors.textMuted,
    textTransform: 'none',
    letterSpacing: 0,
  },
  list: {
    paddingBottom: 100,
    gap: spacing.sm,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    padding: spacing.md,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    gap: spacing.md,
    marginBottom: spacing.sm,
  },
  rowText: {
    flex: 1,
  },
  rowName: {
    ...typography.bodyBold,
    color: colors.text,
  },
  rowTicker: {
    ...typography.caption,
    color: colors.textSecondary,
  },
  rowRight: {
    alignItems: 'flex-end',
    gap: 4,
  },
  rowPrice: {
    ...typography.bodyBold,
    color: colors.text,
  },
  investedLabel: {
    fontSize: 10,
    color: colors.scotiaRed,
    fontWeight: '600',
  },
  empty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 80,
  },
  emptyTitle: {
    ...typography.headline,
    color: colors.text,
    marginTop: spacing.md,
  },
  emptySub: {
    ...typography.body,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: spacing.sm,
    paddingHorizontal: spacing.xl,
  },
});
