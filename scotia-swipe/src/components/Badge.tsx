import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { colors, radius, typography } from '../styles/theme';

interface Props {
  label: string;
  variant?: 'default' | 'sector' | 'sentiment' | 'green' | 'red';
  style?: ViewStyle;
}

export function Badge({ label, variant = 'default', style }: Props) {
  const variantStyle = variants[variant];
  return (
    <View style={[styles.badge, variantStyle.container, style]}>
      <Text style={[styles.text, variantStyle.text]}>{label}</Text>
    </View>
  );
}

const variants = {
  default: {
    container: { backgroundColor: 'rgba(255,255,255,0.1)' },
    text: { color: colors.textSecondary },
  },
  sector: {
    container: { backgroundColor: 'rgba(168,85,247,0.2)' },
    text: { color: colors.purple },
  },
  sentiment: {
    container: { backgroundColor: 'rgba(34,197,94,0.15)' },
    text: { color: colors.green },
  },
  green: {
    container: { backgroundColor: colors.greenMuted },
    text: { color: colors.green },
  },
  red: {
    container: { backgroundColor: colors.redMuted },
    text: { color: colors.red },
  },
};

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: radius.full,
  },
  text: {
    ...typography.micro,
    textTransform: 'uppercase',
  },
});
