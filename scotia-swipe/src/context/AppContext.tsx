import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { WEB_DEMO_MODE } from '../config/demo';
import { MOCK_STOCKS, Stock } from '../data/mockStocks';

export interface MockInvestment {
  stockId: string;
  amount: number;
  shares: number;
  date: string;
}

interface AppContextValue {
  hasOnboarded: boolean | null;
  completeOnboarding: () => void;
  watchlist: Stock[];
  addToWatchlist: (stock: Stock) => void;
  removeFromWatchlist: (stockId: string) => void;
  passedIds: string[];
  markPassed: (stockId: string) => void;
  mockInvestments: MockInvestment[];
  mockInvest: (stock: Stock, amount: number) => void;
  swipeCount: number;
  incrementSwipeCount: () => void;
}

const AppContext = createContext<AppContextValue | null>(null);

const STORAGE_KEY = '@scotia_swipe_onboarded';

function buildWebDemoState() {
  const apple = MOCK_STOCKS.find((s) => s.id === 'aapl')!;
  const spotify = MOCK_STOCKS.find((s) => s.id === 'spot')!;
  return {
    hasOnboarded: true as const,
    watchlist: [apple, spotify],
    passedIds: ['tsla'],
    mockInvestments: [
      {
        stockId: apple.id,
        amount: 50,
        shares: 50 / apple.price,
        date: new Date().toISOString(),
      },
    ],
    swipeCount: 6,
  };
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  const webDemo = WEB_DEMO_MODE ? buildWebDemoState() : null;

  const [hasOnboarded, setHasOnboarded] = useState<boolean | null>(
    webDemo ? webDemo.hasOnboarded : null
  );
  const [watchlist, setWatchlist] = useState<Stock[]>(webDemo?.watchlist ?? []);
  const [passedIds, setPassedIds] = useState<string[]>(webDemo?.passedIds ?? []);
  const [mockInvestments, setMockInvestments] = useState<MockInvestment[]>(
    webDemo?.mockInvestments ?? []
  );
  const [swipeCount, setSwipeCount] = useState(webDemo?.swipeCount ?? 0);

  useEffect(() => {
    if (WEB_DEMO_MODE) return;
    AsyncStorage.getItem(STORAGE_KEY).then((value) => {
      setHasOnboarded(value === 'true');
    });
  }, []);

  const completeOnboarding = useCallback(() => {
    setHasOnboarded(true);
    AsyncStorage.setItem(STORAGE_KEY, 'true');
  }, []);

  const addToWatchlist = useCallback((stock: Stock) => {
    setWatchlist((prev) => {
      if (prev.some((s) => s.id === stock.id)) return prev;
      return [...prev, stock];
    });
  }, []);

  const removeFromWatchlist = useCallback((stockId: string) => {
    setWatchlist((prev) => prev.filter((s) => s.id !== stockId));
  }, []);

  const markPassed = useCallback((stockId: string) => {
    setPassedIds((prev) => (prev.includes(stockId) ? prev : [...prev, stockId]));
  }, []);

  const mockInvest = useCallback((stock: Stock, amount: number) => {
    const shares = amount / stock.price;
    setMockInvestments((prev) => [
      ...prev.filter((i) => i.stockId !== stock.id),
      {
        stockId: stock.id,
        amount,
        shares,
        date: new Date().toISOString(),
      },
    ]);
    addToWatchlist(stock);
  }, [addToWatchlist]);

  const incrementSwipeCount = useCallback(() => {
    setSwipeCount((c) => c + 1);
  }, []);

  const value = useMemo(
    () => ({
      hasOnboarded,
      completeOnboarding,
      watchlist,
      addToWatchlist,
      removeFromWatchlist,
      passedIds,
      markPassed,
      mockInvestments,
      mockInvest,
      swipeCount,
      incrementSwipeCount,
    }),
    [
      hasOnboarded,
      completeOnboarding,
      watchlist,
      addToWatchlist,
      removeFromWatchlist,
      passedIds,
      markPassed,
      mockInvestments,
      mockInvest,
      swipeCount,
      incrementSwipeCount,
    ]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
