import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Heart, ChevronRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { useBooking } from '../context/BookingContext';

export default function HotelCard({ hotel }) {
  const { toggleFavorite, isFavorite } = useBooking();
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const favorited = isFavorite(hotel.id);

  const images = hotel.images && hotel.images.length > 0
    ? hotel.images
    : ['https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'];

  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
      {/* Image Container with Badges */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <img
          src={images[currentImgIndex]}
          alt={hotel.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Floating Badges */}
        <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-2">
          {hotel.badge && (
            <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-xs font-bold text-slate-900 shadow-sm flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              {hotel.badge}
            </span>
          )}
          <span className="px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-xs font-medium text-white shadow-sm">
            {hotel.category}
          </span>
        </div>

        {/* Favorite Heart Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleFavorite(hotel.id);
          }}
          className={`absolute top-3.5 right-3.5 p-2.5 rounded-full backdrop-blur-md transition-all duration-200 shadow-md ${
            favorited
              ? 'bg-rose-50 text-rose-500 hover:scale-110'
              : 'bg-white/80 text-slate-700 hover:bg-white hover:text-rose-500'
          }`}
          aria-label={favorited ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart
            className={`w-4 h-4 transition-transform ${
              favorited ? 'fill-rose-500 text-rose-500 scale-110' : ''
            }`}
          />
        </button>

        {/* Image dot indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 px-4">
            {images.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setCurrentImgIndex(idx);
                }}
                className={`h-1.5 rounded-full transition-all duration-200 ${
                  currentImgIndex === idx
                    ? 'w-5 bg-white shadow-sm'
                    : 'w-1.5 bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Location & Rating */}
          <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
            <span className="flex items-center gap-1 font-medium text-slate-600">
              <MapPin className="w-3.5 h-3.5 text-indigo-600" />
              {hotel.city}, {hotel.country}
            </span>
            <div className="flex items-center gap-1 text-slate-800 font-bold bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/60">
              <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>{hotel.rating}</span>
              <span className="text-slate-400 font-normal">({hotel.reviewsCount})</span>
            </div>
          </div>

          {/* Hotel Name */}
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-1">
            {hotel.name}
          </h3>

          {/* Tagline */}
          <p className="mt-1 text-xs text-slate-500 line-clamp-2 leading-relaxed">
            {hotel.tagline}
          </p>

          {/* Amenities Pills */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {hotel.amenities.slice(0, 3).map((amenity) => (
              <span
                key={amenity}
                className="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-lg bg-slate-50 text-slate-600 font-medium border border-slate-100"
              >
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                {amenity}
              </span>
            ))}
            {hotel.amenities.length > 3 && (
              <span className="text-[11px] px-2 py-1 rounded-lg bg-slate-50 text-slate-400 font-medium">
                +{hotel.amenities.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Card Footer: Price & CTA */}
        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
          <div>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-extrabold text-slate-900">
                ${hotel.pricePerNight}
              </span>
              <span className="text-xs text-slate-500 font-medium">/ night</span>
            </div>
            <span className="text-[11px] text-emerald-600 font-medium">Includes demo taxes</span>
          </div>

          <Link
            to={`/hotel/${hotel.id}`}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-indigo-600 text-white text-xs font-semibold shadow-xs hover:shadow-md transition-all group-hover:gap-2 cursor-pointer"
          >
            <span>View Rooms</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
