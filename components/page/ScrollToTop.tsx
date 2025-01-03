'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {isVisible && (
        <button
          type='button'
          onClick={scrollToTop}
          className='fixed bottom-52 right-48 hidden items-center justify-center rounded-full border border-[rgb(54,198,255)] bg-white p-2 text-[rgb(54,198,255)] transition-colors duration-300 hover:bg-[rgb(54,198,255)]/10 lg:flex'
        >
          <ArrowUp className='h-5 w-5' />
          <span className='sr-only'>Go to Top</span>
        </button>
      )}
    </div>
  );
}
