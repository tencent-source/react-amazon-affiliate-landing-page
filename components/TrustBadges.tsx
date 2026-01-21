import React from 'react';
import { Truck, ShieldCheck, Lock } from 'lucide-react';

export const TrustBadges: React.FC = () => {
  const badges = [
    {
      icon: <Truck className="w-10 h-10 text-brand-600 mb-3" />,
      title: "Free Shipping",
      description: "Fast & free delivery for Prime members"
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-brand-600 mb-3" />,
      title: "30-Day Returns",
      description: "Satisfaction guaranteed or your money back"
    },
    {
      icon: <Lock className="w-10 h-10 text-brand-600 mb-3" />,
      title: "Secure Checkout",
      description: "Processed securely by Amazon"
    }
  ];

  return (
    <section className="py-12 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {badges.map((badge, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-brand-50/50 transition-colors duration-300">
              <div className="p-3 bg-brand-50 rounded-full mb-4">
                {badge.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">{badge.title}</h3>
              <p className="text-slate-500 text-sm">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};