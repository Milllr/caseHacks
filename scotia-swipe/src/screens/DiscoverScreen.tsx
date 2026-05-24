import React, { useMemo, useRef, useState } from 'react';
import { Alert, Platform, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ActionButtons } from '../components/ActionButtons';
import { GradientBackground } from '../components/GradientBackground';
import { PostSwipeSheet } from '../components/PostSwipeSheet';
import { StockDetailModal } from '../components/StockDetailModal';
import { SwipeDeck, SwipeDeckRef } from '../components/SwipeDeck';
import { useApp } from '../context/AppContext';
import { MOCK_STOCKS, Stock } from '../data/mockStocks';
import { colors, spacing, typography } from '../styles/theme';

export function DiscoverScreen() {
  const insets = useSafeAreaInsets();
  const deckRef = useRef<SwipeDeckRef>(null);
  const {
    passedIds,
    watchlist,
    addToWatchlist,
    markPassed,
    mockInvest,
    incrementSwipeCount,
  } = useApp();

  const [detailStock, setDetailStock] = useState<Stock | null>(null);
  const [likedStock, setLikedStock] = useState<Stock | null>(null);
  const [showPostSwipe, setShowPostSwipe] = useState(false);

  const availableStocks = useMemo(
    () => MOCK_STOCKS.filter((s) => !passedIds.includes(s.id)),
    [passedIds]
  );

  const handleSwipeRight = (stock: Stock) => {
    incrementSwipeCount();
    setLikedStock(stock);
    setShowPostSwipe(true);
  };

  const handleSwipeLeft = (stock: Stock) => {
    incrementSwipeCount();
    markPassed(stock.id);
  };

  const closePostSwipe = () => {
    setShowPostSwipe(false);
    setLikedStock(null);
  };

  const showInvestSuccess = (name: string) => {
    Alert.alert('Mock investment', `You mock-invested $50 in ${name}. Demo only!`);
  };

  return (
    <GradientBackground>
      <View style={[styles.container, { paddingTop: insets.top + spacing.sm }]}>
        <View style={styles.header}>
          <Text style={styles.greeting}>Discover</Text>
          <Text style={styles.sub}>
            {Platform.OS === 'web'
              ? 'Drag cards left or right, or use the buttons below'
              : 'Swipe right if you are curious'}
          </Text>
        </View>

        <View style={styles.deckArea}>
          <SwipeDeck
            ref={deckRef}
            stocks={availableStocks}
            onSwipeRight={handleSwipeRight}
            onSwipeLeft={handleSwipeLeft}
            onCardPress={setDetailStock}
          />
        </View>

        <View style={[styles.actions, { paddingBottom: insets.bottom > 0 ? 8 : spacing.md }]}>
          <ActionButtons
            onPass={() => deckRef.current?.swipeLeft()}
            onLike={() => deckRef.current?.swipeRight()}
            onInfo={() => {
              const top = availableStocks[0];
              if (top) setDetailStock(top);
            }}
          />
        </View>
      </View>

      <PostSwipeSheet
        stock={likedStock}
        visible={showPostSwipe}
        onClose={closePostSwipe}
        onWatchlist={() => {
          if (likedStock) {
            addToWatchlist(likedStock);
            Alert.alert('Watchlist', `${likedStock.name} added to your watchlist.`);
          }
          closePostSwipe();
        }}
        onMockInvest={() => {
          if (likedStock) {
            mockInvest(likedStock, 50);
            showInvestSuccess(likedStock.name);
          }
          closePostSwipe();
        }}
        onViewDetails={() => {
          if (likedStock) {
            setDetailStock(likedStock);
          }
          closePostSwipe();
        }}
      />

      <StockDetailModal
        stock={detailStock}
        visible={!!detailStock}
        onClose={() => setDetailStock(null)}
        onAddWatchlist={(s) => {
          addToWatchlist(s);
          Alert.alert('Watchlist', `${s.name} added to your watchlist.`);
        }}
        onMockInvest={(s) => {
          mockInvest(s, 50);
          showInvestSuccess(s.name);
          setDetailStock(null);
        }}
        isInWatchlist={detailStock ? watchlist.some((w) => w.id === detailStock.id) : false}
      />
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing.lg,
  },
  header: {
    marginBottom: spacing.sm,
  },
  greeting: {
    ...typography.title,
    color: colors.text,
  },
  sub: {
    ...typography.caption,
    color: colors.textSecondary,
    marginTop: 2,
  },
  deckArea: {
    flex: 1,
    marginVertical: spacing.sm,
  },
  actions: {
    paddingTop: spacing.sm,
  },
});
