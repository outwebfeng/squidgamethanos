'use server';

import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import HomeContent from './HomeContent';

type Props = {
  params: { locale: string };
};

export default async function Page({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  
  const t = await getTranslations('Home');

  // 修改翻译对象的结构，使用 t.raw() 来获取嵌套对象
  const translations = {
    hero: {
      title: t('hero.title'),
      subtitle: t('hero.subtitle'),
      description: t('hero.description'),
      playNow: t('hero.playNow'),
      gameFrame: t.raw('hero.gameFrame'),
    },
    introduction: {
      title: t('introduction.title'),
      description: t('introduction.description'),
      steps: t.raw('introduction.steps'),
    },
    features: {
      title: t('features.title'),
      description: t('features.description'),
      list: t.raw('features.list'),
    },
    testimonials: {
      title: t('testimonials.title'),
      description: t('testimonials.description'),
      list: t.raw('testimonials.list'),
    },
    faq: {
      title: t('faq.title'),
      description: t('faq.description'),
      list: t.raw('faq.list'),
    },
  };

  return <HomeContent translations={translations} />;
}
