import React from 'react';
import { StarRating } from './StarRating';
import { AFFILIATE_LINK } from '../constants';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by Fitness Enthusiasts</h2>
          <p className="text-slate-300 text-lg">See why thousands of customers are upgrading their home gyms.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              text: "The grip is fantastic. I don't have to worry about them slipping out of my hands during cardio classes. Plus, the rack takes up zero space!",
              author: "Sarah M.",
              role: "Yoga Instructor"
            },
            {
              text: "Perfect set for beginners. The colors are vibrant and they feel very high quality compared to the cast iron ones I used to have.",
              author: "Mike T.",
              role: "Home Gym Owner"
            },
            {
              text: "I love that they don't damage my hardwood floors. The neoprene coating is soft but durable. Highly recommended.",
              author: "Jessica L.",
              role: "Verified Buyer"
            }
          ].map((review, i) => (
            <div key={i} className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <div className="mb-4">
                <StarRating rating={5} size="w-5 h-5" />
              </div>
              <p className="text-slate-300 italic mb-6">"{review.text}"</p>
              <div>
                <p className="font-bold text-white">{review.author}</p>
                <p className="text-sm text-slate-400">{review.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
            <a 
                href={AFFILIATE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-400 hover:text-brand-300 font-medium underline underline-offset-4"
            >
                Read more reviews on Amazon
            </a>
        </div>
      </div>
    </section>
  );
};