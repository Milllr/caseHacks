import { Platform } from 'react-native';

/** Web opens in the browser: skip setup and show a populated demo immediately. */
export const WEB_DEMO_MODE = Platform.OS === 'web';
