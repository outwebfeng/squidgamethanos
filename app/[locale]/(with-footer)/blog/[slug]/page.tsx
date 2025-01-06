import { notFound } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

export async function generateMetadata({ params: { locale, slug } }: { params: { locale: string; slug: string } }) {
  const t = await getTranslations({ locale, namespace: 'Blog' });
  const articles = t.raw('articles');
  const article = articles.find((a: any) => a.slug === slug);

  if (!article) {
    return notFound();
  }

  // 构建canonical URL，只有非英语时才包含语言代码
  const canonicalPath = locale === 'en' ? `/blog/${slug}` : `/${locale}/blog/${slug}`;
  const canonicalUrl = `https://squidgamethanos.com${canonicalPath}`;

  return {
    title: article.title,
    description: article.title,
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default function BlogArticlePage({ params: { slug } }: { params: { slug: string } }) {
  const t = useTranslations('Blog');
  const articles = t.raw('articles');
  const article = articles.find((a: any) => a.slug === slug);

  if (!article) {
    return notFound();
  }

  // 处理自定义的youtube标记
  const processedContent = article.content.replace(
    /:::(youtube\{videoId=([^}]+)\})/g,
    (_match: string, _full: string, videoId: string) =>
      `<div class="not-prose mb-8 mx-auto" style="max-width: 640px;"><iframe width="100%" height="480" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`,
  );

  return (
    <div className='container mx-auto px-4 py-8'>
      <article className='prose prose-lg max-w-none'>
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{processedContent}</ReactMarkdown>
      </article>
    </div>
  );
}
