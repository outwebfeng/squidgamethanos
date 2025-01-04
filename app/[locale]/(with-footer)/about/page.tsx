import { unstable_setRequestLocale, getTranslations } from 'next-intl/server';
import { Metadata } from 'next';

type Props = {
  params: { locale: string };
};

// 生成元数据
export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const t = await getTranslations('Metadata.about');
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://squidgamethanos.com';
  
  // 如果是默认语言(en)，不在 URL 中包含语言代码
  const canonicalPath = locale === 'en' ? '/about' : `/${locale}/about`;
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
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
    },
  };
}

export default async function AboutPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  
  const t = await getTranslations('About');

  return (
    <article className='max-w-4xl mx-auto px-4 py-16 prose prose-lg'>
      <h1 className='text-4xl font-bold mb-8'>{t('title')}</h1>
      <p className='lead mb-8'>{t('subtitle')}</p>

      <h2 className='text-2xl font-bold mt-8 mb-4'>{t('content.introductionTitle')}</h2>
      <p>{t('content.introduction')}</p>

      <h2 className='text-2xl font-bold mt-8 mb-4'>{t('content.characterizationTitle')}</h2>
      <p>{t('content.characterization')}</p>

      <h2 className='text-2xl font-bold mt-8 mb-4'>{t('content.portrayalTitle')}</h2>
      <p>{t('content.portrayal')}</p>

      <h2 className='text-2xl font-bold mt-8 mb-4'>{t('content.impactTitle')}</h2>
      <p>{t('content.impact')}</p>

      <h2 className='text-2xl font-bold mt-8 mb-4'>{t('content.conclusionTitle')}</h2>
      <p>{t('content.conclusion')}</p>
    </article>
  );
} 
