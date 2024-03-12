import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.gymsync.ai',
  appName: 'Gymsyn',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
