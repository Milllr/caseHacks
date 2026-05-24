import React, { useEffect } from 'react';
import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, {
  FadeIn,
  FadeInDown,
  SlideInDown,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Stock } from '../data/mockStocks';
import { colors, radius, spacing, typography } from '../styles/theme';
import { Badge } from './Badge';
import { MiniChart } from './MiniChart';
import { StockLogo } from './StockLogo';

interface Props {
  stock: Stock | null;
  visible: boolean;
  onClose: () => void;
  onAddWatchlist: (stock: Stock) => void;
  onMockInvest: (stock: Stock) => void;
  isInWatchlist: boolean;
}

export function StockDetailModal({
  stock,
  visible,
  onClose,
  onAddWatchlist,
  onMockInvest,
  isInWatchlist,
}: Props) {
  const insets = useSafeAreaInsets();
  const scale = useSharedValue(0.95);

  useEffect(() => {
    if (visible) scale.value = withSpring(1, { damping: 14 });
  }, [visible, scale]);

  const sheetStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  if (!stock) return null;

  const positive = stock.changePercent >= 0;
  const sentimentVariant =
    stock.analystSentiment === 'Bullish'
      ? 'green'
      : stock.analystSentiment === 'Bearish'
        ? 'red'
        : 'default';

  return (
    <Modal visible={visible} animationType="fade" transparent onRequestClose={onClose}>
      <View style={[styles.overlay, { paddingTop: insets.top }]}>
        <Pressable style={StyleSheet.absoluteFill} onPress={onClose} />
        <Animated.View
          entering={SlideInDown.springify().damping(18)}
          style={[styles.sheet, sheetStyle, { paddingBottom: insets.bottom + spacing.md }]}
        >
          <LinearGradient
            colors={['#1E1E2E', '#14141F', '#0A0A0F']}
            style={StyleSheet.absoluteFill}
          />
          <View style={styles.handle} />
          <Pressable style={styles.closeBtn} onPress={onClose} hitSlop={12}>
            <Ionicons name="close" size={28} color={colors.textSecondary} />
          </Pressable>

          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
            <Animated.View entering={FadeInDown.delay(80)} style={styles.hero}>
              <StockLogo stock={stock} size={72} />
              <View style={styles.heroText}>
                <Text style={styles.name}>{stock.name}</Text>
                <Text style={styles.ticker}>{stock.ticker}</Text>
              </View>
              <Text style={styles.price}>${stock.price.toFixed(2)}</Text>
              <Badge
                label={`${positive ? '+' : ''}${stock.changePercent.toFixed(2)}% today`}
                variant={positive ? 'green' : 'red'}
              />
            </Animated.View>

            <Animated.View entering={FadeIn.delay(120)} style={styles.chartBlock}>
              <MiniChart data={stock.chartData} width={340} height={140} positive={positive} />
            </Animated.View>

            <Section title="About">
              <Text style={styles.body}>{stock.fullDescription}</Text>
            </Section>

            <Section title="Why it's trending">
              <Text style={styles.body}>{stock.whyTrending}</Text>
            </Section>

            <Section title="Beginner breakdown">
              <View style={styles.tipBox}>
                <Ionicons name="bulb" size={20} color={colors.gold} />
                <Text style={styles.tipText}>{stock.beginnerExplanation}</Text>
              </View>
            </Section>

            <View style={styles.metaRow}>
              <MetaItem label="Market cap" value={stock.marketCap} />
              <MetaItem label="Sector" value={stock.sector} />
              <MetaItem label="Sentiment" value={stock.analystSentiment} />
            </View>

            <Section title="AI Summary">
              <LinearGradient
                colors={['rgba(236,17,26,0.15)', 'rgba(168,85,247,0.1)']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.aiBox}
              >
                <View style={styles.aiHeader}>
                  <Ionicons name="sparkles" size={18} color={colors.scotiaRed} />
                  <Text style={styles.aiLabel}>Scotia Swipe AI</Text>
                </View>
                <Text style={styles.aiText}>{stock.aiSummary}</Text>
              </LinearGradient>
            </Section>

            <Badge label={stock.analystSentiment} variant={sentimentVariant as 'green' | 'red' | 'default'} />

            <View style={styles.actions}>
              <Pressable
                style={[styles.btn, styles.btnSecondary]}
                onPress={() => onAddWatchlist(stock)}
              >
                <Ionicons name={isInWatchlist ? 'checkmark-circle' : 'eye'} size={22} color={colors.text} />
                <Text style={styles.btnText}>{isInWatchlist ? 'On watchlist' : 'Add to watchlist'}</Text>
              </Pressable>
              <Pressable
                style={[styles.btn, styles.btnPrimary]}
                onPress={() => onMockInvest(stock)}
              >
                <LinearGradient
                  colors={[colors.gradientStart, colors.gradientEnd]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={StyleSheet.absoluteFill}
                />
                <Ionicons name="rocket" size={22} color="#FFF" />
                <Text style={[styles.btnText, styles.btnTextPrimary]}>Mock invest $50</Text>
              </Pressable>
            </View>
          </ScrollView>
        </Animated.View>
      </View>
    </Modal>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.metaItem}>
      <Text style={styles.metaLabel}>{label}</Text>
      <Text style={styles.metaValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.75)',
    justifyContent: 'flex-end',
  },
  sheet: {
    maxHeight: '92%',
    borderTopLeftRadius: radius.xl,
    borderTopRightRadius: radius.xl,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.border,
  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 2,
    alignSelf: 'center',
    marginTop: spacing.sm,
    marginBottom: spacing.sm,
  },
  closeBtn: {
    position: 'absolute',
    top: spacing.md,
    right: spacing.md,
    zIndex: 10,
  },
  scroll: {
    padding: spacing.lg,
    paddingTop: spacing.sm,
  },
  hero: {
    alignItems: 'center',
    marginBottom: spacing.lg,
    gap: spacing.sm,
  },
  heroText: {
    alignItems: 'center',
  },
  name: {
    ...typography.title,
    color: colors.text,
  },
  ticker: {
    ...typography.caption,
    color: colors.textSecondary,
  },
  price: {
    fontSize: 36,
    fontWeight: '800',
    color: colors.text,
  },
  chartBlock: {
    alignItems: 'center',
    marginBottom: spacing.lg,
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: radius.md,
    paddingVertical: spacing.md,
  },
  section: {
    marginBottom: spacing.lg,
  },
  sectionTitle: {
    ...typography.bodyBold,
    color: colors.text,
    marginBottom: spacing.sm,
  },
  body: {
    ...typography.body,
    color: colors.textSecondary,
  },
  tipBox: {
    flexDirection: 'row',
    gap: spacing.sm,
    backgroundColor: colors.surfaceElevated,
    padding: spacing.md,
    borderRadius: radius.md,
    borderLeftWidth: 3,
    borderLeftColor: colors.gold,
  },
  tipText: {
    ...typography.body,
    color: colors.text,
    flex: 1,
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.lg,
    gap: spacing.sm,
  },
  metaItem: {
    flex: 1,
    backgroundColor: colors.surfaceElevated,
    padding: spacing.md,
    borderRadius: radius.md,
    alignItems: 'center',
  },
  metaLabel: {
    ...typography.micro,
    color: colors.textMuted,
    marginBottom: 4,
  },
  metaValue: {
    ...typography.bodyBold,
    color: colors.text,
    fontSize: 14,
  },
  aiBox: {
    padding: spacing.md,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  aiHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: spacing.sm,
  },
  aiLabel: {
    ...typography.caption,
    color: colors.scotiaRed,
    fontWeight: '700',
  },
  aiText: {
    ...typography.body,
    color: colors.textSecondary,
  },
  actions: {
    gap: spacing.sm,
    marginTop: spacing.md,
    marginBottom: spacing.lg,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    paddingVertical: 16,
    borderRadius: radius.md,
    overflow: 'hidden',
  },
  btnSecondary: {
    backgroundColor: colors.surfaceElevated,
    borderWidth: 1,
    borderColor: colors.border,
  },
  btnPrimary: {
    position: 'relative',
  },
  btnText: {
    ...typography.bodyBold,
    color: colors.text,
  },
  btnTextPrimary: {
    color: '#FFF',
    zIndex: 1,
  },
});
