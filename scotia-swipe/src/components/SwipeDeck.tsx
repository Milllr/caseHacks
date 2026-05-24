import React, { forwardRef, useCallback, useImperativeHandle, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  Extrapolation,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { Stock } from '../data/mockStocks';
import { colors, spacing, typography } from '../styles/theme';
import { StockCard } from './StockCard';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const SWIPE_THRESHOLD = SCREEN_WIDTH * 0.28;

interface Props {
  stocks: Stock[];
  onSwipeRight: (stock: Stock) => void;
  onSwipeLeft: (stock: Stock) => void;
  onCardPress: (stock: Stock) => void;
}

export interface SwipeDeckRef {
  swipeLeft: () => void;
  swipeRight: () => void;
}

export const SwipeDeck = forwardRef<SwipeDeckRef, Props>(function SwipeDeck(
  { stocks, onSwipeRight, onSwipeLeft, onCardPress },
  ref
) {
  const [index, setIndex] = useState(0);

  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const currentStock = stocks[index];
  const nextStock = stocks[index + 1];

  const advance = useCallback(
    (direction: 'left' | 'right') => {
      if (!currentStock) return;
      if (direction === 'right') onSwipeRight(currentStock);
      else onSwipeLeft(currentStock);
      setIndex((i) => i + 1);
      translateX.value = 0;
      translateY.value = 0;
    },
    [currentStock, onSwipeLeft, onSwipeRight, translateX, translateY]
  );

  const flingOff = useCallback(
    (direction: 'left' | 'right') => {
      const toX = direction === 'right' ? SCREEN_WIDTH * 1.4 : -SCREEN_WIDTH * 1.4;
      translateX.value = withTiming(toX, { duration: 280 }, () => {
        runOnJS(advance)(direction);
      });
    },
    [advance, translateX]
  );

  useImperativeHandle(ref, () => ({
    swipeLeft: () => flingOff('left'),
    swipeRight: () => flingOff('right'),
  }));

  const pan = Gesture.Pan()
    .activeOffsetX([-12, 12])
    .onUpdate((e) => {
      translateX.value = e.translationX;
      translateY.value = e.translationY * 0.15;
    })
    .onEnd((e) => {
      if (e.translationX > SWIPE_THRESHOLD) {
        runOnJS(flingOff)('right');
      } else if (e.translationX < -SWIPE_THRESHOLD) {
        runOnJS(flingOff)('left');
      } else {
        translateX.value = withSpring(0, { damping: 18 });
        translateY.value = withSpring(0, { damping: 18 });
      }
    });

  const cardStyle = useAnimatedStyle(() => {
    const rotate = interpolate(
      translateX.value,
      [-SCREEN_WIDTH, 0, SCREEN_WIDTH],
      [-12, 0, 12],
      Extrapolation.CLAMP
    );
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
        { rotate: `${rotate}deg` },
      ],
    };
  });

  const likeOpacity = useAnimatedStyle(() => ({
    opacity: interpolate(translateX.value, [0, SWIPE_THRESHOLD], [0, 1], Extrapolation.CLAMP),
  }));

  const passOpacity = useAnimatedStyle(() => ({
    opacity: interpolate(translateX.value, [-SWIPE_THRESHOLD, 0], [1, 0], Extrapolation.CLAMP),
  }));

  const nextCardStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      Math.abs(translateX.value),
      [0, SCREEN_WIDTH],
      [0.94, 1],
      Extrapolation.CLAMP
    );
    return {
      transform: [{ scale }],
      opacity: interpolate(Math.abs(translateX.value), [0, 120], [0.65, 0.85], Extrapolation.CLAMP),
    };
  });

  if (!currentStock) {
    return (
      <View style={styles.empty}>
        <Text style={styles.emptyEmoji}>🎉</Text>
        <Text style={styles.emptyTitle}>You are all caught up!</Text>
        <Text style={styles.emptySub}>Check your watchlist or come back for more picks.</Text>
      </View>
    );
  }

  return (
    <View style={styles.deck}>
      {nextStock && (
        <Animated.View style={[styles.cardBehind, nextCardStyle]} pointerEvents="none">
          <StockCard stock={nextStock} interactive={false} />
        </Animated.View>
      )}

      <GestureDetector gesture={pan}>
        <Animated.View style={[styles.cardFront, cardStyle]}>
          <Animated.View style={[styles.stamp, styles.stampLike, likeOpacity]}>
            <Text style={styles.stampLikeText}>LIKE</Text>
          </Animated.View>
          <Animated.View style={[styles.stamp, styles.stampPass, passOpacity]}>
            <Text style={styles.stampPassText}>PASS</Text>
          </Animated.View>
          <StockCard stock={currentStock} onPress={() => onCardPress(currentStock)} />
        </Animated.View>
      </GestureDetector>
    </View>
  );
});

const styles = StyleSheet.create({
  deck: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardFront: {
    position: 'absolute',
    width: SCREEN_WIDTH - spacing.lg * 2,
    height: '92%',
    zIndex: 2,
  },
  cardBehind: {
    position: 'absolute',
    width: SCREEN_WIDTH - spacing.lg * 2,
    height: '88%',
    zIndex: 1,
  },
  stamp: {
    position: 'absolute',
    top: 48,
    zIndex: 10,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderRadius: 8,
  },
  stampLike: {
    left: 24,
    borderColor: colors.green,
    transform: [{ rotate: '-12deg' }],
  },
  stampPass: {
    right: 24,
    borderColor: colors.red,
    transform: [{ rotate: '12deg' }],
  },
  stampLikeText: {
    fontSize: 28,
    fontWeight: '900',
    color: colors.green,
    letterSpacing: 2,
  },
  stampPassText: {
    fontSize: 28,
    fontWeight: '900',
    color: colors.red,
    letterSpacing: 2,
  },
  empty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.xl,
  },
  emptyEmoji: {
    fontSize: 56,
    marginBottom: spacing.md,
  },
  emptyTitle: {
    ...typography.headline,
    color: colors.text,
    textAlign: 'center',
    marginBottom: spacing.sm,
  },
  emptySub: {
    ...typography.body,
    color: colors.textSecondary,
    textAlign: 'center',
  },
});
