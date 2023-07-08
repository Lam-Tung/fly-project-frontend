import { getLocaleFromNavigator, init, register } from 'svelte-i18n';

register('en', () => import('./locales/en-US.json'));

init({
    fallbackLocale: 'en-US',
    initialLocale: getLocaleFromNavigator(),
  });
