import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeIn } from 'react-native-reanimated';
import { Stock } from '../data/mockStocks';
import { colors, radius, shadows, spacing, typography } from '../styles/theme';
import { Badge } from './Badge';
import { MiniChart } from './MiniChart';
import { StockLogo } from './StockLogo';

interface Props {
  stock: Stock;
  onPress?: () => void;
  interactive?: boolean;
}

export function StockCard({ stock, onPress, interactive = true }: Props) {
  const positive = stock.changePercent >= 0;
  const changeLabel = `${positive ? '+' : ''}${stock.changePercent.toFixed(2)}%`;

  const content = (
    <LinearGradient
      colors={['#252538', '#1A1A28', '#14141F']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.card}
    >
      <View style={styles.glowOrb} />
      <View style={styles.header}>
        <StockLogo stock={stock} size={64} />
        <View style={styles.headerText}>
          <Text style={styles.name}>{stock.name}</Text>
          <Text style={styles.ticker}>{stock.ticker}</Text>
        </View>
        <Badge label={stock.sector} variant="sector" />
      </View>

      <View style={styles.priceRow}>
        <Text style={styles.price}>${stock.price.toFixed(2)}</Text>
        <Badge label={changeLabel} variant={positive ? 'green' : 'red'} />
      </View>

      <View style={styles.chartWrap}>
        <MiniChart data={stock.chartData} width={300} height={72} positive={positive} />
      </View>

      <Text style={styles.description} numberOfLines={3}>
        {stock.shortDescription}
      </Text>

      <Text style={styles.tapHint}>Tap for details</Text>
    </LinearGradient>
  );

  if (!interactive || !onPress) {
    return <View style={styles.wrapper}>{content}</View>;
  }

  return (
    <Animated.View entering={FadeIn.duration(300)} style={styles.wrapper}>
      <Pressable onPress={onPress} style={({ pressed }) => [pressed && styles.pressed]}>
        {content}
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    borderRadius: radius.lg,
    ...shadows.card,
  },
  card: {
    flex: 1,
    borderRadius: radius.lg,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: 'hidden',
  },
  glowOrb: {
    position: 'absolute',
    top: -60,
    right: -60,
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: colors.glow,
    opacity: 0.4,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    marginBottom: spacing.lg,
  },
  headerText: {
    flex: 1,
  },
  name: {
    ...typography.headline,
    color: colors.text,
  },
  ticker: {
    ...typography.caption,
    color: colors.textSecondary,
    marginTop: 2,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    marginBottom: spacing.md,
  },
  price: {
    fontSize: 32,
    fontWeight: '800',
    color: colors.text,
    letterSpacing: -0.5,
  },
  chartWrap: {
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  description: {
    ...typography.body,
    color: colors.textSecondary,
    flex: 1,
  },
  tapHint: {
    ...typography.micro,
    color: colors.textMuted,
    textAlign: 'center',
    marginTop: spacing.sm,
    textTransform: 'uppercase',
  },
  pressed: {
    opacity: 0.95,
  },
});
