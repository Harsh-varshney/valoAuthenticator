import 'dotenv/config';

const appVariant = process.env.APP_VARIANT ?? 'production';
const isDev = appVariant === 'development';

module.exports = {
  expo: {
    name: isDev ? 'ValoAuthenticator-dev' : 'ValoAuthenticator',
    slug: 'timepass',
    version: '1.12.0',
    orientation: 'portrait',
    icon: './assets/logo.png',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'cover',
      backgroundColor: '#003554',
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ['**/*'],
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/logo.png',
        backgroundColor: '#FFFFFF',
      },
      package: isDev
        ? 'com.valoauthenticator.app.dev'
        : 'com.valoauthenticator.app',
      versionCode: 1120000,
    },
    scheme: isDev ? 'valoauthenticator-dev' : 'valoauthenticator',
    plugins: [
      'expo-localization',
      '@morrowdigital/watermelondb-expo-plugin',
      'expo-document-picker',
      [
        'expo-build-properties',
        {
          android: {
            kotlinVersion: '1.6.10',
          },
        },
      ],
    ],
    extra: {
      eas: {
        projectId: process.env.EAS_PROJECT_ID,
      },
    },
  },
};
