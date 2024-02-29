import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.gymsyn.ai',
  appName: 'Gymsyn',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
