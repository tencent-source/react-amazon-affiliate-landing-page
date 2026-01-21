import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: string;
  className?: string;
}

export const StarRating: React.FC<StarRatingProps> = ({ 
  rating, 
  maxRating = 5,
  size = "w-5 h-5",
  className = ""
}) => {
  return (
    <div className={`flex gap-1 ${className}`}>
      {[...Array(maxRating)].map((_, i) => (
        <Star 
          key={i} 
          className={`${size} ${i < Math.round(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-slate-200'}`} 
        />
      ))}
    </div>
  );
};