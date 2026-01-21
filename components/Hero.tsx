import React, { useEffect, useRef } from 'react';
import { Button } from './Button';
import { AFFILIATE_LINK, PRODUCT_IMAGE_URL, PRODUCT_TAGLINE } from '../constants';
import { Star, ShieldCheck, Truck } from 'lucide-react';

export const Hero: React.FC = () => {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const scrolled = window.scrollY;
        // Apply a subtle parallax effect (translateY) and zoom (scale) based on scroll position
        const parallaxOffset = scrolled * 0.12;
        const scaleFactor = 1 + scrolled * 0.0005;
        
        imageRef.current.style.transform = `translateY(${parallaxOffset}px) scale(${scaleFactor})`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-24 overflow-hidden bg-gradient-to-b from-brand-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-100 text-brand-700 font-medium text-sm">
              <Star className="w-4 h-4 mr-2 fill-brand-700" />
              #1 Choice for Home Fitness
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight tracking-tight">
              {PRODUCT_TAGLINE}
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl">
              Elevate your workout with the <span className="font-bold text-slate-900">Tone Fitness Neoprene Dumbbell Set</span>. 
              Designed for durability, comfort, and style. Includes a compact storage rack to keep your space organized.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button href={AFFILIATE_LINK} fullWidth>
                Shop Now on Amazon
              </Button>
            </div>

            <div className="flex items-center gap-6 text-sm text-slate-500 pt-4">
              <div className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-brand-600" />
                <span>Durable Neoprene</span>
              </div>
              <div className="flex items-center gap-1">
                <Truck className="w-4 h-4 text-brand-600" />
                <span>Prime Shipping Available</span>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="order-1 lg:order-2 relative group perspective-1000">
            <div className="absolute inset-0 bg-brand-500/10 rounded-full blur-3xl transform translate-x-12 translate-y-12 opacity-50"></div>
            <div className="relative transform transition-transform duration-500 hover:scale-105">
                <img 
                  ref={imageRef}
                  src={PRODUCT_IMAGE_URL} 
                  alt="Tone Fitness Dumbbell Set with Rack" 
                  className="w-full h-auto max-h-[600px] object-contain drop-shadow-2xl mx-auto will-change-transform"
                />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};