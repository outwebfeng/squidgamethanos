'use client';

import dynamic from 'next/dynamic';
import YouTubeVideo from '@/components/video/YouTubeVideo';

const ScrollToTop = dynamic(() => import('@/components/page/ScrollToTop'), { ssr: false });

interface HomeContentProps {
  translations: {
    hero: {
      title: string;
      subtitle: string;
      description: string;
      playNow: string;
      gameFrame: {
        url: string;
        title: string;
        loading: string;
        width: string;
        height: string;
        allowFullscreen: boolean;
      };
    };
    videoSection: {
      title: string;
      description: string;
    };
    introduction: {
      title: string;
      description: string;
      steps: Array<{
        title: string;
        description: string;
      }>;
    };
    features: {
      title: string;
      description: string;
      list: Array<{
        title: string;
        description: string;
      }>;
    };
    testimonials: {
      title: string;
      description: string;
      list: Array<{
        content: string;
        author: string;
      }>;
    };
    faq: {
      title: string;
      description: string;
      list: Array<{
        question: string;
        answer: string;
      }>;
    };
  };
}

export default function HomeContent({ translations }: HomeContentProps) {
  return (
    <>
      <ScrollToTop />
      {/* Hero Section */}
      <section id='hero' className='relative flex min-h-[80vh] items-center justify-center bg-gradient-to-b from-sky-50 to-white w-full'>
        <div className='relative z-10 mx-auto w-full max-w-[1200px] px-4 text-center sm:px-6 lg:px-8'>
          <div className='mx-auto max-w-3xl mb-8'>
            <h1 className='mb-4 text-4xl font-bold text-[rgb(54,198,255)] sm:text-6xl whitespace-normal'>
              {translations.hero.title}
            </h1>
            <p className='mb-8 text-lg text-gray-600 whitespace-normal'>
              {translations.hero.subtitle}{translations.hero.description}
            </p>
          </div>
          <div className='w-full aspect-[16/9] rounded-lg overflow-hidden shadow-lg'>
            <iframe 
              src='https://games.crazygames.com/en_US/squid-game-online/index.html?v=1.316'
              title='Squid Game Online'
              className='w-full h-full border-0'
              loading='lazy'
              sandbox='allow-scripts allow-same-origin allow-popups allow-forms'
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Related Video Section */}
      <section className='bg-white py-16'>
        <div className='mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-8'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>{translations.videoSection.title}</h2>
            <p className='text-lg text-gray-600'>{translations.videoSection.description}</p>
          </div>
          <div className='w-full aspect-[16/9] rounded-lg overflow-hidden shadow-lg'>
            <YouTubeVideo videoId="Ed1sGgHUo88" />
          </div>
        </div>
      </section>

      {/* How to Play Section */}
      <section id='introduction' className='bg-white py-16'>
        <div className='mx-auto max-w-pc px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h2 className='mb-4 text-3xl font-bold text-gray-900'>{translations.introduction.title}</h2>
            <p className='mb-12 text-lg text-gray-600'>{translations.introduction.description}</p>
          </div>
          <div className='grid gap-8 md:grid-cols-3'>
            {translations.introduction.steps.map((step) => (
              <div key={`step-${step.title}`} className='rounded-lg bg-sky-50 p-6 text-center'>
                <h3 className='mb-4 text-xl font-bold text-gray-900'>{step.title}</h3>
                <p className='text-gray-600'>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id='features' className='bg-gradient-to-b from-white to-sky-50 py-16'>
        <div className='mx-auto max-w-pc px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h2 className='mb-4 text-3xl font-bold text-gray-900'>{translations.features.title}</h2>
            <p className='mb-12 text-lg text-gray-600'>{translations.features.description}</p>
          </div>
          <div className='grid gap-8 md:grid-cols-3'>
            {translations.features.list.map((feature) => (
              <div key={`feature-${feature.title}`} className='rounded-lg bg-white p-6 shadow-lg'>
                <h3 className='mb-4 text-xl font-bold text-gray-900'>{feature.title}</h3>
                <p className='text-gray-600'>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is Section */}
      <section id='testimonials' className='bg-sky-50 py-16'>
        <div className='mx-auto max-w-pc px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h2 className='mb-4 text-3xl font-bold text-gray-900'>{translations.testimonials.title}</h2>
            <p className='mb-12 text-lg text-gray-600'>{translations.testimonials.description}</p>
          </div>
          <div className='grid gap-8 md:grid-cols-3'>
            {translations.testimonials.list.map((testimonial) => (
              <div key={`testimonial-${testimonial.author}`} className='rounded-lg bg-white p-6 shadow-lg'>
                <p className='mb-4 text-gray-600'>{testimonial.content}</p>
                <p className='font-semibold text-gray-900'>- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id='faq' className='bg-white py-16'>
        <div className='mx-auto max-w-pc px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h2 className='mb-4 text-3xl font-bold text-gray-900'>{translations.faq.title}</h2>
            <p className='mb-12 text-lg text-gray-600'>{translations.faq.description}</p>
          </div>
          <div className='grid gap-6 md:grid-cols-2'>
            {translations.faq.list.map((faq) => (
              <div key={`faq-${faq.question}`} className='rounded-lg bg-sky-50 p-6'>
                <h3 className='mb-4 text-xl font-bold text-gray-900'>{faq.question}</h3>
                <p className='text-gray-600'>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
