'use client';

import { useTranslations } from 'next-intl';
import YouTubeVideo from '@/components/video/YouTubeVideo';

export default function DownloadContent() {
  const t = useTranslations('Download');

  const features = t.raw('downloadSection.features') as string[];
  const requirements = t.raw('downloadSection.requirements.items') as string[];

  const videoId = 'sT-WR6zdJj0';

  return (
    <div className='min-h-screen bg-gradient-to-b from-sky-50 to-white'>
      <div className='mx-auto max-w-4xl px-4 py-16'>
        {/* Header Section */}
        <div className='text-center mb-16'>
          <h1 className='text-4xl font-bold text-gray-900 mb-4'>{t('title')}</h1>
          <p className='text-xl text-gray-600'>{t('subtitle')}</p>
          <p className='mt-4 text-gray-600'>{t('description')}</p>
        </div>

        {/* Video Section */}
        <div className='mb-16'>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>{t('videoSection.title')}</h2>
          <p className='text-gray-600 mb-6'>{t('videoSection.description')}</p>
          <div className='rounded-lg overflow-hidden shadow-lg'>
            <YouTubeVideo videoId={videoId} />
          </div>
        </div>

        {/* Download Section */}
        <div className='bg-white rounded-lg shadow-xl p-8'>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>{t('downloadSection.title')}</h2>
          <p className='text-gray-600 mb-8'>{t('downloadSection.description')}</p>
          
          {/* Features */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-8'>
            {features.map((feature: string) => (
              <div key={feature} className='flex items-center'>
                <svg className='w-5 h-5 text-green-500 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                </svg>
                <span className='text-gray-700'>{feature}</span>
              </div>
            ))}
          </div>

          {/* Download Button */}
          <div className='text-center mb-8'>
            <a
              href='https://squidgameunleashed.onelink.me/DuZp/microsite'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block bg-[rgb(54,198,255)] text-white font-bold py-4 px-8 rounded-lg hover:bg-[rgb(44,178,235)] transition-colors duration-200'
            >
              {t('downloadSection.buttonText')}
            </a>
          </div>

          {/* System Requirements */}
          <div>
            <h3 className='text-xl font-bold text-gray-900 mb-4'>{t('downloadSection.requirements.title')}</h3>
            <ul className='list-disc list-inside space-y-2 text-gray-600'>
              {requirements.map((item: string) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 
