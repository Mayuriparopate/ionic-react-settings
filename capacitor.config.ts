import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'whats-app-clone',
  webDir: 'dist',

  plugins: {
    Keyboard: {
      resize: "ionic", // Valid inside Keyboard plugin
      scrollAssist: true,
      scrollPadding: true
    }
  }
};

export default config;
