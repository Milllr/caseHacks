import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Stock } from '../data/mockStocks';
interface Props {
  stock: Stock;
  size?: number;
}

const TICKER_ABBREV: Record<string, string> = {
  AAPL: 'A',
  TSLA: 'T',
  NVDA: 'N',
  AMZN: 'a',
  MSFT: 'M',
  META: 'f',
  NFLX: 'N',
  SPOT: 'S',
};

export function StockLogo({ stock, size = 56 }: Props) {
  const letter = TICKER_ABBREV[stock.ticker] ?? stock.ticker[0];

  return (
    <View
      style={[
        styles.logo,
        {
          width: size,
          height: size,
          borderRadius: size * 0.28,
          backgroundColor: stock.logoColor,
        },
      ]}
    >
      <Text style={[styles.letter, { fontSize: size * 0.45 }]}>{letter}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  letter: {
    color: '#FFFFFF',
    fontWeight: '800',
  },
});
