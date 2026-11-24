import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { HOTELS } from '../data/hotels';
import { useBooking } from '../context/BookingContext';
import BookingModal from '../components/BookingModal';
import {
  Star,
  MapPin,
  Heart,
  ChevronLeft,
  Sparkles,
  Wifi,
  Coffee,
  CheckCircle2,
  Calendar,
  Users,
  ShieldAlert,
  ArrowRight,
  Maximize2,
  Bed,
  Check
} from 'lucide-react';

export default function HotelDetailPage() {
  const { id } = useParams();
  const { toggleFavorite, isFavorite } = useBooking();
  const hotel = HOTELS.find((h) => h.id === id);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedRoomForBooking, setSelectedRoomForBooking] = useState(null);

  if (!hotel) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-slate-800">Property Not Found</h2>
        <p className="text-sm text-slate-500 mt-2 mb-6">
          The hotel you requested could not be located in our demo catalog.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-700 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to All Stays
        </Link>
      </div>
    );
  }

  const favorited = isFavorite(hotel.id);
  const images = hotel.images && hotel.images.length > 0 ? hotel.images : [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in duration-300">
      
      {/* Top Breadcrumb & Actions Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-white px-3.5 py-2 rounded-xl border border-slate-200 transition-all hover:bg-slate-50 shadow-xs"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to Explore</span>
        </Link>

        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-500 hidden sm:inline">
            Property ID: <span className="font-mono text-slate-700">{hotel.id}</span>
          </span>
          <button
            onClick={() => toggleFavorite(hotel.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
              favorited
                ? 'bg-rose-50 border-rose-200 text-rose-600'
                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            <Heart className={`w-4 h-4 ${favorited ? 'fill-rose-500 text-rose-500' : ''}`} />
            <span>{favorited ? 'Saved in Favorites' : 'Save to Favorites'}</span>
          </button>
        </div>
      </div>

      {/* Hotel Title & Header Information */}
      <div className="mb-6">
        <div className="flex flex-wrap items-center gap-2.5 mb-2">
          {hotel.badge && (
            <span className="px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              {hotel.badge}
            </span>
          )}
          <span className="px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold">
            {hotel.category}
          </span>
          <div className="flex items-center gap-1 text-slate-800 font-bold bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/60 text-xs">
            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>{hotel.rating}</span>
            <span className="text-slate-400 font-normal">({hotel.reviewsCount} verified reviews)</span>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          {hotel.name}
        </h1>
        <p className="mt-2 text-sm sm:text-base text-slate-600 flex items-center gap-1.5 font-medium">
          <MapPin className="w-4 h-4 text-indigo-600" />
          {hotel.city}, {hotel.country} • <span className="text-slate-400 font-normal">{hotel.tagline}</span>
        </p>
      </div>

      {/* Image Gallery Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-10">
        {/* Main Large Image */}
        <div className="md:col-span-3 rounded-3xl overflow-hidden aspect-[16/10] bg-slate-100 shadow-sm relative group">
          <img
            src={images[activeImageIndex] || images[0]}
            alt={hotel.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
          />
        </div>

        {/* Thumbnail Selector Column */}
        <div className="grid grid-cols-3 md:grid-cols-1 gap-3">
          {images.slice(0, 3).map((imgUrl, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveImageIndex(idx)}
              className={`relative rounded-2xl overflow-hidden aspect-[16/10] bg-slate-100 transition-all cursor-pointer ${
                activeImageIndex === idx
                  ? 'ring-4 ring-indigo-600 shadow-md scale-98'
                  : 'opacity-70 hover:opacity-100'
              }`}
            >
              <img src={imgUrl} alt="Hotel view" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Main Content & Sidebar Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Left Column (2 Cols): Description, Amenities, Rooms */}
        <div className="lg:col-span-2 space-y-10">
          
          {/* Overview & Description */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-xs space-y-4">
            <h2 className="text-xl font-bold text-slate-900">About this Sanctuary</h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {hotel.description}
            </p>
          </div>

          {/* Highlights & Amenities */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-xs space-y-5">
            <h2 className="text-xl font-bold text-slate-900">What this stay offers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {hotel.amenities.map((amenity) => (
                <div
                  key={amenity}
                  className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100 text-sm font-medium text-slate-700"
                >
                  <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Available Rooms & Suites Section */}
          <div id="rooms-section" className="space-y-6 scroll-mt-24">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                  Available Rooms & Suites
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Choose your preferred suite to trigger the instant booking checkout.
                </p>
              </div>
              <span className="text-xs font-semibold bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-full">
                {hotel.rooms.length} Options Available
              </span>
            </div>

            <div className="space-y-6">
              {hotel.rooms.map((room) => (
                <div
                  key={room.id}
                  className="bg-white rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col md:flex-row"
                >
                  {/* Room Image */}
                  <div className="md:w-64 h-52 md:h-auto shrink-0 relative bg-slate-100">
                    <img
                      src={room.image || hotel.images[0]}
                      alt={room.name}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-900/80 text-white text-[11px] font-medium backdrop-blur-xs">
                      {room.size}
                    </span>
                  </div>

                  {/* Room Details */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h3 className="text-lg font-bold text-slate-900">{room.name}</h3>
                        <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                          <Users className="w-3.5 h-3.5 text-indigo-600" />
                          <span>{room.capacity}</span>
                          <span>•</span>
                          <Bed className="w-3.5 h-3.5 text-indigo-600" />
                          <span>{room.bed}</span>
                        </div>
                      </div>

                      {/* Room Perks list */}
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {room.features.map((feature) => (
                          <span
                            key={feature}
                            className="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-lg bg-slate-50 text-slate-600 font-medium border border-slate-100"
                          >
                            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Room Price & Reserve CTA */}
                    <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-black text-slate-900">
                            ${room.price}
                          </span>
                          <span className="text-xs text-slate-500 font-medium">/ night</span>
                        </div>
                        <span className="text-[11px] text-emerald-600 font-medium">
                          Free cancellation up to 48h
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => setSelectedRoomForBooking(room)}
                        className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-md shadow-indigo-600/20 transition-all hover:scale-102 cursor-pointer flex items-center gap-1.5"
                      >
                        <span>Reserve Room</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hotel Policies Card */}
          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200/80 space-y-4">
            <h3 className="text-base font-bold text-slate-900">Property Policies</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-600">
              <div>
                <span className="font-bold text-slate-800 block mb-0.5">Check-in:</span>
                <span>{hotel.policies.checkIn}</span>
              </div>
              <div>
                <span className="font-bold text-slate-800 block mb-0.5">Check-out:</span>
                <span>{hotel.policies.checkOut}</span>
              </div>
              <div>
                <span className="font-bold text-slate-800 block mb-0.5">Cancellation:</span>
                <span>{hotel.policies.cancellation}</span>
              </div>
              <div>
                <span className="font-bold text-slate-800 block mb-0.5">Pets:</span>
                <span>{hotel.policies.pets}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Sticky Reservation Quick Card */}
        <div className="lg:col-span-1">
          <div className="sticky top-28 bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-lg space-y-5">
            
            {/* Header / Price summary */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Starting Rate
              </span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-3xl font-black text-slate-900">
                  ${hotel.pricePerNight}
                </span>
                <span className="text-xs text-slate-500 font-medium">/ night</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-amber-600 font-bold mt-1">
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                <span>{hotel.rating}</span>
                <span className="text-slate-400 font-normal">({hotel.reviewsCount} reviews)</span>
              </div>
            </div>

            {/* Quick Action Button */}
            <div className="space-y-3 pt-3 border-t border-slate-100">
              <button
                type="button"
                onClick={() => {
                  const defaultRoom = hotel.rooms[0];
                  setSelectedRoomForBooking(defaultRoom);
                }}
                className="w-full py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-xl shadow-indigo-600/25 transition-all hover:scale-[1.02] cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Book This Stay Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById('rooms-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold text-xs border border-slate-200 transition-colors cursor-pointer"
              >
                Compare Room Types
              </button>
            </div>

            {/* Trust bullet points */}
            <div className="pt-4 border-t border-slate-100 space-y-2.5 text-xs text-slate-500">
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>No backend required • 100% Client-side</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Instant reservation record in browser</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Free cancellation in demo manager</span>
              </div>
            </div>

            {/* Demo badge */}
            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200/60 text-xs text-amber-800">
              💡 <strong>Client Tip:</strong> Click "Book This Stay Now" to demo the modal checkout flow.
            </div>

          </div>
        </div>

      </div>

      {/* Booking Checkout Modal */}
      {selectedRoomForBooking && (
        <BookingModal
          hotel={hotel}
          room={selectedRoomForBooking}
          onClose={() => setSelectedRoomForBooking(null)}
        />
      )}

    </div>
  );
}
