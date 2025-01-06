import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'Blog' });

  const canonicalPath = locale === 'en' ? '/blog' : `/${locale}/blog`;
  const canonicalUrl = `https://squidgamethanos.com${canonicalPath}`;

  return {
    title: t('title'),
    description: t('subtitle'),
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default function BlogPage() {
  const t = useTranslations('Blog');

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='mb-4 text-4xl font-bold'>{t('title')}</h1>
      <p className='mb-8 text-xl text-gray-600'>{t('subtitle')}</p>

      <div className='space-y-4'>
        {t.raw('articles').map((article: any) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
            className='block rounded-lg bg-white p-6 shadow-md transition-shadow duration-300 ease-in-out hover:shadow-lg'
          >
            <h2 className='text-2xl font-semibold text-gray-800 hover:text-sky-500'>{article.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
