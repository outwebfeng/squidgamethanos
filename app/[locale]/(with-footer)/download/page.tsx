import { unstable_setRequestLocale, getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import DownloadContent from './DownloadContent';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const t = await getTranslations('Metadata.download');
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://squidgamethanos.com';
  
  const canonicalPath = locale === 'en' ? '/download' : `/${locale}/download`;
  const canonicalUrl = `${baseUrl}${canonicalPath}`;

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: canonicalUrl,
      siteName: 'Squid Game Thanos',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
    },
  };
}

export default function DownloadPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  return <DownloadContent />;
} 
