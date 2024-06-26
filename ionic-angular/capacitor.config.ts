import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'cono',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    GoogleAuth: {
      scopes: ["profile", "email"],
      serverClientId: "428834245608-umhcaoa8irk46m0h668r97o0qe8sek18.apps.googleusercontent.com",
      forceCodeForRefreshToken: true
    }
  }
};

export default config;
