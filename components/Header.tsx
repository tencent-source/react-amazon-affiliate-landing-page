import React from 'react';
import { Dumbbell } from 'lucide-react';
import { AFFILIATE_LINK } from '../constants';

export const Header: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.location.href = '#'}>
            <Dumbbell className="h-8 w-8 text-brand-600" />
            <span className="font-bold text-xl text-slate-900 tracking-tight">Tone Fitness</span>
          </div>
          <div className="hidden md:block">
            <a 
              href={AFFILIATE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900 text-white px-5 py-2 rounded-full font-medium hover:bg-slate-800 transition-colors text-sm"
            >
              Check Price on Amazon
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};