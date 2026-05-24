import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { colors, shadows } from '../styles/theme';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

interface Props {
  onPass: () => void;
  onLike: () => void;
  onInfo?: () => void;
}

export function ActionButtons({ onPass, onLike, onInfo }: Props) {
  return (
    <View style={styles.row}>
      <CircleButton icon="close" color={colors.red} onPress={onPass} size={64} />
      {onInfo && (
        <CircleButton icon="information-circle" color={colors.blue} onPress={onInfo} size={52} small />
      )}
      <CircleButton icon="heart" color={colors.green} onPress={onLike} size={64} />
    </View>
  );
}

function CircleButton({
  icon,
  color,
  onPress,
  size,
  small,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  onPress: () => void;
  size: number;
  small?: boolean;
}) {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <AnimatedPressable
      onPress={onPress}
      onPressIn={() => {
        scale.value = withSpring(0.88, { damping: 15 });
      }}
      onPressOut={() => {
        scale.value = withSpring(1, { damping: 12 });
      }}
      style={[
        styles.circle,
        animatedStyle,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: small ? colors.surfaceElevated : colors.surface,
          borderColor: color,
        },
        !small && shadows.card,
      ]}
    >
      <Ionicons name={icon} size={small ? 26 : 32} color={color} />
    </AnimatedPressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 24,
    paddingVertical: 8,
  },
  circle: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
  },
});
