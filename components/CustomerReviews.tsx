import React from 'react';
import { CheckCircle } from 'lucide-react';
import { StarRating } from './StarRating';

const reviews = [
  {
    id: 1,
    name: "Yuki Tanaka",
    image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=200&h=200&auto=format&fit=crop",
    rating: 5,
    date: "October 12, 2023",
    title: "Perfect for my apartment",
    content: "I live in a small apartment and space is premium. This set is incredibly compact. The rack fits in the corner easily. The weights are comfortable to hold and the colors help me quickly grab the right weight during fast-paced intervals."
  },
  {
    id: 2,
    name: "Mei Chen",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=200&auto=format&fit=crop",
    rating: 5,
    date: "September 28, 2023",
    title: "Best investment for home workouts",
    content: "Absolutely love these! The neoprene coating is soft on the hands but gives a secure grip so they don't slip when I'm sweating. The stand was super easy to put together. Highly recommended for anyone starting their fitness journey."
  },
  {
    id: 3,
    name: "Jun-Ho Kim",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&h=200&auto=format&fit=crop",
    rating: 5,
    date: "November 5, 2023",
    title: "Great quality and durability",
    content: "I was worried about the rack being flimsy but it's actually quite sturdy. The dumbbells themselves are excellent quality. I use them daily for shadow boxing and toning exercises. Fast shipping too!"
  }
];

export const CustomerReviews: React.FC = () => {
  // Static data to match the "1200+ global ratings" claim in the UI
  // This provides a more realistic looking product page than calculating from just 3 reviews
  const averageRating = 4.8;
  const totalRatings = "1,240";
  
  const distribution = {
    5: 84,
    4: 10,
    3: 4,
    2: 1,
    1: 1
  } as const;

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Rating Summary Section */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 mb-12">
            <div className="grid md:grid-cols-2 gap-10 items-center">
                <div className="text-center md:text-left">
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">Customer Reviews</h2>
                    <div className="flex flex-col items-center md:items-start">
                        <div className="flex items-end gap-3 mb-2">
                             <span className="text-5xl font-extrabold text-slate-900 leading-none">{averageRating}</span>
                             <div className="mb-1">
                                <StarRating rating={averageRating} size="w-5 h-5" />
                             </div>
                        </div>
                        <p className="text-slate-500 font-medium">Based on {totalRatings} global ratings</p>
                    </div>
                </div>

                <div className="w-full max-w-md mx-auto md:mx-0">
                    {([5, 4, 3, 2, 1] as const).map((star) => (
                        <div key={star} className="flex items-center gap-3 mb-2 last:mb-0">
                            <span className="text-sm font-medium text-slate-600 w-12 text-right">{star} star</span>
                            <div className="flex-grow h-2.5 bg-slate-100 rounded-full overflow-hidden">
                                <div 
                                    className="h-full bg-yellow-400 rounded-full"
                                    style={{ width: `${distribution[star]}%` }}
                                />
                            </div>
                            <span className="text-sm text-slate-400 w-10 text-right">{distribution[star]}%</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Individual Reviews */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={review.image} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-brand-100"
                />
                <div>
                  <h3 className="font-bold text-slate-900">{review.name}</h3>
                  <div className="flex items-center gap-1 text-xs text-brand-600 font-medium">
                    <CheckCircle className="w-3 h-3" />
                    Verified Purchase
                  </div>
                </div>
              </div>
              
              <div className="mb-3">
                <StarRating rating={review.rating} size="w-4 h-4" />
              </div>

              <h4 className="font-bold text-slate-800 mb-2">{review.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                "{review.content}"
              </p>
              
              <div className="mt-4 pt-4 border-t border-slate-50 text-xs text-slate-400">
                Reviewed on {review.date}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};