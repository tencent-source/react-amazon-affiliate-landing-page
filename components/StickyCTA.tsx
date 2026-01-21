import React, { useState, useEffect } from 'react';
import { AFFILIATE_LINK } from '../constants';

export const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50 md:hidden animate-fade-in-up">
      <a 
        href={AFFILIATE_LINK}
        target="_blank" 
        rel="noopener noreferrer"
        className="block w-full bg-brand-600 text-white text-center font-bold py-3 rounded-lg shadow-md hover:bg-brand-700 transition-colors"
      >
        Buy Now on Amazon
      </a>
    </div>
  );
};