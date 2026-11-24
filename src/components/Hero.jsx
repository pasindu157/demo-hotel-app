import React, { useState } from 'react';
import { Search, MapPin, Calendar, Users, Sparkles } from 'lucide-react';
import { DESTINATIONS } from '../data/hotels';
import { useBooking } from '../context/BookingContext';

export default function Hero({ onSearchSubmit }) {
  const { searchParams, setSearchParams } = useBooking();
  const [destination, setDestination] = useState(searchParams.destination || 'All Destinations');
  const [checkIn, setCheckIn] = useState(searchParams.checkIn || '');
  const [checkOut, setCheckOut] = useState(searchParams.checkOut || '');
  const [guests, setGuests] = useState(searchParams.guests || 2);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchParams((prev) => ({
      ...prev,
      destination,
      checkIn,
      checkOut,
      guests
    }));

    if (onSearchSubmit) {
      onSearchSubmit();
    } else {
      const el = document.getElementById('explore-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="relative overflow-hidden bg-slate-900 text-white py-20 lg:py-28">
      {/* Background Image with Dark Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=80"
          alt="Luxury Hotel Backdrop"
          className="w-full h-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-slate-900/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Floating Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-indigo-300 text-xs sm:text-sm font-medium mb-6 shadow-sm">
          <Sparkles className="w-4 h-4 text-indigo-400" />
          <span>Handpicked 5-Star Resorts & Boutique Villas</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
          Find Your Next <span className="bg-gradient-to-r from-indigo-400 via-sky-300 to-indigo-200 bg-clip-text text-transparent">Extraordinary Stay</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Discover handpicked luxury sanctuaries with zero hidden fees. Experience an instant interactive booking demo built purely on the client side.
        </p>

        {/* Interactive Search Bar Container */}
        <div className="mt-10 max-w-5xl mx-auto">
          <form
            onSubmit={handleSearch}
            className="bg-white p-3 sm:p-4 rounded-3xl shadow-2xl border border-slate-100 text-slate-800 grid grid-cols-1 md:grid-cols-4 gap-3 items-center"
          >
            {/* Destination Selector */}
            <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-slate-50 hover:bg-slate-100/80 transition-colors text-left">
              <MapPin className="w-5 h-5 text-indigo-600 shrink-0" />
              <div className="flex-1 min-w-0">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600">
                  Destination
                </label>
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full bg-transparent text-sm font-semibold text-slate-800 focus:outline-none cursor-pointer truncate"
                >
                  {DESTINATIONS.map((d) => (
                    <option key={d} value={d} className="text-slate-900">
                      {d}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Check-In / Check-Out Dates */}
            <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-slate-50 hover:bg-slate-100/80 transition-colors text-left">
              <Calendar className="w-5 h-5 text-indigo-600 shrink-0" />
              <div className="flex-1 min-w-0">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600">
                  Dates (Simulated)
                </label>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  placeholder="Add dates"
                  className="w-full bg-transparent text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none cursor-pointer"
                />
              </div>
            </div>

            {/* Guests Counter */}
            <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-slate-50 hover:bg-slate-100/80 transition-colors text-left">
              <Users className="w-5 h-5 text-indigo-600 shrink-0" />
              <div className="flex-1">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600">
                  Guests
                </label>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-800">
                    {guests} {guests === 1 ? 'Guest' : 'Guests'}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => setGuests((g) => Math.max(1, g - 1))}
                      className="w-6 h-6 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 flex items-center justify-center text-xs font-bold transition-colors"
                      aria-label="Decrease guests"
                    >
                      -
                    </button>
                    <button
                      type="button"
                      onClick={() => setGuests((g) => Math.min(8, g + 1))}
                      className="w-6 h-6 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 flex items-center justify-center text-xs font-bold transition-colors"
                      aria-label="Increase guests"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Search Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full h-full min-h-[52px] px-6 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-base shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <Search className="w-5 h-5" />
                <span>Search Stays</span>
              </button>
            </div>
          </form>

          {/* Quick suggestions tags */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-400">
            <span className="text-slate-300 font-medium">Trending searches:</span>
            {['Bali', 'Paris', 'Santorini', 'Kyoto', 'Zermatt'].map((place) => (
              <button
                key={place}
                type="button"
                onClick={() => {
                  const match = DESTINATIONS.find((d) => d.toLowerCase().includes(place.toLowerCase()));
                  if (match) {
                    setDestination(match);
                    setSearchParams((prev) => ({ ...prev, destination: match }));
                    const el = document.getElementById('explore-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-slate-200 transition-colors cursor-pointer"
              >
                {place}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
