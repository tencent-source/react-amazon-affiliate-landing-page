import React from 'react';
import { AFFILIATE_LINK } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-12 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-slate-500 text-sm mb-4">
          &copy; {new Date().getFullYear()} Tone Fitness Review. All rights reserved.
        </p>
        <div className="text-xs text-slate-400 max-w-2xl mx-auto space-y-2">
            <p>
                We are a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for us to earn fees by linking to Amazon.com and affiliated sites.
            </p>
            <p>
                Product prices and availability are accurate as of the date/time indicated and are subject to change. Any price and availability information displayed on Amazon at the time of purchase will apply to the purchase of this product.
            </p>
        </div>
        <div className="mt-8">
            <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:text-brand-800 text-sm font-semibold">
                View on Amazon
            </a>
        </div>
      </div>
    </footer>
  );
};