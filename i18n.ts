import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// en-US, es-ES, fr-FR, jp-JP, zh-TW
export const languages = [
  {
    code: 'en-US',
    lang: 'en',
    label: 'English',
  },
  {
    code: 'es-ES',
    lang: 'es',
    label: 'Español',
  },
  {
    code: 'fr-FR',
    lang: 'fr',
    label: 'Français',
  },
  {
    code: 'ja-JP',
    lang: 'jp',
    label: '日本語',
  },
  {
    code: 'zh-TW',
    lang: 'tw',
    label: '繁體中文',
  },
];

export const locales = ['en', 'es', 'fr', 'jp', 'tw'];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});