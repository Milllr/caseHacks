import React, { useEffect } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { SlideInDown, SlideOutDown } from 'react-native-reanimated';
import { Stock } from '../data/mockStocks';
import { colors, radius, spacing, typography } from '../styles/theme';
import { StockLogo } from './StockLogo';

interface Props {
  stock: Stock | null;
  visible: boolean;
  onClose: () => void;
  onWatchlist: () => void;
  onMockInvest: () => void;
  onViewDetails: () => void;
}

export function PostSwipeSheet({
  stock,
  visible,
  onClose,
  onWatchlist,
  onMockInvest,
  onViewDetails,
}: Props) {
  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(onClose, 8000);
    return () => clearTimeout(t);
  }, [visible, onClose]);

  if (!stock) return null;

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <Pressable style={styles.backdrop} onPress={onClose}>
        <Animated.View entering={SlideInDown.springify()} exiting={SlideOutDown} style={styles.sheet}>
          <Pressable onPress={(e) => e.stopPropagation()}>
            <LinearGradient colors={['#252538', '#14141F']} style={styles.inner}>
              <View style={styles.header}>
                <StockLogo stock={stock} size={48} />
                <View style={styles.headerText}>
                  <Text style={styles.title}>You liked {stock.name}!</Text>
                  <Text style={styles.sub}>What do you want to do next?</Text>
                </View>
              </View>
              <ActionRow icon="eye" label="Add to watchlist" onPress={onWatchlist} />
              <ActionRow icon="rocket" label="Mock invest $50" onPress={onMockInvest} primary />
              <ActionRow icon="document-text" label="View full details" onPress={onViewDetails} />
              <Pressable onPress={onClose} style={styles.skip}>
                <Text style={styles.skipText}>Keep swiping</Text>
              </Pressable>
            </LinearGradient>
          </Pressable>
        </Animated.View>
      </Pressable>
    </Modal>
  );
}

function ActionRow({
  icon,
  label,
  onPress,
  primary,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  onPress: () => void;
  primary?: boolean;
}) {
  return (
    <Pressable
      style={[styles.action, primary && styles.actionPrimary]}
      onPress={onPress}
    >
      {primary && (
        <LinearGradient
          colors={[colors.gradientStart, colors.gradientEnd]}
          style={StyleSheet.absoluteFill}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        />
      )}
      <Ionicons name={icon} size={22} color={primary ? '#FFF' : colors.text} />
      <Text style={[styles.actionText, primary && styles.actionTextPrimary]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'flex-end',
  },
  sheet: {
    margin: spacing.md,
    marginBottom: spacing.xl,
    borderRadius: radius.lg,
    overflow: 'hidden',
  },
  inner: {
    padding: spacing.lg,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
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
  title: {
    ...typography.headline,
    color: colors.text,
  },
  sub: {
    ...typography.caption,
    color: colors.textSecondary,
    marginTop: 4,
  },
  action: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    padding: spacing.md,
    borderRadius: radius.md,
    marginBottom: spacing.sm,
    backgroundColor: colors.surfaceElevated,
    overflow: 'hidden',
  },
  actionPrimary: {
    borderWidth: 0,
  },
  actionText: {
    ...typography.bodyBold,
    color: colors.text,
  },
  actionTextPrimary: {
    color: '#FFF',
    zIndex: 1,
  },
  skip: {
    alignItems: 'center',
    paddingTop: spacing.sm,
  },
  skipText: {
    ...typography.caption,
    color: colors.textMuted,
  },
});
