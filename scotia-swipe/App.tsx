import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppProvider } from './src/context/AppContext';
import { RootNavigator } from './src/navigation/RootNavigator';
import { colors } from './src/styles/theme';

export default function App() {
  const content = (
    <SafeAreaProvider>
      <AppProvider>
        <ExpoStatusBar style="light" />
        <RootNavigator />
      </AppProvider>
    </SafeAreaProvider>
  );

  if (Platform.OS === 'web') {
    return (
      <View style={styles.webRoot}>
        <View style={styles.phoneFrame}>
          <GestureHandlerRootView style={styles.appShell}>{content}</GestureHandlerRootView>
        </View>
      </View>
    );
  }

  return (
    <GestureHandlerRootView style={styles.appShell}>
      <StatusBar barStyle="light-content" />
      {content}
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  webRoot: {
    flex: 1,
    minHeight: '100vh' as unknown as number,
    backgroundColor: '#050508',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  phoneFrame: {
    width: '100%',
    maxWidth: 430,
    height: '100%',
    maxHeight: 932,
    borderRadius: 32,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.12)',
    backgroundColor: colors.background,
    boxShadow: '0 24px 80px rgba(0,0,0,0.65)',
  },
  appShell: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
