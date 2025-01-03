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

export default function AboutPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  return (
    <article className='max-w-4xl mx-auto px-4 py-16 prose prose-lg'>
      <h1 className='text-4xl font-bold mb-8'>Squid Game Thanos: A Fusion of Dystopian Drama and Marvel&apos;s Titan</h1>
      
      <p className='lead mb-8'>
        The convergence of popular culture phenomena often leads to intriguing narratives, and the amalgamation of &quot;Squid Game&quot; and Thanos is a testament to this creative synthesis. &quot;Squid Game,&quot; the South Korean dystopian series that captivated global audiences, introduces a character named Thanos in its second season. This character, distinct from Marvel&apos;s Titan, adds a new layer of complexity to the series&apos; narrative.
      </p>

      <h2 className='text-2xl font-bold mt-8 mb-4'>Introduction to Squid Game&apos;s Thanos</h2>
      <p>
        In the second season of &quot;Squid Game,&quot; Thanos emerges as a notable participant in the deadly games. Portrayed by Choi Seung-hyun, also known as T.O.P from the K-pop band BigBang, this character diverges from the typical desperate contestant archetype. Thanos is depicted as a flamboyant internet rapper with a penchant for chaos, bringing a unique dynamic to the series.
      </p>

      <h2 className='text-2xl font-bold mt-8 mb-4'>Characterization and Role</h2>
      <p>
        Thanos, designated as Player 230, is characterized by his purple hair and erratic behavior. Unlike other participants driven by financial desperation, Thanos appears to revel in the chaos of the games. His unpredictable nature and enjoyment of the deadly challenges set him apart as a wildcard within the narrative.
      </p>

      <h2 className='text-2xl font-bold mt-8 mb-4'>Portrayal by Choi Seung-hyun</h2>
      <p>
        Choi Seung-hyun&apos;s portrayal of Thanos has garnered significant attention. Known for his musical career as T.O.P, Choi&apos;s transition to acting, particularly in such a complex role, has been met with critical acclaim. His performance adds depth to the character, making Thanos a memorable addition to the series.
      </p>

      <h2 className='text-2xl font-bold mt-8 mb-4'>Narrative Impact</h2>
      <p>
        Thanos&apos; presence in &quot;Squid Game&quot; season two introduces a new layer of tension and unpredictability. His actions and interactions with other characters contribute to the series&apos; exploration of human nature under extreme circumstances. The character&apos;s development and eventual fate serve as pivotal elements in the season&apos;s storyline.
      </p>

      <h2 className='text-2xl font-bold mt-8 mb-4'>Conclusion</h2>
      <p>
        The introduction of Thanos in &quot;Squid Game&quot; exemplifies the series&apos; commitment to complex character development and engaging storytelling. This fusion of a dystopian narrative with a character reminiscent of Marvel&apos;s Titan offers viewers a unique and thought-provoking experience.
      </p>
    </article>
  );
} 
